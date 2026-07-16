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
| <PageStatusBadge status="Draft" compact /> | The page is being actively developed and should not be treated as a final production specification. |
| <PageStatusBadge status="Planned" compact /> | The capability is part of the roadmap or design direction, but implementation is not confirmed. |
| <PageStatusBadge status="Prototype" compact /> | The capability may exist in an experimental form and should not be treated as production-ready. |
| <PageStatusBadge status="Testnet" compact /> | The capability may be validated in non-production environments only. |
| <PageStatusBadge status="Active if Verified" compact /> | The capability may be active only when supported by implementation evidence, governance records, and current deployment context. |
| <PageStatusBadge status="Deprecated" compact /> | The page or concept is retained for reference but should not guide current implementation. |
| <PageStatusBadge status="Canonical" compact /> | The page is a current official part of the public corpus; this does not assert implementation or production maturity. |
| <PageStatusBadge status="Reference" compact /> | The page provides navigation or supporting context and is not thereby optional, orphaned, or lower authority. |
| <PageStatusBadge status="Governed" compact /> | The page is explicitly classified as a documentary control surface; this does not activate governance execution. |
| <PageStatusBadge status="Baseline" compact /> | The page records a conceptual or documentary line of record, not a deployed system baseline. |
| <PageStatusBadge status="Review Required" compact /> | The page requires classification, domain, governance, security, or implementation review. |
| <PageStatusBadge status="Legacy" compact /> | The page is retained for compatibility or history and should not guide current implementation. |

## Interpretation Rule

If a page does not clearly state that a system is active and verified, readers should treat the material as design, planning, or documentation baseline.

## Documentation Boundaries

Documentation status does not replace security review, governance approval, legal review, deployment records, audit records, or operational acceptance.

`Canonical`, `Reference`, `Governed`, and `Baseline` describe documentary
posture. They must not be interpreted as active, implemented, operational,
production-ready, financially enabled, legally approved, or security validated.
