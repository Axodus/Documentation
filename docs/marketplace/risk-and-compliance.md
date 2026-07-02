---
schema_version: "1.0.0"
document_id: "MARKET-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Risk and Compliance"
summary: "Provides governed risk and compliance guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "MARKETPLACE"
authority_level: "CORE"
author: "Axodus Marketplace"
owner: "Axodus Marketplace"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-17"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "MARKET-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MARKETPLACE"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/marketplace/risk-and-compliance.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk and Compliance

---

## Purpose

Marketplace risk includes commerce risk, seller risk, buyer protection risk, token payment risk, locked credit risk, regulated category risk, data privacy risk, and claim risk.

## Scope

This page defines documentation guardrails and review triggers. It does not provide legal conclusions and must not describe Marketplace as legally compliant without qualified review.

## Risk Categories

Risks include seller claim risk, buyer expectation risk, payment failure, token volatility, locked credit liability, settlement failure, refund disputes, regulated categories, financial claims, data privacy, fraud, and security incidents.

## Prohibited Claims

Do not claim guaranteed seller revenue, guaranteed buyer results, guaranteed ROI, guaranteed trading profit, guaranteed DeFi yield, risk-free purchases, withdrawable or transferable locked rewards without confirmation, credits with cash value without policy, official seller without verification, certified status without basis, legal compliance without review, audit status without audit, or active DEX checkout without implementation.

## Safe Language

Use language such as marketplace listing, seller status, subject to listing terms, subject to refund policy, subject to review, subject to governance approval, subject to tokenomics policy, locked rewards may be restricted, internal credit if approved, results may vary, no guaranteed revenue, no guaranteed buyer outcome, active if verified, planned, and draft.

## Sensitive Categories

Sensitive categories include Trading strategy access, DeFi or DaaS services, lottery-related products, token sales or investment-like products, professional certifications, legal, tax or financial advice, security audit claims, restricted goods, identity or KYC services, and high-value custom services.

## Review Triggers

Triggers include new sensitive categories, token or locked reward spending claims, seller official or verified claims, financial performance claims, DeFi or Trading listings, refund policy changes, marketplace fee changes, DEX checkout integration, public marketplace revenue claims, and dispute or fraud incidents.
