---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-009"
aliases: []
document_type: "GUIDE"
title: "Delays and Blockers"
summary: "Defines blocker records, delay notices, severity, resolution, escalation, and status handling for Runtime."
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
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-002"}, {type: "RELATES_TO", target: "RUNTIME-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/delays-and-blockers.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Delays and Blockers

---

## Purpose

Delays and blockers are not failures by themselves. They become failures when hidden, undocumented, or unmanaged.

Runtime defines how blockers are identified, assigned, communicated, escalated, and resolved.

## Scope

This page applies to all Runtime work that cannot progress because of missing context, decisions, authority, reviews, resources, dependencies, or external systems.

## Definitions

- Blocker: dependency or condition preventing progress.
- Delay: progress slower than expected or checkpoint changed.
- Risk: potential problem that may become blocker or delay.
- Dependency: required input, decision, resource, review, or system needed to continue.

## Blocker Types

Blocker types include missing information, pending review, technical dependency, governance dependency, security dependency, treasury dependency, scope dependency, resource dependency, and external dependency.

## Blocker Record Fields

Blocker records should include blocker identifier, runtime identifier, type, description, owner, affected milestone, severity, creation time, next action, escalation requirement, expected resolution condition, status, and notes.

## Delay Notice Requirements

Material delay notices must state what is delayed, explain the reason, identify impact, name the owner, define next action, state whether scope change or governance review is required, avoid false certainty, and update the status record.

## Delay Severity

Severity may be minor, moderate, major, or critical. Critical delays affect governance, treasury, security, or user risk and require stronger visibility.

## Resolution Flow

1. Blocker is identified.
2. Blocker record is created.
3. Owner is assigned.
4. Impact is assessed.
5. Requester or stakeholder is notified when needed.
6. Escalation triggers are checked.
7. Resolution action is defined.
8. Status is updated.
9. Blocker closes when resolution condition is met.
10. Timeline or scope is updated if needed.
11. Accountability record is updated when material.

## Escalation Triggers

Escalate blockers that affect governance-sensitive items, security review, treasury or tokenomics, client or DAO commitments, scope, runtime policy thresholds, public claims, or reputation risk.

## Blocker Statuses

Blocker statuses may include `Open`, `In Resolution`, `Waiting On External`, `Escalated`, `Resolved`, `Deferred`, or `Superseded`.

## Anti-Patterns

Avoid hidden blockers, blocker without owner, delay without impact, false deadlines, and repeated delay without replan.

## Related Pages

- [Communication Cadence](communication-cadence.md)
- [Change Control](change-control.md)
- [Status Model](status-model.md)
- [Accountability Records](accountability-records.md)
