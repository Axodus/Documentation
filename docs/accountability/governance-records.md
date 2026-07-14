---
schema_version: "1.0.0"
document_id: "ACCOUNT-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Governance Records"
summary: "Provides governed governance records guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACCOUNTABILITY"
authority_level: "CORE"
author: "Accountability Nucleus"
owner: "Accountability Nucleus"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-05"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "ACCOUNT-GDE-001"}, {type: "RELATES_TO", target: "GOV-GDE-004"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/accountability/governance-records.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Governance Records

---

## Purpose

Governance records preserve proposal context, voting outcomes, execution records, and rationale when those records come from verifiable governance sources.

## Record Contents

- Proposal records
- Vote records
- Execution records
- Reason codes
- Off-chain context
- On-chain traceability where possible

## Importance

Records connect governance decisions to operational execution and public accountability.

## Draft Record Rules

Governance records should not be summarized as approval unless the decision source is known and reviewable. Draft notes, planning requests, and local validation reports can support context, but they do not replace governance records.

Governance records should identify:

- proposal or decision identifier;
- decision body or authority;
- voting or approval result if applicable;
- scope approved;
- conditions and limitations;
- execution receipt requirement;
- supersession or rollback reference;
- publication status.

## Publication Boundary

This page does not approve governance authority or execution. Public governance claims require verified records and coordinator/governance review.
