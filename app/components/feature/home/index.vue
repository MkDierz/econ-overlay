<script setup lang="ts">
const highlights = [
  {
    title: 'Dynamic exchange filters',
    description:
      'Pick the base currency, quote currency, provider, grouping, and time range you want to inspect.'
  },
  {
    title: 'Historical overlay presets',
    description:
      'Compare exchange-rate movement across curated eras like Indonesian presidential terms.'
  },
  {
    title: 'Custom event windows',
    description:
      'Add your own overlays for crises, policy shifts, elections, or any dates you want to track.'
  }
]

const workflow = [
  'Choose a currency pair and date window.',
  'Apply a preset overlay or create your own event range.',
  'Inspect how the time series behaves across those historical segments.'
]

const stats = [
  {
    label: 'Data source',
    value: 'Frankfurter v2'
  },
  {
    label: 'Preset-ready view',
    value: 'Political eras'
  },
  {
    label: 'Custom context',
    value: 'User-defined overlays'
  }
]
</script>

<template>
  <div class="space-y-16 py-10 md:py-14">
    <section class="relative overflow-hidden rounded-4xl border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.16),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#ecfdf5_45%,#ffffff_100%)] px-6 py-10 shadow-sm md:px-10 md:py-14">
      <div class="absolute -right-20 top-8 h-44 w-44 rounded-full bg-emerald-200/40 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-amber-200/40 blur-2xl" />

      <div class="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
        <div class="space-y-6">
          <UBadge
            color="primary"
            variant="subtle"
            class="rounded-full px-3 py-1"
          >
            Exchange Rates with Historical Context
          </UBadge>

          <div class="space-y-4">
            <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              See currency movement through the lens of real-world events.
            </h1>
            <p class="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Econ Overlay helps you explore exchange-rate history with filters, preset era overlays,
              and custom event ranges so the chart tells more than just a line.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="/overlay"
              size="xl"
              color="primary"
              icon="i-lucide-chart-spline"
            >
              Open Overlay Explorer
            </UButton>

            <UButton
              to="https://frankfurter.dev"
              target="_blank"
              size="xl"
              color="neutral"
              variant="subtle"
              icon="i-lucide-external-link"
            >
              View Data Source
            </UButton>
          </div>
        </div>

        <div class="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur">
          <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {{ stat.label }}
              </p>
              <p class="mt-2 text-lg font-semibold text-slate-900">
                {{ stat.value }}
              </p>
            </div>
          </div>

          <div class="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
            <p class="text-sm font-medium text-emerald-900">
              Built for contextual chart reading
            </p>
            <p class="mt-2 text-sm leading-6 text-emerald-800">
              Instead of staring at one long series, you can break the trend into meaningful historical windows and compare shifts more clearly.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article
        v-for="highlight in highlights"
        :key="highlight.title"
        class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <UIcon
            name="i-lucide-chart-column-big"
            class="h-5 w-5"
          />
        </div>
        <h2 class="text-lg font-semibold text-slate-900">
          {{ highlight.title }}
        </h2>
        <p class="mt-2 text-sm leading-6 text-slate-600">
          {{ highlight.description }}
        </p>
      </article>
    </section>

    <section class="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          How It Works
        </p>
        <h2 class="mt-3 text-2xl font-semibold text-slate-900">
          Build context around the chart in three steps.
        </h2>

        <div class="mt-6 space-y-4">
          <div
            v-for="(step, index) in workflow"
            :key="step"
            class="flex gap-4 rounded-2xl border border-slate-200 p-4"
          >
            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {{ index + 1 }}
            </div>
            <p class="pt-1 text-sm leading-6 text-slate-600">
              {{ step }}
            </p>
          </div>
        </div>
      </div>

      <div class="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-50 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Why It Matters
        </p>
        <h2 class="mt-3 text-2xl font-semibold">
          Historical context makes exchange data easier to interpret.
        </h2>
        <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Exchange-rate charts often hide the story behind the movement. Econ Overlay helps surface that story by combining price data with political eras and user-defined events, making it easier to spot regime shifts, market stress, or policy-driven transitions.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm font-medium text-white">
              Research-friendly
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-300">
              Good for exploring hypotheses around exchange-rate behavior across long time horizons.
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-sm font-medium text-white">
              Flexible inputs
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-300">
              Swap currencies, adjust grouping, and add event windows without leaving the chart view.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-8">
      <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Ready to Explore
          </p>
          <h2 class="mt-2 text-2xl font-semibold text-slate-900">
            Jump into the overlay workspace and start comparing timelines.
          </h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            The main explorer is already wired for preset overlays, custom ranges, and live currency filters.
          </p>
        </div>

        <UButton
          to="/overlay"
          size="xl"
          color="primary"
          trailing-icon="i-lucide-arrow-right"
        >
          Go to Overlay
        </UButton>
      </div>
    </section>
  </div>
</template>
