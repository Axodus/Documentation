---
schema_version: "1.0.0"
document_id: "DOC-ADR-007"
aliases: []
document_type: "ADR"
title: "Documentation Releases"
summary: "Requires explicit releases with source, approval, validation, and rollback evidence."
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
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-ADR-013"}, {type: "RELATES_TO", target: "DOC-ADR-014"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-013", "DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-007 — Documentation Releases

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Commits alone do not identify a governed publication package.

## Decision

Use explicit versioned release records linked to source commits, included document versions, approval, validation, target, rollback, and audit evidence.

## Rationale

This separates repository history from approved release and publication state.

## Alternatives Considered

- Every merge is a release: lacks approval boundary.
- Date-only releases: weak compatibility semantics.
- Manual publication without records: unauditable.

## Trade-offs

Release preparation adds governance overhead.

## Consequences

Publication requires a separate authorized stage; a release record does not execute publication.

## Future Impacts

Future manifests and tags may support releases after separate approval.

## Related Documents

- [Documentation Versioning Policy](../governance/DOCUMENTATION-VERSIONING-POLICY.md)
- [Documentation Publication Governance](../governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-007`.

## References

- DOCUMENTATION-EPIC-01
