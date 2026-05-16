# Reporting and Accountability

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Treasury

---

## Purpose

Treasury reporting creates trust by explaining assets, inflows, outflows, allocations, reserves, risks, PnL where applicable, liabilities, incidents, and governance decisions.

## Scope

This document defines report types, report fields, public versus internal boundaries, accountability records, cadence, quality rules, and anti-patterns.

## Report Types

- Treasury snapshot for assets, allocations, reserves, and major changes.
- Financial report for inflows, outflows, expenses, revenue, and net position.
- Allocation report for how treasury resources are assigned.
- Reserve report for operating, stable, emergency, and liquidity reserve status.
- Trading PnL report for internal strategy results with risk context.
- Exposure report for asset, exchange, protocol, counterparty, and strategy exposure.
- Reward budget report for Academy, Marketplace, governance, or campaign budget use.
- Fee report for collected, allocated, burned, or routed fees.
- Incident report for material loss, security issue, execution error, or policy breach.
- Governance treasury record for decisions and execution receipts.

## Treasury Report Fields

A treasury report should include period, status, asset summary, reserve summary, inflows, outflows, operating expenses, revenue sources, allocations, PnL if applicable, fees, reward budget usage, liabilities or commitments, exposure, risk limit status, incidents, governance decisions, execution receipts, assumptions, limitations, and next review.

## Public and Internal Reports

Public reports should include approved summaries, inflow and outflow context, allocation categories, risk notes, governance references, and material incidents when appropriate. Internal reports may include detailed balances, counterparty details, signer review notes, sensitive findings, reconciliation details, and investigation materials.

Public transparency must be balanced with security.

## Accountability Records

Treasury accountability records include treasury action records, allocation records, reserve records, revenue records, fee records, PnL records, risk review records, and incident records.

## Cadence

Reporting may be event-based for material actions or incidents, periodic when mature processes exist, campaign-end for rewards or partner campaigns, strategy-review based for trading or DeFi checkpoints, and governance-requested when current financial context is needed.

## Quality Rules

Numbers should have a source or method. PnL should distinguish realized, unrealized, and net after fees. Reports should include limitations. Material changes should link to governance or execution receipts. Reports should not hide losses. Estimates should be labeled as estimates. Public reports should not expose secrets.

## Anti-Patterns

Avoid selective positive reporting, numbers without context, hidden reward or credit liabilities, secret exposure, and missing execution receipts.

## Related Documents

- [Accountability Overview](../accountability/overview.md)
- [Governance Alignment](governance-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Trading Alignment](trading-alignment.md)
- [Risk Management](risk-management.md)
