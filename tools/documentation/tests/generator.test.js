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
import { discoverDocuments } from '../index.js'
import {
  checkGeneratedArtifacts,
  generateAll,
  generateGraph,
  generateManifest,
  generateMasterIndex,
  generateReports,
  writeGeneratedArtifacts,
} from '../generator/index.js'
import { buildGraph } from '../generator/outputs/graph.js'

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
  assert.ok(manifest.document_count > 0)
  assert.equal(manifest.documents.length, manifest.document_count)
})

test('graph generation produces nodes, relationships, reachability, and cycles', () => {
  const graph = JSON.parse(generation.artifacts['documentation.graph.json'])
  const manifest = JSON.parse(generation.artifacts['documentation.manifest.json'])
  assert.equal(graph.graph_version, '1.1.0')
  assert.equal(graph.nodes.length, manifest.document_count)
  assert.ok(Array.isArray(graph.derived_relationships))
  assert.ok(Array.isArray(graph.reachability.from_master_index))
  assert.ok(Array.isArray(graph.cycles))
})

test('graph cycle detection reports a simple cycle deterministically', () => {
  const graph = buildGraph(graphFixture({
    documents: ['A', 'B', 'C'],
    relationships: [
      edge('A', 'RELATES_TO', 'B'),
      edge('B', 'RELATES_TO', 'C'),
      edge('C', 'RELATES_TO', 'A'),
    ],
  }))
  assert.deepEqual(graph.cycles, [{
    nodes: ['A', 'B', 'C'],
    edge_count: 3,
    source_document_ids: ['A', 'B', 'C'],
    relationship_types: ['RELATES_TO'],
    allowed: true,
  }])
})

test('graph cycle detection handles acyclic and disconnected graphs', () => {
  const graph = buildGraph(graphFixture({
    documents: ['A', 'B', 'C', 'D'],
    relationships: [
      edge('A', 'RELATES_TO', 'B'),
      edge('C', 'RELATES_TO', 'D'),
    ],
  }))
  assert.deepEqual(graph.cycles, [])
})

test('graph cycle detection reports disconnected cycles in deterministic order', () => {
  const graph = buildGraph(graphFixture({
    documents: ['A', 'B', 'C', 'D'],
    relationships: [
      edge('D', 'DEPENDS_ON', 'C'),
      edge('C', 'DEPENDS_ON', 'D'),
      edge('B', 'RELATES_TO', 'A'),
      edge('A', 'RELATES_TO', 'B'),
    ],
  }))
  assert.deepEqual(graph.cycles.map((cycle) => ({
    nodes: cycle.nodes,
    relationship_types: cycle.relationship_types,
    allowed: cycle.allowed,
  })), [
    { nodes: ['A', 'B'], relationship_types: ['RELATES_TO'], allowed: true },
    { nodes: ['C', 'D'], relationship_types: ['DEPENDS_ON'], allowed: false },
  ])
})

test('graph cycle detection handles duplicate edges and unresolved targets', () => {
  const graph = buildGraph(graphFixture({
    documents: ['A', 'B'],
    relationships: [
      edge('A', 'RELATES_TO', 'B'),
      edge('A', 'RELATES_TO', 'B'),
      edge('B', 'RELATES_TO', 'A'),
      edge('B', 'RELATES_TO', 'MISSING'),
    ],
  }))
  assert.equal(graph.duplicate_references.length, 2)
  assert.equal(graph.unresolved_references.length, 1)
  assert.deepEqual(graph.cycles, [{
    nodes: ['A', 'B'],
    edge_count: 3,
    source_document_ids: ['A', 'B'],
    relationship_types: ['RELATES_TO'],
    allowed: true,
  }])
})

test('graph cycle detection handles large graphs without path explosion', () => {
  const documents = Array.from({ length: 500 }, (_, index) => `NODE-${index}`)
  const relationships = []
  for (let index = 0; index < 499; index += 1) relationships.push(edge(`NODE-${index}`, 'RELATES_TO', `NODE-${index + 1}`))
  for (let index = 0; index < 1500; index += 1) relationships.push(edge(`NODE-${index % 400}`, 'DOCUMENTS', `NODE-${100 + (index % 400)}`))
  relationships.push(edge('NODE-499', 'RELATES_TO', 'NODE-0'))

  const graph = buildGraph(graphFixture({ documents, relationships }))
  assert.equal(graph.relationship_statistics.total, 2000)
  assert.equal(graph.cycles.length, 1)
  assert.equal(graph.cycles[0].nodes.length, 500)
})

test('master index generation is complete and prohibits manual editing', () => {
  const index = generation.artifacts['documentation/DOCUMENTATION-MASTER-INDEX.md']
  assert.match(index, /GENERATED FILE — DO NOT EDIT MANUALLY/)
  assert.match(index, /## Documents by Type/)
  assert.match(index, /## Documents by Authority/)
  assert.match(index, /## Documents by Lifecycle/)
  assert.match(index, /## Generated Artifacts/)
})

test('public generated artifacts exclude private disclosure and request surfaces', () => {
  const manifest = JSON.parse(generation.artifacts['documentation.manifest.json'])
  const graph = JSON.parse(generation.artifacts['documentation.graph.json'])
  const masterIndex = generation.artifacts['documentation/DOCUMENTATION-MASTER-INDEX.md']
  assert.equal(manifest.documents.some((item) => item.source_path.startsWith('institutional-disclosure/')), false)
  assert.equal(manifest.documents.some((item) => item.source_path.startsWith('requests/')), false)
  assert.equal(graph.nodes.some((item) => item.source_path.startsWith('institutional-disclosure/')), false)
  assert.equal(graph.nodes.some((item) => item.source_path.startsWith('requests/')), false)
  assert.doesNotMatch(masterIndex, /\]\(institutional-disclosure\//)
  assert.doesNotMatch(masterIndex, /\]\(requests\//)
})

test('private disclosure files remain discoverable for internal validation', async () => {
  const documents = await discoverDocuments(process.cwd())
  assert.equal(documents.some((item) => item.sourcePath === 'institutional-disclosure/tokenomics-draft.md'), true)
  assert.equal(documents.some((item) => item.sourcePath === 'requests/track-c-tokenomics-draft-execution-request.md'), true)
})

test('report generation produces all persistent reports', () => {
  const paths = Object.keys(generation.artifacts)
  assert.ok(paths.includes('documentation/DOCUMENTATION-METADATA-COVERAGE.md'))
  assert.ok(paths.includes('documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md'))
  assert.ok(paths.includes('documentation/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md'))
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

function graphFixture({ documents, relationships }) {
  return {
    generated_at: '2026-07-01T00:00:00Z',
    documents: documents.map((id) => ({
      document_id: id,
      document_type: 'GUIDE',
      classification: 'CANONICAL',
      publication_status: 'DRAFT',
      authority_level: 'PROJECT',
      source_path: `${id}.md`,
      title: id,
    })),
    relationships,
    derived_relationships: [],
  }
}

function edge(source, type, target) {
  return {
    source,
    type,
    target,
    source_path: `${source}.md`,
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
