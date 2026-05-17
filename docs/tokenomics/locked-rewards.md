# Locked Rewards Status

Status: Needs Review
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics

---

## Purpose

This page clarifies that locked rewards are not part of the current Neurons Token System design.

## Current Status

The current token model defines controlled minting through Proof-of-Knowledge, not a locked reward balance system.

Locked rewards, internal credits, vesting schedules, unlock conditions, and marketplace-spendable locked balances are **not currently defined** in the $Neurons contract model described here.

## What Is Supported Instead

The current supported mechanism is authorized minting:

- eligibility or Proof-of-Knowledge is validated;
- an EIP-712 authorization is signed;
- `PoKMinter.sol` enforces amount limits, daily limits, cooldown, nonce, and supply cap;
- $Neurons is minted if all checks pass.

## Future Possibility

Locked rewards may be reconsidered in the future only if a specific contract or accounting model defines:

- whether locked balances exist;
- whether they are transferable;
- whether they can be spent;
- whether they can vote;
- whether they unlock;
- whether they create treasury or accounting obligations.

## Documentation Rule

Do not describe locked rewards as active, spendable, transferable, claimable, or governance-eligible unless contract behavior and policy confirm those properties.

## Related Pages

- [Reward Policy](reward-policy.md)
- [Academy Rewards](academy-rewards.md)
- [Contract Dependencies](contract-dependencies.md)
- [Risk and Compliance](risk-and-compliance.md)
