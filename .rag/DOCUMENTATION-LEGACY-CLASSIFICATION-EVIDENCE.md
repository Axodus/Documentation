---
schema_version: "1.0.0"
document_id: "DOC-RPT-004"
aliases: []
document_type: "REPORT"
title: "Documentation Legacy Classification Evidence"
summary: "Defines the complete evidence partition used to classify every baseline legacy path without inspecting or exposing sensitive values."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.DEBT.EVIDENCE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "VALIDATES", target: "DOC-RPT-003"}, {type: "VALIDATES", target: "DOC-ROAD-002"}, {type: "VALIDATES", target: "DOC-REF-005"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Legacy Classification Evidence

## Evidence Boundary

This report classifies the full baseline by deterministic set partition. It records paths, counts, and hashes only; it does not reproduce document contents or sensitive values.

```text
baseline entries: 633
exception entries: 633
baseline path-set SHA-256: ead5f9b2c63726042fc2d9df61f0fefa42d388b8134ec89fc9d814af1d65697a
exception path-set SHA-256: ead5f9b2c63726042fc2d9df61f0fefa42d388b8134ec89fc9d814af1d65697a
path sets equal: true
exact duplicate hash groups: 0
```

## Complete Classification Partition

Apply precedence in the approved order.

1. No SHA-256-identical groups, confirmed conflicts, approved stale decisions, or approved archive decisions were found.
2. Every baseline path matching `.instructions/**/*.md` or `.instructions/*.md` is `EXCEPTION_REQUIRED`: 59.
3. Every remaining baseline path is `NEEDS_REVIEW`: 574.

The rules are mutually exclusive and cover all 633 sorted baseline paths. Therefore each legacy document has exactly one primary classification without a duplicated per-path copy of the authoritative baseline.

## Flag Partition

- `urgency`: all 633 paths because the active exception expires on 2026-10-01.
- `public_exposure`: all 247 `docs/**` paths.
- `authority_required`: all 574 `NEEDS_REVIEW` paths.
- `cross_core_dependency`: 14 paths under `docs/overview/` or `.knowledge/core/`.
- `security_sensitive`: 381 paths in security/financial-sensitive core families or `.instructions/`.
- `risk`: 441 paths in risk/governance/operational core families or `.instructions/`.

Flags are non-exclusive. Security flags route review and do not assert that a secret was found.

## Limitations

- Exact-hash comparison does not detect partial semantic duplication.
- Staleness and conflict require authority-aware content review.
- A path-derived sensitive flag is conservative routing evidence.
- No class is upgraded to `NEEDS_METADATA` or `PROMOTE_READY` without reviewer and approver evidence.

## Integrity Statement

No baseline entry or exception was added, removed, renumbered, or semantically changed by this classification.
