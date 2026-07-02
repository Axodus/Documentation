---
schema_version: "1.0.0"
document_id: "TRADING-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Trading Overview"
summary: "Provides the governed overview for Trading within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TRADING"
authority_level: "CORE"
author: "Axodus Trading"
owner: "Axodus Trading"
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
related_cores: ["TRADING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/trading/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Overview

---

## Purpose

Axodus Trading is both an internal financial operations nucleus and a user-facing strategy product nucleus.

Trading may support ecosystem revenue, treasury strategy, market intelligence, product activation, and strategy access for eligible users. It must always be documented as a risk-aware toolset, not as a profit system.

## Scope

Trading covers internal strategy research, treasury trading support, CEX API strategy products, user-facing trading tools, strategy access policy, Academy trading education, API key security guidance, performance reporting, risk reporting, ACS/Trinity analysis, and governance review for material trading policies.

## Ecosystem Role

Trading is the market strategy and execution intelligence layer for Axodus. It supports treasury-aware strategy research, risk-reviewed internal operations, user-facing strategy products, Academy education, ACS/Trinity analysis, and accountability reporting.

## What Trading Is Not

Trading is not financial advice, a guaranteed-profit system, a passive-income promise, a risk-free bot platform, a broker, an exchange, a custody solution by default, unrestricted treasury trading, or a replacement for user judgment.

## Core Principles

- Risk first: every strategy and product requires risk language.
- No guarantees: backtests, prior results, bots, and signals do not guarantee future outcomes.
- User control: user-facing CEX strategies should run in user-owned accounts unless otherwise documented.
- No custody by default: Axodus should not hold user funds for user-facing CEX API strategies by default.
- Least privilege API: exchange API keys should disable withdrawals and use only required permissions.
- Governance alignment: treasury strategies and material access policies require governance or treasury review.
- Education before access: Academy paths may prepare users for strategy risk.
- Accountability: performance, risk, incidents, and changes should be reported with context.

## Trading Relationships

Trading connects with Treasury for internal allocations and reporting, Governance for strategy policy and risk limits, Tokenomics for `$Neurons`-based access if approved, Academy for risk education, Business for request intake, ACS for Trinity analysis, Marketplace for possible strategy or course commerce, and Accountability for reports and records.

## Documentation Map

- [Architecture](architecture.md)
- [Internal Trading](internal-trading.md)
- [User-Facing Strategies](user-facing-strategies.md)
- [Strategy Lifecycle](strategy-lifecycle.md)
- [Scalper Futures](scalper-futures.md)
- [Access Model](access-model.md)
- [CEX API Security](cex-api-security.md)
- [Risk Management](risk-management.md)
- [Governance Alignment](governance-alignment.md)
- [Treasury Alignment](treasury-alignment.md)
- [ACS and Trinity Integration](acs-trinity-integration.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [Compliance and User Disclosures](compliance-and-user-disclosures.md)

## Risk Considerations

Trading involves market, liquidity, exchange, API, leverage, automation, operational, strategy, governance, and user-error risk. No Trading page may imply guaranteed profit, guaranteed revenue, risk-free execution, fixed returns, or certainty from bots, signals, backtests, or prior performance.

## Current Status

Trading documentation is under active reconstruction. Strategies, exchange integrations, access thresholds, API storage architecture, and treasury allocation rules must be validated before they are treated as active.
