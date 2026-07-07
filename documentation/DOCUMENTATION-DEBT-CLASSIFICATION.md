---
schema_version: "1.0.0"
document_id: "DOC-STD-003"
aliases: []
document_type: "STANDARD"
title: "Documentation Debt Classification"
summary: "Defines deterministic primary classes, flags, scoring, and actions for the remaining legacy documentation debt."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.DEBT"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-019"}, {type: "DEPENDS_ON", target: "DOC-ADR-020"}, {type: "RELATES_TO", target: "DOC-STD-002"}, {type: "RELATES_TO", target: "DOC-SPEC-005"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-02"]
related_adrs: ["DOC-ADR-006", "DOC-ADR-008", "DOC-ADR-015", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Debt Classification

## Purpose

This standard classifies legacy debt consistently before migration work is scheduled.

## Primary Classification

Every legacy document receives exactly one primary class. Apply the first matching class in this precedence order:

1. `CONFLICTING`
2. `DUPLICATED`
3. `STALE`
4. `ARCHIVE_CANDIDATE`
5. `EXCEPTION_REQUIRED`
6. `NEEDS_REVIEW`
7. `NEEDS_METADATA`
8. `PROMOTE_READY`

## Definitions

| Class | Definition | Default disposition |
|---|---|---|
| `CONFLICTING` | Contradicts stronger applicable authority or portfolio state | Block and resolve authority |
| `DUPLICATED` | Substantially overlaps another document without clear ownership | Consolidate or supersede |
| `STALE` | Contains unverified dates, statuses, dependencies, or assumptions | Review or archive |
| `ARCHIVE_CANDIDATE` | Has historical value but no current authority | Archive under ADR-020 |
| `EXCEPTION_REQUIRED` | Cannot currently satisfy a rule for an approved reason | Preserve justified exception |
| `NEEDS_REVIEW` | Requires technical, business, security, or authority review | Assign review before ranking |
| `NEEDS_METADATA` | Content is viable and authority known; metadata evidence is incomplete | Complete evidence and promote |
| `PROMOTE_READY` | Meets promotion threshold with only mechanical normalization | Schedule migration |

## Secondary Flags

A document may carry multiple flags:

- `risk`
- `public_exposure`
- `cross_core_dependency`
- `urgency`
- `security_sensitive`
- `authority_required`

Flags refine prioritization but do not override the primary class.

## Current Debt Segments

| Segment | Legacy count | Initial treatment |
|---|---:|---|
| Public `docs/` | 247 | Primary EPIC-02 migration pool |
| `.knowledge/` | 285 | Authority and archival review before promotion |
| `.instructions/` | 59 | Local control/evidence treatment; no wholesale migration |
| Other root/historical locations | 42 | Review, consolidation, or archival |
| Total | 633 | Controlled classification |

## Priority Score

Calculate score only for `PROMOTE_READY` and `NEEDS_METADATA`:

| Condition | Score |
|---|---:|
| Public `docs/` path | +30 |
| Overview or entry point | +25 |
| Known owner and authority | +20 |
| Referenced by navigation | +15 |
| Governance, security, accountability, or risk relevance | +10 |
| Recent verifiable update | +10 |
| Technical/authority review pending | −30 |
| Conflict, duplication, or stale evidence discovered | −50 and reclassify |

Sort descending by score, then ascending by normalized `source_path`.

## Per-Core Distribution

A normal batch:

- includes at least four nuclei;
- contains no more than five documents from one nucleus;
- reports candidate, migration, deferral, and coverage counts per nucleus;
- does not satisfy a portfolio metric by concentrating on one domain.

Batch 01 is the approved exception to the normal distribution because it intentionally covers all 16 public nucleus overview pages.

## Classification Evidence

For each document record:

- path and baseline hash;
- primary class and flags;
- accountable owner;
- authority scope/level candidate;
- reason code;
- reviewer assignment;
- proposed disposition;
- priority score when eligible;
- safe risk notes.

Do not copy secrets, credentials, private endpoints, or full content into classification reports.

## Reclassification

Reclassification requires new evidence and reviewer attribution. Preserve previous class, date, and rationale in batch evidence. Never silently upgrade a document to `PROMOTE_READY`.
