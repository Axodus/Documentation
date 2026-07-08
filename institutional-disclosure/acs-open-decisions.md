---
schema_version: "1.0.0"
document_id: "PRIV-RPT-013"
aliases: []
document_type: "REPORT"
title: "ACS Open Decisions"
summary: "Private decision register for unresolved ACS scoring, veto, governance, and RedHat execution parameters."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D1"
authority_scope: "DOCUMENTATION.PRIVATE_DISCLOSURE"
authority_level: "PROJECT"
author: "Axodus Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: null
created_date: "2026-07-08"
last_updated: "2026-07-08"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["ACS", "GOVERNANCE", "SECURITY", "TREASURY", "ACADEMY", "MARKETPLACE", "BUSINESS", "TRADING", "MINING", "LOTTERY"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Open Decisions

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_review | REQUIRED_BEFORE_EXTERNAL_USE |

## Decision Register

| Decision Area | Current Status | Current Default or Note | Dependency Owner | TBD Marker Where Unresolved |
| --- | --- | --- | --- | --- |
| scoring model criteria by core | Unresolved | ACS is intended to score differently across nuclei, but no per-core criteria are finalized | ACS / Governance | [TBD — pending governance decision with first adopters] |
| veto thresholds and review triggers | Unresolved | Veto is directional policy, not numerically specified | ACS / Governance / Security | [TBD — pending governance decision with first adopters] |
| massive-account and fraud detection thresholds | Unresolved | Fraud and mass-account heuristics exist conceptually without fixed thresholds | ACS / Security | [TBD — pending governance decision with first adopters] |
| silent-drift detection and audit method | Unresolved | No final verification mechanism is defined for behavior-stability assurance | ACS / Governance / Security | [TBD — pending governance decision with first adopters] |
| DAO override recording model | Unresolved | Specific override events should be recorded without silently rewriting agent logic | Governance / ACS | [TBD — pending governance decision with first adopters] |
| RedHat human-approval workflow | Unresolved | Level 3 actions require prior human approval, but the exact workflow is not finalized | Security / Governance / ACS | [TBD — pending governance decision with first adopters] |
| immutable logging backend or pattern | Unresolved | Logging must be append-only or equivalent, but no backend is selected | ACS / Security | [TBD — pending governance decision with first adopters] |
| Trinity sub-agent generation boundaries | Unresolved | Trinity may generate sub-agents, but no final boundary model is defined | ACS / Business | [TBD — pending governance decision with first adopters] |
| Mariana commercialization boundary | Unresolved | Mariana exists as a derived-agent case, but commercialization terms are not defined | Business / Governance / Legal | [TBD — pending governance decision with first adopters] |
| Academy-specific `$Neurons` release veto criteria | Unresolved | ACS may block release on fraud or mass-account detection, but criteria are not finalized | Academy / ACS / Governance | [TBD — pending governance decision with first adopters] |
| Academy quiz and certification fraud criteria | Unresolved | ACS may challenge quiz fraud and certification abuse, but heuristics are not fixed | Academy / ACS / Security | [TBD — pending governance decision with first adopters] |
| Marketplace suspicious-transaction and auction-manipulation criteria | Unresolved | ACS may block or flag suspicious Marketplace behavior, but criteria are not fixed | Marketplace / ACS / Security | [TBD — pending governance decision with first adopters] |
| Mining, Trading, Lottery, and Business signal maturity model | Unresolved | Cross-core signals will be refined as real data emerges | ACS / Mining / Trading / Lottery / Business | [TBD — pending governance decision with first adopters] |
| local versus in-Axodus default policy for RedHat | Unresolved | Private direction prefers local when viable, but the final decision model is not fixed | ACS / Security / Governance | [TBD — pending governance decision with first adopters] |
| legal framing of ACS veto and automated restriction language | Unresolved | Restriction language is sensitive and not yet legally framed | Legal | [TBD — pending governance decision with first adopters] |

## Dependency Notes

### Governance

Governance owns override recording, behavior-change approval, nucleus-specific
policy authority, and escalation paths between Community DAO, Boardroom, and
Executive DAO.

### ACS

ACS owns the internal scoring, anomaly review, sub-agent, and orchestration
logic inputs, but does not finalize policy-sensitive items alone.

### Security

Security owns permission hardening, immutable logging expectations, sensitive
action controls, RedHat approval boundaries, and abuse-detection review.

### Treasury

Treasury owns input wherever ACS decisions can affect release, distribution,
APR-sensitive operations, or treasury-adjacent state changes.

### Academy

Academy owns the domain-specific reward-release, quiz-fraud, certification, and
learner-behavior context consumed by ACS.

### Marketplace

Marketplace owns the domain-specific suspicious-transaction, buyer/seller
behavior, auction-manipulation, and product-demand context consumed by ACS.

### Business

Business owns client-triggered custom-agent flows, Mariana or similar derived
agent packaging, and the commercial context for Trinity-generated deliverables.

### Legal

Legal review is required before ACS veto language, automated restriction
language, or derived-agent commercialization language is treated as externally
usable.

## Boundary

This decision register is private and must not be copied into public
documentation, academic papers, public institutional materials, investor
materials, fundraising materials, or external AI-governance narratives.

It is not legal approval, production enablement, or authorization for public
disclosure.
