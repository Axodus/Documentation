import {
  CANONICAL_FIELDS,
  GENERATOR_VERSION,
  PUBLIC_GENERATION_EXCLUDED_PATH_PREFIXES,
} from '../shared/constants.js'
import { normalizeText } from '../serialization/canonical.js'

export function buildReports(context) {
  return {
    'documentation/DOCUMENTATION-METADATA-COVERAGE.md': buildMetadataCoverage(context),
    'documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md': buildRelationshipReport(context),
    'documentation/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md': buildGenerationRules(context),
    'documentation.validation.json': context.validation.report,
    'documentation.baseline.report.json': buildBaselineReport(context),
  }
}

function buildMetadataCoverage({ manifest, documents, validation }) {
  const fieldRows = CANONICAL_FIELDS.map((field) => {
    const present = documents.filter((document) => Object.hasOwn(document.metadata, field)).length
    const missing = documents.length - present
    const coverage = documents.length ? ((present / documents.length) * 100).toFixed(2) : '100.00'
    return `| \`${field}\` | ${present} | ${missing} | ${coverage}% |`
  })
  const legacy = manifest.documents.filter((item) => item.classification === 'LEGACY')
  const templates = manifest.documents.filter((item) => item.classification === 'TEMPLATE')
  const templateWarnings = validation.diagnostics.filter((item) =>
    item.rule_id === 'DOC-RULE-002' && item.source_path?.startsWith('templates/')).length
  const governance = manifest.documents.filter((item) => item.source_path.startsWith('governance/'))
  const governanceErrors = validation.diagnostics.filter((item) =>
    item.severity === 'ERROR' && item.source_path?.startsWith('governance/')).length
  const fieldsPresent = documents.reduce((total, document) =>
    total + CANONICAL_FIELDS.filter((field) => Object.hasOwn(document.metadata, field)).length, 0)
  const totalFields = documents.length * CANONICAL_FIELDS.length
  const coverage = totalFields ? ((fieldsPresent / totalFields) * 100).toFixed(2) : '100.00'

  return normalizeText([
    '# Documentation Metadata Coverage',
    '',
    '> GENERATED FILE — DO NOT EDIT MANUALLY.',
    '',
    `Generated At: ${manifest.generated_at}`,
    `Generator Version: ${GENERATOR_VERSION}`,
    '',
    '## Summary',
    '',
    `- Source documents: ${manifest.document_count}`,
    `- Canonical metadata field coverage: ${coverage}%`,
    `- Schema 1.0.0 canonical documents: ${manifest.statistics.compliant_documents}`,
    `- Legacy documents: ${legacy.length}`,
    `- Documents missing canonical metadata: ${manifest.statistics.documents_missing_metadata}`,
    `- Documents without YAML front matter: ${documents.filter((item) => !item.hasFrontMatter).length}`,
    `- Template documents: ${templates.length}`,
    `- Template structural compliance: ${templates.length - templateWarnings}/${templates.length}`,
    `- Governance compliance: ${governance.length - governanceErrors}/${governance.length}`,
    '',
    '## Field Presence',
    '',
    '| Field | Present | Missing | Coverage |',
    '|---|---:|---:|---:|',
    ...fieldRows,
    '',
    '## Documents Without Front Matter',
    '',
    ...listOrNone(documents.filter((item) => !item.hasFrontMatter).map((item) => item.sourcePath)),
    '',
    '## Legacy Documents',
    '',
    ...listOrNone(legacy.map((item) => item.source_path)),
    '',
    '## Recommendations',
    '',
    '- Preserve `MIGRATE_ON_CHANGE` for baselined legacy documents.',
    '- Require Schema 1.0.0 for new governed documents.',
    '- Resolve metadata gaps through explicit migration executions, not generated output.',
  ].join('\n'))
}

function buildRelationshipReport({ graph }) {
  return normalizeText([
    '# Documentation Relationship Report',
    '',
    '> GENERATED FILE — DO NOT EDIT MANUALLY.',
    '',
    `Generated At: ${graph.generated_at}`,
    `Generator Version: ${graph.generator_version}`,
    '',
    '## Summary',
    '',
    `- Graph nodes: ${graph.nodes.length}`,
    `- Declared relationships: ${graph.relationship_statistics.declared}`,
    `- Derived relationships: ${graph.relationship_statistics.derived}`,
    `- Relationship types: ${graph.relationship_types.length}`,
    `- Unresolved references: ${graph.unresolved_references.length}`,
    `- Duplicate references: ${graph.duplicate_references.length}`,
    `- Orphan documents: ${graph.orphan_documents.length}`,
    `- Cycles: ${graph.cycles.length}`,
    '',
    '## Relationship Counts',
    '',
    '| Type | Count |',
    '|---|---:|',
    ...Object.entries(graph.relationship_counts).map(([type, count]) => `| \`${type}\` | ${count} |`),
    '',
    '## Unresolved References',
    '',
    ...listOrNone(graph.unresolved_references.map(formatEdge)),
    '',
    '## Duplicate References',
    '',
    ...listOrNone(graph.duplicate_references.map(formatEdge)),
    '',
    '## Cycles',
    '',
    ...listOrNone(graph.cycles.map((cycle) =>
      `${cycle.nodes.join(' → ')} (${cycle.allowed ? 'permitted' : 'requires Validation Engine assessment'}; ${cycle.relationship_types.join(', ')})`)),
    '',
    '## Orphan Documents',
    '',
    ...listOrNone(graph.orphan_documents),
  ].join('\n'))
}

function buildGenerationRules({ manifest }) {
  return normalizeText([
    '# Deterministic Documentation Generation Rules',
    '',
    '> GENERATED FILE — DO NOT EDIT MANUALLY.',
    '',
    `Version: ${GENERATOR_VERSION}`,
    `Generated At: ${manifest.generated_at}`,
    '',
    '## Source Scope',
    '',
    'Discover repository Markdown through the public Validation Framework API. Exclude generated outputs, dependency trees, VitePress build/cache output, Git internals, and private disclosure/request surfaces from public generated artifacts. Generated artifacts are listed separately and never recursively hashed.',
    '',
    '## Public Artifact Exclusions',
    '',
    ...PUBLIC_GENERATION_EXCLUDED_PATH_PREFIXES.map((prefix) => `- \`${prefix}**\``),
    '',
    'Private excluded paths may still be validated by the Validation Framework outside generator public-artifact mode.',
    '',
    '## Canonicalization',
    '',
    '- Normalize repository-relative paths to POSIX separators.',
    '- Preserve declared metadata; unavailable scalar values become `null` and unavailable lists become `[]`.',
    '- Derive `SUPERSEDES` and inverse `SUPERSEDED_BY` edges only from declared `supersedes` metadata.',
    '- Sort documents by `source_path` and relationships by source, type, target, then source path.',
    '',
    '## Encoding and Line Endings',
    '',
    'Read and emit UTF-8. Normalize CRLF and CR to LF. End every generated artifact with exactly one LF.',
    '',
    '## Stable Timestamp',
    '',
    'Set generation timestamps to the greatest declared `last_updated` date, normalized to `00:00:00Z`; use `1970-01-01T00:00:00Z` when no valid date exists.',
    '',
    '## Hashing',
    '',
    'Use lowercase SHA-256 over normalized UTF-8 source bytes. Generated artifacts are excluded from source hashes and from recursive generation inputs.',
    '',
    '## JSON Serialization',
    '',
    'Sort object keys lexicographically, preserve explicitly ordered arrays, indent by two spaces, emit unescaped Unicode, and terminate with LF.',
    '',
    '## Atomic Persistence',
    '',
    'Generate in memory, write a same-directory temporary file, fsync the file, atomically rename it over the target, and remove temporary files after success or failure.',
    '',
    '## Drift Detection',
    '',
    'Check mode compares canonical in-memory bytes with persisted bytes. It performs no writes and reports `MISSING`, `MODIFIED`, or `CURRENT` status per artifact.',
    '',
    '## Reproducibility',
    '',
    'Identical source bytes, governed inputs, and explicit metadata produce byte-identical generated artifacts.',
  ].join('\n'))
}

function buildBaselineReport({ manifest, baseline, exceptions, validation }) {
  return {
    baseline_version: baseline?.baseline_version ?? null,
    generator_version: GENERATOR_VERSION,
    generation_timestamp: manifest.generated_at,
    total_documents: manifest.document_count,
    canonical_documents: manifest.statistics.compliant_documents,
    legacy_documents: manifest.statistics.legacy_documents,
    baseline_entries: baseline?.entries?.length ?? 0,
    exception_entries: exceptions?.exceptions?.length ?? 0,
    known_legacy: validation.baseline.statistics.known_legacy,
    changed_legacy: validation.baseline.statistics.changed_legacy,
    new_legacy: validation.baseline.statistics.unbaselined_legacy,
    removed_legacy: validation.baseline.statistics.removed_legacy,
    expired_exceptions: validation.exceptions.statistics.expired_exceptions,
    repository_summary: {
      baseline_valid: validation.baseline.valid,
      exceptions_valid: validation.exceptions.valid,
      active_exceptions: validation.exceptions.statistics.active_exceptions,
      revoked_exceptions: validation.exceptions.statistics.revoked_exceptions,
      invalid_exceptions: validation.exceptions.statistics.invalid_exceptions,
    },
  }
}

function formatEdge(edge) {
  return `${edge.source} —${edge.type}→ ${edge.target}`
}

function listOrNone(values) {
  return values.length ? values.map((value) => `- ${value}`) : ['None.']
}
