---
schema_version: "1.0.0"
document_id: "DOC-RPT-082"
aliases: []
document_type: "REPORT"
title: "Institutional Intake Alignment Decision Register"
summary: "Records authoritative alignment decisions, consumer modes, mirror limits, and REQ-03 eligibility for the five alignment families."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.INSTITUTIONAL_INTAKE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
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
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-02"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "governance/maturity-taxonomy.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Intake Alignment Decision Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register records the final REQ-02 authority and consumer decisions for the
five alignment families frozen by REQ-01.

## Decisions

| Decision ID | Knowledge Family | Input Candidate ID | Institutional Source | Documentation Source | Authority Decision | Consumer Mode | Mirror Mode | Attribution Requirement | Revision Pinning | Conflict Rule | REQ-03 Eligibility | Review Owner | Review Trigger | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ALIGN-EP4-0001` | Maturity taxonomy | `INTAKE-EP4-0001` | `governance/maturity-taxonomy.md` | `governance/DOCUMENTATION-LIFECYCLE.md`; `documentation/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md` | `DUAL_AUTHORITY_BY_SCOPE` | Scope-qualified crosswalk | No prose mirror; metadata and decision notes only | Mandatory source attribution for Institutional L/D references | Required | Schema `maturity_level` never maps directly to Institutional D-Level or L-Level | `NO` | Documentation Coordinator / Institutional Editorial Reviewer | Taxonomy, schema, or maturity-assessment change | `ACTIVE` | Alignment completed without release |
| `ALIGN-EP4-0002` | Public disclosure boundary | `INTAKE-EP4-0002` | `governance/public-disclosure-boundary.md` | `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md`; private disclosure governance | `DUAL_AUTHORITY_BY_SCOPE` | Dual gate evaluation | Policy-pointer metadata only | Mandatory source attribution when Institutional wording is referenced | Required | Most restrictive valid rule prevails | `NO` | Documentation Coordinator / Institutional Editorial Reviewer / Security Reviewer | New public claim, paper update, or disclosure request | `ACTIVE` | No public merge or publication expansion |
| `ALIGN-EP4-0003` | Evidence boundary | `INTAKE-EP4-0003` | `governance/evidence-boundaries.md` | `documentation/DOCUMENTATION-EVIDENCE-FRAMEWORK.md` | `DUAL_AUTHORITY_BY_SCOPE` | Consumer-specific evidence routing | Policy metadata only | Mandatory attribution for external evidence classes | Required | Private, paper-only, and derived evidence keep their source limits | `NO` | Documentation Architecture Reviewer / Institutional Editorial Reviewer | Evidence policy, citation policy, or claim routing change | `ACTIVE` | Alignment completed without release |
| `ALIGN-EP4-0004` | Terminology | `INTAKE-EP4-0004` | `research/terminology.md` | `docs/overview/terminology.md`; `docs/glossary/terms.md`; `.knowledge/core/terminology.akp.md` | `DUAL_AUTHORITY_BY_SCOPE` | Scoped vocabulary control | Bounded terminology metadata mirror | Mandatory source attribution for Institutional or paper-facing terms | Required | No silent replacement of product, private, or public terms | `YES` | Documentation Coordinator / Institutional Editorial Reviewer | Controlled term, boundary, or dangerous-term rule changes | `ACTIVE` | Released for metadata-only controlled absorption |
| `ALIGN-EP4-0005` | Claims register | `INTAKE-EP4-0005` | `research/claims-register.md` | Documentation evidence and decision records | `DUAL_AUTHORITY_BY_SCOPE` | Claim-metadata intake only | Metadata-only claim mirror | Mandatory source attribution for imported claim metadata | Required | Intake never upgrades claim approval, evidence, or publicability | `YES` | Documentation Coordinator / Institutional Human Reviewer / Legal Reviewer | Claim wording, evidence, or approval status changes | `ACTIVE` | Released for metadata-only controlled absorption |

## Status Summary

```text
Alignment families reconciled: 5/5
Final dispositions assigned: 5/5
REQ-03 additionally eligible families: terminology, claims register
Reference-only families after alignment: maturity taxonomy, disclosure boundary, evidence boundary
```
