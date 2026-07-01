---
schema_version: "1.0.0"
document_id: "DOC-ADR-015"
aliases: []
document_type: "ADR"
title: "Archiving Strategy"
summary: "Uses lifecycle state to archive evidence while preserving identity and references."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: null
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: []
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-008"}, {type: "RELATES_TO", target: "DOC-ADR-009"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-008", "DOC-ADR-009"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-015 — Archiving Strategy

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Retained obsolete content must remain auditable without appearing current.

## Decision

Use explicit archival lifecycle state, preserved canonical identity, relationships, and current-guidance exclusion. Physical movement is optional and separately governed.

## Rationale

Logical state works across repositories and avoids breaking paths merely to signal history.

## Alternatives Considered

- Leave all records in place without state: misleading.
- Move everything immediately: route and reference risk.
- Delete obsolete records: destroys evidence.

## Trade-offs

Discovery surfaces must be lifecycle-aware.

## Consequences

Archived records have no recurring review and cannot regain current authority without a new governed decision.

## Future Impacts

Future migration may move files only with compatibility and redirect planning.

## Related Documents

- [Documentation Lifecycle](../governance/DOCUMENTATION-LIFECYCLE.md)
- [Documentation Audit Log Schema](../governance/DOCUMENTATION-AUDIT-LOG-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-015`.

## References

- DOC-ADR-008
