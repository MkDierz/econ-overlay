<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import { today, getLocalTimeZone } from '@internationalized/date'

// 1. Props & Emits
const props = defineProps<{
  modelValue: { start: CalendarDate, end: CalendarDate }
  years?: number[]
}>()

const emit = defineEmits(['update:modelValue'])

// 2. Internal State/Refs
const inputDate = useTemplateRef('inputDate')
const now = today(getLocalTimeZone())

// 3. Computed Model (Standard v-model pattern)
const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

// 4. Default Year Presets (overridable via props)
const presetYears = computed(() => props.years || [1, 5, 15, 20, 25, 30])

const yearPresets = computed(() => {
  return presetYears.value.map(years => ({
    label: `Last ${years} years`,
    value: years,
    click: () => {
      value.value = {
        start: now.subtract({ years }),
        end: now
      }
    }
  }))
})
</script>

<template>
  <UInputDate
    ref="inputDate"
    v-model="value"
    range
  >
    <template #trailing>
      <UPopover :reference="inputDate?.inputsRef[0]?.$el">
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          icon="i-lucide-calendar"
          aria-label="Select a date range"
          class="px-0"
        />

        <template #content>
          <div class="flex flex-col md:flex-row bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow">
            <!-- Sidebar Presets -->
            <div class="flex flex-col p-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 gap-1 min-w-32">
              <span class="text-[10px] font-bold uppercase text-gray-400 px-2 py-1">Presets</span>
              <UButton
                v-for="preset in yearPresets"
                :key="preset.value"
                :label="preset.label"
                color="neutral"
                variant="ghost"
                size="sm"
                class="justify-start font-normal"
                @click="preset.click"
              />
            </div>

            <!-- Calendar -->
            <UCalendar
              v-model="value"
              class="p-2"
              :number-of-months="2"
              range
            />
          </div>
        </template>
      </UPopover>
    </template>
  </UInputDate>
</template>
