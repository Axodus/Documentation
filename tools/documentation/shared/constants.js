export const VALIDATION_VERSION = '1.1.0'
export const SCHEMA_VERSION = '1.0.0'

export const PROFILES = Object.freeze({
  CANONICAL: 'CANONICAL',
  LEGACY: 'LEGACY',
  TEMPLATE: 'TEMPLATE',
})

export const SEVERITIES = Object.freeze({
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
})

export const CANONICAL_METADATA_ORDER = Object.freeze([
  'schema_version',
  'document_id',
  'aliases',
  'document_type',
  'title',
  'summary',
  'version',
  'publication_status',
  'document_state',
  'maturity_level',
  'authority_scope',
  'authority_level',
  'author',
  'owner',
  'maintainer',
  'technical_reviewers',
  'business_reviewers',
  'security_reviewers',
  'approver',
  'created_date',
  'last_updated',
  'last_reviewed',
  'review_cycle',
  'next_review',
  'supersedes',
  'relationships',
  'related_epics',
  'related_requirements',
  'related_adrs',
  'related_cores',
  'implementation_refs',
  'production_gate_impact',
])

export const GENERATED_PATHS = new Set([
  'documentation/DOCUMENTATION-MASTER-INDEX.md',
  'documentation/DOCUMENTATION-METADATA-COVERAGE.md',
  'documentation/DOCUMENTATION-RELATIONSHIP-REPORT.md',
  'documentation/DOCUMENTATION-DETERMINISTIC-GENERATION-RULES.md',
])

export const EXCLUDED_DIRECTORIES = new Set([
  '.git',
  'node_modules',
])

export const RELATIONSHIP_TYPES = new Set([
  'ADDRESSES',
  'REALIZES',
  'DEPENDS_ON',
  'VALIDATES',
  'OPERATES',
  'DELIVERS',
  'SUPERSEDES',
  'RELATES_TO',
  'GOVERNS',
  'DOCUMENTS',
  'DERIVED_FROM',
])

export const SEVERITY_ORDER = Object.freeze({
  ERROR: 0,
  WARNING: 1,
  INFO: 2,
})
