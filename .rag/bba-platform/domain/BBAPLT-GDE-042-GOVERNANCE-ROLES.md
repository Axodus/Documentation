---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-042"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Governance Roles"
summary: "Defines the institutional roles through which Human Governance directs, reviews, approves, publishes, and remains accountable for domain outcomes."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-041"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}, {type: "RELATES_TO", target: "BBAPLT-GDE-024"}, {type: "RELATES_TO", target: "BBAPLT-GDE-032"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-04-002"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Human Governance", "Steward", "Reviewer", "Approver", "Publisher", "Domain Owner", "Governance Board", "Delegate", "Mission", "Institutional Asset", "AI Workforce"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Governance Roles

## Purpose

Define the institutional roles that exercise Human Governance. A role names a
recognized function and its authority boundary; it does not prescribe a
particular person, organization chart, account, group, or technical mechanism.

## Role Model

| Role | Institutional function | Typical authority boundary |
| --- | --- | --- |
| Steward | Continuously directs and cares for a Mission, Asset, or governed scope. | Coordinates purpose, priorities, review, and acceptance within the assigned scope. |
| Reviewer | Evaluates evidence, quality, suitability, risk, or compliance of a proposed outcome. | Provides a governed assessment and recommendation; does not automatically approve. |
| Approver | Makes the institutional decision required by a gate or policy. | Accepts, rejects, authorizes, or conditions a consequential outcome within scope. |
| Publisher | Authorizes or performs the institutional release of an approved Asset to an intended destination. | Confirms publication readiness and destination suitability; cannot override an absent approval. |
| Domain Owner | Holds organizational responsibility for the purpose and integrity of a domain scope. | Sets direction and resolves matters within the owned scope, subject to higher authority. |
| Governance Board | Collective authority for decisions requiring independent perspectives, broad impact, or reserved competence. | Deliberates and decides according to its mandate; does not erase individual accountability. |
| Delegate | Receives a bounded authority or responsibility for a defined matter and period. | Acts only within delegated scope and preserves the delegator's residual accountability. |

## Role Separation

Roles are not interchangeable labels:

* a Reviewer assesses but does not become an Approver merely by reviewing;
* an Approver decides but does not necessarily own the Mission or Asset;
* a Publisher releases an approved Asset but does not create the approval;
* a Steward governs continuously but may require a separate Approver for a critical gate;
* a Delegate acts within a bounded grant and cannot enlarge the grant;
* a Domain Owner may establish direction while a Governance Board resolves a reserved matter.

One human may hold more than one role only when the applicable policy permits
it and the decision's risk and independence requirements remain satisfied.

## Relationship to Domain Concepts

Every Mission has a Steward. Institutional Assets have an accountable owner or
governing scope, with review, approval, publication, and custody responsibilities
assigned as applicable. AI Workforce Agents may prepare evidence, recommendations,
or outputs, but they do not occupy a human governance role and cannot exercise
final institutional authority.

## Role Assignment Semantics

A role assignment is meaningful only with a scope, purpose, authority boundary,
and duration or continuing condition. A role may be temporarily unavailable,
conflicted, recused, or replaced; these conditions do not silently transfer
accountability. A replacement must be explicit and traceable.

## Technical Boundary

This document does not define users, groups, identities, authentication,
authorization, RBAC, ABAC, permission tables, APIs, databases, queues, runtime
workers, or dispatch. Those mechanisms may later represent role assignments but
must not change their institutional meaning.
