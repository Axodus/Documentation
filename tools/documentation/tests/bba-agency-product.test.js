import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('Product Vision 2.0 is proposed and non-normative', async () => {
  const path = '.rag/bba-platform/product/BBAPLT-GDE-101-PRODUCT-VISION-2-0-AGENCY-MODEL.md'
  await access(resolve(root, path))
  const source = await read(path)
  assert.match(source, /document_id: "BBAPLT-GDE-101"/)
  assert.match(source, /PROPOSED \/ NON_NORMATIVE_PENDING_REVIEW/)
  for (const term of ['BBA Platform', 'Agency Runtime', 'Agency Products', 'Agency Experience', 'Customer Outcome']) assert.match(source, new RegExp(term))
})

test('Agency Product remains a declarative composition', async () => {
  const source = await read('.rag/bba-platform/product/BBAPLT-GDE-101-PRODUCT-VISION-2-0-AGENCY-MODEL.md')
  assert.match(source, /versioned, declarative composition/)
  assert.match(source, /not a Domain Aggregate/)
  assert.match(source, /does not create authority/)
  assert.match(source, /does not redefine the lifecycle/)
})

test('Initial service categories and Neurons boundary are explicit', async () => {
  const source = await read('.rag/bba-platform/product/BBAPLT-GDE-101-PRODUCT-VISION-2-0-AGENCY-MODEL.md')
  for (const category of ['Scientific Writing', 'Advertising', 'Governance', 'Publication Strategy', 'Research']) assert.match(source, new RegExp(category))
  for (let index = 1; index <= 5; index += 1) assert.match(source, new RegExp(`AGENCY-SERVICE-CATEGORY-00${index}`))
  assert.match(source, /reserved and currently undefined economic concept/)
  for (const phrase of ['does not represent a price', 'currency', 'token', 'credit', 'asset', 'right', 'reward', 'supply']) assert.match(source, new RegExp(phrase, 'i'))
  assert.match(source, /UNDECIDED/)
})

test('Product Vision 2.0 Foundation Sprint closes without certifying the vision', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const report = await read('.rag/bba-platform/product/BBAPLT-RPT-025-PRODUCT-VISION-2-0-FOUNDATION-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-006-01"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "PRODUCT_VISION_2_FOUNDATION_PASS"/)
  assert.match(backlog, /id: "SPRINT-006-02"[\s\S]*status: "PLANNED"/)
  assert.match(report, /document_id: "BBAPLT-RPT-025"/)
  assert.match(report, /Review Result[\s\S]*PASS/)
  assert.match(report, /does not certify[\s\S]*BBAPLT-GDE-101[\s\S]*as normative/)
})

test('Service Composition Sprint closes with declarative composition semantics', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const report = await read('.rag/bba-platform/product/BBAPLT-RPT-026-SERVICE-COMPOSITION-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-006-02"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "SERVICE_COMPOSITION_PASS"/)
  assert.match(backlog, /id: "SPRINT-006-03"[\s\S]*status: "PLANNED"/)
  assert.match(report, /document_id: "BBAPLT-RPT-026"/)
  assert.match(report, /Review Result[\s\S]*PASS/)
  assert.match(report, /without creating a new[\s\S]*Domain Aggregate/)
})

test('Agency Runtime Governance Sprint closes without technical runtime decisions', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const report = await read('.rag/bba-platform/product/BBAPLT-RPT-027-AGENCY-RUNTIME-GOVERNANCE-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-006-03"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "AGENCY_RUNTIME_GOVERNANCE_PASS"/)
  assert.match(report, /Review Result[\s\S]*PASS/)
  assert.match(report, /does not[\s\S]*authorize technical Runtime implementation/)
  assert.match(report, /Human Governance remains authoritative/)
})

test('Agency Experience Sprint closes with service-oriented boundaries', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const report = await read('.rag/bba-platform/product/BBAPLT-RPT-028-AGENCY-EXPERIENCE-REVIEW.md')
  assert.match(backlog, /id: "SPRINT-006-04"[\s\S]*status: "PASS_CLOSED"[\s\S]*status_reason: "AGENCY_EXPERIENCE_PASS"/)
  assert.match(report, /Review Result[\s\S]*PASS/)
  assert.match(report, /does not certify[\s\S]*frontend implementation/)
  assert.match(report, /Workspace does not become a new Aggregate/)
})

test('Agency vocabulary extension is additive and non-normative', async () => {
  const source = await read('.rag/bba-platform/BBA-DOC-UBIQUITOUS-LANGUAGE.md')
  for (const term of ['Agency', 'Agency Runtime', 'Agency Product', 'Agency Experience', 'Service Composition', 'Customer Outcome']) assert.match(source, new RegExp(`\\| ${term} \\|`))
  assert.match(source, /The terms are not normative until `BBAPLT-GDE-101` is promoted/)
  for (const existing of ['Mission', 'Institutional Asset', 'AI Workforce', 'Human Governance', 'Capability', 'Solution']) assert.match(source, new RegExp(`\\| ${existing} \\|`))
})

test('Agency composition uses the next free ADR without replacing the Asset ADR', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const agencyAdr = await read('.rag/bba-platform/adr/BBA-ADR-0006-AGENCY-COMPOSITION-OVER-CERTIFIED-PLATFORM.md')
  const assetAdr = await read('.rag/bba-platform/adr/BBA-ADR-0005-INSTITUTIONAL-ASSETS-IMMUTABLE-KNOWLEDGE-ARTIFACTS.md')
  assert.match(backlog, /REQ-006-05-002[\s\S]*produces: \["BBA-ADR-0006"\]/)
  assert.match(agencyAdr, /document_id: "BBA-ADR-0006"/)
  assert.match(agencyAdr, /status[\s\S]*PROPOSED/)
  assert.match(assetAdr, /document_id: "BBA-ADR-0005"/)
  assert.match(assetAdr, /Institutional Assets Are Immutable Knowledge Artifacts/)
})

test('Agency roadmap is an external non-normative handoff', async () => {
  const roadmap = await read('.rag/bba-platform/product/BBA-ROAD-004-AGENCY-PRODUCT-EVOLUTION-ROADMAP.md')
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  assert.match(roadmap, /document_id: "BBA-ROAD-004"/)
  for (const epic of ['EPIC-IMP-014', 'EPIC-IMP-015', 'EPIC-IMP-016', 'EPIC-IMP-017', 'EPIC-IMP-018', 'EPIC-IMP-019', 'EPIC-IMP-020']) assert.match(roadmap, new RegExp(epic))
  assert.match(roadmap, /IMPLEMENTATION_EVIDENCE/)
  assert.match(roadmap, /EXTERNAL_NON_NORMATIVE/)
  assert.match(roadmap, /does not[\s\S]*claim external backlog mutation/)
  assert.doesNotMatch(backlog, /id: "EPIC-IMP-/)
  assert.doesNotMatch(backlog, /to: "EPIC-IMP-/)
})
