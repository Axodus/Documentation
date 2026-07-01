import assert from 'node:assert/strict'
import {
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import {
  before,
  test,
} from 'node:test'
import { main } from '../cli/index.js'
import {
  checkGeneratedArtifacts,
  generateAll,
  generateGraph,
  generateManifest,
  generateMasterIndex,
  generateReports,
  writeGeneratedArtifacts,
} from '../generator/index.js'

let generation
let secondGeneration

before(async () => {
  generation = await generateAll()
  secondGeneration = await generateAll()
})

test('manifest generation produces Manifest 1.1.0', () => {
  const manifest = JSON.parse(generation.artifacts['documentation.manifest.json'])
  assert.equal(manifest.manifest_version, '1.1.0')
  assert.equal(manifest.generator_version, '1.0.0')
  assert.equal(manifest.document_count, 683)
  assert.equal(manifest.documents.length, manifest.document_count)
})

test('graph generation produces nodes, relationships, reachability, and cycles', () => {
  const graph = JSON.parse(generation.artifacts['documentation.graph.json'])
  assert.equal(graph.graph_version, '1.1.0')
  assert.equal(graph.nodes.length, 683)
  assert.ok(Array.isArray(graph.derived_relationships))
  assert.ok(Array.isArray(graph.reachability.from_master_index))
  assert.ok(Array.isArray(graph.cycles))
})

test('master index generation is complete and prohibits manual editing', () => {
  const index = generation.artifacts['DOCUMENTATION-MASTER-INDEX.md']
  assert.match(index, /GENERATED FILE — DO NOT EDIT MANUALLY/)
  assert.match(index, /## Documents by Type/)
  assert.match(index, /## Documents by Authority/)
  assert.match(index, /## Documents by Lifecycle/)
  assert.match(index, /## Generated Artifacts/)
})

test('report generation produces all persistent reports', () => {
  const paths = Object.keys(generation.artifacts)
  assert.ok(paths.includes('DOCUMENTATION-METADATA-COVERAGE.md'))
  assert.ok(paths.includes('DOCUMENTATION-RELATIONSHIP-REPORT.md'))
  assert.ok(paths.includes('DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md'))
  assert.ok(paths.includes('documentation.validation.json'))
  assert.ok(paths.includes('documentation.baseline.report.json'))
})

test('public Generator API is complete', () => {
  for (const operation of [
    generateManifest,
    generateGraph,
    generateMasterIndex,
    generateReports,
    generateAll,
    checkGeneratedArtifacts,
    writeGeneratedArtifacts,
  ]) assert.equal(typeof operation, 'function')
})

test('two identical generations are byte-identical', () => {
  assert.deepEqual(secondGeneration.artifacts, generation.artifacts)
})

test('canonical serialization uses LF and terminal newline', () => {
  for (const content of Object.values(generation.artifacts)) {
    assert.doesNotMatch(content, /\r/)
    assert.ok(content.endsWith('\n'))
  }
})

test('write mode atomically persists artifacts', async () => {
  await withTemporaryDirectory(async (root) => {
    const fixture = artifactFixture('new\n')
    const result = await writeGeneratedArtifacts(fixture, { root })
    assert.deepEqual(result.written, ['generated.txt'])
    assert.equal(await readFile(join(root, 'generated.txt'), 'utf8'), 'new\n')
    assert.deepEqual(await temporaryFiles(root), [])
  })
})

test('interrupted write preserves target and removes temporary artifact', async () => {
  await withTemporaryDirectory(async (root) => {
    const path = join(root, 'generated.txt')
    await writeFile(path, 'old\n', 'utf8')
    await assert.rejects(
      writeGeneratedArtifacts(artifactFixture('new\n'), {
        root,
        beforeRename: () => {
          throw new Error('simulated interruption')
        },
      }),
      /simulated interruption/,
    )
    assert.equal(await readFile(path, 'utf8'), 'old\n')
    assert.deepEqual(await temporaryFiles(root), [])
  })
})

test('check mode detects missing, modified, and current artifacts without writes', async () => {
  await withTemporaryDirectory(async (root) => {
    const fixture = artifactFixture('expected\n')
    const missing = await checkGeneratedArtifacts(fixture, { root })
    assert.equal(missing.drift[0].status, 'MISSING')
    await writeFile(join(root, 'generated.txt'), 'different\n', 'utf8')
    const modified = await checkGeneratedArtifacts(fixture, { root })
    assert.equal(modified.drift[0].status, 'MODIFIED')
    assert.equal(await readFile(join(root, 'generated.txt'), 'utf8'), 'different\n')
    await writeGeneratedArtifacts(fixture, { root })
    const current = await checkGeneratedArtifacts(fixture, { root })
    assert.equal(current.clean, true)
    assert.equal(current.drift[0].status, 'CURRENT')
  })
})

test('CLI generation check delegates to public Generator API', async () => {
  let stdout = ''
  const status = await main(['generate', '--check'], {
    stdout: (content) => { stdout += content },
    stderr: () => {},
  })
  assert.equal(status, 0)
  assert.match(stdout, /Documentation Generator 1\.0\.0/)
  assert.match(stdout, /Mode: CHECK/)
})

test('validation report is sourced from Validation Framework 1.1.0', () => {
  const report = JSON.parse(generation.artifacts['documentation.validation.json'])
  assert.equal(report.validation_version, '1.1.0')
  assert.equal(report.errors, 0)
})

function artifactFixture(content) {
  return {
    generator_version: '1.0.0',
    generated_at: '2026-07-01T00:00:00Z',
    artifacts: { 'generated.txt': content },
  }
}

async function withTemporaryDirectory(operation) {
  const root = await mkdtemp(join(tmpdir(), 'documentation-generator-'))
  try {
    await operation(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

async function temporaryFiles(root) {
  return (await readdir(root)).filter((path) => path.includes('.tmp-'))
}
