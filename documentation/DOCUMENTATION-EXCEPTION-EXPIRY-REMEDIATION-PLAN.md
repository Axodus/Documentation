---
schema_version: "1.0.0"
document_id: "DOC-ROAD-011"
aliases: []
document_type: "ROADMAP"
title: "Documentation Exception Expiry Remediation Plan"
summary: "Plans evidence-backed disposition of all remaining documentation exceptions before their common expiration date."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-006"}, {type: "DEPENDS_ON", target: "DOC-ROAD-010"}, {type: "RELATES_TO", target: "DOC-ADR-021"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020", "DOC-ADR-021"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation.exceptions.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.baseline.json", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Exception Expiry Remediation Plan

## Objective

Produce an auditable decision for each of the 573 active
`MIGRATE_ON_CHANGE` exceptions before `2026-10-01T00:00:00Z`. No exception may
be expired and undecided at EPIC-03 closure.

## Invariants

- Baseline and exception paths remain synchronized.
- Exception IDs, baseline hashes, and historical evidence are immutable.
- A disposition is a decision record, not automatic execution.
- Renewal never changes an exception ID or baseline hash.
- Revocation cannot leave a baseline deviation without corrective governance.
- Sensitive values never appear in inventory, evidence, logs, or diagnostics.

## Remediation Stages

1. Freeze the 573 exception IDs, paths, hashes, owners, approvers, and expiry.
2. Classify domain, authority, security routing, risk, and migration readiness.
3. Assign one primary disposition with evidence and a resolution date.
4. Review all P0/P1, security, authority, archival, merge, and revocation cases.
5. Approve registry mutations only through separately authorized requests.
6. Execute migration, archival, merge, revocation, or renewal changesets.
7. Reconcile every completed action with baseline, exception, evidence, and
   generated artifacts.
8. Close with 573 decisions and zero expired exceptions without disposition.

## Renewal Limits

| Risk | Maximum extension | Additional requirements |
|---|---:|---|
| P0 or P1 | 90 days | Owner, approver, current rationale, remediation deadline |
| P2 or lower | 180 days | Owner, approver, current rationale, remediation deadline |

Extensions are measured from the current expiry or the approval date,
whichever is later. Repeated renewal is not automatic and requires new
evidence. A renewal must not be used to avoid an eligible migration.

`SECURITY_REVIEW`, `AUTHORITY_REVIEW`, and `DEFER_WITH_RISK` require a governed
temporary extension when their target review date crosses the active expiry.
The extension follows the same risk cap and remains a registry action separate
from the disposition decision.

## Revocation and Corrective Action

`REVOKE_EXCEPTION` is permitted only when the same authorized changeset either
removes the deviation, replaces it with a valid governed exception, or blocks
acceptance pending corrective action. Revocation alone cannot make unvalidated
legacy content acceptable.

## Schedule

| Gate | Target |
|---|---|
| Planning and proposal review | 2026-07 |
| Complete disposition inventory | 2026-08 |
| Approve priority actions and renewals | Before 2026-09-01 |
| Execute migrations and remaining remediation | Before 2026-10-01 |
| Closure verification | No later than 2026-10-01 |

## Failure Policy

Closure is blocked by an undecided exception, an expired exception without a
valid action, registry divergence, missing evidence, exposed sensitive value,
validation defect, or Generator drift.

## REQ-01 Boundary

REQ-01 does not assign dispositions to individual exceptions and does not
modify `documentation.baseline.json` or `documentation.exceptions.json`.
