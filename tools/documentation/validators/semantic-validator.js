import semver from 'semver'
import { basename } from 'node:path'
import {
  CANONICAL_METADATA_ORDER,
  PROFILES,
  RELATIONSHIP_TYPES,
  SCHEMA_VERSION,
  SEVERITIES,
} from '../shared/constants.js'
import { RULES } from '../rules/catalog.js'
import { createDiagnostic, hasErrors, sortDiagnostics } from '../shared/diagnostics.js'
import { hasCanonicalOrder } from '../parser/front-matter.js'
import { validateMetadataSchema } from '../schema/schema-validator.js'

const DOCUMENT_ID = /^[A-Z][A-Z0-9]*-(ARCH|REQ|ADR|SPEC|API|GDE|RUN|PLAY|POL|STD|PROC|REF|RPT|RFC|PROP|MTG|ROAD|REL|RES)-([0-9]{3,})$/
const DATE = /^\d{4}-\d{2}-\d{2}$/
const SCHEDULED_CYCLES = new Set(['QUARTERLY', 'SEMIANNUAL', 'ANNUAL'])

export function validateParsedDocument(document) {
  if (document.profile === PROFILES.LEGACY) return validateLegacy(document)
  if (document.profile === PROFILES.TEMPLATE) return validateTemplate(document)
  return validateCanonical(document)
}

function validateLegacy(document) {
  const diagnostic = createDiagnostic(RULES.LEGACY_CLASSIFICATION, {
    sourcePath: document.sourcePath,
    message: 'Document does not declare Schema 1.0.0 and is classified as LEGACY.',
  })
  return result(document, [diagnostic])
}

function validateTemplate(document) {
  const diagnostics = []
  const fields = new Set(document.metadataOrder)
  for (const field of CANONICAL_METADATA_ORDER) {
    if (!fields.has(field)) {
      diagnostics.push(templateDiagnostic(document, `Template is missing canonical field '${field}'.`, field))
    }
  }
  if (!hasCanonicalOrder(document)) {
    diagnostics.push(templateDiagnostic(document, 'Template metadata is not in canonical order.', null))
  }
  if (document.metadata.schema_version !== SCHEMA_VERSION) {
    diagnostics.push(templateDiagnostic(document, 'Template must declare schema_version 1.0.0.', 'schema_version'))
  }
  if (!document.title) {
    diagnostics.push(templateDiagnostic(document, 'Template must contain an H1 heading.', 'title'))
  }
  return result(document, diagnostics)
}

function templateDiagnostic(document, message, field) {
  return createDiagnostic(RULES.TEMPLATE_PROFILE, {
    severity: SEVERITIES.WARNING,
    sourcePath: document.sourcePath,
    field,
    message,
  })
}

function validateCanonical(document) {
  const diagnostics = []
  const metadata = document.metadata
  const base = {
    sourcePath: document.sourcePath,
    documentId: metadata.document_id ?? null,
  }

  if (!document.hasFrontMatter) {
    diagnostics.push(createDiagnostic(RULES.FRONT_MATTER_REQUIRED, {
      ...base,
      message: 'Canonical document must begin with YAML front matter.',
    }))
  }

  const schemaResult = validateMetadataSchema(metadata)
  for (const error of schemaResult.errors) {
    diagnostics.push(createDiagnostic(RULES.SCHEMA_CONFORMANCE, {
      ...base,
      field: schemaField(error),
      message: schemaMessage(error),
    }))
  }

  if (metadata.schema_version !== SCHEMA_VERSION) {
    diagnostics.push(createDiagnostic(RULES.SCHEMA_VERSION, {
      ...base,
      field: 'schema_version',
      message: `Expected schema_version '${SCHEMA_VERSION}'.`,
    }))
  }

  if (typeof metadata.version !== 'string' || !semver.valid(metadata.version)) {
    diagnostics.push(createDiagnostic(RULES.SEMVER, {
      ...base,
      field: 'version',
      message: 'Document version must be a valid stable Semantic Version.',
    }))
  }

  validateIdentifier(document, diagnostics, base)
  validateDates(document, diagnostics, base)
  validateLifecycle(document, diagnostics, base)
  validateOwnership(document, diagnostics, base)
  validateRelationships(document, diagnostics, base)
  validateImplementationRefs(document, diagnostics, base)

  if (!hasCanonicalOrder(document)) {
    diagnostics.push(createDiagnostic(RULES.METADATA_ORDER, {
      ...base,
      message: 'Front matter keys must follow the canonical Schema 1.0.0 order.',
    }))
  }

  if (!titleMatches(metadata.title, document.title)) {
    diagnostics.push(createDiagnostic(RULES.TITLE_H1, {
      ...base,
      field: 'title',
      message: 'Front matter title and first H1 must have equivalent text.',
    }))
  }

  if (containsPlaceholder(metadata)) {
    diagnostics.push(createDiagnostic(RULES.PLACEHOLDER_CANONICAL, {
      ...base,
      message: 'Placeholder values are forbidden in canonical documents.',
    }))
  }

  if (metadata.document_type === 'ADR' && !basename(document.sourcePath).startsWith(`${metadata.document_id}-`)) {
    diagnostics.push(createDiagnostic(RULES.FILENAME_CONVENTION, {
      ...base,
      field: 'document_id',
      message: 'ADR filename must begin with its canonical document_id.',
    }))
  }

  return result(document, diagnostics)
}

function validateIdentifier(document, diagnostics, base) {
  const value = document.metadata.document_id
  const match = typeof value === 'string' ? value.match(DOCUMENT_ID) : null
  if (!match) {
    diagnostics.push(createDiagnostic(RULES.IDENTIFIER_SYNTAX, {
      ...base,
      field: 'document_id',
      message: 'document_id must match <SCOPE>-<TYPE>-<NNN> with a registered type code.',
    }))
    return
  }
  if (/^0+$/.test(match[2])) {
    diagnostics.push(createDiagnostic(RULES.RESERVED_IDENTIFIER, {
      ...base,
      field: 'document_id',
      message: 'Identifier sequence 000 is permanently reserved.',
    }))
  }
}

function validateDates(document, diagnostics, base) {
  const { created_date: created, last_updated: updated, last_reviewed: reviewed, next_review: next } = document.metadata
  for (const [field, value] of Object.entries({ created_date: created, last_updated: updated, last_reviewed: reviewed, next_review: next })) {
    if (value !== null && value !== undefined && (typeof value !== 'string' || !DATE.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`)))) {
      diagnostics.push(createDiagnostic(RULES.DATE_CONSISTENCY, {
        ...base,
        field,
        message: `${field} must be a valid YYYY-MM-DD date or an allowed null.`,
      }))
    }
  }
  if (isDate(created) && isDate(updated) && updated < created) {
    dateOrderDiagnostic(diagnostics, base, 'last_updated', 'last_updated cannot precede created_date.')
  }
  if (isDate(created) && isDate(reviewed) && reviewed < created) {
    dateOrderDiagnostic(diagnostics, base, 'last_reviewed', 'last_reviewed cannot precede created_date.')
  }
  if (isDate(reviewed) && isDate(next) && next < reviewed) {
    dateOrderDiagnostic(diagnostics, base, 'next_review', 'next_review cannot precede last_reviewed.')
  }
}

function dateOrderDiagnostic(diagnostics, base, field, message) {
  diagnostics.push(createDiagnostic(RULES.DATE_CONSISTENCY, { ...base, field, message }))
}

function validateLifecycle(document, diagnostics, base) {
  const metadata = document.metadata
  const invalid = (
    (metadata.publication_status === 'ACTIVE' && metadata.document_state !== 'CURRENT') ||
    (['SUPERSEDED', 'DEPRECATED'].includes(metadata.publication_status) && metadata.document_state !== 'OBSOLETE') ||
    (metadata.publication_status === 'ARCHIVED' && metadata.document_state !== 'HISTORICAL') ||
    (['DRAFT', 'UNDER_REVIEW'].includes(metadata.publication_status) && !['CURRENT', 'EXPERIMENTAL'].includes(metadata.document_state))
  )
  if (invalid) {
    diagnostics.push(createDiagnostic(RULES.LIFECYCLE, {
      ...base,
      field: 'publication_status',
      message: 'publication_status and document_state violate the lifecycle matrix.',
    }))
  }
  const scheduled = SCHEDULED_CYCLES.has(metadata.review_cycle)
  if ((scheduled && !isDate(metadata.next_review)) || (!scheduled && metadata.next_review !== null)) {
    diagnostics.push(createDiagnostic(RULES.REVIEW_SCHEDULE, {
      ...base,
      field: 'next_review',
      message: 'next_review presence must match review_cycle scheduling rules.',
    }))
  }
  if (scheduled && isDate(metadata.next_review)) {
    const anchor = isDate(metadata.last_reviewed) ? metadata.last_reviewed : metadata.last_updated
    const months = { QUARTERLY: 3, SEMIANNUAL: 6, ANNUAL: 12 }[metadata.review_cycle]
    if (isDate(anchor) && metadata.next_review > addMonths(anchor, months)) {
      diagnostics.push(createDiagnostic(RULES.REVIEW_SCHEDULE, {
        ...base,
        field: 'next_review',
        message: `next_review exceeds the maximum ${metadata.review_cycle} interval.`,
      }))
    }
  }
}

function validateOwnership(document, diagnostics, base) {
  const metadata = document.metadata
  for (const field of ['author', 'owner']) {
    if (typeof metadata[field] !== 'string' || !metadata[field].trim()) {
      diagnostics.push(createDiagnostic(RULES.OWNERSHIP, {
        ...base,
        field,
        message: `${field} must identify a non-empty accountable role or party.`,
      }))
    }
  }
  if (['APPROVED', 'ACTIVE', 'SUPERSEDED', 'DEPRECATED', 'ARCHIVED', 'RETRACTED'].includes(metadata.publication_status) && !metadata.approver) {
    diagnostics.push(createDiagnostic(RULES.OWNERSHIP, {
      ...base,
      field: 'approver',
      message: 'Approved or relied-upon lifecycle states require an approver.',
    }))
  }
  if (['ARCHITECTURE', 'SPECIFICATION', 'API', 'RUNBOOK'].includes(metadata.document_type) && !metadata.technical_reviewers?.length) {
    diagnostics.push(createDiagnostic(RULES.OWNERSHIP, {
      ...base,
      field: 'technical_reviewers',
      message: `${metadata.document_type} documents require at least one technical reviewer.`,
    }))
  }
  if ((metadata.document_type === 'API' || metadata.production_gate_impact === 'REQUIRES_SEPARATE_APPROVAL') && !metadata.security_reviewers?.length) {
    diagnostics.push(createDiagnostic(RULES.OWNERSHIP, {
      ...base,
      field: 'security_reviewers',
      message: 'API or separately gated content requires at least one security reviewer.',
    }))
  }
  if (metadata.maintainer === null && metadata.document_type !== 'ADR' && !['ARCHIVED', 'RETRACTED'].includes(metadata.publication_status)) {
    diagnostics.push(createDiagnostic(RULES.OWNERSHIP, {
      ...base,
      field: 'maintainer',
      message: 'Only ADRs and closed historical records may omit a maintainer.',
    }))
  }
}

function validateRelationships(document, diagnostics, base) {
  const relationships = document.metadata.relationships
  if (!Array.isArray(relationships)) return
  const seen = new Set()
  for (const relationship of relationships) {
    if (!relationship || typeof relationship !== 'object' || !RELATIONSHIP_TYPES.has(relationship.type) || typeof relationship.target !== 'string') {
      diagnostics.push(createDiagnostic(RULES.RELATIONSHIP_SHAPE, {
        ...base,
        field: 'relationships',
        message: 'Relationship must contain one allowed type and a non-empty target.',
      }))
      continue
    }
    const key = `${relationship.type}\0${relationship.target}`
    if (seen.has(key)) {
      diagnostics.push(createDiagnostic(RULES.RELATIONSHIP_SHAPE, {
        ...base,
        field: 'relationships',
        message: `Duplicate relationship '${relationship.type}' to '${relationship.target}'.`,
      }))
    }
    seen.add(key)
  }
  const supersedes = new Set(document.metadata.supersedes ?? [])
  const edges = new Set(relationships.filter((item) => item.type === 'SUPERSEDES').map((item) => item.target))
  if (supersedes.size !== edges.size || [...supersedes].some((target) => !edges.has(target))) {
    if (supersedes.size || edges.size) {
      diagnostics.push(createDiagnostic(RULES.SUPERSESSION_CONSISTENCY, {
        ...base,
        field: 'supersedes',
        message: 'supersedes and SUPERSEDES relationships must declare the same targets.',
      }))
    }
  }
}

function validateImplementationRefs(document, diagnostics, base) {
  const refs = document.metadata.implementation_refs
  if (!Array.isArray(refs)) return
  for (const reference of refs) {
    if (!reference || typeof reference !== 'object' || ['repository', 'path', 'ref', 'kind', 'environment'].some((field) => !reference[field])) {
      diagnostics.push(createDiagnostic(RULES.IMPLEMENTATION_REFERENCE, {
        ...base,
        field: 'implementation_refs',
        message: 'Implementation reference must identify repository, path, ref, kind, and environment.',
      }))
    }
  }
}

function schemaField(error) {
  if (error.keyword === 'required') return error.params.missingProperty
  return error.instancePath.replace(/^\//, '').replaceAll('/', '.') || null
}

function schemaMessage(error) {
  const field = schemaField(error)
  return `${field ? `${field}: ` : ''}${error.message ?? 'schema validation failed'}.`
}

function titleMatches(metadataTitle, h1) {
  if (typeof metadataTitle !== 'string' || typeof h1 !== 'string') return false
  const normalize = (value) => value.trim().replace(/\s+/g, ' ').toLocaleLowerCase('en')
  const title = normalize(metadataTitle)
  const heading = normalize(h1)
  return heading === title || heading.endsWith(` — ${title}`)
}

function containsPlaceholder(value) {
  if (typeof value === 'string') return /<[^>]+>/.test(value)
  if (Array.isArray(value)) return value.some(containsPlaceholder)
  if (value && typeof value === 'object') return Object.values(value).some(containsPlaceholder)
  return false
}

function isDate(value) {
  return typeof value === 'string' && DATE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
}

function addMonths(date, months) {
  const value = new Date(`${date}T00:00:00Z`)
  value.setUTCMonth(value.getUTCMonth() + months)
  return value.toISOString().slice(0, 10)
}

function result(document, diagnostics) {
  const sorted = sortDiagnostics(diagnostics)
  return {
    valid: !hasErrors(sorted),
    diagnostics: sorted,
    statistics: {
      documents: 1,
      canonical: document.profile === PROFILES.CANONICAL ? 1 : 0,
      legacy: document.profile === PROFILES.LEGACY ? 1 : 0,
      templates: document.profile === PROFILES.TEMPLATE ? 1 : 0,
      errors: sorted.filter((item) => item.severity === 'ERROR').length,
      warnings: sorted.filter((item) => item.severity === 'WARNING').length,
      info: sorted.filter((item) => item.severity === 'INFO').length,
    },
    document,
  }
}
