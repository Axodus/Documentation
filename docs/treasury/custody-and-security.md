---
schema_version: "1.0.0"
document_id: "TREASURY-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Custody and Security"
summary: "Provides governed custody and security guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/treasury/custody-and-security.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Custody and Security

---

## Purpose

Treasury assets require strong custody and security controls. Transparency must not expose secrets or exploitable operational details.

## Scope

This document describes custody models, security principles, safe wallet registry fields, permission controls, execution security, incident types, and custody risks.

## Custody Models

- Multisig for material treasury wallets.
- Hardware wallets for secure private key storage.
- Smart contract wallets with rule, permission, or module support.
- Exchange accounts for trading or liquidity purposes, with counterparty and account risk.
- Protocol positions for DeFi strategies, with smart contract and liquidity risk.
- Operational hot wallets with limited balances, narrow purpose, and monitoring.

## Security Principles

Treasury security should apply least privilege, separation of duties, defense in depth, limited hot wallets, review before wallet or permission changes, incident readiness, and strict no-secret exposure.

## Wallet Registry Fields

Safe public or internal records may include wallet identifier, public address if safe, chain or platform, purpose, custody model, asset types, risk level, status, reporting category, governance reference, and security review status.

Never publish private keys, seed phrases, full signer procedures, internal API credentials, bypass details, or unprotected admin paths.

## Permission Controls

Permission controls may include signer roles, spending limits, time locks, allowlisted destinations, transaction simulation, multisig thresholds, emergency pause, key rotation, access revocation, and monitoring alerts. Public docs should describe these controls conceptually unless specific configuration is approved for publication.

## Execution Security Checklist

Before material execution, operators should confirm approved scope, source, destination, amount, chain, network, token contract, simulation where possible, signer authority, phishing or address-poisoning checks, execution receipt requirement, and post-execution balance check.

## Incident Types

Incidents may include key compromise, unauthorized transaction, exchange account issue, smart contract exploit, address error, phishing, or impersonation. Responses should revoke, rotate, migrate, pause, investigate, escalate, report, and update controls according to policy.

## Risk Considerations

Custody risk includes single points of failure, hot wallet loss, exchange counterparty risk, smart contract bugs, signer coordination failure, and over-disclosure.
