---
schema_version: "1.0.0"
document_id: "DOC-ROAD-002"
aliases: []
document_type: "ROADMAP"
title: "Documentation Legacy Prioritization"
summary: "Applies the approved scoring model to relevant Batch 01 candidates without authorizing migration or reserving IDs."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.MIGRATION.PRIORITIZATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-RPT-003"}, {type: "DEPENDS_ON", target: "DOC-STD-002"}, {type: "DEPENDS_ON", target: "DOC-STD-003"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-03"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/.vitepress/config.mts", ref: "main", kind: "CONFIG", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Legacy Prioritization

## Scoring Contract

`docs/` +30; entry/overview +25; explicit owner and scope evidence +20; navigation reference +15; governance/security/risk relevance +10; recent verifiable date +10; pending technical review −30; confirmed conflict/duplication/staleness −50 and reclassify.

Ties use lexicographic `source_path`. Scoring ranks review; it does not establish promotion eligibility.

## Relevant Candidate Ranking

All candidates below score `80` (`30+25+20+15+10+10−30`), are `NEEDS_REVIEW`, and remain ineligible because reviewer and approver evidence is absent.

| Rank | Source path | Domain | Core | Proposed type | Class | Flags | Score | Batch 01 |
|---:|---|---|---|---|---|---|---:|---|
| 1 | `docs/accountability/overview.md` | `docs/` | Accountability | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 2 | `docs/academy/overview.md` | `docs/` | Academy | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 3 | `docs/acs/overview.md` | `docs/` | ACS | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 4 | `docs/bba-agency/overview.md` | `docs/` | BBA Agency | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 5 | `docs/business/overview.md` | `docs/` | Business | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 6 | `docs/defi/overview.md` | `docs/` | DeFi | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 7 | `docs/dex/overview.md` | `docs/` | DEX | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 8 | `docs/governance/overview.md` | `docs/` | Governance | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 9 | `docs/lottery/overview.md` | `docs/` | Lottery | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 10 | `docs/marketplace/overview.md` | `docs/` | Marketplace | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 11 | `docs/mining/overview.md` | `docs/` | Mining | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 12 | `docs/overview/constitutional-model.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 13 | `docs/overview/core-principles.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 14 | `docs/overview/documentation-standards.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 15 | `docs/overview/documentation-status.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 16 | `docs/overview/ecosystem-overview.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 17 | `docs/overview/product-map.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 18 | `docs/overview/risk-notices.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk, security_sensitive | 80 | No |
| 19 | `docs/overview/terminology.md` | `docs/` | Transversal | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, cross_core_dependency, risk | 80 | No |
| 20 | `docs/runtime/overview.md` | `docs/` | Runtime | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk | 80 | No |
| 21 | `docs/security/overview.md` | `docs/` | Security | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 22 | `docs/tokenomics/overview.md` | `docs/` | Tokenomics | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 23 | `docs/trading/overview.md` | `docs/` | Trading | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |
| 24 | `docs/treasury/overview.md` | `docs/` | Treasury | `GUIDE` | `NEEDS_REVIEW` | public_exposure, urgency, authority_required, risk, security_sensitive | 80 | No |

## Blocker and Next Action

Every listed file exists, has an inline owner, a scope section, a dated update, and navigation evidence. None has canonical reviewer/approver evidence. REQ-04 must review authority and assignments before any candidate can become eligible or be frozen.
