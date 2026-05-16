# Change Control

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime

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
