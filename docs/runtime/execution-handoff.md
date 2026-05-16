# Execution Handoff

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime

---

## Purpose

Execution handoff is the moment where approved context becomes action. A valid handoff gives the executor enough context to act safely and enough constraints to avoid overreach.

## Scope

This page applies to Coder, engineering, governance, security, treasury, operations, documentation, BBA, and ACS handoffs.

## Handoff Types

- Coder handoff: implementation, documentation, or configuration work.
- Governance handoff: proposal context or governance submission.
- Security handoff: review of sensitive contracts, APIs, tools, infrastructure, or permissions.
- Treasury handoff: review of financial action, exposure, or reporting.
- Operations handoff: approved operational task.
- Documentation handoff: public or internal documentation update.
- BBA handoff: campaign or growth operation under approved scope.
- ACS handoff: analysis under defined runtime scope.

## Handoff Package Fields

Handoffs should include handoff identifier, runtime identifier, source actor, target actor, handoff type, approved scope reference, objective, context summary, deliverables, constraints, out-of-scope items, dependencies, risks, required reviews, acceptance criteria, governance decision reference if any, security requirements if any, files or repositories if any, expected output format, completion evidence, communication channel, and next checkpoint.

## Coder Handoff Requirements

Coder handoffs require a clear task goal, target repository or files, expected pages or files, source-of-truth context, constraints, implementation rules, testing requirements, documentation requirements, review requirements, definition of done, and a do-not-touch list when needed.

Coder handoffs must not ask Coder to invent missing governance policy, claim unimplemented features, bypass security review, or execute treasury or contract actions without authority.

## Governance, Security, and Treasury Handoffs

Governance handoffs should include proposal summary, requested decision, affected nuclei, risk level, governance layer, metadata, ACS analysis if any, reason codes, execution plan, and accountability output.

Security handoffs should include threat model, sensitive assets, permissions, contracts or APIs, tool access, review scope, risks, outputs, and blocking criteria.

Treasury handoffs should include requested action, assets, amount or exposure, source and destination when applicable, objective, risk assessment, governance reference, reporting requirement, and execution receipt requirement.

## Handoff Acceptance

The target actor should confirm receipt, scope understanding, constraints, missing information, and whether the handoff is accepted, rejected, or needs revision.

Statuses may include `Draft`, `Sent`, `Accepted`, `Needs Clarification`, `Rejected`, or `Superseded`.

## Anti-Patterns

Avoid handoff without scope, constraints, review requirements, acceptance, or current context.

## Related Pages

- [Request Lifecycle](request-lifecycle.md)
- [Validation and Confirmation](validation-and-confirmation.md)
- [Governance Escalation](governance-escalation.md)
- [Business Delivery Lifecycle](../business/delivery-lifecycle.md)
- [Security Overview](../security/overview.md)
