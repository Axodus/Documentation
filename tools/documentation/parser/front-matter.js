import matter from 'gray-matter'
import { basename } from 'node:path'
import {
  CANONICAL_METADATA_ORDER,
  PROFILES,
  SCHEMA_VERSION,
} from '../shared/constants.js'
import {
  normalizeLineEndings,
  normalizeRelativePath,
  sha256,
} from '../shared/canonical.js'

export function parseDocument(source, context = {}) {
  const normalizedSource = normalizeLineEndings(source)
  const sourcePath = normalizeRelativePath(context.sourcePath ?? '<memory>')
  const parsed = matter(normalizedSource)
  const metadataOrder = extractMetadataOrder(normalizedSource)
  const template = isTemplatePath(sourcePath)
  const profile = template
    ? PROFILES.TEMPLATE
    : parsed.data.schema_version === SCHEMA_VERSION
      ? PROFILES.CANONICAL
      : PROFILES.LEGACY

  return {
    sourcePath,
    source: normalizedSource,
    body: parsed.content,
    metadata: parsed.data,
    metadataOrder,
    hasFrontMatter: normalizedSource.startsWith('---\n') && metadataOrder.length > 0,
    title: extractFirstH1(parsed.content),
    profile,
    sha256: sha256(normalizedSource),
  }
}

export function extractMetadataOrder(source) {
  if (!source.startsWith('---\n')) return []
  const end = source.indexOf('\n---\n', 4)
  if (end === -1) return []
  return source
    .slice(4, end)
    .split('\n')
    .filter((line) => line && !/^[\s-]/.test(line) && line.includes(':'))
    .map((line) => line.slice(0, line.indexOf(':')).trim())
}

export function extractFirstH1(body) {
  return body.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim() ?? null
}

export function isTemplatePath(sourcePath) {
  return sourcePath.startsWith('templates/') && basename(sourcePath).endsWith('-TEMPLATE.md')
}

export function hasCanonicalOrder(document) {
  return (
    document.metadataOrder.length === CANONICAL_METADATA_ORDER.length &&
    document.metadataOrder.every((field, index) => field === CANONICAL_METADATA_ORDER[index])
  )
}
