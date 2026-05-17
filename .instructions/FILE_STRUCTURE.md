# Documentation File Structure

Status: Active
Version: 0.2.0
Last Updated: 2026-05-17
Owner: Axodus Core

---

## Purpose

This file defines the current documentation structure for the Axodus Documentation repository. It must reflect the real VitePress site structure and should be updated whenever a nucleus, navigation group, or canonical documentation area is added, renamed, archived, or removed.

## Root Files

- `/README.md`
- `/ARCHITECTURE.md`
- `/GOVERNANCE.md`
- `/ROADMAP.md`
- `/SECURITY.md`
- `/CONTRIBUTING.md`
- `/GLOSSARY.md`
- `/CHANGELOG.md`
- `/package.json`

## Internal Protocols

Internal contributor and agent protocols live under `/.instructions`.

- `/.instructions/README.md`
- `/.instructions/DOCUMENTATION_STANDARDS.md`
- `/.instructions/REBUILD_PROTOCOL.md`
- `/.instructions/CONTENT_GUARDRAILS.md`
- `/.instructions/AXODUS_CONTEXT.md`
- `/.instructions/FILE_STRUCTURE.md`
- `/.instructions/REVIEW_CHECKLIST.md`

These files are operational guidance, not public product promises.

## Public VitePress Site

Canonical public documentation lives under `/docs`.

- `/docs/index.md`
- `/docs/.vitepress/config.mts`
- `/docs/overview/`
- `/docs/governance/`
- `/docs/business/`
- `/docs/bba-agency/`
- `/docs/runtime/`
- `/docs/academy/`
- `/docs/defi/`
- `/docs/dex/`
- `/docs/marketplace/`
- `/docs/lottery/`
- `/docs/mining/`
- `/docs/trading/`
- `/docs/treasury/`
- `/docs/tokenomics/`
- `/docs/acs/`
- `/docs/accountability/`
- `/docs/security/`
- `/docs/glossary/`

## Current Nuclei Coverage

The current documentation site must expose these ecosystem nuclei or support layers:

| Nucleus / Layer | Canonical Folder | Status |
| --- | --- | --- |
| Core Overview | `/docs/overview/` | Draft |
| Governance | `/docs/governance/` | Draft |
| Business | `/docs/business/` | Draft |
| BBA Agency | `/docs/bba-agency/` | Draft |
| Runtime | `/docs/runtime/` | Draft |
| Academy | `/docs/academy/` | Draft |
| DeFi | `/docs/defi/` | Draft |
| DEX | `/docs/dex/` | Draft |
| Marketplace | `/docs/marketplace/` | Draft |
| Lottery | `/docs/lottery/` | Draft |
| Mining | `/docs/mining/` | Draft |
| Trading | `/docs/trading/` | Draft |
| Treasury | `/docs/treasury/` | Draft |
| Tokenomics | `/docs/tokenomics/` | Draft |
| ACS / AI Agents | `/docs/acs/` | Draft |
| Accountability | `/docs/accountability/` | Draft |
| Security | `/docs/security/` | Draft |
| Glossary | `/docs/glossary/` | Draft |

MCP and compute-related materials may be referenced inside ACS, Runtime, or future product pages until they are promoted into full standalone documentation areas.

## Required Overview Contract

Every nucleus overview must include:

- document metadata: status, version, last updated date, and owner;
- `## Purpose`;
- `## Scope`;
- `## Ecosystem Role`;
- `## Documentation Map`;
- `## Risk Considerations`.

Additional sections such as responsibilities, dependencies, workflows, current status, and future work are encouraged when they improve clarity.

## Documents Folder

The `/Documents` folder is a reference and planning area.

- `/Documents/README.md`
- `/Documents/archive/`
- `/Documents/research/`
- `/Documents/planning/`

`/Documents` is not the canonical published documentation surface. It stores planning references, historical material, research, and working notes.

## Legacy Material

Legacy GitBook material, old drafts, and superseded files should remain under `/.old` or `/Documents/archive` unless they have been reviewed and intentionally migrated into `/docs`.

Do not treat legacy material as canonical unless it has been rewritten, linked from the current navigation, and reviewed against the content guardrails.

## Navigation Rule

The VitePress sidebar in `/docs/.vitepress/config.mts`, root `/README.md`, and `/docs/index.md` must remain consistent with this structure.

When adding or renaming a nucleus:

1. create or update its `/docs/<nucleus>/overview.md`;
2. include the required overview contract;
3. add it to the VitePress sidebar;
4. link it from `/docs/index.md`;
5. update root `/README.md` when it is a major public section;
6. update this file.
