---
schema_version: "1.0.0"
document_id: "DEX-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Risk and Disclosures"
summary: "Provides governed risk and disclosures guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/risk-and-disclosures.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk and Disclosures

---

## Purpose

DEX users face technical, financial, execution, and token risks. Documentation must educate users and avoid overpromising.

## Risk Categories

Risks include slippage, price impact, MEV, liquidity, impermanent loss, token risk, listing risk, smart contract risk, approval risk, failed transaction risk, bridge or multichain risk, and stable asset depeg.

## Disclosure Themes

- Swaps can fail or execute differently from the quote.
- Liquidity can change or disappear.
- LP fees and incentives are variable.
- Impermanent loss can occur.
- Token visibility does not mean Axodus endorsement.
- Users should verify tokens, routes, approvals, and transaction details.

## Prohibited Claims

Do not claim guaranteed profit, guaranteed liquidity, guaranteed swap execution, risk-free swaps, safe LP returns, impermanent-loss-free LP positions, official token status without confirmation, audited status without an audit, MEV protection without a verified mechanism, or guaranteed best execution.

## Safe Language

Use language such as estimated quote, minimum received, variable liquidity, subject to slippage, subject to MEV risk, listing is not endorsement, LP fees are variable, impermanent loss possible, subject to smart contract risk, active if verified, planned, and draft.

## Related Pages

- [Swap Model](swap-model.md)
- [LP Model](lp-model.md)
- [MEV and Execution Risk](mev-and-execution-risk.md)
- [Listing Policy](listing-policy.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
- [Academy and User Education](academy-and-user-education.md)
