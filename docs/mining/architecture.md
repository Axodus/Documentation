---
schema_version: "1.0.0"
document_id: "MINING-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Mining Architecture"
summary: "Provides governed mining architecture guidance within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "MINING-GDE-001"}, {type: "RELATES_TO", target: "MINING-GDE-006"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MINING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/architecture.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Mining Architecture

---

## Purpose

Axodus Mining architecture separates infrastructure, networks, pools, validators, user products, reward accounting, treasury, tokenomics, governance, custody, monitoring, sustainability, ACS, and reporting.

## Architecture Layers

- Infrastructure layer: hardware inventory, hosting, power, cooling, maintenance, and uptime.
- Network layer: supported networks, algorithms, consensus models, reward rules, and network status.
- Pool and hashrate layer: pool configuration, hashrate tracking, pool fees, payout method, and pool risk.
- Node and validator layer: validator nodes, delegation, slashing risk, uptime, rewards, and network governance context.
- Reward accounting layer: mined rewards, validator rewards, fees, costs, net estimates, and payout liabilities.
- User product layer: subscriptions, user allocations, dashboards, payout rules, eligibility, and disclosures.
- Treasury layer: capital allocation, custody, conversion policy, reserves, and reporting.
- Tokenomics layer: $Neurons access, discounts, product gating, and fee policy if approved.
- Governance layer: mining policy, product approval, payout policy, risk limits, and emergency pause.
- Security and custody layer: wallets, pool credentials, API keys, payout addresses, hardware access, and dashboards.
- Monitoring and telemetry layer: hashrate, uptime, temperature, power, pool status, rewards, and alerts.
- Sustainability layer: energy profile, heat, noise, responsible operations, and environmental claim review.
- ACS layer: summaries, anomaly flags, risk reviews, report drafts, and claim review support.
- Reporting layer: mining, payout, treasury, uptime, and incident reports.

## Core Objects

Core objects include `MiningOperation`, `MiningAsset`, `HardwareUnit`, `PoolAccount`, `ValidatorNode`, `UserMiningProduct`, `RewardRecord`, `PayoutRecord`, `MonitoringRecord`, and `MiningReport`.

## Architecture Invariants

Rewards must be documented as variable. Gross rewards must not be treated as profit. User products require explicit status, payout rules, cost assumptions, risk disclosures, governance context, and reporting.
