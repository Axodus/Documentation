---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Compliance and Disclosures"
summary: "Provides governed compliance and disclosures guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "TREASURY"
authority_level: "CORE"
author: "Axodus Treasury"
owner: "Axodus Treasury"
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
relationships: [{type: "RELATES_TO", target: "TREASURY-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/compliance-and-disclosures.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Compliance and Disclosures

---

## Purpose

Treasury documentation must be transparent without making unsafe legal, financial, investment, yield, fund, or return claims.

## Scope

This page defines public disclosure themes, prohibited claims, safe language, review triggers, and privacy or security boundaries.

## Disclosure Themes

- Treasury documentation is for ecosystem transparency and operations, not personal investment advice.
- Treasury strategies and allocations do not guarantee returns.
- Treasury assets and strategies are exposed to market, liquidity, counterparty, smart contract, operational, custody, governance, and regulatory risk.
- Runway, revenue, PnL, exposure, or allocation estimates depend on assumptions.
- Public documentation may summarize information without exposing sensitive security details.
- Material treasury actions are subject to governance, policy, review, and approval paths.
- Some financial structures require qualified review before final public claims.

## Prohibited Claims

Treasury documentation must not claim guaranteed returns, guaranteed APY, risk-free reserves, fixed income without legal review, ETF status without legal basis, audit completion unless a real audit exists, legal compliance unless qualified review exists, impossibility of loss, consistent trading profit, liquidity guarantees from fees, or token appreciation from burns.

## Safe Language

Preferred wording includes treasury sustainability, risk-managed, governance-aligned, reportable, subject to market risk, subject to governance approval, subject to security review, estimated, planned, draft, active if verified, allocation policy, reserve policy, and accountability record.

## Review Triggers

Review is required before public treasury reports, treasury strategy pages, DaaS or ETF DaaS financial claims, derivative or debenture claims, trading revenue claims, treasury fee claims, audit or compliance claims, public wallet or asset reports, incident reports, and governance proposals about treasury.

## Privacy and Security Boundaries

Public materials may include approved asset category summaries, governance decisions, safe execution receipts, risk summaries, reporting periods, and high-level controls.

Public materials must not include private keys, seed phrases, sensitive signer operations, exploitable wallet procedures, risky incident details, or private user and client data.

## Current Status

This page is a documentation guardrail. It is not legal advice and does not replace qualified legal, compliance, accounting, or security review.
