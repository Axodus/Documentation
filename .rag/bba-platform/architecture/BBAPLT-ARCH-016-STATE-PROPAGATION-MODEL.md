---
schema_version: "1.0.0"
document_id: "BBAPLT-ARCH-016"
aliases: ["BBAPLT-ARC-016"]
document_type: "GUIDE"
title: "BBA Platform State Propagation Model"
summary: "Defines authoritative state ownership, semantic propagation conditions, effects, and non-inferences across BBA Contexts."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.ARCHITECTURE"
authority_level: "PROJECT"
author: "BBA Architecture Governance"
owner: "BBA Architecture Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-19"
last_updated: "2026-07-19"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-19"
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-ARCH-015"}, {type: "RELATES_TO", target: "BBAPLT-ARCH-005"}]
related_epics: ["EPIC-003"]
related_requirements: ["REQ-003-03-004"]
related_adrs: ["BBA-ADR-0004"]
related_cores: ["Mission", "Institutional Asset", "AI Workforce", "Human Governance", "Workflow", "Connector"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform State Propagation Model

## Purpose

This model defines how semantic state changes in one Context affect eligibility,
awareness, or responsibility in other Contexts. It distinguishes authoritative
state ownership from propagated meaning and prevents a Consumer from inferring
authority merely because it observed a state.

State propagation is a logical causal relationship. It is not a technical event,
message, queue, synchronization mechanism, API behavior, runtime action, or
database transition.

## Propagation Vocabulary

| Term | Meaning |
| --- | --- |
| Authoritative Context | Context that owns the canonical meaning and may change the state according to its Domain Rules and Governance authority |
| Propagation Conditions | Semantic conditions under which another Context may treat a state as relevant or become eligible for a responsibility |
| Propagated Meaning | Information that a Consumer may use within scope without becoming owner of the source state |
| Causal Eligibility | Permission for a downstream responsibility to become eligible because declared conditions were met; it is not automatic execution or approval |
| Observation | Consultation of a state for context, evidence, or coordination without causing a downstream state change |
| Non-Inference | Explicit meaning that cannot be concluded merely because a state was observed or propagated |

## Authoritative State Ownership

| State concern | Authoritative Context | May propagate to | Propagated meaning |
| --- | --- | --- | --- |
| Mission identity, purpose, scope, and lifecycle meaning | Mission | Human Governance, Workflow, AI Workforce, Asset, Connector | Mission context and eligibility for bounded work |
| Governance approval, authority, delegation, escalation, and accountability | Human Governance | Mission, Workflow, AI Workforce, Asset, Connector | Decision, constraint, gate, or exception applicable within scope |
| Workflow stage, transition, guard, exception, and completion meaning | Workflow Coordination | Mission, AI Workforce, Asset, Human Governance, Connector | Coordination progress or eligibility, never institutional approval |
| Agent, Capability, Assignment, Responsibility, and Deliverable meaning | AI Workforce | Mission, Workflow, Asset, Human Governance | Bounded work eligibility, result, limitation, or quality evidence |
| Asset identity, version, lineage, evidence, representation, and publication readiness | Institutional Asset | Mission, Workforce, Workflow, Human Governance, Connector | Canonical Asset context and representation eligibility |
| External boundary, translation, semantic integrity, and representation context | Connector Boundary | Mission, Asset, Workflow, Human Governance, external consumer | Translated or approved external meaning within trust and Tenant scope |

## Canonical Propagation Chain

```text
Mission Approved
    ↓ causal eligibility for governed coordination
Workflow becomes eligible
    ↓ bounded work may be coordinated
Assignments become possible
    ↓ Capability and authority constraints still apply
Deliverables may produce or transform Institutional Assets
    ↓ review, evidence, and lineage remain required
Asset representation may become publication-eligible
    ↓ human publication authority and destination scope remain required
Connector may expose an approved representation
```

Each arrow describes eligibility, not automatic execution. A downstream Context
must still evaluate its own Rules, Policies, Constraints, Capability, evidence,
authority, and Tenant Boundary.

## Propagation Rules

1. Only the Authoritative Context may change the canonical meaning of its state.
2. Propagation preserves Identity, Lineage, evidence, uncertainty,
   Accountability, Ownership, Stewardship, Authority, and Tenant Boundary.
3. A propagated state may make a responsibility eligible but cannot complete it
   without the applicable conditions and authority.
4. A Consumer may observe a state without accepting it as sufficient for its own
   responsibility; discrepancies require review or escalation.
5. A state does not propagate across a Tenant or Trust Boundary without an
   applicable governance decision and preserved context.
6. Rejection, cancellation, restriction, or suspension propagates as a
   constraint on eligibility; it does not silently erase prior evidence or
   Lineage.
7. A new version or representation does not change the identity of the
   underlying Institutional Asset.
8. An Agent cannot create a Governance state by producing an output or
   Deliverable.
9. Workflow state cannot create Authority, Ownership, Stewardship, or
   Accountability.
10. Connector state cannot create Mission, close Mission, or authorize
    publication.

## State Propagation Matrix

| Authoritative state | Propagation condition | Consumer effect | Non-inference |
| --- | --- | --- | --- |
| Mission Authorized | Mission scope, Steward, and constraints are explicit | Workflow and bounded Assignments may become eligible | Does not approve Assets or publication |
| Mission Approved | Human authority and required evidence are present | Workflow may proceed to applicable coordination | Does not create Assignments without Capability and scope checks |
| Assignment Accepted | Agent Capability, responsibility, limits, and Deliverables are explicit | Work may become Active | Does not grant Agent Authority or change Mission ownership |
| Deliverable Completed | Acceptance criteria and evidence obligations are satisfied | Asset creation or transformation may be evaluated | Does not make Asset Approved or Published |
| Asset Under Review | Identity, lineage, representation, and evidence are available | Review and Governance may evaluate readiness | Does not imply approval or publication |
| Asset Approved | Competent authority accepted stated purpose and scope | Publication or Connector exposure may become eligible | Does not authorize every destination or audience |
| Publication Authorized | Destination, audience, representation, and authority are explicit | Connector may expose approved meaning within scope | Does not change canonical Asset identity or create a new Mission |
| Publication Restricted or Revoked | Human Governance changes exposure decision | Connector and downstream consumers must restrict or stop eligibility | Does not erase historical evidence or prior Lineage |
| Outcome Evidence Available | Evidence is attributed, scoped, and limitations are known | Analytics and Learning may inform Mission or future work | Does not rewrite prior approval or establish causality without review |

## Non-Inferences

The following conclusions are invalid unless separately authorized and
evidenced:

- Workflow progress means Mission approval;
- Assignment acceptance means Asset approval;
- Deliverable completion means publication readiness;
- Asset approval means every representation is approved;
- Connector exposure means institutional endorsement;
- Agent output means human accountability was discharged;
- observed state means the Consumer owns the state;
- propagated state means the Consumer may alter canonical meaning;
- a later state removes historical Lineage or Accountability.

## Rejection and Reversal

If an authoritative Context rejects, cancels, restricts, or reverses a state,
downstream eligibility must be re-evaluated. The re-evaluation preserves the
original decision, reason, Steward, authority, evidence, and Lineage. A reversal
does not silently mutate a prior historical outcome.

## Deferred Technical Concerns

This model does not define events, messages, queues, APIs, protocols, state
stores, runtime execution, workflow engines, persistence, deployment,
infrastructure, authentication, or technical authorization.
