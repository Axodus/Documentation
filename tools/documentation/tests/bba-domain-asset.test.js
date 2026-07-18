import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Institutional Asset Sprint is active with twelve ordered REQs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "SPRINT-002-02"[\s\S]*status: "PASS_CLOSED"/)
  assert.match(backlog, /status_reason: "ASSET_DOMAIN_CANONICAL_REVIEW_PASS"/)
  for (const id of ['REQ-002-02-001', 'REQ-002-02-002', 'REQ-002-02-003', 'REQ-002-02-004', 'REQ-002-02-005', 'REQ-002-02-006', 'REQ-002-02-007', 'REQ-002-02-008', 'REQ-002-02-009', 'REQ-002-02-010', 'REQ-002-02-011', 'REQ-002-02-012']) {
    assert.match(backlog, new RegExp(`id: "${id}"`))
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "SPRINT-002-02"\n    to: "REQ-002-02-001"\n    type: "CONTAINS"/)
})

test('Asset Domain Overview establishes Asset as non-file Aggregate Root', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-018-ASSET-DOMAIN-OVERVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-018"/)
  assert.match(source, /authority_scope: "BBA\.PLATFORM\.DOMAIN"/)
  assert.match(source, /publication_status: "DRAFT"/)
  assert.match(source, /canonical domain Aggregate Root/)
  assert.match(source, /Asset Is Not a File/)
  assert.match(source, /stable domain identity[\s\S]*Tenant context[\s\S]*authority relationships[\s\S]*lineage/)
  assert.match(source, /does not define database entities, object storage, filesystem[\s\S]*paths, APIs/)
})

test('Asset Identity preserves domain continuity across versions and representations', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-019-ASSET-IDENTITY.md')
  assert.match(source, /document_id: "BBAPLT-GDE-019"/)
  assert.match(source, /one stable identity within its owning Tenant context/)
  assert.match(source, /Identity Continuity/)
  assert.match(source, /multiple versions, representations, publications/)
  assert.match(source, /different institutional purpose[\s\S]*authority subject[\s\S]*identity, or meaning/)
  assert.match(source, /does not prescribe database keys, URL schemes, API resources/)
})

test('Asset Classification separates semantic classes from technical media', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-020-ASSET-CLASSIFICATION.md')
  assert.match(source, /document_id: "BBAPLT-GDE-020"/)
  for (const term of ['Knowledge', 'Editorial', 'Brand', 'Marketing', 'Publication', 'Media', 'Learning', 'Governance', 'Data', 'Model', 'Template', 'Guideline']) assert.match(source, new RegExp(`\\| ${term} \\|`))
  assert.match(source, /not semantic Asset classes/)
  assert.match(source, /Every governed Asset has at least one semantic class/)
  assert.match(source, /does not prescribe enum storage, search indexes, MIME mappings/)
})

test('Asset lineage uses typed directional relationships', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-023-ASSET-RELATIONSHIPS-AND-LINEAGE.md')
  assert.match(source, /document_id: "BBAPLT-GDE-023"/)
  for (const relation of ['derived_from', 'references', 'supersedes', 'generated_by', 'reviews', 'translates', 'summarizes', 'extends', 'duplicates', 'publishes']) assert.match(source, new RegExp('`' + relation + '`'))
  assert.match(source, /Mission-to-Asset[\s\S]*relationship/)
  assert.match(source, /direct edges that establish immediate provenance/)
})

test('Asset versions are immutable snapshots with stable identity', async () => {
  const source = await read('.rag/bba-platform/domain/BBAPLT-GDE-025-ASSET-VERSION-SEMANTICS.md')
  assert.match(source, /document_id: "BBAPLT-GDE-025"/)
  assert.match(source, /stable identity/)
  assert.match(source, /immutable snapshot/)
  assert.match(source, /A representation is not a new[\s\S]*version by default/)
  assert.match(source, /content change after approval or publication[\s\S]*new version/)
  assert.match(source, /Published content cannot be edited in place/)
})

test('Asset Domain closes with canonical review and proposed immutability ADR', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const review = await read('.rag/bba-platform/domain/BBAPLT-RPT-006-ASSET-DOMAIN-REVIEW.md')
  const adr = await read('.rag/bba-platform/adr/BBA-ADR-0005-INSTITUTIONAL-ASSETS-IMMUTABLE-KNOWLEDGE-ARTIFACTS.md')
  assert.match(backlog, /id: "REQ-002-02-012"[\s\S]*status: "DONE"/)
  assert.match(review, /document_id: "BBAPLT-RPT-006"/)
  assert.match(review, /PASS — Institutional Asset Domain is coherent/)
  assert.match(review, /Explicit Gaps/)
  assert.match(review, /SPRINT-002-03 — AI Workforce/)
  assert.match(adr, /document_id: "BBA-ADR-0005"/)
  assert.match(adr, /PROPOSED/)
  assert.match(adr, /each Asset version is an immutable content and meaning snapshot/)
  assert.match(adr, /representations and publication destinations do not create a new Asset or[\s\S]*version by default/)
})
