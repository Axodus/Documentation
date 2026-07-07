import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('REQ-06 artifacts are canonical and use non-colliding IDs', async () => {
  const artifacts = [
    ['documentation/DOCUMENTATION-BATCH-01-ACCEPTANCE-REPORT.md', 'DOC-RPT-012'],
    ['documentation/DOCUMENTATION-BATCH-01-POST-MIGRATION-AUDIT.md', 'DOC-RPT-013'],
    ['documentation/DOCUMENTATION-EPIC-02-PROGRESS-REPORT.md', 'DOC-RPT-014'],
    ['documentation/DOCUMENTATION-BATCH-02-PLANNING.md', 'DOC-ROAD-004'],
    ['documentation/DOCUMENTATION-BATCH-02-CANDIDATE-FREEZE-PROPOSAL.md', 'DOC-ROAD-005'],
    ['documentation/DOCUMENTATION-BATCH-02-AUTHORITY-GAP-REPORT.md', 'DOC-RPT-015'],
  ]
  for (const [path, id] of artifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Batch 01 is explicitly accepted with complete audit controls', async () => {
  const acceptance = await read('documentation/DOCUMENTATION-BATCH-01-ACCEPTANCE-REPORT.md')
  const audit = await read('documentation/DOCUMENTATION-BATCH-01-POST-MIGRATION-AUDIT.md')
  assert.match(acceptance, /Batch 01 Acceptance: ACCEPTED/)
  assert.match(audit, /Canonical documents and unique IDs \| 20\/20 PASS/)
  assert.match(audit, /Registry synchronization \| 613\/613 PASS/)
})

test('Batch 02 proposal has 20 primaries and six alternates without final IDs', async () => {
  const proposal = await read('documentation/DOCUMENTATION-BATCH-02-CANDIDATE-FREEZE-PROPOSAL.md')
  assert.equal((proposal.match(/`(?:BATCH_02_PRIMARY_PROPOSED|MIGRATED)`/g) ?? []).length, 20)
  assert.equal((proposal.match(/`(?:BATCH_02_ALTERNATE_PROPOSED|FROZEN_ALTERNATE)`/g) ?? []).length, 6)
  assert.equal((proposal.match(/-GDE-<NNN>/g) ?? []).length, 26)
  assert.match(proposal, /No numeric ID is allocated or reserved/)
})

test('Batch 02 distribution respects minimum and maximum core constraints', async () => {
  const proposal = await read('documentation/DOCUMENTATION-BATCH-02-CANDIDATE-FREEZE-PROPOSAL.md')
  const primarySection = proposal.split('## Ordered Alternates')[0]
  const expected = { GOV: 5, SEC: 5, ACCOUNT: 4, RUNTIME: 3, TREASURY: 3 }
  for (const [scope, count] of Object.entries(expected)) {
    assert.equal((primarySection.match(new RegExp(`\\| \\\`${scope}\\\` \\|`, 'g')) ?? []).length, count)
  }
})

test('REQ-06 preserves post-Batch 01 registries', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  assert.equal(baseline.entries.length, 573)
  assert.equal(exceptions.exceptions.length, 573)
  assert.deepEqual(
    baseline.entries.map(({ path }) => path).sort(),
    exceptions.exceptions.map(({ document_path }) => document_path).sort(),
  )
})
