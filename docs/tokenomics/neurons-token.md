# $Neurons Token

Status: Draft
Version: 0.2.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics

---

## Purpose

This page defines the current $Neurons token specification and documentation framing.

## Token Specification

| Field | Value |
| --- | --- |
| Name | Neurons |
| Symbol | NEURONS |
| Standard | ERC-20 |
| Decimals | 18 |
| Supply policy | Pending approved public disclosure |
| Mint model | Controlled by Proof-of-Knowledge authorization |
| Burn | Supported by architecture |
| Cross-chain | Prepared for LayerZero / OFT v2 |
| Initial network | EVM-compatible |

## Definition

$Neurons is a utility token system designed for controlled issuance, cryptographic authorization, anti-abuse protections, and future cross-chain growth.

The economic design is based on controlled minting rather than a predefined public allocation table.

## Core Capabilities

- ERC-20 transfer compatibility.
- Supply policy enforcement where implemented and approved for disclosure.
- Minting through authorized flows only.
- Burn support.
- Role-based access control.
- Emergency pause capability where implemented.
- PoK-based issuance through `PoKMinter.sol`.
- EIP-712 / ECDSA signature verification through `ECDSAVerifier.sol`.
- Future cross-chain adapter support through `NeuronsOFTAdapter.sol`.

## Canonical Naming

Use `$Neurons` as the canonical public documentation name. Use `NEURONS` only when referencing the technical ERC-20 symbol.

## What $Neurons Is Not

$Neurons must not be presented as an investment contract, guaranteed appreciating asset, guaranteed yield token, fixed-income instrument, risk-free reward, or passive income mechanism.

$Neurons documentation must not claim active DAO governance, staking, vesting, liquidity allocation, public sale allocation, or treasury distribution unless those features are implemented and validated.

## Current Status

The current tokenomics model supports controlled issuance. Future ecosystem extensions, including DAO governance, staking, ecosystem rewards, service payments, and multi-chain liquidity, remain future or conditional unless implementation and disclosure approval confirm them.

## Related Pages

- [Technical Architecture](technical-architecture.md)
- [Supply and Emission](supply-and-emission.md)
- [PoK Minting](pok-minting.md)
- [Risk and Compliance](risk-and-compliance.md)
