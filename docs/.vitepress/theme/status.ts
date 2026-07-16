export const DISPLAY_STATUSES = [
  'Draft',
  'Planned',
  'Prototype',
  'Testnet',
  'Active if Verified',
  'Deprecated',
  'Canonical',
  'Reference',
  'Governed',
  'Baseline',
  'Review Required',
  'Legacy'
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
      source: 'PUBLICATION_STATUS' | 'DOCUMENT_STATE' | 'LEGACY_STATUS' | 'PATH_CLASSIFICATION' | 'CONSISTENT_SOURCES'
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
    description: 'Page under documentary development; not a final production specification.'
  },
  Planned: {
    icon: '◆',
    className: 'status-planned',
    description: 'Direction or roadmap item without confirmed implementation.'
  },
  Prototype: {
    icon: '◇',
    className: 'status-prototype',
    description: 'Experimental posture that is not production-ready.'
  },
  Testnet: {
    icon: '≋',
    className: 'status-testnet',
    description: 'Bounded to a non-production environment.'
  },
  'Active if Verified': {
    icon: '✓',
    className: 'status-active-if-verified',
    description: 'Any active reading requires current evidence and deployment context.'
  },
  Deprecated: {
    icon: '×',
    className: 'status-deprecated',
    description: 'Retained for reference and not suitable as current guidance.'
  },
  Canonical: {
    icon: '◉',
    className: 'status-canonical',
    description: 'Current official page in the public corpus; not an operational maturity claim.'
  },
  Reference: {
    icon: '·',
    className: 'status-reference',
    description: 'Navigational or supporting page within the public corpus.'
  },
  Governed: {
    icon: '▣',
    className: 'status-governed',
    description: 'Explicitly classified documentary control surface; not activated governance.'
  },
  Baseline: {
    icon: '▱',
    className: 'status-baseline',
    description: 'Conceptual or documentary line of record; not a deployed system baseline.'
  },
  'Review Required': {
    icon: '!',
    className: 'status-review-required',
    description: 'Classification or content requires governed review.'
  },
  Legacy: {
    icon: '←',
    className: 'status-legacy',
    description: 'Retained for compatibility or history and not current canonical guidance.'
  }
}

export const REFERENCE_PAGE_PATHS = new Set([
  'README.md',
  'academy/README.md',
  'accountability/README.md',
  'acs/README.md',
  'bba-agency/README.md',
  'business/README.md',
  'defi/README.md',
  'dex/README.md',
  'glossary/README.md',
  'governance/README.md',
  'lottery/README.md',
  'marketplace/README.md',
  'mining/README.md',
  'overview/README.md',
  'runtime/README.md',
  'security/README.md',
  'tokenomics/README.md',
  'trading/README.md',
  'treasury/README.md'
])

const explicitStatusAliases = new Map<string, DisplayStatus>([
  ...DISPLAY_STATUSES.map((status) => [status.toLowerCase(), status] as const),
  ['needs review', 'Review Required'],
  ['future', 'Planned'],
  ['conceptual', 'Baseline']
])

const publicationStatusMap = new Map<string, DisplayStatus>([
  ['DRAFT', 'Draft'],
  ['UNDER_REVIEW', 'Review Required'],
  ['DEPRECATED', 'Deprecated'],
  ['SUPERSEDED', 'Legacy'],
  ['ARCHIVED', 'Legacy'],
  ['RETRACTED', 'Legacy']
])

const documentStateMap = new Map<string, DisplayStatus>([
  ['OBSOLETE', 'Legacy'],
  ['HISTORICAL', 'Legacy']
])

function normalizeExplicitStatus(value: unknown): DisplayStatus | undefined {
  if (typeof value !== 'string') return undefined
  return explicitStatusAliases.get(value.trim().toLowerCase())
}

function resolvePublicationStatus(metadata: StatusMetadata): DisplayStatus | undefined {
  if (typeof metadata.publication_status !== 'string') return undefined
  const publicationStatus = metadata.publication_status.trim().toUpperCase()
  const documentState = typeof metadata.document_state === 'string'
    ? metadata.document_state.trim().toUpperCase()
    : undefined

  if (['APPROVED', 'ACTIVE'].includes(publicationStatus) && documentState === 'CURRENT') {
    return 'Canonical'
  }

  return publicationStatusMap.get(publicationStatus)
}

export function isDisplayStatus(value: unknown): value is DisplayStatus {
  return typeof value === 'string' && DISPLAY_STATUSES.includes(value as DisplayStatus)
}

export function resolveDisplayStatus(metadata: StatusMetadata, relativePath?: string): DisplayStatusResolution {
  const pathStatus = relativePath && REFERENCE_PAGE_PATHS.has(relativePath) ? 'Reference' : undefined
  const publicationStatus = resolvePublicationStatus(metadata)
  const legacyStatus = normalizeExplicitStatus(metadata.legacy_status)
  const documentState = typeof metadata.document_state === 'string'
    ? documentStateMap.get(metadata.document_state.trim().toUpperCase())
    : undefined
  const candidates = [pathStatus, publicationStatus, legacyStatus, documentState].filter(
    (status): status is DisplayStatus => status !== undefined
  )
  const uniqueCandidates = new Set(candidates)

  if (uniqueCandidates.size > 1) {
    return {
      state: 'NO_BADGE_WITH_REVIEW_WARNING',
      reason: 'AMBIGUOUS_METADATA'
    }
  }

  const status = candidates[0]
  if (status) {
    const source = candidates.length > 1
      ? 'CONSISTENT_SOURCES'
      : pathStatus
        ? 'PATH_CLASSIFICATION'
        : legacyStatus
          ? 'LEGACY_STATUS'
          : publicationStatus
            ? 'PUBLICATION_STATUS'
            : 'DOCUMENT_STATE'

    return {
      state: 'RESOLVED',
      status,
      source
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
