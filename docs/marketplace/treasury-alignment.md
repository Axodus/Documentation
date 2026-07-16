# Treasury Alignment

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Marketplace / Treasury

---

## Purpose

Marketplace creates treasury flows and potential liabilities that must be tracked and reported.

## Interfaces

Interfaces include marketplace fees, seller settlement, refunds, discounts, locked credits, reward budgets, payment processing costs, dispute reserves, and partner commissions.

## Treasury Record Fields

Fields should include reporting period, gross marketplace volume, net marketplace revenue, fees, seller payouts, tutor payouts, refunds, credits issued, credits spent, credits expired, discounts, reward budget usage, commissions, processing costs, open liabilities, governance references, and limitations.

## Review Triggers

Treasury review is required for locked reward spending, treasury-subsidized discounts, seller settlement models, marketplace fee changes, refund reserve policy, partner commissions, DEX checkout settlement, large reward budgets, and public marketplace revenue claims.

## Risk Considerations

Risks include hidden liabilities, settlement delay, refund shortfall, revenue overclaim, accounting mismatch, and treasury subsidy overrun. Marketplace volume or fees must not be presented as guaranteed future revenue.

## Related Pages

- [Treasury Overview](../treasury/overview.md)
- [Fees and Revenue](fees-and-revenue.md)
- [Reporting and Accountability](reporting-and-accountability.md)

## Canonical Traceability

- Integration: `INTG-EP8-0027`
- Canonical counterpart: [Treasury Overview](../treasury/overview.md)
- Interfaces: `INT-EP7-012`, `INT-EP7-013`
- Authority: `AUTH-EP8-0006`
- Evidence: `EVID-EP7-0003`, `EVID-EP7-0012`
- Status: settlement, custody, signing, and financial execution are unverified.
