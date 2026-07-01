---
schema_version: "1.0.0"
document_id: "DOC-ADR-014"
aliases: []
document_type: "ADR"
title: "Publication Pipeline"
summary: "Separates validation, approval, release, publication, rollback, and audit."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-007"}, {type: "RELATES_TO", target: "DOC-ADR-016"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-007", "DOC-ADR-016"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-014 — Publication Pipeline

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Build, review, approval, release, and publication have previously been easy to conflate.

## Decision

Maintain separate gated stages for validation, content approval, release approval, publication authorization, execution, rollback, and audit.

## Rationale

Stage separation prevents local build success or document status from becoming accidental publication permission.

## Alternatives Considered

- Publish on merge: insufficient approval separation.
- Manual unrecorded publication: unauditable.
- Approval equals publication: conflates authority and action.

## Trade-offs

Publication requires a complete evidence package and explicit operator authority.

## Consequences

The default is no publication; emergency correction remains governed.

## Future Impacts

Any CI/CD implementation must preserve the stage boundaries.

## Related Documents

- [Documentation Publication Governance](../governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md)
- [Documentation Lifecycle](../governance/DOCUMENTATION-LIFECYCLE.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-014`.

## References

- DOC-ADR-007
