# VitePress Link and Navigation Review

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Scope

REQ-04 performs static link and navigation review only.

No external links were browsed.

No VitePress build was run.

No network validation was performed.

## Navigation and Sidebar Declarations

| Element | Location | Status |
|---|---|---|
| `themeConfig.nav` | `docs/.vitepress/config.mts` | Present |
| `themeConfig.sidebar` | `docs/.vitepress/config.mts` | Present |
| Page arrays | `docs/.vitepress/config.mts` top-level item arrays | Present |

## Nav/Sidebar Route Targets

Static route target extraction from `docs/.vitepress/config.mts` found:

| Metric | Count |
|---|---:|
| Config link declarations | 275 |
| Internal config link declarations | 274 |
| Unique internal config route targets | 248 |
| External config link declarations | 1 |
| Missing config route targets | 0 |

Each configured internal route target resolved to an existing Markdown source file by static path inspection.

External config link noted but not validated online:

- `https://github.com/Axodus/Documentation`

## Markdown Files Referenced by Nav/Sidebar

The navigation/sidebar links resolve into the documented source tree under `docs/`, including:

- `docs/index.md`;
- `docs/overview/`;
- `docs/governance/`;
- `docs/treasury/`;
- `docs/tokenomics/`;
- `docs/accountability/`;
- `docs/security/`;
- `docs/runtime/`;
- `docs/academy/`;
- `docs/marketplace/`;
- `docs/business/`;
- `docs/bba-agency/`;
- `docs/acs/`;
- `docs/trading/`;
- `docs/defi/`;
- `docs/dex/`;
- `docs/mining/`;
- `docs/lottery/`;
- `docs/glossary/`.

## Missing Route Targets

None found by static inspection.

## Orphan High-Level Markdown Files

Static comparison found:

| Metric | Count |
|---|---:|
| Markdown source files under `docs/` | 248 |
| High-level Markdown files not represented by config route list | 0 |

This does not validate whether every page is appropriately placed from an editorial perspective. That belongs to REQ-06.

## Static Internal Markdown Links

Static Markdown link inspection found:

| Metric | Count |
|---|---:|
| Missing local Markdown link targets | 0 |
| External Markdown links found by the static pattern | 0 |

No browser or network validation was performed. Anchor-level correctness was not validated by build.

## Asset References

Static asset reference inspection found:

| Metric | Count |
|---|---:|
| Asset references detected in Markdown/source scan | 0 |
| Missing asset targets | 0 |

No source `docs/public`, `docs/assets`, `docs/images`, or `docs/img` directory was detected. Generated `docs/.vitepress/dist/assets/` exists but is build output, not source content.

## Warnings

- Static inspection does not prove VitePress route generation.
- Static inspection does not validate anchors generated from headings.
- Static inspection does not validate external URLs.
- No source asset directory policy is defined yet.
- Content quality and editorial completeness are out of scope for REQ-04.

## Link and Navigation Review Status

PASS_WITH_WARNINGS

Reason:

No missing local nav/sidebar targets, local Markdown links, high-level route representation gaps, or missing asset references were found by static inspection. Warnings remain because no VitePress build, anchor validation, external URL validation, or content-quality review was executed.
