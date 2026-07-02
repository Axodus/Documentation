---
schema_version: "1.0.0"
document_id: "MINING-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Mining Models"
summary: "Provides governed mining models guidance within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "MINING-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MINING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/mining-models.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Mining Models

---

## Purpose

Mining must be documented by model because different networks and products use different reward mechanisms, risks, costs, custody assumptions, and disclosures.

## Model Types

- Proof-of-Work mining: hardware performs computation to compete for network rewards.
- Pool mining: miners contribute hashrate to a pool and receive rewards under pool rules.
- Solo mining: miner attempts to mine blocks without a pool, with high reward variance.
- Hosted mining: hardware is operated in a hosting facility or by a service provider.
- Cloud-style mining access: user accesses mining capacity or a product without direct hardware custody; this is claim-sensitive.
- Hashrate allocation: defined share of mining capacity allocated to treasury, users, or products if approved.
- Validator operations: node validates consensus and may earn rewards under non-PoW networks.
- Node infrastructure: nodes support network reliability or data access and may not earn rewards.
- Educational mining simulation: Academy or dashboard simulation for learning.

## Model Fields

Fields should include model ID, network, consensus or algorithm, reward source, infrastructure, custody, cost model, payout model, user-facing status, treasury impact, risk level, governance status, compliance status, and reporting requirement.

## Status Labels

Statuses may include Research, Simulation, Internal Test, Pilot, Active Internal, Active User-Facing, Paused, Deprecated, and Prohibited.

## Selection Criteria

Selection should consider network reliability, reward variability, hardware needs, energy or hosting cost, pool or validator counterparty risk, liquidity, compliance risk, treasury fit, disclosure complexity, monitoring availability, and security requirements.
