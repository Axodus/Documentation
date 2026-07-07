---
schema_version: "1.0.0"
document_id: "DOC-ADR-009"
aliases: []
document_type: "ADR"
title: "Official Repository Structure"
summary: "Introduces prospective governance directories without moving existing documentation."
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
relationships: [{type: "RELATES_TO", target: "DOC-ADR-017"}, {type: "RELATES_TO", target: "DOC-ADR-012"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-012", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-009 — Official Repository Structure

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Public, operational, historical, knowledge, and governance documents coexist in the repository.

## Decision

Use prospective top-level directories by governed document purpose while preserving existing files and VitePress routes until separately approved migration.

## Rationale

This supports orderly growth without a disruptive legacy reorganization.

## Alternatives Considered

- Preserve only existing structure: does not establish a scalable baseline.
- Immediate migration: breaks links and expands risk.
- Put governance inside `/docs`: couples authority to publication.

## Trade-offs

Legacy and governed structures coexist temporarily.

## Consequences

Classification and indexing must not infer authority from directory placement.

## Future Impacts

Any migration requires compatibility, redirects, and explicit scope.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Master Index](../documentation/DOCUMENTATION-MASTER-INDEX.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-009`.

## References

- DOC-ADR-017
