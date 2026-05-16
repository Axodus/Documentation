# Strategy Lifecycle

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Trading

---

## Purpose

Every trading strategy must have a lifecycle. A strategy should not move from idea to user-facing execution without research, testing, risk review, access policy, monitoring, and reporting.

## Scope

This page applies to internal, treasury-facing, user-facing, educational, and experimental strategies.

## Lifecycle Stages

1. Concept: define hypothesis, market type, and initial risk assessment.
2. Research: analyze market logic, data requirements, assumptions, and failure modes.
3. Backtesting: test on historical data and document limitations.
4. Paper trading: test live conditions without real capital.
5. Risk review: define limits, position sizing, leverage rules, and kill switch.
6. Limited pilot: restrict live use under monitoring.
7. Governance or product approval: approve material internal, treasury, or user-facing release.
8. Active: make the strategy available under defined scope.
9. Iteration: update parameters or logic with versioning and review.
10. Pause or deprecation: stop strategy due to risk, performance, policy, or maintenance.

## Strategy Statuses

Statuses include `Concept`, `Research`, `Backtesting`, `Paper Trading`, `Risk Review`, `Limited Pilot`, `Pending Approval`, `Active Internal`, `Active User Facing`, `Paused`, `Deprecated`, `Failed`, and `Needs Review`.

## Versioning

Material strategy logic changes require a new version. User-facing changes require disclosure when material. Treasury strategy changes require reporting when material. High-risk changes require review before release.

## Promotion Gates

Promotion gates require defined hypotheses, data sources, backtest reports with limitations, paper trading observations, risk limits, pilot review, disclosures, monitoring readiness, access policy, and approval when material.

## Backtest Requirements

Backtests should include data period, market source, assumptions, fees, slippage, liquidity constraints, leverage if any, drawdown, number of trades, robustness notes if available, overfitting risk, limitations, and a statement that backtests do not guarantee future performance.

## Deprecation Conditions

Deprecation may occur because of persistent underperformance, excessive drawdown, market regime change, exchange API incompatibility, security issue, governance policy change, unacceptable user risk, infrastructure instability, or replacement by a better strategy.

## Related Pages

- [Risk Management](risk-management.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [User-Facing Strategies](user-facing-strategies.md)
- [Governance Alignment](governance-alignment.md)
