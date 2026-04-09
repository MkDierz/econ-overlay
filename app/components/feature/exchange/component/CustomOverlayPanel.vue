<script setup lang="ts">
const pinia = usePinia()

const chartStore = useChartStore(pinia)
const overlayStore = useOverlayStore(pinia)

const customOverlay = reactive({
  label: '',
  start: chartStore.fromDate,
  end: chartStore.toDate,
  color: '#16a34a'
})

function addCustomOverlay() {
  const label = customOverlay.label.trim()

  if (!label || !customOverlay.start || !customOverlay.end) {
    return
  }

  overlayStore.addOverlay({
    id: `${slugify(label)}-${customOverlay.start}`,
    label,
    start: customOverlay.start,
    end: customOverlay.end,
    color: customOverlay.color
  })

  customOverlay.label = ''
}

watch(
  () => chartStore.fromDate,
  (value) => {
    customOverlay.start = value
  }
)

watch(
  () => chartStore.toDate,
  (value) => {
    customOverlay.end = value
  }
)
</script>

<template>
  <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
    <div class="flex items-center justify-between gap-3">
      <div>
        <h2 class="text-lg font-semibold text-slate-900">
          Custom overlay
        </h2>
        <p class="mt-1 text-sm text-slate-600">
          Add your own event window on top of the preset.
        </p>
      </div>

      <UButton
        v-if="overlayStore.customOverlays.length > 0"
        color="neutral"
        variant="ghost"
        @click="overlayStore.clearCustomOverlays()"
      >
        Clear
      </UButton>
    </div>

    <UForm
      :state="customOverlay"
      class="mt-4"
    >
      <div class="space-y-3">
        <UFormField
          label="Overlay label"
          name="label"
        >
          <UInput
            v-model="customOverlay.label"
            color="neutral"
            variant="subtle"
            placeholder="Asian Financial Crisis"
          />
        </UFormField>

        <div class="grid gap-3 grid-cols-1">
          <GeneralDatePickerField
            v-model="customOverlay.start"
            label="Start"
            name="start"
            aria-label="Select custom start date"
          />

          <GeneralDatePickerField
            v-model="customOverlay.end"
            label="End"
            name="end"
            aria-label="Select custom end date"
          />
        </div>

        <UFormField
          label="Color"
          name="color"
        >
          <UInput
            v-model="customOverlay.color"
            color="neutral"
            variant="subtle"
            type="color"
          />
        </UFormField>

        <UButton
          block
          color="primary"
          size="lg"
          @click="addCustomOverlay()"
        >
          Add overlay
        </UButton>
      </div>
    </UForm>

    <div
      v-if="overlayStore.customOverlays.length > 0"
      class="mt-4 space-y-2"
    >
      <div
        v-for="overlay in overlayStore.customOverlays"
        :key="overlay.id"
        class="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-3 w-3 rounded-full"
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

        <UButton
          color="error"
          variant="ghost"
          @click="overlayStore.removeOverlay(overlay.id)"
        >
          Remove
        </UButton>
      </div>
    </div>
  </div>
</template>
