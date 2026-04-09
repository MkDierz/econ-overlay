# Frankfurter | Open-source exchange rates API

This documents the new v2 API. For v1 docs, [go here](https://frankfurter.dev/v1/).

Frankfurter tracks daily foreign exchange rates from [over 40 central banks and official sources](https://frankfurter.dev/providers/), covering 160 active currencies.

The public API lives at [api.frankfurter.dev](https://api.frankfurter.dev/). No keys. Use anywhere. You can also [self-host](https://frankfurter.dev/deploy/).

Fetch the latest exchange rates.

```
curl https://api.frankfurter.dev/v2/rates
```

Change the base currency with `base`. Filter target currencies with `quote`.

```
curl https://api.frankfurter.dev/v2/rates?base=USD&quotes=EUR,GBP
```

### Historical Rates

Look up rates for a specific date.

```
curl https://api.frankfurter.dev/v2/rates?date=1999-01-04
```

### Time Series

Fetch rates over a period with `from` and `to`.

```
curl https://api.frankfurter.dev/v2/rates?from=2024-01-01&to=2024-01-05&quotes=USD
```

**Tip:** Narrowing down currencies keeps responses small. For large date ranges, request [NDJSON](#ndjson) to stream results line by line.

### Grouping

Downsample a time series with `group`.

```
curl https://api.frankfurter.dev/v2/rates?from=2024-01-01&group=month
```

### Filtering by Provider

Scope to specific providers with `providers`.

```
curl https://api.frankfurter.dev/v2/rates?providers=ECB
```

By default, rates are blended across all providers. Use `providers` to retrieve rates from a specific source.

### CSV Output

Rates are also available as CSV. Append `.csv` to the path or set the `Accept` header to `text/csv`.

```
curl https://api.frankfurter.dev/v2/rates.csv
```

### NDJSON Output

For large responses, request [NDJSON](https://github.com/ndjson/ndjson-spec) (newline-delimited JSON) by setting the `Accept` header to `application/x-ndjson`. Each line is one independent JSON object, useful for streaming large time series without buffering the entire response.

```
curl https://api.frankfurter.dev/v2/rates?from=2024-01-01
```

## Rate

Get the rate for a single currency pair. Optionally add `date` or `providers`.

```
curl https://api.frankfurter.dev/v2/rate/EUR/USD
```

## Currency

Get details and provider coverage for a single currency.

```
curl https://api.frankfurter.dev/v2/currency/EUR
```

## Currencies

Get available currencies with provider coverage.

```
curl https://api.frankfurter.dev/v2/currencies
```

## Providers

List the data sources behind the API.

```
curl https://api.frankfurter.dev/v2/providers
```

## Conversion

Fetch the rate and convert in your own code.

```
const API = "https://api.frankfurter.dev";

function convert(base, quote, amount) {
  const path = `/v2/rates?base=${base}&quotes=${quote}`;
  fetch(API + path)
    .then((r) => r.json())
    .then((data) => {
      const result = (amount * data[0].rate).toFixed(2);
      alert(`${amount} ${base} = ${result} ${quote}`);
    });
}

convert("EUR", "USD", 10);
```

## Errors

The API returns standard HTTP status codes with a JSON body.

```
{
  "message": "Could not find currency ABC"
}
```

`400`

Invalid parameter or malformed request.

`404`

Currency, rate, or resource not found.

`422`

Request understood but cannot be processed.

## Self-Hosting

You can [self-host with Docker](https://frankfurter.dev/deploy/). See the deploy guide for production setup and API key configuration.

## FAQ

Is the API free for commercial use?

Yes, absolutely. See each provider's terms for details on the underlying data.

Does the API have any call limits?

There are no quotas. Requests are rate-limited to prevent abuse, but there are no monthly or daily caps. For high-volume use, consider caching responses, self-hosting, or querying the datasets directly.

Does the API support GraphQL?

No. The REST API is simple enough that GraphQL would add complexity without much benefit. It would also break edge caching, which keeps the API fast. Use query parameters like `base`, `quotes`, and `from`/`to` to get exactly the data you need.

Is the v1 API being retired?

No. The v1 API will continue to work. See the [v1 documentation](https://frankfurter.dev/v1/).

What is the privacy policy of the API?

The API itself does not collect personal data. However, the public app runs behind Cloudflare for performance, and Cloudflare will collect some basic information for analytics. This does not apply if you run the API privately.

Where can I report a bug or ask a question?

Open an [issue](https://github.com/lineofflight/frankfurter/issues) to report a bug, request a feature, or suggest a new data source. Use [Discussions](https://github.com/lineofflight/frankfurter/discussions) to ask questions or share a library or tool you built with Frankfurter.

How accurate are the rates?

For compliance, filter by a specific provider to get official reference rates. For general use, the default blended rates work well, though the last decimal places may shift as new data comes in.

What happened to [api.frankfurter.app](https://api.frankfurter.app/)?

This domain used to host the older, unversioned API. It now redirects to v1. The response is identical aside from the redirect hop. Please update to the current API.

Why is it called Frankfurter?

Frankfurt is home to the European Central Bank, the original data source of this project.
