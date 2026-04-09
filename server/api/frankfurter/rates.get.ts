import { getQuery } from 'h3'

interface EconomicData {
  date: string
  value: number
}

interface RatesRow {
  date?: string
  rate?: number
  rates?: Record<string, number | { rate?: number }>
}

interface NdjsonRatesRow {
  date?: string
  quote?: string
  rate?: number
}

type RatesResponse
  = | RatesRow[]
    | {
      data?: RatesRow[]
      rates?: Record<
        string,
        number | Record<string, number | { rate?: number }>
      >
    }

function normalizeRateValue(value: unknown, quote: string): number | null {
  if (typeof value === 'number') {
    return value
  }

  if (value && typeof value === 'object') {
    const nestedValue = (value as Record<string, unknown>)[quote]

    if (typeof nestedValue === 'number') {
      return nestedValue
    }

    if (nestedValue && typeof nestedValue === 'object') {
      const rate = (nestedValue as Record<string, unknown>).rate

      if (typeof rate === 'number') {
        return rate
      }
    }

    const directRate = (value as Record<string, unknown>).rate

    if (typeof directRate === 'number') {
      return directRate
    }
  }

  return null
}

function normalizeRatesResponse(
  response: RatesResponse,
  quote: string
): EconomicData[] {
  if (Array.isArray(response)) {
    return response
      .map((entry) => {
        const date = entry.date
        const rate = normalizeRateValue(entry.rates ?? entry.rate, quote)

        if (!date || rate === null) {
          return null
        }

        return {
          date,
          value: rate
        }
      })
      .filter((entry): entry is EconomicData => entry !== null)
      .sort((a, b) => a.date.localeCompare(b.date))
  }

  if (response.data && Array.isArray(response.data)) {
    return normalizeRatesResponse(response.data, quote)
  }

  const rawRates = response.rates ?? {}

  return Object.entries(rawRates)
    .map(([date, value]) => {
      const rate = normalizeRateValue(value, quote)

      if (rate === null) {
        return null
      }

      return {
        date,
        value: rate
      }
    })
    .filter((entry): entry is EconomicData => entry !== null)
    .sort((a, b) => a.date.localeCompare(b.date))
}

function normalizeNdjsonResponse(
  responseText: string,
  quote: string
): EconomicData[] {
  return responseText
    .split('\n')
    .map((line) => {
      return line.trim()
    })
    .filter(Boolean)
    .map((line) => {
      return JSON.parse(line) as NdjsonRatesRow
    })
    .filter((entry) => {
      return (
        Boolean(entry.date)
        && typeof entry.rate === 'number'
        && (!entry.quote || entry.quote === quote)
      )
    })
    .map((entry) => {
      return {
        date: entry.date as string,
        value: entry.rate as number
      }
    })
    .sort((a, b) => a.date.localeCompare(b.date))
}

function normalizeTextRatesResponse(
  responseText: string,
  quote: string,
  contentType: string | null
): EconomicData[] {
  const trimmed = responseText.trim()

  if (!trimmed) {
    return []
  }

  if (
    contentType?.includes('application/json')
    || trimmed.startsWith('[')
    || trimmed.startsWith('{')
  ) {
    try {
      return normalizeRatesResponse(JSON.parse(trimmed) as RatesResponse, quote)
    } catch {
      // Fall back to NDJSON parsing for object-per-line responses.
    }
  }

  return normalizeNdjsonResponse(trimmed, quote)
}

function toDateInputValue(date: Date) {
  return date.toISOString().slice(0, 10)
}

function addDays(date: string, days: number) {
  const nextDate = new Date(date)
  nextDate.setUTCDate(nextDate.getUTCDate() + days)
  return toDateInputValue(nextDate)
}

function getLatestDate(data: EconomicData[]) {
  return data.reduce<string | null>((latest, entry) => {
    if (!latest || entry.date > latest) {
      return entry.date
    }

    return latest
  }, null)
}

function mergeEconomicData(existing: EconomicData[], incoming: EconomicData[]) {
  const merged = new Map<string, EconomicData>()

  for (const entry of existing) {
    merged.set(entry.date, entry)
  }

  for (const entry of incoming) {
    merged.set(entry.date, entry)
  }

  return [...merged.values()].sort((a, b) => a.date.localeCompare(b.date))
}

async function fetchRatesChunk(
  params: {
    base: string
    quote: string
    from: string
    to?: string
    group?: string
    providers?: string
  }
) {
  const upstreamQuery = new URLSearchParams({
    base: params.base,
    quotes: params.quote,
    from: params.from
  })

  if (params.to) {
    upstreamQuery.set('to', params.to)
  }

  if (params.group) {
    upstreamQuery.set('group', params.group)
  }

  if (params.providers) {
    upstreamQuery.set('providers', params.providers)
  }

  const response = await fetch(
    `https://api.frankfurter.dev/v2/rates?${upstreamQuery.toString()}`,
    {
      headers: {
        Accept: 'application/x-ndjson'
      }
    }
  )

  if (!response.ok) {
    throw createError({
      statusCode: response.status,
      statusMessage: 'Failed to fetch Frankfurter rates'
    })
  }

  const responseText = await response.text()

  return normalizeTextRatesResponse(
    responseText,
    params.quote,
    response.headers.get('content-type')
  )
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const base = String(query.base ?? 'USD')
  const quote = String(query.quote ?? 'IDR')
  const from = String(query.from ?? '')
  const to = typeof query.to === 'string' ? query.to : ''
  const group = typeof query.group === 'string' ? query.group : ''
  const providers = typeof query.providers === 'string' ? query.providers : ''
  const targetDate = to || toDateInputValue(new Date())
  let combinedData: EconomicData[] = []
  let nextFrom = from
  let attempts = 0
  const maxAttempts = 24

  while (nextFrom <= targetDate && attempts < maxAttempts) {
    attempts += 1

    const chunk = await fetchRatesChunk({
      base,
      quote,
      from: nextFrom,
      to,
      group,
      providers
    })

    if (chunk.length === 0) {
      break
    }

    combinedData = mergeEconomicData(combinedData, chunk)

    const latestDate = getLatestDate(chunk)

    if (!latestDate || latestDate >= targetDate) {
      break
    }

    const candidateNextFrom = addDays(latestDate, 1)

    if (candidateNextFrom <= nextFrom) {
      break
    }

    nextFrom = candidateNextFrom
  }

  return combinedData
})
