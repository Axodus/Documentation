---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-056"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Workflow Entry and Exit Criteria"
summary: "Defines semantic readiness, evidence, quality, governance, and completion criteria for Workflow movement."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-055"}, {type: "RELATES_TO", target: "BBAPLT-GDE-031"}, {type: "RELATES_TO", target: "BBAPLT-GDE-037"}, {type: "RELATES_TO", target: "BBAPLT-GDE-045"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-05-005"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Entry Criteria", "Exit Criteria", "Readiness", "Evidence", "Quality Gate", "Approval", "Completion", "Workflow Stage", "Work Item", "Assignment", "Mission", "Institutional Asset"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Workflow Entry and Exit Criteria

## Purpose

Define Entry Criteria and Exit Criteria as semantic conditions that make
Workflow movement understandable, evidence-based, and governed. Criteria are
not technical health checks or implementation status fields.

## Criteria Types

| Criterion | Meaning |
| --- | --- |
| Entry Criteria | Conditions that must be satisfied before a Stage or Work Item may begin. |
| Readiness Criteria | Evidence that scope, inputs, Assignment, Capability, and governance are sufficient to start responsibly. |
| Quality Criteria | Characteristics the Output or Deliverable must satisfy for its intended purpose. |
| Review Criteria | Conditions that determine whether a Review is complete, independent, and adequate. |
| Approval Criteria | Conditions the competent human Authority must consider before an Approval. |
| Exit Criteria | Conditions that allow a Stage or Work Item to transition, conclude, rework, or escalate. |
| Completion Criteria | Conditions that establish the intended semantic outcome and remaining obligations. |

## Criterion Contract

Each material criterion identifies its scope, expected condition, evidence,
responsible role, applicable gate, consequence when unsatisfied, and whether it
is mandatory or policy-governed. A criterion may require human judgment; when it
does, the responsible Authority and decision meaning remain explicit.

## Unsatisfied Criteria

An unsatisfied Entry Criterion prevents responsible start. An unsatisfied
Quality or Exit Criterion prevents the affected Transition or requires rework,
Review, refusal, or Escalation. An unsatisfied criterion is not silently treated
as passed because of urgency, confidence, partial output, or absence of an
objection.

## Evidence and Uncertainty

Evidence must be sufficient for the criterion's consequence and scope. Material
assumptions, uncertainty, limitations, unresolved questions, and conflicting
evidence remain visible. A Workflow may proceed to an explicitly permitted
low-risk path only when Policy defines the waiver and Human Governance
accountability remains intact.

## Criteria and Assets

Criteria may establish that an Output or Deliverable is ready to create,
transform, review, approve, publish, archive, or supersede an Institutional
Asset. They do not define Asset identity, version semantics, or publication
authority; those remain owned by the Asset and Human Governance Domains.

## Technical Boundary

This document does not define assertions, test frameworks, scores, automated
quality gates, schemas, API responses, database flags, queues, or workflow
engine conditions. It defines semantic criteria and their consequences.
