---
schema_version: "1.0.0"
document_id: "DOC-REF-001"
aliases: []
document_type: "REFERENCE"
title: "Documentation Conflict Register"
summary: "Defines and hosts unresolved documentation authority and consistency conflicts."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "REALIZES", target: "DOC-ADR-006"}, {type: "DEPENDS_ON", target: "DOC-POL-001"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-006", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Conflict Register

## Purpose

Record unresolved documentary conflicts without silently selecting or rewriting a source.

## Required Record

Each conflict entry MUST contain an ID, discovery date, affected canonical IDs or paths, subject scope, conflicting claims, applicable authority, safety impact, owner, status, proposed resolution, approver, and closure evidence.

Allowed statuses are `OPEN`, `UNDER_REVIEW`, `BLOCKED`, `RESOLVED`, and `ACCEPTED_RISK`.

## Resolution Rules

Conflicts follow the Documentation Authority Model. The stricter safety boundary applies while a conflict is open. Physical location, modification time, or public visibility cannot resolve authority. An unresolved material conflict blocks approval, activation, and publication for the affected claim.

## Current Entries

No conflict entry is created by this specification.

## Related Documents

- [Documentation Authority Model](DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Lifecycle](DOCUMENTATION-LIFECYCLE.md)
- [DOC-ADR-006](../adr/DOC-ADR-006-DOCUMENTATION-CONFLICT-RESOLUTION.md)
- [DOC-ADR-017](../adr/DOC-ADR-017-LOGICAL-AUTHORITY-VS-PHYSICAL-LOCATION.md)

## Boundary

Resolving a documentation conflict does not grant implementation, publication, or execution authority.
