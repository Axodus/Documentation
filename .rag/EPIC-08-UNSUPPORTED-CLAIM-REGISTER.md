---
schema_version: "1.0.0"
document_id: "DOC-RPT-196"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Unsupported Claim Register"
summary: "Freezes material public claim families that require qualification, directional retention, or later rewrite."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
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
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-02"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-08-UNSUPPORTED-CLAIM-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Unsupported Claim Register

| Finding ID | Claim IDs | Source | Unsupported Interpretation | Evidence Gap | Disposition | REQ-05 Eligibility |
| --- | --- | --- | --- | --- | --- | --- |
| `UCLM-EP8-0001` | `CLAIM-EP8-0003` | `docs/business/request-intake.md` | One pipeline is actively integrated and executing. | Production bridge/transport evidence. | `TRACEABLE_WITH_QUALIFICATION` | `QUALIFIER_OR_REFERENCE` |
| `UCLM-EP8-0002` | `CLAIM-EP8-0004` | `docs/acs/trinity.md` | Trinity provides a production estimate service. | Method, transport, persistence, service evidence. | `RETAIN_AS_DIRECTIONAL` | `QUALIFIER_ONLY` |
| `UCLM-EP8-0003` | `CLAIM-EP8-0005` | ACS integration pages | ACS can autonomously block production actions. | Formal authority and enforcement implementation. | `AUTHORITY_SOURCE_MISSING` | `AUTHORITY_QUALIFIER` |
| `UCLM-EP8-0004` | `CLAIM-EP8-0008` | Marketplace lifecycle pages | Listings, licensing, settlement, and commercial availability are active. | Rights, authority, settlement, runtime evidence. | `STATUS_NOT_SUPPORTED` | `STATUS_AND_REFERENCE` |
| `UCLM-EP8-0005` | `CLAIM-EP8-0009/0011` | Academy reward pages | Qualification automatically creates certification, access, or rewards. | Authority, implementation, contract evidence. | `STATUS_NOT_SUPPORTED` | `STATUS_AND_AUTHORITY` |
| `UCLM-EP8-0006` | `CLAIM-EP8-0012/0013/0014` | Treasury pages | Treasury policies prove active custody, allocation, or execution. | Custody, signer, decision, transaction evidence. | `EVIDENCE_MISSING` | `STATUS_AND_AUTHORITY` |
| `UCLM-EP8-0007` | `CLAIM-EP8-0015/0016` | Tokenomics pages | Contract artifacts prove active issuance, distribution, or utility. | Activation, supply, distribution, legal evidence. | `STATUS_NOT_SUPPORTED` | `STATUS_AND_REFERENCE` |
| `UCLM-EP8-0008` | `CLAIM-EP8-0017/0018` | Runtime pages | Runtime is an active integrated execution bus. | Provider and end-to-end flow evidence. | `STATUS_NOT_SUPPORTED` | `QUALIFIER_OR_REFERENCE` |
| `UCLM-EP8-0009` | `CLAIM-EP8-0019..0021` | Mining pages | Mining infrastructure, telemetry, payouts, or profitability are active. | Ownership, provider, operation, custody evidence. | `EVIDENCE_MISSING` | `QUALIFIER_ONLY` |
| `UCLM-EP8-0010` | `CLAIM-EP8-0022/0023` | Trading pages | Trading strategies, providers, exchanges, or monitoring are live. | Provider, exchange, authority, financial evidence. | `STATUS_NOT_SUPPORTED` | `QUALIFIER_ONLY` |
| `UCLM-EP8-0011` | `CLAIM-EP8-0024..0026` | Lottery pages | Lottery is licensed, available, funded, or operating. | Legal, security, authority, runtime evidence. | `REMOVE_OR_REWRITE` | `QUALIFIER_ONLY_NO_EXPANSION` |
| `UCLM-EP8-0012` | `CLAIM-EP8-0028` | ACS/security pages | Default-deny policy proves production security validation. | Security validation and operational evidence. | `TRACEABLE_WITH_QUALIFICATION` | `REFERENCE_ONLY` |
| `UCLM-EP8-0013` | `CLAIM-EP8-0029` | compliance pages | Review language proves legal or regulatory compliance. | Qualified legal decision. | `AUTHORITY_SOURCE_MISSING` | `QUALIFIER_ONLY` |
| `UCLM-EP8-0014` | `CLAIM-EP8-0030/0031` | portfolio anchors | Documented interfaces prove one production ecosystem. | Bilateral interface and operational evidence. | `STATUS_NOT_SUPPORTED` | `REFERENCE_AND_STATUS` |

No unsupported interpretation is resolved merely by adding a link. REQ-03 and
REQ-04 must freeze authority and interface dependencies first.
