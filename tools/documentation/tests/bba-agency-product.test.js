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
  assert.match(source, /reserved and currently undefined economic concept/)
  for (const phrase of ['does not represent a price', 'currency', 'token', 'credit', 'asset', 'right', 'reward', 'supply']) assert.match(source, new RegExp(phrase, 'i'))
  assert.match(source, /UNDECIDED/)
})
