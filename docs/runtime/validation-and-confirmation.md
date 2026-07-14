---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-014"
aliases: []
document_type: "GUIDE"
title: "Validation and Confirmation"
summary: "Defines Runtime validation types, confirmation gates, records, decision states, and responsible roles."
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
relationships: [{type: "RELATES_TO", target: "ACS-GDE-001"}, {type: "RELATES_TO", target: "RUNTIME-GDE-004"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/validation-and-confirmation.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Validation and Confirmation

---

## Purpose

Validation and confirmation make Runtime trustworthy. Validation checks whether information, scope, assumptions, analysis, deliverables, or execution are correct. Confirmation records that the responsible authority accepted a step, decision, or output.

## Scope

This page applies to intake, classification, ACS output, scope, governance, security, treasury, delivery, acceptance, and archive workflows.

## Validation vs Confirmation

Validation is a quality and correctness check. Confirmation is an explicit approval, acceptance, or record by the responsible party.

Example: ACS summarizes a request, the Business owner validates the summary, the requester confirms the scope, Governance confirms approval if required, reviewers validate delivery, and the requester or owner confirms acceptance.

## Validation Types

- Intake validation: requester identity, objective, fields, and missing information.
- Classification validation: domain, risk level, owner, and governance requirement.
- ACS output validation: summary accuracy, assumptions, risk flags, missing information, and unsupported claims.
- Scope validation: deliverables, boundaries, dependencies, acceptance criteria, and change policy.
- Governance validation: constitutional alignment, proposal context, approval path, and decision record.
- Security validation: permissions, contracts, data, tool access, API keys, and secret handling.
- Treasury validation: capital impact, exposure, reporting, and governance approval.
- Delivery validation: output matches scope, reviews are complete, documentation exists, and known limitations are disclosed.
- Acceptance validation: requester or owner accepts delivery and unresolved items are recorded.

## Confirmation Gates

Confirmation gates include intake confirmation, scope confirmation, governance confirmation, execution confirmation, delivery confirmation, acceptance confirmation, and archive confirmation.

## Confirmation Record Fields

Confirmation records should include confirmation identifier, runtime identifier, confirmation type, confirmer, authority role, confirmed scope, conditions, timestamp, related record, and notes.

## Decision Types

Validation decisions may be `Validated`, `Validated With Notes`, `Needs Revision`, `Rejected`, `Escalated`, or `Blocked`.

## Who Validates What

Business owners validate client context, intake accuracy, business fit, and client communication. Product owners validate domain accuracy and product scope. Governance validates policy-sensitive items, DAO federation, plugin approval, treasury impact, and tokenomics impact. Security reviewers validate contracts, APIs, permissions, tool risk, and sensitive infrastructure. Treasury reviewers validate exposure and financial reporting. Requesters validate whether delivery matches requested scope.

ACS assists with analysis, consistency checks, and risk detection, but it does not final-validate sensitive items or approve its own output.

## Anti-Patterns

Avoid implicit confirmation, validation by an unqualified actor, ACS self-approval, scope confirmation after execution, delivery validation without acceptance criteria, and missing governance validation for sensitive decisions.

## Related Pages

- [ACS Integration](acs-integration.md)
- [Risk Controls](risk-controls.md)
- [Accountability Records](accountability-records.md)
