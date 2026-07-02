---
schema_version: "1.0.0"
document_id: "DOC-SPEC-005"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Adoption Metrics"
summary: "Defines formulas, data sources, status dimensions, and mandatory measurement gates for DOCUMENTATION-EPIC-02."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.ADOPTION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ROAD-001"}, {type: "RELATES_TO", target: "DOC-STD-003"}, {type: "DEPENDS_ON", target: "DOC-SPEC-002"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-004", "DOC-ADR-016", "DOC-ADR-018"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.manifest.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.graph.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "DOCUMENTATION-METADATA-COVERAGE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Adoption Metrics

## Purpose

This specification defines deterministic adoption measurements and closure gates for DOCUMENTATION-EPIC-02.

## Authoritative Data Sources

| Metric domain | Source |
|---|---|
| Document/profile counts | `documentation.manifest.json` |
| Field coverage | `DOCUMENTATION-METADATA-COVERAGE.md` |
| Relationships/orphans | `documentation.graph.json` |
| Legacy states | `documentation.baseline.report.json` |
| Exceptions | `documentation.exceptions.json` and validation result |
| Validation | `documentation.validation.json` |
| Drift | Generator check result |
| Evidence | Batch evidence reports |
| CI/build | Read-only workflow result |

Manual report values MUST reconcile to generated sources.

## Core Metrics

| Metric | Formula |
|---|---|
| Canonical documents | Manifest documents classified `CANONICAL` |
| Legacy documents | Manifest documents classified `LEGACY` |
| Adoption ratio | Canonical documents ÷ source documents × 100 |
| Canonical field coverage | Present canonical field instances ÷ all expected field instances × 100 |
| Legacy reduction | EPIC baseline legacy − current legacy |
| Migration throughput | Successfully migrated legacy documents per accepted batch |
| Deferral rate | Deferred reviewed candidates ÷ reviewed candidates × 100 |
| Canonical orphan rate | Canonical orphan nodes ÷ canonical nodes × 100 |
| Exception synchronization | Exception paths equal baseline paths |
| Expiry horizon | Earliest active exception expiry − measurement date |
| Relationship density | Declared semantic relationships ÷ canonical documents |

Templates contribute field presence to the existing coverage report but are reported separately from canonical adoption.

## EPIC Baseline and Gates

| Metric | Baseline | Closure gate |
|---|---:|---:|
| Source documents | 687 | Tracked, no fixed cap |
| Canonical documents | 40 | ≥100 |
| Legacy documents | 633 | ≤573 |
| Canonical field coverage | 7.86% | ≥15% |
| Migrated legacy | 0 for EPIC-02 | ≥60 |
| Canonical orphans | 0 | 0 |
| Unresolved references | 0 | 0 |
| Generator drift | 0 | 0 |
| Validation errors/warnings | 0/0 | 0/0 |

New planning, evidence, and batch reports increase canonical count and the total denominator but do not count as legacy migration.

## Core Adoption Status

| Status | Meaning |
|---|---|
| `NOT_ASSESSED` | No current inventory decision |
| `INVENTORIED` | Debt counted and classified |
| `BATCH_PLANNED` | Reviewed candidates frozen |
| `IN_MIGRATION` | Approved batch currently executing |
| `ADOPTED_PARTIAL` | At least one governed core entry point is canonical |
| `ADOPTED_TARGET` | Core-specific batch target and quality gates achieved |

EPIC closure requires all 16 public nuclei at `ADOPTED_PARTIAL` or higher.

## Batch Metrics

Each accepted batch reports:

- candidates reviewed;
- documents promoted, archived, excepted, deferred, and rejected;
- baseline and exception reductions;
- canonical and legacy deltas;
- coverage percentage-point delta;
- relations added;
- canonical and total orphan deltas;
- validation errors/warnings;
- unresolved references;
- deterministic hashes and drift;
- CI, evidence, and build result;
- elapsed review cycle and reviewer completion.

## Measurement Timing

Record measurements:

1. Before batch edits.
2. After document validation but before registry removal.
3. After baseline/exception updates.
4. After Generator write.
5. After final CI/build acceptance.

Only stage 5 values become accepted adoption metrics.

## Failure Conditions

A batch is not accepted when:

- counts do not reconcile;
- baseline and exceptions differ;
- a canonical document is orphaned;
- any relation is unresolved;
- validation has errors or warnings;
- generation is not byte-identical;
- drift is non-zero;
- evidence or build fails;
- an operational gate changes.

## Reporting Precision

Counts use integers. Ratios and coverage use two decimal places. Paths use normalized POSIX form. Timestamps use UTC RFC3339. Sorting follows Generator deterministic order.
