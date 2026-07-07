---
schema_version: "1.0.0"
document_id: "DOC-POL-006"
aliases: []
document_type: "POLICY"
title: "Documentation Exception Policy"
summary: "Defines exception ownership, approval, lifecycle, expiration, revocation, renewal, and baseline integration."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-01"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-005"}, {type: "DEPENDS_ON", target: "DOC-REF-003"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-011", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Exception Policy

## Purpose

Define explicit, reviewable governance objects for temporarily tolerating known documentary non-conformance without changing source content or enabling repository enforcement.

## Relationship with the Baseline

The baseline is factual: it records path, hash, classification, schema observation, and missing rules. The exception registry is normative governance: it states why and for how long a baseline condition is tolerated.

An exception never changes the baseline hash or converts legacy content into canonical documentation.

## Exception Lifecycle

Allowed states:

- `ACTIVE`: approved and within its validity period.
- `EXPIRED`: validity period ended.
- `REVOKED`: approval was explicitly withdrawn.

Allowed dispositions:

- `ACCEPT`: accept the condition under stated governance.
- `WAIVE`: waive specific rules for the approved scope.
- `TEMPORARY`: tolerate until the stated expiry.
- `MIGRATE_ON_CHANGE`: tolerate only while the pinned source remains unchanged.
- `REJECT`: record that the condition is not accepted.

## Approval Flow

1. Identify the exact document path and affected Rule IDs.
2. Record scope, justification, severity, disposition, owner, and proposed expiry.
3. Obtain approval from the Documentation Coordinator and enhanced reviewers where risk requires.
4. Register the immutable exception ID.
5. Review expiration, revocation, renewal, or migration as an auditable change.

## Ownership

The exception owner is accountable for remediation and review. The approver accepts only the documentary deviation and cannot accept production, financial, legal, security, or operational risk on behalf of another authority.

The initial legacy cohort uses `Axodus Documentation Core` as owner and `Documentation Coordinator` as approver because it is a repository-wide governance baseline, not inferred per-document domain ownership.

## Expiration and Review

Active exceptions must declare an RFC3339 `expires_at`. The initial cohort expires on `2026-10-01T00:00:00Z`. An exception observed after expiry is reported as `EXCEPTION_EXPIRED`.

## Revocation

Revocation changes status to `REVOKED`, records governance evidence in the repository change, and prevents the exception from being treated as active. Source content remains unchanged.

## Renewal

Renewal requires a reviewed registry change, new expiry, current justification, owner confirmation, and approver confirmation. Renewal does not change the exception ID or baseline hash.

## Auditability

Exception IDs are immutable and never reused. Deleted, expired, revoked, or rejected exceptions remain historical evidence. Registry ordering is deterministic by exception ID.

## Validation Engine Integration

The engine validates schema, IDs, rule references, dates, ownership, lifecycle, duplicate paths, and baseline relationships. During EXEC-06, invalid, expired, or revoked exceptions generate informational diagnostics only.

## Default Initial Disposition

Every initial baseline entry receives one `ACTIVE` exception with disposition `MIGRATE_ON_CHANGE`, severity `INFO`, and the quarterly expiration date.

## Related Documents

- [Documentation Legacy Baseline Policy](./DOCUMENTATION-BASELINE-POLICY.md)
- [Documentation Validation Rules](./DOCUMENTATION-VALIDATION-RULES.md)
- [Documentation Error Catalog](./DOCUMENTATION-ERROR-CATALOG.md)

## Preservation Boundary

An exception does not modify a document, grant authority, permit publication, or enable production or execution.
