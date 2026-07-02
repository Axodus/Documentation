---
schema_version: "1.0.0"
document_id: "DEX-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Liquidity Pools"
summary: "Provides governed liquidity pools guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DEX"
authority_level: "CORE"
author: "Axodus DEX"
owner: "Axodus DEX"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "DEX-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DEX"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/liquidity-pools.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Liquidity Pools

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
