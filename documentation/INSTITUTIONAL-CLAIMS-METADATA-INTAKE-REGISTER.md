---
schema_version: "1.0.0"
document_id: "DOC-RPT-085"
aliases: []
document_type: "REPORT"
title: "Institutional Claims Metadata Intake Register"
summary: "Records bounded metadata for Institutional claims without reproducing claim wording, upgrading evidence, or granting publication approval."
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
implementation_refs: [{repository: "Axodus/Institutional", path: "research/claims-register.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Claims Metadata Intake Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-03
Candidate: INTAKE-EP4-0005
Executed Mode: METADATA_ONLY_INTAKE
Development Level: D2
Claim Wording Copy: NOT_AUTHORIZED
Claim Strengthening: NOT_AUTHORIZED
Publication Approval: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register lets Documentation discover and route Institutional claim
metadata without becoming a second public claims register. It records scope,
status, evidence posture, and review requirements only.

## Claim Authority Boundary

Institutional remains authoritative for its public and paper claim wording,
qualifiers, evidence status, and publication state. Documentation controls only
this local metadata record and its internal lifecycle.

## Source Revision

```text
Repository: Axodus/Institutional
Path: research/claims-register.md
Commit: b921dace4d6be81b2233e09981108a6b29794e70
Blob: 9ff2c88827a8bb12a67985b46cc1a1422c9c176b
Source authority: Institutional public and paper claims ledger
Intake date: 2026-07-14
Intake request: DOCUMENTATION-REORG-INTAKE-REQ-03
Transformation mode: METADATA_ONLY_INTAKE
```

## Metadata Intake Method

The intake retained stable source identifiers and normalized each claim to a
short subject label, class, publication posture, evidence posture, review
route, and conflict state. It intentionally excluded complete claim wording,
allowed wording, explanations, and publication-ready prose.

## Claim Classification Model

The local classes are `INSTITUTIONAL_PUBLIC_CLAIM`, `PAPER_CLAIM`,
`DOCUMENTATION_INTERNAL_CLAIM`, `TECHNICAL_IMPLEMENTATION_CLAIM`,
`PRIVATE_CONTROLLED_CLAIM`, `HISTORICAL_CLAIM`, `CONFLICTING_CLAIM`, and
`UNVERIFIED_CLAIM`.

## Claim Records

All rows inherit the source path, commit, and blob above. Consumer mode is
`REVISION_PINNED_METADATA_ONLY` for every row.

| Claim Intake ID | Institutional Claim Identifier | Claim subject | Claim class | Authority scope | Publication state | Evidence state | Verification state | Review owner | Conflict status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| `CLAIM-INTAKE-0001` | `AX-001` | Project-history duration | `UNVERIFIED_CLAIM` | Institutional | Precise form blocked | Author context only | Unverified | Institutional Human Reviewer | Evidence gap | Qualifier retained |
| `CLAIM-INTAKE-0002` | `AX-002` | Modular-core count | `UNVERIFIED_CLAIM` | Institutional | Blocked | No repository evidence | Unverified | Institutional Human Reviewer | Inventory evidence missing | No numeric claim imported |
| `CLAIM-INTAKE-0003` | `AX-003` | L-Level taxonomy | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional operational taxonomy | Conditional | Author-approved taxonomy | Source-bounded | Institutional Editorial Reviewer | Validation disclaimer required | Not schema `maturity_level` |
| `CLAIM-INTAKE-0004` | `AX-004` | D-Level taxonomy | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional operational taxonomy | Conditional | Author-approved taxonomy | Source-bounded | Institutional Editorial Reviewer | Validation disclaimer required | Not schema `maturity_level` |
| `CLAIM-INTAKE-0005` | `AX-005` | Maximum development state | `UNVERIFIED_CLAIM` | Institutional | Blocked | No repository evidence | Unverified | Institutional Human Reviewer | Evidence gap | No status inference |
| `CLAIM-INTAKE-0006` | `AX-006` | Operational readiness | `TECHNICAL_IMPLEMENTATION_CLAIM` | Technical and Institutional | Contrary form blocked | No supporting evidence | Unverified | Technical Owner / Institutional Reviewer | Critical implementation conflict | Prototype qualifier retained |
| `CLAIM-INTAKE-0007` | `AX-007` | Adoption and measured impact | `TECHNICAL_IMPLEMENTATION_CLAIM` | Technical and Institutional | Blocked | No supporting evidence | Unverified | Technical Owner / Institutional Reviewer | Empirical evidence missing | No adoption inference |
| `CLAIM-INTAKE-0008` | `AX-008` | Education-linked governance effect | `PAPER_CLAIM` | Institutional paper line | Hypothesis only | No Axodus evaluation | Unverified | Institutional Editorial Reviewer | Empirical validation required | Hypothesis status retained |
| `CLAIM-INTAKE-0009` | `AX-009` | Educational participation mechanism | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Proposal only | Author specification | Source-bounded | Institutional Editorial Reviewer | Terminology distinction required | Not cryptographic proof |
| `CLAIM-INTAKE-0010` | `AX-010` | Academy learning interface | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Proposal only | No implementation evidence | Unverified implementation | Institutional Editorial Reviewer | Implementation boundary | Concept only |
| `CLAIM-INTAKE-0011` | `AX-011` | Accountability mechanisms | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Proposal only | No implementation evidence | Unverified implementation | Governance Owner | Effectiveness not proven | Requirements only |
| `CLAIM-INTAKE-0012` | `AX-012` | Risk-limit enforcement | `TECHNICAL_IMPLEMENTATION_CLAIM` | Technical and Institutional | Proposal with contrary operating claim blocked | No implementation evidence | Unverified | Security / Risk Owner | Critical enforcement conflict | No active enforcement inference |
| `CLAIM-INTAKE-0013` | `AX-013` | Treasury transparency | `PRIVATE_CONTROLLED_CLAIM` | Financial governance | Proposal only | No implementation or data | Unverified | Treasury / Legal Reviewer | Critical financial sensitivity | No performance inference |
| `CLAIM-INTAKE-0014` | `AX-014` | Human-AI coordination | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Proposal only | No implementation evidence | Unverified implementation | Institutional Editorial Reviewer | Autonomous-authority risk | Human supervision qualifier retained |
| `CLAIM-INTAKE-0015` | `AX-015` | Constitutional governance model | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Conditional proposal | Conceptual context only | Source-bounded | Governance Owner | Naming distinction required | No enforcement inference |
| `CLAIM-INTAKE-0016` | `AX-016` | External case-study validation | `UNVERIFIED_CLAIM` | Institutional paper line | Blocked | No case-study record | Unverified | Institutional Editorial Reviewer | Evidence missing | No case-study inference |
| `CLAIM-INTAKE-0017` | `AX-017` | Modularity and resilience | `PAPER_CLAIM` | Institutional paper line | Hypothesis only | General literature only | Unverified for Axodus | Institutional Editorial Reviewer | Empirical validation required | Hypothesis status retained |
| `CLAIM-INTAKE-0018` | `AX-018` | Functional classes as implementations | `TECHNICAL_IMPLEMENTATION_CLAIM` | Technical and paper | Contrary form blocked | No implementation evidence | Unverified | Technical Owner | Critical implementation conflict | Conceptual types only |
| `CLAIM-INTAKE-0019` | `AX-019` | Maturity grants authority | `CONFLICTING_CLAIM` | Governance | Contrary form blocked | Governance rule refutes inference | Verified prohibition only | Governance Owner | Critical gate conflation | Production and authority remain separate |
| `CLAIM-INTAKE-0020` | `AX-020` | Decision flow is operating | `TECHNICAL_IMPLEMENTATION_CLAIM` | Technical and paper | Proposal only | No implementation evidence | Unverified | Technical Owner | Critical operating-process inference | Conceptual path only |
| `CLAIM-INTAKE-0021` | `AX-021` | Synthetic scenario is empirical | `CONFLICTING_CLAIM` | Institutional paper line | Contrary form blocked | Editorial illustration only | Verified synthetic status | Institutional Editorial Reviewer | Critical empirical conflict | Historical or real-case inference prohibited |
| `CLAIM-INTAKE-0022` | `AX-022` | Provenance guarantees controls | `CONFLICTING_CLAIM` | Evidence governance | Contrary form blocked | Vocabulary source only | Unverified guarantees | Security / Evidence Owner | Critical guarantee conflict | No integrity or security inference |
| `CLAIM-INTAKE-0023` | `AX-023` | Proposed metrics are results | `CONFLICTING_CLAIM` | Institutional paper line | Contrary form blocked | No study or results | Unverified | Institutional Editorial Reviewer | Critical empirical conflict | Future criteria only |
| `CLAIM-INTAKE-0024` | `AX-024` | Federated modular design | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Design proposal | Author clarification and decision record | Source-bounded | Institutional Editorial Reviewer | Implementation qualifier required | Conceptual architecture only |
| `CLAIM-INTAKE-0025` | `AX-025` | Intended module inventory | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional controlled disclosure | Institutional-only with paper abstraction | Author approval; no implementation evidence | Source-bounded | Institutional Human Reviewer | High implementation/readiness risk | Inventory details not imported |
| `CLAIM-INTAKE-0026` | `AX-026` | Tenant module selection | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Design proposal | Author clarification; no evaluation | Source-bounded | Governance Owner | Deployment inference risk | No customer or community inference |
| `CLAIM-INTAKE-0027` | `AX-027` | Named AI roles are operating | `TECHNICAL_IMPLEMENTATION_CLAIM` | Institutional controlled terminology | Operating claim blocked | Role labels only | Unverified implementation | Security / Legal / Brand Reviewer | Critical autonomy and authority conflict | Labels and details not imported |
| `CLAIM-INTAKE-0028` | `AX-028` | Module financial performance | `PRIVATE_CONTROLLED_CLAIM` | Financial and public claims | Blocked | No audited public evidence | Unverified | Legal / Treasury Reviewer | Critical financial claim | No performance wording imported |
| `CLAIM-INTAKE-0029` | `AX-029` | Planning labels prove maturity | `CONFLICTING_CLAIM` | Institutional | Qualification required | Author planning context only | Unverified maturity | Institutional Editorial Reviewer | Status inflation risk | No readiness inference |
| `CLAIM-INTAKE-0030` | `AX-030` | Paper module terminology | `PAPER_CLAIM` | Institutional paper line | Terminology policy only | Author decision record | Source-bounded | Institutional Editorial Reviewer | Scope collision risk | No inventory inference |
| `CLAIM-INTAKE-0031` | `AX-031` | Educational term excluded from paper | `PAPER_CLAIM` | Institutional paper line | Terminology policy only | Author decision record | Source-bounded | Institutional Editorial Reviewer | Paper boundary | Internal term remains scope-bound |
| `CLAIM-INTAKE-0032` | `AX-032` | Multi-part governance proposal | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional | Design proposal | Author planning context | Source-bounded | Governance Owner | Operating-governance inference risk | No active body inference |
| `CLAIM-INTAKE-0033` | `AX-033` | Controlled governance labels | `INSTITUTIONAL_PUBLIC_CLAIM` | Institutional public governance | Conditional | Author decision record; no operating evidence | Source-bounded | Governance / Legal Reviewer | Entity and authority inference risk | Names do not establish bodies |
| `CLAIM-INTAKE-0034` | `AX-034` | Future tokenomics boundary | `PRIVATE_CONTROLLED_CLAIM` | Institutional disclosure boundary | Boundary statement only | Author decision record | Source-bounded | Legal / Treasury / Documentation Coordinator | Critical publicability risk | No tokenomics mechanics imported |

## Evidence States

Evidence states remain exactly as restrictive as the source metadata: missing,
author-provided, conceptual, general-literature, or source-bounded evidence is
not upgraded to implementation or empirical proof.

## Publication States

Blocked, contrary-blocked, conditional, proposal-only, hypothesis-only, and
Institutional-only states remain attached to their records. No row is marked
globally approved.

## Conflicting Claims

Implementation, production, autonomy, guarantee, empirical-result, maturity,
and financial inferences are retained as conflicts or prohibitions, not as
positive claims.

## Unverified Claims

Claims lacking repository, implementation, operational, or empirical evidence
remain unverified. Intake is not verification.

## Consumer Guidance

Documentation intake does not convert a claim into an approved public claim.
Consumers must resolve the Institutional source revision and route exact
wording to the source owner before any external use.

## Limitations

This artifact contains no full claim wording, no allowed wording, no public
approval, no technical implementation proof, and no private mechanic.

## Final Result

```text
Candidate: INTAKE-EP4-0005
Final disposition: ABSORBED_METADATA_ONLY
Semantic verdict: SEMANTICALLY_PRESERVED_WITH_NORMALIZATION
Claims recorded: 34 metadata records
Claims strengthened: 0
Publication approvals granted: 0
```
