import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const artifacts = [
  ['DOCUMENTATION-LEGACY-DEBT-REPORT.md', 'DOC-RPT-003'],
  ['DOCUMENTATION-LEGACY-PRIORITIZATION.md', 'DOC-ROAD-002'],
  ['DOCUMENTATION-CORE-ADOPTION-MATRIX.md', 'DOC-REF-005'],
  ['DOCUMENTATION-LEGACY-CLASSIFICATION-EVIDENCE.md', 'DOC-RPT-004'],
  ['DOCUMENTATION-BATCH-01-CANDIDATE-FREEZE-PROPOSAL.md', 'DOC-ROAD-003'],
]

const loadJson = async (path) => JSON.parse(await readFile(resolve(root, path), 'utf8'))
const pathSetHash = (paths) => createHash('sha256').update(`${[...paths].sort().join('\n')}\n`).digest('hex')

test('REQ-03 artifacts remain canonical and connected after subsequent governance gates', async () => {
  for (const [path, id] of artifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.ok(['DRAFT', 'APPROVED'].includes(document.metadata.publication_status))
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('legacy baseline and exception registries remain synchronized at 633 entries', async () => {
  const baseline = await loadJson('documentation.baseline.json')
  const exceptions = await loadJson('documentation.exceptions.json')
  const baselinePaths = baseline.entries.map(({ path }) => path)
  const exceptionPaths = exceptions.exceptions.map(({ document_path }) => document_path)
  assert.equal(baselinePaths.length, 633)
  assert.equal(exceptionPaths.length, 633)
  assert.equal(pathSetHash(baselinePaths), 'ead5f9b2c63726042fc2d9df61f0fefa42d388b8134ec89fc9d814af1d65697a')
  assert.equal(pathSetHash(exceptionPaths), pathSetHash(baselinePaths))
})

test('classification partition covers every legacy path exactly once', async () => {
  const baseline = await loadJson('documentation.baseline.json')
  const exceptionRequired = baseline.entries.filter(({ path }) => path.startsWith('.instructions/'))
  const needsReview = baseline.entries.filter(({ path }) => !path.startsWith('.instructions/'))
  const duplicateHashes = new Set()
  const seenHashes = new Set()
  for (const { sha256 } of baseline.entries) {
    if (seenHashes.has(sha256)) duplicateHashes.add(sha256)
    seenHashes.add(sha256)
  }
  assert.equal(exceptionRequired.length, 59)
  assert.equal(needsReview.length, 574)
  assert.equal(exceptionRequired.length + needsReview.length, 633)
  assert.equal(duplicateHashes.size, 0)
})

test('domain distribution matches the accepted inventory', async () => {
  const baseline = await loadJson('documentation.baseline.json')
  const count = (prefix) => baseline.entries.filter(({ path }) => path.startsWith(prefix)).length
  assert.equal(count('docs/'), 247)
  assert.equal(count('.knowledge/'), 285)
  assert.equal(count('.instructions/'), 59)
  assert.equal(633 - count('docs/') - count('.knowledge/') - count('.instructions/'), 42)
})

test('Batch 01 proposal retains 20 primaries and four ordered alternates without final IDs', async () => {
  const proposal = await readFile(resolve(root, 'DOCUMENTATION-BATCH-01-CANDIDATE-FREEZE-PROPOSAL.md'), 'utf8')
  assert.equal((proposal.match(/`(?:PRIMARY_BLOCKED|FROZEN_PRIMARY)`/g) ?? []).length, 20)
  assert.equal((proposal.match(/`(?:ALTERNATE_BLOCKED|FROZEN_ALTERNATE)`/g) ?? []).length, 4)
  assert.equal((proposal.match(/-GDE-<NNN>/g) ?? []).length, 24)
  assert.doesNotMatch(proposal, /(?:ACCOUNT|ACADEMY|ACS|BBA|BUSINESS|DEFI|DEX|GOV|LOTTERY|MARKET|MINING|RUNTIME|SEC|TOKEN|TRADING|TREASURY|CORE)-GDE-\d{3}/)
})

test('core adoption matrix covers all 16 public scopes without migration or adoption states', async () => {
  const matrix = await readFile(resolve(root, 'DOCUMENTATION-CORE-ADOPTION-MATRIX.md'), 'utf8')
  for (const scope of ['ACCOUNT', 'ACADEMY', 'ACS', 'BBA', 'BUSINESS', 'DEFI', 'DEX', 'GOV', 'LOTTERY', 'MARKET', 'MINING', 'RUNTIME', 'SEC', 'TOKEN', 'TRADING', 'TREASURY']) {
    assert.match(matrix, new RegExp(`\\| \\\`${scope}\\\` \\|`))
  }
  assert.equal((matrix.match(/`(?:INVENTORIED|BATCH_PLANNED)`/g) ?? []).length, 16)
  assert.doesNotMatch(matrix, /\| `IN_MIGRATION` \||\| `ADOPTED_PARTIAL` \||\| `ADOPTED_TARGET` \|/)
})
