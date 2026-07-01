---
schema_version: "1.0.0"
document_id: "DOC-ADR-006"
aliases: []
document_type: "ADR"
title: "Documentation Conflict Resolution"
summary: "Resolves conflicts by safety, logical scope, approval, and accountable ownership."
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
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-017"}, {type: "RELATES_TO", target: "DOC-ADR-001"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-001", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-006 — Documentation Conflict Resolution

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Portfolio, domain, architecture, operational, and public documents may make overlapping claims.

## Decision

Resolve conflicts by the stricter safety boundary, applicable logical scope, current approval, accountable ownership, and governing decisions. Record unresolved conflicts and block affected promotion.

## Rationale

No global path ordering safely resolves domain and portfolio authority.

## Alternatives Considered

- Newest file wins: ignores approval and scope.
- Broadest authority wins: may override local safety.
- Directory precedence: confuses storage with authority.

## Trade-offs

Some conflicts require human escalation and remain blocked.

## Consequences

The conflict register becomes required evidence; ambiguity cannot be silently normalized.

## Future Impacts

Future validation may detect conflicts but must not auto-resolve semantics.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Conflict Register](../governance/DOCUMENTATION-CONFLICT-REGISTER.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-006`.

## References

- DOC-ADR-017
