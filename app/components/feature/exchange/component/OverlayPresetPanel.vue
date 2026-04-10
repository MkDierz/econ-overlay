<script setup lang="ts">
const pinia = usePinia()

const chartStore = useChartStore(pinia)
const overlayStore = useOverlayStore(pinia)
const selectedPresetId = toRef(overlayStore, 'selectedPresetId')

const visibleOverlays = computed(() => {
  return filterOverlaysByRange(
    overlayStore.overlays,
    chartStore.fromDate,
    chartStore.toDate
  )
})

const selectedPreset = computed(() => {
  return overlayStore.selectedPreset
})

const overlayPresetItems = computed(() => {
  return overlayStore.presets.map((preset) => {
    return {
      value: preset.id,
      label: preset.label
    }
  })
})

function applyPreset(presetId: string) {
  overlayStore.selectPreset(presetId)

  const overlays = overlayStore.selectedPreset.overlays

  if (overlays.length === 0) {
    return
  }

  const [firstOverlay, ...restOverlays] = overlays

  if (!firstOverlay) {
    return
  }

  const start = restOverlays.reduce((min, overlay) => {
    return overlay.start < min ? overlay.start : min
  }, firstOverlay.start)

  const end = restOverlays.reduce((max, overlay) => {
    return overlay.end > max ? overlay.end : max
  }, firstOverlay.end)

  chartStore.setDateRange(start, end)
}
</script>

<template>
  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
    <h2 class="text-lg font-semibold text-slate-900">
      Overlay preset
    </h2>
    <p class="mt-1 text-sm text-slate-600">
      Choose a preset, then refine it with custom overlays if you want.
    </p>

    <UForm
      :state="{ selectedPresetId }"
      class="mt-4"
    >
      <UFormField
        label="Preset"
        name="selectedPresetId"
        description="Choose the overlay set to segment the chart."
      >
        <USelect
          :model-value="selectedPresetId"
          arrow
          color="neutral"
          variant="subtle"
          :items="overlayPresetItems"
          class="w-full md:w-fit"
          @update:model-value="applyPreset"
        />
      </UFormField>
    </UForm>

    <p class="mt-3 text-sm text-slate-600">
      {{ selectedPreset.description }}
    </p>

    <div class="mt-4 space-y-3">
      <div
        v-for="overlay in visibleOverlays"
        :key="overlay.id"
        class="rounded-2xl border border-slate-200 px-4 py-3"
      >
        <div class="flex items-start gap-3">
          <span
            class="mt-1 h-3 w-3 rounded-full"
            :style="{ backgroundColor: overlay.color }"
          />
          <div>
            <p class="text-sm font-medium text-slate-900">
              {{ overlay.label }}
            </p>
            <p class="text-xs text-slate-500">
              {{ overlay.start }} to {{ overlay.end }}
            </p>
          </div>
        </div>
      </div>

      <p
        v-if="visibleOverlays.length === 0"
        class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-500"
      >
        No overlays intersect the active date range.
      </p>
    </div>
  </div>
</template>
