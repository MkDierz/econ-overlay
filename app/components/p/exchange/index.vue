<script setup lang="ts">
</script>

<template>
  <section class="space-y-6 py-8">
    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div class="flex flex-col gap-4">
        <PExchangeCFilterPanel />
        <PExchangeCChartPanel />
      </div>

      <aside class="space-y-6">
        <PExchangeCOverlayPresetPanel />
        <PExchangeCCustomOverlayPanel />
      </aside>
    </div>
  </section>
</template>
