# VitePress Customization Report

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-18  
Owner: Axodus Documentation

---

## Purpose

This report records the first VitePress UI customization pass for the Axodus public documentation site.

## Files Changed

- `docs/.vitepress/config.mts`
- `docs/.vitepress/theme/index.ts`
- `docs/.vitepress/theme/custom.css`
- `docs/index.md`
- `docs/overview/documentation-status.md`
- `docs/overview/risk-notices.md`
- `docs/overview/documentation-standards.md`
- `.instructions/FILE_STRUCTURE.md`
- `Documents/planning/VITEPRESS_CUSTOMIZATION_REPORT.md`

## Navigation Decisions

- Reorganized top navigation into Overview, Governance, Products, Operations, Developers, and Glossary.
- Reorganized the sidebar into strategic groups:
  - Overview
  - Governance & Control
  - User & Ecosystem Journey
  - Products & Protocols
  - Reference
- Preserved all existing nucleus pages in the sidebar to avoid orphan public documentation.
- Added public reference pages for documentation status, risk notices, and documentation standards.

## Theme Decisions

- Extended the default VitePress theme instead of replacing it.
- Added custom CSS using Axodus institutional colors:
  - background `#1e2636`
  - accent `#5cc6d0`
  - deep surface `#151b28`
  - soft surface `#243044`
  - border `#334155`
  - muted text `#94a3b8`
  - main text `#e5eef8`
- Improved dark theme contrast, sidebar hierarchy, code block boundaries, homepage cards, status badges, and risk notice styling.
- Avoided heavy dependencies and custom Vue components in this pass.

## Homepage Decisions

- Converted `docs/index.md` into a VitePress home portal.
- Added hero actions, core feature summaries, grouped nucleus cards, reference cards, status badges, and a visible risk notice.
- Kept content concise and focused on navigation rather than rewriting nucleus content.

## Search and Discoverability

- Enabled VitePress local search with detailed view.
- Search should index public docs for terms such as `$Neurons`, Locked Rewards, Governance, Treasury, ACS, DEX, DeFi, Mining, CryptoDraw, Marketplace, BBA, Risk, and Accountability.

## Known Limitations

- No custom logo asset was added; the site currently uses text fallback through the VitePress title area.
- Status badges are implemented as CSS classes and used on the homepage/reference pattern, not automatically generated from page metadata.
- Risk notices are styled as a reusable CSS pattern, but existing nucleus pages still use their current Markdown risk sections unless updated in a future editorial pass.
- The current pass did not perform broad content rewrites.

## Broken Links Found or Fixed

- No broken links were intentionally introduced.
- Production build validation should be used as the primary broken-link check after this pass.

## Build Status

- `npm run docs:build`: passed on 2026-05-18.
- `npm run docs:dev -- --port 5173`: passed on 2026-05-18. Ports 5173 and 5174 were already in use, so VitePress served the site at `http://localhost:5175/`.
- `curl -I http://localhost:5175/`: returned `HTTP/1.1 200 OK`.

The production build emitted the standard Rollup chunk-size warning. It did not block the build.

## Next Recommended Improvements

- Add an official Axodus logo or wordmark asset if available.
- Add optional lightweight Vue components only if repeated Markdown patterns become hard to maintain.
- Run an editorial cross-linking pass across nucleus pages.
- Add per-nucleus landing summaries once implementation maturity is clearer.
