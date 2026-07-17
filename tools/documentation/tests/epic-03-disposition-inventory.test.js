import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'
import { loadDocument } from '../index.js'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')
const artifacts = [
  ['.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md', 'DOC-REF-010'],
  ['.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-SUMMARY.md', 'DOC-RPT-037'],
  ['.rag/DOCUMENTATION-EXCEPTION-EXPIRY-RISK-REPORT.md', 'DOC-RPT-038'],
  ['.rag/DOCUMENTATION-EXCEPTION-AUTHORITY-ROUTING.md', 'DOC-RPT-039'],
  ['.rag/DOCUMENTATION-EXCEPTION-SECURITY-ROUTING.md', 'DOC-RPT-040'],
  ['.rag/DOCUMENTATION-EPIC-03-PROGRESS-REPORT.md', 'DOC-RPT-041'],
]
const dispositions = new Set([
  'MIGRATE', 'RENEW_EXCEPTION', 'REVOKE_EXCEPTION', 'ARCHIVE_LEGACY',
  'MERGE_DUPLICATE', 'SECURITY_REVIEW', 'AUTHORITY_REVIEW', 'DEFER_WITH_RISK',
])
const flags = new Set([
  'security_sensitive', 'authority_required', 'public_exposure', 'cross_core_dependency',
  'high_expiry_risk', 'migration_candidate', 'renewal_candidate', 'archive_candidate',
  'merge_candidate', 'revocation_candidate', 'requires_corrective_action',
  'requires_semantic_target', 'requires_owner_confirmation', 'requires_approver_confirmation',
])

async function inventoryRows() {
  return (await read('.rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md'))
    .split('\n')
    .filter((line) => /^\| `DOC-EXC-\d+` \|/.test(line))
    .map((line) => line.split('|').map((value) => value.trim()))
}

test('REQ-02 artifacts are canonical connected drafts', async () => {
  for (const [path, id] of artifacts) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.profile, 'CANONICAL')
    assert.equal(document.metadata.document_id, id)
    assert.equal(document.metadata.publication_status, 'DRAFT')
    assert.equal(document.metadata.maturity_level, 'D2')
    assert.ok(document.metadata.relationships.length > 0)
  }
})

test('inventory has exactly one approved disposition for each of 573 exceptions', async () => {
  const rows = await inventoryRows()
  assert.equal(rows.length, 573)
  assert.equal(new Set(rows.map((row) => row[2])).size, 573)
  const counts = new Map()
  for (const row of rows) {
    const disposition = row[7].replaceAll('`', '')
    assert.equal(dispositions.has(disposition), true)
    counts.set(disposition, (counts.get(disposition) ?? 0) + 1)
    assert.equal(row[3], 'true')
    assert.equal(row[4], 'true')
    assert.equal(row[9], '`P0`')
    assert.equal(row[17].startsWith('`2026-'), true)
  }
  assert.deepEqual(Object.fromEntries(counts), {
    SECURITY_REVIEW: 59,
    AUTHORITY_REVIEW: 285,
    DEFER_WITH_RISK: 42,
    MIGRATE: 187,
  })
})

test('secondary flags use only the approved vocabulary', async () => {
  for (const row of await inventoryRows()) {
    const used = [...row[8].matchAll(/`([^`]+)`/g)].map((match) => match[1])
    assert.ok(used.length > 0)
    for (const flag of used) assert.equal(flags.has(flag), true, flag)
  }
})

test('baseline and exception registries remain synchronized after Batch 04', async () => {
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

test('renewal forecast applies P0 90-day cap without mutating exceptions', async () => {
  const report = await read('.rag/DOCUMENTATION-EXCEPTION-EXPIRY-RISK-REPORT.md')
  assert.match(report, /Total extension candidates \| 386 \| 90 days/)
  assert.match(report, /P2\/P3 would permit at most 180 days/)
  assert.match(report, /89 calendar days remain/)
})

test('routing summaries remain category-level and redacted', async () => {
  const authority = await read('.rag/DOCUMENTATION-EXCEPTION-AUTHORITY-ROUTING.md')
  const security = await read('.rag/DOCUMENTATION-EXCEPTION-SECURITY-ROUTING.md')
  assert.match(authority, /Authority review is required for 327 exceptions/)
  assert.match(security, /Security review is conservatively routed for 344 exceptions/)
  assert.match(security, /Secret values inspected, copied, logged, or reported: 0/)
})

test('REQ-03 approved ADR index includes disposition governance decisions', async () => {
  const index = await read('.rag/DOCUMENTATION-ADR-INDEX.md')
  for (const [path, id] of [
    ['adr/DOC-ADR-021-EXCEPTION-EXPIRY-DISPOSITION-GOVERNANCE.md', 'DOC-ADR-021'],
    ['adr/DOC-ADR-022-TRACEABILITY-DEPTH-QUALITY-MODEL.md', 'DOC-ADR-022'],
    ['adr/DOC-ADR-023-ADOPTED-TARGET-CRITERIA.md', 'DOC-ADR-023'],
  ]) {
    const document = await loadDocument(resolve(root, path), { root })
    assert.equal(document.metadata.publication_status, 'APPROVED')
    assert.equal(document.metadata.maturity_level, 'D3')
    assert.match(document.body, /## Status\n\nAPPROVED/)
    assert.equal(index.includes(id), true)
  }
})

test('generated graph contains all REQ-02 nodes without canonical orphans', async () => {
  const graph = JSON.parse(await read('documentation.graph.json'))
  const nodes = new Set(graph.nodes.map((node) => node.document_id))
  const orphanPaths = new Set(graph.orphan_documents)
  for (const [path, id] of artifacts) {
    assert.equal(nodes.has(id), true)
    assert.equal(orphanPaths.has(path), false)
  }
})

test('mandatory gate-preservation statement is present', async () => {
  const expected = 'This request inventoried and classified remaining exception dispositions only.'
  for (const [path] of artifacts) {
    const content = await read(path)
    if (path === '.rag/DOCUMENTATION-EPIC-03-PROGRESS-REPORT.md') {
      assert.match(content, /baselined traceability depth only/)
    } else {
      assert.match(content, new RegExp(expected))
    }
  }
})
