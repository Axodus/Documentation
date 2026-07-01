---
schema_version: "1.0.0"
document_id: "DOC-ADR-010"
aliases: []
document_type: "ADR"
title: "Document Naming Convention"
summary: "Adopts immutable scoped identifiers and permanent aliases."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-012"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-012"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-010 — Document Naming Convention

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Historical artifacts use multiple identifier and filename conventions.

## Decision

Use `<SCOPE>-<TYPE>-<NNN>` canonical IDs, monotonic numbering by scope/type, immutable identity, permanent aliases, and no reuse.

## Rationale

Logical IDs survive path changes and provide stable traceability.

## Alternatives Considered

- Path-derived identity: unstable.
- Unstructured IDs: collision-prone.
- Renumbering legacy documents: breaks references.

## Trade-offs

Scope registration and allocation coordination are required.

## Consequences

Reserved, deprecated, rejected, and archived IDs remain unavailable permanently.

## Future Impacts

A future registry may coordinate allocations but cannot rewrite assigned IDs.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-010`.

## References

- Identifier Standard in the Authority Model
