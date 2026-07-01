import { GENERATED_ARTIFACTS } from '../shared/constants.js'
import { normalizeText } from '../serialization/canonical.js'

export function buildMasterIndex(manifest) {
  const statistics = manifest.statistics
  const sections = [
    '# Documentation Master Index',
    '',
    '> GENERATED FILE — DO NOT EDIT MANUALLY. Run `pnpm docs:generate` to reproduce it.',
    '',
    `Manifest Version: ${manifest.manifest_version}`,
    `Generator Version: ${manifest.generator_version}`,
    `Generated At: ${manifest.generated_at}`,
    `Source Documents: ${manifest.document_count}`,
    '',
    '## Navigation',
    '',
    '- [Repository Summary](#repository-summary)',
    '- [Documents by Type](#documents-by-type)',
    '- [Documents by Authority](#documents-by-authority)',
    '- [Documents by Lifecycle](#documents-by-lifecycle)',
    '- [Canonical Documents](#canonical-documents)',
    '- [Legacy Documents](#legacy-documents)',
    '- [Templates](#templates)',
    '- [Generated Artifacts](#generated-artifacts)',
    '',
    '## Repository Summary',
    '',
    '| Metric | Count |',
    '|---|---:|',
    `| Total source documents | ${statistics.total_documents} |`,
    `| Canonical documents | ${statistics.compliant_documents} |`,
    `| Legacy documents | ${statistics.legacy_documents} |`,
    `| Template documents | ${statistics.template_documents} |`,
    `| Declared relationships | ${statistics.declared_relationships} |`,
    `| Derived relationships | ${statistics.derived_relationships} |`,
    '',
    countSection('Documents by Type', statistics.documents_by_type),
    countSection('Documents by Authority', statistics.documents_by_authority_level),
    countSection('Documents by Lifecycle', statistics.documents_by_publication_status),
    documentSection('Canonical Documents', manifest.documents.filter((item) => item.classification === 'CANONICAL')),
    documentSection('Legacy Documents', manifest.documents.filter((item) => item.classification === 'LEGACY')),
    documentSection('Templates', manifest.documents.filter((item) => item.classification === 'TEMPLATE')),
    '## Generated Artifacts',
    '',
    '| Artifact | Purpose |',
    '|---|---|',
    ...GENERATED_ARTIFACTS.map((path) => `| [${escapeCell(path)}](${path}) | Canonical derived repository artifact |`),
  ]
  return normalizeText(sections.join('\n'))
}

function countSection(title, values) {
  const lines = [
    `## ${title}`,
    '',
    '| Value | Count |',
    '|---|---:|',
  ]
  for (const [value, count] of Object.entries(values)) {
    lines.push(`| ${escapeCell(value)} | ${count} |`)
  }
  return lines.join('\n')
}

function documentSection(title, documents) {
  const lines = [
    `## ${title}`,
    '',
    '| ID | Title | Type | Status | Authority | Version | Owner | Relative Path |',
    '|---|---|---|---|---|---|---|---|',
  ]
  for (const document of documents) {
    lines.push([
      document.document_id ?? '—',
      escapeCell(document.title ?? '—'),
      document.document_type ?? '—',
      escapeCell(document.publication_status ?? '—'),
      document.authority_level ?? '—',
      document.version ?? '—',
      escapeCell(document.owner ?? '—'),
      `[${escapeCell(document.source_path)}](${encodeURI(document.source_path)})`,
    ].map((value) => ` ${value} `).join('|').replace(/^/, '|').replace(/$/, '|'))
  }
  if (!documents.length) lines.push('| — | — | — | — | — | — | — | — |')
  return lines.join('\n')
}

function escapeCell(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ')
}
