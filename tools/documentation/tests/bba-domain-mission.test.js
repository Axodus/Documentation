import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(resolve(root, path), 'utf8')

test('EPIC-002 Mission Domain foundation is active with namespaced execution IDs', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const graph = await read('.rag/bba-platform/dependency-graph.yaml')
  assert.match(backlog, /id: "EPIC-001"[\s\S]*status_reason: "WAITING_DOMAIN_VALIDATION"/)
  assert.match(backlog, /id: "EPIC-002"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /id: "SPRINT-002-01"[\s\S]*status: "PASS_CLOSED"/)
  assert.match(backlog, /id: "SPRINT-001-03"[\s\S]*status: "PLANNED"/)
  for (const id of ['SPRINT-002-01', 'SPRINT-002-02', 'SPRINT-002-03', 'SPRINT-002-04', 'SPRINT-002-05', 'SPRINT-002-06']) {
    assert.match(graph, new RegExp(`"${id}"`))
  }
  assert.match(graph, /from: "EPIC-002"\n    to: "SPRINT-002-01"\n    type: "CONTAINS"/)
})

test('Mission Domain Overview is private draft and defers implementation', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-011-MISSION-DOMAIN-OVERVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-011"/)
  assert.match(source, /authority_scope: "BBA\.PLATFORM\.DOMAIN"/)
  assert.match(source, /publication_status: "DRAFT"/)
  assert.match(source, /related_epics: \["EPIC-002"\]/)
  assert.match(source, /Technical Boundary/)
  assert.match(source, /does not define aggregates, repositories, tables, APIs, events/)
})

test('Mission Lifecycle is canonical and keeps human decisions explicit', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-012-MISSION-LIFECYCLE.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-012"/)
  assert.match(source, /relationships: \[\{type: "DEPENDS_ON", target: "BBAPLT-GDE-011"\}/)
  for (const phase of ['Proposed', 'Authorized', 'Prepared', 'In Progress', 'Under Review', 'Outcome Decision', 'Closed with Learning']) {
    assert.match(source, new RegExp(`\\| ${phase} \\|`))
  }
  assert.match(source, /A refusal is a governed outcome, not an execution error/)
  assert.match(source, /does not define database states[\s\S]*API commands/)
})

test('Mission State Model defines only explicit semantic transitions', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-013-MISSION-STATE-MODEL.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-013"/)
  for (const state of ['PROPOSED', 'AUTHORIZED', 'PREPARED', 'IN_PROGRESS', 'UNDER_REVIEW', 'OUTCOME_DECISION', 'PAUSED', 'DEFERRED', 'REJECTED', 'STOPPED', 'CLOSED_WITH_LEARNING']) {
    assert.match(source, new RegExp('\\| `' + state + '` \\|'))
  }
  assert.match(source, /No other transition is valid/)
  assert.match(source, /Publication does not itself transition a Mission to closure/)
  assert.match(source, /does not define state storage, event sourcing, commands[\s\S]*UI controls/)
})

test('Mission Rules preserve authority, Asset provenance, and tenant neutrality', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-014-MISSION-RULES.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-014"/)
  for (const phrase of ['Mission Identity and Context', 'Accountability and Authority', 'Work and Asset Rules', 'Review Rules', 'Outcome Rules', 'Tenant and Knowledge Rules']) {
    assert.match(source, new RegExp(`## ${phrase}`))
  }
  assert.match(source, /An AI Workforce member may recommend, research, create, transform, or[\s\S]*evaluate work/)
  assert.match(source, /Acceptance, Publication authorization, and distribution are distinct[\s\S]*decisions/)
  assert.match(source, /Tenant knowledge, policies, Assets, authority, and decisions remain scoped/)
  assert.match(source, /These rules do not define validation code, database constraints, API behavior/)
})

test('Mission Policies define authority and escalation without technical enforcement', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-015-MISSION-POLICIES.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-015"/)
  for (const policy of ['Mission Authorization Policy', 'Stewardship Policy', 'AI Workforce Delegation Policy', 'Review Policy', 'Publication Policy', 'Tenant Boundary Policy', 'Exception and Escalation Policy']) {
    assert.match(source, new RegExp(`## ${policy}`))
  }
  assert.match(source, /Silence is not approval/)
  assert.match(source, /These policies do not define roles in an identity provider[\s\S]*policy engine/)
})

test('Mission Constraints block unsafe progression and publication', async () => {
  const path = '.rag/bba-platform/domain/BBAPLT-GDE-016-MISSION-CONSTRAINTS.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(source, /document_id: "BBAPLT-GDE-016"/)
  for (const category of ['Authorization Constraints', 'Preparation and Progress Constraints', 'Asset and Review Constraints', 'Publication Constraints', 'Uncertainty, Refusal, and Failure Constraints', 'Closure Constraints']) {
    assert.match(source, new RegExp(`## ${category}`))
  }
  assert.match(source, /Publication is prohibited when:/)
  assert.match(source, /A refusal is required[\s\S]*Tenant boundaries/)
  assert.match(source, /Technical controls may support these[\s\S]*reinterpret their domain meaning/)
})

test('Mission Domain Review closes the Sprint and hands off to Institutional Assets', async () => {
  const backlog = await read('.rag/bba-platform/EXECUTION-BACKLOG.yaml')
  const path = '.rag/bba-platform/domain/BBAPLT-RPT-003-MISSION-DOMAIN-REVIEW.md'
  const source = await read(path)
  await access(resolve(root, path))
  assert.match(backlog, /id: "EPIC-001"[\s\S]*status_reason: "WAITING_DOMAIN_VALIDATION"/)
  assert.match(backlog, /id: "EPIC-002"[\s\S]*status: "IN_PROGRESS"/)
  assert.match(backlog, /id: "SPRINT-002-01"[\s\S]*status: "PASS_CLOSED"/)
  for (const id of ['REQ-002-01-001', 'REQ-002-01-002', 'REQ-002-01-003', 'REQ-002-01-004', 'REQ-002-01-005', 'REQ-002-01-006', 'REQ-002-01-007']) {
    const request = backlog.match(new RegExp(`id: "${id}"[\\s\\S]*?status: "([A-Z_]+)"`))
    assert.equal(request?.[1], 'DONE', `${id} must be DONE`)
  }
  assert.match(source, /document_id: "BBAPLT-RPT-003"/)
  for (const id of ['BBAPLT-GDE-011', 'BBAPLT-GDE-012', 'BBAPLT-GDE-013', 'BBAPLT-GDE-014', 'BBAPLT-GDE-015', 'BBAPLT-GDE-016']) {
    assert.match(source, new RegExp(`target: "${id}"`))
  }
  assert.match(source, /PASS — Mission Domain is coherent/)
  assert.match(source, /APPROVED FOR SPRINT-002-02 — INSTITUTIONAL ASSETS/)
  assert.match(source, /No decision is made about aggregates, repositories, databases, APIs, commands/)
})
