# Liquidity Pools

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

Liquidity pools enable decentralized swaps by holding reserves of tokens.

## Pool Concepts

A pool is a smart contract or accounting structure holding assets for swaps or liquidity. Reserves are token amounts held in the pool. Pool pairs contain two tokens in pair-based pools. Liquidity depth is available liquidity for swaps. Pool share is a liquidity provider's portion of the pool.

## Pool Types

Pool types may include constant product pools, stable pools, weighted pools, concentrated liquidity if supported, treasury pools under policy, and incentivized pools when governance-approved.

## Pool Record

A pool record should include pool identifier, chain, tokens, pool type, reserves, fee tier, liquidity depth, volume, LP count if available, treasury participation, incentive status, risk level, security review status, governance status, and status.

## Lifecycle

Pool lifecycle includes request or detection, token listing status check, risk review, governance review if official or incentivized, security review if new contract or pool type, pool creation or registration, liquidity addition, monitoring, reporting, and pause, deprecation, or unlisting where needed.

## Risk Considerations

Risks include impermanent loss, low volume, token failure, smart contract vulnerability, liquidity migration, low-liquidity manipulation, and stable asset depeg.

## Related Pages

- [LP Model](lp-model.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Risk and Disclosures](risk-and-disclosures.md)
