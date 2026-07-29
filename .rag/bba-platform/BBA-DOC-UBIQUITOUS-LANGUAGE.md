---
schema_version: "1.0.0"
document_id: "BBA-REF-002"
aliases: []
document_type: "REFERENCE"
title: "BBA Platform Ubiquitous Language"
summary: "Defines the canonical vocabulary and semantic constraints for BBA Platform documentation and implementation."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Domain Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBA-REF-001"}, {type: "RELATES_TO", target: "BBA-ADR-0002"}, {type: "RELATES_TO", target: "BBA-ADR-0003"}]
related_epics: ["EPIC-000", "EPIC-002", "EPIC-006"]
related_requirements: ["REQ-000-006", "REQ-006-05-001"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Ubiquitous Language

| Canonical Name | Definition | Motivation | Forbidden Synonyms | Aliases | Related Concepts |
| --- | --- | --- | --- | --- | --- |
| Mission | Central unit of purposeful work in the platform. | Gives every operation an accountable scope. | project, campaign as universal root | none | Asset, Workforce, Steward |
| Institutional Asset | Produced or managed result with institutional value. | Unifies papers, content, branding, releases, and other outputs. | document as universal synonym | asset | Mission, Review, Publication |
| AI Workforce | Set of specialized agents assembled to execute mission work. | Separates agent capability from human authority. | autonomous authority, bot team | workforce | Mission, Human Governance |
| Human Governance | Human direction, review, approval, and accountability. | Preserves human authority over consequential decisions. | human-in-the-loop as complete model | governance | Steward, Review |
| Steward | Person or role accountable for directing and approving a scope. | Names accountable authority without conflating it with execution. | operator, coder as default | owner when explicitly scoped | Mission, Asset |
| Connector | Boundary adapter for an external system or channel. | Prevents direct integration assumptions in the core. | integration as core entity | adapter | Mission, Publication |
| Capability | Durable platform ability. | Separates reusable ability from a customer-specific solution. | feature as permanent domain concept | none | Solution |
| Solution | Combination of capabilities for a use case. | Allows tenant and market variation without changing the core. | product as universal synonym | offering | Capability, Tenant |
| Tenant | Isolated organizational consumer of the platform. | Makes multi-tenancy explicit and neutral. | Axodus as default tenant | customer where contractually applicable | Mission, Solution |
| Review | Governed assessment of an asset, claim, or transition. | Makes quality and approval explicit. | informal check | validation when scope is clear | Asset, Publication |
| Publication | Authorized release of an asset to a destination. | Separates creation from public distribution. | deploy as universal synonym | release when context is editorial | Asset, Connector |
| Agency | Customer-facing service business that composes BBA Platform capabilities under governed execution. | Makes the commercial experience explicit without changing Platform semantics. | platform as customer-facing service, agency as Domain Aggregate | BBA Agency | Platform, Agency Product, Agency Runtime, Agency Experience |
| Agency Runtime | Proposed composition and execution-governance layer that coordinates Agency Product work over the Platform. | Separates agent execution concerns from customer-facing products and canonical Domain concepts. | runtime as institutional authority, Agent as authority | none | Agency Product, AI Workforce, Human Governance |
| Agency Product | Versioned declarative composition oriented to a Customer Outcome. | Packages reusable capabilities into understandable and contractable services. | product as Aggregate, service as Mission | none | Agency, Service Composition, Customer Outcome, Capability |
| Agency Experience | Customer-facing layer for discovering, briefing, tracking, reviewing, approving, and receiving Agency services. | Presents outcomes without exposing internal concepts as the primary commercial navigation. | frontend as product model, dashboard as Domain entity | none | Agency Product, Customer Outcome, Human Governance |
| Service Composition | Declarative arrangement of capabilities, Agents, policies, workflows, reviews, deliverables, assets, publications, and connectors for an Agency Product. | Makes product assembly explicit while preserving ownership and authority boundaries. | pipeline as universal product meaning, composition as Aggregate | none | Agency Product, Capability, Workflow, Institutional Asset |
| Customer Outcome | Intended result a customer expects and evaluates from a contracted Agency service. | Connects product composition to measurable customer value without replacing Domain concepts. | deliverable as outcome, output as accepted result | outcome | Agency Product, Deliverable, Review, Publication |

## Entry Contract

Each term entry has the following fields:

- `Canonical Name`;
- `Definition`;
- `Motivation`;
- `Forbidden Synonyms`;
- `Related Concepts`;
- `Lifecycle`;
- `Examples`;
- `Non Examples`;
- `Aliases`.

## Lifecycle Requirements

Every future term entry must include canonical name, definition, motivation,
forbidden synonyms, aliases, related concepts, lifecycle, examples, and
non-examples. Domain documents must use canonical names exactly.

## Agency Extension Entry Details

The following entries are additive Product Governance vocabulary. They do not
redefine the existing Domain vocabulary and remain subject to Product Vision
2.0 review.

| Canonical Name | Lifecycle | Examples | Non Examples |
| --- | --- | --- | --- |
| Agency | Proposed → Reviewed → Accepted or Retired | BBA Agency service business | BBA Platform Domain Aggregate |
| Agency Runtime | Proposed → Reviewed → Accepted or Retired | Governed coordination layer | Database, queue, or runtime process |
| Agency Product | Proposed → Versioned → Retired | Scientific Article composition | Mission or Aggregate |
| Agency Experience | Proposed → Reviewed → Accepted or Retired | Hiring and approval experience | API or frontend framework |
| Service Composition | Proposed → Versioned → Retired | Capabilities plus Agents plus Deliverables | Technical pipeline |
| Customer Outcome | Proposed → Accepted, Rejected, or Superseded | Publication-ready article | Unreviewed draft treated as success |

Each new entry uses the same motivation, forbidden-synonym, alias, related
concept, lifecycle, example, and non-example contract as the canonical
vocabulary. The terms are not normative until `BBAPLT-GDE-101` is promoted by
a later governed Product review.
