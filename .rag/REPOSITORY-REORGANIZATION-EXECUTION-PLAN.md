---
schema_version: "1.0.0"
document_id: "DOC-RPT-096"
aliases: []
document_type: "REPORT"
title: "Repository Reorganization Execution Plan"
summary: "Defines the phased EPIC-04 request sequence, entry criteria, mutation boundaries, generator handling, and rollback expectations for future repository reorganization work."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/REPOSITORY-REORGANIZATION-CANDIDATE-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/REPOSITORY-PATH-DEPENDENCY-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Repository Reorganization Execution Plan

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-01
Physical Mutation in this request: NOT_AUTHORIZED
Generator Write in this request: NOT_AUTHORIZED
Future phases require separate authorization
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This plan converts the frozen surface evidence into a future request sequence.
It does not release broad execution. It defines what each subsequent request
must prove before it can mutate the repository.

## Phase Summary

| Phase | Future request | Status after REQ-01 |
|---|---|---|
| `PHASE_1_BUILD_HYGIENE` | `DOCUMENTATION-REORG-REQ-02` | released |
| `PHASE_2_LEGACY_SURFACE_NORMALIZATION` | `DOCUMENTATION-REORG-REQ-03` | blocked pending supplemental legacy decision |
| `PHASE_3_KNOWLEDGE_SURFACE_NORMALIZATION` | `DOCUMENTATION-REORG-REQ-04` | blocked pending authority and boundary release |
| `PHASE_4_ROOT_COLLECTION_PLANNING` | `DOCUMENTATION-REORG-REQ-05` | planning-only |
| `PHASE_5_PUBLIC_BOUNDARY_ENFORCEMENT` | `DOCUMENTATION-REORG-REQ-06` | planning-only with boundary candidate identified |
| `PHASE_6_LOW_RISK_ROOT_EXECUTION` | `DOCUMENTATION-REORG-REQ-07` | blocked until earlier closures release candidates |
| Final closure | `DOCUMENTATION-REORG-REQ-08` | future closure only |

## Request Plan

| Request | Entry criteria | Authorized candidate set | Mutation boundary | Generator strategy | Registry strategy | Rollback | Validation | Commit | Closure criteria |
|---|---|---|---|---|---|---|---|---|---|
| `DOCUMENTATION-REORG-REQ-02` VitePress Build Artifact Hygiene | `REORG-EP4-0001` and `REORG-EP4-0002` still point to ignored non-source build artifacts; current drift comes only from REQ-01 reports | `REORG-EP4-0001`, `REORG-EP4-0002` | ignore rules, discovery exclusions, tests, and hygiene reports only; no public source rewrites | complete generator write allowed to absorb REQ-01 reports; drift must end at `0` | no baseline/exception/disposition mutation | remove hygiene-only edits and restore pre-request generated outputs | validate, check, relationships, tests, build, generate-check | isolated hygiene commit | build artifacts remain non-source and drift returns to `0` |
| `DOCUMENTATION-REORG-REQ-03` Legacy Directory Canonicalization | separate authority decision confirms whether `Documents/` can rename as one surface or must split planning versus historical first | currently none frozen for execution; must derive a released subset from `REORG-EP4-0003` | path moves limited to approved legacy subset and linked references | full generator write required after mutation | registry and inventory updates required and must reconcile exactly | rename-back plus registry and generated-output restoration | validate, check, relationships, tests, build, generate-check, registry audit | dedicated legacy-surface commit | every moved legacy path reconciles with references, generator outputs, and registries |
| `DOCUMENTATION-REORG-REQ-04` Knowledge Source Surface Normalization | authority model for `.knowledge/` resolved; private/public and consumer scopes frozen | currently none frozen for execution; must derive a released subset from `REORG-EP4-0004` | no public disclosure expansion; only approved knowledge-surface mutation | full generator write only if released subset changes public inventory inputs | exception/disposition and count impacts must be reconciled before execution | restore prior path plus generated and registry state | validate, check, relationships, tests, build, generate-check, authority audit | dedicated knowledge-surface commit | authority and publication boundaries remain intact |
| `DOCUMENTATION-REORG-REQ-05` Root Canonical Directory Consolidation Plan | `REORG-EP4-0005` remains planning-only; no broad move candidate released yet | planning-only analysis of sparse canonical collections | no physical mutation; planning reports only | check-only unless new reports require later absorption | no registry mutation | delete planning reports only | validate, check, generate-check, tests, build | planning-only commit | root collections either remain separate or produce a bounded future execution set |
| `DOCUMENTATION-REORG-REQ-06` Public Source Boundary Enforcement | `REORG-EP4-0006` still reflects a valid boundary concern and nav/source rules remain separable from path moves | `REORG-EP4-0006` plus any explicitly released boundary-only follow-ons | source-boundary and navigation rules only; no directory moves | generator write only if reports or governance docs are added | no registry mutation expected | revert rule-only changes and generated outputs | validate, check, relationships, tests, build, generate-check, boundary scan | dedicated boundary-hardening commit | `docs/` remains sole public source and non-source surfaces stay excluded |
| `DOCUMENTATION-REORG-REQ-07` Low-Risk Root Consolidation Execution | only candidates explicitly released by REQ-05 and REQ-06 may enter | none released by REQ-01 | minimal low-risk moves only | full generator write if any public inventory path changes | registry updates only if a released candidate requires them | exact path restore from pre-request commit | full validation plus commit-scope audit | one or more isolated execution commits | only released low-risk candidates executed |
| `DOCUMENTATION-REORG-REQ-08` Repository Reorganization Final Closure Audit | prior requests committed, validated, and generator-clean | all executed or deferred candidates with evidence | closure audit only | generator write only if closure reports introduce expected drift | no destructive registry edits | revert closure-only reports if needed | full validation plus reconciliation audit | closure commit | final topology reconciled with all approved mutations |

## Notes by Future Request

### `DOCUMENTATION-REORG-REQ-02`

- This is the only request already released by current evidence.
- It must also absorb the six reports created by REQ-01 and clear the expected
  generator drift.

### `DOCUMENTATION-REORG-REQ-03`

- Do not assume `Documents/ -> legacy/` is the final answer.
- First decide whether `planning/` and `archive/` semantics can live under one
  successor surface.

### `DOCUMENTATION-REORG-REQ-04`

- Do not normalize `.knowledge/` until authority ownership, consumer model, and
  public inventory expectations are released by a separate decision.

### `DOCUMENTATION-REORG-REQ-05` and `REQ-06`

- These requests should remain non-destructive until a later released subset
  proves that the benefit of moving sparse root collections outweighs the churn.

## Final Planning State

REQ-01 releases only build hygiene. All broader structural changes remain
phased, bounded, and subject to later evidence and closure audits.

