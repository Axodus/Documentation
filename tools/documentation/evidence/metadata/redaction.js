import { normalizeText } from '../../generator/serialization/canonical.js'

const SENSITIVE_KEY = [
  'api[_-]?key',
  'authorization',
  'bearer',
  'client[_-]?secret',
  'credential(?:s)?',
  'mnemonic',
  'passphrase',
  'password',
  'passwd',
  'private[_-]?key',
  'pwd',
  'secret',
  'seed(?:[_-]?phrase)?',
  'signing[_-]?(?:key|material)',
  'token',
].join('|')

const TOKEN_PATTERNS = [
  ['KNOWN_TOKEN', /\b(?:AKIA[0-9A-Z]{16}|ASIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9_-]{20,}|xox[baprs]-[A-Za-z0-9-]{10,})\b/g],
  ['JWT', /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g],
]

export function redactBuffer(buffer) {
  const decoded = buffer.toString('utf8')
  if (buffer.includes(0) || decoded.includes('\uFFFD')) {
    return {
      content: '<REDACTED>\n',
      count: 1,
      categories: ['BINARY_CONTENT'],
    }
  }
  return redactText(decoded)
}

export function redactText(source) {
  let content = source.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const counts = new Map()
  const replace = (pattern, category, replacement) => {
    content = content.replace(pattern, (...args) => {
      increment(counts, category)
      return typeof replacement === 'function' ? replacement(...args) : replacement
    })
  }

  replace(
    /-----BEGIN [^-\n]*PRIVATE KEY-----[\s\S]*?-----END [^-\n]*PRIVATE KEY-----/g,
    'PRIVATE_KEY',
    '<REDACTED>',
  )
  replace(
    new RegExp(`^(\\s*(?:[-*]\\s*)?[\\w."'\\x60-]*?(?:${SENSITIVE_KEY})[\\w."'\\x60-]*?\\s*(?::|=)\\s*)(.+)$`, 'gim'),
    'SENSITIVE_ASSIGNMENT',
    (_match, prefix) => `${prefix}<REDACTED>`,
  )
  replace(
    /\b(authorization\s*:\s*(?:bearer|basic)\s+)[^\s"'`]+/gi,
    'AUTHORIZATION',
    (_match, prefix) => `${prefix}<REDACTED>`,
  )
  replace(
    /\b(bearer\s+)[A-Za-z0-9._~+/=-]{8,}/gi,
    'BEARER_TOKEN',
    (_match, prefix) => `${prefix}<REDACTED>`,
  )
  replace(
    /\b(https?:\/\/)([^/\s:@]+):([^@\s/]+)@/gi,
    'URI_CREDENTIAL',
    (_match, protocol) => `${protocol}<REDACTED>:<REDACTED>@`,
  )
  replace(
    /\b((?:mnemonic|seed phrase|recovery phrase)\s+(?:is|equals)\s+)(["']?)[A-Za-z]+(?:\s+[A-Za-z]+){7,}\2/gi,
    'MNEMONIC',
    (_match, prefix) => `${prefix}<REDACTED>`,
  )
  for (const [category, pattern] of TOKEN_PATTERNS) replace(pattern, category, '<REDACTED>')

  return {
    content: normalizeText(content),
    count: [...counts.values()].reduce((total, count) => total + count, 0),
    categories: [...counts.keys()].sort(),
  }
}

function increment(counts, category) {
  counts.set(category, (counts.get(category) ?? 0) + 1)
}
