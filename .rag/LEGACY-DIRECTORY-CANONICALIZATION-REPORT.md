---
schema_version: "1.0.0"
document_id: "DOC-RPT-098"
aliases: []
document_type: "REPORT"
title: "Legacy Directory Canonicalization Report"
summary: "Records the bounded Documents to legacy surface canonicalization, including pre-move inventory, per-file eligibility decisions, path-boundary controls, and preserved-content guarantees."
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
related_requirements: ["DOCUMENTATION-REORG-REQ-03"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/REPOSITORY-SURFACE-INVENTORY.md", ref: "215d6aab0454ef4d8b183ccf98f8a6703c09cc41", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "215d6aab0454ef4d8b183ccf98f8a6703c09cc41", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "legacy/README.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Legacy Directory Canonicalization Report

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-03
Initial Drift: EXPECTED_PREDECESSOR_DRIFT
Relationship Mutation: NOT_AUTHORIZED
Schema Change: NOT_AUTHORIZED
Generator Logic Change: NOT_AUTHORIZED
Public Navigation Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report records the execution decision that canonicalized the ambiguous
`Documents/` legacy surface into `legacy/` without changing file contents,
document identifiers, metadata, relationships, authority, disclosure state, or
generator logic.

## Accepted Baseline

| Field | Value |
|---|---|
| Branch | `main` |
| Accepted execution HEAD | `215d6aab0454ef4d8b183ccf98f8a6703c09cc41` |
| Live `origin/main` at execution start | `215d6aab0454ef4d8b183ccf98f8a6703c09cc41` |
| Worktree | clean |
| `validate --summary` | pass |
| `check --summary` | pass |
| `relationships --summary` | pass |
| Initial `generate --check` | drift `7`, expected predecessor drift only |

## Pre-Move Inventory

| Metric | Value |
|---|---:|
| Filesystem files under legacy surface before move | `20` |
| Directories under legacy surface before move | `9` |
| Git-tracked paths mapped to the surface | `20` |
| Uppercase `Documents/**` tracked paths | `15` |
| Lowercase `documents/**` tracked paths | `5` |
| Canonical document IDs present | `0` |
| YAML front matter documents | `0` |
| Registry-backed legacy entries | `15` |

The lowercase `documents/**` paths were a pre-existing index-level
case-sensitivity artifact for five README files. The request reconciles that
state by converging the entire surface to `legacy/**`.

## File Classification and Move Eligibility

All twenty files were reviewed individually. No file carried canonical Schema
1.0.0 metadata, canonical document authority, or active relationship metadata.
Each file was therefore eligible for `MOVE_WITH_LEGACY_SURFACE`.

| Filesystem Path Before Move | Classification | Final Decision |
|---|---|---|
| `Documents/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/agents/AXODUS_AGENT_ALIGNMENT.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/agents/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/archive/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/commercial/AXODUS_COMMERCIAL_CORE.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/commercial/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/planning/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/planning/VITEPRESS_CUSTOMIZATION_REPORT.md` | `HISTORICAL` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/product/AXODUS_ECOSYSTEM_ONBOARDING.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/product/AXODUS_USER_JOURNEY.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/product/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/research/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/AXODUS_CAPITAL_ALLOCATION_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/AXODUS_CONSTITUTION.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/AXODUS_DAO_FEDERATION_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/AXODUS_ECONOMIC_MODEL.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/AXODUS_TREASURY_PHILOSOPHY.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/strategy/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/trading/AXODUS_TRADING_PRINCIPLES.md` | `DRAFT` | `MOVE_WITH_LEGACY_SURFACE` |
| `Documents/trading/README.md` | `REFERENCE` | `MOVE_WITH_LEGACY_SURFACE` |

## Move Execution

Authorized physical mutation executed:

```text
Documents/
  -> legacy/
```

No file was moved between subfolders. No content rewrite was performed. No
additional directory rename was executed.

## Content Preservation Guarantees

| Guarantee | Result |
|---|---|
| Content hash preservation | `PASS` |
| Canonical document IDs changed | `0` |
| Metadata changed | `0` |
| Relationships changed | `0` |
| Lost files | `0` |

The surface contained no canonical Schema 1.0.0 front matter. For all twenty
files, document ID, metadata, and relationship preservation therefore resolved
to a null-preserving move with identical file bytes before and after rename.

## Boundary Confirmation

The renamed `legacy/` surface remains:

- outside VitePress navigation as an execution authority surface;
- outside Institutional;
- outside private disclosure;
- outside request execution artifacts;
- non-canonical and non-promoted;
- subject to the same governed legacy handling and generated inventory rules as
  the predecessor surface.

## Result

The legacy-surface ambiguity with `.rag/` was reduced by replacing the
mixed-case `Documents/` namespace with `legacy/`, while preserving the bounded
non-canonical nature of the moved corpus.
