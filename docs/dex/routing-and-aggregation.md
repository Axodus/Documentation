---
schema_version: "1.0.0"
document_id: "DEX-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Routing and Aggregation"
summary: "Provides governed routing and aggregation guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/routing-and-aggregation.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Routing and Aggregation

---

## Purpose

Routing determines how a swap is executed across available liquidity. Better routing can reduce price impact or improve output, but it does not guarantee best possible execution.

## Concepts

Routes may be direct, multi-hop, split across multiple pools if supported, or supplied by an aggregator. Route scores may consider output, fees, price impact, gas, risk, or other parameters.

## Flow

1. Input and output tokens are selected.
2. Available pools are identified.
3. Token and pool statuses are checked.
4. Candidate routes are generated.
5. Output, fees, gas, and price impact are estimated.
6. Risk flags are added.
7. Selected route is displayed.
8. User confirms the swap.
9. Transaction executes or fails.

## Route Record

A route record should include route identifier, input token, output token, hops, pools, expected output, fees, price impact, gas estimate if available, risk flags, aggregator used if any, and status.

## Aggregation Considerations

External aggregators add dependency risk. The best output may not be the best risk-adjusted route. Gas cost can reduce effective output. Route results can change before execution. Aggregation must not hide token or pool warnings.

## Risk Considerations

Routing is subject to liquidity, fees, chain conditions, token availability, pool safety, external aggregators, and execution timing.
