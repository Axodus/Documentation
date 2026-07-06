# PoK Minting

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Academy

---

## Purpose

PoK minting defines how $Neurons can be issued through Proof-of-Knowledge authorization and cryptographic validation.

## Scope

This page covers the `PoKMinter.sol` and `ECDSAVerifier.sol` flow, including EIP-712 signatures, ECDSA verification, nonces, limits, cooldown, and replay protection.

## Mint Rules

| Rule | Value |
| --- | ---: |
| Maximum per transaction | 100 $Neurons |
| Maximum per user per day | 1,000 $Neurons |
| Cooldown between mints | 1 hour |
| Supply policy limit | Pending approved public disclosure |

## Effective User Limit

```txt
per-transaction limit = 100 $Neurons
daily user limit = 1,000 $Neurons
cooldown = 1 mint per hour
```

A user can only reach the daily limit by completing multiple valid operations while respecting cooldown and authorization rules.

## EIP-712 Authorization

EIP-712 allows structured, readable authorization messages. A mint authorization should bind the signature to specific data such as recipient, amount, nonce, verifying contract, chain ID, and application domain.

## ECDSA Verification

The verifier recovers the signer from the EIP-712 signature and confirms that the signer is authorized for the mint flow. Invalid signatures, invalid domains, reused nonces, and unsupported parameters must be rejected.

## Replay Protection

Each authorization uses a nonce. Once consumed, the nonce cannot be reused.

```txt
1. Mint authorization is generated.
2. Authorization includes recipient, amount, and nonce.
3. Structured message is signed through EIP-712.
4. Contract recovers signer with ECDSA.
5. Nonce is validated.
6. Nonce is consumed.
7. Signature cannot be reused.
```

## Detailed Mint Flow

1. User qualifies for a token issuance event.
2. System generates a PoK mint authorization.
3. Authorization is signed using EIP-712.
4. User submits authorization to `PoKMinter.sol`.
5. `PoKMinter.sol` calls `ECDSAVerifier.sol`.
6. System validates signature, nonce, transaction limit, daily limit, cooldown, and supply cap.
7. `Neurons.sol` mints $Neurons to the recipient.
8. The nonce is marked used.
9. The issuance is recorded on-chain.

## Risk Considerations

Risks include signer compromise, invalid authorization generation, replay attempts, daily-limit abuse attempts, cooldown bypass attempts, and integration mistakes between off-chain eligibility and on-chain verification.
