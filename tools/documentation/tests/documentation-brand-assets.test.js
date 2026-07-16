import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '../../..')
const config = readFileSync(path.join(root, 'docs/.vitepress/config.mts'), 'utf8')
const css = readFileSync(path.join(root, 'docs/.vitepress/theme/custom.css'), 'utf8')
const manifest = JSON.parse(readFileSync(path.join(root, 'public/site.webmanifest'), 'utf8'))

test('VitePress brand surfaces reference committed public assets', () => {
  for (const asset of ['logo.png', 'favicon.ico', 'logo192.png', 'logo512.png']) {
    assert.equal(existsSync(path.join(root, 'public', asset)), true, asset)
  }

  assert.match(config, /src: '\/logo\.png'/)
  assert.match(config, /href: '\/favicon\.ico'/)
  assert.match(config, /href: '\/site\.webmanifest'/)
  assert.match(config, /publicDir: fileURLToPath\(new URL\('\.\.\/\.\.\/public'/)
  assert.match(config, /og:image/)
  assert.match(config, /twitter:image/)
})

test('web manifest declares Axodus identity and both icon sizes', () => {
  assert.equal(manifest.name, 'Axodus Documentation')
  assert.equal(manifest.short_name, 'Axodus Docs')
  assert.equal(manifest.theme_color, '#1e2636')
  assert.deepEqual(manifest.icons.map((icon) => icon.sizes), ['192x186', '512x496'])
})

test('header wordmark has responsive and keyboard-visible styling', () => {
  assert.match(css, /\.VPNavBarTitle \.logo/)
  assert.match(css, /\.VPNavBarTitle \.title:focus-visible \.logo/)
  assert.match(css, /@media \(max-width: 640px\)/)
})
