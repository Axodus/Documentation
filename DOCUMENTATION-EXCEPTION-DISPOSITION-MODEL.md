---
schema_version: "1.0.0"
document_id: "DOC-SPEC-008"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Exception Disposition Model"
summary: "Defines the proposed evidence contract and semantics for deciding the fate of legacy documentation exceptions."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
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
last_updated: "2026-07-03"
last_reviewed: "2026-07-03"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-006"}, {type: "DEPENDS_ON", target: "DOC-ROAD-011"}, {type: "RELATES_TO", target: "DOC-ADR-021"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-021"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-EXCEPTION-POLICY.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Exception Disposition Model

## Status

PROPOSED. This specification does not change the current exception registry
format or the Validation Framework.

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

## Compatibility Boundary

The existing registry continues to use `MIGRATE_ON_CHANGE` during REQ-01. Any
future registry field or enum change requires approval of ADR-021, an explicit
versioning decision, Validation Framework compatibility work, tests, and a
separately authorized request. Documentation Schema 1.0.0 is unaffected.
