---
schema_version: "1.0.0"
document_id: "ACCOUNT-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Financial Reports"
summary: "Provides governed financial reports guidance within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "ACCOUNT-GDE-001"}, {type: "RELATES_TO", target: "CORE-GDE-004"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/accountability/financial-reports.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Financial Reports

---

## Purpose

Financial reports provide transparent context for treasury, revenue, cost, and exposure.

## Report Contents

- Treasury snapshots
- Revenue sources
- Costs
- Strategy exposure
- Risk notes
- Known limitations
- Reporting period

## Guardrails

Reports must avoid misleading certainty and clearly separate realized results from projections.

## Draft Reporting Rules

Financial reporting documentation should keep realized data, estimates, assumptions, projections, and planned models separate. It must avoid investment advice, guaranteed returns, guaranteed APY, profit certainty, or unsupported treasury-performance claims.

Financial reports should identify:

- reporting period;
- data source;
- scope and exclusions;
- realized values versus estimates;
- risk notes;
- review owner;
- governance or treasury reference where applicable;
- limitations and unresolved reconciliation items.

## Publication Boundary

This page does not publish financial results or approve treasury claims. Financial or treasury reports require source evidence, reconciliation, review, and publication approval.
