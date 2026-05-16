# Risk Controls

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime

---

## Purpose

Runtime is a risk control system. It prevents operational failure by making status, scope, authority, validation, execution, change, and accountability explicit.

Risk controls must be proportional. Low-risk work should move quickly. High-risk work must slow down for review.

## Scope

This page defines Runtime risk categories, controls, risk levels, control gates, and anti-patterns.

## Risk Categories and Controls

- Unclear authority: assign owner, define approver, and record review requirements.
- Vague scope: require scope document, acceptance criteria, and out-of-scope items.
- Governance bypass: classify governance triggers, require escalation record, and pause sensitive execution until decision.
- ACS overreach: mark ACS outputs as draft or needs review, require human validation, and prohibit sensitive autonomous execution.
- Security gap: require security review, permission model, and sensitive asset documentation.
- Treasury gap: require treasury review, exposure and reporting definition, and execution receipt.
- Tokenomics gap: require policy and contract validation, avoid unverified token claims, and use governance review when material.
- Hidden delay: create blocker record, send delay notice, and assign resolution owner.
- Scope creep: require change request, impact assessment, and approval before scope update.
- Implementation drift: validate against scope and request revision when needed.
- Accountability gap: create records matching materiality, archive final context, and link evidence.
- Public claim risk: review claims, mark planned vs active, and avoid guarantees.

## Risk Levels

- Low: minor docs, internal notes, or simple non-sensitive tasks; basic status and owner are sufficient.
- Medium: client scope, product docs, Marketplace listings, or non-sensitive features; scope review, domain validation, and status updates are expected.
- High: DAO plugins, token reward policy, Trading access, smart contract-related work, or public financial claims; ACS analysis, human review, governance or security review, and accountability record are expected.
- Critical: treasury execution, production contract upgrade, emergency governance action, or sensitive ACS tool permission; formal authority, no autonomous execution, execution receipt, and post-action accountability are required.

## Control Gates

Runtime uses intake, classification, validation, governance, scope, approval, change, delivery, acceptance, and accountability gates to reduce missing context, wrong routing, unreviewed assumptions, governance bypass, vague commitments, unauthorized execution, scope creep, implementation drift, unresolved completion, and lost traceability.

## Anti-Patterns

Avoid fast-but-blind execution, review theater, excessive bureaucracy for low-risk work, risk without owner, unrecorded conditions, and public docs without claim review.

## Related Pages

- [Governance Escalation](governance-escalation.md)
- [ACS Integration](acs-integration.md)
- [Change Control](change-control.md)
- [Accountability Records](accountability-records.md)
