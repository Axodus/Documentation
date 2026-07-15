---
schema_version: "1.0.0"
document_id: "CORE-GDE-007"
aliases: []
document_type: "GUIDE"
title: "Axodus Product and Nucleus Map"
summary: "Maps each Axodus nucleus to its responsibility, output, dependencies, authority boundary, and current public posture."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-07"]
related_adrs: []
related_cores: ["AXODUS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/product-map.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus Product and Nucleus Map

Axodus nuclei are bounded responsibility domains. A nucleus may define a
product, an operational capability, a control surface, or shared
infrastructure. Inclusion in this map does not prove production availability.

| Nucleus | Primary Responsibility | Canonical Output | Main Dependencies | Current Public Posture |
| --- | --- | --- | --- | --- |
| [Governance](../governance/overview.md) | Constitutional, policy, approval, escalation, and accountability decisions | Valid decision or authorization record | Participants, owners, executors, Accountability | Governed model; active authority varies by scope |
| [Business](../business/overview.md) | Transform demand into plans, deliveries, services, infrastructure, and assets | Qualified request, project, delivery, or reusable asset | Governance, Runtime, ACS/Trinity, product owners | Consolidated mock/read-only prototype |
| [Runtime](../runtime/overview.md) | Track state, handoffs, validation, blockers, incidents, and receipts | Lifecycle transition or operational record | Every participating nucleus | Canonical model; production runtime unverified |
| [Academy](../academy/overview.md) | Education, assessment, onboarding, and Proof of Knowledge | Learning or scoped qualification evidence | Governance, Marketplace, Tokenomics when authorized | Product intent and partial implementation |
| [Marketplace](../marketplace/overview.md) | Distribute, list, or license authorized assets and services | Listing, offer, license, or distribution record | Business, owners, Governance, Treasury | Product model/prototype; settlement unverified |
| [ACS](../acs/overview.md) | Analysis, policy checks, alerts, risk signals, and guarded assistance | Recommendation, alert, local hold, or receipt | Runtime, owners, Governance/Security | Non-production, default-deny prototype |
| [Treasury](../treasury/overview.md) | Govern authorized custody, reserves, allocation, movement, and reporting | Financial decision or movement record | Governance, Security, product owners | Governed design; active execution unverified |
| [Tokenomics](../tokenomics/overview.md) | Define utility, issuance constraints, eligibility, and distribution rules | Approved token or utility rule | Treasury, Governance, Academy, contracts | Directional and partial prototype |
| [Trading](../trading/overview.md) | Trading research, risk controls, and authorized strategy products | Research, risk record, or authorized result | Treasury, ACS, providers, Governance | Prototype; financial gates closed |
| [Mining](../mining/overview.md) | Mining infrastructure, participation, telemetry, economics, and risk | Feasibility, telemetry, or authorized operation record | Treasury, ACS, providers, Governance | Prototype; ownership and operation incomplete |
| [Lottery](../lottery/overview.md) | Draw, randomness, eligibility, claims, and protection models | Prototype draw or claim record | Legal, Governance, Treasury, Security | Prototype-only; public release blocked |
| [DeFi](../defi/overview.md) | Governed decentralized-finance products and service models | Product design or authorized interaction | Treasury, Tokenomics, Security | Architecture/prototype; financial gates closed |
| [DEX](../dex/overview.md) | Swap, routing, liquidity, listing, and execution-risk models | Quote, route, listing, or authorized transaction | Providers, Treasury, Security, Governance | Prototype; activation unverified |
| [BBA](../bba-agency/overview.md) | Positioning, communication, campaign, and claim-review support | Public-safe narrative or campaign artifact | Business, product owners, Governance | Documentation and service model |
| [Accountability](../accountability/overview.md) | Preserve decisions, releases, incidents, reports, and receipts | Reviewable evidence record | All nuclei | Governed documentation surface |
| [Security](../security/overview.md) | Define controls, security review, incidents, and disclosure | Security decision, finding, or incident record | All sensitive surfaces | Cross-cutting control surface |

## How the Map Works

Requests and participation enter through Business, Academy, Governance,
Marketplace, or a product interface. Business or the owning nucleus establishes
context. Trinity and ACS may assist. The responsible authority decides. Runtime
tracks the transition. A product or implementation surface acts only when its
technical and authority gates are open. Accountability preserves the result.

See [Cross-Core Architecture](cross-core-architecture.md) and
[Execution Model](execution-model.md) for the interfaces and full flows.
