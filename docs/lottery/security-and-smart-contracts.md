---
schema_version: "1.0.0"
document_id: "LOTTERY-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Security and Smart Contracts"
summary: "Provides governed security and smart contracts guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "LOTTERY"
authority_level: "CORE"
author: "Axodus Lottery / Security"
owner: "Axodus Lottery / Security"
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
relationships: [{type: "RELATES_TO", target: "LOTTERY-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["LOTTERY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/lottery/security-and-smart-contracts.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Security and Smart Contracts

---

## Purpose

Lottery smart contracts can hold funds, issue tickets, request randomness, calculate results, and settle prizes. Security review is mandatory before any production draw.

## Possible Components

Possible components include game mode registry, ticket manager, soulbound ticket contract if implemented, draw manager, VRF consumer, prize manager, prize vault, claims contract, Merkle claim contract, treasury fee router, and governance controller.

## Security Checklist

Rules must be immutable or versioned per draw. Ticket purchase must close before randomness request. Tickets must not be added after close. Randomness mapping, VRF callback access, prize accounting, payout logic, duplicate claim prevention, refund logic, reentrancy, access control, pause controls, upgradeability, Merkle proof logic, non-standard token behavior, tests, deployment verification, and incident response must be reviewed.

## Security Statuses

Statuses may include Not Reviewed, Internal Review, External Audit Pending, Audited, Testnet Only, Approved for Pilot, Approved for Production, and Paused. `Audited` must only be used when an audit exists with scope and report.

## Incident Response

Incident response should detect the issue, pause draw or claims where possible, preserve evidence, assess user, prize, and treasury impact, notify governance, security, and operations, determine remediation, publish or archive an incident report, and update contracts, tests, documentation, and policy.

## Related Pages

- [Security Overview](../security/overview.md)
- [Randomness and VRF](randomness-and-vrf.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Risk and Compliance](risk-and-compliance.md)
