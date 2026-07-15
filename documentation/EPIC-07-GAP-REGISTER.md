---
schema_version: "1.0.0"
document_id: "DOC-RPT-163"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Gap Register"
summary: "Routes confirmed canonical truth gaps to the appropriate EPIC-07 freeze or remediation request."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-01"]
related_adrs: []
related_cores: ["GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-GAP-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Gap Register

| Gap ID | Domain | Missing Canonical Truth | Evidence | Risk | Routed Request | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| `GAP-EP7-0001` | Axodus identity | One complete definition connecting purpose, participants, transformation, value, and present state. | `EVID-EP7-0001`, `EVID-EP7-0004` | `HIGH` | `REQ-02` | `FREEZE_REQUIRED` |
| `GAP-EP7-0002` | Nucleus model | Consistent inputs, outputs, responsibilities, dependencies, authority, and status for every nucleus. | `EVID-EP7-0001` | `HIGH` | `REQ-02`, `REQ-03` | `FREEZE_REQUIRED` |
| `GAP-EP7-0003` | Participants and tenants | Participant classes, tenant boundaries, local governance, and service relationships are fragmented. | `EVID-EP7-0001`, `EVID-EP7-0009` | `MEDIUM` | `REQ-02` | `FREEZE_REQUIRED` |
| `GAP-EP7-0004` | Interfaces and events | Cross-core interfaces, event producers/consumers, data ownership, and failure semantics are not canonical. | `EVID-EP7-0006`, `EVID-EP7-0008` | `HIGH` | `REQ-03` | `FREEZE_REQUIRED` |
| `GAP-EP7-0005` | Decision rights | Proposal, review, approval, execution, observation, suspension, reversal, and evidence roles are not unified. | `EVID-EP7-0003`, `EVID-EP7-0008` | `HIGH` | `REQ-04` | `FREEZE_REQUIRED` |
| `GAP-EP7-0006` | Human-agent authority | Trinity and ACS roles are not consistently separated from human and governance authority. | `EVID-EP7-0008`, `EVID-EP7-0009` | `HIGH` | `REQ-04` | `FREEZE_REQUIRED` |
| `GAP-EP7-0007` | End-to-end execution | The 11 priority flows are distributed across components and lack one evidence-aware operating representation. | `EVID-EP7-0001`, `EVID-EP7-0006`, `EVID-EP7-0008` | `HIGH` | `REQ-05` | `FREEZE_REQUIRED` |
| `GAP-EP7-0008` | Economic flow | Product, Treasury, and Tokenomics relationships lack a safe authorized end-to-end model. | `EVID-EP7-0003`, `EVID-EP7-0019` | `CRITICAL` | `REQ-04`, `REQ-05` | `BOUNDARY_GATED` |
| `GAP-EP7-0009` | Runtime activation | Prototype runtime, provider activation, incident, suspension, and recovery are not unified. | `EVID-EP7-0007`, `EVID-EP7-0009`, `EVID-EP7-0010` | `HIGH` | `REQ-03`, `REQ-05` | `FREEZE_REQUIRED` |
| `GAP-EP7-0010` | Public corpus fidelity | Public pages have not been measured against a complete frozen model. | `EVID-EP7-0001`, `EVID-EP7-0002` | `HIGH` | `REQ-06` | `AUDIT_AFTER_MODEL_FREEZE` |
| `GAP-EP7-0011` | Legal boundary | Lottery publication and activation remain without legal-safe authorization. | `EVID-EP7-0016`, `EVID-EP7-0003` | `CRITICAL` | `REQ-04`, `REQ-06` | `LEGAL_REVIEW_REQUIRED` |
| `GAP-EP7-0012` | Authority-pending knowledge | `.knowledge/` semantics have no completed authority resolution. | `EVID-EP7-0001` | `MEDIUM` | residual backlog | `DO_NOT_USE_AS_AUTHORITY` |
