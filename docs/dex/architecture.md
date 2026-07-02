---
schema_version: "1.0.0"
document_id: "DEX-GDE-002"
aliases: []
document_type: "GUIDE"
title: "DEX Architecture"
summary: "Provides governed dex architecture guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/architecture.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DEX Architecture

---

## Purpose

Axodus DEX architecture separates swap execution, liquidity pools, routing, listing status, fees, risk controls, governance, treasury, security, monitoring, reporting, and ACS support.

## Architecture Layers

- User interface layer: swap UI, pool UI, LP positions, token warnings, quote previews, and risk disclosures.
- Swap layer: quote generation, swap parameters, minimum received, deadline, transaction submission, and failure handling.
- Pool layer: pool creation, reserves, shares, add/remove liquidity, and pool parameters.
- Router layer: route selection, pathfinding, split routes if supported, and external liquidity integrations.
- Listing layer: token metadata, verification status, official asset status, and risk warnings.
- Fee layer: swap fees, LP fee distribution, protocol fees, treasury fees if approved, and fee reporting.
- Risk layer: slippage controls, price impact warnings, MEV warnings, token risk, liquidity risk, and pool risk.
- Governance layer: listing policy, pool policy, fee policy, incentive policy, emergency pause, and parameter updates.
- Treasury layer: treasury LP positions, liquidity support, fee revenue, and exposure reporting.
- Security layer: contract review, router review, pool logic review, access control, emergency controls, and incident response.
- Monitoring layer: liquidity metrics, volume, fees, price impact, failed transactions, suspicious pool activity, and incidents.
- Reporting layer: DEX, pool, fee, treasury exposure, and incident reports.
- ACS layer: analysis, risk flags, report drafts, listing review support, and route or liquidity summaries.

## Core Objects

Core objects include `TokenListing`, `Pool`, `SwapQuote`, `LPPosition`, `FeeRecord`, and `DEXReport`.

## Integration Surfaces

DEX integrates with DeFi, Tokenomics, Treasury, Trading, Marketplace, Governance, Academy, ACS, Security, and Accountability. Integration does not mean that any route, token, pool, fee, or settlement model is live unless verified.

## Architecture Invariants

Listings must distinguish official, verified, community, warning, and unverified assets. Swap docs must explain slippage and price impact. LP docs must explain impermanent loss. Treasury liquidity requires policy and reporting. Smart contracts require security review before production use.
