# MEV and Execution Risk

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

DEX transactions can be exposed to MEV and execution risk. Documentation must explain these risks without overpromising protection.

## Definitions

MEV is value that block builders, validators, searchers, or other actors can extract by ordering, including, or excluding transactions. Front-running occurs when an actor executes before a user transaction. A sandwich attack trades before and after a user swap. Back-running executes after a transaction to capture an opportunity.

## Execution Risk Factors

Risk factors include high slippage tolerance, large trades relative to liquidity, low-liquidity pools, volatile markets, public mempool exposure, inefficient routes, slow confirmation, unusual token logic, and congested networks.

## Possible Protections

Potential mitigations include private transaction submission if supported, slippage limits, price impact warnings, transaction deadlines, route filtering, and user education.

No MEV or execution protection should be described as complete unless the specific mechanism and scope are implemented and verified.

## Related Pages

- [Swap Model](swap-model.md)
- [Slippage and Price Impact](slippage-and-price-impact.md)
- [Risk and Disclosures](risk-and-disclosures.md)
