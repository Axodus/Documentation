---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Treasury Overview"
summary: "Provides the governed overview for Treasury within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Treasury Overview

---

## Purpose

Treasury is the financial responsibility layer of Axodus. It manages reserves, capital allocation, risk, reporting, and governance-aligned financial accountability.

## Scope

Treasury covers asset and wallet records, reserve policy, liquidity planning, capital allocation, reward budgets, trading allocations, DeFi and DaaS exposure review, fee routing, custody controls, execution receipts, and treasury reporting.

Treasury does not provide investment advice, does not guarantee profit, and must not operate as an uncontrolled trading account or hidden wallet.

## Ecosystem Role

Treasury is the capital stewardship and financial accountability layer for Axodus. It connects reserves, revenue, allocation policy, Trading exposure, DeFi exposure, tokenomics alignment, custody controls, governance approvals, and public reporting.

## Responsibilities

- Preserve operational runway and ecosystem continuity.
- Maintain reserve, liquidity, and allocation policies.
- Review treasury risk before material financial actions.
- Coordinate with Governance for sensitive approvals.
- Coordinate with Trading for internal strategy allocations, PnL, drawdown, and exposure reporting.
- Coordinate with Tokenomics for controlled issuance, burn reporting, supply monitoring, and future utility implications.
- Publish or preserve financial accountability records.

## Ecosystem Interfaces

Treasury connects directly to [Governance](../governance/overview.md), [Trading](../trading/overview.md), [Tokenomics](../tokenomics/overview.md), [Business](../business/overview.md), [Marketplace](../marketplace/overview.md), [Academy](../academy/overview.md), [ACS](../acs/overview.md), and [Accountability](../accountability/overview.md).

## Runtime Summary

1. A treasury request, allocation, report, or incident is identified.
2. The action is classified by type, materiality, and risk.
3. Treasury policy, allocation rules, and governance requirements are checked.
4. ACS or Trinity may prepare analysis, but cannot approve or execute the action.
5. Required approvals are recorded.
6. Authorized execution is performed by approved operators.
7. Execution receipts, reports, and accountability records are updated.

## Current Status

Treasury documentation is under active reconstruction. Policies, thresholds, wallet registries, and reporting cadence remain draft until confirmed through governance, security, and operational review.

## Documentation Map

- [Architecture](architecture.md)
- [Treasury Policy](treasury-policy.md)
- [Capital Allocation](capital-allocation.md)
- [Reserves and Liquidity](reserves-and-liquidity.md)
- [Revenue and Fees](revenue-and-fees.md)
- [Risk Management](risk-management.md)
- [Strategy Oversight](strategy-oversight.md)
- [Trading Alignment](trading-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Governance Alignment](governance-alignment.md)
- [Custody and Security](custody-and-security.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [ACS and Trinity Integration](acs-trinity-integration.md)
- [Compliance and Disclosures](compliance-and-disclosures.md)

## Risk Considerations

Treasury activity is exposed to market, liquidity, counterparty, smart contract, custody, operational, governance, tokenomics liability, and reporting risk. No treasury page should be interpreted as a promise of yield, APY, fixed income, token appreciation, or risk-free return.
