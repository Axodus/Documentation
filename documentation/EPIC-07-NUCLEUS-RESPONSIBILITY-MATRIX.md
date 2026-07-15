---
schema_version: "1.0.0"
document_id: "DOC-RPT-167"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Nucleus Responsibility Matrix"
summary: "Freezes the primary responsibility, value output, authority boundary, and current posture of Axodus nuclei."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
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
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-02"]
related_adrs: []
related_cores: ["GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TRADING", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-NUCLEUS-RESPONSIBILITY-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Nucleus Responsibility Matrix

| Nucleus | Primary Responsibility | Canonical Output | Authority Boundary | Current Posture |
| --- | --- | --- | --- | --- |
| Governance | Define and apply constitutional, policy, approval, escalation, and accountability rules. | Valid decision, authorization, rejection, suspension, or execution record. | Does not itself prove technical execution. | Governed model; activation varies by mechanism. |
| Business | Transform demand into governed plans, deliveries, services, infrastructure, and assets. | Qualified request, proposal, project, delivery, or reusable asset. | Cannot override Governance, Treasury, ACS, legal, security, or product owners. | Consolidated mock/read-only prototype. |
| Runtime | Structure status, handoffs, validation, blockers, incidents, and records across work. | State transition, handoff, validation, incident, or lifecycle record. | Does not activate providers or execute institutional decisions. | Canonical documentation model; production runtime unverified. |
| Academy | Educate, onboard, assess, and model Proof of Knowledge and qualification. | Learning progression, assessment, qualification, or prototype credential evidence. | Cannot self-authorize token issuance, certification recognition, or governance eligibility. | Product intent and partial implementation; sensitive claims gated. |
| Marketplace | Discover, list, distribute, license, or commercialize authorized assets and services. | Listing, offer, license, purchase path, or distribution record. | Cannot replace Business intake or independently authorize settlement. | Prototype/product surface; production settlement unverified. |
| ACS | Provide analysis, policy checks, risk signals, monitoring models, and guarded assistance. | Analysis, score, alert, recommendation, local block signal, or receipt. | No autonomous institutional or production enforcement authority. | L4 candidate, default-deny and non-production. |
| Trinity | Assist planning, decomposition, estimation, operational analysis, and coordination. | Plan, estimate, task decomposition, or recommendation. | No final approval, treasury, governance, or autonomous execution authority. | Agent model with evidence gaps across general Business use. |
| Treasury | Steward authorized assets, custody policy, reserves, allocation, and financial records. | Authorized financial decision or movement record. | Requires explicit custody, signing, policy, and execution authority. | Conceptual/governed design; active execution unverified. |
| Tokenomics | Define governed utility, issuance constraints, distribution logic, and economic relationships. | Approved token rule, utility rule, eligibility rule, or reporting model. | Does not imply issuance, value, return, or regulatory status. | Directional and prototype elements; issuance unverified. |
| Trading | Model and, only if authorized, operate trading-related strategies and products. | Research, proposal, risk record, or authorized execution result. | No guaranteed performance or live execution inference. | Prototype and validation surfaces; financial gates closed. |
| Mining | Model infrastructure, participation, telemetry, costs, rewards, and risks. | Feasibility, telemetry, risk, or authorized operation record. | Ownership, capital, loss, revenue, and production require evidence. | Prototype; operating and economic authority incomplete. |
| Lottery | Model draw, eligibility, randomness, claims, and consumer protection. | Prototype draw or public-safe conceptual record. | Legal and public release remain blocked. | Prototype-only; no public activation. |
| DeFi | Model governed decentralized-finance products and services. | Product design, risk assessment, or authorized protocol interaction. | No financial activation or yield promise. | Architecture/prototype; gates closed. |
| DEX | Model swaps, routing, liquidity, listings, and execution risk. | Quote, route, listing decision, or authorized transaction record. | Deployment, liquidity, settlement, and live operation require evidence. | Prototype; activation unverified. |
| BBA | Provide positioning, communication, campaign, and claim-review support. | Public-safe narrative, campaign plan, or communication artifact. | Cannot create product, partnership, performance, or availability facts. | Documentation and service model. |
| Accountability | Preserve reports, receipts, decisions, releases, incidents, and status evidence. | Reviewable public or internal record. | Records do not grant authority by themselves. | Governed documentation surface. |
| Security | Define and review security controls, incidents, disclosure, and technical risk. | Security finding, requirement, approval, rejection, or incident record. | Security review is not legal or financial approval. | Cross-cutting control surface. |
| AxodusAPP | Present authorized portfolio and product information through interfaces. | Read-only view, navigation, or validated user interaction. | No implicit backend, wallet, governance, or financial execution. | Read-only portfolio implementation; production integration unverified. |
