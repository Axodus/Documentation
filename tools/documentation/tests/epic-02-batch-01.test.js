import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const migrated = [
  ['docs/accountability/overview.md', 'ACCOUNT-GDE-001'], ['docs/academy/overview.md', 'ACADEMY-GDE-001'],
  ['docs/acs/overview.md', 'ACS-GDE-001'], ['docs/bba-agency/overview.md', 'BBA-GDE-001'],
  ['docs/business/overview.md', 'BUSINESS-GDE-001'], ['docs/defi/overview.md', 'DEFI-GDE-001'],
  ['docs/dex/overview.md', 'DEX-GDE-001'], ['docs/governance/overview.md', 'GOV-GDE-001'],
  ['docs/lottery/overview.md', 'LOTTERY-GDE-001'], ['docs/marketplace/overview.md', 'MARKET-GDE-001'],
  ['docs/mining/overview.md', 'MINING-GDE-001'], ['docs/runtime/overview.md', 'RUNTIME-GDE-001'],
  ['docs/security/overview.md', 'SEC-GDE-001'], ['docs/tokenomics/overview.md', 'TOKEN-GDE-001'],
  ['docs/trading/overview.md', 'TRADING-GDE-001'], ['docs/treasury/overview.md', 'TREASURY-GDE-001'],
  ['docs/overview/ecosystem-overview.md', 'CORE-GDE-001'], ['docs/overview/core-principles.md', 'CORE-GDE-002'],
  ['docs/overview/documentation-status.md', 'CORE-GDE-003'], ['docs/overview/risk-notices.md', 'CORE-GDE-004'],
]
const loadJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'))

test('Batch 01 migrates exactly 20 approved canonical documents', async () => {
  for (const [path, id] of migrated) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('migrated paths leave synchronized baseline and exceptions', async () => {
  const baseline = await loadJson('documentation.baseline.json')
  const exceptions = await loadJson('documentation.exceptions.json')
  assert.equal(baseline.entries.length, 593)
  assert.equal(exceptions.exceptions.length, 593)
  for (const [path] of migrated) {
    assert.equal(baseline.entries.some((entry) => entry.path === path), false)
    assert.equal(exceptions.exceptions.some((entry) => entry.document_path === path), false)
  }
})

test('Batch 01 evidence and final IDs cover the exact migration set', async () => {
  const evidence = await readFile(resolve(root, 'DOCUMENTATION-MIGRATION-BATCH-01-EVIDENCE.md'), 'utf8')
  const ids = await readFile(resolve(root, 'DOCUMENTATION-BATCH-01-ID-RESERVATION-RECORD.md'), 'utf8')
  for (const [path, id] of migrated) {
    assert.match(evidence, new RegExp(path.replaceAll('/', '\\/')))
    assert.match(ids, new RegExp(id))
  }
})
