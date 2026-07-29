---
schema_version: "1.0.0"
document_id: "BBAPLT-RPT-028"
aliases: []
document_type: "REPORT"
title: "Agency Experience Review"
summary: "Defines the proposed customer-facing experience for discovering, contracting, reviewing, and receiving Agency services."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.AGENCY.EXPERIENCE.REVIEW"
authority_level: "PROJECT"
author: "BBA Product Governance"
owner: "BBA Product Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Product Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: ["BBA Security Reviewer"]
approver: null
created_date: "2026-07-29"
last_updated: "2026-07-29"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBAPLT-GDE-101"}, {type: "RELATES_TO", target: "BBAPLT-RPT-027"}]
related_epics: ["EPIC-006"]
related_requirements: ["REQ-006-04-001"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Agency Experience", "Agency Product", "Customer Outcome", "Human Governance"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/bba-platform/product/", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Agency Experience Review

## Scope

This report is the incremental review record for `SPRINT-006-04 — Agency
Experience`. It defines product-facing experience semantics without defining
frontend components, APIs, transport, persistence, or implementation behavior.

## Experience Principles

1. Customers navigate by service and outcome, not by internal Platform
   aggregates.
2. Internal Mission, Workflow, Knowledge, Review, Publication, and Asset
   semantics remain available as truthful progress and evidence references.
3. Customer language may simplify presentation but may not redefine canonical
   Domain concepts.
4. Approval, uncertainty, limitations, and accountability remain visible when
   material to the outcome.
5. The experience never implies autonomous institutional authority.

## Workspace Model

The Agency Workspace is the customer's service-oriented view of active work.
It may present:

- selected Agency Product and Customer Outcome;
- briefing, supplied materials, and missing inputs;
- truthful progress and current limitations;
- deliverables, evidence, Asset lineage, and review findings;
- pending approvals, decisions, and required actions;
- authorized delivery or Publication information.

The Workspace is a presentation model. It does not become a new Aggregate,
replace Mission or Workflow, or own the canonical information shown within it.

## Service Hiring Journey

```text
Discover a service
    ↓
Select a category and Agency Product
    ↓
Describe Customer Outcome and submit briefing
    ↓
Provide material, constraints, audience, and approval expectations
    ↓
Review scope, limitations, evidence obligations, and delivery boundary
    ↓
Confirm the proposed service composition
    ↓
Track governed progress and respond to requested decisions
```

Hiring confirms the service contract and expected outcome. It does not itself
authorize publication, alter Platform policies, or create institutional
authority.

## Approval Experience

The experience must make the following explicit whenever applicable:

- what decision is requested;
- which Asset, Deliverable, claim, or Publication is affected;
- what evidence and uncertainty are available;
- what authority and accountability apply;
- what happens after approval, rejection, revision, or escalation;
- whether the action is reversible or creates an immutable version or
  publication record.

An approval action records Human Governance intent. It is not equivalent to a
technical click, Agent output, or customer acknowledgement when a stronger
institutional gate applies.

## Experience Constraints

- Do not expose a customer-facing label as a replacement for a canonical Domain
  concept.
- Do not conceal draft, uncertainty, unsupported evidence, rejection, failure,
  blocked work, or unresolved limitations.
- Do not imply that progress equals approval, publication, delivery, or
  successful external distribution.
- Do not expose another Tenant's information, Assets, Reviews, or outcomes.
- Do not permit an experience action to bypass Human Governance or Connector
  boundaries.
- Do not persist or prescribe technical credentials, transport details, or
  implementation state in the product model.

## Review Status

```text
DRAFT — incremental review in progress
```
