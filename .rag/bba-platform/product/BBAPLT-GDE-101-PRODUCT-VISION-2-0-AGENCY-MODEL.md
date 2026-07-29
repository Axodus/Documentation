---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-101"
aliases: []
document_type: "GUIDE"
title: "BBA Agency Product Vision 2.0 and Agency Model"
summary: "Defines the proposed Agency-facing product composition over the certified BBA Platform without making the extension normative or introducing implementation decisions."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.AGENCY.PRODUCT"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["BBA Security Reviewer"]
approver: null
created_date: "2026-07-28"
last_updated: "2026-07-28"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBAPLT-GDE-001"}, {type: "RELATES_TO", target: "BBAPLT-GDE-008"}, {type: "RELATES_TO", target: "BBA-ADR-0003"}]
related_epics: ["EPIC-006"]
related_requirements: ["REQ-006-01-002"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Product Layer", "Platform", "Agency Runtime", "Agency Product", "Agency Experience"]
implementation_refs: [{repository: "Axodus/BBA-Agency", path: ".rag/architecture/EPIC-IMP-015-BBA-STANDALONE-PRODUCT-SURFACE.md", ref: "ce1e46b", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/BBA-Agency", path: ".rag/architecture/EPIC-IMP-014-FRONTEND-FOUNDATION.md", ref: "ce1e46b", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Agency Product Vision 2.0 and Agency Model

## Normative Status

`PROPOSED / NON_NORMATIVE_PENDING_REVIEW`

This document guides the Product Vision 2.0 review. It does not certify a new
Product Layer, alter the certified Product, Domain, Architecture, or
Development Layers, or authorize implementation.

## Purpose

Define how the BBA Agency presents reusable institutional capabilities as
customer-facing services while preserving the BBA Platform as the canonical
institutional foundation.

## Central Product Principle

> The user consumes Agency services. The user does not operate the Platform
> directly as the primary commercial experience.

The Platform remains the internal source of canonical Mission, Workflow,
Knowledge, Review, Publication, Institutional Asset, Connector, and Human
Governance semantics.

## Product Composition Principle

```text
Agency Product
    = Customer Outcome
    + Service Composition
    + governed capabilities
    + bounded Agents
    + applicable Policies
    + expected Deliverables
```

This equation is a product composition rule, not a Domain Aggregate definition.
It does not grant the Agency Product identity or authority over the composed
Platform concepts.

## Four-Layer Agency Model

```text
BBA Platform
    provides reusable institutional capabilities

Agency Runtime
    coordinates governed agent work

Agency Products
    compose capabilities into contractable services

Agency Experience
    presents customer journeys oriented to outcomes
```

### BBA Platform

The Platform provides tenant-neutral institutional capabilities. Its Domain
entities, bounded contexts, authorities, ownership rules, and invariants remain
canonical and are not renamed for commercial convenience.

### Agency Runtime

The Agency Runtime is the proposed composition and execution-governance layer
between customer-facing products and the Platform. It coordinates Agents,
Capabilities, policies, evidence, review obligations, model selection
concerns, and consumption decisions. It does not acquire institutional
authority from the Platform or from Human Governance.

### Agency Products

An Agency Product is a versioned, declarative composition oriented to a
Customer Outcome. It may reference capabilities, agents, workflows, policies,
knowledge, deliverables, reviews, assets, publications, and connectors.

An Agency Product is not a Domain Aggregate, does not own Platform information,
does not create authority, and does not redefine the lifecycle of Mission,
Workflow, Review, Publication, or Institutional Asset.

### Agency Experience

Agency Experience is the customer-facing layer for service discovery,
briefing, material submission, progress, review, approval, and delivery. It
may use commercial language while preserving the canonical meanings of the
internal Platform concepts.

## Product Vision

BBA Agency turns institutional intent and supplied knowledge into governed,
reviewable, traceable outcomes through specialized AI Workforce capabilities
and human authority. The Agency packages this work as understandable services
without weakening provenance, evidence, accountability, or publication
controls.

## Customer Segments and Roles

- organizations seeking governed knowledge and editorial production;
- research and scientific teams;
- institutional communication and advertising teams;
- governance and policy teams;
- publication-oriented organizations;
- buyers who select a service and define an outcome;
- contributors who provide briefings and source material;
- reviewers and approvers who exercise Human Governance;
- beneficiaries who consume the resulting Institutional Assets or Publications.

## Initial Service Categories

| Category ID | Service category | Customer outcome |
| --- | --- | --- |
| `AGENCY-SERVICE-CATEGORY-001` | Scientific Writing | Produce a governed scientific writing deliverable. |
| `AGENCY-SERVICE-CATEGORY-002` | Advertising | Produce reviewed advertising and campaign materials. |
| `AGENCY-SERVICE-CATEGORY-003` | Governance | Produce governed institutional analysis, policy, or decision material. |
| `AGENCY-SERVICE-CATEGORY-004` | Publication Strategy | Prepare an evidence-based publication and distribution strategy. |
| `AGENCY-SERVICE-CATEGORY-005` | Research | Produce traceable research findings and supporting assets. |

Categories are not individual Agency Products. A Scientific Writing category
may contain products such as Scientific Article or Whitepaper.

## Initial Service Category Contract

| Category ID | Required inputs | Typical deliverables | Required governance | Initial internal capabilities |
| --- | --- | --- | --- | --- |
| `AGENCY-SERVICE-CATEGORY-001` | Briefing, research material, target publication, citation requirements. | Manuscript, abstract, bibliography, submission package. | Evidence and human editorial or publication approval. | Research, Knowledge, structured writing, citation validation, Review. |
| `AGENCY-SERVICE-CATEGORY-002` | Campaign brief, audience, brand constraints, channel intent. | Campaign concepts, copy, creative assets, delivery package. | Human approval for consequential claims and publication. | Audience analysis, creative production, Asset, Review, Connector. |
| `AGENCY-SERVICE-CATEGORY-003` | Governance question, institutional context, evidence, policy constraints. | Analysis, policy material, decision brief, governance record. | Human authority, accountability, and evidence review. | Knowledge, Research, Governance, Review, Lineage. |
| `AGENCY-SERVICE-CATEGORY-004` | Publication objective, audience, source assets, destination constraints. | Publication plan, channel strategy, submission package. | Human publication authority and Connector boundary review. | Knowledge curation, Editorial, Publication, Analytics, Connector. |
| `AGENCY-SERVICE-CATEGORY-005` | Research question, scope, sources, evidence requirements. | Findings, evidence register, synthesis, research assets. | Evidence quality, uncertainty disclosure, and human acceptance. | Research, Knowledge, AI Workforce, Asset, Review. |

Each category remains a product-facing grouping. It does not create a new
Bounded Context, Aggregate, Authority, Ownership model, or technical service.

## Customer Outcome Model

A Customer Outcome is the result a customer expects from a contracted service.
It is not a replacement for Mission, Institutional Asset, Workflow, Review,
Publication, or any other canonical Domain concept.

Outcomes must be expressed with:

- intended result;
- required inputs;
- expected deliverables;
- evidence and quality obligations;
- human approval obligations;
- known limitations;
- delivery or publication boundary.

## Product and Runtime Concerns

The Product Vision may state requirements for quality, latency, privacy,
sovereignty, cost awareness, model selection, fallback, evidence, and human
review. It does not choose providers, models, APIs, databases, queues,
frameworks, deployment topologies, or runtime mechanisms.

## `$Neurons` Placeholder Boundary

`$Neurons` is a reserved and currently undefined economic concept. In this
Product Vision it does not represent a price, currency, token, credit, asset,
right, reward, supply, conversion rate, financial promise, or tokenomic
mechanism.

Possible future investigation areas such as consumption measurement, internal
capacity units, accounting, quotas, or cost representation remain
`UNDECIDED`. Any future definition requires a separate governed decision with
Product, Architecture, Security, Finance, Governance, and applicable legal or
regulatory review.

## Canonical Customer Journey

```text
Briefing
    ↓
Agency Product selection
    ↓
Governed Runtime composition
    ↓
Platform Mission and Workflow coordination
    ↓
Evidence and Institutional Assets
    ↓
Human Review and Approval
    ↓
Publication preparation or authorized Publication
    ↓
Customer delivery
```

## MVP Boundary

The MVP is limited to the five service categories above, explicit customer
briefing and material inputs, governed agent participation, evidence-bearing
deliverables, mandatory human approval for consequential outcomes, and
traceable delivery. Pricing, financial settlement, autonomous institutional
authority, unrestricted publication, and undefined `$Neurons` economics are
outside the MVP until separately governed.

## Journey Responsibility Contract

| Journey stage | Agency responsibility | Platform or governance reference |
| --- | --- | --- |
| Briefing | Capture the customer's intended outcome, inputs, constraints, and approval expectations. | Mission intent and Tenant context. |
| Product selection | Select a category and an Agency Product composition appropriate to the outcome. | Capability and Solution semantics. |
| Runtime composition | Assemble bounded agent work, policies, evidence obligations, and deliverables. | AI Workforce, Workflow, and Human Governance. |
| Platform coordination | Realize the work through canonical institutional capabilities. | Mission, Knowledge, Assets, Review, Publication, and Connectors. |
| Review and approval | Present evidence, findings, decisions, and required human gates. | Human Governance authority and accountability. |
| Delivery | Present the resulting deliverables and their limitations to the customer. | Institutional Asset identity, lineage, and publication boundary. |

The Journey does not bypass a required governance gate, transfer institutional
authority to an Agent or Agency Product, or make a customer-facing label a new
Domain concept.

## External Implementation Context

The `Axodus/BBA-Agency` `.rag` corpus is implementation context, not a
replacement for this normative Documentation corpus. The current handoff
references the frontend foundation and standalone product surface from the
implementation session `019f8f47-2697-7600-8a2b-0057d4786214`. Any future
`EPIC-IMP-016` work must consume an accepted handoff from this Product Vision
review; Documentation does not mutate the external backlog.
