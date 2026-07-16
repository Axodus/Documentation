# Treasury and Fees

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / Treasury

---

## Purpose

Lottery products create treasury implications through ticket revenue, prize pools, fees, reserves, unpaid prizes, refunds, sponsorships, and operational costs.

## Scope

Treasury handling must be transparent, reportable, and governance-aligned. Lottery fees must not be presented as guaranteed treasury revenue.

## Treasury Interfaces

Interfaces may include ticket revenue if paid entries exist, prize pool, operating fees, treasury fees if approved, reserves, unclaimed prizes, refunds, and sponsor bonuses if approved.

## Fee Types

Possible fee types include platform fee, treasury fee, prize reserve allocation, VRF or network cost, and partner or sponsor fee if Business policy defines it.

## Treasury Record Fields

Records may include draw ID, gross ticket revenue, payment assets, prize pool, fees, treasury allocation, reserve allocation, VRF or network costs, claimed prizes, unclaimed prizes, refunds, rollover in, rollover out, final balance, governance reference, and report reference.

## Review Triggers

Treasury review is required for prize pool formulas, treasury fee changes, reserve policy, rollover policy, sponsor prizes, fixed prize commitments, refund policy, real-money or token payment launch, and unpaid prize policy.

## Risk Considerations

Risks include prize underfunding, hidden fees, unpaid liabilities, refund gaps, and overclaiming treasury revenue.

## Related Pages

- [Treasury Overview](../treasury/overview.md)
- [Prize Pools and Payouts](prize-pools-and-payouts.md)
- [Reporting and Accountability](reporting-and-accountability.md)

## Canonical Traceability

- Integration: `INTG-EP8-0024`
- Canonical counterpart: [Treasury Overview](../treasury/overview.md)
- Interfaces: `INT-EP7-012`, `INT-EP7-013`
- Authority: `AUTH-EP8-0006`
- Evidence: `EVID-EP7-0003`, `EVID-EP7-0016`
- Status: no active prize, fee, custody, settlement, or public operation.

This traceability block is a boundary clarification and does not expand the
Lottery product model.
