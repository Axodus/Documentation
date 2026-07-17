---
schema_version: "1.0.0"
document_id: "DOC-RPT-130"
aliases: []
document_type: "REPORT"
title: "Public Terminology Comparison"
summary: "Compares priority public Documentation terminology against the authorized Institutional control vocabulary for EPIC-05 REQ-02."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_05"
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
related_epics: ["DOCUMENTATION-EPIC-05"]
related_requirements: ["DOCUMENTATION-EPIC-05-REQ-02"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/PUBLIC-TERMINOLOGY-COMPARISON.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Terminology Comparison

## Scope

This report compares priority public Documentation terminology with the only
authorized Institutional control source for terminology review:

- `Institutional/research/terminology.md`

Institutional wording is used here as a control surface only. It is not treated
as automatic authority transfer or copy source.

## Comparison Table

| Term ID | Term | Current Documentation definition | Institutional reference | Difference | Public ambiguity risk | Recommended Documentation definition | Affected public pages | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TERM-001 | `Tenant` | Not currently defined in the priority public corpus. | Federated governance domain with bounded authority under constitutional constraints. | Public Documentation avoids the term, while Institutional defines it narrowly. | `MEDIUM` | Keep absent from public baseline unless a page explicitly needs the concept; if introduced later, define it as a bounded governance domain, not SaaS tenancy. | `docs/overview/*`, `docs/governance/dao-federation.md` | `REVIEW_REQUIRED` |
| TERM-002 | `bounded local governance domain` | Not currently defined in the priority public corpus. | Paper-facing abstraction for local governance under central constitutional constraints. | Documentation uses `local DAO` and `federated DAO` language instead. | `LOW` | Retain the current public wording unless a narrower abstraction is required. | `docs/governance/dao-federation.md`, `docs/overview/constitutional-model.md` | `RETAIN_SCOPE_SPECIFIC_DIFFERENCE` |
| TERM-003 | `functional service module` | Not currently used in public Documentation. | Institutional paper-facing abstraction for bounded institutional capability. | Documentation uses `nucleus`, `product nucleus`, and `core`. | `LOW` | Do not import by default; public Documentation can keep `nucleus` language because the audience and scope differ. | `docs/overview/ecosystem-overview.md`, `docs/overview/product-map.md` | `RETAIN_SCOPE_SPECIFIC_DIFFERENCE` |
| TERM-004 | `Proof of Knowledge` | Public Documentation uses the term directly and ties it to minting and eligibility. | Proposed educational participation mechanism, not a cryptographic proof protocol or implemented credential protocol. | Public Documentation uses the term, but does not consistently narrow it as a design term. | `HIGH` | Keep the term, but add a prototype and non-cryptographic qualifier wherever it is materially interpreted. | `docs/overview/terminology.md`, `docs/tokenomics/pok-minting.md`, `docs/tokenomics/overview.md`, `docs/trading/user-facing-strategies.md` | `ADD_PROTOTYPE_QUALIFIER` |
| TERM-005 | `maturity` | Public Documentation uses labels such as Draft, Planned, Prototype, and Active if Verified. | Maturity, production, and authority are distinct and must not be conflated. | Public controls exist, but usage is inconsistent across pages. | `HIGH` | Clarify public Documentation so document maturity, implementation maturity, production state, and authority state are explicitly separated. | `docs/overview/documentation-status.md`, `docs/overview/terminology.md`, `docs/overview/product-map.md` | `CLARIFY_CURRENT` |
| TERM-006 | `production` | Public Documentation often uses `active`, `live`, `production`, or `implemented` in caveated ways. | Production does not follow automatically from maturity dimensions. | The public corpus still risks conflating implemented architecture with production readiness. | `HIGH` | Public wording should treat production as a separate evidence-gated state. | `docs/tokenomics/*`, `docs/trading/*`, `docs/mining/*`, `docs/lottery/*` | `ADD_PUBLICATION_QUALIFIER` |
| TERM-007 | `authority` | Public Documentation references governance, treasury, and review authority, but not always as a distinct state. | Authority is separate from maturity and production. | Several pages imply decision authority without equally explicit boundary language. | `HIGH` | Add authority qualifiers where governance or treasury execution might otherwise sound automatically enabled. | `docs/governance/*`, `docs/treasury/*`, `docs/trading/internal-trading.md` | `ADD_AUTHORITY_QUALIFIER` |
| TERM-008 | `publication` | Public Documentation distinguishes draft and approved pages, but page approval can still be over-read as implementation approval. | Public availability is not publication readiness, implementation evidence, or external-use approval. | Public pages remain vulnerable to “page exists, therefore system exists” misreading. | `HIGH` | Clarify that page approval is documentation approval, not operational confirmation. | `docs/index.md`, `docs/overview/documentation-status.md`, `docs/overview/product-map.md` | `CLARIFY_CURRENT` |
| TERM-009 | `prototype` | Used in status controls, but not uniformly reflected in domain pages. | Prototype stage is non-production, non-adoption, non-safety validation. | Several domain pages still read stronger than prototype-stage documentation allows. | `HIGH` | Add prototype qualifiers for high-risk domains when claims exceed design-only evidence. | `docs/tokenomics/*`, `docs/trading/*`, `docs/mining/*`, `docs/lottery/*` | `ADD_PROTOTYPE_QUALIFIER` |
| TERM-010 | `governance activation` | Public pages describe governance bodies and lifecycle models. | Institutional controls allow conceptual governance naming but block operating-governance inference. | The risk is not naming itself; it is implied activation. | `HIGH` | Narrow public wording so named bodies remain design layers unless evidence states otherwise. | `docs/governance/executive-dao.md`, `docs/governance/boardroom-council.md`, `docs/governance/community-dao.md` | `NARROW_SCOPE` |
| TERM-011 | `public` / `private` / `internal` | Public Documentation uses these terms operationally, but not as a consolidated vocabulary. | Institutional boundary source sharply separates public conceptual disclosure from private operational detail. | The concepts are present but not uniformly normalized across domains. | `MEDIUM` | Clarify that public pages may describe bounded concepts, while private execution and sensitive mechanics remain out of scope. | `docs/treasury/compliance-and-disclosures.md`, `docs/lottery/overview.md`, `docs/tokenomics/overview.md` | `CLARIFY_CURRENT` |
| TERM-012 | `operational` | Common across Trading, Mining, Treasury, and Runtime. | Institutional controls warn that operational wording can imply implemented reality. | Public readers can over-read “operations” as evidence of live systems. | `HIGH` | Retain the term, but add explicit `if implemented`, `if approved`, or `active if verified` qualifiers where needed. | `docs/trading/overview.md`, `docs/mining/infrastructure-and-operations.md`, `docs/treasury/overview.md` | `ADD_PUBLICATION_QUALIFIER` |

## Comparison Result

The main terminology issue is not missing vocabulary. The issue is uneven
qualification of existing vocabulary in high-risk public domains.

The strongest REQ-03 candidates are:

1. `Proof of Knowledge`
2. `maturity`
3. `production`
4. `authority`
5. `governance activation`
6. `operational`

## Boundary Note

No Institutional wording was copied wholesale into the public corpus. This
report records only comparison and future-decision signals.
