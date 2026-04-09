# Select

> A select element to choose from a list of options.

## Usage

Use the `v-model` directive to control the value of the Select or the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    :items="items"
  />
</template>
```

### Items

Use the `items` prop as an array of strings, numbers or booleans:

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    class="w-48"
    :items="items"
  />
</template>
```

You can also pass an array of objects with the following properties:

- `label?: string`
- [`value?: string`](#value-key)
- [`type?: "label" | "separator" | "item"`](#with-items-type)
- [`icon?: string`](#with-icons-in-items)
- [`avatar?: AvatarProps`](#with-avatar-in-items)
- [`chip?: ChipProps`](#with-chip-in-items)
- `disabled?: boolean`
- `class?: any`
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`

```vue
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref<SelectItem[]>([
  {
    label: 'Backlog',
    value: 'backlog'
  },
  {
    label: 'Todo',
    value: 'todo'
  },
  {
    label: 'In Progress',
    value: 'in_progress'
  },
  {
    label: 'Done',
    value: 'done'
  }
])
</script>

<template>
  <USelect
    model-value="backlog"
    class="w-48"
    :items="items"
  />
</template>
```

> [!CAUTION]
> When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.

You can also pass an array of arrays to the `items` prop to display separated groups of items.

```vue
<script setup lang="ts">
const items = ref<undefined>([
  ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'],
  ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
])
</script>

<template>
  <USelect
    model-value="Apple"
    class="w-48"
    :items="items"
  />
</template>
```

### Value Key

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

```vue
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref<SelectItem[]>([
  {
    label: 'Backlog',
    id: 'backlog'
  },
  {
    label: 'Todo',
    id: 'todo'
  },
  {
    label: 'In Progress',
    id: 'in_progress'
  },
  {
    label: 'Done',
    id: 'done'
  }
])
</script>

<template>
  <USelect
    model-value="backlog"
    value-key="id"
    class="w-48"
    :items="items"
  />
</template>
```

### Multiple

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    multiple
    class="w-48"
    :items="items"
  />
</template>
```

> [!CAUTION]
> Ensure to pass an array to the `default-value` prop or the `v-model` directive.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    placeholder="Select status"
    class="w-48"
    :items="items"
  />
</template>
```

### Content

Use the `content` prop to control how the Select content is rendered, like its `align` or `side` for example.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    class="w-48"
    :items="items"
  />
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    arrow
    class="w-48"
    :items="items"
  />
</template>
```

### Color

Use the `color` prop to change the ring color when the Select is focused.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    color="neutral"
    highlight
    class="w-48"
    :items="items"
  />
</template>
```

> [!NOTE]
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    color="neutral"
    variant="subtle"
    :highlight="false"
    class="w-48"
    :items="items"
  />
</template>
```

### Size

Use the `size` prop to change the size of the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    size="xl"
    class="w-48"
    :items="items"
  />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    icon="i-lucide-search"
    size="md"
    class="w-48"
    :items="items"
  />
</template>
```

### Trailing Icon

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    trailing-icon="i-lucide-arrow-down"
    size="md"
    class="w-48"
    :items="items"
  />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.

### Selected Icon

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    selected-icon="i-lucide-flame"
    size="md"
    class="w-48"
    :items="items"
  />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>([
  'Nuxt',
  'NuxtHub',
  'NuxtLabs',
  'Nuxt Modules',
  'Nuxt Community'
])
</script>

<template>
  <USelect
    model-value="Nuxt"
    class="w-48"
    :items="items"
  />
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    loading
    :trailing="false"
    class="w-48"
    :items="items"
  />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    model-value="Backlog"
    loading
    loading-icon="i-lucide-loader"
    class="w-48"
    :items="items"
  />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Disabled

Use the `disabled` prop to disable the Select.

```vue
<script setup lang="ts">
const items = ref<undefined>(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <USelect
    disabled
    placeholder="Select status"
    class="w-48"
    :items="items"
  />
</template>
```

## Examples

### With items type

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

```vue
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref<SelectItem[]>([
  {
    type: 'label',
    label: 'Fruits'
  },
  'Apple',
  'Banana',
  'Blueberry',
  'Grapes',
  'Pineapple',
  {
    type: 'separator'
  },
  {
    type: 'label',
    label: 'Vegetables'
  },
  'Aubergine',
  'Broccoli',
  'Carrot',
  'Courgette',
  'Leek'
])
</script>

<template>
  <USelect
    model-value="Apple"
    class="w-48"
    :items="items"
  />
</template>
```

### With icon in items

You can use the `icon` property to display an [Icon](/docs/components/icon) inside the items.

```vue [SelectItemsIconExample.vue]
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref([
  {
    label: 'Backlog',
    value: 'backlog',
    icon: 'i-lucide-circle-help'
  },
  {
    label: 'Todo',
    value: 'todo',
    icon: 'i-lucide-circle-plus'
  },
  {
    label: 'In Progress',
    value: 'in_progress',
    icon: 'i-lucide-circle-arrow-up'
  },
  {
    label: 'Done',
    value: 'done',
    icon: 'i-lucide-circle-check'
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

const icon = computed(
  () => items.value.find((item) => item.value === value.value)?.icon
)
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    value-key="value"
    :icon="icon"
    class="w-48"
  />
</template>
```

> [!NOTE]
> In this example, the icon is computed from the `value` property of the selected item.

> [!TIP]
> You can also use the `#leading` slot to display the selected icon.

### With avatar in items

You can use the `avatar` property to display an [Avatar](/docs/components/avatar) inside the items.

```vue [SelectItemsAvatarExample.vue]
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref([
  {
    label: 'benjamincanac',
    value: 'benjamincanac',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'benjamincanac',
      loading: 'lazy' as const
    }
  },
  {
    label: 'romhml',
    value: 'romhml',
    avatar: {
      src: 'https://github.com/romhml.png',
      alt: 'romhml',
      loading: 'lazy' as const
    }
  },
  {
    label: 'noook',
    value: 'noook',
    avatar: {
      src: 'https://github.com/noook.png',
      alt: 'noook',
      loading: 'lazy' as const
    }
  },
  {
    label: 'sandros94',
    value: 'sandros94',
    avatar: {
      src: 'https://github.com/sandros94.png',
      alt: 'sandros94',
      loading: 'lazy' as const
    }
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

const avatar = computed(
  () => items.value.find((item) => item.value === value.value)?.avatar
)
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    value-key="value"
    :avatar="avatar"
    class="w-48"
  />
</template>
```

> [!NOTE]
> In this example, the avatar is computed from the `value` property of the selected item.

> [!TIP]
> You can also use the `#leading` slot to display the selected avatar.

### With chip in items

You can use the `chip` property to display a [Chip](/docs/components/chip) inside the items.

```vue [SelectItemsChipExample.vue]
<script setup lang="ts">
import type { SelectItem, ChipProps } from '@nuxt/ui'

const items = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error'
    }
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success'
    }
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info'
    }
  }
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

function getChip(value: string) {
  return items.value.find((item) => item.value === value)?.chip
}
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    value-key="value"
    class="w-48"
  >
    <template #leading="{ modelValue, ui }">
      <UChip
        v-if="modelValue"
        v-bind="getChip(modelValue)"
        inset
        standalone
        :size="ui.itemLeadingChipSize() as ChipProps['size']"
        :class="ui.itemLeadingChip()"
      />
    </template>
  </USelect>
</template>
```

> [!NOTE]
> In this example, the `#leading` slot is used to display the selected chip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [SelectOpenExample.vue]
<script setup lang="ts">
const open = ref(false)
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')

defineShortcuts({
  o: () => (open.value = !open.value)
})
</script>

<template>
  <USelect
    v-model="value"
    v-model:open="open"
    :items="items"
    class="w-48"
  />
</template>
```

> [!NOTE]
> In this example, leveraging [`defineShortcuts`](/docs/composables/define-shortcuts), you can toggle the Select by pressing .

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the Select.

```vue [SelectIconExample.vue]
<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    :ui="{
      trailingIcon:
        'group-data-[state=open]:rotate-180 transition-transform duration-200'
    }"
    class="w-48"
  />
</template>
```

### With fetched items

You can fetch items from an API and use them in the Select.

```vue [SelectFetchExample.vue]
<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui'

const {
  data: users,
  status,
  execute
} = await useLazyFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'typicode-users',
  transform: (data: { id: number; name: string }[]) => {
    return data?.map((user) => ({
      label: user.name,
      value: String(user.id),
      avatar: {
        src: `https://i.pravatar.cc/120?img=${user.id}`,
        loading: 'lazy' as const
      }
    }))
  },
  immediate: false
})

function getUserAvatar(value: string) {
  return users.value?.find((user) => user.value === value)?.avatar || {}
}

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <USelect
    :items="users"
    :loading="status === 'pending'"
    icon="i-lucide-user"
    placeholder="Select user"
    value-key="value"
    class="w-48"
    @update:open="onOpen"
  >
    <template #leading="{ modelValue, ui }">
      <UAvatar
        v-if="modelValue"
        v-bind="getUserAvatar(modelValue)"
        :size="ui.leadingAvatarSize() as AvatarProps['size']"
        :class="ui.leadingAvatar()"
      />
    </template>
  </USelect>
</template>
```

> [!NOTE]
> This example uses `useLazyFetch` with `immediate: false` to only fetch data when the menu opens, avoiding unnecessary API calls on page load.

### With infinite scroll `4.4+`

You can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable to load more data as the user scrolls.

```vue [SelectInfiniteScrollExample.vue]
<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

type User = {
  firstName: string
}

type UserResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

const skip = ref(0)

const { data, status, execute } = await useLazyFetch(
  'https://dummyjson.com/users?limit=10&select=firstName',
  {
    key: 'select-users-infinite-scroll',
    params: { skip },
    transform: (data?: UserResponse) => {
      return data?.users.map((user) => user.firstName)
    },
    immediate: false
  }
)

const users = ref<string[]>([])

watch(data, () => {
  users.value = [...users.value, ...(data.value || [])]
})

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}

const select = useTemplateRef('select')

onMounted(() => {
  useInfiniteScroll(
    () => select.value?.viewportRef,
    () => {
      skip.value += 10
    },
    {
      canLoadMore: () => {
        return status.value !== 'pending'
      }
    }
  )
})
</script>

<template>
  <USelect
    ref="select"
    placeholder="Select user"
    :items="users"
    @update:open="onOpen"
  />
</template>
```

> [!NOTE]
> This example uses `useLazyFetch` with `immediate: false` so data is only loaded as the user scrolls.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

```vue [SelectContentWidthExample.vue]
<script setup lang="ts">
const value = ref<string>()

const { data: users, execute } = await useLazyFetch(
  'https://jsonplaceholder.typicode.com/users',
  {
    key: 'typicode-users-email',
    transform: (data: { id: number; name: string; email: string }[]) => {
      return data?.map((user) => ({
        label: user.name,
        email: user.email,
        value: String(user.id),
        avatar: {
          src: `https://i.pravatar.cc/120?img=${user.id}`,
          loading: 'lazy' as const
        }
      }))
    },
    immediate: false
  }
)

function onOpen() {
  if (!users.value?.length) {
    execute()
  }
}
</script>

<template>
  <USelect
    v-model="value"
    :items="users"
    placeholder="Select user"
    value-key="value"
    :ui="{ content: 'min-w-fit' }"
    class="w-48"
    @update:open="onOpen"
  >
    <template #item-label="{ item }">
      {{ item.label }}

      <span class="text-muted">
        {{ item.email }}
      </span>
    </template>
  </USelect>
</template>
```

> [!TIP]
> You can also change the content width globally in your `app.config.ts`:
>
> ```text
> export default defineAppConfig({
>   ui: {
>     select: {
>       slots: {
>         content: 'min-w-fit'
>       }
>     }
>   }
> })
>
> ```

## API

### Props

```ts
/**
 * Props for the Select component
 */
interface SelectProps {
  id?: string | undefined
  /**
   * The placeholder text when the select is empty.
   */
  placeholder?: string | undefined
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'neutral'
    | undefined
  variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined
  size?: 'sm' | 'md' | 'xs' | 'lg' | 'xl' | undefined
  /**
   * The icon displayed to open the menu.
   */
  trailingIcon?: any
  /**
   * The icon displayed when an item is selected.
   */
  selectedIcon?: any
  /**
   * The content of the menu.
   */
  content?:
    | (Omit<SelectContentProps, 'as' | 'asChild' | 'forceMount'>
        & Partial<EmitsToProps<SelectContentImplEmits>>)
    | undefined
  /**
   * Display an arrow alongside the menu.
   * `{ rounded: true }`{lang="ts-type"}
   */
  arrow?: boolean | Omit<SelectArrowProps, 'as' | 'asChild'> | undefined
  /**
   * Render the menu in a portal.
   * @default "true"
   */
  portal?: string | boolean | HTMLElement | undefined
  /**
   * When `items` is an array of objects, select the field to use as the value.
   * @default "\"value\" as never"
   */
  valueKey?: VK | undefined
  /**
   * When `items` is an array of objects, select the field to use as the label.
   * @default "\"label\""
   */
  labelKey?: GetItemKeys<T> | undefined
  /**
   * When `items` is an array of objects, select the field to use as the description.
   * @default "\"description\""
   */
  descriptionKey?: GetItemKeys<T> | undefined
  items?: T | undefined
  /**
   * The value of the Select when initially rendered. Use when you do not need to control the state of the Select.
   */
  defaultValue?:
    | _Number<
        _Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>,
        Mod
      >
    | undefined
  /**
   * The controlled value of the Select. Can be bind as `v-model`.
   */
  modelValue?:
    | _Number<
        _Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>,
        Mod
      >
    | undefined
  modelModifiers?: Mod | undefined
  /**
   * Whether multiple options can be selected or not.
   */
  multiple?: M | undefined
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined
  autofocus?: boolean | undefined
  /**
   * @default "0"
   */
  autofocusDelay?: number | undefined
  ui?:
    | {
        base?: ClassNameValue
        leading?: ClassNameValue
        leadingIcon?: ClassNameValue
        leadingAvatar?: ClassNameValue
        leadingAvatarSize?: ClassNameValue
        trailing?: ClassNameValue
        trailingIcon?: ClassNameValue
        value?: ClassNameValue
        placeholder?: ClassNameValue
        arrow?: ClassNameValue
        content?: ClassNameValue
        viewport?: ClassNameValue
        group?: ClassNameValue
        empty?: ClassNameValue
        label?: ClassNameValue
        separator?: ClassNameValue
        item?: ClassNameValue
        itemLeadingIcon?: ClassNameValue
        itemLeadingAvatar?: ClassNameValue
        itemLeadingAvatarSize?: ClassNameValue
        itemLeadingChip?: ClassNameValue
        itemLeadingChipSize?: ClassNameValue
        itemTrailing?: ClassNameValue
        itemTrailingIcon?: ClassNameValue
        itemWrapper?: ClassNameValue
        itemLabel?: ClassNameValue
        itemDescription?: ClassNameValue
      }
    | undefined
  /**
   * When `true`, prevents the user from interacting with Select
   */
  disabled?: boolean | undefined
  /**
   * The controlled open state of the Select. Can be bind as `v-model:open`.
   */
  open?: boolean | undefined
  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean | undefined
  /**
   * Native html input `autocomplete` attribute.
   */
  autocomplete?: string | undefined
  /**
   * The name of the field. Submitted with its owning form as part of a name/value pair.
   */
  name?: string | undefined
  /**
   * When `true`, indicates that the user must set the value before the owning form can be submitted.
   */
  required?: boolean | undefined
  /**
   * Display an icon based on the `leading` and `trailing` props.
   */
  icon?: any
  /**
   * Display an avatar on the left side.
   */
  avatar?: AvatarProps | undefined
  /**
   * When `true`, the icon will be displayed on the left side.
   */
  leading?: boolean | undefined
  /**
   * Display an icon on the left side.
   */
  leadingIcon?: any
  /**
   * When `true`, the icon will be displayed on the right side.
   */
  trailing?: boolean | undefined
  /**
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined
  /**
   * The icon when the `loading` prop is `true`.
   */
  loadingIcon?: any
  form?: string | undefined
  formaction?: string | undefined
  formenctype?: string | undefined
  formmethod?: string | undefined
  formnovalidate?: Booleanish | undefined
  formtarget?: string | undefined
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> This component also supports all native `<button>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Select component
 */
interface SelectSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-description(): any;
  item-trailing(): any;
  content-top(): any;
  content-bottom(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Select component
 */
interface SelectEmits {
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<GetModelValue<T, VK, M, ExcludeItem>, Mod>, Mod>, Mod>]) => void;
  update:open: (payload: [value: boolean]) => void;
  change: (payload: [event: Event]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  focus: (payload: [event: FocusEvent]) => void;
}
```

### Expose

When accessing the component via a template ref, you can use the following:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          triggerRef
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          HTMLButtonElement
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          null
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          viewportRef
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          HTMLDivElement
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          null
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        base: [
          'relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed',
        value: 'truncate pointer-events-none',
        placeholder: 'truncate text-dimmed',
        arrow: 'fill-bg stroke-default',
        content:
          'max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col',
        viewport:
          'relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1',
        group: 'p-1 isolate',
        empty: 'text-center text-muted',
        label: 'font-semibold text-highlighted',
        separator: '-mx-1 my-1 h-px bg-border',
        item: [
          'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
          'transition-colors before:transition-colors'
        ],
        itemLeadingIcon: [
          'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
          'transition-colors'
        ],
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemLeadingChip: 'shrink-0',
        itemLeadingChipSize: '',
        itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        itemTrailingIcon: 'shrink-0',
        itemWrapper: 'flex-1 flex flex-col min-w-0',
        itemLabel: 'truncate',
        itemDescription: 'truncate text-muted'
      },
      variants: {
        fieldGroup: {
          horizontal:
            'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
          vertical:
            'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]'
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-xs gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            label: 'p-1 text-[10px]/3 gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailingIcon: 'size-4',
            empty: 'p-2 text-xs'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-xs gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            label: 'p-1.5 text-[10px]/3 gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemLeadingChip: 'size-4',
            itemLeadingChipSize: 'sm',
            itemTrailingIcon: 'size-4',
            empty: 'p-2.5 text-xs'
          },
          md: {
            base: 'px-2.5 py-1.5 text-sm gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailingIcon: 'size-5',
            empty: 'p-2.5 text-sm'
          },
          lg: {
            base: 'px-3 py-2 text-sm gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            label: 'p-2 text-xs gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemLeadingChip: 'size-5',
            itemLeadingChipSize: 'md',
            itemTrailingIcon: 'size-5',
            empty: 'p-3 text-sm'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6',
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6',
            itemLeadingAvatarSize: 'xs',
            itemLeadingChip: 'size-6',
            itemLeadingChipSize: 'lg',
            itemTrailingIcon: 'size-6',
            empty: 'p-3 text-base'
          }
        },
        variant: {
          outline:
            'text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle:
            'text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated',
          ghost:
            'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        type: {
          file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-primary'
        },
        {
          color: 'secondary',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-secondary'
        },
        {
          color: 'success',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-success'
        },
        {
          color: 'info',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-info'
        },
        {
          color: 'warning',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-warning'
        },
        {
          color: 'error',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-error'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'secondary',
          highlight: true,
          class: 'ring ring-inset ring-secondary'
        },
        {
          color: 'success',
          highlight: true,
          class: 'ring ring-inset ring-success'
        },
        {
          color: 'info',
          highlight: true,
          class: 'ring ring-inset ring-info'
        },
        {
          color: 'warning',
          highlight: true,
          class: 'ring ring-inset ring-warning'
        },
        {
          color: 'error',
          highlight: true,
          class: 'ring ring-inset ring-error'
        },
        {
          color: 'neutral',
          variant: ['outline', 'subtle'],
          class: 'focus:ring-2 focus:ring-inset focus:ring-inverted'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        },
        {
          fixed: false,
          size: 'xs',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'sm',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'md',
          class: 'md:text-sm'
        },
        {
          fixed: false,
          size: 'lg',
          class: 'md:text-sm'
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline'
      }
    }
  }
})
```

# Input

> An input element to enter text.

## Usage

Use the `v-model` directive to control the value of the Input.

```vue
<template>
  <UInput model-value="" />
</template>
```

### Type

Use the `type` prop to change the input type. Defaults to `text`.

Some types have been implemented in their own components such as [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumber](/docs/components/input-number) etc. and others have been styled like `file` for example.

```vue
<template>
  <UInput type="file" />
</template>
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
> You can check all the available types on the MDN Web Docs.

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
  <UInput placeholder="Search..." />
</template>
```

### Color

Use the `color` prop to change the ring color when the Input is focused.

```vue
<template>
  <UInput
    color="neutral"
    highlight
    placeholder="Search..."
  />
</template>
```

> [!NOTE]
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the Input.

```vue
<template>
  <UInput
    color="neutral"
    variant="subtle"
    :highlight="false"
    placeholder="Search..."
  />
</template>
```

### Size

Use the `size` prop to change the size of the Input.

```vue
<template>
  <UInput
    size="xl"
    placeholder="Search..."
  />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/docs/components/icon) inside the Input.

```vue
<template>
  <UInput
    icon="i-lucide-search"
    size="md"
    variant="outline"
    placeholder="Search..."
  />
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
  <UInput
    trailing-icon="i-lucide-at-sign"
    placeholder="Enter your email"
    size="md"
  />
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Input.

```vue
<template>
  <UInput
    size="md"
    variant="outline"
    placeholder="Search..."
  />
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Input.

```vue
<template>
  <UInput
    loading
    :trailing="false"
    placeholder="Search..."
  />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
  <UInput
    loading
    loading-icon="i-lucide-loader"
    placeholder="Search..."
  />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Disabled

Use the `disabled` prop to disable the Input.

```vue
<template>
  <UInput
    disabled
    placeholder="Search..."
  />
</template>
```

## Examples

### With clear button

You can put a [Button](/docs/components/button) inside the `#trailing` slot to clear the Input.

```vue [InputClearButtonExample.vue]
<script setup lang="ts">
const value = ref('Click to clear')
</script>

<template>
  <UInput
    v-model="value"
    placeholder="Type something..."
    :ui="{ trailing: 'pe-1' }"
  >
    <template
      v-if="value?.length"
      #trailing
    >
      <UButton
        color="neutral"
        variant="link"
        size="sm"
        icon="i-lucide-circle-x"
        aria-label="Clear input"
        @click="value = ''"
      />
    </template>
  </UInput>
</template>
```

### With copy button

You can put a [Button](/docs/components/button) inside the `#trailing` slot to copy the value to the clipboard.

```vue [InputCopyButtonExample.vue]
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const value = ref('npx nuxt module add ui')

const { copy, copied } = useClipboard()
</script>

<template>
  <UInput
    v-model="value"
    :ui="{ trailing: 'pr-0.5' }"
  >
    <template
      v-if="value?.length"
      #trailing
    >
      <UTooltip
        text="Copy to clipboard"
        :content="{ side: 'right' }"
      >
        <UButton
          :color="copied ? 'success' : 'neutral'"
          variant="link"
          size="sm"
          :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
          aria-label="Copy to clipboard"
          @click="copy(value)"
        />
      </UTooltip>
    </template>
  </UInput>
</template>
```

### With password toggle

You can put a [Button](/docs/components/button) inside the `#trailing` slot to toggle the password visibility.

```vue [InputPasswordToggleExample.vue]
<script setup lang="ts">
const show = ref(false)
const password = ref('')
</script>

<template>
  <UInput
    v-model="password"
    placeholder="Password"
    :type="show ? 'text' : 'password'"
    :ui="{ trailing: 'pe-1' }"
  >
    <template #trailing>
      <UButton
        color="neutral"
        variant="link"
        size="sm"
        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        :aria-label="show ? 'Hide password' : 'Show password'"
        :aria-pressed="show"
        aria-controls="password"
        @click="show = !show"
      />
    </template>
  </UInput>
</template>

<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
  display: none;
}
</style>
```

### With password strength indicator

You can use the [Progress](/docs/components/progress) component to display the password strength indicator.

```vue [InputPasswordStrengthIndicatorExample.vue]
<script setup lang="ts">
const show = ref(false)
const password = ref('')

function checkStrength(str: string) {
  const requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /\d/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' }
  ]

  return requirements.map((req) => ({
    met: req.regex.test(str),
    text: req.text
  }))
}

const strength = computed(() => checkStrength(password.value))
const score = computed(() => strength.value.filter((req) => req.met).length)

const color = computed(() => {
  if (score.value === 0) return 'neutral'
  if (score.value <= 1) return 'error'
  if (score.value <= 2) return 'warning'
  if (score.value === 3) return 'warning'
  return 'success'
})

const text = computed(() => {
  if (score.value === 0) return 'Enter a password'
  if (score.value <= 2) return 'Weak password'
  if (score.value === 3) return 'Medium password'
  return 'Strong password'
})
</script>

<template>
  <div class="space-y-2">
    <UFormField label="Password">
      <UInput
        v-model="password"
        placeholder="Password"
        :color="color"
        :type="show ? 'text' : 'password'"
        :aria-invalid="score < 4"
        aria-describedby="password-strength"
        :ui="{ trailing: 'pe-1' }"
        class="w-full"
      >
        <template #trailing>
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
            :aria-label="show ? 'Hide password' : 'Show password'"
            :aria-pressed="show"
            aria-controls="password"
            @click="show = !show"
          />
        </template>
      </UInput>
    </UFormField>

    <UProgress
      :color="color"
      :indicator="text"
      :model-value="score"
      :max="4"
      size="sm"
    />

    <p
      id="password-strength"
      class="text-sm font-medium"
    >
      {{ text }}. Must contain:
    </p>

    <ul
      class="space-y-1"
      aria-label="Password requirements"
    >
      <li
        v-for="(req, index) in strength"
        :key="index"
        class="flex items-center gap-0.5"
        :class="req.met ? 'text-success' : 'text-muted'"
      >
        <UIcon
          :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
          class="size-4 shrink-0"
        />

        <span class="text-xs font-light">
          {{ req.text }}
          <span class="sr-only">
            {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
```

### With character limit

You can use the `#trailing` slot to add a character limit to the Input.

```vue [InputCharacterLimitExample.vue]
<script setup lang="ts">
const value = ref('')
const maxLength = 15
</script>

<template>
  <UInput
    v-model="value"
    :maxlength="maxLength"
    aria-describedby="character-count"
    :ui="{ trailing: 'pointer-events-none' }"
  >
    <template #trailing>
      <div
        id="character-count"
        class="text-xs text-muted tabular-nums"
        aria-live="polite"
        role="status"
      >
        {{ value?.length }}/{{ maxLength }}
      </div>
    </template>
  </UInput>
</template>
```

### With keyboard shortcut

You can use the [Kbd](/docs/components/kbd) component inside the `#trailing` slot to add a keyboard shortcut to the Input.

```vue [InputKbdExample.vue]
<script setup lang="ts">
const input = useTemplateRef('input')

defineShortcuts({
  '/': () => {
    input.value?.inputRef?.focus()
  }
})
</script>

<template>
  <UInput
    ref="input"
    icon="i-lucide-search"
    placeholder="Search..."
  >
    <template #trailing>
      <UKbd value="/" />
    </template>
  </UInput>
</template>
```

> [!NOTE]
> See: /composables/define-shortcuts
> This example uses the `defineShortcuts` composable to focus the Input when the key is pressed.

### With mask

There's no built-in support for masks, but you can use libraries like [maska](https://github.com/beholdr/maska) to mask the Input.

```vue [InputMaskExample.vue]
<script setup lang="ts">
import { vMaska } from 'maska/vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <UInput
      v-maska="'#### #### #### ####'"
      placeholder="4242 4242 4242 4242"
      icon="i-lucide-credit-card"
    />

    <div class="flex items-center gap-2">
      <UInput
        v-maska="'##/##'"
        placeholder="MM/YY"
        icon="i-lucide-calendar"
      />
      <UInput
        v-maska="'###'"
        placeholder="CVC"
      />
    </div>
  </div>
</template>
```

### With floating label

You can use the `#default` slot to add a floating label to the Input.

```vue [InputFloatingLabelExample.vue]
<script setup lang="ts">
const value = ref('')
</script>

<template>
  <UInput
    v-model="value"
    placeholder=""
    :ui="{ base: 'peer' }"
  >
    <label
      class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
    >
      <span class="inline-flex bg-default px-1">Email address</span>
    </label>
  </UInput>
</template>
```

### Within a FormField

You can use the Input within a [FormField](/docs/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputFormFieldExample.vue]
<script setup lang="ts">
const email = ref('')
</script>

<template>
  <UFormField
    label="Email"
    help="We won't share your email."
    required
  >
    <UInput
      v-model="email"
      placeholder="Enter your email"
      icon="i-lucide-at-sign"
    />
  </UFormField>
</template>
```

> [!TIP]
> See: /docs/components/form
> It also provides validation and error handling when used within a Form component.

### Within a FieldGroup

You can use the Input within a [FieldGroup](/components/field-group) component to group multiple elements together.

```vue [InputFieldGroupExample.vue]
<script setup lang="ts">
const value = ref('')
const domains = ['.com', '.dev', '.org']
const domain = ref(domains[0])
</script>

<template>
  <UFieldGroup>
    <UInput
      v-model="value"
      placeholder="nuxt"
      :ui="{
        base: 'pl-14.5',
        leading: 'pointer-events-none'
      }"
    >
      <template #leading>
        <p class="text-sm text-muted">https://</p>
      </template>
    </UInput>

    <USelectMenu
      v-model="domain"
      :items="domains"
    />
  </UFieldGroup>
</template>
```

### As a phone number input

You can use the Input within a [FieldGroup](/docs/components/field-group) component alongside a [SelectMenu](/docs/components/select-menu) to create a phone number input with country code selection.

```vue [InputPhoneNumberExample.vue]
<script setup lang="ts">
import { vMaska } from 'maska/vue'

type PhoneCode = {
  name: string
  code: string
  emoji: string
  dialCode: string
  mask: string
}

const phone = ref('')
const countryCode = ref('US')

const {
  data: phoneCodes,
  status,
  execute
} = await useLazyFetch<PhoneCode[]>('/api/phone-codes.json', {
  key: 'api-phone-codes',
  immediate: false
})

const country = computed(() =>
  phoneCodes.value?.find((c) => c.code === countryCode.value)
)
const dialCode = computed(() => country.value?.dialCode || '+1')
const mask = computed(() => country.value?.mask || '(###) ###-####')

function onOpen() {
  if (!phoneCodes.value?.length) {
    execute()
  }
}

watch(countryCode, () => {
  phone.value = ''
})
</script>

<template>
  <UFieldGroup>
    <USelectMenu
      v-model="countryCode"
      :items="phoneCodes"
      value-key="code"
      :search-input="{
        placeholder: 'Search country...',
        icon: 'i-lucide-search',
        loading: status === 'pending'
      }"
      :filter-fields="['name', 'code', 'dialCode']"
      :content="{ align: 'start' }"
      :ui="{
        base: 'pe-8',
        content: 'w-48',
        placeholder: 'hidden',
        trailingIcon: 'size-4'
      }"
      trailing-icon="i-lucide-chevrons-up-down"
      @update:open="onOpen"
    >
      <span class="size-5 flex items-center text-lg">
        {{ country?.emoji || '\u{1F1FA}\u{1F1F8}' }}
      </span>

      <template #item-leading="{ item }">
        <span class="size-5 flex items-center text-lg">
          {{ item.emoji }}
        </span>
      </template>

      <template #item-label="{ item }">
        {{ item.name }} ({{ item.dialCode }})
      </template>
    </USelectMenu>

    <UInput
      v-model="phone"
      v-maska="mask"
      :placeholder="mask.replaceAll('#', '_')"
      :style="{ '--dial-code-length': `${dialCode.length + 1.5}ch` }"
      :ui="{
        base: 'ps-(--dial-code-length)',
        leading: 'pointer-events-none text-base md:text-sm text-muted'
      }"
    >
      <template #leading>
        {{ dialCode }}
      </template>
    </UInput>
  </UFieldGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the Input component
 */
interface InputProps {
  /**
   * The element or component this component should render as.
   */
  as?: any
  id?: string | undefined
  name?: string | undefined
  /**
   * @default "\"text\""
   */
  type?: InputTypeHTMLAttribute | undefined
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string | undefined
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'neutral'
    | undefined
  variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'none' | undefined
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  required?: boolean | undefined
  /**
   * @default "\"off\""
   */
  autocomplete?: (string & {}) | 'on' | 'off' | undefined
  autofocus?: boolean | undefined
  /**
   * @default "0"
   */
  autofocusDelay?: number | undefined
  disabled?: boolean | undefined
  /**
   * Highlight the ring color like a focus state.
   */
  highlight?: boolean | undefined
  /**
   * Keep the mobile text size on all breakpoints.
   */
  fixed?: boolean | undefined
  modelValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined
  defaultValue?: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod> | undefined
  modelModifiers?: Mod | undefined
  ui?:
    | {
        root?: ClassNameValue
        base?: ClassNameValue
        leading?: ClassNameValue
        leadingIcon?: ClassNameValue
        leadingAvatar?: ClassNameValue
        leadingAvatarSize?: ClassNameValue
        trailing?: ClassNameValue
        trailingIcon?: ClassNameValue
      }
    | undefined
  /**
   * Display an icon based on the `leading` and `trailing` props.
   */
  icon?: any
  /**
   * Display an avatar on the left side.
   */
  avatar?: AvatarProps | undefined
  /**
   * When `true`, the icon will be displayed on the left side.
   */
  leading?: boolean | undefined
  /**
   * Display an icon on the left side.
   */
  leadingIcon?: any
  /**
   * When `true`, the icon will be displayed on the right side.
   */
  trailing?: boolean | undefined
  /**
   * Display an icon on the right side.
   */
  trailingIcon?: any
  /**
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined
  /**
   * The icon when the `loading` prop is `true`.
   */
  loadingIcon?: any
  enterKeyHint?:
    | 'search'
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'send'
    | undefined
  form?: string | undefined
  formaction?: string | undefined
  formenctype?: string | undefined
  formmethod?: string | undefined
  formnovalidate?: Booleanish | undefined
  formtarget?: string | undefined
  list?: string | undefined
  max?: Numberish | undefined
  maxlength?: Numberish | undefined
  min?: Numberish | undefined
  minlength?: Numberish | undefined
  pattern?: string | undefined
  readonly?: Booleanish | undefined
  step?: Numberish | undefined
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
> This component also supports all native `<input>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Input component
 */
interface InputSlots {
  leading(): any
  default(): any
  trailing(): any
}
```

### Emits

```ts
/**
 * Emitted events for the Input component
 */
interface InputEmits {
  update:modelValue: (payload: [value: _Number<_Optional<_Nullable<T, Mod>, Mod>, Mod>]) => void;
  blur: (payload: [event: FocusEvent]) => void;
  change: (payload: [event: Event]) => void;
}
```

### Expose

When accessing the component via a template ref, you can use the following:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          inputRef
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          HTMLInputElement
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          null
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    input: {
      slots: {
        root: 'relative inline-flex items-center',
        base: [
          'w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed'
      },
      variants: {
        fieldGroup: {
          horizontal: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none'
          },
          vertical: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none'
          }
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-sm/4 gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'px-3 py-2 text-base/5 gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        },
        variant: {
          outline: 'text-highlighted bg-default ring ring-inset ring-accented',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
          ghost:
            'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        type: {
          file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'secondary',
          highlight: true,
          class: 'ring ring-inset ring-secondary'
        },
        {
          color: 'success',
          highlight: true,
          class: 'ring ring-inset ring-success'
        },
        {
          color: 'info',
          highlight: true,
          class: 'ring ring-inset ring-info'
        },
        {
          color: 'warning',
          highlight: true,
          class: 'ring ring-inset ring-warning'
        },
        {
          color: 'error',
          highlight: true,
          class: 'ring ring-inset ring-error'
        },
        {
          color: 'neutral',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        },
        {
          fixed: false,
          size: 'xs',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'sm',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'md',
          class: 'md:text-sm'
        },
        {
          fixed: false,
          size: 'lg',
          class: 'md:text-sm'
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Input.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/input.ts).

# Form

> A form component with built-in validation and submission handling.

## Usage

Use the Form component to validate form data using any validation library supporting [Standard Schema](https://github.com/standard-schema/standard-schema) such as [Valibot](https://github.com/fabian-hiller/valibot), [Zod](https://github.com/colinhacks/zod), [Regle](https://github.com/victorgarciaesgi/regle), [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) or [Superstruct](https://github.com/ianstormtaylor/superstruct) or your own validation logic.

It works with the [FormField](/docs/components/form-field) component to display error messages around form elements automatically.

### Schema validation

It requires two props:

- `state` - a reactive object holding the form's state.
- `schema` - any [Standard Schema](https://github.com/standard-schema/standard-schema) or [Superstruct](https://github.com/ianstormtaylor/superstruct).

> [!WARNING]
> No validation library is included by default, ensure you install the one you need.

```vue
<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

```vue
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.email('Invalid email'),
  password: z
    .string('Password is required')
    .min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

```vue
<script setup lang="ts">
import { useRegle, type InferInput } from '@regle/core'
import { required, email, minLength, withMessage } from '@regle/rules'
import type { FormSubmitEvent } from '@nuxt/ui'

const { r$ } = useRegle(
  { email: '', password: '' },
  {
    email: { required, email: withMessage(email, 'Invalid email') },
    password: {
      required,
      minLength: withMessage(minLength(8), 'Must be at least 8 characters')
    }
  }
)

type Schema = InferInput<typeof r$>

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="r$"
    :state="r$.$value"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="r$.$value.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="r$.$value.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

```vue
<script setup lang="ts">
import { object, string } from 'yup'
import type { InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

```vue
<script setup lang="ts">
import Joi from 'joi'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required()
})

const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

```vue
<script setup lang="ts">
import { object, string, nonempty, refine } from 'superstruct'
import type { Infer } from 'superstruct'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
  email: nonempty(string()),
  password: refine(string(), 'Password', (value) => {
    if (value.length >= 8) return true
    return 'Must be at least 8 characters'
  })
})

const state = reactive({
  email: '',
  password: ''
})

type Schema = Infer<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

Errors are reported directly to the [FormField](/docs/components/form-field) component based on the `name` or `error-pattern` prop. This means the validation rules defined for the `email` attribute in your schema will be applied to `<FormField name="email">`.

Nested validation rules are handled using dot notation. For example, a rule like `{ user: z.object({ email: z.string() }) }` will be applied to `<FormField name="user.email">`.

### Custom validation

Use the `validate` prop to apply your own validation logic.

The validation function must return a list of errors with the following attributes:

- `message` - the error message to display.
- `name` - the `name` of the `FormField` to send the error to.

> [!TIP]
> It can be used alongside the `schema` prop to handle complex use cases.

```vue [FormExampleBasic.vue]
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

### Input events

The Form component automatically triggers validation when an input emits an `input`, `change`, or `blur` event.

- Validation on `input` occurs **as you type**.
- Validation on `change` occurs when you **commit to a value**.
- Validation on `blur` happens when an input **loses focus**.

You can control when validation happens this using the `validate-on` prop.

> [!TIP]
> The form always validates on submit.

```vue [FormExampleElements.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  input: z.string().min(10),
  inputNumber: z.number().min(10),
  inputMenu: z.any().refine((option) => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  inputMenuMultiple: z
    .any()
    .refine(
      (values) => !!values?.find((option: any) => option.value === 'option-2'),
      {
        message: 'Include Option 2'
      }
    ),
  textarea: z.string().min(10),
  select: z.string().refine((value) => value === 'option-2', {
    message: 'Select Option 2'
  }),
  selectMultiple: z
    .array(z.string())
    .refine((values) => values.includes('option-2'), {
      message: 'Include Option 2'
    }),
  selectMenu: z.any().refine((option) => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  selectMenuMultiple: z
    .any()
    .refine(
      (values) => !!values?.find((option: any) => option.value === 'option-2'),
      {
        message: 'Include Option 2'
      }
    ),
  switch: z.boolean().refine((value) => value === true, {
    message: 'Toggle me'
  }),
  checkbox: z.boolean().refine((value) => value === true, {
    message: 'Check me'
  }),
  radioGroup: z.string().refine((value) => value === 'option-2', {
    message: 'Select Option 2'
  }),
  checkboxGroup: z
    .any()
    .refine(
      (values) => !!values?.find((option: any) => option === 'option-2'),
      {
        message: 'Include Option 2'
      }
    ),
  slider: z.number().max(20, { message: 'Must be less than 20' }),
  pin: z.string().regex(/^\d$/).array().length(5),
  file: z
    .file()
    .min(1)
    .max(1024 * 1024)
    .mime('image/png')
})

type Schema = z.input<typeof schema>

const state = reactive<Partial<Schema>>({})

const form = useTemplateRef('form')

const items = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    ref="form"
    :state="state"
    :schema="schema"
    class="w-full"
    @submit="onSubmit"
  >
    <div class="grid grid-cols-3 gap-4">
      <UFormField
        label="Input"
        name="input"
      >
        <UInput
          v-model="state.input"
          placeholder="john@lennon.com"
          class="w-full"
        />
      </UFormField>

      <div class="flex flex-col gap-4">
        <UFormField name="switch">
          <USwitch
            v-model="state.switch"
            label="Switch me"
          />
        </UFormField>

        <UFormField name="checkbox">
          <UCheckbox
            v-model="state.checkbox"
            label="Check me"
          />
        </UFormField>
      </div>

      <UFormField
        name="slider"
        label="Slider"
      >
        <USlider v-model="state.slider" />
      </UFormField>

      <UFormField
        name="select"
        label="Select"
      >
        <USelect
          v-model="state.select"
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="selectMultiple"
        label="Select (Multiple)"
      >
        <USelect
          v-model="state.selectMultiple"
          multiple
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="selectMenu"
        label="Select Menu"
      >
        <USelectMenu
          v-model="state.selectMenu"
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="selectMenuMultiple"
        label="Select Menu (Multiple)"
      >
        <USelectMenu
          v-model="state.selectMenuMultiple"
          multiple
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="inputMenu"
        label="Input Menu"
      >
        <UInputMenu
          v-model="state.inputMenu"
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="inputMenuMultiple"
        label="Input Menu (Multiple)"
      >
        <UInputMenu
          v-model="state.inputMenuMultiple"
          multiple
          :items="items"
          class="w-full"
        />
      </UFormField>

      <UFormField
        name="inputNumber"
        label="Input Number"
      >
        <UInputNumber
          v-model="state.inputNumber"
          class="w-full"
        />
      </UFormField>

      <UFormField
        label="Textarea"
        name="textarea"
      >
        <UTextarea
          v-model="state.textarea"
          class="w-full"
        />
      </UFormField>
      <div class="flex gap-4">
        <UFormField name="radioGroup">
          <URadioGroup
            v-model="state.radioGroup"
            legend="Radio group"
            :items="items"
          />
        </UFormField>
        <UFormField name="checkboxGroup">
          <UCheckboxGroup
            v-model="state.checkboxGroup"
            legend="Checkbox group"
            :items="items"
          />
        </UFormField>
      </div>
      <UFormField
        name="pin"
        label="Pin Input"
        :error-pattern="/(pin)\..*/"
      >
        <UPinInput v-model="state.pin" />
      </UFormField>

      <UFormField
        name="file"
        label="File Input"
      >
        <UFileUpload
          v-model="state.file"
          label="Drop your image here"
          description="PNG (max. 1MB)"
          class="w-full min-h-44"
        />
      </UFormField>
    </div>

    <div class="flex gap-2 mt-8">
      <UButton type="submit"> Submit </UButton>

      <UButton
        variant="outline"
        @click="form?.clear()"
      >
        Clear
      </UButton>
    </div>
  </UForm>
</template>
```

> [!TIP]
> You can use the [`useFormField`](/docs/composables/use-form-field) composable to implement this inside your own components.

### Error event

You can listen to the `@error` event to handle errors. This event is triggered when the form is submitted and contains an array of `FormError` objects with the following fields:

- `id` - the input's `id`.
- `name` - the `name` of the `FormField`
- `message` - the error message to display.

Here's an example that focuses the first input element with an error after the form is submitted:

```vue [FormExampleOnError.vue]
<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}

async function onError(event: FormErrorEvent) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
    @error="onError"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
```

### HTML5 validation `4.5+`

When calling `form.submit()` programmatically, the Form component automatically triggers native HTML5 validation before submission.

> [!NOTE]
> This is particularly useful when the submit button is outside the form element, such as in a modal footer.

```vue [FormExampleHtml5Validation.vue]
<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  age: undefined
})

type Schema = typeof state

const form = useTemplateRef('form')

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <div class="space-y-4">
    <UForm
      ref="form"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          type="email"
          required
        />
      </UFormField>

      <UFormField
        label="Age"
        name="age"
      >
        <UInput
          v-model="state.age"
          type="number"
          min="18"
          max="100"
          required
        />
      </UFormField>
    </UForm>

    <UButton @click="form?.submit()"> Submit </UButton>
  </div>
</template>
```

### Nesting forms

Use the `nested` prop to nest multiple Form components and link their validation functions. In this case, validating the parent form will automatically validate all the other forms inside it.

Nested forms directly inherit their parent's state, so you don't need to define a separate state for them. You can use the `name` prop to target a nested attribute within the parent's state.

It can be used to dynamically add fields based on user's input:

```vue [FormExampleNested.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string().min(2),
  news: z.boolean().default(false)
})

type Schema = z.output<typeof schema>

const nestedSchema = z.object({
  email: z.email()
})

type NestedSchema = z.output<typeof nestedSchema>

const state = reactive<Partial<Schema & NestedSchema>>({})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    ref="form"
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <UFormField
      label="Name"
      name="name"
    >
      <UInput
        v-model="state.name"
        placeholder="John Lennon"
      />
    </UFormField>

    <div>
      <UCheckbox
        v-model="state.news"
        name="news"
        label="Register to our newsletter"
        @update:model-value="state.email = undefined"
      />
    </div>

    <UForm
      v-if="state.news"
      :schema="nestedSchema"
      nested
    >
      <UFormField
        label="Email"
        name="email"
      >
        <UInput
          v-model="state.email"
          placeholder="john@lennon.com"
        />
      </UFormField>
    </UForm>

    <div>
      <UButton type="submit"> Submit </UButton>
    </div>
  </UForm>
</template>
```

Or to validate list inputs:

```vue [FormExampleNestedList.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  customer: z.string().min(2)
})

type Schema = z.output<typeof schema>

const itemSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0)
})

type ItemSchema = z.output<typeof itemSchema>

const state = reactive<Partial<Schema & { items: Partial<ItemSchema>[] }>>({})

function addItem() {
  if (!state.items) {
    state.items = []
  }
  state.items.push({})
}

function removeItem() {
  if (state.items) {
    state.items.pop()
  }
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success'
  })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <UFormField
      label="Customer"
      name="customer"
    >
      <UInput
        v-model="state.customer"
        placeholder="Wonka Industries"
      />
    </UFormField>

    <UForm
      v-for="(item, count) in state.items"
      :key="count"
      :name="`items.${count}`"
      :schema="itemSchema"
      class="flex gap-2"
      nested
    >
      <UFormField
        :label="!count ? 'Description' : undefined"
        name="description"
      >
        <UInput v-model="item.description" />
      </UFormField>
      <UFormField
        :label="!count ? 'Price' : undefined"
        name="price"
        class="w-20"
      >
        <UInput
          v-model="item.price"
          type="number"
        />
      </UFormField>
    </UForm>

    <div class="flex gap-2">
      <UButton
        color="neutral"
        variant="subtle"
        size="sm"
        @click="addItem()"
      >
        Add Item
      </UButton>

      <UButton
        color="neutral"
        variant="ghost"
        size="sm"
        @click="removeItem()"
      >
        Remove Item
      </UButton>
    </div>
    <div>
      <UButton type="submit"> Submit </UButton>
    </div>
  </UForm>
</template>
```

## API

### Props

```ts
/**
 * Props for the Form component
 */
interface FormProps {
  id?: string | number | undefined
  /**
   * Schema to validate the form state. Supports Standard Schema objects, Yup, Joi, and Superstructs.
   */
  schema?: S | undefined
  /**
   * An object representing the current state of the form.
   */
  state?: (N extends false ? Partial<InferInput<S>> : never) | undefined
  /**
   * Custom validation function to validate the form state.
   */
  validate?:
    | ((
        state: Partial<InferInput<S>>
      ) => FormError<string>[] | Promise<FormError<string>[]>)
    | undefined
  /**
   * The list of input events that trigger the form validation.
   */
  validateOn?: FormInputEvents[] | undefined
  /**
   * Disable all inputs inside the form.
   */
  disabled?: boolean | undefined
  /**
   * Path of the form's state within it's parent form.
   * Used for nesting forms. Only available if `nested` is true.
   */
  name?: (N extends true ? string : never) | undefined
  /**
   * Delay in milliseconds before validating the form on input events.
   * @default "300"
   */
  validateOnInputDelay?: number | undefined
  /**
   * If true, applies schema transformations on submit.
   * @default "true as T"
   */
  transform?: T | undefined
  /**
   * If true, this form will attach to its parent Form and validate at the same time.
   */
  nested?: N | undefined
  /**
   * When `true`, all form elements will be disabled on `@submit` event.
   * This will cause any focused input elements to lose their focus state.
   * @default "true"
   */
  loadingAuto?: boolean | undefined
  ui?: { base?: any } | undefined
  acceptcharset?: string | undefined
  action?: string | undefined
  autocomplete?: string | undefined
  enctype?: string | undefined
  method?: string | undefined
  novalidate?: Booleanish | undefined
  target?: string | undefined
}
```

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes
> This component also supports all native `<form>` HTML attributes.

### Slots

```ts
/**
 * Slots for the Form component
 */
interface FormSlots {
  default(): any
}
```

### Emits

```ts
/**
 * Emitted events for the Form component
 */
interface FormEmits {
  submit: (payload: [event: FormSubmitEvent<FormData<S, T>>]) => void
  error: (payload: [event: FormErrorEvent]) => void
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

This will give you access to the following:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          submit
        </span>
        
        <span class="sMK4o">
          ()
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Promise
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          void
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          Triggers form submission with HTML5 validation.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          validate
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          opts
        </span>
        
        <span class="sMK4o">
          :
        </span>
        
        <span class="sMK4o">
          {
        </span>
        
        <span class="swJcz">
          name
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sTEyZ">
          (
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sTEyZ">
          )[]
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          silent
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          nested
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="swJcz">
          transform
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          })
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Promise
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          Triggers form validation. Will raise any errors unless <code>opts.silent</code> is set to true.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          clear
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          path
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code>
        void
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          Clears form errors associated with a specific path. If no path is provided, clears all form errors.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          getErrors
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          path
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          FormError
        </span>
        
        <span class="sTEyZ">
          []
        </span>
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          setErrors
        </span>
        
        <span class="sMK4o">
          (
        </span>
        
        <span class="sHdIc">
          errors
        </span>
        
        <span class="sMK4o">
          :
        </span>
        
        <span class="sBMFI">
          FormError
        </span>
        
        <span class="sTEyZ">
          []
        </span>
        
        <span class="sMK4o">
          ,
        </span>
        
        <span class="sHdIc">
          name
        </span>
        
        <span class="sMK4o">
          ?:
        </span>
        
        <span class="sMK4o">
          keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          |
        </span>
        
        <span class="sBMFI">
          RegExp
        </span>
        
        <span class="sMK4o">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code>
        void
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          Sets form errors for a given path. If no path is provided, overrides all errors.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          errors
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          FormError
        </span>
        
        <span class="sTEyZ">
          []
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <br />
      
       <div className="text-toned,mt-1">
        <p>
          A reference to the array containing validation errors. Use this to access or manipulate the error information.
        </p>
      </div>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          disabled
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          dirty
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          Ref
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          boolean
        </span>
        
        <span class="sMK4o">
          >
        </span>
      </code>
      
       <code>
        true
      </code>
      
       if at least one form field has been updated by the user.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          dirtyFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          Set
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields that have been modified by the user.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          touchedFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          Set
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields that the user interacted with.
    </td>
  </tr>
  
  <tr>
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          blurredFields
        </span>
      </code>
    </td>
    
    <td>
      <code className="language-ts-type shiki shiki-themes material-theme-lighter material-theme material-theme-palenight" language="ts-type" style="">
        <span class="sBMFI">
          DeepReadonly
        </span>
        
        <span class="sMK4o">
          <
        </span>
        
        <span class="sBMFI">
          Set
        </span>
        
        <span class="sMK4o">
          <keyof
        </span>
        
        <span class="sBMFI">
          T
        </span>
        
        <span class="sMK4o">
          >>
        </span>
      </code>
      
       Tracks fields blurred by the user.
    </td>
  </tr>
</tbody>
</table>

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    form: {
      base: ''
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/nuxt/ui/commits/v4/src/runtime/components/Form.vue) and [theme](https://github.com/nuxt/ui/commits/v4/src/theme/form.ts).
