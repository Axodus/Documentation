import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  DISPLAY_STATUSES,
  STATUS_PRESENTATION,
  resolveDisplayStatus
} from '../../../docs/.vitepress/theme/status.ts'
import {
  escapeHtmlAttribute,
  extractLegacyStatus,
  isPublicDocumentationPath
} from '../../../docs/.vitepress/theme/statusPlugin.ts'

const root = new URL('../../../', import.meta.url)
const componentSource = readFileSync(new URL('docs/.vitepress/theme/components/PageStatusBadge.vue', root), 'utf8')
const cssSource = readFileSync(new URL('docs/.vitepress/theme/custom.css', root), 'utf8')

test('status resolver supports exactly the seven official labels', () => {
  assert.deepEqual(DISPLAY_STATUSES, [
    'Draft',
    'Planned',
    'Needs Review',
    'Prototype',
    'Testnet',
    'Active if Verified',
    'Deprecated'
  ])

  for (const status of DISPLAY_STATUSES) {
    assert.deepEqual(resolveDisplayStatus({ legacy_status: status }), {
      state: 'RESOLVED',
      status,
      source: 'LEGACY_STATUS'
    })
    assert.ok(STATUS_PRESENTATION[status].description)
  }
})

test('status resolver maps only unambiguous publication states', () => {
  assert.equal(resolveDisplayStatus({ publication_status: 'DRAFT' }).status, 'Draft')
  assert.equal(resolveDisplayStatus({ publication_status: 'UNDER_REVIEW' }).status, 'Needs Review')
  assert.equal(resolveDisplayStatus({ publication_status: 'DEPRECATED' }).status, 'Deprecated')

  for (const publicationStatus of ['APPROVED', 'ACTIVE', 'SUPERSEDED', 'ARCHIVED', 'RETRACTED']) {
    assert.deepEqual(resolveDisplayStatus({ publication_status: publicationStatus }), {
      state: 'NO_BADGE_WITH_REVIEW_WARNING',
      reason: 'UNSUPPORTED_METADATA'
    })
  }
})

test('status resolver does not infer from maturity or document state', () => {
  assert.deepEqual(resolveDisplayStatus({ document_state: 'EXPERIMENTAL', maturity_level: 'D2' }), {
    state: 'NO_BADGE_WITH_REVIEW_WARNING',
    reason: 'UNSUPPORTED_METADATA'
  })
  assert.deepEqual(resolveDisplayStatus({}), {
    state: 'NO_BADGE_WITH_REVIEW_WARNING',
    reason: 'MISSING_METADATA'
  })
})

test('conflicting explicit sources suppress the badge', () => {
  assert.deepEqual(resolveDisplayStatus({ publication_status: 'DRAFT', legacy_status: 'Planned' }), {
    state: 'NO_BADGE_WITH_REVIEW_WARNING',
    reason: 'AMBIGUOUS_METADATA'
  })
  assert.deepEqual(resolveDisplayStatus({ publication_status: 'DRAFT', legacy_status: 'Draft' }), {
    state: 'RESOLVED',
    status: 'Draft',
    source: 'CONSISTENT_SOURCES'
  })
})

test('legacy status extraction requires the metadata paragraph immediately after h1', () => {
  const tokens = [
    { type: 'heading_close', tag: 'h1', content: '' },
    { type: 'paragraph_open', tag: 'p', content: '' },
    { type: 'inline', tag: '', content: 'Status: Active if Verified' },
    { type: 'paragraph_close', tag: 'p', content: '' }
  ]
  assert.equal(extractLegacyStatus(tokens, 0), 'Active if Verified')
  tokens[2].content = 'Status: Planned\nVersion: 0.2.0\nOwner: Axodus'
  assert.equal(extractLegacyStatus(tokens, 0), 'Planned')
  tokens[2].content = 'The status is Draft.'
  assert.equal(extractLegacyStatus(tokens, 0), undefined)
})

test('render helpers escape attributes and exclude private paths', () => {
  assert.equal(escapeHtmlAttribute('Draft" <unsafe> &'), 'Draft&quot; &lt;unsafe&gt; &amp;')
  assert.equal(isPublicDocumentationPath('treasury/overview.md'), true)
  assert.equal(isPublicDocumentationPath('institutional-disclosure/private.md'), false)
  assert.equal(isPublicDocumentationPath('private/ledger.md'), false)
  assert.equal(isPublicDocumentationPath('../institutional-disclosure/private.md'), false)
})

test('badge component uses text binding and accessible light-dark styles', () => {
  assert.doesNotMatch(componentSource, /v-html/)
  assert.match(componentSource, /aria-label/)
  assert.match(componentSource, /aria-hidden="true"/)
  assert.match(cssSource, /\.page-status-badge/)
  assert.match(cssSource, /\.dark \.page-status-badge/)

  for (const status of DISPLAY_STATUSES) {
    assert.match(cssSource, new RegExp(`\\.${STATUS_PRESENTATION[status].className}\\b`))
  }
})
