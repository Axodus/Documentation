---
schema_version: "1.0.0"
document_id: "DEX-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Security and Smart Contracts"
summary: "Provides governed security and smart contracts guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DEX"
authority_level: "CORE"
author: "Axodus DEX / Security"
owner: "Axodus DEX / Security"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/dex/security-and-smart-contracts.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Security and Smart Contracts

---

## Purpose

DEX smart contracts can handle swaps, pools, routing, liquidity, fees, approvals, and user funds. Security review is mandatory before production deployment or official use.

## Contract Components

Potential components include factory, pool contract, router, fee controller, incentive controller, listing registry, and treasury or fee receiver if implemented.

## Security Checklist

Security review should cover pool math, fee logic, rounding and precision, reentrancy, token approvals, non-standard ERC-20 behavior, price manipulation, oracle dependencies, access control, upgradeability, emergency pause, router path safety, MEV and sandwich risk, test coverage, deployment verification, and incident response.

## Statuses

Use `Not Reviewed`, `Internal Review`, `External Audit Pending`, `Audited`, `Issues Found`, `Approved For Test`, or `Approved For Production`. Do not claim `Audited` unless a real audit exists with scope and report.

## Incident Response

Incident response should detect the issue, pause contracts or UI if possible, assess user and treasury impact, notify required stakeholders, investigate root cause, mitigate or patch, publish or archive incident report as appropriate, and update policy, tests, or contracts.

## Related Pages

- [Security Overview](../security/overview.md)
- [Governance Alignment](governance-alignment.md)
- [Reporting and Accountability](reporting-and-accountability.md)
