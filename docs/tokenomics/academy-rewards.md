# Academy Rewards

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Academy

---

## Purpose

Academy rewards are a likely use case for PoK-authorized $Neurons issuance.

## Scope

This page explains how Academy can connect to the current token model without inventing locked rewards, staking rewards, or distribution tables.

## Current Model

Academy reward issuance should be modeled as controlled minting:

1. Learner completes a defined educational requirement.
2. Proof-of-Knowledge or equivalent validation confirms eligibility.
3. A structured mint authorization is generated.
4. The authorization is signed through EIP-712.
5. The learner submits the authorization to `PoKMinter.sol`.
6. The contract enforces signature, nonce, amount, daily limit, cooldown, and supply cap.
7. $Neurons is minted if all checks pass.

## Reward Limits

Academy rewards are subject to the same system limits:

- 100 $Neurons maximum per transaction;
- 1,000 $Neurons maximum per user per day;
- 1-hour cooldown between mints;
- global supply cap of 10,000,000 $Neurons.

## Program Requirements

Academy programs should define course or module identifier, proof requirement, authorized reward amount, signer authority, anti-abuse controls, reporting fields, and campaign status.

## Not Currently Defined

The current Neurons Token System does not define a separate locked reward balance, free-course internal credit model, paid-course unlock schedule, or Academy-specific vesting model.

If those models are introduced later, they require contract and policy documentation before being presented as active.

## Abuse Controls

Academy reward systems should defend against completion farming, answer sharing, sybil behavior, repeated claims, authorization reuse, and signer compromise.

## Risk Considerations

Academy rewards are utility and eligibility mechanisms, not income promises or guaranteed financial benefits.

## Related Pages

- [PoK Minting](pok-minting.md)
- [Reward Policy](reward-policy.md)
- [Proof of Knowledge](../academy/proof-of-knowledge.md)
- [Risk and Compliance](risk-and-compliance.md)
