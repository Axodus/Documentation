---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Treasury Risk Management"
summary: "Provides governed treasury risk management guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TREASURY"
authority_level: "CORE"
author: "Axodus Treasury"
owner: "Axodus Treasury"
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
relationships: [{type: "RELATES_TO", target: "TREASURY-GDE-001"}, {type: "RELATES_TO", target: "TREASURY-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/risk-management.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Treasury Risk Management

---

## Purpose

Treasury risk cannot be eliminated. It must be identified, measured, limited, monitored, reported, and escalated.

## Scope

This document defines treasury risk categories, controls, limit types, review records, risk levels, and ecosystem dependencies.

## Risk Categories

- Market risk from asset price movement.
- Liquidity risk from delayed or costly access to assets.
- Concentration risk from excessive exposure to one asset, exchange, protocol, strategy, or counterparty.
- Counterparty risk from exchanges, partners, banks, service providers, or external actors.
- Smart contract risk from protocol or contract failure.
- Strategy risk from trading or DeFi underperformance.
- Leverage risk from borrowed or derivative exposure.
- Operational risk from process, infrastructure, configuration, or human failure.
- Custody risk from wallet, key, multisig, or account failure.
- Governance risk from bypass, capture, or unclear authority.
- Tokenomics liability risk from unsupported utility claims, future marketplace credits, or undefined reward obligations.
- Reporting risk from incomplete or misleading financial status.
- Regulatory uncertainty around financial structures.

## Controls

Controls may include diversification policy, liquidity buffers, runway tracking, exposure limits, exchange and partner review, protocol due diligence, strategy lifecycle rules, drawdown limits, leverage restrictions, execution checklists, separation of duties, access controls, multisig, key rotation, execution receipts, reward budget limits, and periodic reporting.

## Risk Limit Types

Treasury may define limits for assets, platforms, strategies, drawdown, liquidity minimums, leverage, spending, and reward budgets. Exact thresholds should be disclosed only when governance approves publication.

## Risk Review Record

A risk review should include the reviewed treasury action or allocation, risk categories, severity, exposure, applicable limits, mitigation, required approvals, monitoring plan, reporting requirement, reviewer, decision, and review date.

## Risk Levels

| Level | Examples | Controls |
| --- | --- | --- |
| Low | Small operational expense, routine reconciliation | Basic record |
| Medium | Moderate allocation, marketplace settlement, reserve rebalance | Treasury review and reporting |
| High | Trading allocation, DeFi exposure, reward budget change | Risk review, governance visibility or approval, execution receipt |
| Critical | Large transfer, leverage, contract control change, emergency response | Governance or Boardroom review, security review when relevant, strict receipt, post-action report |

## Related Documents

- [Trading Alignment](trading-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Custody and Security](custody-and-security.md)
- [Governance Alignment](governance-alignment.md)
- [Reporting and Accountability](reporting-and-accountability.md)
