import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const migrated = [
  ['docs/governance/accountability.md', 'GOV-GDE-002'], ['docs/governance/constitutional-governance.md', 'GOV-GDE-003'],
  ['docs/governance/execution-receipts.md', 'GOV-GDE-004'], ['docs/governance/governance-risk.md', 'GOV-GDE-005'],
  ['docs/governance/proposal-lifecycle.md', 'GOV-GDE-006'], ['docs/security/api-security.md', 'SEC-GDE-002'],
  ['docs/security/disclosure-policy.md', 'SEC-GDE-003'], ['docs/security/frontend-security.md', 'SEC-GDE-004'],
  ['docs/security/smart-contract-security.md', 'SEC-GDE-005'], ['docs/security/wallet-security.md', 'SEC-GDE-006'],
  ['docs/accountability/financial-reports.md', 'ACCOUNT-GDE-002'], ['docs/accountability/governance-records.md', 'ACCOUNT-GDE-003'],
  ['docs/accountability/release-notes.md', 'ACCOUNT-GDE-004'], ['docs/accountability/roadmap-updates.md', 'ACCOUNT-GDE-005'],
  ['docs/runtime/change-control.md', 'RUNTIME-GDE-002'], ['docs/runtime/governance-escalation.md', 'RUNTIME-GDE-003'],
  ['docs/runtime/risk-controls.md', 'RUNTIME-GDE-004'], ['docs/treasury/compliance-and-disclosures.md', 'TREASURY-GDE-002'],
  ['docs/treasury/custody-and-security.md', 'TREASURY-GDE-003'], ['docs/treasury/risk-management.md', 'TREASURY-GDE-004'],
]
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Batch 02 contains exactly 20 canonical migrated primaries', async () => {
  for (const [path, id] of migrated) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Batch 02 removes exactly migrated paths from synchronized registries', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  for (const [path] of migrated) {
    assert.equal(baseline.entries.some((entry) => entry.path === path), false)
    assert.equal(exceptions.exceptions.some((entry) => entry.document_path === path), false)
  }
})

test('Batch 02 evidence records IDs, paths, freeze and no substitutions', async () => {
  const evidence = await read('.rag/DOCUMENTATION-MIGRATION-BATCH-02-EVIDENCE.md')
  const ids = await read('.rag/DOCUMENTATION-BATCH-02-ID-RESERVATION-RECORD.md')
  const freeze = await read('.rag/DOCUMENTATION-BATCH-02-FREEZE-RECORD.md')
  for (const [path, id] of migrated) {
    assert.match(evidence, new RegExp(path.replaceAll('/', '\\/')))
    assert.match(ids, new RegExp(id))
  }
  assert.match(freeze, /Primary: 20 FROZEN then MIGRATED/)
  assert.match(evidence, /substitutions 0/)
})
