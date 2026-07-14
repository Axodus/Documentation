---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-004"
aliases: []
document_type: "GUIDE"
title: "Risk Controls"
summary: "Provides governed risk controls guidance within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-001"}, {type: "RELATES_TO", target: "RUNTIME-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/risk-controls.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Risk Controls

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
