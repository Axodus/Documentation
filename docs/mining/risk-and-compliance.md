---
schema_version: "1.0.0"
document_id: "MINING-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Risk and Compliance"
summary: "Provides governed risk and compliance guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/risk-and-compliance.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk and Compliance

---

## Purpose

Mining risk includes profitability, operations, energy, hardware, pools, validators, custody, markets, user expectations, tax, regulation, consumer protection, and environmental claims.

## Scope

This page defines documentation guardrails and review triggers. It does not provide legal, tax, financial, or investment advice.

## Risk Categories

Risks include negative profitability, market volatility, network difficulty, energy cost, hardware failure or obsolescence, pool downtime or fee changes, validator slashing, custody compromise, operational downtime, regulation, tax, user misunderstanding, and unsupported environmental claims.

## Prohibited Claims

Do not claim guaranteed profit, guaranteed ROI, guaranteed daily income, guaranteed payout, fixed income, passive income without risk, risk-free mining, guaranteed payback, that mining cannot lose, legal compliance without review, tax-free status without review, renewable or carbon neutral status without evidence, or audited security without evidence.

## Safe Language

Use language such as estimated rewards, variable rewards, subject to network difficulty, subject to energy costs, subject to hardware and uptime risk, subject to market risk, subject to pool or validator rules, subject to governance approval, subject to compliance review, no profit guarantee, active if verified, planned, pilot, and educational.

## Review Triggers

Triggers include user-facing mining products, public profitability claims, mining subscriptions, hashrate access offers, treasury mining allocation, payout policy, token payment or reward policy, sustainability claims, validator products, marketplace mining listings, and legal, tax, or compliance claims.

## Required Reviews

Treasury reviews capital, rewards, payout liabilities, hardware, and hosting costs. Governance reviews activation, payout, fee, and tokenomics policy. Security reviews wallets, pool accounts, validator keys, and infrastructure access. BBA reviews public ROI, reward, and sustainability claims. Compliance or legal review is required for jurisdiction-sensitive offers.
