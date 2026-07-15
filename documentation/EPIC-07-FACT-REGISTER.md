---
schema_version: "1.0.0"
document_id: "DOC-RPT-159"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Fact Register"
summary: "Registers public-safe canonical facts and their evidence-limited interpretation for EPIC-07."
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
related_cores: ["GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TRADING", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-FACT-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Fact Register

| Fact ID | Canonical Fact | Evidence | Classification | Limitation |
| --- | --- | --- | --- | --- |
| `FACT-EP7-0001` | Axodus is modeled as a modular ecosystem coordinating governance, operational, product, financial, intelligence, accountability, and interface responsibilities. | `EVID-EP7-0001`, `EVID-EP7-0004` | `OWNER_DEFINED` | Exact product and architecture boundaries require REQ-02 and REQ-03 freeze. |
| `FACT-EP7-0002` | The public corpus contains 267 Markdown pages at EPIC entry. | `EVID-EP7-0001` | `IMPLEMENTED_VERIFIED` | Page count does not establish semantic completeness. |
| `FACT-EP7-0003` | EPIC-06 improved governance and boundaries but closed with residual authority, legal, financial, and evidence gaps. | `EVID-EP7-0002`, `EVID-EP7-0003` | `FORMALLY_DECIDED` | Residual gaps remain unresolved. |
| `FACT-EP7-0004` | Business is an operational infrastructure nucleus that transforms demand into governed delivery and ecosystem assets. | `EVID-EP7-0004` | `OWNER_DEFINED` | This identity does not prove commercial or production availability. |
| `FACT-EP7-0005` | Business has committed typed models for intake, workflow, state, review, registry, submissions, and guarded bridges. | `EVID-EP7-0006` | `PROTOTYPE_VERIFIED` | Bridges and datasets are not proof of live integrations. |
| `FACT-EP7-0006` | Business remains non-executive; production billing, treasury, governance execution, ACS provisioning, wallets, and contracts remain blocked. | `EVID-EP7-0007` | `FORMALLY_DECIDED` | Later repository changes require new evidence. |
| `FACT-EP7-0007` | ACS has committed operational gate models with read-only representation, local block signaling, and default-deny production posture. | `EVID-EP7-0008`, `EVID-EP7-0009` | `PROTOTYPE_VERIFIED` | Local signals are not production enforcement authority. |
| `FACT-EP7-0008` | AxodusAPP implements a read-only portfolio intelligence surface. | `EVID-EP7-0010` | `PROTOTYPE_VERIFIED` | It is not proof of production integrations or execution authority. |
| `FACT-EP7-0009` | Academy is intended to provide onboarding, educational progression, qualification, and Proof of Knowledge. | `EVID-EP7-0011` | `DIRECTIONAL` | Anti-sybil, certification authority, and reward mechanics require separate evidence. |
| `FACT-EP7-0010` | Marketplace, Governance, Trading, Mining, Lottery, DeFi, DEX, token, and interface repositories exist as independent implementation surfaces. | `EVID-EP7-0012`, `EVID-EP7-0013`, `EVID-EP7-0014`, `EVID-EP7-0015`, `EVID-EP7-0016`, `EVID-EP7-0017`, `EVID-EP7-0018`, `EVID-EP7-0019` | `IMPLEMENTED_VERIFIED` | Repository presence does not prove product activation. |
| `FACT-EP7-0011` | Lottery public activation remains constrained by legal and public-boundary review. | `EVID-EP7-0003`, `EVID-EP7-0016` | `FORMALLY_DECIDED` | No legal approval is recorded. |
| `FACT-EP7-0012` | Active Treasury custody, signing, allocation, and financial execution are not verified by the current Documentation baseline. | `EVID-EP7-0003` | `INSUFFICIENT_EVIDENCE` | Conceptual Treasury documentation remains valid only with qualifiers. |
| `FACT-EP7-0013` | Active token issuance, distribution, market value, yield, or regulatory status are not verified. | `EVID-EP7-0003`, `EVID-EP7-0019` | `INSUFFICIENT_EVIDENCE` | Contract artifacts are not activation evidence. |
| `FACT-EP7-0014` | Institutional is a review control for public vocabulary and disclosure boundaries, not automatic Documentation authority. | `EVID-EP7-0020` | `FORMALLY_DECIDED` | Scope-specific Documentation definitions may remain different. |
| `FACT-EP7-0015` | Production, provider activation, exchange activation, wallet signing, contract writes, and financial execution remain outside EPIC-07 authority. | `EVID-EP7-0002`, `EVID-EP7-0003` | `FORMALLY_DECIDED` | EPIC-07 is documentation-only. |
