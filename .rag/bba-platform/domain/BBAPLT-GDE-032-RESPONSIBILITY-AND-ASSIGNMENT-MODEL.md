---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-032"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Responsibility and Assignment Model"
summary: "Defines Assignment as the Mission-bound contextual link among Agent, responsibility, scope, capabilities, deliverables, authority limits, gates, and human supervision."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Domain Governance"
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-031"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}, {type: "RELATES_TO", target: "BBAPLT-GDE-024"}, {type: "RELATES_TO", target: "BBAPLT-GDE-028"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-004"]
related_adrs: ["BBA-ADR-0003"]
related_cores: ["Assignment", "Agent", "Mission", "Capability", "Responsibility", "Deliverable", "Steward"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Responsibility and Assignment Model

## Assignment Definition

An Assignment is the contextual domain link that binds an Agent to a
responsibility within a Mission. It explains why the Agent is involved, what it
is expected to do, what it may not do, and how its result will be evaluated.

An Assignment cannot exist without a Mission context and an accountable human
Steward or designated supervisor.

## Required Semantic Elements

An Assignment defines, at minimum:

* Tenant and Mission context;
* Agent identity and assumed Role;
* responsibility and scope of work;
* required Capabilities and known limitations;
* expected Deliverables and completion criteria;
* allowed actions and authority limits;
* applicable quality and review gates;
* human supervisor, Steward, or acceptance authority;
* dependencies, assumptions, evidence expectations, and escalation conditions.

These are domain meanings, not a technical payload or dispatch schema.

## Role, Responsibility, and Permission

Role describes the function assumed in this Assignment. Responsibility describes
the work and accountability assigned. Capability describes aptitude. Permission
describes authority granted by policy or delegation. None of these concepts may
be inferred from the others.

An Assignment may require a Role and several Capabilities while granting only a
narrow Permission scope. A capable Agent may be excluded from an Assignment by
Tenant policy, risk, conflict of interest, or missing authority.

## Assignment Boundaries

The Assignment must state what is in scope, out of scope, dependent on another
participant, and subject to escalation. It must not silently expand when the
Agent encounters additional work. New work requires a revised Assignment or a
new governed Assignment.

Assignment context does not transfer ownership of a Mission or Asset to the
Agent. Institutional authority remains with the responsible human roles.

## Acceptance and Completion

An Assignment is complete only when its expected Deliverables satisfy the
applicable criteria or an authorized human decision records rejection,
cancellation, refusal, deferral, or another governed outcome. Agent self-report
does not constitute institutional acceptance.

## Technical Boundary

This document does not define IDs, payloads, schemas, dispatch protocols,
queues, schedulers, databases, APIs, workflow engines, or runtime assignment
mechanisms.
