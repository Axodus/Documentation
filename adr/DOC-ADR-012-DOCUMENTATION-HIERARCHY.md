---
schema_version: "1.0.0"
document_id: "DOC-ADR-012"
aliases: []
document_type: "ADR"
title: "Documentation Hierarchy"
summary: "Defines logical scope and authority breadth without global path precedence."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-017"}, {type: "RELATES_TO", target: "DOC-ADR-006"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-006", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-012 — Documentation Hierarchy

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Documents apply at portfolio, core, project, module, or component breadth.

## Decision

Declare `authority_scope` and `authority_level` explicitly. Treat levels as breadth, not a universal precedence ranking.

## Rationale

Contextual authority preserves both portfolio policy and stricter domain safety.

## Alternatives Considered

- Infer from repository: conflates storage and authority.
- Global numeric rank: cannot model scope applicability.
- Multiple undeclared scopes: ambiguous ownership.

## Trade-offs

Conflict resolution must evaluate applicability rather than sort one number.

## Consequences

Related cores do not broaden declared authority; cross-scope claims require affected-owner review.

## Future Impacts

Indexes and manifests must display scope and level independently.

## Related Documents

- [Documentation Authority Model](../governance/DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Conflict Register](../governance/DOCUMENTATION-CONFLICT-REGISTER.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-012`.

## References

- DOC-ADR-017
