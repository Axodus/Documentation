# Delays and Blockers

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime

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
