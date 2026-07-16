import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import matter from 'gray-matter'
import {
  DISPLAY_STATUSES,
  STATUS_PRESENTATION,
  resolveDisplayStatus
} from '../../../docs/.vitepress/theme/status.ts'

const root = path.resolve(import.meta.dirname, '../../..')
const docsRoot = path.join(root, 'docs')

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (['.vitepress', 'public'].includes(entry.name)) return []
    const absolutePath = path.join(directory, entry.name)
    return entry.isDirectory() ? markdownFiles(absolutePath) : entry.name.endsWith('.md') ? [absolutePath] : []
  })
}

function legacyStatus(content) {
  return content.match(/^# .+\r?\n(?:\r?\n)?Status:\s*([^\r\n]+)/m)?.[1]?.trim()
}

function luminance(hex) {
  const channels = hex.match(/../g).map((value) => Number.parseInt(value, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

test('all public pages resolve to exactly one governed badge', () => {
  const counts = new Map()
  const files = markdownFiles(docsRoot)

  for (const file of files) {
    const parsed = matter(readFileSync(file, 'utf8'))
    const relativePath = path.relative(docsRoot, file).split(path.sep).join('/')
    const resolution = resolveDisplayStatus({
      ...parsed.data,
      legacy_status: legacyStatus(parsed.content)
    }, relativePath)

    assert.equal(resolution.state, 'RESOLVED', relativePath)
    counts.set(resolution.status, (counts.get(resolution.status) ?? 0) + 1)
  }

  assert.equal(files.length, 269)
  assert.deepEqual(Object.fromEntries(counts), {
    Reference: 19,
    Draft: 161,
    Canonical: 84,
    'Review Required': 2,
    Planned: 2,
    Baseline: 1
  })
})

test('the 105 frozen decisions reconcile to the previously unresolved set', () => {
  const register = readFileSync(path.join(root, 'documentation/DOCUMENTATION-PAGE-STATUS-REGISTER.md'), 'utf8')
  const registeredPaths = new Set(
    [...register.matchAll(/^\| `PSC-\d{3}` \| `(docs\/[^`]+)` \|/gm)].map((match) => match[1])
  )
  const expectedPaths = new Set()

  for (const file of markdownFiles(docsRoot)) {
    const parsed = matter(readFileSync(file, 'utf8'))
    const legacy = legacyStatus(parsed.content)
    const isFrozenGap = parsed.data.publication_status === 'APPROVED'
      || ['Future', 'Conceptual'].includes(legacy)
      || (!parsed.data.publication_status && !legacy && path.basename(file) === 'README.md')
    if (isFrozenGap) expectedPaths.add(path.relative(root, file).split(path.sep).join('/'))
  }

  assert.equal(registeredPaths.size, 105)
  assert.deepEqual([...registeredPaths].sort(), [...expectedPaths].sort())
})

test('badge vocabulary has unique presentation and no operational promotion', () => {
  const classNames = DISPLAY_STATUSES.map((status) => STATUS_PRESENTATION[status].className)
  assert.equal(new Set(classNames).size, DISPLAY_STATUSES.length)
  assert.equal(DISPLAY_STATUSES.includes('Operational'), false)
  assert.equal(DISPLAY_STATUSES.includes('Production'), false)
  assert.equal(DISPLAY_STATUSES.includes('Approved'), false)
})

test('badge text contrast exceeds WCAG AA in light and dark themes', () => {
  assert.ok(contrast('172033', 'f8fafc') >= 4.5)
  assert.ok(contrast('e5eef8', '1e2636') >= 4.5)
})
