# SEO Technical Foundation - 2026-09-08

## Scope

This candidate change improves crawl, canonicalization, and share-preview
signals in the VitePress documentation surface. It does not publish the site,
create a lead channel, change deployment settings, or alter product claims.

## Findings

- The documentation site already generates a sitemap using
  `https://docs.axodus.country`.
- Global social metadata instead referenced the Vercel preview address,
  creating an avoidable split in public URL signals.
- Page-specific titles and summaries exist for many governed pages but were not
  consistently emitted as page-specific social and canonical metadata.
- Auxiliary `README` routes were included in the sitemap although they are not
  part of the primary documentation navigation.
- No official, monitored commercial contact channel is documented locally;
  therefore, this change does not add a contact or lead-submission CTA.

## Candidate Change

- Use `https://docs.axodus.country` consistently for sitemap, canonical URLs,
  Open Graph images, and Twitter images.
- Emit canonical URLs, Open Graph titles/descriptions, Twitter titles/descriptions,
  and `WebPage` structured data for each rendered page.
- Use an approved page `summary` as the page description where it exists and a
  conservative documentation description otherwise.
- Exclude `README` utility routes from the generated sitemap.
- Add `robots.txt` with an explicit sitemap location.

## Validation Commands

- `node tools/documentation/cli/index.js check --summary`
- `node node_modules/vitepress/bin/vitepress.js build docs`
- generated HTML, `robots.txt`, and sitemap assertions using Python XML parsing
- `node tools/documentation/cli/index.js generate --check`
- `git diff --check`

## Validation Results

- Documentation check: PASS with 0 errors and 0 warnings.
- VitePress build: PASS with the existing chunk-size warning.
- Root and representative route canonical tags: PASS.
- Page-specific description and social metadata: PASS.
- `WebPage` structured data: PASS.
- Legacy Vercel URL absent from inspected generated heads: PASS.
- `robots.txt` sitemap reference: PASS.
- Sitemap XML and canonical host: PASS, with 250 URLs.
- Auxiliary `README` routes excluded from sitemap: PASS.
- Generated artifact check: existing drift of 8 artifacts; no generated
  artifact was edited or staged.
- `git diff --check`: PASS.

## Git Status

- Branch: `main`, tracking `origin/main`.
- Modified: `docs/.vitepress/config.mts`.
- Added: `public/robots.txt` and this report.
- Generated VitePress output remains ignored and unstaged.

## Boundaries Preserved

- No publication, deployment, production execution, real funds, secrets,
  external messaging, or changes to another repository.
- No trading, swaps, settlement, payouts, randomness, wallet signing, minting,
  treasury movement, or on-chain execution was enabled.

## Production Status

`PRODUCTION_BLOCKED`. The result is a locally validated publication candidate.

## Dependencies and Follow-up

- Documentation owns this technical SEO candidate.
- A qualified-lead conversion path requires Business to confirm the audience,
  service offering, market/language, and an official monitored channel.
- Publication, domain verification, Search Console submission, analytics goal
  configuration, and deployment remain separately gated.

## Final Status

`SEO TECHNICAL FOUNDATION: LOCAL_VALIDATED`
