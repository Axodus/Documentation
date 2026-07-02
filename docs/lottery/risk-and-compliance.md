---
schema_version: "1.0.0"
document_id: "LOTTERY-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Risk and Compliance"
summary: "Provides governed risk and compliance guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "LOTTERY"
authority_level: "CORE"
author: "Axodus Lottery / CryptoDraw"
owner: "Axodus Lottery / CryptoDraw"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/lottery/risk-and-compliance.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk and Compliance

---

## Purpose

Lottery products are legally sensitive and may be regulated differently across jurisdictions. This page defines documentation guardrails and review triggers; it is not legal advice.

## Scope

CryptoDraw must not be described as legally available, licensed, regulated, compliant, audited, or open to users unless qualified review and project records support that claim.

## Risk Categories

Risks include gambling or lottery regulation, jurisdiction differences, age restrictions, consumer protection, AML/KYC triggers if applicable, financial promotion, randomness integrity, prize settlement, security, operational failure, and data privacy.

## Prohibited Claims

Do not claim guaranteed winnings, guaranteed profit, risk-free participation, legal availability everywhere, licensing without verified license, regulated status without verified basis, compliance without qualified review, official public lottery affiliation without confirmation, VRF protection beyond its actual scope, audited status without audit, fixed prize commitment without funded pool and policy, or token price return from lottery activity.

## Safe Language

Use language such as lottery product concept, planned, draft, testnet only, subject to governance approval, subject to security review, subject to compliance review, subject to jurisdiction restrictions, no guaranteed winnings, verifiable randomness if implemented, prize rules defined by draw, claim window applies, and availability may be restricted.

## Review Triggers

Required review triggers include public launch, paid ticket sales, prize funding, $Neurons ticket use, free promotional entries, jurisdiction or age access, legal or licensing claims, VRF or audit claims, partnership or public lottery references, marketing campaigns, treasury revenue claims, and fixed prize commitments.

## Required Reviews

Compliance or legal review is required for public availability, paid entries, prizes, jurisdiction claims, and licensing claims. Security review is required for contracts handling tickets, funds, randomness, vaults, or claims. Treasury review is required for prizes, fees, reserves, refunds, and unpaid prizes. Governance review is required for game activation, parameters, fees, and emergency actions.

## Related Pages

- [Responsible Participation](responsible-participation.md)
- [Governance Alignment](governance-alignment.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
