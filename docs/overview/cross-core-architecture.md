---
schema_version: "1.0.0"
document_id: "CORE-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Cross-Core Architecture"
summary: "Explains how Axodus nuclei exchange requests, decisions, signals, assets, financial instructions, and evidence without transferring authority."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS.ARCHITECTURE"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-07"]
related_adrs: []
related_cores: ["AXODUS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/cross-core-architecture.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Core Architecture

Axodus is a federation of bounded nuclei connected through reviewable
contracts. A cross-core interface carries a request, decision, signal, asset,
instruction, or receipt. It does not silently transfer authority from one
nucleus to another.

## Layers

| Layer | Nuclei | Responsibility |
| --- | --- | --- |
| Authority | Governance, federated DAOs, accountable owners | Rules, approval, escalation, suspension, reversal |
| Coordination | Business, Runtime | Intake, planning, state, handoffs, validation, incidents |
| Intelligence | ACS, Trinity, other bounded agents and MCPs | Analysis, estimates, policy checks, alerts, local holds |
| Knowledge | Academy, Proof of Knowledge | Learning, assessment, scoped qualification evidence |
| Products | Marketplace, Trading, Mining, Lottery, DeFi, DEX, BBA | Specialized products, services, and distribution |
| Financial | Treasury, Tokenomics, authorized contracts | Custody policy, economic authority, utility and distribution rules |
| Interface | AxodusAPP, product UIs, APIs | Bounded input and authorized state presentation |
| Assurance | Security, Accountability | Controls, incidents, reports, decisions, and receipts |

## Cross-Core Contract

Every material interface should identify:

- producer, consumer, and accountable owner;
- request or event type;
- minimum necessary data;
- authority required for the next transition;
- current implementation and activation state;
- failure, timeout, hold, and escalation behavior;
- evidence produced when the transition completes.

## Key Interfaces

| Producer | Consumer | Artifact | Boundary |
| --- | --- | --- | --- |
| Entry surface | Business | Demand intake record | Intake is not approval. |
| Business | Trinity | Planning request | Context is bounded; output remains advisory. |
| Trinity | Business | Plan or estimate | Human review precedes commitment. |
| Business or product owner | Governance | Decision package | Governance authority must match scope. |
| Governance | Runtime or executor | Decision | Decision does not prove execution. |
| Business or owner | ACS | Analysis request | ACS does not become process owner. |
| ACS | Runtime or owner | Alert or local hold | Local hold is not production enforcement. |
| Business | Marketplace | Asset package | Ownership and release authority are required. |
| Academy / PoK | Consumer | Qualification evidence | Consumer independently decides eligibility. |
| Product | Treasury | Economic-effect request | No movement without financial authority. |
| Treasury | Tokenomics or executor | Authorized instruction | Signing and execution must be separately enabled. |
| Runtime | Accountability | Lifecycle or incident receipt | Missing evidence remains visible. |

## Data Boundaries

Public state may be published only after authority and disclosure review.
Operational records are shared on a minimum-necessary basis. Personal, client,
security, credential, vulnerability, custody, pricing, strategy, and signing
details remain private and separately controlled.

## Runtime Boundary

Business and ACS have committed prototype surfaces; AxodusAPP has a read-only
portfolio surface. These do not establish one integrated production runtime.
Governance activation, Treasury execution, token issuance, provider access,
wallet signing, contract writes, financial execution, and Lottery release
remain independently evidence-gated.
