---
schema_version: "1.0.0"
document_id: "DOC-RPT-104"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Authority Register"
summary: "Classifies .knowledge authority, disclosure, and publication eligibility by family without inferring authority or changing source content."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.REPOSITORY_REORGANIZATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
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
related_requirements: ["DOCUMENTATION-REORG-REQ-04"]
related_adrs: ["DOC-ADR-009", "DOC-ADR-017", "DOC-ADR-020", "DOC-ADR-023"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".knowledge/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation.exception-dispositions.json", ref: "WORKTREE", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Authority Register

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Authority Transfer: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Physical Mutation: NOT_AUTHORIZED
```

## Purpose

This register assigns current authority, disclosure, and publication
classifications for `.knowledge/` families. The classifications are conservative
because no authority may be inferred from repository presence.

## Classification Vocabulary

Authority classifications:

```text
AUTHORITATIVE_INTERNAL
REFERENCE_ONLY
DERIVED_FROM_DOCUMENTATION
DERIVED_FROM_INSTITUTIONAL
PRIVATE_INTERNAL
PUBLIC_SOURCE
UNKNOWN
```

Disclosure classifications:

```text
PUBLIC
PUBLIC_REFERENCE
INTERNAL
PRIVATE
TRACK_B
TRACK_C
MIXED
UNKNOWN
```

Publication eligibility:

```text
PUBLICABLE
PUBLICABLE_WITH_REVIEW
INTERNAL_ONLY
PRIVATE_ONLY
NOT_FOR_PUBLICATION
```

## Authority Register

| Family ID | Path | Files | Current authority | Disclosure | Publication eligibility | Owner | Evidence | Decision |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| `KNOW-AUTH-0001` | `.knowledge/` | 1 | `AUTHORITATIVE_INTERNAL` | `INTERNAL` | `INTERNAL_ONLY` | Documentation Coordinator | Root README states semantic memory and not public-facing documentation | Keep as internal knowledge-layer control record until normalization |
| `KNOW-AUTH-0002` | `.knowledge/academy/` | 14 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Academy Owner / Documentation Coordinator | Education, rewards, marketplace, and governance topics | Requires authority review before publication or canonical migration |
| `KNOW-AUTH-0003` | `.knowledge/acs/` | 16 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | ACS Owner / Documentation Coordinator | Agent roles, runtime, tooling, security, and accountability topics | Requires authority and security-sensitive terminology review |
| `KNOW-AUTH-0004` | `.knowledge/bba/` | 18 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Business / BBA Owner | Brand, campaigns, client intake, growth, and compliance topics | Requires authority review before public reuse |
| `KNOW-AUTH-0005` | `.knowledge/business/` | 17 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Business Owner | Service model, delivery lifecycle, requests, and governance alignment | Requires authority review |
| `KNOW-AUTH-0006` | `.knowledge/core/` | 7 | `AUTHORITATIVE_INTERNAL` | `INTERNAL` | `PUBLICABLE_WITH_REVIEW` | Documentation Coordinator / Core Owner | Terminology and dangerous-term controls referenced by Institutional intake | Internal control source; public wording requires separate review |
| `KNOW-AUTH-0007` | `.knowledge/defi/` | 21 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | DeFi Owner / Legal Reviewer | DeFi, vault, staking, compliance, tokenomics, treasury topics | Authority, legal, and financial-claim review required |
| `KNOW-AUTH-0008` | `.knowledge/dex/` | 23 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | DEX Owner / Legal Reviewer | DEX, listing, MEV, routing, risk, and treasury topics | Authority and financial-disclosure review required |
| `KNOW-AUTH-0009` | `.knowledge/glossary/` | 15 | `AUTHORITATIVE_INTERNAL` | `INTERNAL` | `PUBLICABLE_WITH_REVIEW` | Documentation Coordinator / Terminology Owner | Internal vocabulary and dangerous-term controls | Internal terminology source; public glossary remains review-gated |
| `KNOW-AUTH-0010` | `.knowledge/governance/` | 12 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Governance Owner | Constitutional governance, DAO, receipts, proposals, treasury risk | Authority review required before public or canonical reuse |
| `KNOW-AUTH-0011` | `.knowledge/lottery/` | 23 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Lottery Owner / Legal Reviewer | Draw lifecycle, randomness, payouts, compliance, security topics | Legal, security, and claims review required |
| `KNOW-AUTH-0012` | `.knowledge/marketplace/` | 24 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Marketplace Owner | Seller, buyer, listing, reputation, payment, security topics | Authority and public-claim review required |
| `KNOW-AUTH-0013` | `.knowledge/mining/` | 25 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Mining Owner / Legal Reviewer | Mining operations, profitability, pools, custody, rewards, sustainability | Legal, authority, and financial-claim review required |
| `KNOW-AUTH-0014` | `.knowledge/runtime/` | 17 | `AUTHORITATIVE_INTERNAL` | `INTERNAL` | `INTERNAL_ONLY` | Runtime Owner / Documentation Coordinator | Request lifecycle, status, handoff, blockers, validation topics | Internal operational knowledge source |
| `KNOW-AUTH-0015` | `.knowledge/tokenomics/` | 17 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Tokenomics Owner / Legal Reviewer | Supply, emissions, fees, rewards, utility, treasury topics | Legal and authority review required |
| `KNOW-AUTH-0016` | `.knowledge/trading/` | 18 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Trading Owner / Security Reviewer | CEX API security, strategies, risk, treasury, compliance topics | Security, legal, and authority review required |
| `KNOW-AUTH-0017` | `.knowledge/treasury/` | 18 | `UNKNOWN` | `MIXED` | `PUBLICABLE_WITH_REVIEW` | Treasury Owner / Legal Reviewer | Custody, reserves, allocation, risk, revenue, compliance topics | Treasury, legal, and security review required |

## Aggregate Findings

| Finding | Count |
| --- | ---: |
| Families reviewed | 17 |
| Families with at least partial internal authority | 4 |
| Families requiring authority review before execution | 13 |
| Families requiring financial, legal, or security-sensitive review | 7 |
| Families eligible for direct public publication | 0 |
| Families eligible for publication only after review | 14 |
| Internal-only families at current state | 3 |

## Authority Rules

- Repository visibility does not grant publication authority.
- Generated inventory inclusion does not make a knowledge pack public-facing.
- Internal knowledge-pack status does not make a file private Track B/C unless
  the content or owner classifies it that way.
- `.knowledge/core/` and `.knowledge/glossary/` may guide internal terminology,
  but public labels remain subject to cross-repository terminology and claims
  governance.
- Financial, security, tokenomics, trading, treasury, lottery, mining, DeFi,
  and DEX material cannot be normalized as public or canonical authority without
  explicit owner review.

## Final Authority Decision

The current `.knowledge/` surface is an internal governed knowledge-source
surface with mixed domain authority. It is not a public source surface and is
not eligible for direct publication. Future normalization must preserve
authority by family and route unresolved domains through review before any move,
rename, split, public inventory change, or canonical conversion.

