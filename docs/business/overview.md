---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Business Overview"
summary: "Provides the governed overview for Business within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "BUSINESS"
authority_level: "CORE"
author: "Axodus Business"
owner: "Axodus Business"
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
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Business Overview

---

## Purpose

Axodus Business is the structured intake, scoping, coordination, and delivery
runtime for client, DAO, partner, community, and internal ecosystem requests.
It is the operational infrastructure nucleus that transforms demand into
scoped products, infrastructure, services, and ecosystem assets.

Business converts demand into scoped, reviewable, governable, and accountable
work. It is not a generic sales channel, a traditional software house, a
freelancer marketplace, a replacement for governance, or an automatic
acceptance path for every request.

## Scope

Business may receive and coordinate:

- client and partner service requests;
- DAO and sub-DAO service requests;
- governance implementation and plugin requests;
- custom development and integration requests;
- Academy, Marketplace, Trading, BBA, ACS, and MCP requests;
- consulting, technical assessment, automation, documentation, and reporting requests.

Business must identify the responsible nucleus, define scope, map dependencies, classify risk, detect governance touchpoints, coordinate delivery, manage change requests, validate acceptance, and preserve records.

Business may coordinate contracted development, community-driven development,
and strategic Axodus-first development. Not every Business initiative begins
with a paying client, and not every Business output should be read as a
commercially available product.

## Ecosystem Role

Business is the formal demand intake and service coordination layer for
Axodus. It converts requests from clients, DAOs, partners, communities, and
internal teams into scoped work that can be reviewed, priced, governed,
delivered, validated, and reported.

Business also acts as an ecosystem asset-construction nucleus. It may help
turn scoped development into reusable Axodus-owned infrastructure, tools,
modules, or platforms when the approved operating model supports that path.

## Operating Model

The Business runtime is organized around these layers:

1. Intake: capture the request, requester, objective, and initial context.
2. Classification: identify request type, nucleus ownership, risk, and governance sensitivity.
3. ACS-assisted analysis: summarize context, detect gaps, flag risks, and draft questions.
4. Human review: validate the request and decide whether it can move forward.
5. Governance routing: escalate sensitive DAO, treasury, tokenomics, plugin, product access, ACS, or public-claim issues.
6. Scoping and estimation: define deliverables, boundaries, assumptions, resources, and acceptance criteria.
7. Delivery coordination: manage tasks, milestones, reviews, and handoffs.
8. Change management: log and assess new or changed requirements.
9. Acceptance and accountability: record delivery, unresolved items, reports, and archive references.

## Development Modes

- Contracted development: requester-funded work under scoped delivery and
  review boundaries.
- Community development: ecosystem or community-driven work where operational
  need exists, but the resulting scope still follows the Business pipeline.
- Strategic development: Axodus-initiated work that may become ecosystem
  infrastructure or other reusable operational assets.

## Responsibilities

- Prevent vague commitments and uncontrolled scope expansion.
- Route governance-sensitive requests to the proper governance layer.
- Ensure ACS outputs are reviewed before becoming commitments.
- Coordinate with product nuclei without bypassing their ownership.
- Maintain clear communication with clients, DAOs, partners, and internal teams.
- Preserve intake, scope, change, delivery, acceptance, and accountability records.

## Documentation Map

- [Request Intake](request-intake.md)
- [Business Runtime](runtime.md)
- [Service Catalog](service-catalog.md)
- [Client Lifecycle](client-lifecycle.md)
- [Delivery Lifecycle](delivery-lifecycle.md)
- [Change Requests](change-requests.md)
- [DAO Service Requests](dao-service-requests.md)
- [Plugin Requests](plugin-requests.md)
- [BBA](bba.md)
- [ACS Integration](acs-integration.md)
- [Governance Alignment](governance-alignment.md)
- [Risk and Compliance](risk-and-compliance.md)
- [Business Accountability](accountability.md)

## Governance Touchpoints

Business must escalate requests that affect DAO federation, governance plugins, treasury actions, tokenomics, reward policy, product access, Marketplace fee policy, Trading access rules, ACS permissions, constitutional alignment, or material public claims.

Business can prepare context and coordinate execution, but it does not approve
governance-sensitive changes alone, does not override Treasury, and does not
provision ACS authority by itself.

## Risk Considerations

Business must avoid undocumented promises, unreviewed public claims, hidden scope expansion, unclear ownership, missing acceptance criteria, and financial or token language that implies guaranteed outcomes.

## Current Status

The Business documentation is under reconstruction. Service availability,
pricing, legal terms, production workflows, and final tooling must be validated
before they are treated as active operating policy.

Marketplace references inside Business should be read as channel and
coordination references, not proof that Marketplace replaces Business as the
operational infrastructure nucleus.

## Future Work

- Define canonical intake templates and request status records.
- Add implementation-ready templates for scopes, proposals, change requests, and acceptance records.
- Align Business workflows with ACS runtime, governance proposal records, and accountability reporting.
