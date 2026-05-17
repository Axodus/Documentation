# Ticket Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

A ticket is the user entry record for a specific draw round and game model version.

## Scope

Tickets determine eligibility, validation, winner calculation, claims, refunds, and auditability. A ticket is not a guaranteed prize, investment asset, tradable security, transferable NFT by default, or perpetual entitlement.

## Ticket Fields

Fields may include `ticket_id`, `draw_id`, `game_model_id`, `game_model_version`, owner reference, selected numbers or positions, ticket hash, entry timestamp, payment asset if any, ticket price if any, status, metadata URI if any, Merkle leaf if applicable, transaction hash if on-chain, claim status, and refund status if any.

## Ticket Statuses

Statuses may include Draft, Pending Payment, Valid, Invalid, Cancelled, Refunded, Drawn, Winning, Non-Winning, Claimable, Claimed, Expired, and Disputed.

## Soulbound Tickets

CryptoDraw may use soulbound or non-transferable tickets if implemented. This can reduce resale complexity, fraud risk, claim authorization ambiguity, and compliance concerns. Non-transferability must be enforced by contract or platform logic before it is claimed publicly.

## Validation

Validation should confirm that the draw is open, the game model is active, the selection matches rules, payment or entry requirements are valid, user restrictions are satisfied if implemented, duplicate policy is followed, and maximum ticket policy is enforced if defined.

## Privacy

Ticket metadata must avoid exposing sensitive user data. Commitment hashes may hide selections until close if implemented. Off-chain indexing must protect private information.

## Related Pages

- [Draw Lifecycle](draw-lifecycle.md)
- [Merkle and Indexing](merkle-and-indexing.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)

