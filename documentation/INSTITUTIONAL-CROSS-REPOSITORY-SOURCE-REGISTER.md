---
schema_version: "1.0.0"
document_id: "DOC-RPT-072"
aliases: []
document_type: "REPORT"
title: "Institutional Cross-Repository Source Register"
summary: "Freezes cross-repository authority, publication scope, provenance, and consumption rules for Institutional knowledge used by Documentation."
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
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-01"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "index.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Cross-Repository Source Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-01
Cross-Repository Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Generated Artifact Regeneration: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register identifies which repository and file controls each cross-
repository knowledge family. It records consumption rules without copying
source content or transferring authority.

## Frozen Repository Identity

```text
Logical repository: Axodus/Institutional
Canonical local path: ../Institutional
Case-variant path observed: ../institutional
Canonical branch: main
Frozen revision: b921dace4d6be81b2233e09981108a6b29794e70
Remote: https://github.com/Axodus/Institutional.git
Remote divergence: 0 ahead / 0 behind
Worktree: CLEAN
Identity verdict: ONE_AUTHORITATIVE_INSTITUTIONAL_WORKTREE
```

The two local path spellings resolve to the same directory inode and the same
`.git` inode. Future records use `../Institutional` and the repository slug
`Axodus/Institutional`; the lowercase spelling is an alias, not a second
source of truth.

## Authority Rules

1. Repository presence does not grant publication, normative, operational, or
   execution authority.
2. Institutional controls public institutional and academic-paper wording for
   its declared scope.
3. Documentation controls internal documentation governance, canonical
   technical records, lifecycle metadata, and private-boundary governance for
   its declared scope.
4. A mirror is subordinate to its frozen source unless an explicit authority
   decision transfers a bounded rule.
5. When disclosure rules overlap, the most restrictive applicable rule wins.
6. A source revision change triggers review; it never silently updates a
   mirror or internal classification.

## Source-of-Truth Register

| Knowledge Family ID | Knowledge Family | Institutional Source | Institutional Revision | Documentation Equivalent | Current Authority | Authority Scope | Publication Scope | Intake Mode | Mirror Allowed | Conflict Status | Conflict Rule | Owner | Review Cycle | Review Trigger | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `XRSOT-0001` | Maturity taxonomy | `governance/maturity-taxonomy.md` | commit `b921dace`; blob `d904755f` | `governance/DOCUMENTATION-LIFECYCLE.md`; `documentation/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md` | Institutional for Axodus L-Level; Documentation for document lifecycle metadata | Organizational/governance maturity versus canonical-document maturity | Internal operational taxonomy; bounded public description only | `REFERENCE_ONLY` pending alignment | Crosswalk only | `SCOPED_NAMING_COLLISION` | Never map schema `maturity_level` to Axodus L-Level or product D-Level without an explicit crosswalk | Institutional Editorial Reviewer / Documentation Coordinator | Event-driven | Either taxonomy or schema changes | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0002` | Development taxonomy | `governance/maturity-taxonomy.md` | commit `b921dace`; blob `d904755f` | EPIC-03 development assessments; canonical document `maturity_level` uses a different dimension | Institutional | Product and implementation development D0-D5 | Internal rubric; scores require separate disclosure approval | `REFERENCE_ONLY` pending alignment | Crosswalk only | `TERM_COLLISION` | Product D-Level must be labeled `development_level`; canonical-document maturity remains schema `maturity_level` | Institutional Editorial Reviewer / Documentation Coordinator | Event-driven | Development rubric or assessment terminology changes | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0003` | Public disclosure boundary | `governance/public-disclosure-boundary.md` | commit `b921dace`; blob `c4e11f8b` | `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md`; private disclosure-governance surface | Institutional for its public surface; Documentation for internal/private publication gates | Public Institutional, academic paper, and Documentation publication gates | Public only after source-specific review | `REFERENCE_ONLY` | Policy pointer only | `SCOPED_OVERLAP` | Apply both rules and use the stricter gate; no public status transfers between repositories | Institutional Editorial Reviewer / Documentation Coordinator | Event-driven | New public claim, module disclosure, or publication request | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0004` | Evidence boundary | `governance/evidence-boundaries.md` | commit `b921dace`; blob `5b545d6b` | `documentation/DOCUMENTATION-EVIDENCE-FRAMEWORK.md` | Institutional for paper/public evidence; Documentation for governed repository evidence | Claim support, validation evidence, and publication evidence | Bounded according to consumer surface | `REFERENCE_ONLY` | Policy pointer only | `SCOPED_OVERLAP` | Preserve evidence classes and do not promote internal context to external evidence | Institutional Editorial Reviewer / Documentation Architecture Reviewer | Event-driven | Claim status or evidence policy changes | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0005` | Claims register | `research/claims-register.md` | commit `b921dace`; blob `9ff2c888` | Internal claim-control and evidence records; no equivalent canonical public register | Institutional | Public Institutional and academic claims | Current allowed wording is source-revision bounded, not permanent approval | `ABSORB_AS_CLAIM_RECORD` after alignment | Metadata only | `AUTHORITY_TRANSFER_RISK` | Imported claim metadata remains attributed and non-authoritative until Documentation review | Institutional Human Reviewer / Documentation Coordinator | Event-driven | Claim, evidence, allowed wording, or status changes | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0006` | Terminology | `research/terminology.md` | commit `b921dace`; blob `8f18ecb1` | `docs/overview/terminology.md`; `.knowledge/core/terminology.akp.md`; `.knowledge/glossary/` | Institutional for paper/public Institutional wording; Documentation for internal and product terminology | Repository-specific controlled vocabulary | Terms may be public only within their source boundary | `ABSORB_AS_TERMINOLOGY_CONTROL` after alignment | Bounded term map | `MULTIPLE_VOCABULARIES` | Record scope-qualified synonyms; do not silently replace product or private terminology | Institutional Editorial Reviewer / Documentation Coordinator | Event-driven | Controlled term, preferred wording, or boundary changes | `FREEZE_FOR_ALIGNMENT` |
| `XRSOT-0007` | Citation policy | `governance/citation-policy.md` | commit `b921dace`; blob `c4f1e159` | `references/README.md`; `documentation/DOCUMENTATION-EVIDENCE-FRAMEWORK.md` | Institutional | Academic and public Institutional citations | Paper/public Institutional only | `REFERENCE_ONLY` | No | `NO_CONFLICT` | Documentation consumes the policy by reference; third-party source rights remain independent | Institutional Editorial Reviewer | Event-driven | Citation classes or verification rules change | `REFERENCE_ONLY` |
| `XRSOT-0008` | IP boundary | `governance/ip-boundaries.md` | commit `b921dace`; blob `295d98fb` | No complete Documentation equivalent | Institutional | Institutional content, paper, branding, and third-party material | Subject to `LICENSE-CONTENT` and source-specific rights | `REFERENCE_ONLY` | No | `DOCUMENTATION_GAP` | CC BY 4.0 does not transfer trademarks, third-party quotations, or authority | Content Rights Holder / Institutional Human Reviewer | Event-driven | License, branding, quotation, or source-rights change | `REFERENCE_ONLY` |
| `XRSOT-0009` | Governance mechanics | `governance/governance-mechanics-v0.1.md` | commit `b921dace`; blob `9222ecf6` | `governance/DOCUMENTATION-AUTHORITY-MODEL.md`; private Track B governance surface | Split: Institutional public stub and Documentation private operational governance | Public conceptual mechanics versus private operational mechanics | Public stub only; private mechanics remain internal | `PRIVATE_REVIEW_REQUIRED` | No | `PUBLIC_PRIVATE_OVERLAP` | Never use private Track B content to expand the public stub; reconcile only at abstraction level | Governance Owner / Documentation Coordinator / Security Reviewer | Event-driven | Governance naming, authority, or public abstraction changes | `CONFLICT_REVIEW_REQUIRED` |
| `XRSOT-0010` | Paper readiness | `papers/axodus-architecture-paper/publication-readiness.md` | commit `b921dace`; blob `0327ac4b` | No Documentation authority equivalent | Institutional paper line | Review package, delivery, submission, and publication readiness | Paper-only; external gates remain source-controlled | `REFERENCE_ONLY` | No | `NO_CONFLICT` | Documentation may record revision and state only; it cannot authorize paper progression | Institutional Human Reviewer | Event-driven | Any readiness gate or phase changes | `REFERENCE_ONLY` |
| `XRSOT-0011` | Paper scope | `papers/axodus-architecture-paper/paper-scope-impact-analysis.md` | commit `b921dace`; blob `af172e81` | Architecture and scope records exist, but no paper-authority equivalent | Institutional paper line | Academic framing and exclusions | Paper-only unless separately abstracted as research context | `ABSORB_AS_RESEARCH_CONTEXT` | Bounded analytical metadata | `SCOPE_TRANSLATION_REQUIRED` | Preserve non-authoritative research status and omit paper-only execution records | Institutional Editorial Reviewer / Documentation Architecture Reviewer | Event-driven | Paper contribution, scope, or exclusions change | `FREEZE_FOR_CONTROLLED_ABSORPTION` |
| `XRSOT-0012` | Publication status | `governance/publication-review-checklist.md`; paper readiness records | commit `b921dace`; blobs recorded in candidate register | `governance/DOCUMENTATION-PUBLICATION-GOVERNANCE.md` | Each repository for its own publication process | Publication review and release state | No cross-repository status inheritance | `REFERENCE_ONLY` | No | `STATUS_CONFUSION_RISK` | Build or review readiness in one repository never authorizes publication in the other | Institutional Human Reviewer / Documentation Coordinator | Event-driven | Status, reviewer, package, or release gate changes | `REFERENCE_ONLY` |
| `XRSOT-0013` | Controlled institutional disclosure | `governance/public-disclosure-boundary.md`; `papers/axodus-architecture-paper/author-ecosystem-clarification.md` | commit `b921dace`; blobs recorded in candidate register | Private disclosure-governance surface and public conceptual documentation | Institutional for approved public abstraction; Documentation for internal/private truth | Controlled public naming versus private Track B/C mechanics | Public abstraction only; private mechanics prohibited | `ABSORB_AS_CLAIM_RECORD` for metadata only | No verbatim mirror | `BOUNDARY_SENSITIVE` | Public claims must retain source qualifiers; private evidence cannot support broader public wording | Institutional Human Reviewer / Documentation Coordinator / Legal Reviewer | Event-driven | New nucleus, role, maturity, financial, or operational claim | `FREEZE_FOR_CONTROLLED_ABSORPTION` |

## Consumer Guidance

- Consumers must resolve `Institutional Revision` before relying on a row.
- Blob prefixes are convenience identifiers; the candidate register records
  full hashes.
- `REFERENCE_ONLY` permits citation and metadata recording, not content
  replication.
- `FREEZE_FOR_ALIGNMENT` authorizes a later decision request, not a mirror.
- `FREEZE_FOR_CONTROLLED_ABSORPTION` authorizes only a later bounded execution
  request after provenance, attribution, legal, disclosure, and rollback gates.
- `CONFLICT_REVIEW_REQUIRED` blocks absorption until the conflicting scopes are
  reconciled.

## Conflict Resolution

Cross-repository conflicts are routed jointly to the owner of the
Institutional source and the Documentation Coordinator. Security, legal,
financial, and private-disclosure constraints cannot be waived by editorial
alignment. Until a decision is recorded, both sources remain in force for
their own scopes and no mirror becomes authoritative.

## Gate Preservation

This request inventoried and reconciled cross-repository knowledge authority
between Documentation and Institutional and froze controlled intake
candidates only. It did not copy or absorb Institutional content, modify
papers or Institutional files, move or rename repository surfaces, alter
public navigation, expose private disclosure, create new claims, add
relationships, modify schemas or generator logic, enable production, activate
providers or exchanges, perform wallet signing, write contracts, perform
financial execution or open operational gates.
