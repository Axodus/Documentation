---
schema_version: "1.0.0"
document_id: "MINING-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Security and Custody"
summary: "Provides governed security and custody guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "MINING"
authority_level: "CORE"
author: "Axodus Mining / Security"
owner: "Axodus Mining / Security"
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
relationships: [{type: "RELATES_TO", target: "MINING-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MINING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/security-and-custody.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Security and Custody

---

## Purpose

Mining operations depend on wallets, payout addresses, pool accounts, validator keys, API keys, infrastructure access, hardware access, monitoring dashboards, and operator credentials.

## Security Scope

Scope includes payout wallets, treasury wallets, pool accounts, worker credentials, validator keys, node keys, API keys, hosting provider access, monitoring dashboards, hardware access, remote management, firmware updates, user dashboard access, and payout configuration.

## Custody Models

Custody models may include treasury custody, user direct payout if approved, pooled accounting if policy supports it, provider custody with counterparty risk, and validator key custody.

## Controls

Controls include multisig for treasury wallets, payout address verification, address change review, transaction monitoring, pool account 2FA if available, read-only pool APIs where possible, validator key separation, slashing protection if applicable, least privilege access, secure remote access, firmware integrity, logging, authentication, and privacy controls.

## Incident Types

Incidents include payout address compromise, pool account compromise, validator key issues, hardware tampering, dashboard data exposure, and monitoring failure.

## Security Note

Public documentation must not expose private keys, exact credentials, sensitive facility data, or exploitable procedures.
