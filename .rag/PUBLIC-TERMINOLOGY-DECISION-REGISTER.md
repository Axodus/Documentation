---
schema_version: "1.0.0"
document_id: "DOC-RPT-131"
aliases: []
document_type: "REPORT"
title: "Public Terminology Decision Register"
summary: "Freezes terminology decisions for future public coherence remediation under EPIC-05 REQ-02."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/PUBLIC-TERMINOLOGY-DECISION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Terminology Decision Register

## Terminology Register

| Term ID | Term | Current Definition | Institutional Reference | Difference | Affected Pages | Risk | Decision | Future Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TERM-001 | `Tenant` | No stable public definition. | Narrow governance-domain definition. | Public corpus currently avoids the term. | `docs/governance/dao-federation.md` | `MEDIUM` | `KEEP_CURRENT` | Do not introduce in Batch 01 unless a target page explicitly needs it. |
| TERM-002 | `bounded local governance domain` | No stable public definition. | Narrow paper-facing abstraction. | Public corpus uses local DAO language instead. | `docs/governance/dao-federation.md` | `LOW` | `RETAIN_SCOPE_SPECIFIC_DIFFERENCE` | Keep current public wording. |
| TERM-003 | `functional service module` | Not used publicly. | Institutional paper-facing abstraction. | Different audience and abstraction layer. | `docs/overview/ecosystem-overview.md`, `docs/overview/product-map.md` | `LOW` | `DEPRECATE_PUBLIC_USAGE` | Do not add to the public corpus. |
| TERM-004 | `Proof of Knowledge` | Used publicly as tokenomics and eligibility terminology. | Proposed educational participation mechanism, not a cryptographic proof protocol. | Public corpus lacks a consistent narrow definition. | `docs/overview/terminology.md`, `docs/tokenomics/pok-minting.md`, `docs/tokenomics/overview.md` | `HIGH` | `CLARIFY_CURRENT` | Add explicit non-cryptographic and prototype qualifiers in REQ-03. |
| TERM-005 | `maturity` | Managed through status labels, but unevenly applied. | Must remain distinct from production and authority. | Public pages still conflate page maturity and system maturity. | `docs/overview/documentation-status.md`, `docs/overview/product-map.md` | `HIGH` | `CLARIFY_CURRENT` | Freeze wording that separates document, implementation, production, and authority states. |
| TERM-006 | `production` | Sometimes implied by operational wording. | Separate from maturity and authority. | High-risk domains still allow over-reading. | `docs/tokenomics/*`, `docs/trading/*`, `docs/mining/*`, `docs/lottery/*` | `HIGH` | `NARROW_SCOPE` | Require `active if verified` or equivalent qualifiers. |
| TERM-007 | `authority` | Present, but not always isolated from governance design. | Separate from maturity and production. | Governance and treasury pages can imply authority too easily. | `docs/governance/*`, `docs/treasury/*`, `docs/trading/internal-trading.md` | `HIGH` | `ADD_AUTHORITY_QUALIFIER` | Freeze explicit authority qualifiers in Batch 01. |
| TERM-008 | `publication` | Sometimes over-read as implementation approval. | Public availability is not operational proof. | Documentation approval is not system approval. | `docs/index.md`, `docs/overview/documentation-status.md` | `HIGH` | `ADD_PUBLICATION_QUALIFIER` | Clarify page approval versus implementation verification. |
| TERM-009 | `prototype` | Present in controls, not uniform in domain wording. | Prototype is not production or safety validation. | Several domain pages need stronger prototype framing. | `docs/tokenomics/*`, `docs/trading/*`, `docs/mining/*`, `docs/lottery/*` | `HIGH` | `ADD_PROTOTYPE_QUALIFIER` | Freeze prototype qualifiers where claims exceed design-only evidence. |
| TERM-010 | `governance activation` | Bodies and layers are named publicly. | Institutional control allows names but not active-body inference. | Named bodies can be mistaken for active institutions. | `docs/governance/executive-dao.md`, `docs/governance/boardroom-council.md`, `docs/governance/community-dao.md` | `HIGH` | `NARROW_SCOPE` | Freeze design-layer wording for named governance bodies. |
| TERM-011 | `public` / `private` / `internal` | Used operationally, not fully normalized. | Institutional control sharply separates public conceptual disclosure from private operations. | Domain pages do not always restate the same boundary model. | `docs/tokenomics/overview.md`, `docs/treasury/compliance-and-disclosures.md`, `docs/lottery/overview.md` | `MEDIUM` | `CLARIFY_CURRENT` | Normalize boundary wording in Batch 01. |
| TERM-012 | `operational` | Common, but risky in public high-sensitivity pages. | Can imply implemented reality if left unqualified. | Same word used for design and live states. | `docs/trading/overview.md`, `docs/mining/infrastructure-and-operations.md`, `docs/treasury/overview.md` | `HIGH` | `ADD_PUBLICATION_QUALIFIER` | Require operational wording to be conditioned by evidence or implementation state. |

## Decision Summary

- Public Documentation should keep its own domain language where scope differs.
- Institutional terminology should influence qualification and ambiguity control,
  not public vocabulary replacement by default.
- The most urgent term corrections are qualifier corrections, not taxonomy
  expansion.
