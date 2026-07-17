---
schema_version: "1.0.0"
document_id: "DOC-RPT-171"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Runtime Boundary Matrix"
summary: "Separates represented, prototype, activated, and prohibited runtime capabilities across the Axodus architecture."
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
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-03"]
related_adrs: []
related_cores: ["BUSINESS", "ACS", "RUNTIME", "GOVERNANCE", "TREASURY", "TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-RUNTIME-BOUNDARY-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Runtime Boundary Matrix

| Surface | Represented Capability | Verified Level | Explicitly Not Verified |
| --- | --- | --- | --- |
| Business runtime | Intake, state machine, registry, review queue, workflow, drafts, submissions, guarded bridges | `PROTOTYPE_VERIFIED_MOCK_READ_ONLY` | Production service delivery, billing, governance execution, Treasury movement, ACS provisioning |
| ACS runtime | Policies, capabilities, receipts, telemetry, local signals, default-deny gates | `PROTOTYPE_VERIFIED_NON_PRODUCTION` | Autonomous production enforcement, secrets access, live trading, Treasury execution |
| Trinity | Planning, classification, operational and risk assistance | `PARTIALLY_REPRESENTED_ADVISORY` | General autonomous planning runtime, institutional decisions, direct execution |
| AxodusAPP | Portfolio status, dependency, opportunity, authority, and boundary views | `PROTOTYPE_VERIFIED_READ_ONLY` | Live provider transport, wallet mutation, governance or financial execution |
| Governance | Proposal and decision models, DAO structures, execution receipts | `GOVERNED_DESIGN_PARTIAL_IMPLEMENTATION` | Uniform active authority across all nuclei |
| Treasury | Policy, custody, reserves, allocation, distribution, and reporting concepts | `GOVERNED_DESIGN` | Active custody, signer authority, capital movement, production accounting |
| Tokenomics | Utility, PoK, issuance constraints, distribution, and contract context | `DIRECTIONAL_AND_PARTIAL_PROTOTYPE` | Enabled issuance, current supply, active distribution, market or legal status |
| Marketplace | Listing, buyer/seller, licensing, payment, and distribution models | `PRODUCT_PROTOTYPE_OR_DESIGN` | Production settlement, active commercial availability, universal asset rights |
| Academy | Learning, assessment, PoK, course, and reward models | `PRODUCT_INTENT_AND_PARTIAL_IMPLEMENTATION` | Active token distribution, final certification authority, anti-sybil guarantee |
| Trading / Mining / DeFi / DEX | Domain-specific strategies, infrastructure, products, and risk controls | `PROTOTYPE_OR_DESIGN` | Live financial execution, custody, returns, payouts, liquidity, or production |
| Lottery | Draw, randomness, tickets, claims, and responsible participation models | `PROTOTYPE_ONLY_LEGAL_GATED` | Public launch, paid participation, prize commitment, jurisdictional approval |
| Provider layer | Exchange, chain, wallet, custody, identity, payment, cloud, and MCP adapters | `CLOSED_OR_UNVERIFIED` | Production credentials, signing, writes, settlement, unrestricted external calls |

## Status Rule

Architecture may represent a future interface before it is activated. Every
public use of `operational`, `active`, `live`, `production`, or
`integrated` must identify evidence for that exact state.
