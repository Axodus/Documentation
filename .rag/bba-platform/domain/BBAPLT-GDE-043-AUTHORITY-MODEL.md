---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-043"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Human Governance Authority Model"
summary: "Defines the scope, legitimacy, limits, and delegation semantics of institutional authority."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-042"}, {type: "RELATES_TO", target: "BBAPLT-GDE-031"}, {type: "RELATES_TO", target: "BBAPLT-GDE-032"}, {type: "RELATES_TO", target: "BBAPLT-GDE-037"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-04-003"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Authority", "Responsibility", "Permission", "Capability", "Accountability", "Delegation", "Steward", "Mission", "Institutional Asset", "AI Workforce"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Human Governance Authority Model

## Purpose

Define institutional Authority as the legitimate ability to make, ratify, or
withhold a decision within a recognized scope. Authority is exercised by human
governance roles and remains bounded by Mission purpose, Tenant context,
governance rules, applicable policies, and the consequence of the decision.

## Distinct Concepts

| Concept | Meaning | What it does not mean |
| --- | --- | --- |
| Authority | Legitimate ability to decide or ratify within scope. | Not a technical permission or Agent capability. |
| Responsibility | Obligation to perform, coordinate, or deliver work. | Not necessarily the ability to approve the outcome. |
| Permission | A policy-recognized allowance to take a defined action. | Not institutional accountability or final authority. |
| Capability | Aptitude to perform a class of activity. | Not permission, responsibility, or decision authority. |
| Accountability | Human answerability for the decision or outcome. | Not transferable merely because work is delegated. |

An Agent may have Capability and Assignment Responsibility without Authority to
approve an institutional decision. A human may hold Authority without doing the
operational work. A Permission may enable an action under policy without
creating the Authority to determine its institutional consequence.

## Authority Dimensions

Authority is valid only when its dimensions are explicit:

* **scope** — the Mission, Asset, domain, decision class, or Tenant context;
* **purpose** — the institutional objective the authority serves;
* **level** — the consequence and seniority appropriate to the decision;
* **duration** — continuing, time-bounded, event-bounded, or until revoked;
* **conditions** — required evidence, Review, consultation, or approval gates;
* **limits** — actions, outcomes, risks, or boundaries the authority excludes;
* **accountability** — the human role that remains answerable.

Authority without a defined scope, purpose, and accountable human role is not a
valid basis for an institutional decision.

## Delegable Authority

Operational authority may be delegated when a Rule or Policy permits it. A
delegation must preserve the original scope, purpose, conditions, limits,
traceability, and residual accountability. Delegation may allow a Delegate to
act or decide within a narrow matter, but it cannot create a broader authority
than the delegator possessed.

Examples of authority that may be delegated include accepting a defined low-risk
Deliverable, coordinating a bounded review, or authorizing a previously approved
publication action. Each delegation remains subject to applicable gates and may
be revoked.

## Non-Delegable Authority

Authority is non-delegable when a Core rule, law, Tenant commitment, reserved
mandate, conflict, or consequence requires the named competent authority to
decide. Final institutional accountability, alteration of Core governance
rules, creation of authority for oneself, and removal of mandatory safeguards
cannot be delegated away.

## Authority Boundaries

No Agent can acquire Authority through Capability, confidence, output quality,
autonomy, recommendation, or execution. No Delegate can enlarge a grant, waive
a mandatory gate, conceal a conflict, or transfer residual accountability.
Every consequential decision records the role and scope under which its human
Authority is exercised.

## Technical Boundary

This document does not define authentication, authorization systems, RBAC,
ABAC, permission schemas, policy engines, APIs, databases, queues, runtimes,
or implementation checks. It defines institutional authority semantics that
future mechanisms must represent without changing them.
