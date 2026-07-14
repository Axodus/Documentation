---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-013"
aliases: []
document_type: "GUIDE"
title: "Status Model"
summary: "Defines the Runtime status vocabulary, transition fields, rules, and anti-patterns."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/status-model.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Status Model

---

## Purpose

Runtime status is the shared language for operational clarity. Status must communicate where an item is, what blocks it, who owns the next action, whether review is required, and whether it is complete, rejected, cancelled, superseded, or archived.

## Scope

Every material request, proposal, task, change, handoff, milestone, delivery, or accountability item should have a status.

## Core Statuses

- `New`: item created but not processed.
- `Intake Incomplete`: required information is missing.
- `Intake Complete`: basic context is collected.
- `Classified`: domain, type, risk, and owner are identified.
- `Under ACS Analysis`: ACS or agents are reviewing context.
- `Under Human Review`: responsible reviewer is validating output.
- `Governance Required`: governance review is needed.
- `Security Review Required`: security-sensitive area requires review.
- `Treasury Review Required`: financial or capital exposure requires review.
- `Tokenomics Review Required`: reward, utility, unlock, or token policy requires review.
- `Ready for Scoping`: enough context exists to define deliverables.
- `Scoped`: deliverables, boundaries, dependencies, and acceptance are defined.
- `Pending Approval`: waiting for client, DAO, internal, or governance approval.
- `Approved`: correct authority approved scope or action.
- `In Execution`: approved work is being performed.
- `In Delivery`: output is being finalized or submitted.
- `Blocked`: progress requires dependency, information, or authority.
- `Delayed`: progress is slower than expected or a checkpoint changed.
- `Change Request Open`: requested change is under review.
- `Delivered`: output submitted for acceptance.
- `Accepted`: delivery accepted by authorized reviewer or requester.
- `Rejected`: request, scope, change, or delivery not accepted.
- `Cancelled`: item stopped by requester, owner, or governance.
- `Superseded`: replaced by newer item, policy, or decision.
- `Archived`: final record preserved.

## Status Fields

Status records should include status, status reason, owner, next action, blocker if any, required review, update timestamp, updater, expected next checkpoint if defined, and related records.

## Transition Rules

- `New` to `Intake Complete` requires minimum context.
- `Intake Complete` to `Classified` requires domain, request type, risk, and owner.
- `Classified` to `Under ACS Analysis` requires ACS analysis need or request.
- `Classified` to `Ready for Scoping` requires low risk and sufficient context.
- Any status can move to `Governance Required` when a governance trigger appears.
- `Scoped` to `Pending Approval` requires complete scope.
- `Pending Approval` to `Approved` requires approval record.
- `Approved` to `In Execution` requires execution handoff.
- `In Execution` to `Delivered` requires deliverables.
- `Delivered` to `Accepted` requires acceptance validation.
- Any status can move to `Blocked` when dependency or authority is missing.
- Any status can move to `Change Request Open` when post-scope change is requested.
- Any status can move to `Archived` when exit condition and record exist.

## Anti-Patterns

Avoid status without next action, blocked without reason, approved without approver, delivered without scope reference, archived without record, and delayed without notice.

## Related Pages

- [Request Lifecycle](request-lifecycle.md)
- [Communication Cadence](communication-cadence.md)
- [Delays and Blockers](delays-and-blockers.md)
