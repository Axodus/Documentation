# Cross-Chain Readiness

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Tokenomics / Security

---

## Purpose

This document describes the planned cross-chain direction for $Neurons.

## Scope

The system is prepared for future expansion through `NeuronsOFTAdapter.sol` and LayerZero OFT v2 patterns. This page does not claim that bridge deployment is live.

## Expected Model

The final adapter may use burn/mint or lock/mint depending on implementation, security review, and LayerZero configuration.

In a burn/mint model:

```txt
Chain A:
user sends $Neurons to bridge
tokens are burned or locked

LayerZero:
cross-chain message is validated

Chain B:
equivalent tokens are released or minted
```

## Goals

- Expand $Neurons to multiple EVM-compatible networks.
- Improve accessibility for users.
- Enable future multi-chain liquidity.
- Preserve global supply integrity.
- Separate token logic from bridge logic.

## Supply Integrity

Cross-chain behavior must preserve the global supply model. Any adapter configuration must prevent unintended inflation across chains.

## Validation Requirements

Before activation, cross-chain support requires testnet validation, message validation, bridge failure testing, supply reconciliation, role review, operational monitoring, incident response procedures, and security review.

## Risk Considerations

Cross-chain systems introduce bridge risk, message validation risk, adapter misconfiguration, liquidity fragmentation, operational risk, and multi-chain accounting complexity.
