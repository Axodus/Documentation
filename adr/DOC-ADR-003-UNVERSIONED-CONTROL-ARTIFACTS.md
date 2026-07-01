---
schema_version: "1.0.0"
document_id: "DOC-ADR-003"
aliases: []
document_type: "ADR"
title: "Unversioned Control Artifacts"
summary: "Requires an approved versioned representation without initializing Git at /opt."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-ADR-001"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-001"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-003 — Unversioned Control Artifacts

## Status

APPROVED

## Approval Date

2026-07-01

## Context

Global portfolio controls exist under `/opt/Axodus/.instructions`, while `/opt/Axodus` has no root Git history.

## Decision

Use a separately approved versioned representation and reconciliation process. Do not initialize Git at `/opt/Axodus` and do not infer historical versions.

## Rationale

This preserves the workspace boundary while enabling future auditability and sensitive-data review.

## Alternatives Considered

- Keep local-only permanently: inadequate recovery and audit.
- Initialize root Git: nested repository and symlink risk.
- Treat a copy as automatically authoritative: lacks approval and provenance.

## Trade-offs

A controlled transition and conflict process is required.

## Consequences

Global files remain operational evidence until a versioned authority is explicitly established.

## Future Impacts

Snapshot or mirror implementation requires a separate request, provenance, redaction controls, and ownership.

## Related Documents

- [Instructions Versioning Strategy](../governance/INSTRUCTIONS-VERSIONING-STRATEGY.md)
- [Documentation Conflict Register](../governance/DOCUMENTATION-CONFLICT-REGISTER.md)

## Supersession Policy

Replacement requires a new ADR superseding `DOC-ADR-003`.

## References

- `/opt/Axodus/.instructions`
- AXODUS-DOCUMENTATION-REQ-01
