---
schema_version: "1.0.0"
document_id: "DOC-RPT-077"
aliases: []
document_type: "REPORT"
title: "Cross-Repository Maturity and Development Alignment"
summary: "Aligns Documentation and Institutional maturity and development taxonomies by scope without transferring authority or equating their labels."
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
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-02"]
related_adrs: ["DOC-ADR-002", "DOC-ADR-014", "DOC-ADR-017", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "governance/maturity-taxonomy.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "governance/DOCUMENTATION-LIFECYCLE.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Repository Maturity and Development Alignment

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
L4 Final Promotion: NOT_AUTHORIZED
D4 Declaration: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report aligns the maturity and development vocabulary used by
Documentation and Institutional. It records scope-qualified meanings,
ownership, consumer guidance, and prohibited equivalences. It does not grant
promotion, transfer authority, or change repository schema semantics.

## Authority Scope

| Scope | Authoritative source |
|---|---|
| Documentation lifecycle metadata | `governance/DOCUMENTATION-LIFECYCLE.md` |
| Documentation internal maturity assessments | `.rag/EPIC-03-MATURITY-AND-DEVELOPMENT-ASSESSMENT.md` |
| Institutional L-Level and D-Level operational taxonomy | `../Institutional/governance/maturity-taxonomy.md` at commit `b921dace4d6be81b2233e09981108a6b29794e70` |

## Source Revisions

| Source | Revision | Blob or governing identity |
|---|---|---|
| Institutional maturity taxonomy | `b921dace4d6be81b2233e09981108a6b29794e70` | blob `d904755f3fd0db5f9f664953c24a0d4651b5abe4` |
| Documentation lifecycle | current Documentation HEAD | `DOC-POL-003` |
| EPIC-03 maturity assessment | current Documentation HEAD | `DOC-RPT-070` |

## Taxonomy Inventory

| Taxonomy or field | Repository | Meaning |
|---|---|---|
| `L0-L5` | Institutional | Organizational, governance, and authority maturity |
| `D0-D5` | Institutional | Development, implementation, and operational maturity |
| `maturity_level` `D1-D4` | Documentation schema | Documentary completeness and evidence state of a document |
| `publication_status` | Documentation schema | Governance and publication progression of a document |
| `document_state` | Documentation schema | Whether a document is current, obsolete, historical, or experimental |
| `L4_CANDIDATE / D3` and `D2_PLUS_TRANSITIONING_TO_D3` | Documentation assessment records | Repository and framework assessments, not schema field values |

## Term Crosswalk

| Term | Documentation meaning | Institutional meaning | Crosswalk verdict |
|---|---|---|---|
| `L` | Used only in assessment prose for nucleus or corpus maturity | Formal operational maturity taxonomy | `SCOPED_VARIANT` |
| `D` | Used in two different contexts: schema `maturity_level` and assessment prose | Formal operational development taxonomy | `CONFLICTING_DEFINITION` unless scope-qualified |
| `maturity_level` | Document-level completeness field | Not the Institutional L-Level or D-Level field | `PROHIBITED_EQUIVALENCE` |
| `D3` | In schema: mature document evidence; in EPIC-03 prose: framework-development shorthand | In Institutional taxonomy: significant integrated or read-only functionality | `SCOPED_VARIANT` |
| `D4` | In schema: fully governed, auditable document | In Institutional taxonomy: broad controlled non-production product | `PROHIBITED_EQUIVALENCE` |
| `L4_CANDIDATE` | Documentation governance assessment | Not a document metadata value | `SCOPED_VARIANT` |

## Scope Crosswalk

| Scope | Allowed terminology | Consumer guidance |
|---|---|---|
| Canonical document metadata | `maturity_level`, `publication_status`, `document_state` | Use only schema meanings from Documentation lifecycle |
| Documentation nucleus maturity assessment | `L4_CANDIDATE`, `D3`, `D2_PLUS_TRANSITIONING_TO_D3` | Treat as repository-governance assessment language only |
| Institutional operational taxonomy | `L0-L5`, `D0-D5` | Preserve Institutional wording and attribution |
| Paper readiness | readiness, review, publication gates | Do not map to Documentation schema maturity |
| Production readiness | production, execution, authority | Separate gate; not implied by any maturity term |

## Allowed Equivalences

- Documentation may describe Institutional `L-Level` as organizational or
  governance maturity when attributed to Institutional.
- Documentation may describe Institutional `D-Level` as development or
  implementation maturity when attributed to Institutional.
- Documentation may describe schema `maturity_level` as documentary
  completeness and evidence.
- Documentation may retain the current EPIC-03 recorded state:
  `Framework/Governance: L4_CANDIDATE / D3` and
  `Repository Corpus: L4_CANDIDATE / D2_PLUS_TRANSITIONING_TO_D3`.

## Prohibited Equivalences

- Documentation schema field `maturity_level` must not be mapped directly to
  Institutional `D-Level`.
- Documentation schema field `maturity_level` must not be mapped directly to
  Institutional `L-Level`.
- Institutional `D4` must not be read as Documentation `maturity_level: "D4"`.
- Institutional `L4 Consolidated` must not be read as a grant of publication,
  production, or sensitive authority.
- Documentation assessment prose must not silently replace Institutional
  operational taxonomy or vice versa.

## Documentation Metadata Semantics

`maturity_level` in Documentation metadata means documentary completeness and
evidence only. It answers whether a canonical record is structurally complete,
owned, referenced, reviewed, and sustainably governed for its declared scope.

It does not answer whether a product exists, whether a runtime is broad, or
whether an ecosystem unit is implemented.

## Institutional Operational Taxonomy

Institutional `L-Level` and `D-Level` are operational classification tools for
Axodus units. Their semantics belong to the Institutional repository and stay
revision-bound to the frozen source.

Documentation may cite them by scope, but may not replace them, broaden them,
or treat them as schema defaults.

## Nucleus Maturity

Current recorded Documentation state remains:

```text
Documentation framework/governance: L4_CANDIDATE / D3
Repository corpus: L4_CANDIDATE / D2_PLUS_TRANSITIONING_TO_D3
L4 Final: NOT_GRANTED
D4: NOT_ACHIEVED
```

REQ-02 preserves that state. It neither promotes nor downgrades it.

## Corpus Development

Repository-corpus development remains a governed assessment based on canonical
adoption, legacy volume, metadata coverage, traceability, and residual review
backlog. It is not interchangeable with Institutional D-Level.

## Paper Readiness Distinction

Paper readiness, reviewer-package readiness, and editorial readiness are
publication-line states owned by Institutional. They are not Documentation
schema maturity states and do not imply repository-corpus maturity.

## Conflict Rules

1. When a label is ambiguous, Documentation must qualify it by scope.
2. When both repositories use the same letter label for different meanings,
   the consumer must preserve the source repository's meaning.
3. No report may declare `L4_FINAL` or `D4` without a separate explicit
   authority decision.
4. If a future schema wants explicit product-development metadata, use a new,
   separately defined field rather than overloading `maturity_level`.

## Promotion Authority

| Decision | Authority |
|---|---|
| Documentation schema maturity for a specific document | Documentation governance for the document's declared scope |
| Documentation internal maturity assessment records | Documentation Coordinator or established project authority |
| Institutional L-Level and D-Level assignments | Institutional authority for the operational taxonomy |
| `L4_FINAL` for the Documentation nucleus | Separate institutional or governance decision; not granted here |
| `D4` declaration for repository corpus or product taxonomy | Scope-specific authority with explicit evidence; not granted here |

## Current Recorded State

The current authoritative Documentation state remains:

```text
Framework/Governance: L4_CANDIDATE / D3
Repository Corpus: L4_CANDIDATE / D2_PLUS_TRANSITIONING_TO_D3
L4 Final Promotion: NOT_GRANTED
D4 Readiness: NOT_ACHIEVED
```

## Limitations

- This report does not create a new shared taxonomy.
- This report does not assign Institutional scores.
- This report does not change schema fields.
- When cross-repository adoption needs a new machine-readable field, use:

```text
[TBD — pending governance decision with first adopters]
```

## Final Decision

```text
Knowledge family: maturity taxonomy
Consumer mode: DUAL_AUTHORITY_BY_SCOPE
Documentation consumption: scope-qualified crosswalk only
Mirror scope: bounded terminology and decision metadata only
REQ-03 release: NOT_RELEASED
```

The Documentation repository may consume Institutional maturity language only
through explicit source attribution, scope qualification, and revision pinning.
