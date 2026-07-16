---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-006"
aliases: []
document_type: "GUIDE"
title: "ACS Integration"
summary: "Defines the conceptual ACS support, review boundaries, records, and prohibitions within Runtime."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "RUNTIME"
authority_level: "CORE"
author: "Axodus Runtime"
owner: "Axodus Runtime / ACS"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/acs-integration.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Integration

---

## Purpose

ACS strengthens Runtime by helping collect context, classify requests, identify missing information, summarize risk, generate handoffs, draft reports, and preserve knowledge.

ACS must operate inside Runtime, not above it.

## Scope

Runtime defines when ACS is used, how ACS output is validated, and when human, governance, security, treasury, or domain review is required.

## ACS Runtime Functions

ACS may support context loading, intake support, classification, risk analysis, scoping support, communication support, handoff support, and accountability support.

Examples include retrieving knowledge packs, summarizing docs, extracting request fields, identifying missing information, assigning draft domain and risk, flagging financial or security risks, drafting deliverables, preparing delay notices, generating Coder tasks, drafting governance briefs, and preparing final summaries.

## ACS Output Statuses

ACS output statuses may include:

- `Draft`: unreviewed agent output.
- `Needs Human Review`: output must be validated before use.
- `Validated`: human or owner confirmed accuracy.
- `Validated With Notes`: usable with limitations.
- `Rejected`: output not accepted.
- `Superseded`: replaced by newer output.

## Review Requirements by Risk

Low-risk outputs may use optional but recommended human review, especially for public docs. Medium-risk outputs need domain or Business owner review. High-risk outputs require mandatory human review and may need adversarial, governance, or security review. Critical outputs are analysis only and require authorized human, governance, security, treasury, or legal review as applicable.

## Agent Role Mapping

- Morpheus: strategy alignment, governance context, documentation structure, narrative consistency, and scope clarity.
- Trinity: trading risk, treasury context, operational feasibility, metrics, monitoring, and financial reporting support.
- Agent Smith: adversarial review, abuse detection, scope creep detection, governance bypass detection, and unsafe permission detection.

## ACS Cannot Do

ACS cannot approve scope as a client commitment, approve governance-sensitive items, approve treasury actions, approve tokenomics or reward policy, execute contract changes without authority, deploy production systems without review, publish public claims without validation, or update knowledge as source of truth without review.

This boundary also applies to Runtime interpretation: ACS support here remains
analysis- and review-bound, not autonomous production execution.

## ACS Runtime Record Fields

ACS records should include ACS output identifier, runtime identifier, agent or agents, task type, input context summary, output summary, assumptions, risk flags, missing information, recommendations, review required, validation status, related handoff or record, and timestamp.

## Anti-Patterns

Avoid ACS outside Runtime, ACS as final approval, unlogged agent output, stale knowledge use, and memory updates without validation.

## Related Pages

- [ACS Overview](../acs/overview.md)
- [ACS Runtime](../acs/runtime.md)
- [ACS Security and Risk](../acs/security-and-risk.md)
- [Runtime Validation](validation-and-confirmation.md)
- [Governance Escalation](governance-escalation.md)

## Canonical Traceability

- Integration: `INTG-EP8-0007`
- Canonical counterpart: [ACS Runtime](../acs/runtime.md)
- Interfaces: `INT-EP7-006`, `INT-EP7-007`, `INT-EP7-014`
- Authorities: `AUTH-EP8-0012`, `AUTH-EP8-0013`, `AUTH-EP8-0014`
- Evidence: `EVID-EP7-0008`, `EVID-EP7-0009`
- Status: prototype and review-bound; no production enforcement is implied.
