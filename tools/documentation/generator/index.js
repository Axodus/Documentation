import { resolve } from 'node:path'
import {
  discoverDocuments,
  loadBaseline,
  loadExceptions,
  validateRepository,
} from '../index.js'
import { buildManifest } from './outputs/manifest.js'
import { buildGraph } from './outputs/graph.js'
import { buildMasterIndex } from './outputs/master-index.js'
import { buildReports } from './outputs/reports.js'
import {
  GENERATOR_VERSION,
  GENERATED_ARTIFACTS,
} from './shared/constants.js'
import {
  normalizeText,
  serializeJson,
  sha256,
} from './serialization/canonical.js'
import {
  atomicWrite,
  readPersisted,
} from './writers/atomic.js'

export async function generateManifest(options = {}) {
  const context = await createContext(options)
  return buildManifest(context.documents, context.generatedAt)
}

export async function generateGraph(options = {}) {
  const manifest = options.manifest ?? await generateManifest(options)
  return buildGraph(manifest)
}

export async function generateMasterIndex(options = {}) {
  const manifest = options.manifest ?? await generateManifest(options)
  return buildMasterIndex(manifest)
}

export async function generateReports(options = {}) {
  const context = options.context ?? await createGenerationContext(options)
  return buildReports(context)
}

export async function generateAll(options = {}) {
  const context = await createGenerationContext(options)
  const reports = buildReports(context)
  const values = {
    'documentation.manifest.json': context.manifest,
    'documentation.graph.json': context.graph,
    'DOCUMENTATION-MASTER-INDEX.md': buildMasterIndex(context.manifest),
    ...reports,
  }
  const artifacts = {}
  for (const path of GENERATED_ARTIFACTS) {
    const value = values[path]
    artifacts[path] = typeof value === 'string' ? normalizeText(value) : serializeJson(value)
  }
  return {
    generator_version: GENERATOR_VERSION,
    generated_at: context.generatedAt,
    artifacts,
    statistics: {
      artifact_count: Object.keys(artifacts).length,
      source_documents: context.manifest.document_count,
      canonical_documents: context.manifest.statistics.compliant_documents,
      legacy_documents: context.manifest.statistics.legacy_documents,
      template_documents: context.manifest.statistics.template_documents,
      declared_relationships: context.graph.relationship_statistics.declared,
      derived_relationships: context.graph.relationship_statistics.derived,
    },
  }
}

export async function checkGeneratedArtifacts(generation, options = {}) {
  const output = generation?.artifacts ? generation : await generateAll(options)
  const root = resolve(options.root ?? process.cwd())
  const drift = []
  for (const path of Object.keys(output.artifacts).sort()) {
    const expected = output.artifacts[path]
    const actual = await readPersisted(resolve(root, path))
    const status = actual === null ? 'MISSING' : actual === expected ? 'CURRENT' : 'MODIFIED'
    drift.push({
      path,
      status,
      expected_sha256: sha256(expected),
      actual_sha256: actual === null ? null : sha256(actual),
    })
  }
  return {
    clean: drift.every((item) => item.status === 'CURRENT'),
    generated_at: output.generated_at,
    generator_version: GENERATOR_VERSION,
    artifact_count: drift.length,
    drift_count: drift.filter((item) => item.status !== 'CURRENT').length,
    drift,
  }
}

export async function writeGeneratedArtifacts(generation, options = {}) {
  const output = generation?.artifacts ? generation : await generateAll(options)
  const root = resolve(options.root ?? process.cwd())
  const written = []
  for (const path of Object.keys(output.artifacts).sort()) {
    await atomicWrite(resolve(root, path), output.artifacts[path], {
      beforeRename: options.beforeRename,
    })
    written.push(path)
  }
  return {
    generator_version: GENERATOR_VERSION,
    generated_at: output.generated_at,
    artifact_count: written.length,
    written,
  }
}

async function createGenerationContext(options) {
  const context = await createContext(options)
  const manifest = buildManifest(context.documents, context.generatedAt)
  const graph = buildGraph(manifest)
  return { ...context, manifest, graph }
}

async function createContext(options) {
  const root = resolve(options.root ?? process.cwd())
  const documents = options.documents ?? await discoverDocuments(root)
  const baseline = options.baseline ?? await loadBaseline(options.baselinePath, { root })
  const exceptions = options.exceptions ?? await loadExceptions(options.exceptionsPath, { root })
  const generatedAt = stableTimestamp(documents)
  const validation = options.validation ?? await validateRepository({
    root,
    documents,
    baseline,
    exceptions,
    currentDate: options.referenceDate ?? generatedAt,
  })
  return {
    root,
    documents,
    baseline,
    exceptions,
    validation,
    generatedAt,
  }
}

function stableTimestamp(documents) {
  const dates = documents
    .map((document) => document.metadata?.last_updated)
    .map((value) => value instanceof Date ? value.toISOString().slice(0, 10) : value)
    .filter((value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value))
    .sort()
  return `${dates.at(-1) ?? '1970-01-01'}T00:00:00Z`
}
