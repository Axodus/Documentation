---
schema_version: "1.0.0"
document_id: "BBAPLT-GDE-070"
aliases: []
document_type: "GUIDE"
title: "BBA Platform Connector State Model"
summary: "Defines semantic Connector states, transitions, guards, terminal states, and reactivation conditions separately from lifecycle labels."
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
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-GDE-069"}, {type: "RELATES_TO", target: "BBAPLT-GDE-057"}, {type: "RELATES_TO", target: "BBAPLT-GDE-060"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-06-007"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Connector", "State", "Transition", "Guard", "Terminal State", "Reactivation", "Human Governance", "Boundary", "Accountability"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Connector State Model

## State Meaning

State describes the current semantic condition of a Connector's boundary
responsibilities and permitted institutional use. It is more specific than a
lifecycle label and does not describe process health, technical availability,
connection status, or infrastructure state.

| State | Meaning |
| --- | --- |
| Unassessed | The Connector relationship lacks a completed boundary, context, or governance assessment. |
| Ready | Required purpose, scope, Tenant, context, accountable role, Rules, and Policies are present for a decision. |
| Operating | The Connector is performing its declared semantic responsibilities within approved scope. |
| Degraded | A material limitation, semantic loss, evidence gap, risk, or boundary concern narrows responsible use. |
| Blocked | A Guard, Rule, Authority condition, Tenant condition, or unresolved exception prevents responsible use. |
| Awaiting Decision | A competent human Review, Approval, Stewardship action, or Escalation is required before movement. |
| Retired | The Connector is terminal for new exchanges; historical meaning and accountability remain preserved. |

## State Transitions and Guards

| Transition | Required Guard | Possible consequence |
| --- | --- | --- |
| Unassessed → Ready | Purpose, context, boundary, Tenant, accountability, and applicable governance are explicit. | Permit a competent human decision about use. |
| Ready → Operating | Required Authority accepts the declared scope and no blocking condition remains. | Permit declared responsibilities. |
| Operating → Degraded | Material loss, limitation, risk, evidence gap, or boundary concern is identified. | Narrow use, request Review, or apply a Policy. |
| Operating → Blocked | A Rule, Guard, Tenant condition, or critical obligation fails. | Stop affected use and preserve the reason. |
| Degraded → Awaiting Decision | Human judgment is required to accept, restrict, rework, or escalate the condition. | Preserve uncertainty and decision scope. |
| Blocked → Ready | The blocking condition is resolved and reassessed by the competent role. | Allow a new use decision, not automatic operation. |
| Any non-terminal → Retired | Human Governance authorizes retirement with historical obligations addressed. | Prevent new exchanges and preserve history. |

## Terminal and Reactivation States

Retired is terminal for new Connector exchanges. Reactivation is not an
implicit reversal; it requires a new assessment of identity, boundary, Tenant,
purpose, authority, accountability, evidence, and applicable Rules and Policies.
A reactivated relationship may remain the same Connector identity only when its
institutional purpose and governed relationship are preserved.

## No Silent Movement

An external signal, technical availability, Agent recommendation, Workflow
readiness, timeout, or absence of error cannot satisfy a semantic Guard or
create human Approval. Failed Guards preserve state, evidence, responsibility,
and the applicable Exception Path.

## Technical Boundary

This document does not define state machines, events, status codes, health
checks, connection probes, queues, retries, APIs, persistence, locks, runtime
activation, or infrastructure states. It defines semantic state and movement
only.
