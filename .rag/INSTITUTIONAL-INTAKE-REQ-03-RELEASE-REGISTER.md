---
schema_version: "1.0.0"
document_id: "DOC-RPT-083"
aliases: []
document_type: "REPORT"
title: "Institutional Intake REQ-03 Release Register"
summary: "Records which intake candidates are or are not eligible for controlled absorption in REQ-03 and under which constraints."
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
implementation_refs: [{repository: "Axodus/Institutional", path: "research/gaps.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Intake REQ-03 Release Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Controlled Absorption: NOT_PERFORMED
Cross-Repository Content Copy: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register freezes the candidate set that REQ-03 may or may not process
through controlled absorption. It does not execute the absorption.

## Release Decisions

| Release ID | Candidate ID | Source Path | Current Disposition | Authority Status | Boundary Status | Legal/IP Status | Target Documentation Surface | Allowed Intake Mode | Required Transformation | Provenance Rule | Semantic Preservation Rule | Rollback Rule | Release Decision | Blocking Dependencies | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `INTAKE-REL-EP4-0001` | `INTAKE-EP4-0001` | `governance/maturity-taxonomy.md` | `FREEZE_FOR_ALIGNMENT` | Clear by scope | Public, but scope-collision risk | Needs attribution; no external score reuse | No REQ-03 target | `REFERENCE_ONLY` | No absorption permitted | Pin Institutional revision and blob | Preserve crosswalk decisions only | Revert by removing any future metadata-only pointer | `NOT_RELEASED_REFERENCE_ONLY` | Alignment completed as reference-only | Schema collision remains intentionally unresolved by absorption |
| `INTAKE-REL-EP4-0002` | `INTAKE-EP4-0002` | `governance/public-disclosure-boundary.md` | `FREEZE_FOR_ALIGNMENT` | Clear by scope | Public with strict overlap | Needs attribution and legal routing for external use | No REQ-03 target | `REFERENCE_ONLY` | No absorption permitted | Pin Institutional revision and blob | Preserve source-specific approval boundaries | Revert by removing any future reference record | `NOT_RELEASED_REFERENCE_ONLY` | Alignment completed as dual authority by scope | Policy remains source-controlled |
| `INTAKE-REL-EP4-0003` | `INTAKE-EP4-0003` | `governance/evidence-boundaries.md` | `FREEZE_FOR_ALIGNMENT` | Clear by scope | Public with private/paper exclusions | Citation and consumer boundaries must remain explicit | No REQ-03 target | `REFERENCE_ONLY` | No absorption permitted | Pin Institutional revision and blob | Preserve evidence-class separation | Revert by removing any future reference record | `NOT_RELEASED_REFERENCE_ONLY` | Alignment completed as dual authority by scope | Evidence classes remain source-bound |
| `INTAKE-REL-EP4-0004` | `INTAKE-EP4-0004` | `research/terminology.md` | `FREEZE_FOR_ALIGNMENT` | Clear by scope | Public terms only; no private import | Branding, token, regulated, or external terms remain review-bound | Future canonical terminology control record | `CONTROLLED_TERM_METADATA` | Extract scoped terms, mappings, public labels, internal terms, and conflict states only | Preserve source path, revision, and per-term scope | Preserve original meaning and scope qualifiers; no prose copy | Revert by removing imported metadata rows and restoring prior register state | `RELEASED_WITH_CONDITIONS` | No verbatim copy; no silent term replacement | Released for metadata-only terminology control |
| `INTAKE-REL-EP4-0005` | `INTAKE-EP4-0005` | `research/claims-register.md` | `FREEZE_FOR_ALIGNMENT` | Clear by scope | Public/paper claims only; no private broadening | Legal and publicability qualifiers must remain attached | Future internal claim intake register | `CONTROLLED_CLAIM_METADATA` | Extract claim ID, class, evidence state, allowed wording status, and scope only | Preserve source path, revision, and claim status | Preserve qualifiers and blocked states; do not strengthen wording | Revert by removing imported metadata rows and restoring prior register state | `RELEASED_WITH_CONDITIONS` | No claim text strengthening; no approval transfer | Released for metadata-only claim control |
| `INTAKE-REL-EP4-0006` | `INTAKE-EP4-0006` | `research/gaps.md` | `FREEZE_FOR_CONTROLLED_ABSORPTION` | Clear | Public research context only | No legal blocker identified at intake stage | Future canonical research-context record | `ABSORB_AS_RESEARCH_CONTEXT` | Convert source gaps into bounded research-context metadata and open questions only | Preserve source path, revision, and draft status | Preserve questions as questions; do not convert into facts | Revert by removing the derived Documentation artifact and metadata entries | `RELEASED_WITH_CONDITIONS` | Must preserve non-authoritative research status | Initial REQ-03 candidate remains released |
| `INTAKE-REL-EP4-0007` | `INTAKE-EP4-0007` | `papers/axodus-architecture-paper/author-ecosystem-clarification.md` | `FREEZE_FOR_CONTROLLED_ABSORPTION` | Clear for metadata-only use | Boundary-sensitive but public source | Legal and brand-sensitive reuse remains conditional | Future internal claim intake register | `ABSORB_AS_CLAIM_RECORD` | Extract provenance-safe claim metadata and exclusions only | Preserve source path, revision, and paper-line source qualifier | Preserve module-level exclusions and source-bound caution | Revert by removing the derived Documentation artifact and metadata entries | `RELEASED_WITH_CONDITIONS` | No module-detail copy; no public inventory expansion | Initial REQ-03 candidate remains released |
| `INTAKE-REL-EP4-0008` | `INTAKE-EP4-0008` | `papers/axodus-architecture-paper/paper-scope-impact-analysis.md` | `FREEZE_FOR_CONTROLLED_ABSORPTION` | Clear for bounded context | Paper-line source; no paper prose transfer | External-use status remains Institutional | Future cross-repository research-context record | `ABSORB_AS_RESEARCH_CONTEXT` | Extract exclusions, bounded reusable-context metadata, and scope decisions only | Preserve source path, revision, and paper-line qualifier | Preserve paper-only exclusions and analytical status | Revert by removing the derived Documentation artifact and metadata entries | `RELEASED_WITH_CONDITIONS` | No manuscript-prose copy; no paper-authority transfer | Initial REQ-03 candidate remains released |

## Reconciliation

```text
Candidates evaluated for REQ-03 release: 8
Released or released with conditions: 5
Not released: 3
Private candidates released: 0
Paper files modified: 0
Controlled absorption executed: 0
```

The released set is:

- `INTAKE-EP4-0004`
- `INTAKE-EP4-0005`
- `INTAKE-EP4-0006`
- `INTAKE-EP4-0007`
- `INTAKE-EP4-0008`

The non-released set is:

- `INTAKE-EP4-0001`
- `INTAKE-EP4-0002`
- `INTAKE-EP4-0003`
