---
schema_version: "1.0.0"
document_id: "DOC-SPEC-004"
aliases: []
document_type: "SPECIFICATION"
title: "Documentation Audit Log Schema"
summary: "Defines the future append-only documentation audit-event contract."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-30"
last_updated: "2026-07-01"
last_reviewed: "2026-07-01"
review_cycle: "SEMIANNUAL"
next_review: "2027-01-01"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-003"}, {type: "DEPENDS_ON", target: "DOC-POL-002"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-007", "DOC-ADR-008"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Audit Log Schema

## Purpose

Define the human-readable contract for future append-only documentary audit events.

## Event Fields

An audit event MUST contain an event ID, timestamp, actor, actor role, action, canonical document ID, document version, schema version, source commit or immutable reference, previous state, resulting state, approval evidence, reason, and related request.

Allowed actions include `CREATED`, `SUBMITTED`, `REVIEWED`, `APPROVED`, `ACTIVATED`, `SUPERSEDED`, `DEPRECATED`, `RETRACTED`, `ARCHIVED`, `RELEASED`, and `CORRECTED`.

## Integrity and Retention

Events are append-only. Corrections create a new event referencing the erroneous event. Audit records MUST NOT contain secret values. Retention follows the approved retention and archival decisions.

## Implementation Status

No audit log, storage format, generator, or validation is implemented by this document.

## Related Documents

- [Documentation Lifecycle](DOCUMENTATION-LIFECYCLE.md)
- [Documentation Versioning Policy](DOCUMENTATION-VERSIONING-POLICY.md)
- [DOC-ADR-007](../adr/DOC-ADR-007-DOCUMENTATION-RELEASES.md)
- [DOC-ADR-008](../adr/DOC-ADR-008-RETENTION-AND-HISTORICAL-EVIDENCE.md)

## Boundary

Audit evidence documents governance actions only and cannot authorize runtime actions.
