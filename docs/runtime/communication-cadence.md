---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-008"
aliases: []
document_type: "GUIDE"
title: "Communication Cadence"
summary: "Defines communication types, cadence, status formats, delay notices, and channel principles for Runtime."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "RUNTIME"
authority_level: "CORE"
author: "Axodus Runtime"
owner: "Axodus Runtime"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "QUARTERLY"
next_review: "2026-10-14"
supersedes: []
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-001"}, {type: "RELATES_TO", target: "RUNTIME-GDE-002"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/communication-cadence.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Communication Cadence

---

## Purpose

Runtime requires predictable communication so requesters, DAOs, clients, operators, agents, and governance participants understand what is happening, what changed, what is delayed, what needs review, and what is complete.

Communication is operational transparency, not public relations.

## Scope

This page covers requester-facing, internal, governance, technical, and accountability communication for Runtime items.

## Communication Types

- Intake acknowledgement: confirms request received, summary, next step, and missing information.
- Clarification request: asks specific questions and explains why information is needed.
- Status update: reports current status, completed work, blockers, and next action.
- Review request: asks for validation or approval and states the decision needed.
- Decision notice: communicates approval, rejection, deferral, conditions, and next step.
- Delay notice: explains reason, impact, owner, revised next action, and whether governance or scope changes are needed.
- Change request notice: communicates requested change, classification, impact, and decision needed.
- Delivery notice: submits deliverables, acceptance criteria, and known limitations.
- Acceptance notice: records acceptance status, unresolved items, and next step.
- Closure notice: confirms final status, links, lessons, or follow-ups.

## Cadence by Risk Level

Low-risk short tasks may update at completion or when blocked. Standard delivery should update at milestones, status changes, blockers, and delays. High-risk or governance-sensitive work should update at intake, classification, review, decision, execution, and receipt. Client or DAO requests should acknowledge intake, confirm scope, update at milestones, notify changes, and confirm delivery and acceptance. ACS-assisted tasks should state ACS output status and when human validation is required.

## Status Update Format

Status updates should include runtime reference, current status, summary, completed work since last update, blockers or risks, required decision or action, next step, owner, and expected checkpoint if defined.

## Delay Notice Format

Material delays must state what is delayed, reason, impact on timeline, scope, cost, or risk, blocker owner, mitigation or replan, next checkpoint, and whether governance or change control is required.

## Principles

Communication should be clear, truthful, proportional, actionable, and recorded. Avoid vague progress, hidden blockers, fixed dates without basis, completion claims before validation, and private status that future operators cannot find.

## Channels

Runtime communication may use internal runtime records, client or DAO updates, governance forums or proposals, documentation changelogs, accountability reports, GitHub issues, or pull requests.

## Related Pages

- [Status Model](status-model.md)
- [Delays and Blockers](delays-and-blockers.md)
- [Change Control](change-control.md)
- [Accountability Records](accountability-records.md)
