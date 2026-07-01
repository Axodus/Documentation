export function formatJson(payload, pretty = false) {
  return `${JSON.stringify(sortValue(payload), null, pretty ? 2 : 0)}\n`
}

function sortValue(value) {
  if (Array.isArray(value)) return value.map(sortValue)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortValue(value[key])]))
}
