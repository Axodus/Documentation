import { resolveDisplayStatus, type StatusMetadata } from './status.ts'

type MarkdownToken = {
  type: string
  tag: string
  content: string
}

type MarkdownState = {
  env?: {
    relativePath?: string
    frontmatter?: StatusMetadata
  }
  tokens: MarkdownToken[]
  Token: new (type: string, tag: string, nesting: number) => MarkdownToken
}

type MarkdownItLike = {
  core: {
    ruler: {
      after: (afterName: string, ruleName: string, rule: (state: MarkdownState) => void) => void
    }
  }
}

const publicRootPattern = /^(?!\.\.\/)(?!institutional-disclosure\/)(?!private\/).+\.md$/

export function isPublicDocumentationPath(relativePath: unknown): boolean {
  return typeof relativePath === 'string' && publicRootPattern.test(relativePath)
}

export function escapeHtmlAttribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function extractLegacyStatus(tokens: MarkdownToken[], headingCloseIndex: number): string | undefined {
  const paragraphOpen = tokens[headingCloseIndex + 1]
  const inline = tokens[headingCloseIndex + 2]
  const paragraphClose = tokens[headingCloseIndex + 3]

  if (paragraphOpen?.type !== 'paragraph_open' || inline?.type !== 'inline' || paragraphClose?.type !== 'paragraph_close') {
    return undefined
  }

  const match = inline.content.trim().match(/^Status:\s*([^\r\n]+)/i)
  return match?.[1]?.trim()
}

function hasStandaloneLegacyStatus(tokens: MarkdownToken[], headingCloseIndex: number): boolean {
  const inline = tokens[headingCloseIndex + 2]
  return inline?.type === 'inline' && /^Status:\s*[^\r\n]+$/i.test(inline.content.trim())
}

function removeRenderedLegacyStatus(tokens: MarkdownToken[], headingCloseIndex: number): void {
  tokens.splice(headingCloseIndex + 1, 3)
}

export function pageStatusPlugin(md: MarkdownItLike): void {
  md.core.ruler.after('block', 'page-status-badge', (state) => {
    const relativePath = state.env?.relativePath
    if (relativePath && !isPublicDocumentationPath(relativePath)) return

    const headingOpenIndex = state.tokens.findIndex((token) => token.type === 'heading_open' && token.tag === 'h1')
    if (headingOpenIndex === -1) return

    const headingCloseIndex = state.tokens.findIndex(
      (token, index) => index > headingOpenIndex && token.type === 'heading_close' && token.tag === 'h1'
    )
    if (headingCloseIndex === -1) return

    const legacyStatus = extractLegacyStatus(state.tokens, headingCloseIndex)
    const metadata: StatusMetadata = {
      ...(state.env?.frontmatter ?? {}),
      legacy_status: legacyStatus
    }
    const resolution = resolveDisplayStatus(metadata, relativePath)
    const badgeToken = new state.Token('html_block', '', 0)

    if (resolution.state === 'RESOLVED') {
      if (legacyStatus && hasStandaloneLegacyStatus(state.tokens, headingCloseIndex)) {
        removeRenderedLegacyStatus(state.tokens, headingCloseIndex)
      }
      badgeToken.content = `<PageStatusBadge status="${escapeHtmlAttribute(resolution.status)}" />\n`
    } else {
      badgeToken.content = `<!-- page-status: NO_BADGE_WITH_REVIEW_WARNING (${resolution.reason}) -->\n`
    }

    state.tokens.splice(headingCloseIndex + 1, 0, badgeToken)
  })
}
