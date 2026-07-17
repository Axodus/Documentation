---
schema_version: "1.0.0"
document_id: "DOC-RPT-084"
aliases: []
document_type: "REPORT"
title: "Institutional Terminology Intake Register"
summary: "Records scope-qualified Institutional terminology metadata for internal Documentation consumption without copying source definitions or transferring authority."
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
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-03"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "research/terminology.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Institutional Terminology Intake Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-03
Candidate: INTAKE-EP4-0004
Executed Mode: METADATA_ONLY_INTAKE
Development Level: D2
Full Definition Copy: NOT_AUTHORIZED
Terminology Replacement: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This register provides internal, source-attributed routing metadata for terms
used across Documentation and Institutional. It does not reproduce source
definitions, create a combined glossary, or make Institutional wording
authoritative outside its original scope.

## Authority Boundary

Institutional remains authoritative for its public and paper-facing vocabulary.
Documentation remains authoritative for its schema, repository governance,
product-facing documentation, and private terminology controls. This register
controls only the local intake classification and consumer guidance.

## Source Revision

```text
Repository: Axodus/Institutional
Path: research/terminology.md
Commit: b921dace4d6be81b2233e09981108a6b29794e70
Blob: 8f18ecb1e8114e352d45bf9320bdc7ba4580a1ed
Source authority: Institutional public and paper-facing terminology
Intake date: 2026-07-14
Intake request: DOCUMENTATION-REORG-INTAKE-REQ-03
Transformation mode: METADATA_ONLY_INTAKE
```

## Intake Method

The intake extracted term labels, scope, cross-repository mapping,
classification, authority owner, and review triggers. Source definitions,
examples, explanatory paragraphs, and manuscript wording were excluded.

## Term Classification Model

Allowed classifications are `IDENTICAL_MEANING`, `SCOPED_VARIANT`,
`PUBLIC_LABEL_INTERNAL_TERM`, `PAPER_TERM_ONLY`, `INTERNAL_TERM_ONLY`,
`CONFLICTING_DEFINITION`, `DEPRECATED_TERM`, and `UNRESOLVED_TERM`.

## Terminology Records

All rows inherit the source revision above.

| Term ID | Institutional label | Documentation internal term | Classification | Authority scope | Consumer scope | Definition owner | Conflict state | Review trigger | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `TERM-INTAKE-0001` | Axodus | Axodus | `IDENTICAL_MEANING` | Institutional for public framing; Documentation for local records | Scope-qualified internal reference | Institutional Editorial Reviewer / Documentation Coordinator | No direct conflict | Ecosystem framing or publication status changes | Prototype and conceptual qualifiers remain mandatory |
| `TERM-INTAKE-0002` | Accountability | Accountability | `SCOPED_VARIANT` | Source-specific | Governance and evidence records | Source owner | Auditability-equivalence risk | Accountability model changes | Do not equate with auditability alone |
| `TERM-INTAKE-0003` | Constitutional governance | Constitutional governance | `SCOPED_VARIANT` | Institutional public framing / Documentation governance scope | Conceptual governance only | Governance Owner | AI-training naming collision | Governance or branding changes | Does not imply deployed enforcement |
| `TERM-INTAKE-0004` | Federated modular ecosystem | Modular ecosystem | `SCOPED_VARIANT` | Institutional | Architecture and research context | Institutional Editorial Reviewer | Protocol-federation inference risk | Architecture scope changes | Conceptual descriptor only |
| `TERM-INTAKE-0005` | Bounded local governance domain | Tenant | `PUBLIC_LABEL_INTERNAL_TERM` | Institutional paper terminology / Documentation product terminology | Paper-facing versus internal/product consumers | Institutional Editorial Reviewer / Documentation Coordinator | Scope-qualified mapping | Tenant or paper terminology changes | Neither label proves a deployed community |
| `TERM-INTAKE-0006` | Tenant | Tenant | `INTERNAL_TERM_ONLY` | Institutional/product context | Internal and controlled public context | Axodus Core | SaaS-tenancy inference risk | Tenant model changes | Paper use remains constrained |
| `TERM-INTAKE-0007` | Tenant-level governance | Bounded local governance | `SCOPED_VARIANT` | Source-specific | Governance analysis | Governance Owner | Authority overstatement risk | Delegation rules change | Separate economic and regulated parameters |
| `TERM-INTAKE-0008` | Stakeholder proposal and refinement layer | Proposal and refinement function | `PAPER_TERM_ONLY` | Institutional paper line | Paper and research references | Institutional Editorial Reviewer | No local canonical replacement | Paper architecture changes | Metadata reference only |
| `TERM-INTAKE-0009` | Community ratification and contestation layer | Ratification and contestation function | `PAPER_TERM_ONLY` | Institutional paper line | Paper and research references | Institutional Editorial Reviewer | No local canonical replacement | Paper architecture changes | Metadata reference only |
| `TERM-INTAKE-0010` | Rapid risk-response and procedural review function | Risk-response and review function | `PAPER_TERM_ONLY` | Institutional paper line | Paper and research references | Institutional Editorial Reviewer | Enforcement inference risk | Paper or governance changes | Does not authorize active restriction |
| `TERM-INTAKE-0011` | Core | Nucleus or core, scope-qualified | `SCOPED_VARIANT` | Institutional public inventory / Documentation domain terminology | Internal architecture and public-safe context | Axodus Core | Implementation inference risk | Core inventory or status changes | Inventory presence is not readiness evidence |
| `TERM-INTAKE-0012` | Functional service module | Service nucleus | `PUBLIC_LABEL_INTERNAL_TERM` | Institutional paper terminology / Documentation product terminology | Paper-facing versus product consumers | Institutional Editorial Reviewer / Documentation Coordinator | Scope-qualified mapping | Module terminology changes | No implementation inference |
| `TERM-INTAKE-0013` | D0-D5 | Institutional development level | `CONFLICTING_DEFINITION` | Institutional operational taxonomy | Attributed assessment only | Institutional authority | Conflicts with schema documentary D-levels | Taxonomy or schema changes | Never map to `maturity_level` |
| `TERM-INTAKE-0014` | L0-L5 | Institutional maturity level | `SCOPED_VARIANT` | Institutional operational taxonomy | Attributed assessment only | Institutional authority | Scope collision with assessment prose | Taxonomy changes | Does not grant production or action authority |
| `TERM-INTAKE-0015` | Maturity, production, and authority | Separate gate dimensions | `SCOPED_VARIANT` | Shared by scope | Governance assessments | Scope-specific authority | Conflation risk | Any gate or taxonomy changes | Dimensions remain independent |
| `TERM-INTAKE-0016` | Human-AI coordination | Human-supervised AI assistance | `SCOPED_VARIANT` | Institutional public framing / Documentation controlled terminology | Conceptual architecture | Institutional Editorial Reviewer / Documentation Coordinator | Autonomous-authority inference risk | AI role or authority changes | Human responsibility remains explicit |
| `TERM-INTAKE-0017` | Meta-supervision role | Higher-order review role | `PAPER_TERM_ONLY` | Institutional paper line | Paper and research references | Institutional Editorial Reviewer | Security-control inference risk | Review-role framing changes | No implemented control claim |
| `TERM-INTAKE-0018` | Proof of Knowledge | Educational participation mechanism | `PUBLIC_LABEL_INTERNAL_TERM` | Axodus internal/institutional term | Internal records; paper alternative only | Axodus Core / Institutional Editorial Reviewer | Cryptographic and financial inference risk | Education, paper, or token boundary changes | Paper term remains source-controlled |
| `TERM-INTAKE-0019` | Academy | Educational layer | `PUBLIC_LABEL_INTERNAL_TERM` | Product/institutional label versus paper abstraction | Scope-qualified consumers | Axodus Core / Institutional Editorial Reviewer | Token and readiness inference risk | Academy or paper scope changes | No reward or token mechanic inference |
| `TERM-INTAKE-0020` | Learn to Win | Learn to Win | `UNRESOLVED_TERM` | Candidate brand only | None without review | Brand and Legal Reviewer | Approval unresolved | Trademark or legal decision | Not approved for paper, tokenomics, or public brand use |
| `TERM-INTAKE-0021` | Tokenomics boundary | Financial and token disclosure boundary | `INTERNAL_TERM_ONLY` | Documentation private governance / Institutional paper exclusion | Boundary reviewers only | Legal / Treasury / Documentation Coordinator | High publicability risk | Any tokenomics disclosure request | No mechanics are imported |
| `TERM-INTAKE-0022` | Prototype stage | Prototype stage | `IDENTICAL_MEANING` | Source-specific | Public-safe conceptual status | Scope owner | Readiness inference risk | Evidence or readiness changes | Does not establish operation or effectiveness |
| `TERM-INTAKE-0023` | Provenance | Provenance | `SCOPED_VARIANT` | Source-specific evidence governance | Architecture and evidence consumers | Evidence owner | Integrity-guarantee inference risk | Evidence model changes | Does not itself prove integrity or accountability |
| `TERM-INTAKE-0024` | Risk boundary | Risk boundary | `SCOPED_VARIANT` | Source-specific | Governance and risk records | Risk Owner | Enforcement inference risk | Risk-control status changes | Documented boundary is not proof of enforcement |
| `TERM-INTAKE-0025` | Socio-technical infrastructure | Socio-technical system | `SCOPED_VARIANT` | Institutional paper line | Paper and research context | Institutional Editorial Reviewer | No direct conflict | Paper terminology changes | Metadata mapping only |

## Conflicting Terms

`D0-D5`, schema `maturity_level`, production readiness, and authority status
remain separate dimensions. `Tenant`, service-module labels, educational terms,
and AI-role abstractions retain consumer-specific meanings and must not be
globally replaced.

## Unresolved Terms

The candidate brand term remains review-bound. Any shared definition that is
not supported by the frozen sources must use:

```text
[TBD — pending governance decision with first adopters]
```

## Consumer Guidance

- Resolve the source revision before consuming a row.
- Use Institutional labels only in their approved Institutional or paper scope.
- Preserve Documentation schema and private-boundary terminology locally.
- A mapping is not permission to publish or replace a canonical term.
- Reopen review when a controlled label, taxonomy, paper boundary, or risky
  financial or AI phrase changes.

## Review Triggers

Source revision changes, glossary changes, public disclosure requests, schema
changes, brand decisions, paper reframing, and private/public boundary changes
all trigger event-driven review.

## Limitations

This register contains no Institutional definitions, no combined glossary, no
new terminology authority, and no publication approval.

## Final Result

```text
Candidate: INTAKE-EP4-0004
Final disposition: ABSORBED_METADATA_ONLY
Semantic verdict: SEMANTICALLY_PRESERVED_WITH_NORMALIZATION
Institutional authority transfer: NO
Public disclosure expansion: NO
```
