---
schema_version: "1.0.0"
document_id: "MINING-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Axodus Mining Overview"
summary: "Provides the governed overview for Axodus Mining within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "MINING"
authority_level: "CORE"
author: "Axodus Mining"
owner: "Axodus Mining"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-17"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MINING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus Mining Overview

---

## Purpose

Axodus Mining is the infrastructure and product nucleus for mining, validation, reward accounting, monitoring, user education, treasury exposure, marketplace integration, and reporting.

## Scope

Mining may include Proof-of-Work mining, pool mining, hashrate allocation, hosted mining, user-facing mining products, node operations, validator operations, mining education, and mining-related services.

Mining is not a guaranteed income platform, passive income guarantee, fixed-yield product, APY guarantee, risk-free mining product, legal or tax advice, or substitute for governance, treasury, security, compliance, and user disclosures.

## Ecosystem Role

Mining connects to [Treasury](../treasury/overview.md) for capital allocation and mined asset accounting, [Governance](../governance/overview.md) for product and payout policy, [Tokenomics](../tokenomics/overview.md) for $Neurons access if approved, [Trading](../trading/overview.md) for mined asset conversion and risk context, [Marketplace](../marketplace/overview.md) and [Business](../business/overview.md) for services, [BBA Agency](../bba-agency/overview.md) for claim review, [Academy](../academy/overview.md) for user education, [ACS](../acs/overview.md) for advisory support, and [Accountability](../accountability/overview.md) for reports.

## Documentation Map

- [Architecture](architecture.md)
- [Mining Models](mining-models.md)
- [Infrastructure and Operations](infrastructure-and-operations.md)
- [Hardware, Energy and Uptime](hardware-energy-and-uptime.md)
- [Pools, Hashrate and Network Difficulty](pools-hashrate-and-network-difficulty.md)
- [Node and Validator Operations](node-and-validator-operations.md)
- [User-Facing Products](user-facing-products.md)
- [Rewards and Payouts](rewards-and-payouts.md)
- [Costs, Fees and Profitability](costs-fees-and-profitability.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Governance Alignment](governance-alignment.md)
- [Marketplace, Business and BBA Alignment](marketplace-business-and-bba-alignment.md)
- [Academy and User Education](academy-and-user-education.md)
- [Trading and Risk Hedging](trading-and-risk-hedging.md)
- [Security and Custody](security-and-custody.md)
- [Monitoring and Telemetry](monitoring-and-telemetry.md)
- [ACS Integration](acs-integration.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [Sustainability and Responsible Operations](sustainability-and-responsible-operations.md)
- [Risk and Compliance](risk-and-compliance.md)

## Risk Considerations

Mining rewards are variable. Results depend on network difficulty, reward rules, pool terms, uptime, hardware performance, energy costs, maintenance, custody, market prices, validator rules, regulation, and reporting quality. Mining documentation must never present estimates as guaranteed profit, fixed ROI, or guaranteed payout.
