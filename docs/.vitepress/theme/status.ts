export const DISPLAY_STATUSES = [
  'Draft',
  'Planned',
  'Needs Review',
  'Prototype',
  'Testnet',
  'Active if Verified',
  'Deprecated'
] as const

export type DisplayStatus = typeof DISPLAY_STATUSES[number]

export type StatusMetadata = {
  publication_status?: unknown
  document_state?: unknown
  maturity_level?: unknown
  legacy_status?: unknown
}

export type DisplayStatusResolution =
  | {
      state: 'RESOLVED'
      status: DisplayStatus
      source: 'PUBLICATION_STATUS' | 'LEGACY_STATUS' | 'CONSISTENT_SOURCES'
    }
  | {
      state: 'NO_BADGE_WITH_REVIEW_WARNING'
      reason: 'AMBIGUOUS_METADATA' | 'MISSING_METADATA' | 'UNSUPPORTED_METADATA'
    }

export const STATUS_PRESENTATION: Record<DisplayStatus, {
  icon: string
  className: string
  description: string
}> = {
  Draft: {
    icon: '●',
    className: 'status-draft',
    description: 'Page under active development; not a final production specification.'
  },
  Planned: {
    icon: '◆',
    className: 'status-planned',
    description: 'Direction or roadmap item without confirmed implementation.'
  },
  'Needs Review': {
    icon: '!',
    className: 'status-needs-review',
    description: 'Domain, governance, security, or implementation review is required.'
  },
  Prototype: {
    icon: '◇',
    className: 'status-prototype',
    description: 'Experimental capability that is not production-ready.'
  },
  Testnet: {
    icon: '≋',
    className: 'status-testnet',
    description: 'Validated only in a non-production environment.'
  },
  'Active if Verified': {
    icon: '✓',
    className: 'status-active-if-verified',
    description: 'Conditional state requiring current evidence and deployment context.'
  },
  Deprecated: {
    icon: '×',
    className: 'status-deprecated',
    description: 'Retained for reference and not suitable as current guidance.'
  }
}

const normalizedDisplayStatuses = new Map(
  DISPLAY_STATUSES.map((status) => [status.toLowerCase(), status])
)

const publicationStatusMap = new Map<string, DisplayStatus>([
  ['DRAFT', 'Draft'],
  ['UNDER_REVIEW', 'Needs Review'],
  ['DEPRECATED', 'Deprecated']
])

function normalizeExplicitStatus(value: unknown): DisplayStatus | undefined {
  if (typeof value !== 'string') return undefined
  return normalizedDisplayStatuses.get(value.trim().toLowerCase())
}

export function isDisplayStatus(value: unknown): value is DisplayStatus {
  return typeof value === 'string' && DISPLAY_STATUSES.includes(value as DisplayStatus)
}

export function resolveDisplayStatus(metadata: StatusMetadata): DisplayStatusResolution {
  const publicationStatus = typeof metadata.publication_status === 'string'
    ? publicationStatusMap.get(metadata.publication_status.trim().toUpperCase())
    : undefined
  const legacyStatus = normalizeExplicitStatus(metadata.legacy_status)

  if (publicationStatus && legacyStatus && publicationStatus !== legacyStatus) {
    return {
      state: 'NO_BADGE_WITH_REVIEW_WARNING',
      reason: 'AMBIGUOUS_METADATA'
    }
  }

  if (publicationStatus && legacyStatus) {
    return {
      state: 'RESOLVED',
      status: publicationStatus,
      source: 'CONSISTENT_SOURCES'
    }
  }

  if (legacyStatus) {
    return {
      state: 'RESOLVED',
      status: legacyStatus,
      source: 'LEGACY_STATUS'
    }
  }

  if (publicationStatus) {
    return {
      state: 'RESOLVED',
      status: publicationStatus,
      source: 'PUBLICATION_STATUS'
    }
  }

  const hasStatusMetadata = [
    metadata.publication_status,
    metadata.document_state,
    metadata.maturity_level,
    metadata.legacy_status
  ].some((value) => value !== undefined && value !== null && value !== '')

  return {
    state: 'NO_BADGE_WITH_REVIEW_WARNING',
    reason: hasStatusMetadata ? 'UNSUPPORTED_METADATA' : 'MISSING_METADATA'
  }
}
