---
schema_version: "1.0.0"
document_id: "CORE-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Risk Notices"
summary: "Provides the governed overview for Risk Notices within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-18"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["AXODUS.RISK"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/risk-notices.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk Notices

---

## Purpose

This page defines public risk notice patterns for Axodus documentation.

## General Risk Notice

Axodus documentation must not be interpreted as financial advice, legal advice, tax advice, investment guidance, or a guarantee of outcome.

## Sensitive Nuclei

Strong risk language is required for Trading, DeFi / DaaS, DEX, Mining, Treasury, Tokenomics, Lottery / CryptoDraw, Marketplace, and Business / BBA pages that mention ROI, campaign performance, token utility, strategy access, rewards, fees, or revenue.

## Forbidden Framing

Do not claim guaranteed profit, guaranteed ROI, guaranteed APY, guaranteed yield, passive income guarantee, risk-free outcomes, guaranteed payout, fixed return, guaranteed trading strategy, guaranteed mining revenue, or guaranteed lottery prize.

## Safer Framing

Use language such as estimated, variable, subject to risk, subject to governance approval, subject to security review, active if verified, planned, draft, not guaranteed, and implementation-dependent.

## Visual Pattern

Pages may use a visible risk notice block for sensitive subjects:

<div class="risk-notice">
  <strong>Risk Notice</strong>
  <p>Outcomes are variable and subject to market, technical, governance, operational, regulatory, and user-specific risk. Nothing in this documentation guarantees profit, yield, ROI, payout, or risk-free results.</p>
</div>
