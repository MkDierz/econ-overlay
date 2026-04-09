export function removeEmpty<T>(obj: T): T {
  // Handle null/undefined or non-object primitives
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj
      .map(removeEmpty)
      .filter(v => v != null) as unknown as T
  }

  // Handle Objects
  return Object.fromEntries(
    Object.entries(obj as Record<string, unknown>)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
      .filter(([_, v]) => v != null)
  ) as T
}
