---
schema_version: "1.0.0"
document_id: "DOC-ADR-001"
aliases: []
document_type: "ADR"
title: "Official Documentation Source"
summary: "Adopts a hybrid versioned authority while preserving domain ownership."
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
relationships: [{type: "RELATES_TO", target: "DOC-ADR-003"}, {type: "RELATES_TO", target: "DOC-ADR-017"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-003", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-001 — Official Documentation Source

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Axodus documentation exists in public docs, repository governance, nucleus repositories, and unversioned global controls.

## Decision

Use a hybrid model: a versioned central documentation authority governs shared contracts and publication, while accountable nuclei remain authoritative for their domain facts.

## Rationale

The model provides auditability without centralizing product truth in a documentation team or treating unversioned location as approval.

## Alternatives Considered

- Independent nucleus sources only: insufficient portfolio traceability.
- Global `.instructions` only: unversioned and operationally fragile.
- Central ownership of all facts: breaks domain accountability.

## Trade-offs

The hybrid model requires explicit cross-source references, ownership, and conflict handling.

## Consequences

Central governance records must link to domain evidence. Unresolved conflicts block promotion and use the stricter safety boundary.

## Future Impacts

Future manifests, indexes, and publication systems must preserve the authority split.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Instructions Versioning Strategy](../governance/INSTRUCTIONS-VERSIONING-STRATEGY.md)

## Supersession Policy

Any replacement must be a new ADR that declares `supersedes: [DOC-ADR-001]`.

## References

- AXODUS-DOCUMENTATION-REQ-01
- DOCUMENTATION-EPIC-01
