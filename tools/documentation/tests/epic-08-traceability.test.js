import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

const req01Reports = [
  ['documentation/EPIC-08-CROSS-CORE-INTEGRATION-MATRIX.md', 'DOC-RPT-190'],
  ['documentation/EPIC-08-DEPENDENCY-REGISTER.md', 'DOC-RPT-191'],
  ['documentation/EPIC-08-INTEGRATION-CONTRADICTION-REGISTER.md', 'DOC-RPT-192'],
  ['documentation/EPIC-08-REQ-01-FREEZE-REPORT.md', 'DOC-RPT-193'],
]

test('EPIC-08 REQ-01 reports are canonical and monotonically identified', async () => {
  for (const [path, id] of req01Reports) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.deepEqual(document.metadata.relationships, [])
    assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  }
})

test('EPIC-08 integration IDs are unique and canonical paths exist', async () => {
  const matrix = await read(req01Reports[0][0])
  const rows = [...matrix.matchAll(/^\| `(INTG-EP8-\d{4})` \|.*$/gm)]
  assert.equal(rows.length, 36)
  assert.equal(new Set(rows.map((row) => row[1])).size, 36)

  for (const row of rows) {
    const paths = [...row[0].matchAll(/`(docs\/[^`]+\.md)`/g)].map((match) => match[1])
    assert.equal(paths.length, 2)
    for (const path of paths) await access(resolve(root, path))
  }
})

test('EPIC-08 private evidence ledger is marked and excluded from public outputs', async () => {
  const ledger = await read('institutional-disclosure/epic-08-evidence-ledger.md')
  for (const marker of [
    'PRIVATE_ONLY',
    'EXCLUDED_FROM_PUBLICATION',
    'EXCLUDED_FROM_VITEPRESS',
    'EXCLUDED_FROM_PUBLIC_REGISTRIES',
    'EXCLUDED_FROM_PUBLIC_GENERATED_OUTPUTS',
  ]) assert.match(ledger, new RegExp(marker))

  const manifest = await read('documentation.manifest.json')
  const graph = await read('documentation.graph.json')
  assert.doesNotMatch(manifest, /epic-08-evidence-ledger/)
  assert.doesNotMatch(graph, /epic-08-evidence-ledger/)
})
