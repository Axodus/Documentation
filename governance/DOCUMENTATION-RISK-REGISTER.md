---
schema_version: "1.0.0"
document_id: "DOC-REF-002"
aliases: []
document_type: "REFERENCE"
title: "Documentation Risk Register"
summary: "Defines the register contract for documentation governance and publication risks."
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
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-001"}, {type: "RELATES_TO", target: "DOC-POL-004"}]
related_epics: ["DOCUMENTATION-EPIC-01"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01"]
related_adrs: ["DOC-ADR-006", "DOC-ADR-014"]
related_cores: ["DOCUMENTATION"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Risk Register

## Purpose

Record documentary governance, authority, quality, traceability, audit, publication, and safety risks.

## Required Record

Each risk entry MUST contain an ID, description, category, affected scope, likelihood, impact, severity, evidence, owner, mitigation, residual risk, review date, and status.

Allowed statuses are `OPEN`, `MITIGATING`, `MONITORING`, `ACCEPTED`, and `CLOSED`. Severity is `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL`.

## Governance

Critical risks block approval and publication unless explicitly accepted by the authorized scope approver and required safety reviewer. Acceptance of documentary risk never accepts production, financial, legal, or security risk on behalf of an operational system.

## Current Entries

No risk entry is created by this specification.

## Related Documents

- [Documentation Authority Model](DOCUMENTATION-AUTHORITY-MODEL.md)
- [Documentation Publication Governance](DOCUMENTATION-PUBLICATION-GOVERNANCE.md)
- [DOC-ADR-006](../adr/DOC-ADR-006-DOCUMENTATION-CONFLICT-RESOLUTION.md)
- [DOC-ADR-014](../adr/DOC-ADR-014-PUBLICATION-PIPELINE.md)

## Boundary

This register is documentary and non-production.
