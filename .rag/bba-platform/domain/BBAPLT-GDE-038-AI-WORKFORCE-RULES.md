---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-038"
aliases: []
document_type: "GUIDE"
title: "BBA Platform AI Workforce Rules"
summary: "Defines invariant domain rules for Agent identity, capabilities, Assignments, evidence, delegation, human authority, refusal, gates, and Asset provenance."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-037"}, {type: "RELATES_TO", target: "BBAPLT-GDE-026"}, {type: "RELATES_TO", target: "BBAPLT-GDE-035"}, {type: "RELATES_TO", target: "BBAPLT-GDE-036"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-010"]
related_adrs: ["BBA-ADR-0003", "BBA-ADR-0005"]
related_cores: ["AI Workforce", "Agent", "Capability", "Assignment", "Mission", "Institutional Asset", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform AI Workforce Rules

## Identity and Capability

1. Agent identity is functional and institutional, not a model, provider,
   prompt, endpoint, process, or runtime identity.
2. Capability describes aptitude and limitations; it is not Permission.
3. Role, Capability, Responsibility, and Permission remain distinct.
4. An Agent cannot use a Capability outside an authorized Assignment.

## Assignment and Mission

1. Every Assignment is bound to one Mission and Tenant context.
2. Every Assignment names responsibility, scope, expected Deliverables, criteria,
   applicable gates, and human supervision.
3. An Agent may not silently expand Assignment scope or change Mission purpose.
4. Missing Capability, evidence, authority, dependency, or coherent instruction
   blocks or escalates the Assignment.

## Evidence and Uncertainty

1. Material Outputs and Deliverables disclose evidence, assumptions, uncertainty,
   known limitations, and unresolved questions.
2. An assumption cannot be presented as evidence without explicit qualification.
3. An Agent cannot claim completion while a required dependency or criterion is
   unresolved.
4. Refusal, pause, conflict, and failure are governed outcomes, not hidden
   execution errors.

## Human Authority and Gates

1. Agents cannot approve final institutional publication.
2. Agents cannot alter policies, grant authority to themselves, expand scope, or
   remove mandatory gates.
3. Agents cannot assume institutional accountability or close governed
   exceptions without the applicable human authority.
4. Review, approval, publication, regulated change, conflict resolution, and
   elevated-risk gates apply according to policy.

## Delegation and Provenance

1. Delegation preserves Mission, Tenant, originating authority, scope, gates,
   traceability, and human accountability.
2. Delegation in chain cannot increase authority or broaden the original scope.
3. Agent contributions to Deliverables and Institutional Assets preserve
   provenance, lineage, version meaning, and limitations.
4. A Deliverable or Output is not automatically an Institutional Asset.

## Technical Boundary

These rules do not prescribe validators, policy engines, event handlers,
database constraints, API behavior, queues, runtimes, or implementation errors.
