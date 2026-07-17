---
schema_version: "1.0.0"
document_id: "DOC-RPT-237"
aliases: []
document_type: "REPORT"
title: "EPIC-09 CONTROL INFRASTRUCTURE MANIFEST"
summary: "Freezes the non-overlapping control infrastructure manifest execution paths and limits."
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
related_cores: ["ACS", "RUNTIME", "TREASURY", "TOKENOMICS", "SECURITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-09-CONTROL-INFRASTRUCTURE-MANIFEST.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 CONTROL INFRASTRUCTURE MANIFEST

| Manifest Entry ID | Path | Current Disposition | Current Status | Frozen Action | Maximum Allowed Scope | Source IDs | Prohibited Interpretations | Navigation Impact | Relationship Impact | Rollback | Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-001` | `docs/acs/agent-smith.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0008/0009`, `EVID-EP8-0006/0007` | No autonomous authority, production enforcement or active provider claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-002` | `docs/acs/human-oversight.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0008/0009`, `EVID-EP8-0006/0007` | No autonomous authority, production enforcement or active provider claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-003` | `docs/acs/runtime.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add actors, ordered steps, decisions, outputs, failure and suspension states. | `EVID-EP7-0008/0009`, `EVID-EP8-0006/0007` | No autonomous authority, production enforcement or active provider claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-004` | `docs/acs/trinity.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0008/0009`, `EVID-EP8-0006/0007` | No autonomous authority, production enforcement or active provider claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-005` | `docs/security/api-security.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add risk source, control owner, review, exception, boundary and disabled-state detail. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-006` | `docs/security/overview.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add risk source, control owner, review, exception, boundary and disabled-state detail. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-007` | `docs/security/wallet-security.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add risk source, control owner, review, exception, boundary and disabled-state detail. | `EVID-EP8-0002/0004/0006/0007` | No implementation, activation, production, legal, security or financial promotion. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-CONTROL-INFRASTRUCTURE-008` | `docs/tokenomics/technical-architecture.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0019`, `EVID-EP8-0005/0006` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
