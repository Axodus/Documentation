import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')
const planningArtifacts = [
  ['.rag/DOCUMENTATION-EPIC-03-PLAN.md', 'DOC-ROAD-010', 'ROADMAP'],
  ['.rag/DOCUMENTATION-EXCEPTION-EXPIRY-REMEDIATION-PLAN.md', 'DOC-ROAD-011', 'ROADMAP'],
  ['.rag/DOCUMENTATION-EPIC-03-ADOPTION-METRICS.md', 'DOC-SPEC-009', 'SPECIFICATION'],
  ['.rag/DOCUMENTATION-EPIC-03-RISK-REGISTER.md', 'DOC-REF-009', 'REFERENCE'],
]
const approvedAdrs = [
  ['adr/DOC-ADR-021-EXCEPTION-EXPIRY-DISPOSITION-GOVERNANCE.md', 'DOC-ADR-021'],
  ['adr/DOC-ADR-022-TRACEABILITY-DEPTH-QUALITY-MODEL.md', 'DOC-ADR-022'],
  ['adr/DOC-ADR-023-ADOPTED-TARGET-CRITERIA.md', 'DOC-ADR-023'],
]

test('REQ-01 planning artifacts conform to Schema 1.0.0 as drafts', async () => {
  for (const [path, id, type] of planningArtifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.document_type, type)
    assert.equal(document.metadata.version, '0.1.0')
    assert.equal(document.metadata.publication_status, 'DRAFT')
    assert.equal(document.metadata.maturity_level, 'D2')
    assert.equal(document.metadata.created_date, '2026-07-03')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('REQ-03 approves ADRs 021 through 023 without applying execution', async () => {
  const approvedIndex = await read('.rag/DOCUMENTATION-ADR-INDEX.md')
  for (const [path, id] of approvedAdrs) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.equal(document.metadata.maturity_level, 'D3')
    assert.match(document.body, /## Status\n\nAPPROVED/)
    assert.match(document.body, /## Approval Date\n\n2026-07-07/)
    assert.match(document.body, /## Alternatives Considered/)
    assert.match(document.body, /## Adopted Solution/)
    assert.match(document.body, /## Trade-offs/)
    assert.match(document.body, /## Future Impacts/)
    assert.equal(approvedIndex.includes(id), true)
  }
})

test('REQ-03 approves disposition model and compact registry-extension design', async () => {
  const document = await loadDocument(resolve(root, '.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md'), { root })
  const model = await read('.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md')
  assert.equal(document.metadata.document_id, 'DOC-SPEC-008')
  assert.equal(document.metadata.publication_status, 'APPROVED')
  assert.equal(document.metadata.maturity_level, 'D3')
  assert.match(model, /APPROVED for governance and registry-extension design/)
  assert.match(model, /documentation\.exception-dispositions\.json/)
  assert.match(model, /exactly one disposition entry per active exception/)
  assert.match(model, /does\s+not mutate the current exception registry/)
})

test('exception disposition model defines all proposed decisions and renewal caps', async () => {
  const model = await read('.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md')
  for (const disposition of [
    'MIGRATE',
    'RENEW_EXCEPTION',
    'REVOKE_EXCEPTION',
    'ARCHIVE_LEGACY',
    'MERGE_DUPLICATE',
    'SECURITY_REVIEW',
    'AUTHORITY_REVIEW',
    'DEFER_WITH_RISK',
  ]) {
    assert.match(model, new RegExp(`\\\`${disposition}\\\``))
  }
  assert.match(model, /P0\/P1 renewal is capped at 90 days/)
  assert.match(model, /Lower-priority renewal is capped at 180\s+days/)
  assert.match(model, /exactly one current primary disposition/)
  assert.match(model, /existing registry continues to use `MIGRATE_ON_CHANGE` after REQ-03/)
})

test('EPIC-03 metrics preserve the accepted baseline and closure targets', async () => {
  const metrics = await read('.rag/DOCUMENTATION-EPIC-03-ADOPTION-METRICS.md')
  for (const expected of [
    '| Exceptions with explicit disposition | 0 of 573 | 573 of 573 |',
    '| Legacy documents | 573 | 513 or fewer |',
    '| Additional migrations | 0 | 60 or more |',
    '| Additional completed batches | 0 | 3 or more |',
    '| Canonical documents | 156 | 216 or more |',
    '| Metadata coverage | 22.88% | 30% or more |',
    '| Default-overview-only documents | 40 | 10 or fewer |',
  ]) {
    assert.match(metrics, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
  assert.match(metrics, /Planning artifacts.*do not\s+count as legacy migrations/s)
})

test('REQ-01 preserves synchronized legacy baseline and exceptions', async () => {
  const baseline = JSON.parse(await read('documentation.baseline.json'))
  const exceptions = JSON.parse(await read('documentation.exceptions.json'))
  const baselinePaths = baseline.entries.map((entry) => entry.path).sort()
  const exceptionPaths = exceptions.exceptions.map((entry) => entry.document_path).sort()
  assert.equal(baselinePaths.length, 563)
  assert.equal(exceptionPaths.length, 563)
  assert.deepEqual(baselinePaths, exceptionPaths)
  assert.ok(exceptions.exceptions.every((entry) => entry.disposition === 'MIGRATE_ON_CHANGE'))
  assert.ok(exceptions.exceptions.every((entry) => entry.expires_at === '2026-10-01T00:00:00Z'))
})

test('all REQ-01 canonical nodes are connected after generation', async () => {
  const graph = JSON.parse(await read('documentation.graph.json'))
  const nodes = new Set(graph.nodes.map((node) => node.document_id))
  const orphanPaths = new Set(graph.orphan_documents)
  for (const [path, id] of [...planningArtifacts, ['.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md', 'DOC-SPEC-008'], ...approvedAdrs]) {
    assert.equal(nodes.has(id), true)
    assert.equal(orphanPaths.has(path), false)
  }
})

test('REQ-01 preserves closed operational gates', async () => {
  for (const [path] of [...planningArtifacts, ['.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md'], ...approvedAdrs]) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.production_gate_impact, 'PRESERVES_CLOSED')
  }
  const plan = await read('.rag/DOCUMENTATION-EPIC-03-PLAN.md')
  assert.match(plan, /Production, execution, publication, provider execution, credentials, financial/)
})
