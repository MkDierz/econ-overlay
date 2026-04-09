<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { parseDate } from '@internationalized/date'

const props = withDefaults(defineProps<{
  label: string
  name: string
  description?: string
  modelValue?: string
  ariaLabel?: string
}>(), {
  description: undefined,
  modelValue: '',
  ariaLabel: 'Select date'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputDate = useTemplateRef('inputDate')

function toCalendarDateValue(date: string | null | undefined) {
  return date ? parseDate(date) : undefined
}

function toDateString(date: DateValue | null | undefined) {
  return date ? date.toString() : ''
}

const dateValue = computed<DateValue | undefined>({
  get() {
    return toCalendarDateValue(props.modelValue)
  },
  set(value: DateValue | undefined) {
    emit('update:modelValue', toDateString(value))
  }
})
</script>

<template>
  <UFormField
    :label="label"
    :name="name"
    :description="description"
    class="w-full sm:w-auto"
  >
    <UInputDate
      ref="inputDate"
      v-model="dateValue"
      color="neutral"
      variant="subtle"
      class="w-full sm:w-auto"
    >
      <template #trailing>
        <UPopover :reference="inputDate?.inputsRef[3]?.$el">
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            icon="i-lucide-calendar"
            :aria-label="ariaLabel"
            class="px-0"
          />

          <template #content>
            <UCalendar
              v-model="dateValue"
              class="p-2"
            />
          </template>
        </UPopover>
      </template>
    </UInputDate>
  </UFormField>
</template>
