---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-013"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Mission State Model"
summary: "Defines the canonical Mission states, semantic transitions, guards, terminal outcomes, reopening rule, and state invariants."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-012"}, {type: "RELATES_TO", target: "BBAPLT-GDE-011"}, {type: "RELATES_TO", target: "BBAPLT-GDE-004"}, {type: "RELATES_TO", target: "BBA-REF-002"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-01-003"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0004"]
related_cores: ["Mission", "Steward", "Review", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Mission State Model

## Purpose

Define the canonical semantic states and valid transitions of a Mission. A
state describes the Mission's domain meaning at a decision point. It is not a
database value, queue status, job status, API response, or runtime execution
state.

## Canonical States

| State | Meaning | State category |
| --- | --- | --- |
| `PROPOSED` | Institutional intent is being considered as a Mission and lacks final authorization to proceed. | Entry state |
| `AUTHORIZED` | An authorized authority accepted the Mission's purpose and scope. | Active preparation |
| `PREPARED` | Context, responsibility, knowledge, policies, and quality expectations are sufficient for directed work. | Active preparation |
| `IN_PROGRESS` | The Steward is directing Mission work and the AI Workforce is contributing within assigned responsibilities. | Active work |
| `UNDER_REVIEW` | Work, Assets, claims, or decisions are under assessment by relevant human authorities. | Governance gate |
| `OUTCOME_DECISION` | Human authorities are deciding what the result means and what should happen next. | Governance gate |
| `PAUSED` | Progress is intentionally suspended while a dependency, authority decision, risk, or missing context is resolved. | Holding state |
| `DEFERRED` | The Mission will not proceed now, but its objective or context may be reconsidered later. | Deferred outcome |
| `REJECTED` | The Mission or its proposed result is not accepted because it violates authority, policy, quality, or domain requirements. | Terminal outcome |
| `STOPPED` | The Mission is intentionally ended before the objective is completed. | Terminal outcome |
| `CLOSED_WITH_LEARNING` | The Mission's result, decisions, limitations, and learning have been accepted for closure. | Terminal state |

`REJECTED`, `STOPPED`, and `CLOSED_WITH_LEARNING` are terminal for ordinary
progress. `DEFERRED` is a holding outcome that may be explicitly reopened as a
new authorization decision. `PAUSED` is not completion and must retain an
accountable reason.

## Valid Transitions

| From | To | Required decision or guard |
| --- | --- | --- |
| `PROPOSED` | `AUTHORIZED` | Authorized authority accepts objective, scope, Tenant context, Steward, audience, and initial constraints. |
| `PROPOSED` | `DEFERRED` | Authority decides that the Mission should not proceed now. |
| `PROPOSED` | `REJECTED` | Authority determines that the Mission is impermissible, unsupported, or invalid. |
| `AUTHORIZED` | `PREPARED` | Required context, responsibility, knowledge, policies, and quality expectations are assembled. |
| `AUTHORIZED` | `PAUSED` | A blocking dependency or unresolved decision prevents preparation. |
| `AUTHORIZED` | `STOPPED` | Authorized human authority ends the Mission before preparation continues. |
| `PREPARED` | `IN_PROGRESS` | Steward confirms that the Mission is ready for directed work. |
| `PREPARED` | `PAUSED` | Required context or authority becomes unavailable. |
| `PREPARED` | `STOPPED` | Human authority ends the Mission before work begins. |
| `IN_PROGRESS` | `UNDER_REVIEW` | A reviewable Asset, claim, decision, or outcome is ready for assessment. |
| `IN_PROGRESS` | `PAUSED` | Progress cannot responsibly continue because of a dependency, risk, or missing decision. |
| `IN_PROGRESS` | `STOPPED` | Human authority ends the Mission before completion. |
| `UNDER_REVIEW` | `IN_PROGRESS` | Review requires revision or additional work. |
| `UNDER_REVIEW` | `OUTCOME_DECISION` | Required review findings are available for an outcome decision. |
| `UNDER_REVIEW` | `REJECTED` | Review determines that the work or result cannot be accepted. |
| `UNDER_REVIEW` | `PAUSED` | Review cannot proceed because evidence, authority, or context is missing. |
| `OUTCOME_DECISION` | `CLOSED_WITH_LEARNING` | Steward and required authorities accept the outcome, limitations, and learning. |
| `OUTCOME_DECISION` | `IN_PROGRESS` | The Mission must continue or be redirected to pursue a valid objective. |
| `OUTCOME_DECISION` | `DEFERRED` | Authority decides to postpone the objective or next action. |
| `OUTCOME_DECISION` | `STOPPED` | Authority decides that continued work is not justified. |
| `PAUSED` | `PREPARED` | The blocking condition is resolved and preparation must be reconfirmed. |
| `PAUSED` | `IN_PROGRESS` | The blocking condition is resolved and existing preparation remains valid. |
| `PAUSED` | `DEFERRED` | Authority decides not to resume the Mission now. |
| `PAUSED` | `STOPPED` | Authority ends the Mission while paused. |
| `DEFERRED` | `PROPOSED` | A new authorization decision is explicitly opened for the deferred objective. |
| `DEFERRED` | `CLOSED_WITH_LEARNING` | The Tenant records the deferred outcome and learning without reopening work. |
| `CLOSED_WITH_LEARNING` | `PROPOSED` | An authorized reopening decision establishes whether this is a new Mission or a governed continuation. |

No other transition is valid. A transition may not be inferred from an agent
output, an Asset being generated, a timer, a publication attempt, or a
technical process result.

## Transition Guards

Before any transition, the domain must be able to identify:

- the current Mission state;
- the human or authority responsible for the decision;
- the reason and intended outcome of the transition;
- the objective and Tenant context affected;
- required evidence, review findings, or unresolved limitations;
- any follow-up responsibility created by the transition.

Transitions into `UNDER_REVIEW`, `OUTCOME_DECISION`, or
`CLOSED_WITH_LEARNING` require the applicable human governance decision. An
agent may prepare evidence or recommend a transition but may not establish the
decision alone.

## State Invariants

- A Mission has exactly one canonical current state at a decision point.
- `PROPOSED` is the only ordinary entry state.
- `CLOSED_WITH_LEARNING` is the only ordinary closure state.
- `PAUSED`, `DEFERRED`, `REJECTED`, and `STOPPED` retain a reason and an
  accountable authority.
- A Mission cannot enter `IN_PROGRESS` without a Steward and sufficient
  preparation for responsible work.
- A Mission cannot enter `CLOSED_WITH_LEARNING` without an outcome decision,
  relevant review evidence, limitations, and recorded learning or a reason why
  learning is unavailable.
- Publication does not itself transition a Mission to closure.
- A state transition cannot change Tenant meaning, bypass Human Governance, or
  authorize an unrelated Mission.
- Reopening a closed Mission is never implicit and must preserve the history of
  the prior outcome.

## Terminal and Exceptional Outcomes

`REJECTED` and `STOPPED` are distinct: rejection means the Mission or result
was not accepted, while stopping means continuation was intentionally ended.
Both require an explanation and residual-obligation decision.

`DEFERRED` means the objective remains potentially relevant but is not being
continued in the current decision context. It is not evidence of success or
failure.

## Technical Boundary

This state model does not define state storage, event sourcing, commands,
message delivery, persistence, APIs, workflow engines, schedulers, agent
runtimes, or UI controls. Technical mechanisms may represent these states but
must not add or silently reinterpret domain transitions.
