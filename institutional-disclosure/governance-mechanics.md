---
schema_version: "1.0.0"
document_id: "PRIV-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Governance Mechanics"
summary: "Private operational baseline for Axodus governance mechanics and decision boundaries."
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
created_date: "2026-07-06"
last_updated: "2026-07-06"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["GOVERNANCE", "ACS", "TOKENOMICS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Governance Mechanics

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| legal_review | SEPARATE_DISCLOSURE_GATE_REQUIRED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |

This document is an internal planning baseline. It is not a public governance
charter, legal opinion, operating constitution, fundraising document, investor
material, or statement that public governance is active.

## Purpose and Disclosure Status

This document records private Axodus governance mechanics so Track C tokenomics
can be drafted against a controlled institutional baseline. It separates
founder-decided positions from unresolved parameters and keeps operational
details out of public documentation and academic-paper surfaces.

External use is prohibited until a separate disclosure decision and legal review
are completed.

## Governance Architecture Overview

Axodus governance is modeled as a staged private structure with three intended
levels:

- Executive DAO: founder-led and core-operator governance for sensitive,
  early-stage, high-impact, treasury-sensitive, or unresolved decisions.
- Boardroom: expert and delegated review layer for structured proposals,
  risk review, prioritization, and governance readiness.
- Community DAO: broad holder participation layer for non-sensitive,
  community-facing, mature, and externally safe decisions after activation.

Current status is founder-controlled planning. The structure is not presented as
publicly active, decentralized in practice, legally binding, or externally
approved.

## Three-Tier Decision Structure

| Layer | Intended Role | Current Status | Boundary |
| --- | --- | --- | --- |
| Executive DAO | Final private authority for early sensitive decisions | Founder-decided planning layer | Does not create public legal authority |
| Boardroom | Expert review, delegated deliberation, escalation preparation | Not yet activated as independent authority | Cannot override Executive DAO during private baseline |
| Community DAO | Broad holder participation for mature public-safe topics | Not active | Cannot be claimed as live decentralization |

Executive DAO retains private baseline authority until first-adopter governance
creates validated operating procedures. Boardroom and Community DAO are design
layers, not proof of active decentralization.

## Voting Mechanics

Founder-decided planning positions:

- Boardroom uses quadratic-voting logic as the preferred deliberation model.
- Community DAO uses simple one-token-one-vote logic for broad community votes.
- Sensitive decisions escalate to Executive DAO before external action.
- Community voting is not active until governance activation criteria are
  separately approved.

Unresolved voting parameters:

- Quorum percentages: [TBD — pending governance decision with first adopters]
- Vote-cycle durations: [TBD — pending governance decision with first adopters]
- Veto criteria: [TBD — pending governance decision with first adopters]
- Boardroom internal approval threshold: [TBD — pending governance decision with first adopters]
- Community proposal eligibility threshold: [TBD — pending governance decision with first adopters]

## Delegation for Sub-1-Neuron Holders

The private design allows sub-1-Neuron holders to delegate participation to an
eligible representative, pool, or Boardroom-recognized delegate once delegation
rules exist. Delegation is a participation design objective, not an active
governance right.

Unresolved delegation parameters:

- Delegate eligibility: [TBD — pending governance decision with first adopters]
- Delegate removal process: [TBD — pending governance decision with first adopters]
- Minimum delegation unit: [TBD — pending governance decision with first adopters]
- Abuse and capture controls: [TBD — pending governance decision with first adopters]

## AI Meta-Supervision Architecture

Named agents may support review, synthesis, risk challenge, and operational
coordination, but they are not legal authorities, final governance authorities,
treasury controllers, or substitutes for accountable human approval.

| Agent | Private Role | Authority Boundary |
| --- | --- | --- |
| Smith | Adversarial review, abuse detection, unsafe-claim challenge | May recommend blocking; cannot independently veto final governance |
| Morpheus | Strategy, governance narrative, ecosystem coherence | May advise; cannot create binding governance outcomes |
| Trinity | Financial, treasury, trading, and execution-risk review | May flag risk; cannot move funds or promise outcomes |
| RedHat | Security posture, infrastructure risk, operational hardening | May escalate security concerns; cannot bypass governance controls |
| Mariana | Deep research, evidence mapping, long-horizon institutional memory | May surface context; cannot approve decisions |

Escalation triggers include treasury-sensitive claims, tokenomics changes,
external disclosure, public governance claims, named-agent authority ambiguity,
legal-risk language, or any attempt to bypass Executive DAO review.

Community contestability path: [TBD — pending governance decision with first adopters]

## Tenant and Federation Governance Split

The private model separates tenant-local governance from federation-level
governance:

- Tenant governance may use local policies or local tokens where separately
  approved.
- Federation governance uses central `$Neurons`-based governance design where
  applicable.
- Tenant-local decisions must not be represented as federation-wide mandates.
- Federation decisions must not silently override tenant-specific operating
  constraints without an approved escalation path.

Revenue split between federation and tenant layers:
[TBD — pending governance decision with first adopters]

## Supervision Rules

Private supervision follows these rules:

- Founder-decided items remain explicitly labeled as founder-decided planning
  positions.
- TBD items remain unresolved until first-adopter governance or separate
  authority resolves them.
- AI agents may review, recommend, summarize, challenge, and escalate.
- AI agents may not execute votes, move treasury value, approve public release,
  sign legal positions, or finalize tokenomics.
- Human operators remain accountable for applying or rejecting agent outputs.

## Founder-Decided Baseline Items

- The intended governance structure has Executive DAO, Boardroom, and Community
  DAO layers.
- Boardroom deliberation uses quadratic-voting logic as a design preference.
- Community DAO voting uses simple one-token-one-vote logic as a design
  preference.
- Sub-1-Neuron participation should be supported through delegation once rules
  are approved.
- Tenant governance and federation governance must remain distinguishable.
- Track C tokenomics must not proceed as public material and may proceed only
  as private drafting after Track B closure.

## Open Items and Unresolved Parameters

- Quorum percentages: [TBD — pending governance decision with first adopters]
- Vote-cycle durations: [TBD — pending governance decision with first adopters]
- Veto criteria: [TBD — pending governance decision with first adopters]
- Boardroom internal approval threshold: [TBD — pending governance decision with first adopters]
- Federation/Tenant revenue split ratio: [TBD — pending governance decision with first adopters]
- Community DAO activation criteria: [TBD — pending governance decision with first adopters]
- Delegate eligibility and removal: [TBD — pending governance decision with first adopters]
- Community contestability path for agent-supported decisions: [TBD — pending governance decision with first adopters]

## Non-Paper Boundary and Disclosure Gate

This document must not be copied into public documentation, cited by an
academic paper, summarized in public repositories, linked from public
navigation, used for fundraising, circulated to investors, or treated as legal
approval. Any externalization requires a separate disclosure decision and legal
review.
