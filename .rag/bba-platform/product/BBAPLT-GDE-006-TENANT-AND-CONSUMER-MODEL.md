---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-006"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Tenant and Consumer Model"
summary: "Defines how Axodus, external tenants, white-label operators, self-hosted users, and SaaS consumers relate to the tenant-neutral BBA Platform."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.PRODUCT"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-005"}, {type: "RELATES_TO", target: "BBAPLT-POL-001"}, {type: "RELATES_TO", target: "BBA-ADR-0003"}]
related_epics: ["EPIC-001"]
related_requirements: ["REQ-001-02-002"]
related_adrs: ["BBA-ADR-0003"]
related_cores: []
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Tenant and Consumer Model

## Tenant Definition

A Tenant is an organizational consumer with its own institutional context,
Missions, knowledge, policies, branding, workforce preferences, review
authority, assets, and publication responsibilities.

Tenant is a product boundary. It does not prescribe a database partition,
network boundary, account model, or deployment topology.

## Consumer Modes

| Consumer mode | Relationship to the platform | Product responsibility |
| --- | --- | --- |
| Axodus consumer | First ecosystem consumer and validation context. | Uses the platform through an Axodus-specific adapter and governance context. |
| External tenant | Independent organization using platform capabilities. | Owns its objectives, knowledge, policies, Missions, and outcomes. |
| White-label operator | Organization presenting the product under its own brand. | Configures its presentation and tenant relationships without changing Core semantics. |
| Self-hosted operator | Organization responsible for operating its own deployment context. | Owns its operating policies, environment decisions, and local authority. |
| SaaS tenant | Organization consuming a managed platform service. | Owns tenant content, authority, Mission decisions, and approved destinations. |
| Platform operator | Party responsible for the shared product service. | Maintains platform-level service obligations without owning tenant decisions. |

## Relationship Model

```text
BBA Platform
  ├── serves → Tenants
  ├── provides → Capabilities
  ├── supports → Solutions
  └── enforces → Core Product Boundaries

Tenant
  ├── owns → Missions
  ├── supplies → Knowledge and Policies
  ├── assigns → Stewards and Reviewers
  ├── receives → Institutional Assets
  └── authorizes → Publications and Destinations
```

## Tenant Responsibilities

Each tenant is responsible for:

- the correctness and rights of its institutional knowledge;
- objectives, policies, and Mission priorities;
- appointing Stewards, Domain Owners, Reviewers, and Publication Authorities;
- accepting or rejecting Institutional Assets;
- approving sensitive claims and external commitments;
- defining permitted publication destinations and audiences;
- interpreting analytics in its own institutional context;
- protecting tenant-specific confidential information.

## Platform Responsibilities

The platform provides:

- shared product capabilities and canonical concepts;
- Mission, workforce, asset, review, publication, and analytics coordination;
- configurable tenant context without changing Core meaning;
- Connector boundaries for approved external destinations;
- evidence and accountability structures;
- clear limits on what the platform or its agents may claim or authorize.

## Tenant-Neutrality Invariants

- No tenant is required to adopt Axodus terminology, governance, branding, or
  product structure beyond the canonical platform language.
- Tenant context must not silently become a Core domain rule.
- Tenant assets, knowledge, policies, and decisions are not shared by default.
- One tenant's publication authority does not authorize another tenant's
  publication.
- A white-label presentation may change identity and commercial context, but
  may not redefine Mission, Asset, Steward, Connector, or Human Governance.

## Consumer and Solution Relationship

A consumer mode determines how an organization receives or operates the
platform. A Solution determines which Capabilities that consumer combines for
a use case. Neither changes the permanent meaning of the Core domain.

## Technical Boundary

This model does not define tenant isolation mechanisms, authentication,
authorization, hosting, deployment, storage, billing, or service topology.
Those decisions must derive from these product responsibilities in later
Architecture and Development work.
