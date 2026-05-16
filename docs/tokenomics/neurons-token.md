# NEURONS Token

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics

---

## Purpose

This page defines the current NEURONS token specification and documentation framing.

## Token Specification

| Field | Value |
| --- | --- |
| Name | Neurons |
| Symbol | NEURONS |
| Standard | ERC-20 |
| Decimals | 18 |
| Maximum supply | 10,000,000 NEURONS |
| Mint model | Controlled by Proof-of-Knowledge authorization |
| Burn | Supported by architecture |
| Cross-chain | Prepared for LayerZero / OFT v2 |
| Initial network | EVM-compatible |

## Definition

NEURONS is a utility token system designed for controlled issuance, cryptographic authorization, anti-abuse protections, and future cross-chain growth.

The economic design is based on scarcity and controlled minting rather than a predefined allocation table.

## Core Capabilities

- ERC-20 transfer compatibility.
- Maximum supply enforcement.
- Minting through authorized flows only.
- Burn support.
- Role-based access control.
- Emergency pause capability where implemented.
- PoK-based issuance through `PoKMinter.sol`.
- EIP-712 / ECDSA signature verification through `ECDSAVerifier.sol`.
- Future cross-chain adapter support through `NeuronsOFTAdapter.sol`.

## Canonical Naming

Use `NEURONS` for the token symbol and `Neurons` for the token name. `$Neurons` may appear in prose where the documentation refers to the ecosystem token concept, but technical specifications should use `NEURONS`.

## What NEURONS Is Not

NEURONS must not be presented as an investment contract, guaranteed appreciating asset, guaranteed yield token, fixed-income instrument, risk-free reward, or passive income mechanism.

NEURONS documentation must not claim active DAO governance, staking, vesting, liquidity allocation, public sale allocation, or treasury distribution unless those features are implemented and validated.

## Current Status

The current tokenomics model supports a fixed supply cap and controlled issuance. Future ecosystem extensions, including DAO governance, staking, ecosystem rewards, service payments, and multi-chain liquidity, remain future or conditional unless implementation confirms them.

## Related Pages

- [Technical Architecture](technical-architecture.md)
- [Supply and Emission](supply-and-emission.md)
- [PoK Minting](pok-minting.md)
- [Risk and Compliance](risk-and-compliance.md)
