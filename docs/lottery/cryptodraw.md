---
schema_version: "1.0.0"
document_id: "LOTTERY-GDE-002"
aliases: []
document_type: "GUIDE"
title: "CryptoDraw"
summary: "Provides governed cryptodraw guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/lottery/cryptodraw.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# CryptoDraw

---

## Purpose

CryptoDraw is the Axodus blockchain lottery and draw product concept. It is designed for transparent number-combination games with verifiable randomness, auditable ticket records, deterministic prize rules, and accountable settlement.

## Scope

CryptoDraw includes game mode registry, draw management, ticket management, randomness, indexing, prize management, treasury routing, governance controls, and reporting. It does not imply public availability, legal approval, or guaranteed winnings.

## Product Modules

- Game mode registry: rule versions, active modes, deprecated modes, and parameter references.
- Draw manager: round creation, ticket windows, randomness requests, result publication, and status control.
- Ticket manager: ticket creation, selection validation, ticket status, and soulbound behavior if implemented.
- Randomness module: VRF or equivalent randomness integration and failure handling.
- Indexing module: ticket indexing and Merkle root generation if needed.
- Prize manager: tier calculation, prize allocation, claims, and unclaimed prize policy.
- Treasury module: ticket payments, fees, prize pools, reserves, and reports if paid entries exist.
- Governance module: approval of game modes, parameters, public activation, and emergency actions.
- Reporting module: draw, ticket, prize, randomness, treasury, and incident records.

## User Flow

1. User reads game rules, availability limits, and risk disclosures.
2. User selects a game mode and chooses numbers or uses a random pick if supported.
3. The system validates the ticket selection and entry conditions.
4. User reviews cost, prize rules, deadlines, and claim window.
5. A ticket record is created after confirmation.
6. The ticket waits for the draw result.
7. The result is published with randomness and reporting references.
8. Eligible winners follow the claim process within the defined window.

## Product Statuses

Possible statuses include Concept, Specification, Prototype, Testnet, Compliance Review, Governance Review, Paused, Active, and Deprecated. `Active` must only be used for a live scope supported by implementation, governance, security, compliance, and operational records.

## Risk Considerations

Risks include legal availability, randomness failure, smart contract defects, prize accounting errors, user misunderstanding, operational delay, claim disputes, and jurisdiction restrictions.

## Related Pages

- [Game Models](game-models.md)
- [Draw Lifecycle](draw-lifecycle.md)
- [Risk and Compliance](risk-and-compliance.md)
