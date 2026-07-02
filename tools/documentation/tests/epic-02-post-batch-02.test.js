import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('REQ-08 artifacts are canonical with monotonic non-colliding IDs', async () => {
  const artifacts = [
    ['DOCUMENTATION-BATCH-02-ACCEPTANCE-REPORT.md', 'DOC-RPT-022'],
    ['DOCUMENTATION-BATCH-02-POST-MIGRATION-AUDIT.md', 'DOC-RPT-023'],
    ['DOCUMENTATION-TRACEABILITY-EXPANSION.md', 'DOC-SPEC-006'],
    ['DOCUMENTATION-GRAPH-ENRICHMENT-REPORT.md', 'DOC-RPT-024'],
    ['DOCUMENTATION-BATCH-03-PLANNING.md', 'DOC-ROAD-006'],
    ['DOCUMENTATION-BATCH-03-CANDIDATE-FREEZE-PROPOSAL.md', 'DOC-ROAD-007'],
    ['DOCUMENTATION-BATCH-03-AUTHORITY-GAP-REPORT.md', 'DOC-RPT-025'],
    ['DOCUMENTATION-BATCH-03-READINESS-FORECAST.md', 'DOC-RPT-026'],
  ]
  for (const [path, id] of artifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Batch 02 acceptance and audit are explicit', async () => {
  assert.match(await read('DOCUMENTATION-BATCH-02-ACCEPTANCE-REPORT.md'), /Batch 02 Acceptance: ACCEPTED/)
  const audit = await read('DOCUMENTATION-BATCH-02-POST-MIGRATION-AUDIT.md')
  assert.match(audit, /20\/20 canonical documents/)
  assert.match(audit, /Registry synchronization: 593\/593/)
})

test('traceability reports record current graph metrics without unresolved edges', async () => {
  const specification = await read('DOCUMENTATION-TRACEABILITY-EXPANSION.md')
  assert.match(specification, /Canonical documents: 115/)
  assert.match(specification, /Resolved semantic relationships: 223/)
  assert.match(specification, /Unresolved relation risk: 0/)
  assert.match(specification, /adds no authored relation to migrated documents/)
})

test('Batch 03 proposal has 20 primaries, six alternates and no final IDs', async () => {
  const proposal = await read('DOCUMENTATION-BATCH-03-CANDIDATE-FREEZE-PROPOSAL.md')
  assert.equal((proposal.match(/`(?:BATCH_03_PRIMARY_PROPOSED|MIGRATED)`/g) ?? []).length, 20)
  assert.equal((proposal.match(/`(?:BATCH_03_ALTERNATE_PROPOSED|FROZEN_ALTERNATE)`/g) ?? []).length, 6)
  assert.equal((proposal.match(/-GDE-<NNN>/g) ?? []).length, 26)
  assert.match(proposal, /No final numeric ID is allocated or reserved/)
  const primary = proposal.split('## Alternates')[0]
  for (const scope of ['MINING', 'MARKET', 'LOTTERY', 'DEX']) {
    assert.equal((primary.match(new RegExp(`\\| \\\`${scope}\\\` \\|`, 'g')) ?? []).length, 5)
  }
})

test('registries remain synchronized after governed Batch 03 migration', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  assert.equal(baseline.entries.length, 573)
  assert.equal(exceptions.exceptions.length, 573)
  assert.deepEqual(
    baseline.entries.map(({ path }) => path).sort(),
    exceptions.exceptions.map(({ document_path }) => document_path).sort(),
  )
})
