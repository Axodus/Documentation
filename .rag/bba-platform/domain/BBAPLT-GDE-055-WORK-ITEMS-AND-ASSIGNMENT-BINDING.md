---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-055"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Workflow Work Items and Assignment Binding"
summary: "Defines Work Item as coordinated work bound to an existing Mission Assignment without creating new authority."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-054"}, {type: "RELATES_TO", target: "BBAPLT-GDE-032"}, {type: "RELATES_TO", target: "BBAPLT-GDE-033"}, {type: "RELATES_TO", target: "BBAPLT-GDE-036"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-05-004"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Work Item", "Assignment Binding", "Assignment", "Agent", "Capability", "Responsibility", "Deliverable", "Mission", "Workflow Stage", "Human Governance", "Institutional Asset", "Tenant"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Workflow Work Items and Assignment Binding

## Purpose

Define a Work Item as a bounded unit of coordinated work within a Workflow
Stage, and Assignment Binding as the semantic link that connects that work to an
existing Mission-bound Assignment. Workflow organizes work; it does not create
Agents, Capabilities, Responsibilities, or Authority.

## Work Item Contract

| Element | Domain meaning |
| --- | --- |
| Mission and Tenant | Context that gives the Work Item institutional scope. |
| Workflow and Stage | Semantic coordination context and bounded phase. |
| Purpose and scope | What the Work Item must accomplish and what it excludes. |
| Assignment Binding | Existing Assignment responsible for the work. |
| Inputs | Evidence, Assets, Decisions, prior Work Items, or contextual information. |
| Expected Outputs | Results, evidence, recommendations, or Deliverables expected from the work. |
| Criteria and gates | Entry, quality, Review, Approval, and exit conditions. |
| Exception Path | Permitted handling of refusal, conflict, risk, failure, rework, or escalation. |
| Accountability reference | Human Steward or governance role responsible for consequential outcomes. |

## Assignment Binding

Assignment Binding does not create a second Assignment. It references the
existing Mission, Tenant, Agent, Role, Responsibility, Capabilities,
Deliverables, authority limits, supervisor, and quality gates of the Assignment.
The binding may clarify which part of the Assignment the Work Item advances,
which Stage contains it, and which criteria apply.

An Agent cannot receive authority merely because a Workflow binds it to a Work
Item. A Work Item cannot widen Assignment scope, replace the human supervisor,
remove a gate, or change the Deliverable's institutional meaning.

## Work Item Relationships

A Work Item may depend on, precede, follow, parallel, repeat, or rework another
Work Item when the Workflow Definition and applicable Policy allow that
relationship. Each relationship preserves Mission, Tenant, evidence, Asset
lineage, Assignment provenance, and human accountability.

## Outputs and Deliverables

Work Item Outputs may be informational or provisional. A Deliverable is formal
only when expected by the bound Assignment and accepted through the applicable
criteria and governance gate. An Output or Deliverable may create or transform
an Institutional Asset according to Asset Domain rules; Workflow does not decide
Asset identity or version semantics.

## Technical Boundary

This document does not define task records, tickets, messages, queues, workers,
dispatch, API payloads, database schemas, workflow runtime, or execution
tracking. It defines semantic work and Assignment binding only.
