export function toDateInputValue(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function defaultFromDate() {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 10)
  return toDateInputValue(date)
}

export function defaultToDate() {
  return toDateInputValue(new Date())
}

export function isTodayOrFuture(date: string) {
  return date >= defaultToDate()
}
