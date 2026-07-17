---
schema_version: "1.0.0"
document_id: "DOC-RPT-146"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Source of Truth Register"
summary: "Classifies the source-of-truth posture for each EPIC-06 target core and its dominant page clusters."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_06"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-06-SOURCE-OF-TRUTH-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Source of Truth Register

## Source-of-Truth Classes

- `DOCUMENTATION_CANONICAL`
- `DOCUMENTATION_PUBLIC_BASELINE`
- `DOCUMENTATION_LEGACY_REFERENCE`
- `DOCUMENTATION_REQUEST_EVIDENCE`
- `INSTITUTIONAL_PUBLIC_REFERENCE`
- `PRIVATE_DISCLOSURE_REFERENCE_ONLY`
- `RESEARCH_CONTEXT_ONLY`
- `UNKNOWN_AUTHORITY`

## Core Register

| Core | Canonical Pages | Public Baseline Cluster | Legacy Reference Cluster | Institutional Use | Private Use | Reading |
| --- | --- | --- | --- | --- | --- | --- |
| `business` | `docs/business/overview.md` | Remaining `docs/business/*.md` pages | `docs/business/README.md` | Review control only, not authority transfer | Boundary review only | Existing page set is broad enough for consolidation-first treatment. |
| `mining` | Governed Mining guides: overview, architecture, infrastructure, mining-models, risk, security | Ungoverned support, alignment, economics, telemetry, and product pages | `docs/mining/README.md` | Review control only | Boundary review only | Most gaps are authority/status/boundary quality gaps, not breadth gaps. |
| `lottery` | Governed Lottery guides: overview, cryptodraw, game-models, responsible participation, risk, security | Ungoverned mechanism and operations pages | `docs/lottery/README.md` | Review control only | Boundary and legal review only | Legal-safe publication is the decisive gating factor. |
| `treasury` | Governed Treasury guides: overview, compliance, custody, risk | Ungoverned policy, allocation, architecture, reporting, and alignment pages | `docs/treasury/README.md` | Review control only | Boundary review only | Draft policy pages are not active operating truth. |
| `tokenomics` | `docs/tokenomics/overview.md` | Ungoverned mechanism, utility, participation, and reporting pages | `docs/tokenomics/README.md` | Review control only | Boundary review only | Breadth is high, but canonical coverage is thin relative to risk. |
| `runtime` | Governed Runtime guide cluster except README | none material beyond governed set | `docs/runtime/README.md` | Review control only | Boundary review only | Runtime is already mostly canonical and functions as a reference surface for other cores. |

## Request-State Rule

`requests/` may inform documentation review as `DOCUMENTATION_REQUEST_EVIDENCE`.
It does not become public truth for:

- activation
- production readiness
- financial execution
- governance approval
- legal availability

## Source-of-Truth Freeze by Need

| Need | Frozen Source Class | Reading |
| --- | --- | --- |
| Public canonical wording | `DOCUMENTATION_CANONICAL` | Existing governed pages remain the first authority surface. |
| Ungoverned but already-public detail | `DOCUMENTATION_PUBLIC_BASELINE` | Eligible for hardening before any new-page creation. |
| Navigation and stubs | `DOCUMENTATION_LEGACY_REFERENCE` | Candidates for consolidation, not authority anchors. |
| Terminology and boundary comparison | `INSTITUTIONAL_PUBLIC_REFERENCE` | Review control only. |
| Sensitive mechanics, finance, legal, or unpublished operations | `PRIVATE_DISCLOSURE_REFERENCE_ONLY` | Never publicized by default during EPIC-06. |
