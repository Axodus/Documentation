# Prize Pools and Payouts

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

Prize pools and payout rules must be transparent before users enter a draw.

## Scope

Users must know what portion of entry value, if any, goes to prizes, fees, reserves, rollovers, or other destinations. Prize rules must be deterministic and versioned.

## Concepts

A prize pool is the amount available for prizes for a draw after defined rules. Gross ticket revenue is total entry payment before allocations if paid entries exist. Net prize pool is the amount available after policy-defined fees. Prize tiers map win conditions to payout categories.

## Formula Fields

Formula fields may include draw ID, gross revenue, prize pool percentage, operating fee, treasury fee, reserve percentage, rollover in, rollover out, sponsor or bonus amount if any, net prize pool, tier distribution, rounding policy, and unclaimed prize policy.

## Payout Models

- Pari-mutuel: tier pool split among winners in the tier.
- Fixed prize: predefined amount per winner if funded and policy supports it.
- Hybrid: combination of fixed and pool-split mechanics if approved.
- Rollover-based: unawarded amounts move to future draw or reserve.
- Promotional prize: sponsored or non-cash prize if legal and policy support exists.

## Rounding and Dust

Policy must define fractional amounts, dust routing, whether rounding applies per winner or per tier, and how rounding is reported.

## Risk Considerations

Prize commitments must not be promised unless funded and approved. Prize pool errors can create treasury, claims, legal, and user trust issues.

## Related Pages

- [Claims and Settlement](claims-and-settlement.md)
- [Treasury and Fees](treasury-and-fees.md)
- [Reporting and Accountability](reporting-and-accountability.md)

