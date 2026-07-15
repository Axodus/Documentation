---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Capital Allocation"
summary: "Defines the draft capital-allocation model for Treasury within the Axodus documentation corpus."
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
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "TREASURY-GDE-001"}, {type: "RELATES_TO", target: "TREASURY-GDE-005"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/capital-allocation.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Capital Allocation

## Purpose

Capital allocation assigns treasury resources to reserves, operations, growth, rewards, liquidity, strategies, and ecosystem development.

This page documents a directional allocation model. It must not be interpreted
as evidence of live allocations, active strategy programs, or currently
approved execution thresholds.

## Scope

This document defines allocation categories, records, decision flow, criteria, limits, and risks. It does not publish live amounts or exact thresholds unless governance approves disclosure.

## Allocation Categories

- Operating reserve for infrastructure, tools, services, and operational continuity.
- Stable reserve for lower-volatility runway.
- Emergency reserve for security, operational, or market incidents.
- Growth budget for product development, Business, BBA, and ecosystem expansion.
- Reward budget for Academy, Marketplace, governance, contributor, or campaign rewards.
- Liquidity support when governance and policy allow it.
- Trading allocation for approved internal strategies under limits.
- DeFi or DaaS allocation after strategy and risk review.
- Strategic partnership budget for approved joint initiatives.
- Risk buffer for expected fees, losses, slippage, or market events.

## Allocation Record

An allocation record should include category, purpose, asset, amount, treasury percentage when relevant, source wallet or account, destination or strategy, risk level, expected duration, approval reference, governance reference, risk limits, reporting requirement, review date, and status.

## Decision Flow

1. Allocation need is identified.
2. Category and proposed amount are defined.
3. Risk analysis is performed.
4. Treasury policy and reserve impact are checked.
5. Governance requirement is assigned.
6. Approval or rejection is recorded.
7. Execution handoff is created for approved actions.
8. Execution receipt is created when material.
9. Reporting schedule is assigned.

## Allocation Criteria

Every material allocation should demonstrate strategic fit, sustainability, understood risk, sufficient liquidity, correct governance route, measurable reporting, and a clear exit or rebalance path.

## Limits

Allocation limits may cover asset exposure, strategy exposure, exchange or protocol exposure, drawdown, loss per period, reserve ratio, illiquid allocation, and unapproved spend. Exact thresholds remain internal or governance-controlled until approved for publication.

## Risk Considerations

Allocation risk includes concentration, illiquidity, reward overcommitment, strategy loss, operational underfunding, and governance bypass.

## Related Documents

- [Treasury Policy](treasury-policy.md)
- [Risk Management](risk-management.md)
- [Governance Alignment](governance-alignment.md)
- [Reporting and Accountability](reporting-and-accountability.md)
