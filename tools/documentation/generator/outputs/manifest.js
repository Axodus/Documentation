import {
  GENERATOR_VERSION,
  GENERATED_ARTIFACTS,
  MANIFEST_VERSION,
  REPOSITORY,
  SCHEMA_VERSION,
} from '../shared/constants.js'
import {
  canonicalizeDocuments,
  declaredRelationships,
  deriveRelationships,
} from '../canonicalization/documents.js'

export function buildManifest(documents, generatedAt) {
  const entries = canonicalizeDocuments(documents)
  const relationships = declaredRelationships(documents)
  const derived = deriveRelationships(documents, relationships)
  return {
    manifest_version: MANIFEST_VERSION,
    schema_version: SCHEMA_VERSION,
    generator_version: GENERATOR_VERSION,
    generated_at: generatedAt,
    repository: REPOSITORY,
    generation_method: generationMethod(),
    document_count: entries.length,
    documents: entries,
    relationships,
    derived_relationships: derived,
    generated_artifacts: [...GENERATED_ARTIFACTS],
    statistics: buildStatistics(entries, relationships, derived),
  }
}

function generationMethod() {
  return {
    encoding: 'UTF-8',
    execution: 'AXODUS-DOCUMENTATION-EXEC-08',
    hash: 'SHA-256 of UTF-8 source content normalized to LF',
    line_endings: 'LF',
    mode: 'persistent deterministic generator',
    null_handling: 'unavailable scalar metadata is null; unavailable or undeclared list metadata is []',
    persistent_generator_added: true,
    serialization: 'canonical JSON, lexicographically sorted object keys, two-space indentation, terminal LF',
    sorting: 'Unicode order by normalized repository-relative POSIX source_path',
    source_scope: 'Markdown sources excluding generated outputs, dependencies, caches, and build artifacts',
    timestamp: 'maximum declared last_updated date normalized to 00:00:00Z',
  }
}

function buildStatistics(documents, relationships, derived) {
  return {
    total_documents: documents.length,
    compliant_documents: count(documents, (item) => item.classification === 'CANONICAL'),
    legacy_documents: count(documents, (item) => item.classification === 'LEGACY'),
    template_documents: count(documents, (item) => item.classification === 'TEMPLATE'),
    generated_documents: GENERATED_ARTIFACTS.length,
    documents_missing_metadata: count(documents, (item) => item.classification === 'LEGACY'),
    declared_relationships: relationships.length,
    derived_relationships: derived.length,
    documents_by_type: grouped(documents, 'document_type'),
    documents_by_publication_status: grouped(documents, 'publication_status'),
    documents_by_authority_level: grouped(documents, 'authority_level'),
    documents_by_maturity: grouped(documents, 'maturity_level'),
    documents_by_owner: grouped(documents, 'owner'),
  }
}

function grouped(documents, field) {
  const result = {}
  for (const document of documents) {
    const key = document[field] ?? 'UNSPECIFIED'
    result[key] = (result[key] ?? 0) + 1
  }
  return Object.fromEntries(Object.entries(result).sort(([left], [right]) => left.localeCompare(right)))
}

function count(values, predicate) {
  return values.filter(predicate).length
}
