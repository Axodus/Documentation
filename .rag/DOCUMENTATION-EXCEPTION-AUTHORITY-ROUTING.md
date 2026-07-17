---
schema_version: "1.0.0"
document_id: "DOC-RPT-039"
aliases: []
document_type: "REPORT"
title: "Documentation Exception Authority Routing"
summary: "Records proposed authority routes and evidence states for the remaining documentation exception population."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EXCEPTIONS.AUTHORITY"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer", "Generator Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-04"
last_updated: "2026-07-07"
last_reviewed: "2026-07-07"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{"type":"DEPENDS_ON","target":"DOC-REF-010"},{"type":"RELATES_TO","target":"DOC-POL-001"},{"type":"RELATES_TO","target":"DOC-ADR-021"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-02", "AXODUS-DOCUMENTATION-EPIC-03-REQ-03"]
related_adrs: ["DOC-ADR-001","DOC-ADR-017","DOC-ADR-019","DOC-ADR-021"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{"repository":"Axodus/Documentation","path":".rag/DOCUMENTATION-EXCEPTION-DISPOSITION-INVENTORY.md","ref":"main","kind":"SOURCE","environment":"LOCAL"},{"repository":"Axodus/Documentation","path":"governance/DOCUMENTATION-AUTHORITY-MODEL.md","ref":"main","kind":"SOURCE","environment":"LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Exception Authority Routing

## Summary

Authority review is required for 327 exceptions: 285 internal knowledge paths and 42 other/historical paths. Registry owner and approver fields exist for all 573 records, but current confirmation remains pending.

| Domain | Authority review | Route |
|---|---:|---|
| `docs/` | 0 | Future batch authority gate; proposal is not promotion approval |
| `.knowledge/` | 285 | Domain authority review; path cannot grant authority |
| `.instructions/` | 0 | Security-first review |
| `other/historical` | 42 | Retention and authority review with accepted risk |

Commit author, filename, and folder name are not authority evidence. ADR-021 approves disposition governance, but no individual authority decision is applied by this routing report.

## Scope/Core Distribution

| Scope/core | Total | Migrate | Authority | Security | Defer | Security route | Authority route |
|---|---:|---:|---:|---:|---:|---:|---:|
| `ACCOUNT` | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| `ACADEMY` | 23 | 9 | 14 | 0 | 0 | 0 | 14 |
| `ACS` | 30 | 14 | 16 | 0 | 0 | 0 | 16 |
| `BBA` | 32 | 14 | 18 | 0 | 0 | 0 | 18 |
| `BUSINESS` | 30 | 13 | 17 | 0 | 0 | 0 | 17 |
| `DEFI` | 38 | 17 | 21 | 0 | 0 | 38 | 21 |
| `DEX` | 37 | 14 | 23 | 0 | 0 | 37 | 23 |
| `GOV` | 18 | 6 | 12 | 0 | 0 | 0 | 12 |
| `LOTTERY` | 37 | 14 | 23 | 0 | 0 | 37 | 23 |
| `MARKET` | 39 | 15 | 24 | 0 | 0 | 39 | 24 |
| `MINING` | 41 | 16 | 25 | 0 | 0 | 41 | 25 |
| `RUNTIME` | 27 | 10 | 17 | 0 | 0 | 0 | 17 |
| `SEC` | 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| `TOKEN` | 32 | 15 | 17 | 0 | 0 | 32 | 17 |
| `TRADING` | 31 | 13 | 18 | 0 | 0 | 31 | 18 |
| `TREASURY` | 29 | 11 | 18 | 0 | 0 | 29 | 18 |
| `CORE` | 27 | 5 | 22 | 0 | 0 | 0 | 22 |
| `DOCUMENTATION` | 101 | 0 | 0 | 59 | 42 | 59 | 42 |

## Gate Preservation

This request inventoried and classified remaining exception dispositions only. It did not migrate legacy documents, promote canonical documents from legacy sources, reserve final IDs, remove or mutate baseline entries, remove or mutate exception registry entries, enable production, execute financial actions, use credentials, enable providers, write contracts, modify production databases or open operational gates.
