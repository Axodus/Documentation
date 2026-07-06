---
schema_version: "1.0.0"
document_id: "TOKEN-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Tokenomics Overview"
summary: "Provides the governed overview for Tokenomics within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TOKENOMICS"
authority_level: "CORE"
author: "Axodus Tokenomics"
owner: "Axodus Tokenomics"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-05"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/tokenomics/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Tokenomics Overview

---

## Purpose

Axodus Tokenomics documents the draft/candidate `$Neurons` Token System: an ERC-20 token infrastructure model with controlled issuance, cryptographic authorization, anti-abuse limits, and planned cross-chain expansion, subject to source-of-truth verification before public finalization.

## Scope

This documentation covers `$Neurons` token specifications, supply and emission rules, Proof-of-Knowledge minting, EIP-712 / ECDSA authorization, contract architecture, burn support, LayerZero OFT preparation, reporting, risks, and future utility surfaces.

It does not define allocation percentages for team, investors, advisors, treasury, liquidity, or community because those distributions are not part of the current documented model.

## Ecosystem Role

Tokenomics is the monetary design and token utility documentation layer for Axodus. It explains how `$Neurons` supply, controlled issuance, Proof-of-Knowledge minting, utility assumptions, reporting, and future token-enabled workflows should be described without inventing allocation, staking, vesting, DAO, or investment mechanics that are not yet defined.

## Current Tokenomics Model

The current model is **controlled issuance tokenomics**, not allocation-based tokenomics.

`$Neurons` uses:

- supply policy documented only through approved public release materials;
- ERC-20 compatibility with 18 decimals;
- minting controlled by Proof-of-Knowledge authorization;
- EIP-712 typed structured data;
- ECDSA signature validation;
- nonce-based replay protection;
- per-transaction, per-user daily, and cooldown limits;
- burn support;
- preparation for LayerZero OFT v2 cross-chain expansion.

These parameters require source-of-truth verification against contracts, implementation records, and governance/security review before they can be treated as final public tokenomics.

## What Is Not Defined

The current model does not define:

- team vesting;
- investor allocation;
- advisor allocation;
- DAO treasury allocation;
- public sale allocation;
- staking rewards;
- liquidity allocation;
- fixed percentage distribution tables.

These items must remain `Planned`, `Future`, or `Requires Review` unless contracts, governance records, and implementation documents define them.

## System Pillars

| Pillar | Description |
| --- | --- |
| Supply policy | Public supply parameters require approved disclosure before publication |
| Controlled issuance | Minting requires authorization, nonce, cooldown, daily limits, and transaction limits |
| Security | EIP-712, ECDSA, Access Control, Pausable, and replay protection reduce operational risk |
| Cross-chain readiness | Architecture is prepared for LayerZero OFT v2 adapter expansion |

## Documentation Map

- [$Neurons Token](neurons-token.md)
- [Technical Architecture](technical-architecture.md)
- [Supply and Emission](supply-and-emission.md)
- [PoK Minting](pok-minting.md)
- [Contract Dependencies](contract-dependencies.md)
- [Cross-Chain Readiness](cross-chain-readiness.md)
- [Utility Model](utility-model.md)
- [Reward Policy](reward-policy.md)
- [Academy Rewards](academy-rewards.md)
- [Marketplace Utility](marketplace-utility.md)
- [Governance Participation](governance-participation.md)
- [Treasury Alignment](treasury-alignment.md)
- [Locked Rewards Status](locked-rewards.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [Risk and Compliance](risk-and-compliance.md)

## Risk Considerations

`$Neurons` must not be documented as an investment product, guaranteed return asset, guaranteed yield token, passive income mechanism, or legally finalized governance/staking system. Future utility requires contract, product, security, and governance validation.

## Draft Boundary

This page is draft/candidate tokenomics documentation. It does not approve public sale terms, allocation percentages, staking economics, treasury allocation, DEX liquidity, investment claims, APY, or production token launch status.
