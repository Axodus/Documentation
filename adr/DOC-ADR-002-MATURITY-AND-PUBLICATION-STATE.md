---
schema_version: "1.0.0"
document_id: "DOC-ADR-002"
aliases: []
document_type: "ADR"
title: "Separate Maturity and Publication State"
summary: "Separates maturity, publication lifecycle, and current-content state."
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
relationships: [{type: "RELATES_TO", target: "DOC-ADR-005"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-002 — Separate Maturity and Publication State

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Completeness, approval, and whether content is current answer different governance questions.

## Decision

Represent `maturity_level`, `publication_status`, and `document_state` as independent metadata dimensions with defined valid combinations.

## Rationale

Separation prevents a mature draft from appearing approved and prevents an active document from implying production readiness.

## Alternatives Considered

- D-level only: cannot express approval.
- Publication status only: cannot express evidence maturity.
- One combined state machine: creates excessive ambiguous states.

## Trade-offs

Authors and reviewers must manage three coordinated fields.

## Consequences

Lifecycle rules define valid combinations; no dimension grants operational authority.

## Future Impacts

Reports and future validation must display and evaluate each dimension separately.

## Related Documents

- [Documentation Lifecycle](../governance/DOCUMENTATION-LIFECYCLE.md)
- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-002`.

## References

- AXODUS-DOCUMENTATION-REQ-01
