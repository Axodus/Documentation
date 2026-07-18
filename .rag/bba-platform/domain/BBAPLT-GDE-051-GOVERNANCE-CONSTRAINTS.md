---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-051"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Human Governance Constraints"
summary: "Defines the boundaries that constrain authority, risk, compliance, accountability, Tenant context, and separation of functions."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-050"}, {type: "RELATES_TO", target: "BBAPLT-GDE-028"}, {type: "RELATES_TO", target: "BBAPLT-GDE-040"}, {type: "RELATES_TO", target: "BBAPLT-GDE-043"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-04-011"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Governance Constraints", "Tenant Boundary", "Authority", "Risk", "Compliance", "Accountability", "Separation of Functions", "Steward", "Mission", "Institutional Asset", "AI Workforce", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Human Governance Constraints

## Purpose

Define constraints that limit otherwise possible governance actions. Constraints
protect institutional legitimacy, Tenant boundaries, Asset and Mission scope,
human accountability, risk obligations, compliance duties, and the independence
needed for trustworthy decisions.

## Constraint Categories

| Category | Constraint |
| --- | --- |
| Tenant boundary | A governance decision, Asset, Mission, or Delegation cannot cross Tenant context without explicit competent authority, purpose, and accountability. |
| Authority | No role, Delegate, Agent, policy, or exception may exercise Authority beyond its scope, level, duration, conditions, or source mandate. |
| Risk | Elevated, irreversible, regulated, or material risk requires the Review, Approval, containment, and Escalation appropriate to its consequence. |
| Compliance | Legal, contractual, ethical, and institutional obligations constrain decisions even when a local Policy is silent. |
| Accountability | Every consequential outcome retains a human accountable role; delegation, recusal, replacement, or escalation cannot erase it. |
| Separation of functions | Where independence is required, the same role cannot silently perform incompatible preparation, Review, Approval, and publication functions. |
| Evidence | A decision cannot be represented as settled when material evidence, uncertainty, assumptions, or limitations remain unresolved. |
| Asset integrity | Governance cannot silently alter Asset identity, lineage, version meaning, authority, or publication history. |
| Mission integrity | A decision cannot expand Mission purpose or scope without the responsible human Authority and updated accountability. |
| Agent boundary | An Agent cannot approve final institutional publication, alter Rules, grant authority to itself, or assume human accountability. |

## Constraint Behavior

When a constraint would be violated, the affected action is blocked, refused,
deferred, rejected, cancelled, contained, or escalated. A constraint violation
is not cured by confidence, urgency, silence, technical possibility, or a later
unqualified recommendation. The responsible Steward protects the affected
Mission, Asset, Tenant, and evidence while competent Human Governance decides.

## Cross-Tenant and Connector Boundaries

External systems, Connectors, or shared participants do not dissolve Tenant
boundaries. Cross-Tenant work requires explicit purpose, authority, permitted
scope, affected Assets, evidence, accountability, and review of the resulting
risk. A Connector cannot become the source of institutional authority or make a
decision that the governing Tenant has not authorized.

## Risk and Compliance

Risk is assessed in relation to consequence, reversibility, affected parties,
Asset class, Mission purpose, and applicable obligations. Unknown or disputed
risk is itself a reason to pause or escalate. Compliance constraints remain
binding when a policy is absent, ambiguous, or inconvenient.

## Segregation and Recusal

A role must disclose and manage conflicts of interest, recuse itself when
required, and preserve independent Review or Approval. Recusal changes who may
act; it does not remove the recused role's prior Accountability for decisions
made while it was competent and unconflicted.

## Technical Boundary

This document does not define authorization enforcement, compliance engines,
identity systems, RBAC, ABAC, databases, APIs, queues, connector protocols,
workflow runtime, or automated risk scoring. It defines domain constraints that
future implementations and integrations must preserve.
