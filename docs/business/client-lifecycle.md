---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-005"
aliases: []
document_type: "GUIDE"
title: "Client Lifecycle"
summary: "Defines the lifecycle baseline for Business-managed external, DAO, partner, and internal engagements within the Axodus documentation corpus."
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
created_date: "2026-06-05"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}, {type: "RELATES_TO", target: "BUSINESS-GDE-004"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/client-lifecycle.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Client Lifecycle

## Purpose

The client lifecycle defines how external clients, partners, DAOs, sub-DAOs, tutors, creators, and internal stakeholders move from first contact to delivery, acceptance, support, renewal, or closure.

## Scope

This lifecycle applies to Business-managed engagements. It does not replace governance approval, security review, legal review, treasury authorization, or product nucleus ownership.

## Lifecycle Stages

1. Lead or initial contact: identify the requester and initial interest.
2. Qualification: determine whether the request fits Axodus services, principles, and capacity.
3. Intake: collect structured request data.
4. Discovery: understand business context, objective, constraints, and expected outcome.
5. Classification: identify request type, responsible nucleus, risk, and governance touchpoints.
6. Scope and proposal: define deliverables, timeline, resources, funding model, and acceptance criteria.
7. Approval and onboarding: confirm authority, records, communication channel, and delivery setup.
8. Delivery: perform scoped delivery work against approved scope.
9. Change management: handle new requests or scope changes.
10. Acceptance: confirm whether deliverables match approved scope.
11. Support or iteration: define post-delivery support or the next phase.
12. Closure or renewal: close the engagement or create a new scoped cycle.

## Client Types

- External companies requesting blockchain products, integrations, BBA campaigns, or custom development.
- DAOs and sub-DAOs requesting plugins, dashboards, reporting, federation support, or product access.
- Partners requesting joint programs, Academy courses, Marketplace distribution, or launches.
- Internal nuclei requesting documentation, integration, product, or operational support.
- Tutors and creators requesting course publishing, validation, Marketplace listing, or revenue model support.

## Qualification Criteria

Business should assess strategic fit, feasibility, risk, value, and integrity. Requests should align with Axodus principles, be possible to scope, have understandable dependencies, avoid unacceptable risk, define meaningful outcomes, and avoid attempts to bypass governance or disclosure standards.

## Communication Principles

Business communication should be clear about status, scope, uncertainty, dependencies, decisions, and change requests. It must avoid overpromising, claiming unimplemented features as live, guaranteeing financial outcomes, or treating silence as acceptance.

## Red Flags

Common red flags include requests for guaranteed financial results, attempts to bypass governance, unreviewed token claims, unrealistic timelines, refusal to define scope, sensitive access without a security model, fake audit or partnership language, unclear DAO authority, refusal to include risk disclosures, or unauthorized use of the Axodus brand.

## Acceptance Criteria

Acceptance criteria should include deliverables, functional requirements, documentation requirements, review owner, validation method, known limitations, unresolved items, support period if any, and handoff requirements.

## Current Status

The lifecycle is a documentation baseline. Specific CRM tooling, status storage, and commercial agreement templates remain planned and require coordinator, Business owner, legal/compliance, and security review where applicable.

Funding models, proposal formats, onboarding mechanics, and agreement templates
should be read as directional operating structure only. They are not finalized
commercial, legal, treasury, or financial frameworks by default.

This page does not approve commercial terms, treasury movement, tokenomics commitments, governance outcomes, production delivery promises, or financial results.

Business delivery language refers to scoped service delivery only. It does not authorize transaction execution, wallet signing, treasury operations, governance execution, or production deployment.
