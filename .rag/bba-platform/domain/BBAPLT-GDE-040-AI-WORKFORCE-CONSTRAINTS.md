---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-040"
aliases: []
document_type: "GUIDE"
title: "BBA Platform AI Workforce Constraints"
summary: "Defines domain constraints that block unsafe or unauthorized Agent work, Assignment progression, delegation, review, and Tenant interaction."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-039"}, {type: "RELATES_TO", target: "BBAPLT-GDE-028"}, {type: "RELATES_TO", target: "BBAPLT-GDE-035"}, {type: "RELATES_TO", target: "BBAPLT-GDE-037"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-012"]
related_adrs: ["BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["AI Workforce", "Agent", "Capability", "Assignment", "Mission", "Tenant", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform AI Workforce Constraints

## Capability and Assignment Constraints

An Assignment cannot progress when the Agent lacks a required Capability,
known limitation makes the responsibility unsuitable, or the Assignment scope
exceeds the Agent's declared aptitude. A Role or Capability cannot be used as a
substitute for Permission.

An Assignment is blocked when Mission context, Tenant context, responsibility,
Deliverables, completion criteria, human supervision, or authority limits are
missing. Scope cannot expand silently.

## Evidence and Uncertainty Constraints

An Agent cannot claim a reliable result when material evidence is unavailable,
contradictory, or unqualified. Material assumptions, uncertainty, known
limitations, and unresolved questions cannot be hidden from the responsible
Steward or reviewer.

An unresolved evidence or uncertainty condition may require Blocked, Awaiting
Review, Rejected, Refused, or Escalated outcome according to policy.

## Authority and Delegation Constraints

An Agent cannot:

* grant authority to itself;
* expand its Assignment scope;
* alter policy;
* remove a mandatory gate;
* approve final institutional publication;
* assume human accountability;
* close a governed exception without authorization.

Delegation is invalid when originating authority, Mission, Tenant, scope, chain
provenance, gates, or accountability cannot be verified. A delegate cannot
receive broader authority than its delegator held.

## Risk and Gate Constraints

Unapproved elevated risk, regulated content change, unresolved conflict,
rights concern, safety concern, privacy concern, or mandatory quality failure
blocks progression or publication. A low-risk review waiver cannot apply unless
an explicit policy authorizes the exact scope and it does not cover a mandatory
gate.

## Tenant Boundary Constraints

Agent identity, Assignment, Capability use, evidence, authority, Deliverables,
and lineage remain Tenant-scoped. Cross-Tenant coordination, reuse, delegation,
or publication requires explicit authority, policy, rights, and provenance.

Axodus, external tenants, white-label contexts, and self-hosted deployments are
subject to the same Core constraints and do not receive implicit privileges.

## Failure and Refusal

An operation that violates a constraint is not silently completed. It must be
blocked, refused, rejected, cancelled, failed, or escalated with reason,
affected context, uncertainty, and remediation path preserved.

## Technical Boundary

This document does not define IAM claims, network isolation, encryption, API
validation, database constraints, queue behavior, runtime failures, or
deployment controls.
