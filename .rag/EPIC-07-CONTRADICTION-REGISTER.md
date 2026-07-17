---
schema_version: "1.0.0"
document_id: "DOC-RPT-162"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Contradiction Register"
summary: "Records material semantic and status contradictions that must remain visible through EPIC-07 model freezes."
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
related_cores: ["BUSINESS", "ACADEMY", "ACS", "LOTTERY", "TREASURY", "TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-CONTRADICTION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Contradiction Register

| Conflict ID | Domain | Competing Readings | Evidence | Risk | Frozen Treatment |
| --- | --- | --- | --- | --- | --- |
| `CONF-EP7-0001` | Axodus identity | Public anchors emphasize DeFi; owner direction requires a broader product, operational, governance, and execution model. | `EVID-EP7-0001`, `EVID-EP7-0004` | `MEDIUM` | REQ-02 must freeze a non-reductive identity without erasing financial scope. |
| `CONF-EP7-0002` | Business execution | Owner mission includes execute and operationalize; implementation evidence defines a non-executive mock/read-only runtime. | `EVID-EP7-0004`, `EVID-EP7-0005`, `EVID-EP7-0007` | `HIGH` | Separate intended end-to-end responsibility from current execution capability. |
| `CONF-EP7-0003` | Academy PoK | Academy source describes anti-sybil, qualification, and token distribution roles; public evidence does not verify active authority or issuance. | `EVID-EP7-0011`, `EVID-EP7-0003` | `HIGH` | Treat as intended model pending architecture, governance, and implementation verification. |
| `CONF-EP7-0004` | ACS blocking | Narrative references blocking and veto; committed gates distinguish local signals from production enforcement. | `EVID-EP7-0008`, `EVID-EP7-0009` | `HIGH` | REQ-04 must distinguish signal, local suspension, governed veto, and production enforcement. |
| `CONF-EP7-0005` | Lottery operation | Public pages describe complete draw mechanics; legal availability and public activation remain unresolved. | `EVID-EP7-0016`, `EVID-EP7-0003` | `CRITICAL` | Keep model conceptual/prototype and public expansion blocked. |
| `CONF-EP7-0006` | Treasury | Public architecture describes custody and distribution; no current evidence verifies active custody, signing, or execution. | `EVID-EP7-0003` | `HIGH` | Model conceptual authority separately from active execution. |
| `CONF-EP7-0007` | Tokenomics | Token and reward documents describe utility and mechanisms; active issuance, distribution, and parameters remain unverified. | `EVID-EP7-0019`, `EVID-EP7-0003` | `HIGH` | Freeze utility intent separately from implemented contracts and enabled economics. |
