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
