---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Change Control"
summary: "Provides governed change control guidance within the Axodus documentation corpus."
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
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/change-control.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Change Control

---

## Purpose

Runtime handles change transparently. New ideas, requirements, priorities, client requests, DAO demands, governance feedback, blockers, or risk findings may require changes after scope is approved.

Change is normal. Unrecorded change is dangerous.

## Scope

Change control applies after a runtime item has an approved or baseline scope, milestone, handoff, or delivery expectation.

## Change Types

Change types include clarification, correction, minor adjustment, scope expansion, scope reduction, priority change, timeline change, cost or resource change, governance change, security change, technical dependency change, and new runtime item.

## Flow

1. Change is identified.
2. Change record is created.
3. Original scope is referenced.
4. ACS or owner compares change to scope.
5. Change is classified.
6. Impact assessment is created.
7. Required reviews are identified.
8. Decision is made.
9. Scope is updated if approved.
10. Requester or stakeholders are notified.
11. Execution continues under updated scope.
12. Record is archived.

## Change Record Fields

Records should include change identifier, runtime identifier, original scope reference, requester, description, reason, classification, affected deliverables, impact on scope, timeline, cost, resources, risk, governance, security, tokenomics, treasury, decision, approver, conditions, updated scope reference, communication sent, and timestamp.

## Impact Assessment

Changes may affect timeline, resources, cost, risk, governance review, security review, accountability records, or requester expectations. The requester should understand any new conditions before execution continues.

## Decisions

Decisions may be `Approved`, `Approved With Conditions`, `Rejected`, `Deferred`, `Needs Clarification`, `Governance Required`, `Security Review Required`, or `New Item Required`.

## Governance-Sensitive Triggers

Governance review may be required when a change adds a custom DAO plugin, changes governance policy, changes token rewards or unlock rules, changes treasury or revenue distribution, changes Trading access or risk policy, changes Marketplace fee or payment policy, expands ACS tool authority, changes constitutional alignment, or changes public claims about Axodus status.

## Anti-Patterns

Avoid undocumented changes, chat-only changes, changes without impact analysis, governance changes without governance, endless change loops, and ACS analysis treated as final authorization.

## Related Pages

- [Business Change Requests](../business/change-requests.md)
- [Governance Escalation](governance-escalation.md)
- [Risk Controls](risk-controls.md)
