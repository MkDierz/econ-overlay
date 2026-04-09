<script setup lang="ts">
</script>

<template>
  <section class="space-y-6 py-8">
    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div class="flex flex-col gap-4">
        <FeatureExchangeComponentFilterPanel />
        <FeatureExchangeComponentChartPanel />
      </div>

      <aside class="space-y-6">
        <FeatureExchangeComponentOverlayPresetPanel />
        <FeatureExchangeComponentCustomOverlayPanel />
      </aside>
    </div>
  </section>
</template>
