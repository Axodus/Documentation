---
schema_version: "1.0.0"
document_id: "DOC-SPEC-008"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Exception Disposition Model"
summary: "Defines the approved evidence contract, compact registry-extension design, and semantics for deciding the fate of legacy documentation exceptions."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.EXCEPTIONS"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-03"
last_updated: "2026-07-07"
last_reviewed: "2026-07-07"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-006"}, {type: "DEPENDS_ON", target: "DOC-ROAD-011"}, {type: "RELATES_TO", target: "DOC-ADR-021"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01", "AXODUS-DOCUMENTATION-EPIC-03-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-021"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-EXCEPTION-POLICY.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Exception Disposition Model

## Status

APPROVED for governance and registry-extension design. This specification does
not mutate the current exception registry, apply dispositions, migrate
documents, or change Documentation Schema 1.0.0.

## Decision Record

Every inventory record must contain:

| Field | Requirement |
|---|---|
| `exception_id` | Existing immutable exception ID |
| `document_path` | Existing POSIX repository path |
| `baseline_hash` | Current baseline SHA-256 |
| `current_expiry` | Current RFC3339 expiry |
| `primary_disposition` | Exactly one value from the proposed taxonomy |
| `rationale` | Evidence-backed decision without source content |
| `risk_priority` | P0, P1, P2, or lower |
| `owner` and `approver` | Canonical roles responsible for the decision |
| `authority_routing` | Required, passed, or not applicable |
| `security_routing` | Required, passed, or not applicable |
| `target_action` | Migration, renewal, review, archival, merge, or correction |
| `decided_at` | RFC3339 UTC decision time |
| `target_resolution_date` | Date by which the action must complete |
| `renewal_expires_at` | Nullable proposed expiry when renewal is required |
| `evidence_refs` | Canonical IDs or safe evidence paths |

No field may contain credentials, keys, tokens, connection strings, document
bodies, or other sensitive values.

## Primary Dispositions

| Disposition | Meaning | Completion condition |
|---|---|---|
| `MIGRATE` | Eligible for canonical promotion | Successful governed batch |
| `RENEW_EXCEPTION` | Deviation remains temporarily justified | Approved risk-capped renewal |
| `REVOKE_EXCEPTION` | Current exception is invalid | Paired correction or replacement |
| `ARCHIVE_LEGACY` | Historical value requires canonical archival | ADR-020 archival validation |
| `MERGE_DUPLICATE` | Content consolidates into a canonical target | Approved target and preserved evidence |
| `SECURITY_REVIEW` | Sensitive risk blocks a final action | Safe security decision and temporary extension if needed |
| `AUTHORITY_REVIEW` | Authority evidence blocks a final action | Authority decision and temporary extension if needed |
| `DEFER_WITH_RISK` | Action is deliberately delayed | Accepted risk, deadline, and risk-capped extension |

## Decision Rules

- Each exception has exactly one current primary disposition.
- Security and authority blockers take precedence over execution.
- Confirmed duplication requires an identified canonical merge target.
- Archival requires historical value and current-authority boundaries.
- Migration requires ADR-018 and ADR-019 gates.
- A renewal is never inferred and never unlimited.
- A review or deferral disposition does not silently extend expiry.
- A later reviewed decision supersedes the prior disposition without erasing
  decision history.

## Renewal Semantics

P0/P1 renewal is capped at 90 days. Lower-priority renewal is capped at 180
days. The same limits apply to temporary extensions supporting
`SECURITY_REVIEW`, `AUTHORITY_REVIEW`, and `DEFER_WITH_RISK`.

Every extension records current rationale, owner confirmation, approver
confirmation, resolution deadline, and the safe evidence supporting continued
tolerance.

## Compact Registry Extension Design

The approved implementation direction is a compact companion registry, not a
replacement for `documentation.exceptions.json`.

The future artifact is `documentation.exception-dispositions.json`. It is a
machine-readable configuration artifact sourced from `DOC-REF-010` and governed
by `DOC-ADR-021`. It records disposition metadata for all active exceptions
while preserving the existing baseline and exception registries unchanged until
a separately authorized application request.

The envelope uses:

| Field | Requirement |
|---|---|
| `registry_version` | Disposition registry version, starting at `1.0.0` |
| `schema_version` | Compatible schema version, starting at `1.0.0` |
| `created_at` | RFC3339 UTC creation timestamp |
| `source_inventory_id` | `DOC-REF-010` until superseded |
| `baseline_version` | Current baseline registry version |
| `exception_registry_version` | Current exception registry version |
| `entries` | Sorted array of disposition entries |

Each entry uses:

| Field | Requirement |
|---|---|
| `exception_id` | Existing immutable exception ID |
| `document_path` | Existing baseline and exception path |
| `baseline_sha256` | Baseline SHA-256 at decision time |
| `current_exception_disposition` | Current registry disposition, initially `MIGRATE_ON_CHANGE` |
| `primary_disposition` | Approved disposition taxonomy value |
| `risk_priority` | `P0`, `P1`, `P2`, or `P3` |
| `secondary_flags` | Approved flag vocabulary from the inventory |
| `authority_routing` | `REQUIRED`, `PASSED`, `NOT_APPLICABLE`, or `PENDING` |
| `security_routing` | `REQUIRED`, `PASSED`, `NOT_APPLICABLE`, or `PENDING` |
| `owner_confirmation` | `CONFIRMED`, `PENDING`, or `NOT_APPLICABLE` |
| `approver_confirmation` | `CONFIRMED`, `PENDING`, or `NOT_APPLICABLE` |
| `target_action` | Short operational action label |
| `target_resolution_date` | ISO date deadline |
| `renewal_expires_at` | Nullable RFC3339 timestamp for approved extensions |
| `rationale` | Safe evidence-backed rationale without source bodies |
| `evidence_refs` | Canonical document IDs or safe evidence paths |

The compact registry is sorted by `exception_id`. It may not include document
bodies, credentials, secrets, private disclosure content, source excerpts, or
unreviewed financial/legal claims.

## Validator Impact

REQ-03 does not change validator behavior. A future implementation request may
add validation for the companion registry with these checks:

- exactly one disposition entry per active exception;
- synchronized `exception_id` and `document_path` with the exception registry;
- synchronized `document_path` and `baseline_sha256` with the baseline;
- valid disposition, priority, routing, confirmation, and flag enums;
- valid date formats and renewal caps;
- no removed baseline entries and no removed exception entries;
- no applied registry mutation during dry run;
- deterministic ordering and serialization.

Validation errors in the companion registry must not be hidden by Markdown
reports. The Markdown inventory remains explanatory evidence; the JSON
companion becomes the operational input for dry-run and application tooling.

## Inventory Migration

`DOC-REF-010` remains the human-readable inventory of 573 proposed
dispositions. The future compact registry is derived from that inventory and
must be reconciled back to it by count, exception ID, path, disposition,
priority, routing, target date, and evidence references.

The first implementation request must run in dry-run mode. It may create the
companion registry and validator support, but it may not update
`documentation.exceptions.json`, remove baseline entries, remove exception
entries, migrate documents, reserve final document IDs, or add traceability
edges.

## Visibility Boundary

Disposition data is documentation-governance data. It may be stored in the
private repository and used by validation tooling, but it must not expose
private Track B/C content, `institutional-disclosure/` paths, request internals,
secret values, credentials, or source bodies.

Generated public navigation must not link to private disclosure paths or
request internals. Public-facing summaries may use aggregate counts and
policy-level descriptions only.

## Compatibility Boundary

The existing registry continues to use `MIGRATE_ON_CHANGE` after REQ-03. Any
future registry field or enum change requires an explicit versioning decision,
Validation Framework compatibility work, tests, and a separately authorized
request. Documentation Schema 1.0.0 is unaffected.
