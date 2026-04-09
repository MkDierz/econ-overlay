<script setup lang="ts">
import { parseDate, CalendarDate } from '@internationalized/date'

const pinia = usePinia()

const chartStore = useChartStore(pinia)

const groupItems = [
  { value: 'day', label: 'Daily' },
  { value: 'week', label: 'Weekly' },
  { value: 'month', label: 'Monthly' }
]

const providerItems = computed(() => {
  return [
    {
      value: 'all',
      label: 'Blended providers'
    },
    ...chartStore.providers.map((provider) => {
      return {
        value: provider.code,
        label: provider.name
      }
    })
  ]
})

const currencyItems = computed(() => {
  return chartStore.currencies
    .map((currency) => {
      return {
        value: currency.code,
        label: `${currency.code} - ${currency.name}`
      }
    })
    .filter((item, index, items) => {
      return items.findIndex(({ value }) => value === item.value) === index
    })
})

const baseCurrency = toRef(chartStore, 'baseCurrency')
const quoteCurrency = toRef(chartStore, 'quoteCurrency')
const provider = toRef(chartStore, 'provider')
const fromDate = toRef(chartStore, 'fromDate')
const toDate = toRef(chartStore, 'toDate')
const groupBy = toRef(chartStore, 'groupBy')

const rangeProxy = computed({
  get: () => {
    try {
      return {
        start: fromDate.value ? parseDate(fromDate.value) : new CalendarDate(2024, 1, 1),
        end: toDate.value ? parseDate(toDate.value) : new CalendarDate(2024, 1, 31)
      }
    } catch (e) {
      console.error(e)

      return { start: new CalendarDate(2024, 1, 1), end: new CalendarDate(2024, 1, 31) }
    }
  },
  set: (newRange) => {
    fromDate.value = newRange.start.toString()
    toDate.value = newRange.end.toString()
  }
})

const selectableCurrencyItems = computed(() => currencyItems.value.map(i => ({ label: i.label, value: i.value })))

const swapCurrencies = () => {
  const temp = baseCurrency.value
  baseCurrency.value = quoteCurrency.value
  quoteCurrency.value = temp
}

onMounted(async () => {
  if (chartStore.currencies.length === 0 || chartStore.providers.length === 0) {
    await chartStore.fetchMetadata()
  }
})
</script>

<template>
  <UCard
    class="overflow-hidden"
    :ui="{
      body: 'p-4 sm:p-6',
      root: 'ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm rounded-2xl'

    }"
  >
    <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-6">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <UBadge
            color="primary"
            variant="subtle"
            size="sm"
            class="font-bold tracking-wider"
          >
            EXCHANGE OVERLAY
          </UBadge>
        </div>
        <h1 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          {{ chartStore.symbol }} Timeline
        </h1>
      </div>
    </div>

    <UForm
      :state="{ baseCurrency, quoteCurrency, provider, fromDate, toDate, groupBy }"
      class="space-y-6"
    >
      <div class="flex flex-col sm:flex-row items-center gap-4 justify-around">
        <UFormField
          label="Base Currency"
          name="baseCurrency"
          help="Source rate base"
          class="w-full sm:w-auto"
        >
          <USelectMenu
            v-model="baseCurrency"
            :items="selectableCurrencyItems"
            value-attribute="value"
            placeholder="Select base"
            icon="i-lucide-circle-dollar-sign"
            searchable
            size="md"
            value-key="value"
            class="w-full sm:w-auto"
          />
        </UFormField>

        <div class="flex justify-center sm:pt-6">
          <UButton
            icon="i-lucide-arrow-right-left"
            variant="ghost"
            color="neutral"
            class="rotate-90 sm:rotate-0"
            aria-label="Swap Currencies"
            @click="swapCurrencies"
          />
        </div>

        <UFormField
          label="Quote Currency"
          name="quoteCurrency"
          help="Target currency"
          class="w-full sm:w-auto"
        >
          <USelectMenu
            v-model="quoteCurrency"
            :items="selectableCurrencyItems"
            value-attribute="value"
            placeholder="Select quote"
            icon="i-lucide-trending-up"
            searchable
            size="md"
            value-key="value"
            class="w-full sm:w-auto"
          />
        </UFormField>
      </div>

      <USeparator />

      <div class="flex  gap-4">
        <UFormField
          label="Date Range"
          name="provider"
          class="w-full sm:col-span-3"
        >
          <GeneralDateRangePickerWithPresets
            v-model="rangeProxy"
            label="Date Range"
          />
        </UFormField>

        <UFormField
          label="Provider"
          name="provider"
          class="w-full sm:col-span-3"
        >
          <USelectMenu
            v-model="provider"
            :items="providerItems"
            value-attribute="value"
            icon="i-lucide-database"
            value-key="value"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Grouping"
          name="groupBy"
          class="w-full sm:col-span-3"
        >
          <USelectMenu
            v-model="groupBy"
            :items="groupItems"
            value-attribute="value"
            icon="i-lucide-layers"
            value-key="value"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" />
    </UForm>
  </UCard>
</template>

<style scoped>
/* Hide scrollbar for the presets on mobile */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
