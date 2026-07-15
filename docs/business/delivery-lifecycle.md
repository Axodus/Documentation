---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Delivery Lifecycle"
summary: "Defines the delivery coordination baseline for Business-managed work within the Axodus documentation corpus."
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
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}, {type: "RELATES_TO", target: "BUSINESS-GDE-002"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/delivery-lifecycle.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Delivery Lifecycle

## Purpose

The delivery lifecycle defines how Business coordinates approved work across humans, Agent Coder, ACS, governance, product owners, security reviewers, and requesters until deliverables are accepted and archived.

Delivery begins only after scope is approved.
This page documents delivery coordination, not autonomous transaction
execution, production deployment authorization, wallet signing, treasury
movement, or governance execution authority.

## Scope

This page applies to development, documentation, governance, BBA, Academy, ACS, Marketplace, DAO, reporting, and consulting deliverables coordinated through Business.

## Delivery Inputs

Delivery should begin with an approved scope document, acceptance criteria, assigned owner, required resources, governance approval if required, security review requirements, technical requirements, communication plan, change request policy, and delivery milestones.

## Stages

1. Handoff: convert approved scope into execution tasks, owners, and delivery plan.
2. Planning: align resources, dependencies, milestones, and risks.
3. Implementation: build, configure, document, execute, or prepare artifacts.
4. Internal review: validate deliverables before requester or DAO review.
5. Security or governance review: validate sensitive deliverables involving contracts, plugins, treasury, tokenomics, governance, trading, or ACS permissions.
6. Milestone delivery: submit partial or complete work for review.
7. Change request handling: classify new requirements and assess impact.
8. Final delivery: deliver the complete scope with documentation, release notes, and known limitations.
9. Acceptance: confirm whether the work meets acceptance criteria.
10. Archive: preserve final reports, records, links, decisions, and lessons learned.

## Artifact Types

Business delivery may produce code, technical documentation, public documentation, governance artifacts, business artifacts, BBA campaign artifacts, Academy materials, ACS workflows, MCP specifications, automation plans, reports, or accountability records.

## Milestone Model

Each milestone should define a title, scope reference, deliverables, owner, status, review requirement, acceptance criteria, blockers, phase, completion record, and notes.

Milestone statuses may include `Planned`, `In Progress`, `Under Review`, `Changes Requested`, `Accepted`, `Blocked`, or `Cancelled`.

## Quality Gates

Business should verify:

- deliverables match approved scope;
- acceptance criteria are met;
- documentation and handoff notes are present;
- sensitive work received required review;
- governance-sensitive work was approved;
- DeFi, trading, token, treasury, or financial-risk language is present where needed;
- the next operator, client, DAO, or product owner can use the deliverable.

## ACS Role

ACS may generate task breakdowns, draft Coder instructions, summarize blockers, compare deliverables to scope, draft checklists, prepare delivery reports, classify change requests, and detect missing documentation.

ACS cannot final-accept sensitive delivery, replace security review, override governance or requester acceptance, or commit to unapproved scope.

## Delivery Risks

Risks include unclear scope, dependency blockers, review delay, scope creep, implementation drift, documentation gaps, and acceptance gaps.

## Related Pages

- [Business Runtime](runtime.md)
- [Change Requests](change-requests.md)
- [ACS Integration](acs-integration.md)
- [Business Accountability](accountability.md)
