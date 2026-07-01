---
schema_version: "1.0.0"
document_id: "DOC-ADR-004"
aliases: []
document_type: "ADR"
title: "Cross-Document Traceability"
summary: "Adopts immutable IDs and typed directed relationships for traceability."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-005"}, {type: "RELATES_TO", target: "DOC-ADR-010"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-005", "DOC-ADR-010"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-004 — Cross-Document Traceability

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Axodus needs to trace requirements through decisions, specifications, implementation evidence, operations, and releases.

## Decision

Use immutable canonical IDs and explicitly authored typed relationships. Derive inverse edges; do not infer semantic relationships from paths or links.

## Rationale

Directed edges provide auditable intent while supporting immutable decisions.

## Alternatives Considered

- Markdown links only: lack semantics.
- Manual matrices only: prone to drift.
- Inference by filenames: unreliable and authority-unsafe.

## Trade-offs

Documents require maintained metadata and unresolved references become visible.

## Consequences

Orphans, cycles, and broken references have normative definitions even before automation exists.

## Future Impacts

Future graphs and reports must represent only declared edges and clearly label derived inverses.

## Related Documents

- [Documentation Traceability Model](../governance/DOCUMENTATION-TRACEABILITY-MODEL.md)
- [Documentation Metadata Schema](../governance/DOCUMENTATION-METADATA-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-004`.

## References

- AXODUS-DOCUMENTATION-REQ-01
