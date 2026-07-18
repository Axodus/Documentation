---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-035"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Agent and Assignment State Model"
summary: "Defines Agent availability states separately from Assignment execution states and formalizes blocked, review, rejection, cancellation, and failure outcomes."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-034"}, {type: "RELATES_TO", target: "BBAPLT-GDE-032"}, {type: "RELATES_TO", target: "BBAPLT-GDE-033"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-007"]
related_adrs: []
related_cores: ["Agent", "Assignment", "Deliverable", "Human Governance", "Mission"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Agent and Assignment State Model

## State Dimensions

Agent availability and Assignment execution are different domain dimensions.
An Agent may be Active while one Assignment is Blocked, and a Suspended Agent
may leave several historical Assignments Completed without changing their past
meaning.

## Agent Availability States

The Agent lifecycle states are `PROPOSED`, `ACTIVE`, `SUSPENDED`, and `RETIRED`.
They describe whether the functional identity is governed and available for
new consideration, not whether a technical executor is running.

## Assignment Execution States

```text
UNASSIGNED → ASSIGNED → ACTIVE → AWAITING_REVIEW → COMPLETED
                           │             ├──────→ REJECTED
                           └──→ BLOCKED   ├──────→ CANCELLED
                                         └──────→ FAILED
```

| State | Meaning |
| --- | --- |
| Unassigned | Assignment is defined or expected but no Agent has accepted the contextual responsibility. |
| Assigned | An Agent has been selected and the scope, responsibility, and authority have been acknowledged. |
| Active | The Agent is performing or contributing to the Assignment. |
| Blocked | Progress cannot continue because of missing input, evidence, capability, authority, dependency, or decision. |
| Awaiting Review | Expected work exists and is waiting for the applicable quality or human gate. |
| Completed | Completion criteria are satisfied and the responsible authority has recorded the governed outcome. |
| Rejected | A reviewer or authority determined that the work cannot be accepted for its current purpose. |
| Cancelled | An authorized decision ended the Assignment without requiring completion. |
| Failed | The Assignment could not produce a valid governed outcome after applicable handling. |

`ACCEPTED` is a Deliverable outcome, not an independent Assignment execution
state. A Deliverable may be accepted while the Mission remains active or while
other Assignments continue.

## Transition Guards

Transitions require an accountable authority, reason, affected Deliverables,
and relevant evidence or uncertainty. A blocked Assignment may return to Active
only when its blocking condition is addressed or explicitly waived by policy.
Rejection, cancellation, and failure preserve history and cannot be rewritten
as completion without a new governed decision.

## Conflict and Refusal

An Assignment may be blocked or refused when the Agent lacks required
Capability, receives contradictory instructions, encounters unauthorized risk,
cannot establish evidence, violates Tenant boundaries, or cannot meet quality
criteria. Refusal is a governed domain outcome, not an unhandled execution
error.

## Technical Boundary

This document does not define state storage, event sourcing, commands, retries,
queues, runtime health, workflow engines, APIs, databases, or UI controls.
