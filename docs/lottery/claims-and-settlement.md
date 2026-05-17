# Claims and Settlement

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

Winning eligibility is not complete until claim and settlement rules are defined and executed.

## Scope

Claims must be time-bound, auditable, and protected against duplicate claims, invalid tickets, fraud, and settlement errors.

## Claim Concepts

A claim is the process or transaction by which an eligible winner receives a prize. A claim window is the period during which a prize can be claimed. Settlement is payment or delivery of the prize. An unclaimed prize is not claimed before deadline.

## Claim Fields

Fields may include `claim_id`, draw ID, ticket ID, claimant reference, prize tier, amount, status, deadline, proof if any, settlement asset, settlement transaction, failure reason if any, and timestamp.

## Status Model

Statuses may include Not Eligible, Claimable, Pending, Settled, Failed, Disputed, Expired, and Revoked if policy supports fraud or rule invalidation.

## Settlement Models

Settlement may be automatic payout, user claim, batch claim, Merkle proof claim, or manual/reviewed claim for sensitive situations.

## Unclaimed Prize Policy

Unclaimed prizes may roll over, return to treasury or prize reserve, move to a community pool, be burned only if token policy allows, return to sponsor if promotional, or require governance decision. The policy must be defined before a draw opens.

## Related Pages

- [Prize Pools and Payouts](prize-pools-and-payouts.md)
- [Ticket Model](ticket-model.md)
- [Treasury and Fees](treasury-and-fees.md)

