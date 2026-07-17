import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const manifests = [
  'documentation/EPIC-09-FOUNDATIONS-MANIFEST.md',
  'documentation/EPIC-09-USER-VALUE-CREATION-MANIFEST.md',
  'documentation/EPIC-09-CONTROL-INFRASTRUCTURE-MANIFEST.md',
  'documentation/EPIC-09-PRODUCT-PROTOCOL-MANIFEST.md',
  'documentation/EPIC-09-SHARED-CROSS-CORE-MANIFEST.md'
]

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(target) : [target]
  }))
  return nested.flat()
}

function pathsFromTable(source) {
  return [...source.matchAll(/\| `(?:MAN-[^\`]+)` \| `(docs\/[^\`]+\.md)` \|/g)].map((match) => match[1])
}

test('EPIC-09 qualification and execution ownership are complete and non-overlapping', async () => {
  const publicPages = (await walk(path.join(root, 'docs')))
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.relative(root, file).replaceAll(path.sep, '/'))
  assert.equal(publicPages.length, 269)

  const matrix = await readFile(path.join(root, 'documentation/EPIC-09-CONTENT-SUBSTANCE-MATRIX.md'), 'utf8')
  const qualified = [...matrix.matchAll(/\| `(docs\/[^\`]+\.md)` \|/g)].map((match) => match[1])
  assert.equal(qualified.length, 269)
  assert.equal(new Set(qualified).size, 269)
  assert.deepEqual(new Set(qualified), new Set(publicPages))

  const owned = []
  for (const manifest of manifests) {
    owned.push(...pathsFromTable(await readFile(path.join(root, manifest), 'utf8')))
  }
  assert.equal(owned.length, 44)
  assert.equal(new Set(owned).size, 44)
  assert.ok(owned.every((file) => publicPages.includes(file)))
})

test('EPIC-09 private owner context stays out of public generated artifacts', async () => {
  const generated = [
    'documentation/DOCUMENTATION-MASTER-INDEX.md',
    'documentation.manifest.json',
    'documentation.graph.json',
    'documentation.validation.json'
  ]
  for (const file of generated) {
    const source = await readFile(path.join(root, file), 'utf8')
    assert.doesNotMatch(source, /epic-09-content-context-ledger|CTX-EP9-/)
  }
})
