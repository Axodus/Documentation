---
schema_version: "1.0.0"
document_id: "DOC-RPT-106"
aliases: []
document_type: "REPORT"
title: "Knowledge Surface Topology Evaluation"
summary: "Evaluates KEEP, RENAME, MOVE, SPLIT, and HYBRID topology alternatives for the .knowledge surface."
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".knowledge/", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "documentation/REPOSITORY-REORGANIZATION-CANDIDATE-REGISTER.md", ref: "WORKTREE", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Knowledge Surface Topology Evaluation

## Control Flags

```text
Request: DOCUMENTATION-REORG-REQ-04
Topology Mutation: NOT_AUTHORIZED
Decision Only: YES
```

## Purpose

This evaluation compares normalization alternatives for `.knowledge/` against
authority clarity, publication clarity, disclosure safety, tooling impact,
generator impact, test impact, developer usability, repository readability,
future scalability, migration complexity, and rollback complexity.

## Evaluation Matrix

| Option | Description | Authority clarity | Publication clarity | Disclosure safety | Tooling impact | Generator impact | Tests impact | Usability | Readability | Scalability | Migration complexity | Rollback complexity | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | Keep `.knowledge/` unchanged | Low | Low | Medium | None | None | None | Medium for agents, low for humans | Low because hidden path masks importance | Medium | None | None | Accept only as interim state |
| B | Rename to `knowledge/` | Medium | Medium | Medium | High | High | Medium | High | High | Medium | Medium | Medium | Not sufficient alone because authority remains mixed |
| C | Move to `.axodus/knowledge/` | Medium | Medium | Medium | High | High | Medium | Low for authors | Medium | Medium | High | High | Reject for now; hides an already important governed surface |
| D | Split by authority | High after review | High after review | High | Critical | Critical | High | Medium | High | High | High | High | Valuable target, but blocked until authority review closes |
| E | Split by consumer | Medium | Medium | Medium | Critical | Critical | High | Medium | High | High | High | High | Useful for tooling, but can duplicate authority ambiguity |
| F | Hybrid | High when phased | High when phased | High when phased | High but bounded | High but bounded | Medium to high | High after transition | High after transition | High | Medium to high | Medium to high | Recommended decision |

## Option A - KEEP

Keeping `.knowledge/` unchanged preserves current validation and avoids path
churn. It does not resolve the hidden-directory ambiguity, public-inventory
confusion, or authority-review backlog. This is acceptable only as an interim
state while review and execution candidates are prepared.

## Option B - RENAME

Renaming `.knowledge/` to `knowledge/` improves discoverability and removes the
hidden namespace. It does not by itself separate internal, public-reference,
financial, security, terminology, or research material. A direct rename would
still carry the 285 authority-review entries into a more visible namespace.

## Option C - MOVE

Moving to `.axodus/knowledge/` would make the surface appear system-owned but
would also make authoring and review less discoverable. It risks preserving the
same authority ambiguity under a new hidden namespace.

## Option D - SPLIT BY AUTHORITY

Splitting by authority could eventually produce clear partitions such as
internal knowledge, reviewed public-reference material, and historical/archive
records. It cannot be executed until domain owners confirm which families are
internally authoritative, reference-only, or review-blocked.

## Option E - SPLIT BY CONSUMER

Splitting by consumer could help generator, authoring, tooling, and research
flows. It is weaker than authority partitioning for disclosure safety because a
consumer label does not itself determine publication or private boundary.

## Option F - HYBRID

The recommended target is a phased hybrid:

1. Keep `.knowledge/` unchanged until review gates close.
2. Define `knowledge/` as the future visible root for governed internal
   knowledge sources.
3. Partition the future visible root by authority and consumer only after each
   family is classified.
4. Preserve historical `.knowledge/` references in prior reports as historical
   evidence rather than rewriting history.
5. Keep private Track B/C material outside the public repository surfaces.

## Evaluation Criteria Summary

| Criterion | Best-supported option | Reason |
| --- | --- | --- |
| Authority clarity | HYBRID | Allows authority review before physical split |
| Publication clarity | HYBRID | Separates repository visibility from publication eligibility |
| Disclosure safety | HYBRID | Prevents private or financial-sensitive material from being normalized prematurely |
| Tooling impact | KEEP interim, HYBRID final | Avoids immediate breakage while defining a controlled rewrite plan |
| Generator impact | KEEP interim, HYBRID final | Keeps drift 0 now and scopes future full regeneration |
| Tests impact | KEEP interim, HYBRID final | Preserves current assertions until replacement counts are authorized |
| Developer usability | RENAME or HYBRID | Visible `knowledge/` is clearer than hidden `.knowledge/` |
| Repository readability | HYBRID | Makes function explicit after review |
| Future scalability | HYBRID | Supports authority and consumer partitioning |
| Migration complexity | HYBRID | Can be phased by family and dependency group |
| Rollback complexity | HYBRID | Allows path-level rollback per phase |

## Final Evaluation

The selected topology decision is `HYBRID`, with no physical mutation in this
request. Future execution should not perform a single broad rename unless the
candidate freeze and authority register explicitly allow it.

