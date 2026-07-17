---
schema_version: "1.0.0"
document_id: "DOC-RPT-090"
aliases: []
document_type: "REPORT"
title: "Institutional Controlled Intake Evidence Register"
summary: "Maps every released intake candidate to its frozen Institutional source, transformation, semantic check, authority check, and boundary verdict."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.INSTITUTIONAL_INTAKE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Institutional Editorial Reviewer", "Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-03"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "index.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Controlled Intake Evidence Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-03
Candidate Set: INTAKE-EP4-0004 through INTAKE-EP4-0008
Candidate Expansion: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register is the candidate-level provenance and acceptance ledger for the
controlled intake execution.

## Evidence Records

| Evidence ID | Candidate ID | Source Repository | Source Commit | Source Path | Source Blob Hash | Target Artifact | Transformation Mode | Semantic Preservation Check | Authority Preservation Check | Boundary Check | Reviewer | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `INTAKE-EVD-EP4-0001` | `INTAKE-EP4-0004` | `Axodus/Institutional` | `b921dace4d6be81b2233e09981108a6b29794e70` | `research/terminology.md` | `8f18ecb1e8114e352d45bf9320bdc7ba4580a1ed` | `.rag/INSTITUTIONAL-TERMINOLOGY-INTAKE-REGISTER.md` | `METADATA_ONLY_INTAKE` | `SEMANTICALLY_PRESERVED_WITH_NORMALIZATION` | Institutional public/paper vocabulary remains source-owned | PASS; no private term mechanics or full definitions | Documentation Architecture Reviewer | `ACCEPTED` | Scope mappings and labels only |
| `INTAKE-EVD-EP4-0002` | `INTAKE-EP4-0005` | `Axodus/Institutional` | `b921dace4d6be81b2233e09981108a6b29794e70` | `research/claims-register.md` | `9ff2c88827a8bb12a67985b46cc1a1422c9c176b` | `.rag/INSTITUTIONAL-CLAIMS-METADATA-INTAKE-REGISTER.md` | `METADATA_ONLY_INTAKE` | `SEMANTICALLY_PRESERVED_WITH_NORMALIZATION` | Claim wording and approval remain source-owned | PASS; no full claim or private mechanic | Documentation Coordinator | `ACCEPTED` | Blocked and conditional states retained |
| `INTAKE-EVD-EP4-0003` | `INTAKE-EP4-0006` | `Axodus/Institutional` | `b921dace4d6be81b2233e09981108a6b29794e70` | `research/gaps.md` | `750493b918083944f343a4af279b026fe43898be` | `.rag/INSTITUTIONAL-RESEARCH-GAPS-INTAKE-REGISTER.md` | `BOUNDED_ANALYTICAL_ABSORPTION` | `SEMANTICALLY_PRESERVED_WITH_NORMALIZATION` | Research conclusions remain ungranted | PASS; non-authoritative internal backlog | Documentation Architecture Reviewer | `ACCEPTED` | Questions remained gaps, not facts |
| `INTAKE-EVD-EP4-0004` | `INTAKE-EP4-0007` | `Axodus/Institutional` | `b921dace4d6be81b2233e09981108a6b29794e70` | `papers/axodus-architecture-paper/author-ecosystem-clarification.md` | `b788ea413e9130ee775b9cee0a555642a7cc2b29` | `.rag/INSTITUTIONAL-AUTHOR-ECOSYSTEM-CLARIFICATION-INTAKE.md` | `BOUNDED_ANALYTICAL_ABSORPTION` | `SEMANTICALLY_PRESERVED_WITH_LIMITATIONS` | Authorship was not converted into governance, ownership, or technical authority | PASS; no module catalog, named-role details, or private mechanics | Institutional Editorial Reviewer / Security Reviewer | `ACCEPTED` | Source evidence status retained |
| `INTAKE-EVD-EP4-0005` | `INTAKE-EP4-0008` | `Axodus/Institutional` | `b921dace4d6be81b2233e09981108a6b29794e70` | `papers/axodus-architecture-paper/paper-scope-impact-analysis.md` | `af172e81e050af984c9530b960b10343224eacb6` | `.rag/INSTITUTIONAL-PAPER-SCOPE-IMPACT-INTAKE.md` | `BOUNDED_ANALYTICAL_ABSORPTION` | `SEMANTICALLY_PRESERVED_WITH_LIMITATIONS` | Paper scope and editorial authority remain Institutional | PASS; no manuscript prose or architecture decision | Institutional Editorial Reviewer / Documentation Architecture Reviewer | `ACCEPTED` | Only internal planning impacts retained |

## Reconciliation

```text
Eligible candidates: 5
Evidence records: 5
Accepted records: 5
Deferred records: 0
Blocked records: 0
Unaccounted candidates: 0
```

## Stale-Source Rule

A change to the Institutional commit or any recorded blob marks the affected
record `STALE_SOURCE_REVIEW_REQUIRED`. Automatic synchronization is prohibited.
