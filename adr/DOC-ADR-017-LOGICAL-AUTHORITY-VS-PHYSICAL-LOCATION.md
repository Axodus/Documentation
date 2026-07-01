---
schema_version: "1.0.0"
document_id: "DOC-ADR-017"
aliases: []
document_type: "ADR"
title: "Logical Authority versus Physical Location"
summary: "Establishes that governance evidence, not repository location, determines authority."
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
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: []
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-ADR-001"}, {type: "RELATES_TO", target: "DOC-ADR-006"}, {type: "RELATES_TO", target: "DOC-ADR-012"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-001", "DOC-ADR-006", "DOC-ADR-012"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-017 — Logical Authority versus Physical Location

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Axodus stores documents in public, governance, operational, historical, and nucleus-specific locations.

## Decision

Physical location SHALL NOT determine document authority. Logical authority derives from declared scope and level, suitable document type, accountable ownership, applicable review, explicit approval, lifecycle, and evidence.

## Rationale

Storage and publication context cannot safely represent governance semantics.

## Alternatives Considered

- Directory authority: moving files changes meaning accidentally.
- Repository authority: centralizes domain truth incorrectly.
- Public visibility as authority: confuses exposure and approval.

## Trade-offs

Consumers must inspect governance metadata instead of relying on path heuristics.

## Consequences

Moving, copying, or publishing a document does not promote it. Paths may impose stricter exposure controls but cannot grant authority.

## Future Impacts

All indexes, manifests, conflict rules, and validation must preserve this principle.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Conflict Register](../governance/DOCUMENTATION-CONFLICT-REGISTER.md)
- [Official Repository Structure ADR](DOC-ADR-009-OFFICIAL-REPOSITORY-STRUCTURE.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-017`. The original remains immutable historical evidence.

## References

- DOC-ADR-001
- DOC-ADR-006
- DOC-ADR-012
