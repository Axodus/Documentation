---
schema_version: "1.0.0"
document_id: "SEC-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Smart Contract Security"
summary: "Provides governed smart contract security guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/security/smart-contract-security.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Smart Contract Security

---

## Purpose

This document defines security expectations for smart contracts.

## Requirements

- Do not invent production addresses.
- Do not claim audits unless verified.
- Document upgradeability and admin permissions.
- Isolate treasury-sensitive flows.
- Validate token, reward, and governance behavior against implementation.

## Risk

Smart contracts can fail, be exploited, or behave differently than intended.

## Draft Controls

Smart contract documentation must distinguish planned, local, testnet, audited, deployed, paused, deprecated, and production-gated states. It must not publish production addresses, deployment status, audit status, upgrade authority, treasury controls, or execution claims without evidence.

Contract-facing documentation should identify:

- contract purpose and owner;
- deployment status if verified;
- audit or review status if verified;
- upgrade and pause assumptions;
- privileged roles;
- treasury or token movement sensitivity;
- known limitations and unresolved review items.

## Publication Boundary

This page does not certify any contract as audited, secure, deployed, or production-ready. Contract claims require implementation evidence, security review, and governance/coordinator approval where applicable.
