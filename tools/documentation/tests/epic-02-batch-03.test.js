import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const migrated = [
  ['docs/mining/architecture.md', 'MINING-GDE-002'], ['docs/mining/infrastructure-and-operations.md', 'MINING-GDE-003'],
  ['docs/mining/mining-models.md', 'MINING-GDE-004'], ['docs/mining/risk-and-compliance.md', 'MINING-GDE-005'],
  ['docs/mining/security-and-custody.md', 'MINING-GDE-006'], ['docs/marketplace/architecture.md', 'MARKET-GDE-002'],
  ['docs/marketplace/buyer-flow.md', 'MARKET-GDE-003'], ['docs/marketplace/risk-and-compliance.md', 'MARKET-GDE-004'],
  ['docs/marketplace/security-and-data-protection.md', 'MARKET-GDE-005'], ['docs/marketplace/seller-provider-model.md', 'MARKET-GDE-006'],
  ['docs/lottery/cryptodraw.md', 'LOTTERY-GDE-002'], ['docs/lottery/game-models.md', 'LOTTERY-GDE-003'],
  ['docs/lottery/responsible-participation.md', 'LOTTERY-GDE-004'], ['docs/lottery/risk-and-compliance.md', 'LOTTERY-GDE-005'],
  ['docs/lottery/security-and-smart-contracts.md', 'LOTTERY-GDE-006'], ['docs/dex/architecture.md', 'DEX-GDE-002'],
  ['docs/dex/liquidity-pools.md', 'DEX-GDE-003'], ['docs/dex/risk-and-disclosures.md', 'DEX-GDE-004'],
  ['docs/dex/routing-and-aggregation.md', 'DEX-GDE-005'], ['docs/dex/security-and-smart-contracts.md', 'DEX-GDE-006'],
]
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Batch 03 migrates exactly 20 approved canonical primaries', async () => {
  for (const [path, id] of migrated) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Batch 03 removes only migrated paths from synchronized registries', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  for (const [path] of migrated) {
    assert.equal(baseline.entries.some((entry) => entry.path === path), false)
    assert.equal(exceptions.exceptions.some((entry) => entry.document_path === path), false)
  }
})

test('Batch 03 evidence records IDs, freeze and zero substitutions', async () => {
  const evidence = await read('.rag/DOCUMENTATION-MIGRATION-BATCH-03-EVIDENCE.md')
  const ids = await read('.rag/DOCUMENTATION-BATCH-03-ID-RESERVATION-RECORD.md')
  const freeze = await read('.rag/DOCUMENTATION-BATCH-03-FREEZE-RECORD.md')
  for (const [path, id] of migrated) {
    assert.match(evidence, new RegExp(path.replaceAll('/', '\\/')))
    assert.match(ids, new RegExp(id))
  }
  assert.match(freeze, /Primary: 20 FROZEN then MIGRATED/)
  assert.match(evidence, /substitutions 0/)
})
