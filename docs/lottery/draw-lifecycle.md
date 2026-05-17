# Draw Lifecycle

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

A draw must follow a deterministic lifecycle so users, operators, governance, and reviewers understand when entries open, close, randomness is requested, results are final, claims open, and claims expire.

## Draw Round Object

Fields may include `draw_id`, game model, game model version, status, ticket open and close times, randomness request and fulfillment times, result publication time, claim window, ticket count, ticket root if any, randomness source, result, prize pool, fee policy, governance reference, and report reference.

## Status Model

Statuses may include Draft, Scheduled, Open, Closing, Closed, Indexing, Randomness Requested, Randomness Fulfilled, Result Computed, Result Published, Claims Open, Claims Closed, Finalized, Cancelled, Disputed, and Paused.

## Lifecycle Flow

1. Governance or an authorized operator creates the draw configuration.
2. The draw is scheduled and the ticket window opens.
3. Users create valid tickets under the active game rules.
4. The ticket window closes and the ticket set is finalized.
5. A ticket root is generated if indexing is used.
6. Randomness is requested and fulfilled.
7. Results are computed from randomness and game rules.
8. Results are published and winners are calculated.
9. The claim window opens.
10. Claims are processed, unclaimed prizes follow policy, and the draw report is published.

## Cancellation and Refunds

Cancellation may occur due to unresolved randomness failure, security issue, compliance or governance pause, operational incident, integrity issue, or policy-defined draw conditions. Refund policy must define payment asset, network costs, free-entry handling, and reporting.

## Related Pages

- [Randomness and VRF](randomness-and-vrf.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Reporting and Accountability](reporting-and-accountability.md)

