---
schema_version: "1.0.0"
document_id: "DOC-RPT-239"
aliases: []
document_type: "REPORT"
title: "EPIC-09 SHARED CROSS CORE MANIFEST"
summary: "Freezes the non-overlapping shared cross core manifest execution paths and limits."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_09"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-09"]
related_requirements: ["DOCUMENTATION-EPIC-09-REQ-06"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-09-SHARED-CROSS-CORE-MANIFEST.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 SHARED CROSS CORE MANIFEST

| Manifest Entry ID | Path | Current Disposition | Current Status | Frozen Action | Maximum Allowed Scope | Source IDs | Prohibited Interpretations | Navigation Impact | Relationship Impact | Rollback | Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `MAN-EP9-SHARED-CROSS-CORE-001` | `docs/overview/cross-core-architecture.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-SHARED-CROSS-CORE-002` | `docs/overview/execution-model.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add actors, ordered steps, decisions, outputs, failure and suspension states. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-SHARED-CROSS-CORE-003` | `docs/overview/product-map.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
