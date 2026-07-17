import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const approvedContracts = [
  ['.rag/DOCUMENTATION-MIGRATION-PLAYBOOK.md', 'DOC-PLAY-001'],
  ['.rag/DOCUMENTATION-MIGRATION-CRITERIA.md', 'DOC-STD-002'],
  ['.rag/DOCUMENTATION-DEBT-CLASSIFICATION.md', 'DOC-STD-003'],
  ['.rag/DOCUMENTATION-ADOPTION-METRICS.md', 'DOC-SPEC-005'],
]
const approvedAdrs = [
  ['adr/DOC-ADR-018-CONTROLLED-BATCH-MIGRATION-GOVERNANCE.md', 'DOC-ADR-018'],
  ['adr/DOC-ADR-019-CANONICAL-PROMOTION-THRESHOLD.md', 'DOC-ADR-019'],
  ['adr/DOC-ADR-020-LEGACY-ARCHIVAL-POLICY.md', 'DOC-ADR-020'],
]

test('REQ-02 approved contracts conform to Schema 1.0.0', async () => {
  const plan = await loadDocument(resolve(root, '.rag/DOCUMENTATION-EPIC-02-PLAN.md'), { root })
  assert.equal(plan.profile, 'CANONICAL')
  assert.equal(plan.metadata.document_id, 'DOC-ROAD-001')
  assert.equal(plan.metadata.publication_status, 'DRAFT')

  for (const [path, id] of approvedContracts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.version, '1.0.0')
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.equal(document.metadata.maturity_level, 'D3')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('ADRs 018 through 020 are approved and indexed', async () => {
  const approvedIndex = await readFile(resolve(root, '.rag/DOCUMENTATION-ADR-INDEX.md'), 'utf8')
  for (const [path, id] of approvedAdrs) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.version, '1.0.0')
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.equal(document.metadata.maturity_level, 'D3')
    assert.match(document.body, /## Status\n\nAPPROVED/)
    assert.match(document.body, /## Approval Date\n\n2026-07-02/)
    assert.match(document.body, /## Adopted Solution/)
    assert.doesNotMatch(document.body, /## Open Questions/)
    assert.equal(approvedIndex.includes(id), true)
  }
})

test('REQ-02 preserves legacy baseline and exception populations', async () => {
  const baseline = JSON.parse(await readFile(resolve(root, 'documentation.baseline.json'), 'utf8'))
  const exceptions = JSON.parse(await readFile(resolve(root, 'documentation.exceptions.json'), 'utf8'))
  assert.equal(baseline.entries.length, 563)
  assert.equal(exceptions.exceptions.length, 563)
  assert.ok(baseline.entries.some((entry) => entry.path === '.rag/DOCUMENTATION-ADR-INDEX.md'))
  assert.ok(exceptions.exceptions.some((entry) => entry.document_path === '.rag/DOCUMENTATION-ADR-INDEX.md'))
})

test('REQ-02 approved nodes are connected in the generated graph', async () => {
  const graph = JSON.parse(await readFile(resolve(root, 'documentation.graph.json'), 'utf8'))
  const documents = [...approvedContracts, ...approvedAdrs]
  const ids = new Set(documents.map(([, id]) => id))
  const nodes = new Set(graph.nodes.map((node) => node.document_id))
  for (const id of ids) assert.ok(nodes.has(id))
  const orphanPaths = new Set(graph.orphan_documents)
  for (const [path] of documents) {
    assert.equal(orphanPaths.has(path), false)
  }
})

test('initial scope registry covers the 16 detected public cores with stable allocation rules', async () => {
  const criteria = await readFile(resolve(root, '.rag/DOCUMENTATION-MIGRATION-CRITERIA.md'), 'utf8')
  const detectedScopes = [
    'ACCOUNT',
    'ACADEMY',
    'ACS',
    'BBA',
    'BUSINESS',
    'DEFI',
    'DEX',
    'GOV',
    'LOTTERY',
    'MARKET',
    'MINING',
    'RUNTIME',
    'SEC',
    'TOKEN',
    'TRADING',
    'TREASURY',
  ]
  for (const scope of detectedScopes) {
    assert.match(criteria, new RegExp(`\\| \\\`${scope}\\\` \\|`))
  }
  assert.equal((criteria.match(/\| `PUBLIC` \| `PUBLIC_CORE_STANDARD` \|/g) ?? []).length, 16)
  assert.ok(criteria.includes('Allocation is monotonic independently for every `(scope_code,type_code)` pair.'))
  assert.match(criteria, /Reserved, rejected, rolled-back, deprecated, deleted, superseded, archived, and published IDs remain permanently unavailable/)
  assert.match(criteria, /new scope or scope-code change requires an explicit governance update/i)
})

test('debt classification precedence and flags are frozen', async () => {
  const classification = await readFile(resolve(root, '.rag/DOCUMENTATION-DEBT-CLASSIFICATION.md'), 'utf8')
  const expected = [
    '`CONFLICTING`',
    '`DUPLICATED`',
    '`STALE`',
    '`ARCHIVE_CANDIDATE`',
    '`EXCEPTION_REQUIRED`',
    '`NEEDS_REVIEW`',
    '`NEEDS_METADATA`',
    '`PROMOTE_READY`',
  ]
  let cursor = -1
  for (const value of expected) {
    const next = classification.indexOf(value, cursor + 1)
    assert.ok(next > cursor, `${value} must preserve precedence`)
    cursor = next
  }
  for (const flag of ['risk', 'public_exposure', 'cross_core_dependency', 'urgency', 'security_sensitive', 'authority_required']) {
    assert.match(classification, new RegExp(`- \\\`${flag}\\\``))
  }
})
