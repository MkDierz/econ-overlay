import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface EconomicData {
  date: string
  value: number
}

export interface CurrencyOption {
  code: string
  name: string
}

export interface ProviderOption {
  code: string
  name: string
}

export interface Currency {
  iso_code: string
  iso_numeric: string
  name: string
  symbol: string
  start_date: string
  end_date: string
}

type GroupBy = 'day' | 'week' | 'month'

export const useChartStore = defineStore('chart', () => {
  const baseCurrency = ref('USD')
  const quoteCurrency = ref('IDR')
  const fromDate = ref(defaultFromDate())
  const toDate = ref(defaultToDate())
  const groupBy = ref<GroupBy>('month')
  const provider = ref('all')
  const data = ref<EconomicData[]>([])
  const currencies = ref<CurrencyOption[]>([])
  const providers = ref<ProviderOption[]>([])
  const loading = ref(false)
  const loadingMeta = ref(false)
  const error = ref<string | null>('')

  const symbol = computed(() => {
    return `${quoteCurrency.value}/${baseCurrency.value}`
  })

  const providerParam = computed(() => {
    return provider.value === 'all' ? null : provider.value
  })

  async function fetchMetadata() {
    loadingMeta.value = true

    try {
      const [currenciesResponse, providersResponse] = await Promise.all([
        $fetch<Array<Currency>>(
          'https://api.frankfurter.dev/v2/currencies'
        ),
        $fetch<Array<string | { code?: string, name?: string }>>(
          'https://api.frankfurter.dev/v2/providers'
        )
      ])

      currencies.value = currenciesResponse
        .map(({ iso_code, name }) => {
          return {
            code: iso_code,
            name
          }
        })
        .sort((a, b) => a.code.localeCompare(b.code))

      providers.value = providersResponse
        .map((providerEntry) => {
          if (typeof providerEntry === 'string') {
            return {
              code: providerEntry,
              name: providerEntry
            }
          }

          return {
            code: providerEntry.code ?? providerEntry.name ?? '',
            name: providerEntry.name ?? providerEntry.code ?? 'Unknown'
          }
        })
        .filter((providerEntry) => {
          return providerEntry.code
        })
    } catch (fetchError) {
      console.error(fetchError)
    } finally {
      loadingMeta.value = false
    }
  }

  function setRangePreset(preset: string) {
    const today = new Date()
    toDate.value = toDateInputValue(today)

    if (preset === 'max') {
      fromDate.value = '1980-01-04'
      return
    }

    const yearsToSubtract
      = typeof preset === 'number' ? preset : parseInt(preset, 10)

    if (isNaN(yearsToSubtract)) return

    const from = new Date(today)
    from.setFullYear(from.getFullYear() - yearsToSubtract)
    fromDate.value = toDateInputValue(from)
  }

  function setDateRange(start: string, end: string) {
    fromDate.value = start
    toDate.value = end
  }

  async function fetchRates() {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<EconomicData[]>(
        '/api/frankfurter/rates',
        {
          query: {
            base: baseCurrency.value,
            quote: quoteCurrency.value,
            from: fromDate.value,
            to: !isTodayOrFuture(toDate.value) ? toDate.value : undefined,
            group: groupBy.value !== 'day' ? groupBy.value : undefined,
            providers: providerParam.value ?? undefined
          }
        }
      )

      data.value = response
    } catch (fetchError) {
      console.error(fetchError)
      error.value
        = fetchError instanceof Error
          ? fetchError.message
          : 'Failed to fetch exchange rates'
      data.value = [] as EconomicData[]
    } finally {
      loading.value = false
    }
  }

  return {
    baseCurrency,
    quoteCurrency,
    fromDate,
    toDate,
    groupBy,
    provider,
    data,
    currencies,
    providers,
    loading,
    loadingMeta,
    error,
    symbol,
    providerParam,
    fetchMetadata,
    setRangePreset,
    setDateRange,
    fetchRates
  }
})
