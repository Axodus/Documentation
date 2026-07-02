---
schema_version: "1.0.0"
document_id: "CORE-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Documentation Status"
summary: "Provides the governed overview for Documentation Status within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-18"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-GDE-006"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["AXODUS.DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/documentation-status.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Status

---

## Purpose

This page explains how to interpret maturity labels across Axodus documentation.

## Status Labels

| Status | Meaning |
| --- | --- |
| Draft | The page is being actively developed and should not be treated as a final production specification. |
| Planned | The capability is part of the roadmap or design direction, but implementation is not confirmed. |
| Needs Review | The page requires domain, governance, security, or implementation review before it can be relied on. |
| Prototype | The capability may exist in an experimental form and should not be treated as production-ready. |
| Testnet | The capability may be validated in non-production environments only. |
| Active if Verified | The capability may be active only when supported by implementation evidence, governance records, and current deployment context. |
| Deprecated | The page or concept is retained for reference but should not guide current implementation. |

## Interpretation Rule

If a page does not clearly state that a system is active and verified, readers should treat the material as design, planning, or documentation baseline.

## Documentation Boundaries

Documentation status does not replace security review, governance approval, legal review, deployment records, audit records, or operational acceptance.
