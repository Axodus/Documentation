---
schema_version: "1.0.0"
document_id: "CORE-GDE-008"
aliases: []
document_type: "GUIDE"
title: "Canonical Terminology"
summary: "Defines public Axodus terms for nuclei, tenants, authority, implementation, maturity, activation, and Proof of Knowledge."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-05-16"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/terminology.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Canonical Terminology

| Term | Canonical Public Meaning |
| --- | --- |
| Axodus | A governed modular ecosystem and operational infrastructure connecting specialized nuclei, participants, authority, products, and evidence-producing lifecycles. |
| Nucleus | A bounded responsibility domain for a product, operation, control, or shared capability. It is not automatically an active service. |
| Tenant | A bounded local governance domain operating under shared constitutional and portfolio constraints. It is not generic SaaS tenancy. |
| Governance | The rules, roles, processes, and evidence through which authorized decisions are proposed, reviewed, approved, executed, suspended, or reversed. |
| Authority | The formally assigned right to decide or act within a defined scope. Documentation, software, agents, and request existence do not create authority. |
| Runtime | The state, handoff, validation, incident, and receipt model that coordinates work. A runtime model is not proof of production automation. |
| Trinity | An ACS-associated advisory role for planning, decomposition, estimation, operational analysis, and risk context. Trinity is not a final approver or autonomous executor. |
| ACS | The Axodus coordination and protection surface for analysis, policy checks, alerts, local holds, recommendations, and receipts. |
| Proof of Knowledge | A proposed, non-cryptographic-by-default model for scoped learning or qualification evidence. It is not automatically certification, anti-sybil proof, governance eligibility, or token authorization. |
| Publication | An authorized release to a defined audience. Draft existence is not publication approval. |
| Activation | An explicit authority and technical transition that enables a bounded capability. Code or architecture alone is not activation. |

## Status Dimensions

Do not use one status to represent all maturity dimensions:

- **Document maturity:** draft, reviewed, approved, deprecated.
- **Concept maturity:** directional, defined, governed.
- **Implementation maturity:** absent, represented, prototype-verified,
  implemented.
- **Authority state:** conceptual, represented, active-if-verified, authorized,
  suspended, blocked.
- **Production state:** not enabled, sandbox, limited, production.
- **Publication state:** private, draft, approved, public.

Words such as current, active, operational, implemented, validated, ready, and
production must identify the dimension they describe.

## Prohibited Interpretations

Do not use guaranteed profit, passive income guarantee, risk-free yield,
guaranteed token appreciation, unrestricted autonomous AI, finalized legal
approval, or security guarantee.
