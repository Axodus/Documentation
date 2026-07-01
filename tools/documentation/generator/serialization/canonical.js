import { createHash } from 'node:crypto'

export function serializeJson(value) {
  return `${JSON.stringify(sortObjectKeys(value), null, 2)}\n`
}

export function normalizeText(value) {
  return `${String(value).replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n*$/, '')}\n`
}

export function sha256(value) {
  return createHash('sha256').update(String(value), 'utf8').digest('hex')
}

function sortObjectKeys(value) {
  if (Array.isArray(value)) return value.map(sortObjectKeys)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.keys(value)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => [key, sortObjectKeys(value[key])]),
  )
}
