<script setup lang="ts">
import type { axisFormatter } from 'vue-chrts'
import { LineChart } from 'vue-chrts'
import { watchDebounced } from '@vueuse/core'

const pinia = usePinia()

const chartStore = useChartStore(pinia)
const overlayStore = useOverlayStore(pinia)

const visibleOverlays = computed(() => {
  return filterOverlaysByRange(
    overlayStore.overlays,
    chartStore.fromDate,
    chartStore.toDate
  )
})

const chartData = computed(() => {
  if (visibleOverlays.value.length === 0) {
    return chartStore.data
  }

  return applyOverlays(chartStore.data, visibleOverlays.value)
})

const categories = computed(() => {
  if (visibleOverlays.value.length === 0) {
    return {
      value: {
        name: chartStore.symbol,
        color: '#166534'
      }
    }
  }

  return {
    value: {
      name: chartStore.symbol,
      color: '#f2f2f2'
    },
    ...visibleOverlays.value.reduce(
      (acc, overlay) => {
        acc[overlay.id] = {
          name: overlay.label,
          color: overlay.color
        }

        return acc
      },
      {} as Record<string, globalThis.BulletLegendItemInterface>
    )

  }
})

const xFormatter: axisFormatter = (i: number) => {
  const date = chartData.value[i]?.date as string | undefined
  return date ? formatDateLabel(date) : ''
}

watchDebounced(
  () => [
    chartStore.baseCurrency,
    chartStore.quoteCurrency,
    chartStore.fromDate,
    chartStore.toDate,
    chartStore.groupBy,
    chartStore.provider
  ],
  async () => { await chartStore.fetchRates() },
  { debounce: 300, maxWait: 1000, immediate: true })
</script>

<template>
  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
    <div
      class="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h2 class="text-lg font-semibold text-slate-900">
          Segmented chart
        </h2>
        <p class="text-sm text-slate-600">
          {{ chartData.length }} points · {{ visibleOverlays.length }} active
          overlays
        </p>
      </div>

      <p
        v-if="chartStore.loading || chartStore.loadingMeta"
        class="text-sm font-medium text-emerald-700"
      >
        Refreshing data...
      </p>
    </div>

    <p
      v-if="chartStore.error"
      class="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
    >
      {{ chartStore.error }}
    </p>

    <div
      v-if="chartData.length > 0"
      class="overflow-hidden rounded-2xl border border-slate-100 p-3"
    >
      <LineChart
        :data="chartData"
        :categories="categories"
        :x-formatter="xFormatter"
        :height="360"
        :y-label="chartStore.symbol"
      />
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-12 text-center text-sm text-slate-500"
    >
      No rates available for the selected filters.
    </div>
  </div>
</template>
