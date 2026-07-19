---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-059"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Workflow Exception Paths"
summary: "Defines governed alternatives for refusal, conflict, risk, evidence gaps, failure, cancellation, rework, and escalation."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-058"}, {type: "RELATES_TO", target: "BBAPLT-GDE-036"}, {type: "RELATES_TO", target: "BBAPLT-GDE-047"}, {type: "RELATES_TO", target: "BBAPLT-GDE-051"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-05-008"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Exception Path", "Refusal", "Conflict", "Risk", "Evidence Gap", "Failure", "Cancellation", "Rework", "Escalation", "Workflow", "Assignment", "Human Governance", "Mission", "Institutional Asset", "Tenant"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Workflow Exception Paths

## Purpose

Define an Exception Path as a governed alternative when normal Workflow
progress is impossible, unsafe, disputed, or no longer appropriate. Exception
Paths preserve domain context and direct the matter to rework, hold, refusal,
cancellation, containment, or Escalation.

## Exception Types

| Exception Path | Trigger | Semantic response |
| --- | --- | --- |
| Refusal | Agent, Delegate, or role cannot responsibly perform the requested work. | Preserve reason and limitations; reassign, clarify, or escalate. |
| Conflict | Instructions, interests, evidence, or decisions are incompatible. | Pause the affected path; disclose and seek competent independent governance. |
| Elevated risk | Consequence exceeds declared risk, scope, or authority. | Contain or stop; require safeguards, Review, or Escalation. |
| Evidence gap | Material evidence or uncertainty prevents a responsible decision. | Request evidence, defer, narrow scope, or escalate. |
| Failure | A required outcome cannot be produced or a criterion cannot be met. | Diagnose semantically, retry only when permitted, rework, reject, or escalate. |
| Cancellation | Mission, scope, purpose, or authority no longer justifies continuation. | Stop new work while preserving history, obligations, Assets, and accountability. |
| Rework | Output or Deliverable does not meet criteria but can be corrected. | Return to an authorized Stage or Assignment with changed criteria explicit. |
| Escalation | Matter exceeds current competence or authority. | Transfer to a competent human Authority without erasing prior responsibility. |

## Exception Contract

An Exception Path preserves Mission, Tenant, Workflow, Stage, Work Item,
Assignment, Agent, evidence, Asset, criteria, Authority, Accountability,
reason, and requested outcome. It identifies the protective action, affected
scope, responsible human role, next Decision Point, and conditions for return to
normal progress.

## No Silent Recovery

Workflow cannot silently skip a failed Guard, convert refusal into completion,
hide uncertainty, retry an unsafe action, or treat a technical recovery as an
institutional decision. A return to normal progress requires the criteria,
authority, and evidence applicable to the new path.

## Exception and Assets

An Exception Path may preserve, quarantine, rework, supersede, or cancel an
Asset-related outcome, but it cannot change Asset identity, erase lineage,
rewrite an immutable version, or approve publication. Asset consequences remain
subject to Asset and Human Governance Domain rules.

## Technical Boundary

This document does not define retries, compensating transactions, dead-letter
queues, error codes, incident tooling, orchestration, runtime recovery, APIs,
or persistence. It defines semantic exception handling and governance only.
