---
schema_version: "1.0.0"
document_id: "DEX-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Axodus DEX Overview"
summary: "Provides the governed overview for Axodus DEX within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DEX"
authority_level: "CORE"
author: "Axodus DEX"
owner: "Axodus DEX"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DEX"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus DEX Overview

---

## Purpose

Axodus DEX is the decentralized exchange, swap, liquidity pool, routing, and execution layer for the Axodus ecosystem.

## Scope

DEX covers token swaps, liquidity pools, AMM or pool models, routing and aggregation, token listing policy, LP positions, fee models, slippage and price impact, MEV and execution risk, smart contract security, governance controls, treasury liquidity, marketplace settlement support, user education, and reporting.

Axodus DEX is not a guaranteed-profit system, risk-free exchange, guaranteed execution engine, guaranteed liquidity provider, centralized custody exchange by default, token endorsement engine, or substitute for user due diligence.

## Ecosystem Role

DEX supports [DeFi](../defi/overview.md) liquidity, [Tokenomics](../tokenomics/overview.md) utility if implemented, [Treasury](../treasury/overview.md) liquidity and reporting, [Trading](../trading/overview.md) data and execution research, [Marketplace](../marketplace/overview.md) settlement flows, [Governance](../governance/overview.md) listing and parameter control, [Academy](../academy/overview.md) user education, [ACS](../acs/overview.md) risk support, and [Accountability](../accountability/overview.md) records.

## Runtime Summary

1. A DEX request, feature, listing, pool, swap, or integration is identified.
2. The item is classified as swap, pool, listing, route, LP, fee, marketplace, treasury, or tokenomics-related.
3. Risk level, token status, contract dependencies, and governance requirement are identified.
4. Security, treasury, tokenomics, or governance review is routed where required.
5. User disclosures are prepared.
6. Launch or update handoff is created.
7. Monitoring, reporting, and accountability records are maintained.

## Documentation Map

- [Architecture](architecture.md)
- [Swap Model](swap-model.md)
- [Liquidity Pools](liquidity-pools.md)
- [Routing and Aggregation](routing-and-aggregation.md)
- [Listing Policy](listing-policy.md)
- [Fees and Revenue](fees-and-revenue.md)
- [LP Model](lp-model.md)
- [Slippage and Price Impact](slippage-and-price-impact.md)
- [MEV and Execution Risk](mev-and-execution-risk.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
- [Governance Alignment](governance-alignment.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Trading Integration](trading-integration.md)
- [Marketplace Integration](marketplace-integration.md)
- [Academy and User Education](academy-and-user-education.md)
- [ACS Integration](acs-integration.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [Risk and Disclosures](risk-and-disclosures.md)

## Risk Considerations

DEX users face slippage, price impact, MEV, liquidity, token, listing, approval, smart contract, failed transaction, LP, and bridge risk. Quotes, execution, liquidity, fees, and LP outcomes are not guaranteed.
