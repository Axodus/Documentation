# Reward Policy

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics

---

## Purpose

Reward Policy defines how NEURONS may be issued through controlled, verifiable eligibility flows.

## Scope

The current reward model should be understood as PoK-authorized issuance. It does not define staking rewards, DAO rewards, vesting rewards, or fixed allocation pools.

## Supported Reward Pattern

Rewards can be supported when they are represented as authorized mint events that satisfy the Neurons Token System rules:

- valid Proof-of-Knowledge or eligibility authorization;
- EIP-712 signature;
- ECDSA validation;
- unused nonce;
- maximum 100 NEURONS per transaction;
- maximum 1,000 NEURONS per user per day;
- 1-hour cooldown;
- global supply cap availability.

## Possible Reward Contexts

Possible reward contexts include Academy participation, knowledge validation, campaign participation, controlled airdrops, and other eligibility-based programs.

Each program requires a defined authorization policy and must avoid financial-return language.

## Reward Policy Object

A reward policy should define program name, source application, eligibility criteria, proof requirement, authorized signer role, maximum reward amount, campaign budget if applicable, per-user limit, cooldown applicability, nonce policy, anti-abuse checks, reporting fields, contract reference, and status.

## Not Currently Defined

The current model does not define locked reward balances, automatic vesting, staking emissions, DAO treasury rewards, investor allocations, or public sale emissions.

## Anti-Abuse Controls

Controls include PoK validation, nonce uniqueness, cooldown, daily limits, per-transaction limits, signer review, campaign monitoring, anomaly detection, and pause controls where implemented.

## Risk Considerations

Risks include reward farming, sybil behavior, signer compromise, off-chain eligibility errors, excessive campaign issuance, user confusion, and contract-policy mismatch.

## Related Pages

- [PoK Minting](pok-minting.md)
- [Academy Rewards](academy-rewards.md)
- [Supply and Emission](supply-and-emission.md)
- [Risk and Compliance](risk-and-compliance.md)
