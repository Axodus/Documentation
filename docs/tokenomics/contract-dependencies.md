# Contract Dependencies

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Security

---

## Purpose

Tokenomics claims must match contract behavior. This page defines the contract dependencies for the current Neurons Token System.

## Core Contracts

- `Neurons.sol`: ERC-20 token, maximum supply, mint, burn, role controls, and pause controls.
- `PoKMinter.sol`: controlled minting through Proof-of-Knowledge authorization, limits, and cooldown.
- `ECDSAVerifier.sol`: EIP-712 / ECDSA verification, domain validation, and nonce protection.
- `NeuronsOFTAdapter.sol`: planned cross-chain adapter for LayerZero OFT v2.

## Required Validation

Before public claims are marked `Active`, implementation must validate:

- token name, symbol, decimals, and maximum supply;
- initial emission configuration;
- mint role boundaries;
- PoK authorization flow;
- EIP-712 domain and typed data;
- ECDSA signer recovery;
- nonce consumption;
- maximum per transaction;
- maximum per user per day;
- cooldown;
- supply cap enforcement;
- burn behavior;
- pause behavior;
- access-control roles;
- LayerZero adapter behavior if enabled.

## Contract Behavior Statuses

Use `Verified`, `Draft`, `Planned`, `Experimental`, `Needs Review`, or `Deprecated`.

## Not Currently Defined

The current contract model does not define allocation percentages, vesting schedules, staking rewards, DAO treasury rules, liquidity allocation, or public sale distribution.

## Events and Reporting

Events should support mint reporting, burn reporting, nonce use, authorization failures where appropriate, role changes, pause events, and future cross-chain transfer reporting.

## Security Requirements

The system should include unit tests, integration tests, replay attack tests, daily limit abuse tests, cooldown tests, supply cap tests, role review, pause testing, and external audit consideration before high-value production use.

## Related Pages

- [Technical Architecture](technical-architecture.md)
- [PoK Minting](pok-minting.md)
- [Cross-Chain Readiness](cross-chain-readiness.md)
- [Risk and Compliance](risk-and-compliance.md)
