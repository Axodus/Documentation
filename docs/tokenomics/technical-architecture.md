# Technical Architecture

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Security

---

## Purpose

This document describes the technical architecture of the Neurons Token System.

## Scope

The architecture separates the ERC-20 token, mint control, cryptographic verification, and future cross-chain adapter layer. It does not publish deployment addresses or claim production audit status.

## Components

| Contract | Function |
| --- | --- |
| `Neurons.sol` | Main ERC-20 token with maximum supply, mint, burn, access control, and pause controls |
| `PoKMinter.sol` | Proof-of-Knowledge mint controller with limits and cooldown |
| `ECDSAVerifier.sol` | EIP-712 / ECDSA signature verification and nonce tracking |
| `NeuronsOFTAdapter.sol` | Adapter prepared for LayerZero OFT v2 cross-chain expansion |

## `Neurons.sol`

`Neurons.sol` is the economic core of the system. It implements ERC-20 behavior, enforces the 10,000,000 $Neurons maximum supply, permits minting only through authorized roles or contracts, supports token burn, and may support emergency pause behavior.

## `PoKMinter.sol`

`PoKMinter.sol` controls token issuance. A mint requires a valid Proof-of-Knowledge authorization, signature validation, nonce protection, amount limits, daily user limits, cooldown compliance, and remaining supply availability.

## `ECDSAVerifier.sol`

`ECDSAVerifier.sol` validates structured EIP-712 messages through ECDSA recovery. It binds the authorization to specific data such as recipient, amount, nonce, verifying contract, chain ID, and domain.

## `NeuronsOFTAdapter.sol`

`NeuronsOFTAdapter.sol` prepares $Neurons for future cross-chain operation through LayerZero OFT v2 patterns. The final bridge model may use burn/mint or lock/mint depending on adapter configuration and security review.

## Architecture Flow

```txt
User or application
  -> mint request
  -> Proof-of-Knowledge authorization
  -> EIP-712 signature
  -> PoKMinter.sol
  -> ECDSAVerifier.sol
  -> validation of signature, nonce, limits, cooldown, and supply cap
  -> Neurons.sol
  -> $Neurons minted to recipient
```

## Security Position

The modular design improves auditability and reduces operational risk by separating token state, mint policy, cryptographic verification, and cross-chain integration.
