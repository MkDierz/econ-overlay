import type { Overlay } from '@/stores/overlay'
import type { EconomicData } from '~/stores/chart'

export function filterOverlaysByRange(
  overlays: Overlay[],
  fromDate?: string,
  toDate?: string
) {
  if (!fromDate && !toDate) {
    return overlays
  }

  const from = fromDate ? new Date(fromDate) : null
  const to = toDate ? new Date(toDate) : null

  return overlays.filter((overlay) => {
    const start = new Date(overlay.start)
    const end = new Date(overlay.end)

    if (from && end < from) {
      return false
    }

    if (to && start > to) {
      return false
    }

    return true
  })
}

export function buildAnnotations(overlays: Overlay[]) {
  const annotations: Record<string, unknown> = {}

  overlays.forEach((overlay) => {
    annotations[overlay.id] = {
      type: 'box',
      xMin: overlay.start,
      xMax: overlay.end,
      backgroundColor: overlay.color,
      label: {
        display: true,
        content: overlay.label,
        position: 'start'
      }
    }
  })

  return annotations
}

export function applyOverlays(data: EconomicData[], overlays: Overlay[]) {
  const overlayIds = overlays.map((overlay) => {
    return overlay.id
  })

  const retVal = data.map((d) => {
    const dDate = new Date(d.date)
    const activeOverlay = overlays.find(({ start, end }) => {
      const startDate = new Date(start)
      const endDate = new Date(end)
      return (
        dDate.getTime() >= startDate.getTime()
        && dDate.getTime() <= endDate.getTime()
      )
    })

    const overlayValues = overlayIds.reduce<Record<string, number | null>>(
      (acc, overlayId) => {
        acc[overlayId] = activeOverlay?.id === overlayId ? d.value : null
        return acc
      },
      {}
    )

    return removeEmpty({
      ...d,
      ...overlayValues,
      overlayLabel: activeOverlay?.label ?? null
    })
  })

  return retVal
}
