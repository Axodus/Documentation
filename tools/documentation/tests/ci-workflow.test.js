import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const workflowPath = new URL('../../../.github/workflows/documentation.yml', import.meta.url)
const workflow = await readFile(workflowPath, 'utf8')

test('documentation workflow declares required events and read-only permission', () => {
  assert.match(workflow, /pull_request:/)
  assert.match(workflow, /push:\n\s+branches:\n\s+- main/)
  assert.match(workflow, /workflow_dispatch:/)
  assert.match(workflow, /cron: "0 3 \* \* 1"/)
  assert.match(workflow, /permissions:\n\s+contents: read/)
})

test('documentation workflow freezes runtime and dependency installation', () => {
  assert.match(workflow, /node-version: 24/)
  assert.match(workflow, /version: 11\.1\.2/)
  assert.match(workflow, /pnpm install --frozen-lockfile/)
  assert.doesNotMatch(workflow, /\bnpm install\b/)
})

test('documentation workflow executes every required read-only stage', () => {
  for (const command of [
    'pnpm docs:validate -- --summary',
    'pnpm docs:validate:relationships -- --summary',
    'pnpm docs:baseline:check',
    'pnpm docs:exceptions:check',
    'pnpm docs:generate:check',
    'pnpm docs:build',
  ]) assert.ok(workflow.includes(command), `Missing workflow command: ${command}`)
  assert.match(workflow, /validateInstructionsSnapshot/)
  assert.match(workflow, /listSnapshots/)
  assert.match(workflow, /loadInstructionsSnapshot/)
  assert.match(workflow, /registryValid/)
})

test('documentation workflow contains no mutating framework command', () => {
  assert.doesNotMatch(workflow, /run:\s*pnpm docs:generate\s*(?:\n|$)/)
  assert.doesNotMatch(workflow, /pnpm docs:snapshot(?:\s|\n|$)/)
  assert.doesNotMatch(workflow, /createInstructionsSnapshot/)
  assert.doesNotMatch(workflow, /git\s+(?:add|commit|push)\b/)
})

test('documentation workflow always audits tracked repository state', () => {
  assert.match(workflow, /name: Verify checkout remains unchanged\n\s+if: always\(\)/)
  assert.match(workflow, /git diff --exit-code/)
  assert.match(workflow, /git diff --cached --exit-code/)
  assert.match(workflow, /git status --porcelain --untracked-files=all/)
})
