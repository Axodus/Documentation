---
schema_version: "1.0.0"
document_id: "SEC-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Wallet Security"
summary: "Provides governed wallet security guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "SECURITY"
authority_level: "CORE"
author: "Security"
owner: "Security"
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
relationships: [{type: "RELATES_TO", target: "SEC-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["SECURITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/security/wallet-security.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Wallet Security

---

## Purpose

Wallet security documentation helps users and developers understand signing and permission risks.

## Requirements

- Clearly show network and transaction intent.
- Avoid blind approvals.
- Document token approvals and revocation paths where applicable.
- Treat wallet-protected flows as sensitive.

## Draft Controls

Wallet documentation must distinguish education, preview, simulation, approval, signing, and execution. Draft pages must not imply that wallet signing, treasury movement, settlement, swaps, payouts, or on-chain writes are enabled unless the relevant product documentation and governance/security approvals support that status.

Wallet-facing content should describe:

- which network is expected;
- what action the user is reviewing;
- whether the action is read-only, simulated, testnet, or production-gated;
- what permissions or approvals may be requested;
- how users can identify risk before signing;
- where revocation or support guidance lives when applicable.

## Publication Boundary

This page does not approve any wallet flow for production use. Wallet execution claims require security review, product owner review, and explicit coordinator approval before publication.
