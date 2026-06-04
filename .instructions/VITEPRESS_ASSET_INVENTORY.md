# VitePress Asset Inventory

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Inventory Scope

| Field | Value |
|---|---|
| Documentation workspace | `/opt/Axodus/Documentation` |
| Resolved path observed | `/mnt/d/Rede/Github/Axodus/Documentation` |
| Active documentation platform | VitePress |
| Inventory request | REQ-03 - Documentation Asset Inventory & VitePress Alignment |
| Inventory date | 2026-06-04 |
| Build run | No |
| Publication run | No |

This inventory is based on static inspection only. It does not prove that the VitePress build passes, that every internal link resolves, or that publication is approved.

## Package Manager Evidence

| Evidence | Path | Status | Notes |
|---|---|---|---|
| npm package manifest | `package.json` | Present | Defines VitePress scripts and `vitepress` dev dependency. |
| npm lockfile | `package-lock.json` | Present | Indicates npm lock state exists. |
| pnpm lockfile | `pnpm-lock.yaml` | Present | Indicates pnpm lock state also exists. |
| pnpm workspace config | `pnpm-workspace.yaml` | Present | Contains build approval metadata for `esbuild`. |
| yarn lockfile | `yarn.lock` | Not detected | No Yarn lockfile found in inspected root. |
| installed dependencies | `node_modules/` | Present and ignored | Existing local dependency tree was not modified. |

Package manager ownership is ambiguous because npm and pnpm lockfiles are both present. REQ-03 does not choose, modify, install, or normalize package dependencies.

## Package Scripts

| Script | Command | REQ-03 Status |
|---|---|---|
| `docs:dev` | `vitepress dev docs --host 0.0.0.0` | Known, not run |
| `docs:build` | `vitepress build docs` | Known, not run |
| `docs:preview` | `vitepress preview docs --host 0.0.0.0` | Known, not run |

REQ-03 is inventory/alignment only. Local build readiness belongs to REQ-04.

## VitePress Core Files

| Asset | Path | Status | Notes |
|---|---|---|---|
| Docs source root | `docs/` | Present | Main VitePress source tree. |
| Home/index page | `docs/index.md` | Present | VitePress home page and portal content. |
| VitePress config | `docs/.vitepress/config.mts` | Present | Contains title, base, metadata, nav, sidebar, local search, edit links, and theme settings. |
| Theme entry | `docs/.vitepress/theme/index.ts` | Present | Imports default VitePress theme and custom CSS. |
| Theme CSS | `docs/.vitepress/theme/custom.css` | Present | Customizes brand colors, layout, cards, badges, notices, and responsive docs presentation. |
| Build output | `docs/.vitepress/dist/` | Present, ignored | Generated static output exists locally but was not changed. |
| Vite cache | `docs/.vitepress/cache/` | Present, ignored | Generated cache exists locally but was not changed. |

## Content Directories

| Directory | Status | Notes |
|---|---|---|
| `docs/academy/` | Present | Academy pages. |
| `docs/accountability/` | Present | Reports, governance records, release notes, roadmap updates. |
| `docs/acs/` | Present | ACS / AI agent pages. |
| `docs/bba-agency/` | Present | BBA Agency pages. |
| `docs/business/` | Present | Business runtime and service pages. |
| `docs/defi/` | Present | DeFi / DaaS pages. |
| `docs/dex/` | Present | DEX pages. |
| `docs/glossary/` | Present | Glossary. |
| `docs/governance/` | Present | Governance pages. |
| `docs/lottery/` | Present | Lottery / CryptoDraw pages. |
| `docs/marketplace/` | Present | Marketplace pages. |
| `docs/mining/` | Present | Mining pages. |
| `docs/overview/` | Present | Ecosystem overview, standards, status, product map, risk notices. |
| `docs/runtime/` | Present | Runtime and operational flow pages. |
| `docs/security/` | Present | Security pages. |
| `docs/tokenomics/` | Present | Tokenomics pages. |
| `docs/trading/` | Present | Trading pages. |
| `docs/treasury/` | Present | Treasury pages. |

Static inspection found 248 Markdown source files under `docs/`, excluding VitePress generated cache and build output.

## Navigation and Sidebar

| Structure | Location | Status | Notes |
|---|---|---|---|
| Top navigation | `docs/.vitepress/config.mts` `themeConfig.nav` | Present | Groups Overview, Governance, Products, Operations, Developers, Glossary. |
| Sidebar | `docs/.vitepress/config.mts` `themeConfig.sidebar` | Present | Groups Overview, Governance & Control, User & Ecosystem Journey, Products & Protocols, Reference. |
| Sidebar item arrays | `docs/.vitepress/config.mts` constants such as `overviewItems`, `governanceItems`, `treasuryItems`, etc. | Present | Config-driven page inventory. |
| Static nav target check | local inspection command | Passed | 249 unique config links inspected; no missing Markdown target found by path check. |

The static link-target check did not validate Markdown body links or run VitePress. REQ-04 should perform structural validation and local build readiness.

## Public and Asset Directories

| Directory Type | Path | Status | Notes |
|---|---|---|---|
| VitePress public directory | `docs/public/` | Not detected | No explicit static public directory found. |
| Source image/media directories | `docs/**/assets`, `docs/**/images`, `docs/**/img` | Not detected | No source image/media asset directories found by inventory command. |
| Generated static assets | `docs/.vitepress/dist/assets/` | Present, ignored | Build output assets exist locally. |
| Generated cache assets | `docs/.vitepress/cache/` | Present, ignored | Vite cache exists locally. |

REQ-03 does not move, delete, regenerate, or publish assets.

## Deployment and Publication Evidence

| Evidence | Path / Value | Status | Notes |
|---|---|---|---|
| GitHub Actions directory | `.github/` | Not detected | No workflow files found in repository root. |
| Vercel URL metadata | `docs/.vitepress/config.mts` `og:url` | Present | Points to `https://axodus-documentation.vercel.app/`; this is metadata, not publication approval. |
| GitHub edit link | `docs/.vitepress/config.mts` `editLink.pattern` | Present | Points to `https://github.com/Axodus/Documentation/edit/main/docs/:path`. |
| Deployment config | `vercel.json`, `netlify.toml`, `wrangler.toml`, `firebase.json` | Not detected in safe max-depth scan | Publication target/authority remains unconfirmed. |

Publication remains disabled unless explicitly approved.

## Placeholder and Draft Findings

| Finding | Path | Status | Notes |
|---|---|---|---|
| Placeholder page | `docs/security/disclosure-policy.md` | Open | Contains placeholder wording for responsible disclosure policy. |
| Draft home status | `docs/index.md` | Open | Home page includes Draft status badge. |
| Draft nucleus pages | Multiple docs pages | Open | Several pages correctly mark concepts as draft/planned; this is not a defect but requires review before publication claims. |
| Empty source files | `docs/` excluding cache/dist | None detected | Static empty-file scan found no empty source docs. |

## GitBook Legacy Findings

GitBook references remain only as legacy, deprecated, historical, or correction-report context. VitePress is the active documentation platform.

## Unknown or Missing Expected Files

| Item | Status | Impact | Follow-up |
|---|---|---|---|
| Publication authority record | Missing / unverified | Blocks final L4 and publication. | REQ-05. |
| Deployment target ownership | Unknown | Blocks publication readiness. | REQ-05. |
| VitePress local build evidence | Not run in REQ-03 | Blocks final structural validation. | REQ-04. |
| Full Markdown internal-link validation | Not run in REQ-03 | Blocks final structural validation. | REQ-04. |
| Package manager decision | Ambiguous | npm and pnpm lockfiles coexist. | REQ-04 or coordinator decision. |
| Source asset directory policy | Not defined | No public/assets source directory detected. | REQ-04. |

## Inventory Conclusion

The Documentation nucleus has a real VitePress documentation surface with source root, config, navigation/sidebar, content directories, theme customization, known scripts, and generated local build output. REQ-03 creates an inventory baseline only. Final L4 remains blocked until structural validation, local build readiness, link/content checks, publication authority, and versioning decisions are completed.
