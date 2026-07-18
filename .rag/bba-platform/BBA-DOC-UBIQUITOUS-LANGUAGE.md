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
related_epics: ["EPIC-000", "EPIC-002"]
related_requirements: ["REQ-000-006"]
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
