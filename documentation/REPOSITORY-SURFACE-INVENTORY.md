---
schema_version: "1.0.0"
document_id: "DOC-RPT-092"
aliases: []
document_type: "REPORT"
title: "Repository Surface Inventory"
summary: "Records the physical and logical Documentation repository surfaces, their classifications, dependencies, and bounded dispositions before any EPIC-04 reorganization mutation."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.REPOSITORY_REORGANIZATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-REQ-01"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-012", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/.vitepress/config.mts", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/repository/discovery.js", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Surface Inventory

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Execution Mode: INVENTORY_CLASSIFICATION_AND_FREEZE_ONLY
File Moves: NOT_AUTHORIZED
Directory Renames: NOT_AUTHORIZED
File Deletion: NOT_AUTHORIZED
Gitignore Mutation: NOT_AUTHORIZED
Registry Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Public Navigation Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report freezes the current Documentation repository topology before any
EPIC-04 reorganization request performs path mutation. It inventories the
existing physical and logical surfaces, classifies their role, records
high-signal boundary and tooling attributes, and identifies where later
requests may act with bounded rollback.

## Repository Baseline

| Field | Value |
|---|---|
| Branch | `main` |
| HEAD | `d46b6e8b548f29f545414240c402ad17d512b226` |
| `origin/main` HEAD | `d46b6e8b548f29f545414240c402ad17d512b226` |
| Ahead / behind | `0 / 0` |
| Tracked worktree | clean |
| Tracked file count | `1051` |
| Untracked file count | `0` |
| Ignored artifact entries | `3` |
| Top-level directories | `28` |
| Top-level files | `28` |
| Public generator sources | `835` |
| Public canonical | `230` |
| Public legacy | `591` |
| Public templates | `14` |
| Relationships | `389` |
| Orphans | `649` |
| Baseline / exceptions / dispositions | `563 / 563 / 563` |
| Primary dispositions | `177 MIGRATE`, `285 AUTHORITY_REVIEW`, `59 SECURITY_REVIEW`, `42 DEFER_WITH_RISK` |
| Broken references | `0` |
| Generator drift | `0` |
| Validation / check / relationships | PASS |
| Tests | `176/176 PASS` |
| VitePress build | PASS |
| Node / pnpm | `v24.14.1` / `11.1.2` |
| Generator / schema version | `1.0.0` / `1.0.0` |

## Methodology

- Enumerated every top-level directory and root file under the repository root.
- Measured tracked, ignored, Markdown, and non-Markdown file populations.
- Reviewed material nested surfaces under `docs/.vitepress/`, `documentation/`,
  `Documents/`, `.knowledge/`, `institutional-disclosure/`, `requests/`, and
  `tools/documentation/`.
- Cross-checked generator, tests, workflow, and root documentation for path
  dependencies and exclusion rules.
- Classified surfaces conservatively when authority, publication, or generator
  semantics were mixed.

## Top-Level Directory Inventory

| Surface ID | Path | Primary classification | Key counts | Key attributes | Functional purpose | Disposition |
|---|---|---|---|---|---|---|
| `SURFACE-EP4-0001` | `.github/` | `TOOLING` | `1` file, `0` Markdown | tracked, authored, CI-dependent | Workflow automation | `KEEP_AS_IS` |
| `SURFACE-EP4-0002` | `.instructions/` | `KNOWLEDGE_SOURCE` | `60` files, `60` Markdown | tracked, authored, internal, public repo-visible, not VitePress | Operational instructions and local governance support | `KEEP_WITH_BOUNDARY_HARDENING` |
| `SURFACE-EP4-0003` | `.knowledge/` | `KNOWLEDGE_SOURCE` | `286` files, `286` Markdown | tracked, authored, public inventory included, not VitePress, authority backlog | Retrieval-oriented semantic memory and non-public knowledge packs | `AUTHORITY_REVIEW_REQUIRED` |
| `SURFACE-EP4-0004` | `Documents/` | `LEGACY_HISTORICAL` | `20` files, `20` Markdown, `15` tracked | mixed tracked state, public inventory included, not VitePress, no front matter | Planning, drafts, historical references, and legacy reconstruction inputs | `MOVE_CANDIDATE` |
| `SURFACE-EP4-0005` | `adr/` | `CANONICAL_COLLECTION` | `24` files, `24` Markdown | tracked, canonical, IDs present, public inventory included | Architectural decision records | `KEEP_AS_IS` |
| `SURFACE-EP4-0006` | `api/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | API-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0007` | `architecture/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Architecture-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0008` | `docs/` | `PUBLIC_SOURCE` | `1112` files total, `267` source Markdown, `270` tracked, `2` ignored nested dirs | VitePress source, public inventory included, nav-driven, mixed with nested build outputs | Sole structured VitePress publication source | `KEEP_WITH_BOUNDARY_HARDENING` |
| `SURFACE-EP4-0009` | `documentation/` | `DOCUMENTATION_GOVERNANCE` | `129` files, `129` Markdown | tracked, public inventory included, generated and authored mix | Documentation governance reports, indexes, audits, plans, and generated Markdown | `KEEP_WITH_BOUNDARY_HARDENING` |
| `SURFACE-EP4-0010` | `evidence/` | `GENERATED_OUTPUT` | `65` files, `0` Markdown | tracked, generated, non-public, tool-dependent | Immutable evidence snapshots for instructions intake | `KEEP_AS_IS` |
| `SURFACE-EP4-0011` | `governance/` | `CANONICAL_COLLECTION` | `12` files, `12` Markdown | tracked, canonical, IDs present | Canonical governance policies, references, and schema records | `KEEP_AS_IS` |
| `SURFACE-EP4-0012` | `institutional-disclosure/` | `PRIVATE_DISCLOSURE` | `42` files, `42` Markdown | tracked, private, generator-excluded | Track B/C and internal disclosure controls | `KEEP_WITH_BOUNDARY_HARDENING` |
| `SURFACE-EP4-0013` | `meetings/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, nearly empty, purpose documented | Meeting-record collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0014` | `node_modules/` | `BUILD_ARTIFACT` | `9803` files, `294` Markdown, `0` tracked, `1` ignored dir | ignored, local-only, dependency cache | Local dependency installation artifact | `BUILD_HYGIENE_CANDIDATE` |
| `SURFACE-EP4-0015` | `operations/` | `CANONICAL_COLLECTION` | `3` files, `3` Markdown | tracked, authored, nearly empty but purposeful | Operational documentation collection | `KEEP_AS_IS` |
| `SURFACE-EP4-0016` | `policies/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Policy-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0017` | `proposals/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Proposal-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0018` | `references/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Reference-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0019` | `releases/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Release-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0020` | `reports/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Report-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0021` | `requests/` | `REQUEST_EXECUTION_RECORD` | `17` files, `16` Markdown | tracked, private/internal, generator-excluded | Request and sprint execution evidence | `KEEP_AS_IS` |
| `SURFACE-EP4-0022` | `requirements/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Requirement-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0023` | `research/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Research-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0024` | `roadmaps/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Roadmap-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0025` | `specifications/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Specification-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0026` | `standards/` | `CANONICAL_COLLECTION` | `1` file, `1` Markdown | tracked, authored, nearly empty, purpose documented | Standard-category collection placeholder | `KEEP_AS_IS` |
| `SURFACE-EP4-0027` | `templates/` | `TEMPLATE_COLLECTION` | `15` files, `15` Markdown | tracked, authored, generator-adjacent | Canonical authoring templates | `KEEP_AS_IS` |
| `SURFACE-EP4-0028` | `tools/` | `TOOLING` | `66` files, `0` Markdown | tracked, source code, tests, CI-dependent | CLI, generator, evidence, validation, and sprint-runner implementation | `KEEP_AS_IS` |

## Root File Inventory

| Group | Files | Classification | Notes |
|---|---|---|---|
| Canonical root entrypoints | `README.md`, `ARCHITECTURE.md`, `SECURITY.md`, `GOVERNANCE.md`, `GLOSSARY.md`, `ROADMAP.md`, `SUMMARY.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `AGENTS.md` | authored root guidance | Public repo-visible; only selected files participate in VitePress or public inventory |
| Root governance registries and schemas | `documentation.baseline.json`, `documentation.exceptions.json`, `documentation.exception-dispositions.json`, `documentation.schema.json`, `documentation.*.schema.json` | governed machine-readable control state | Mutation-sensitive; not in scope for this request |
| Generated root JSON outputs | `documentation.baseline.report.json`, `documentation.graph.json`, `documentation.manifest.json`, `documentation.validation.json` | generated output | Manual editing prohibited; regenerated by `pnpm docs:generate` |
| Evidence snapshot registry | `documentation.instructions.registry.json`, `documentation.instructions.snapshot.json` | generated evidence state | Driven by snapshot tooling, not by the public generator |
| Package and runtime config | `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `vercel.json`, `.gitignore` | tooling and build control | Path-sensitive for CI, build, and hygiene |

## Nested Documentation Surfaces

| Surface ID | Path | Primary classification | Key attributes | Purpose | Disposition |
|---|---|---|---|---|---|
| `SURFACE-EP4-0029` | `docs/.vitepress/` | `TOOLING` | `845` files total, `3` tracked source files, `2` ignored generated subdirs | VitePress config and theme root with nested build outputs | `KEEP_WITH_BOUNDARY_HARDENING` |
| `SURFACE-EP4-0030` | `docs/.vitepress/cache/` | `BUILD_ARTIFACT` | ignored, local, discovery-excluded | Vite/VitePress dependency cache | `BUILD_HYGIENE_CANDIDATE` |
| `SURFACE-EP4-0031` | `docs/.vitepress/dist/` | `BUILD_ARTIFACT` | ignored, local, discovery-excluded | Static build output | `BUILD_HYGIENE_CANDIDATE` |
| `SURFACE-EP4-0032` | `docs/.vitepress/theme/` | `TOOLING` | tracked, authored | Custom theme source | `KEEP_AS_IS` |
| `SURFACE-EP4-0033` | `documentation/` generated Markdown set | `GENERATED_OUTPUT` | `4` generated Markdown files | Master index, metadata coverage, relationship report, deterministic rules | `KEEP_AS_IS` |
| `SURFACE-EP4-0034` | `documentation/` authored governance corpus | `DOCUMENTATION_GOVERNANCE` | `125` authored Markdown inputs | Epic records, audits, plans, governance reports | `KEEP_AS_IS` |
| `SURFACE-EP4-0035` | `evidence/instructions/` | `GENERATED_OUTPUT` | tracked, immutable snapshot tree | Instructions evidence registry payloads | `KEEP_AS_IS` |
| `SURFACE-EP4-0036` | `Documents/*` subcollections | `LEGACY_HISTORICAL` | no front matter, mixed historical and planning semantics | Named legacy reference buckets under one ambiguous namespace | `MOVE_CANDIDATE` |
| `SURFACE-EP4-0037` | `.knowledge/*` source packs | `KNOWLEDGE_SOURCE` | front-matter-lite knowledge packs, public inventory included | AI retrieval and semantic reasoning packs | `AUTHORITY_REVIEW_REQUIRED` |
| `SURFACE-EP4-0038` | `requests/sprint-02/` | `REQUEST_EXECUTION_RECORD` | tracked, mixed Markdown and JSON | Sprint evidence with explicit execution outputs | `KEEP_AS_IS` |
| `SURFACE-EP4-0039` | `tools/documentation/` | `TOOLING` | tracked, source code, path-dependent | Generator, validator, evidence, sprint runner | `KEEP_AS_IS` |
| `SURFACE-EP4-0040` | `tools/documentation/tests/` | `TOOLING` | tracked, test suite, path assertions | Regression coverage for structure, generator, and governance | `KEEP_AS_IS` |

## Public Source Surfaces

`docs/` is the sole default VitePress source. The workflow runs
`pnpm docs:build`, and the VitePress config is rooted at
`docs/.vitepress/config.mts`. The current navigation points only to `docs/`
paths. No navigation evidence points into `Documents/`, `.knowledge/`,
`institutional-disclosure/`, or `requests/`.

Public-source eligibility, public-navigation eligibility, and publication
authorization remain separate:

- `docs/` content is repository-visible and nav-eligible.
- Root canonical files are repository-visible and may appear in public
  inventory, but they are not automatically in VitePress navigation.
- Repository visibility does not authorize disclosure or external delivery.

## Documentation Governance Surfaces

`documentation/` remains the governance namespace. Evidence supports keeping
the namespace because it already carries:

- authored governance reports and epic records;
- generated public inventory reports;
- request and sprint audit evidence; and
- path dependencies in generator outputs, tests, and repository guidance.

The surface is semantically mixed, but the current distinction between authored
inputs and generated outputs is explicit enough to preserve without rename in
this request.

## Canonical Collections

The following root collections are small but semantically clear and should not
be collapsed purely because they are sparse:

- `api/`
- `architecture/`
- `meetings/`
- `operations/`
- `policies/`
- `proposals/`
- `references/`
- `releases/`
- `reports/`
- `requirements/`
- `research/`
- `roadmaps/`
- `specifications/`
- `standards/`

Each has a documented purpose file. They are best treated as
`NEARLY_EMPTY_BUT_CANONICAL` until a later consolidation plan proves a better
authority model.

## Knowledge Source Surfaces

`.knowledge/` and `.instructions/` are both internal knowledge-bearing
surfaces, but they differ materially:

- `.instructions/` contains execution rules and repository operating guidance.
- `.knowledge/` contains semantic packs that already enter the public inventory
  but remain under `AUTHORITY_REVIEW` in the exception-disposition system.

This makes `.knowledge/` the higher-risk normalization candidate. It is not
safe to rename or relocate it in a low-risk request without first reconciling
authority, public inventory behavior, and consumer expectations.

## Legacy and Historical Surfaces

`Documents/` is the most visually ambiguous namespace because its name is close
to `documentation/`, but its own README defines it as a holding area for
planning materials, drafts, notes, research references, and historical
documents. That means the surface is not purely historical, and a direct
`Documents/ -> legacy/` rename would overstate its semantics.

Every tracked `Documents/` path also appears in the governed exception and
inventory outputs, which makes the rename operationally non-trivial even though
the files are non-canonical.

## Private Disclosure Surfaces

`institutional-disclosure/` is explicitly private Track B/C. It is tracked and
validated locally, but public generation excludes it by prefix. It must remain
separate from `docs/`, `documentation/`, and any future root consolidation.

## Request Execution Surfaces

`requests/` is tracked request evidence. It contains human-readable requests
and at least one structured execution JSON. The public generator excludes it by
prefix, but internal tooling still discovers it as repository content for
validation and sprint-runner use.

## Generated Output Surfaces

Generated output currently lives in three distinct places:

- root JSON artifacts: public generator outputs;
- `documentation/` generated Markdown: public generator outputs;
- `evidence/` snapshots and `documentation.instructions.*.json`: evidence
  system outputs; and
- `docs/.vitepress/cache` and `docs/.vitepress/dist`: local build outputs.

These surfaces should not be conflated. The first two are tracked and
deterministic; the latter two are generated but belong to different producers.

## Tooling and Templates

`tools/` and `templates/` are structurally clear:

- `tools/` is the implementation layer for validation, generation, evidence,
  and sprint-runner behavior.
- `templates/` is the canonical authoring skeleton surface and should remain
  isolated from generated or historical directories.

## Build Artifacts

Current build-artifact evidence:

| Path | Exists | Tracked | Ignored | Source content present | Notes |
|---|---|---|---|---|---|
| `docs/.vitepress/cache/` | yes | no | yes | no | local dependency cache |
| `docs/.vitepress/dist/` | yes | no | yes | no | static build output |
| `node_modules/` | yes | no | yes | no | local dependency install |

## Empty and Nearly Empty Directories

No top-level directory is fully empty.

| Path | File count | Category | Assessment |
|---|---:|---|---|
| `.github/` | `1` | `TOOLING_REQUIRED` | Workflow-only surface; keep |
| `api/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `architecture/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `meetings/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `operations/` | `3` | `NEARLY_EMPTY_BUT_CANONICAL` | Early but valid |
| `policies/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `proposals/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `references/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `releases/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `reports/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `requirements/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `research/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `roadmaps/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `specifications/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |
| `standards/` | `1` | `NEARLY_EMPTY_BUT_CANONICAL` | Purpose documented |

## Ambiguous Surfaces

| Path | Ambiguity | Reason |
|---|---|---|
| `Documents/` | semantic ambiguity | name suggests canonical documentation, contents are mixed planning and historical |
| `.knowledge/` | authority ambiguity | public inventory includes it, but exception routing keeps it under `AUTHORITY_REVIEW` |
| `docs/.vitepress/` | mixed producer ambiguity | tracked config/theme and ignored build outputs coexist under one subtree |
| `documentation/` | authored/generated coexistence | same namespace contains inputs and generated Markdown outputs |

## Summary Metrics

| Metric | Value |
|---|---:|
| Top-level directories classified | `28` |
| Material nested surfaces classified | `12` |
| Public-source Markdown under `docs/` | `267` |
| Governance Markdown under `documentation/` | `129` |
| Authored governance inputs under `documentation/` | `125` |
| Generated governance Markdown under `documentation/` | `4` |
| Legacy / historical files under `Documents/` | `20` |
| Knowledge-pack files under `.knowledge/` | `286` |
| Private disclosure files | `42` |
| Request-execution files | `17` |
| Tooling files under `tools/` | `66` |
| Template files | `15` |
| Build-artifact directories currently ignored | `3` |

## Limitations

- Surface-level counts do not, by themselves, authorize a move or rename.
- `Documents/` and `.knowledge/` both have generated-inventory and governance
  dependencies that require separate reconciliation.
- This report does not rewrite links, update registries, or regenerate outputs.
