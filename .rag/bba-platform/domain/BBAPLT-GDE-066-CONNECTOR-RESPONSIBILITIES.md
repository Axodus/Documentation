---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-066"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Connector Responsibilities"
summary: "Defines permitted and prohibited Connector responsibilities at the boundary of the BBA domain."
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
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-065"}, {type: "RELATES_TO", target: "BBAPLT-GDE-021"}, {type: "RELATES_TO", target: "BBAPLT-GDE-034"}, {type: "RELATES_TO", target: "BBAPLT-GDE-048"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-06-003"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Connector", "Responsibility", "Mission", "Institutional Asset", "AI Workforce", "Workflow", "Human Governance", "Authority", "Accountability", "Stewardship", "Ownership"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Connector Responsibilities

## Permitted Responsibilities

A Connector may, within its declared scope and applicable Human Governance:

| Responsibility | Domain meaning |
| --- | --- |
| Receive external requests | Bring a request, context, evidence, or representation into a governed BBA interpretation boundary. |
| Deliver institutional results | Provide an approved outcome or Asset representation to an external context. |
| Forward information | Route bounded context between an external party and the responsible Mission, Assignment, Workflow, or Steward. |
| Preserve context | Retain the Mission, Tenant, Asset, lineage, Authority, Accountability, and uncertainty context needed for responsible interpretation. |
| Translate meaning | Adapt an external representation into canonical domain meaning while disclosing semantic loss or ambiguity. |
| Surface exceptions | Expose refusal, conflict, evidence gap, risk, failure, or boundary breach to the competent human role. |

These responsibilities coordinate an exchange; they do not execute the
institutional decision represented by the exchange.

## Prohibited Responsibilities

A Connector never:

* changes a domain Rule, Policy, Constraint, or governance decision;
* creates institutional Authority or appoints a Steward, Approver, Owner, or
  accountable role;
* creates, closes, cancels, or changes the purpose of a Mission;
* creates an Agent, expands an Assignment, or changes AI Workforce authority;
* changes Institutional Asset identity, Ownership, Stewardship, lineage,
  version meaning, or publication authority;
* changes Workflow semantics, bypasses a Guard, removes a human gate, or declares
  completion;
* converts an external assertion into evidence without domain evaluation;
* hides uncertainty, semantic loss, refusal, conflict, or accountability.

## Responsibility and Accountability

The Connector may be responsible for preserving an exchange boundary, but
institutional Accountability remains with the competent human role defined by
Mission, Asset, AI Workforce, Workflow, or Human Governance. Connector
responsibility never substitutes for human Authority, Ownership, Stewardship,
Review, Approval, or Escalation.

## Boundary Conditions

Every Connector responsibility is bounded by a declared Tenant, external
context, purpose, Mission relationship, Asset consequence, human role, and
applicable Rule or Policy. A request outside that boundary follows an Exception
Path or Escalation; it does not silently enlarge Connector scope.

## Technical Boundary

This document does not define request handlers, message delivery, APIs,
protocols, webhooks, queues, credentials, authorization mechanisms, data
mapping schemas, retries, synchronization, or runtime responsibility. It defines
semantic responsibility only.
