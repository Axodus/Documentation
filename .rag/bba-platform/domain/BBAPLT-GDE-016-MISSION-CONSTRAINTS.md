---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-016"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Mission Constraints"
summary: "Defines the domain conditions that limit Mission authorization, progression, work, acceptance, publication, and closure."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-015"}, {type: "RELATES_TO", target: "BBAPLT-GDE-013"}, {type: "RELATES_TO", target: "BBAPLT-GDE-014"}, {type: "RELATES_TO", target: "BBAPLT-POL-001"}, {type: "RELATES_TO", target: "BBA-ADR-0003"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-01-006"]
related_adrs: ["BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Mission", "Tenant", "Steward", "Institutional Asset", "Review", "Publication"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Mission Constraints

## Purpose

Define the domain conditions that limit what a Mission may do, when it may
progress, what it may produce, and which decisions require human intervention.
Constraints express non-negotiable boundaries or unresolved conditions; they
are not technical capacity limits or implementation configuration.

## Constraint Categories

| Category | Constraint question | Required response when unsatisfied |
| --- | --- | --- |
| Identity | Is the Mission's Tenant, objective, Steward, and scope known? | Do not authorize; return for clarification or reject. |
| Authority | Does the responsible human authority have decision rights for the scope? | Pause or escalate; no implied authorization. |
| Context | Is relevant knowledge, policy, audience, and institutional context available? | Remain proposed, prepared, or paused until context is resolved. |
| Quality | Are evidence, claims, Assets, and review expectations sufficient for the intended use? | Revise, review, escalate, or reject. |
| Safety and rights | Are foreseeable safety, rights, confidentiality, and institutional risks within accepted boundaries? | Restrict, pause, refuse, escalate, or stop. |
| Tenant boundary | Does work remain within the Tenant's authorized context and sharing scope? | Prevent cross-Tenant use or require explicit sharing authority. |
| Outcome | Can the Mission's result, limitation, and residual obligation be interpreted? | Do not close; continue, defer, redirect, or stop with reason. |
| Publication | Is the Asset accepted and authorized for this audience and destination? | Do not publish; defer, restrict, or reject Publication. |

## Authorization Constraints

A Mission cannot enter `AUTHORIZED` when any of the following applies:

- no responsible Tenant context exists;
- the institutional objective is absent, contradictory, or impermissibly broad;
- no accountable Steward has accepted the scope;
- the intended audience or reason for no audience is unknown;
- a required authority, policy, or constraint is unresolved;
- the proposed work would exceed the Tenant's rights or declared purpose;
- the Mission depends on an unapproved external commitment.

An agent may identify missing authorization evidence but cannot satisfy the
authorization constraint itself.

## Preparation and Progress Constraints

A Mission cannot enter or remain in `IN_PROGRESS` when:

- required context or knowledge is unavailable and no responsible exception
  exists;
- the assigned AI Workforce responsibilities are undefined or exceed the
  Mission objective;
- a material risk or policy conflict has not been assigned to an authority;
- a required Review is impossible because its responsible authority or evidence
  is missing;
- a material scope change has occurred without human re-evaluation;
- the next action would create an Asset, claim, or commitment outside the
  Mission's authorized purpose.

The appropriate response is pause, clarification, revision, escalation,
redirection, refusal, or stopping according to the State Model.

## Asset and Review Constraints

- An Asset cannot be treated as accepted when its Mission provenance,
  responsible authority, intended use, or material limitations are unknown.
- A claim requiring domain review cannot bypass that review because the Asset is
  labelled as a draft, campaign, message, or recommendation.
- An Asset cannot be transformed into a Publication candidate when required
  review findings remain unresolved.
- A Review cannot be considered complete when the reviewer lacks the authority,
  evidence, context, or scope required to make the decision.
- A disagreement between responsible authorities is a constraint requiring
  escalation, not an implicit acceptance.

## Publication Constraints

Publication is prohibited when:

- the Asset has not been accepted for its intended use;
- Publication Authority is absent or outside the declared scope;
- destination, audience, or publication purpose is unknown;
- material limitations, rights, safety, or domain concerns remain unresolved;
- the proposed release would expand authorization beyond the accepted context;
- Tenant policy or an explicit human decision restricts release.

Publication may be deferred, restricted, rejected, or replaced by an internal
retention decision. None of those outcomes is a technical failure.

## Uncertainty, Refusal, and Failure Constraints

Uncertainty must be visible when it affects the objective, claims, authority,
quality, risk, or outcome interpretation. A Mission cannot close by presenting
unknowns as resolved facts.

A refusal is required when proceeding would violate authority, policy, rights,
safety, Tenant boundaries, or an explicit constraint. The refusal must identify
the reason and any safe alternative or follow-up decision where available.

A failed or incomplete result may proceed to outcome decision only when the
responsible authority understands what failed, what remains valid, what risk
remains, and whether continuation, deferral, redirection, or stopping is
justified.

## Cross-Tenant Constraints

- Tenant knowledge and Assets are not available to another Tenant by default.
- A white-label or self-hosted context cannot weaken Core authority rules.
- Axodus-specific policy cannot be assumed for external Tenants.
- Shared knowledge must preserve source responsibility, limitations, and
  authorization scope.
- A Mission cannot inherit another Tenant's Steward, Review, Publication, or
  outcome authority without explicit delegation accepted by the relevant
  authorities.

## Closure Constraints

A Mission cannot enter `CLOSED_WITH_LEARNING` when:

- its result has no explicit outcome interpretation;
- required human decisions are missing;
- material limitations or unresolved risks are hidden;
- residual obligations have no accountable destination;
- the closure would imply Publication, success, or impact that was not actually
  authorized or evidenced.

Closure may record that the objective was not achieved, the result was
rejected, the Mission was stopped, or learning was limited. Closure does not
require a positive result.

## Constraint Exceptions

An exception to a constraint requires an explicit human authority, documented
reason, scope, risk, duration or review point, and follow-up decision. No
exception may erase provenance, authorize prohibited conduct, or convert a
Tenant-specific choice into a Core rule.

## Technical Boundary

These constraints do not define quotas, service limits, network controls,
storage limits, authorization middleware, API validation, queues, runtime
timeouts, or deployment behavior. Technical controls may support these
constraints but cannot weaken or reinterpret their domain meaning.
