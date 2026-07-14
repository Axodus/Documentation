import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const load = (path) => readFile(resolve(root, path), 'utf8')
const hash = (paths) => createHash('sha256').update(`${paths.join('\n')}\n`).digest('hex')

test('REQ-04 governance artifacts conform to Schema 1.0.0', async () => {
  const artifacts = [
    ['documentation/DOCUMENTATION-BATCH-01-AUTHORITY-EVIDENCE.md', 'DOC-RPT-006', 'APPROVED'],
    ['documentation/DOCUMENTATION-BATCH-01-FREEZE-RECORD.md', 'DOC-RPT-005', 'APPROVED'],
    ['documentation/DOCUMENTATION-BATCH-01-EXECUTION-CONTRACT.md', 'DOC-SPEC-007', 'DRAFT'],
  ]
  for (const [path, id, status] of artifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, status)
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('Core Adoption Matrix retains all 16 governed public cores', async () => {
  const matrix = await load('documentation/DOCUMENTATION-CORE-ADOPTION-MATRIX.md')
  assert.match(matrix, /publication_status: "APPROVED"/)
  assert.equal((matrix.match(/\| `(?:BATCH_PLANNED|ADOPTED_PARTIAL)` \|/g) ?? []).length, 16)
  assert.match(matrix, /`CORE` remains `GOVERNANCE_RESERVED`/)
  assert.doesNotMatch(matrix, /\| `IN_MIGRATION` \||\| `ADOPTED_TARGET` \|/)
})

test('freeze proposal contains 20 primaries and four ordered alternates', async () => {
  const proposal = await load('documentation/DOCUMENTATION-BATCH-01-CANDIDATE-FREEZE-PROPOSAL.md')
  assert.equal((proposal.match(/`FROZEN_PRIMARY`/g) ?? []).length, 20)
  assert.equal((proposal.match(/`FROZEN_ALTERNATE`/g) ?? []).length, 4)
  assert.equal((proposal.match(/-GDE-<NNN>/g) ?? []).length, 24)
  assert.doesNotMatch(proposal, /(?:ACCOUNT|ACADEMY|ACS|BBA|BUSINESS|DEFI|DEX|GOV|LOTTERY|MARKET|MINING|RUNTIME|SEC|TOKEN|TRADING|TREASURY|CORE)-GDE-\d{3}/)
})

test('freeze record hashes the exact ordered candidate sets', async () => {
  const primary = [
    'docs/accountability/overview.md', 'docs/academy/overview.md', 'docs/acs/overview.md',
    'docs/bba-agency/overview.md', 'docs/business/overview.md', 'docs/defi/overview.md',
    'docs/dex/overview.md', 'docs/governance/overview.md', 'docs/lottery/overview.md',
    'docs/marketplace/overview.md', 'docs/mining/overview.md', 'docs/runtime/overview.md',
    'docs/security/overview.md', 'docs/tokenomics/overview.md', 'docs/trading/overview.md',
    'docs/treasury/overview.md', 'docs/overview/ecosystem-overview.md',
    'docs/overview/core-principles.md', 'docs/overview/documentation-status.md',
    'docs/overview/risk-notices.md',
  ]
  const alternates = [
    'docs/overview/constitutional-model.md', 'docs/overview/documentation-standards.md',
    'docs/overview/product-map.md', 'docs/overview/terminology.md',
  ]
  const record = await load('documentation/DOCUMENTATION-BATCH-01-FREEZE-RECORD.md')
  assert.ok(primary.every((path) => path))
  assert.match(record, new RegExp(hash(primary)))
  assert.match(record, new RegExp(hash(alternates)))
})

test('authority defaults and execution boundary are explicit', async () => {
  const evidence = await load('documentation/DOCUMENTATION-BATCH-01-AUTHORITY-EVIDENCE.md')
  const contract = await load('documentation/DOCUMENTATION-BATCH-01-EXECUTION-CONTRACT.md')
  for (const role of ['Documentation Architecture Reviewer', 'Portfolio Documentation Reviewer', 'Security Reviewer', 'Documentation Coordinator']) {
    assert.match(evidence, new RegExp(role))
  }
  assert.match(contract, /Final ID reservation is deferred to the explicit Batch 01 execution request\./)
  assert.match(contract, /authorizes no migration/)
})

test('baseline and exception populations remain synchronized', async () => {
  const baseline = JSON.parse(await load('documentation.baseline.json'))
  const exceptions = JSON.parse(await load('documentation.exceptions.json'))
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  assert.deepEqual(
    baseline.entries.map(({ path }) => path).sort(),
    exceptions.exceptions.map(({ document_path }) => document_path).sort(),
  )
})
