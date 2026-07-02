---
schema_version: "1.0.0"
document_id: "LOTTERY-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Axodus Lottery Overview"
summary: "Provides the governed overview for Axodus Lottery within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["LOTTERY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/lottery/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus Lottery Overview

---

## Purpose

Lottery is the Axodus nucleus for blockchain-based draw, ticket, randomness, prize, settlement, and accountability models. Its primary product concept is CryptoDraw.

## Scope

This nucleus covers game models, tickets, draw lifecycle, verifiable randomness, Merkle indexing, prize pools, claims, treasury fees, governance controls, security review, ACS support, public reporting, responsible participation, and compliance guardrails.

CryptoDraw is a lottery product concept. It is not a guaranteed winning system, investment product, risk-free participation product, licensed product by default, or legally available product in every jurisdiction.

## Ecosystem Role

Lottery connects to [Governance](../governance/overview.md) for game parameters and activation, [Treasury](../treasury/overview.md) for prize and fee accounting, [Tokenomics](../tokenomics/overview.md) for any $Neurons-related policy, [Academy](../academy/overview.md) for user education, [BBA Agency](../bba-agency/overview.md) for careful public communication, [ACS](../acs/overview.md) for advisory review, [Security](../security/overview.md) for contract and runtime review, and [Accountability](../accountability/overview.md) for draw records.

## Current Status

Lottery documentation is in draft reconstruction. CryptoDraw must not be described as live, licensed, audited, or publicly available unless implementation, legal, security, governance, and operational records support that status.

## Documentation Map

- [CryptoDraw](cryptodraw.md)
- [Game Models](game-models.md)
- [Lotofacil-Style Model](lotofacil-style-model.md)
- [SuperSete-Style Model](supersete-style-model.md)
- [Ticket Model](ticket-model.md)
- [Draw Lifecycle](draw-lifecycle.md)
- [Randomness and VRF](randomness-and-vrf.md)
- [Merkle and Indexing](merkle-and-indexing.md)
- [Prize Pools and Payouts](prize-pools-and-payouts.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Treasury and Fees](treasury-and-fees.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Governance Alignment](governance-alignment.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
- [Operations and Runtime](operations-and-runtime.md)
- [ACS Integration](acs-integration.md)
- [Reporting and Accountability](reporting-and-accountability.md)
- [Responsible Participation](responsible-participation.md)
- [Risk and Compliance](risk-and-compliance.md)

## Risk Considerations

Lottery systems involve legal, jurisdiction, age restriction, consumer protection, randomness, smart contract, treasury, claims, operational, and behavioral risks. Participation must never be presented as profit, income, or a guaranteed prize path.
