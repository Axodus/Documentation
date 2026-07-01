import { createHash } from 'node:crypto'

export function normalizeLineEndings(value) {
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

export function sha256(value) {
  return createHash('sha256').update(normalizeLineEndings(value), 'utf8').digest('hex')
}

export function normalizeRelativePath(value) {
  return value.replaceAll('\\', '/').replace(/^\.\//, '')
}

export function stableTimestamp(documents) {
  const dates = documents
    .map((document) => document.metadata?.last_updated)
    .filter((value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))
    .sort()
  return `${dates.at(-1) ?? '1970-01-01'}T00:00:00Z`
}

export function isRfc3339Timestamp(value) {
  return typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(value) &&
    !Number.isNaN(Date.parse(value))
}

export function stableJson(value) {
  return `${JSON.stringify(value, replacer, 2)}\n`
}

function replacer(_key, value) {
  if (!value || Array.isArray(value) || typeof value !== 'object') return value
  return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right)))
}
