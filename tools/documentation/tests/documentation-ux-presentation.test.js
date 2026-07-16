import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import matter from 'gray-matter'
import { resolveDisplayStatus } from '../../../docs/.vitepress/theme/status.ts'
import { pageStatusPlugin } from '../../../docs/.vitepress/theme/statusPlugin.ts'

const root = path.resolve(import.meta.dirname, '../../..')
const docsRoot = path.join(root, 'docs')

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (['.vitepress', 'public'].includes(entry.name)) return []
    const absolutePath = path.join(directory, entry.name)
    return entry.isDirectory() ? markdownFiles(absolutePath) : entry.name.endsWith('.md') ? [absolutePath] : []
  })
}

function legacyStatus(content) {
  return content.match(/^# .+\r?\n(?:\r?\n)?Status:\s*([^\r\n]+)/m)?.[1]?.trim()
}

test('public corpus status audit never assigns a silent default', () => {
  const files = markdownFiles(docsRoot)
  const audit = new Map()

  for (const file of files) {
    const parsed = matter(readFileSync(file, 'utf8'))
    const resolution = resolveDisplayStatus({
      ...parsed.data,
      legacy_status: legacyStatus(parsed.content)
    })
    const key = resolution.state === 'RESOLVED' ? resolution.status : resolution.reason
    audit.set(key, (audit.get(key) ?? 0) + 1)
  }

  assert.equal(files.length, 269)
  assert.equal(audit.get('Draft'), 161)
  assert.equal(audit.get('Planned'), 1)
  assert.equal(audit.get('Needs Review'), 2)
  assert.equal(audit.get('UNSUPPORTED_METADATA'), 86)
  assert.equal(audit.get('MISSING_METADATA'), 19)
  assert.equal([...audit.values()].reduce((total, count) => total + count, 0), files.length)
})

test('Markdown plugin injects one badge directly after h1', () => {
  let statusRule
  pageStatusPlugin({
    core: {
      ruler: {
        after(_afterName, _ruleName, rule) {
          statusRule = rule
        }
      }
    }
  })

  class Token {
    constructor(type, tag) {
      this.type = type
      this.tag = tag
      this.content = ''
    }
  }

  const state = {
    env: { relativePath: 'tokenomics/example.md', frontmatter: {} },
    Token,
    tokens: [
      { type: 'heading_open', tag: 'h1', content: '' },
      { type: 'inline', tag: '', content: 'Example' },
      { type: 'heading_close', tag: 'h1', content: '' },
      { type: 'paragraph_open', tag: 'p', content: '' },
      { type: 'inline', tag: '', content: 'Status: Testnet\nVersion: 1.0.0' },
      { type: 'paragraph_close', tag: 'p', content: '' }
    ]
  }

  statusRule(state)
  assert.equal(state.tokens[3].type, 'html_block')
  assert.match(state.tokens[3].content, /^<PageStatusBadge status="Testnet" \/>$/m)
  assert.equal(state.tokens.filter((token) => token.content.includes?.('<PageStatusBadge')).length, 1)
  assert.equal(state.tokens.filter((token) => token.type === 'heading_open').length, 1)
})

test('unresolved metadata yields a review marker without a badge', () => {
  let statusRule
  pageStatusPlugin({
    core: {
      ruler: {
        after(_afterName, _ruleName, rule) {
          statusRule = rule
        }
      }
    }
  })

  class Token {
    constructor(type, tag) {
      this.type = type
      this.tag = tag
      this.content = ''
    }
  }

  const state = {
    env: { relativePath: 'overview/example.md', frontmatter: { publication_status: 'APPROVED' } },
    Token,
    tokens: [
      { type: 'heading_open', tag: 'h1', content: '' },
      { type: 'inline', tag: '', content: 'Example' },
      { type: 'heading_close', tag: 'h1', content: '' }
    ]
  }

  statusRule(state)
  assert.doesNotMatch(state.tokens[3].content, /PageStatusBadge/)
  assert.match(state.tokens[3].content, /NO_BADGE_WITH_REVIEW_WARNING \(UNSUPPORTED_METADATA\)/)
})

test('frontpage preserves the frozen hierarchy and responsive presentation', () => {
  const home = readFileSync(path.join(docsRoot, 'index.md'), 'utf8')
  const css = readFileSync(path.join(docsRoot, '.vitepress/theme/custom.css'), 'utf8')
  const config = readFileSync(path.join(docsRoot, '.vitepress/config.mts'), 'utf8')

  for (const heading of ['Choose your path', 'Core system map', 'How Axodus works', 'Status legend']) {
    assert.match(home, new RegExp(heading))
  }

  for (const profile of ['New reader', 'Architect', 'Operator', 'Governance participant', 'Developer', 'Reviewer']) {
    assert.match(home, new RegExp(`>${profile}<`))
  }

  assert.match(home, /Prototype-stage<\/strong> ecosystem/)
  assert.match(home, /Individual flows may remain prototype-stage or incomplete/)
  assert.match(config, /pageData\.frontmatter\.sidebar = false/)
  assert.match(css, /@media \(max-width: 960px\)/)
  assert.match(css, /@media \(max-width: 640px\)/)
  assert.match(css, /\.dark \.page-status-badge/)
})

test('status reference uses the global component for every official label', () => {
  const statusPage = readFileSync(path.join(docsRoot, 'overview/documentation-status.md'), 'utf8')
  const badges = statusPage.match(/<PageStatusBadge status="[^"]+" compact \/>/g) ?? []
  assert.equal(badges.length, 7)
})
