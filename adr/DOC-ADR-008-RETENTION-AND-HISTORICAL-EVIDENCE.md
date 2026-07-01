---
schema_version: "1.0.0"
document_id: "DOC-ADR-008"
aliases: []
document_type: "ADR"
title: "Retention and Historical Evidence"
summary: "Retains obsolete evidence while excluding it from current guidance."
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
relationships: [{type: "RELATES_TO", target: "DOC-ADR-015"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-015"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-008 — Retention and Historical Evidence

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Deleting obsolete records destroys evidence, while unclassified retention can mislead readers.

## Decision

Retain superseded, deprecated, retracted, and historical documents with immutable identity, explicit state, relationships, and exclusion from current guidance.

## Rationale

Governance requires both audit history and clear current authority.

## Alternatives Considered

- Delete old documents: loses evidence.
- Leave them current-looking: creates authority risk.
- Retain without relationships: loses context.

## Trade-offs

Retention increases catalog size and requires lifecycle-aware discovery.

## Consequences

Archival state is logical; destructive removal requires separate authority.

## Future Impacts

Search and indexes must distinguish current and historical records.

## Related Documents

- [Documentation Lifecycle](../governance/DOCUMENTATION-LIFECYCLE.md)
- [Documentation Audit Log Schema](../governance/DOCUMENTATION-AUDIT-LOG-SCHEMA.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-008`.

## References

- DOC-ADR-015
