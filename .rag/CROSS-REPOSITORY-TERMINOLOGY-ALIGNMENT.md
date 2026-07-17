---
schema_version: "1.0.0"
document_id: "DOC-RPT-080"
aliases: []
document_type: "REPORT"
title: "Cross-Repository Terminology Alignment"
summary: "Aligns Institutional and Documentation terminology by scope, classification, and consumer guidance without silently replacing existing vocabularies."
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
implementation_refs: [{repository: "Axodus/Institutional", path: "research/terminology.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "docs/overview/terminology.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".knowledge/core/terminology.akp.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Repository Terminology Alignment

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report classifies terminology overlap between Institutional and
Documentation and defines how terms may be reused, mapped, or blocked by
scope. It does not create a merged glossary by concatenation.

## Source Inventories

| Source | Role |
|---|---|
| `../Institutional/research/terminology.md` | Public Institutional and paper-facing controlled vocabulary |
| `docs/overview/terminology.md` | Legacy public Documentation terminology page |
| `docs/glossary/terms.md` | Public glossary page with broader product-facing wording |
| `.knowledge/core/terminology.akp.md` and `.knowledge/glossary/` | Internal non-canonical vocabulary and dangerous-term controls |

## Term Classification Method

Terms were compared by meaning, scope, intended consumer, risk profile, and
current authority. Identical labels with different scope were not merged.

## Canonical Internal Terms

Documentation keeps internal authority over:

- schema-facing terminology such as `publication_status`,
  `document_state`, and `maturity_level`;
- private Track B/C boundary labels;
- internal dangerous-term controls and safer alternatives;
- public Documentation wording for repository-specific pages.

## Public Institutional Terms

Institutional keeps authority over public/paper-facing controlled labels such
as:

- `bounded local governance domain`;
- `functional service module`;
- paper-facing abstractions for governance functions; and
- scope-qualified use of `L-Level` and `D-Level`.

## Paper Terms

The following are treated as paper-facing or Institutional-facing abstractions
and are not automatic replacements for Documentation vocabulary:

- `bounded local governance domain`
- `functional service module`
- paper-facing governance-function abstractions

## Scoped Variants

| Term pair or family | Classification | Consumer guidance |
|---|---|---|
| `Tenant` vs `bounded local governance domain` | `SCOPED_VARIANT` | Keep `Tenant` for Axodus institutional/product context; prefer the paper-facing abstraction only where the source scope calls for it |
| `service nucleus` vs `functional service module` | `SCOPED_VARIANT` | Documentation may preserve product terminology; paper-facing abstraction remains Institutional-owned |
| `L-Level` and `D-Level` vs schema `maturity_level` | `CONFLICTING_DEFINITION` | Never treat them as the same field or scale |
| `Proof of Knowledge` vs paper-facing readiness language | `SCOPED_VARIANT` | Internal or institutional label may remain; paper-facing abstraction stays source-controlled |
| `Academy` vs `educational layer` | `PUBLIC_LABEL_INTERNAL_TERM` | Public or paper shorthand may differ; internal Axodus label stays explicit where needed |

## Conflicting Definitions

| Term | Classification | Conflict |
|---|---|---|
| `D3` / `D4` | `CONFLICTING_DEFINITION` | Documentation uses documentary maturity; Institutional uses development maturity |
| `maturity` | `UNRESOLVED_TERM` | Requires scope qualifier unless the source is explicit |
| `production readiness` | `CONFLICTING_DEFINITION` | Must remain separate from any documentary or paper-readiness status |

## Deprecated Terms

Documentation's dangerous-term controls remain active. Terms such as
`guaranteed profit`, `risk-free yield`, `autonomous unrestricted AI`, and
similar high-risk framing remain prohibited regardless of Institutional
alignment.

## Unresolved Terms

Use the following placeholder where an authoritative shared definition does not
yet exist:

```text
[TBD — pending governance decision with first adopters]
```

## Consumer Guidance

1. Public Documentation may reuse Institutional terms only when scope,
   attribution, and consumer boundary are explicit.
2. Internal Documentation terms must not be silently replaced by paper-facing
   abstractions.
3. Terminology intake in REQ-03 may absorb metadata, mappings, and approved
   controlled-term records only. It must not import whole Institutional prose.

## Change-Control Rule

Any terminology change that affects:

- controlled public labels;
- maturity or development labels;
- claims or financial wording;
- private Track B/C names; or
- paper-facing exclusions

must reopen cross-repository review.

## Final Decision

```text
Knowledge family: terminology
Consumer mode: DUAL_AUTHORITY_BY_SCOPE
Mirror scope: bounded term map and source-attributed metadata only
REQ-03 release: RELEASE_FOR_CONTROLLED_ABSORPTION
```

REQ-03 may build a Documentation terminology control artifact from bounded
metadata, mappings, scope qualifiers, and dangerous-term controls. It may not
copy Institutional term prose wholesale.
