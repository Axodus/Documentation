---
schema_version: "1.0.0"
document_id: "PRIV-RPT-009"
aliases: []
document_type: "REPORT"
title: "Marketplace Open Decisions"
summary: "Private decision register for unresolved Marketplace architecture, settlement, licensing, and integration parameters."
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
related_cores: ["MARKETPLACE", "TREASURY", "TOKENOMICS", "GOVERNANCE", "BUSINESS", "ACADEMY", "ACS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Marketplace Open Decisions

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
| exact price-oracle provider | Unresolved | A price-oracle boundary is intended for conversion-sensitive flows, but no provider is selected | Integrations / Treasury | [TBD — pending governance decision with first adopters] |
| commission and conversion routing for third-party products | Unresolved | Marketplace may capture commissions and fees while preserving source-platform payment logic | Treasury / Marketplace | [TBD — pending governance decision with first adopters] |
| seller settlement model by product origin | Unresolved | Native and third-party products are expected to follow different settlement paths | Treasury / Marketplace / Governance | [TBD — pending governance decision with first adopters] |
| accepted-asset policy by listing type | Unresolved | Multi-asset support exists conceptually without final listing-policy mapping | Marketplace / Governance | [TBD — pending governance decision with first adopters] |
| native-product revenue path to central treasury | Unresolved | Native product value is expected to aggregate through central treasury direction | Treasury / Governance | [TBD — pending governance decision with first adopters] |
| tenant sub-marketplace commission rules | Unresolved | Tenant channels may earn performance-linked value, but no final commission rules exist | Marketplace / Governance / Treasury | [TBD — pending governance decision with first adopters] |
| royalty contract model for modular licensing | Unresolved | Continuous royalty exists as a private concept without final contract model | Legal / Business / Governance | [TBD — pending governance decision with first adopters] |
| licensing negotiation mode direct vs orchestrated future flow | Unresolved | Direct negotiation is available conceptually and orchestrated flow is a future option | Business / Legal / Integrations | [TBD — pending governance decision with first adopters] |
| infrastructure responsibility for licensed deployments | Unresolved | Partner-owned infrastructure is allowed conceptually, but support boundaries are not fixed | Business / Marketplace | [TBD — pending governance decision with first adopters] |
| recommendation/search sophistication roadmap | Unresolved | Recommendation and search expansion are planned but not detailed | Marketplace | [TBD — pending governance decision with first adopters] |
| Business-nucleus reseller or affiliation integration | Unresolved | Future reseller or affiliate integration is contemplated but not specified | Business / Marketplace / Governance | [TBD — pending governance decision with first adopters] |
| SLA and scalability for multiple simultaneous marketplaces | Unresolved | Multi-deployment scale direction exists without service-level definition | Marketplace / Business / Governance | [TBD — pending governance decision with first adopters] |
| manual import vs API-sync governance rules | Unresolved | Both ingestion paths are contemplated without final policy boundaries | Governance / Marketplace / Integrations | [TBD — pending governance decision with first adopters] |
| legal framing of royalty and treasury-linked revenue language | Unresolved | High-risk commercial and tokenomics wording remains blocked pending legal review | Legal | [TBD — pending governance decision with first adopters] |

## Dependency Notes

### Governance

Governance owns unresolved policy around Marketplace listing categories, asset
acceptance, treasury-routing approval, tenant-commission authority,
ingestion-path policy, and licensing escalation. Governance must preserve the
exact unresolved marker until first-adopter decisions exist.

### Treasury

Treasury owns unresolved questions around central-treasury intake,
commission-conversion routing, seller settlement separation by origin, and any
conversion-sensitive reporting or reconciliation logic.

### Marketplace

Marketplace owns dependency input for listing-type policy, recommendation and
search roadmap, operational deployment expectations, tenant curation logic, and
platform-specific execution boundaries. Marketplace does not finalize treasury
or legal rules alone.

### Business

Business owns dependency input for reseller or affiliate alignment, modular
licensing packaging, client deployment expectations, and negotiation workflow
handling. Business does not independently approve royalty economics.

### Legal

Legal review is required before Marketplace language related to royalties,
treasury-linked revenue, commissions, seller settlement, dividends, or APR is
treated as externally usable. This register does not authorize legal framing.

### Integrations

Integrations owns dependency input for API-sync feasibility, third-party
platform handling, and any future price-oracle selection or orchestrated
negotiation flow. No provider, protocol, or integration contract is finalized
here.

## Boundary

This decision register is private and must not be copied into public
documentation, academic papers, public institutional materials, investor
materials, fundraising materials, or external commercial communications.

It is not legal approval, production enablement, commercial authorization, or
approval to change public APIs, schemas, or runtime interfaces.
