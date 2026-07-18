---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-034"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Agent Lifecycle"
summary: "Defines the domain lifecycle of an Agent from proposal through active availability, suspension, and retirement."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-033"}, {type: "RELATES_TO", target: "BBAPLT-GDE-030"}, {type: "RELATES_TO", target: "BBAPLT-GDE-032"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-03-006"]
related_adrs: []
related_cores: ["Agent", "AI Workforce", "Assignment", "Human Governance"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Agent Lifecycle

## Lifecycle Stages

```text
Proposed → Active → Suspended → Active
                    └────────→ Retired
```

| Stage | Domain meaning |
| --- | --- |
| Proposed | A functional Agent identity has been described and is awaiting authority, capability, or governance confirmation. |
| Active | The Agent is available to be considered for bounded Assignments. |
| Suspended | The Agent is temporarily unavailable or restricted while an issue, review, risk, or governance decision is handled. |
| Retired | The Agent is no longer available for new Assignments, while identity and historical Assignments remain traceable. |

## Entry and Exit Meaning

An Agent may become Active only after its identity, purpose, Capabilities,
limitations, authority context, and responsible governance role are sufficiently
defined. Activation does not guarantee suitability for every Assignment.

Suspension requires a reason, responsible authority, affected Assignments, and
conditions for review or restoration. Retirement is a domain decision to stop
new use; it does not erase prior contributions, Deliverables, Assets, lineage,
or accountability.

An Active Agent may be assigned to multiple Missions when each Assignment
preserves scope, conflicts, capacity, evidence, and Tenant policy. A new
Assignment does not change the Agent lifecycle stage.

## Technical Independence

Agent lifecycle is independent of model deployment, provider availability,
process health, session state, worker state, or runtime execution. A technical
executor may be replaced while the Agent remains Active, or may be unavailable
while the Agent identity remains Active but unsuitable for a specific
Assignment.

## Governance Rules

1. Lifecycle transitions require an accountable authority and reason.
2. Suspension does not silently cancel historical work.
3. Retirement blocks new Assignments unless a new governed decision reactivates
   or replaces the identity.
4. Lifecycle status does not grant Permission or override Tenant policy.
5. An Agent may be proposed again as a distinct identity only when purpose or
   institutional meaning is materially different.

## Technical Boundary

This document does not define deployment lifecycle, process supervision,
healthchecks, model rollout, autoscaling, queues, credentials, databases, APIs,
or runtime availability states.
