<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path == '/'
  },
  {
    label: 'Overlay',
    to: '/overlay',
    active: route.path.startsWith('/overlay')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <span>Economic overlay</span>
    </template>

    <template #right>
      <UNavigationMenu :items="items" />
    </template>
  </UHeader>
</template>
