---
schema_version: "1.0.0"
document_id: "DOC-RPT-093"
aliases: []
document_type: "REPORT"
title: "Repository Reorganization Candidate Register"
summary: "Registers bounded EPIC-04 repository reorganization candidates, their dependencies, and their freeze or deferment status without performing any physical mutation."
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
related_adrs: ["DOC-ADR-009", "DOC-ADR-014", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/REPOSITORY-SURFACE-INVENTORY.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "tools/documentation/repository/discovery.js", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".gitignore", ref: "d46b6e8b548f29f545414240c402ad17d512b226", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Reorganization Candidate Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Physical Mutation: NOT_AUTHORIZED
Generator Write: NOT_AUTHORIZED
Registry Mutation: NOT_AUTHORIZED
Navigation Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register records the bounded reorganization candidates observed during the
surface inventory. It distinguishes candidates that are safe to freeze for a
later execution request from candidates that remain planning-only,
authority-bound, generator-bound, or not worth executing.

## Candidate Methodology

- A candidate was created only when a physical, semantic, or boundary ambiguity
  suggested a later repository change.
- Freeze required discoverable inbound and outbound references, clear target
  purpose, and no required schema or generator logic change.
- Candidates that affected registries, generated inventories, or authority
  routing were not auto-frozen merely because the surface looked redundant.

## Disposition Definitions

| Disposition | Meaning in this register |
|---|---|
| `FREEZE_FOR_BUILD_HYGIENE` | Low-risk artifact-boundary candidate released for a later hygiene request |
| `FREEZE_FOR_LEGACY_SURFACE_NORMALIZATION` | Legacy-surface candidate fully ready for execution freeze |
| `FREEZE_FOR_KNOWLEDGE_SURFACE_NORMALIZATION` | Knowledge-surface candidate fully ready for execution freeze |
| `FREEZE_FOR_LOW_RISK_ROOT_CONSOLIDATION` | Low-risk root-namespace consolidation candidate ready for execution |
| `PLAN_ONLY_ROOT_CONSOLIDATION` | Candidate stays in planning because benefits or boundaries are not yet strong enough for execution |
| `AUTHORITY_REVIEW_REQUIRED` | Authority or ownership ambiguity blocks freeze |
| `SECURITY_REVIEW_REQUIRED` | Security or disclosure ambiguity blocks freeze |
| `GENERATOR_REVIEW_REQUIRED` | Generator, registry, or inventory dependency blocks low-risk freeze |
| `NAVIGATION_REVIEW_REQUIRED` | Public source, navigation, or source-boundary behavior needs explicit review |
| `DEFER_INSUFFICIENT_EVIDENCE` | Evidence exists but is insufficient for a target-state decision |
| `REJECT_NO_MEANINGFUL_BENEFIT` | Observed ambiguity does not justify a later change on current evidence |

## Phase Definitions

| Phase | Intent |
|---|---|
| `PHASE_1_BUILD_HYGIENE` | Keep build outputs local, ignored, and outside source discovery |
| `PHASE_2_LEGACY_SURFACE_NORMALIZATION` | Resolve `Documents/` semantics and any successor path |
| `PHASE_3_KNOWLEDGE_SURFACE_NORMALIZATION` | Reconcile `.knowledge/` authority and target topology |
| `PHASE_4_ROOT_COLLECTION_PLANNING` | Decide whether sparse root collections should stay isolated or consolidate |
| `PHASE_5_PUBLIC_BOUNDARY_ENFORCEMENT` | Tighten `docs/` source-only, navigation, and publication boundary rules |
| `DEFERRED` | Not yet eligible for execution |

## Frozen Candidates

| Candidate ID | Source Path | Surface ID | Current Classification | Current Purpose | Observed Problem | Proposed Target Path | Proposed Action | Authority Owner | Generator Impact | Registry Impact | Reference Impact | Navigation Impact | Boundary Impact | CI Impact | Case-Sensitivity Risk | Risk Level | Dependencies | Rollback Requirement | Disposition | Execution Phase | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `REORG-EP4-0001` | `docs/.vitepress/cache/` | `SURFACE-EP4-0030` | `BUILD_ARTIFACT` | Local VitePress cache | Hidden local cache sits under the public source root and can be mistaken for content during manual inspection | no repository move | Preserve ignore-only local cache hygiene and keep discovery exclusion explicit | Documentation Maintainer | already excluded by discovery | none | `.gitignore`, discovery, sanitization tests | none | low and already controlled | workflow/build only | low | `.gitignore`; `tools/documentation/repository/discovery.js`; `tools/documentation/tests/repository-sanitization.test.js` | remove hygiene-only changes and restore prior ignore/test state | `FREEZE_FOR_BUILD_HYGIENE` | `PHASE_1_BUILD_HYGIENE` | Low-risk candidate; no source or registry semantics change |
| `REORG-EP4-0002` | `docs/.vitepress/dist/` | `SURFACE-EP4-0031` | `BUILD_ARTIFACT` | Local static build output | Hidden generated site output sits under the public source root and appears in private audit evidence | no repository move | Preserve ignore-only local build hygiene and keep discovery exclusion explicit | Documentation Maintainer | already excluded by discovery | none | `.gitignore`, discovery, sanitization tests, private report references | none | low and already controlled | workflow/build only | low | `.gitignore`; `tools/documentation/repository/discovery.js`; `tools/documentation/tests/repository-sanitization.test.js`; private audit references remain non-authoritative | remove hygiene-only changes and restore prior ignore/test state | `FREEZE_FOR_BUILD_HYGIENE` | `PHASE_1_BUILD_HYGIENE` | Low-risk candidate; output is regenerated by `pnpm docs:build` |

## Planning-Only Candidates

| Candidate ID | Source Path | Surface ID | Current Classification | Current Purpose | Observed Problem | Proposed Target Path | Proposed Action | Authority Owner | Generator Impact | Registry Impact | Reference Impact | Navigation Impact | Boundary Impact | CI Impact | Case-Sensitivity Risk | Risk Level | Dependencies | Rollback Requirement | Disposition | Execution Phase | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `REORG-EP4-0003` | `Documents/` | `SURFACE-EP4-0004` | `LEGACY_HISTORICAL` | Non-canonical drafts, planning, and historical references | Namespace is visually confusable with `documentation/`, but contents are not purely historical and are already governed in generated inventories and exception routing | `legacy/` or split surface | Normalize only after a dedicated legacy-surface decision determines whether planning material and historical material must separate first | Documentation Coordinator | high; generated inventory and report paths change | high; tracked exception and baseline references change | high; README, AGENTS, generated outputs, and evidence reports reference the path | none directly | medium; legacy could be misread as historical-only while active planning notes remain | low direct CI impact | medium | generated outputs; `documentation.exception-dispositions.json`; README/AGENTS references; rollback mapping | path-restore plus registry and generator reconciliation | `PLAN_ONLY_ROOT_CONSOLIDATION` | `PHASE_2_LEGACY_SURFACE_NORMALIZATION` | Not frozen because `Documents/` mixes planning and historical semantics |
| `REORG-EP4-0005` | `api/`, `architecture/`, `meetings/`, `operations/`, `policies/`, `proposals/`, `references/`, `releases/`, `reports/`, `requirements/`, `research/`, `roadmaps/`, `specifications/`, `standards/` | multiple | `CANONICAL_COLLECTION` | Sparse canonical category collections | Low file counts may tempt consolidation, but each collection still has a documented semantic boundary | to be determined by later plan | Plan-only consolidation review after authority, growth expectation, and consumer analysis | Documentation Coordinator | unknown until target chosen | none now | medium; links and relative paths would change | possible if public docs are regrouped | medium | low direct CI impact | low | authority review of each collection and future growth model | per-collection restore | `PLAN_ONLY_ROOT_CONSOLIDATION` | `PHASE_4_ROOT_COLLECTION_PLANNING` | Sparse does not equal redundant |

## Review-Required Candidates

| Candidate ID | Source Path | Surface ID | Current Classification | Current Purpose | Observed Problem | Proposed Target Path | Proposed Action | Authority Owner | Generator Impact | Registry Impact | Reference Impact | Navigation Impact | Boundary Impact | CI Impact | Case-Sensitivity Risk | Risk Level | Dependencies | Rollback Requirement | Disposition | Execution Phase | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `REORG-EP4-0004` | `.knowledge/` | `SURFACE-EP4-0003` | `KNOWLEDGE_SOURCE` | Semantic memory and retrieval packs | Hidden namespace is semantically opaque, already public-inventory visible, and under `AUTHORITY_REVIEW` for `285` governed exceptions | `knowledge/`, `.axodus/knowledge/`, or split target | Normalize only after authority, consumer, and disclosure scopes are partitioned | Documentation Coordinator with domain owners | high; public inventory and generator outputs include `.knowledge/**` | high; exception/disposition counts and tests reference the path | high; tests, generated outputs, and cross-repository alignment docs reference the path | none currently | high; publication and private/public inference risk | medium | medium | `documentation.exception-dispositions.json`; `tools/documentation/tests/epic-02-inventory.test.js`; generated outputs; terminology controls | path-restore plus generator and registry reconciliation | `AUTHORITY_REVIEW_REQUIRED` | `PHASE_3_KNOWLEDGE_SURFACE_NORMALIZATION` | Not low-risk and not ready to freeze |
| `REORG-EP4-0006` | `docs/` source boundary | `SURFACE-EP4-0008` | `PUBLIC_SOURCE` | Sole VitePress publication source | Repository visibility, public inventory eligibility, VitePress navigation, and disclosure approval can be conflated by contributors | no move; rule hardening only | Tighten source-only boundary rules and validate that non-source surfaces never leak into `docs/` behavior | Documentation Maintainer | low to medium; may add checks, not path moves | none | medium; root links and nav-facing rules need review | medium; touches source-only and nav rules | medium | low | low | VitePress config, publication governance, docs boundary tests | revert rule-only changes | `NAVIGATION_REVIEW_REQUIRED` | `PHASE_5_PUBLIC_BOUNDARY_ENFORCEMENT` | Future request should remain non-structural |

## Rejected Candidates

| Candidate ID | Source Path | Surface ID | Current Classification | Current Purpose | Observed Problem | Proposed Target Path | Proposed Action | Authority Owner | Generator Impact | Registry Impact | Reference Impact | Navigation Impact | Boundary Impact | CI Impact | Case-Sensitivity Risk | Risk Level | Dependencies | Rollback Requirement | Disposition | Execution Phase | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `REORG-EP4-0007` | `documentation/` | `SURFACE-EP4-0009` | `DOCUMENTATION_GOVERNANCE` | Governance reports plus generated public inventory Markdown | The namespace appears close to `Documents/`, but the semantic role is already stable and heavily referenced | rename or merge not recommended | Keep the namespace and distinguish authored versus generated artifacts explicitly | Documentation Coordinator | very high | very high | very high | none | low | low | low | generated Markdown ownership already explicit | restore if a later rename were attempted | `REJECT_NO_MEANINGFUL_BENEFIT` | `DEFERRED` | Rename cost outweighs the current ambiguity benefit |

## Candidate Reconciliation

| Category | Count |
|---|---:|
| Frozen candidates | `2` |
| Planning-only candidates | `2` |
| Review-required candidates | `2` |
| Rejected candidates | `1` |
| Total candidates | `7` |

## Limitations

- No physical mutation was executed, so rollback plans remain analytical.
- `Documents/` and `.knowledge/` candidates are intentionally conservative
  because their generated and governed references are already material.
- Broad root consolidation remains a planning activity, not an execution
  freeze, on current evidence.

## Final Freeze Result

Only `docs/.vitepress/cache/` and `docs/.vitepress/dist/` are frozen for the
next low-risk hygiene request. `Documents/` and `.knowledge/` remain out of
execution freeze. Broad root collection consolidation stays planning-only.

