# Econ Overlay

`Econ Overlay` is a Nuxt application for exploring exchange-rate time series with contextual overlays. It focuses on currency charts from Frankfurter and lets you segment the data with preset or custom historical periods.

## What It Does

- Fetches exchange-rate data from Frankfurter v2
- Lets you choose base currency, quote currency, provider, grouping, and date range
- Supports quick range presets including `Max`
- Applies overlay presets such as Indonesian presidential eras
- Lets you add and remove custom overlays
- Uses a server-side proxy so rate fetching stays consistent and large responses can be normalized safely

## Main Route

- `/overlay` renders the exchange overlay experience

## Project Structure

```text
app/
  components/
    feature/
      exchange/
        component/
          ChartPanel.vue
          CustomOverlayPanel.vue
          FilterPanel.vue
          OverlayPresetPanel.vue
        index.vue
    general/
      DatePickerField.vue
      DateRangePickerWithPresets.vue
  pages/
    overlay/
      index.vue
  stores/
    chart.ts
    overlay.ts
server/
  api/
    frankfurter/
      rates.get.ts
```

## Architecture Notes

### `chart` store

[chart.ts](/home/dierz/Projects/Other/econ-overlay/app/stores/chart.ts) manages:

- selected base and quote currencies
- provider selection
- date range and grouping
- fetched exchange-rate data
- currency and provider metadata
- loading and error state

The store is implemented with Pinia's setup-style API, so shared filter values are stored as refs and can be reused directly across components.

### `overlay` store

[overlay.ts](/home/dierz/Projects/Other/econ-overlay/app/stores/overlay.ts) manages:

- built-in overlay presets
- the currently selected preset
- user-created custom overlays
- the merged overlay list used by the chart

### Server API proxy

[rates.get.ts](/home/dierz/Projects/Other/econ-overlay/server/api/frankfurter/rates.get.ts) proxies requests to Frankfurter and:

- requests NDJSON when available
- normalizes both JSON and NDJSON responses
- refetches forward when the upstream provider does not return the full requested range in one response
- returns a consistent `EconomicData[]` payload to the client

## Tech Stack

- Nuxt 4
- Vue 3
- Pinia
- Nuxt UI
- Nuxt Charts
- Tailwind CSS 4

## Development

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun dev
```

The app runs locally at:

```text
http://localhost:3000
```

## Quality Checks

Run linting:

```bash
bun lint
```

Run type checking:

```bash
bun typecheck
```

## Production

Build for production:

```bash
bun build
```

Preview the production build locally:

```bash
bun preview
```

## Future Improvements

- URL-synced filters for shareable chart links
- additional economic or political overlay libraries
- better chart annotations and comparison views
- cached server responses for heavy historical queries
