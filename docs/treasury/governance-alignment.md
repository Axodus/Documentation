# Governance Alignment

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Treasury must be governed. Material financial actions should not depend only on private chats, informal trust, or single-actor discretion.

## Scope

This document defines governance-sensitive treasury actions, routing levels, approval records, reason codes, and anti-patterns.

## Governance-Sensitive Actions

Governance sensitivity may arise from capital allocation, reserve rebalance, liquidity support, large transfers, payments to vendors or DAOs, exchange or protocol exposure, live trading strategies, leverage, derivatives, reward budgets, token mint authority changes, token burn policy changes, cross-chain activation, future token fee design, future marketplace settlement, multisig signer changes, wallet control changes, emergency recovery, public financial reports, and incident reports.

## Routing Levels

| Level | Meaning |
| --- | --- |
| Operational Record | Routine action requires a record but not formal governance |
| Governance Visibility | Action should be visible to governance or accountability |
| Governance Review | Responsible governance layer reviews before execution |
| Formal Proposal | Vote or formal decision is required |
| Boardroom or High-Risk Review | High-materiality financial or security action |
| Emergency Action | Urgent protection action with post-action report |

## Governance Flow

1. Treasury action is requested.
2. Materiality is classified.
3. Risk review is performed.
4. ACS or Trinity may prepare a summary.
5. Governance requirement is assigned.
6. Proposal or review brief is created when required.
7. Decision is recorded.
8. Execution is authorized or rejected.
9. Execution receipt is created when executed.
10. Report or accountability record is updated.

## Reason Codes

Reason codes may include `TREASURY_REVIEW_REQUIRED`, `CAPITAL_ALLOCATION_REVIEW_REQUIRED`, `STRATEGY_RISK_REVIEW_REQUIRED`, `TOKENOMICS_TREASURY_REVIEW_REQUIRED`, `CUSTODY_SECURITY_REVIEW_REQUIRED`, `FINANCIAL_REPORTING_REQUIRED`, and `EMERGENCY_TREASURY_ACTION`.

## Approval Record

An approval record should include approval identifier, treasury action identifier, governance layer, approver or decision reference, decision, conditions, risk review reference, execution permission, reporting requirement, and timestamp.

## Anti-Patterns

Treasury governance should avoid private-wallet treasury control, execution without receipts, approval without conditions, abuse of emergency labels, and over-disclosure of sensitive security details.

## Related Documents

- [Governance Overview](../governance/overview.md)
- [Treasury Policy](treasury-policy.md)
- [Risk Management](risk-management.md)
- [Custody and Security](custody-and-security.md)
- [Reporting and Accountability](reporting-and-accountability.md)
