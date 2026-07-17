---
schema_version: "1.0.0"
document_id: "DOC-RPT-191"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Dependency Register"
summary: "Crosswalks EPIC-08 integration families to the frozen EPIC-07 interface and failure contracts."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-08"]
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-08-DEPENDENCY-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Dependency Register

| Dependency ID | EPIC-07 Interface | Producer | Consumer | Contract | Used By | Current State | Failure Rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `DEP-EP8-0001` | `INT-EP7-001` | Entry surface | Business | demand intake | Business flows | `PROTOTYPE_VERIFIED` | Reject or hold invalid input. |
| `DEP-EP8-0002` | `INT-EP7-002` | Business | Trinity | planning request | `INTG-EP8-0013` | `INTERFACE_UNCONFIRMED` | Continue human planning or defer. |
| `DEP-EP8-0003` | `INT-EP7-003` | Trinity | Business | advisory plan/estimate | `INTG-EP8-0013` | `DIRECTIONAL` | Output cannot become a commitment. |
| `DEP-EP8-0004` | `INT-EP7-004` | proposing nucleus | Governance | decision package | governance pairs | `FORMALLY_DEFINED` | Hold pending valid review. |
| `DEP-EP8-0005` | `INT-EP7-005` | Governance | Runtime/executor | decision/rejection | governance pairs | `AUTHORITY_UNRESOLVED` | No execution without valid decision and executor. |
| `DEP-EP8-0006` | `INT-EP7-006` | owning nucleus | ACS | analysis request | ACS pairs | `PROTOTYPE_VERIFIED` | Fail closed or route to human review. |
| `DEP-EP8-0007` | `INT-EP7-007` | ACS | owner/Runtime | signal or local hold | ACS pairs | `PROTOTYPE_VERIFIED` | Escalate without implying production enforcement. |
| `DEP-EP8-0008` | `INT-EP7-008` | Business/owner | Marketplace | asset package | Business/Academy Marketplace | `DIRECTIONAL` | No publication without rights and release. |
| `DEP-EP8-0009` | `INT-EP7-009` | Marketplace | Business/owner | listing/licensing record | Marketplace pairs | `INTERFACE_UNCONFIRMED` | Keep asset unavailable. |
| `DEP-EP8-0010` | `INT-EP7-010` | Academy | PoK | assessment evidence | Academy/PoK | `PROTOTYPE_VERIFIED` | No qualification without validated assessment. |
| `DEP-EP8-0011` | `INT-EP7-011` | PoK | Governance/Tokenomics | eligibility evidence | Academy/Tokenomics | `DIRECTIONAL` | No automatic right or issuance. |
| `DEP-EP8-0012` | `INT-EP7-012` | product nucleus | Treasury | economic-effect request | economic pairs | `BOUNDARY_BLOCKED` | No custody or movement. |
| `DEP-EP8-0013` | `INT-EP7-013` | Treasury | Tokenomics/executor | allocation/distribution instruction | economic pairs | `BOUNDARY_BLOCKED` | Remain pending without signer and authority. |
| `DEP-EP8-0014` | `INT-EP7-014` | Runtime | Accountability | lifecycle/incident receipt | runtime pairs | `FORMALLY_DEFINED` | Preserve missing evidence as incomplete. |
| `DEP-EP8-0015` | `INT-EP7-015` | provider adapter | owning nucleus | capability/health/result | runtime pairs | `NOT_IMPLEMENTED` | Timeout, deny, pause, escalate. |

No dependency row asserts transport availability. REQ-04 must create EPIC-08
interface crosswalk IDs without inventing interfaces beyond this frozen set.
