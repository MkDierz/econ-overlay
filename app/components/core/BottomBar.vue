<script setup lang="ts">
const socialLinks = [
  {
    to: 'https://github.com/MkDierz',
    icon: 'i-simple-icons-github',
    label: 'GitHub'
  },
  {
    to: 'https://www.linkedin.com/in/syibbran-mulaesyi/',
    icon: 'i-simple-icons-linkedin',
    label: 'LinkedIn'
  }
]
</script>

<template>
  <UFooter class="border-t border-slate-200/80">
    <template #left>
      <div class="space-y-1">
        <p class="text-sm font-medium text-slate-700">
          Econ Overlay
        </p>
        <p class="text-sm text-muted">
          Built by Syibbran Mulaesyi • © {{ new Date().getFullYear() }}
        </p>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-1">
        <UButton
          v-for="link in socialLinks"
          :key="link.to"
          :to="link.to"
          target="_blank"
          :icon="link.icon"
          :aria-label="link.label"
          color="neutral"
          variant="ghost"
        />
      </div>
    </template>
  </UFooter>
</template>
