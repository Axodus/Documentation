# Randomness and VRF

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

Lottery fairness depends on randomness that users and reviewers can verify.

## Scope

CryptoDraw should use verifiable randomness, such as Chainlink VRF or an equivalent mechanism, where appropriate and available. Documentation must not claim VRF is active unless implemented and verified.

## Requirements

The randomness source must be defined before draw opening. Randomness must be requested after ticket close. The result must be auditable, draw derivation must be deterministic, failure policy must be defined, and the randomness receipt should be included in the draw report.

## VRF Concepts

VRF means verifiable random function. A randomness request asks a provider or protocol for a random value. Fulfillment delivers the value and proof. A callback receives the value. A seed or random word is mapped into the draw result space.

## Flow

1. Ticket window closes.
2. Draw manager locks the ticket set.
3. Randomness request is submitted.
4. The randomness provider generates and fulfills randomness.
5. Draw result is derived from randomness and game rules.
6. Result is published with randomness reference.
7. The draw report records source, request, fulfillment, and derivation.

## Failure Scenarios

Failures may include request failure, callback failure, network outage, insufficient subscription or fee, contract pause, delay, or invalid response. Policy options include retry, draw delay, cancellation and refund, governance review, or emergency pause.

## Related Pages

- [Draw Lifecycle](draw-lifecycle.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
- [Reporting and Accountability](reporting-and-accountability.md)

## Verification Boundary

A randomness design must identify request, entropy or VRF source, commitment,
fulfilment, verification, ordering, timeout, retry, bias controls, and audit
record. Contract or prototype logic does not prove a live oracle, fair
production draw, legal approval, or consumer availability. Missing or delayed
randomness must fail closed and prevent finalization rather than select an
alternative silently.

