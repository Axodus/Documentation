---
schema_version: "1.0.0"
document_id: "TOKEN-GDE-002"
aliases: []
document_type: "GUIDE"
title: "PoK Minting"
summary: "Defines the documented Proof of Knowledge minting model for $Neurons within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TOKENOMICS"
authority_level: "CORE"
author: "Axodus Tokenomics / Academy"
owner: "Axodus Tokenomics / Academy"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "TOKEN-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/tokenomics/pok-minting.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# PoK Minting

## Purpose

PoK minting defines how $Neurons can be issued through Proof-of-Knowledge
authorization and cryptographic validation.

For public documentation, `Proof of Knowledge` should be read as an
educational-participation and authorization model, not as a guarantee of live
credential issuance or a claim that the described mint flow is already active
in production.

## Scope

This page covers the `PoKMinter.sol` and `ECDSAVerifier.sol` flow, including EIP-712 signatures, ECDSA verification, nonces, limits, cooldown, and replay protection.

It documents a controlled issuance model and prototype-capable mechanism. It
must not be read as a finalized public issuance policy or independently
verified deployment record.

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
