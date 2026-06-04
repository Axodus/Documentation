# VitePress Alignment

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Purpose

This document defines how the active VitePress documentation surface aligns with Documentation nucleus ownership, root global `.instructions`, local `.instructions`, Core boundaries, and publication governance.

VitePress source files can be prepared and validated locally, but publication or official release claims require explicit approval.

## Platform Role

VitePress is the active Axodus technical documentation build and publication surface. GitBook is legacy / not active unless the coordinator explicitly re-approves it.

VitePress content under `docs/` is the preferred public documentation surface, but it does not become official publication merely because it exists, builds, or appears in a generated `dist` directory.

## Ownership Map

| Layer | Owns | Does Not Own |
|---|---|---|
| Coordinator-approved portfolio instructions | Portfolio-level status, maturity target, cross-nucleus request priority, global safety boundaries | Product implementation details without nucleus evidence |
| Root `/opt/Axodus/.instructions` | Global coordination, portfolio roadmap, maturity register, blocker register, status taxonomy | Runtime behavior or production execution |
| Documentation nucleus `.instructions` | Documentation workflow, validation, ownership, publication boundaries, VitePress inventory and quality process | Product authority, treasury authority, governance ratification |
| VitePress source files `docs/` | Public-facing documentation drafts and candidate pages | Approval, publication authority, production readiness |
| Core `.instructions` / registry concepts | Architecture boundaries, constitutional semantics, registry/source-of-truth principles | Product execution approval |
| Published output | Approved public documentation artifact after authorized release | Evidence of approval unless release records exist |

## Relationship to Global Docs

Root global `.instructions` define the portfolio-level coordination model. VitePress docs must not contradict global status, maturity levels, blockers, production-disabled boundaries, or request sequencing.

When global docs and VitePress pages conflict:

1. Latest coordinator instruction controls immediate execution.
2. Global portfolio instructions control cross-nucleus status and maturity.
3. Documentation nucleus `.instructions` control documentation workflow.
4. Nucleus-specific `.instructions` control local product facts.
5. VitePress pages are corrected or marked draft until conflict is resolved.

## Relationship to Documentation `.instructions`

Documentation `.instructions` define how VitePress changes are prepared, reviewed, validated, approved, and published.

VitePress pages must preserve:

- status labels;
- source-of-truth hierarchy;
- no-production-claim boundaries;
- financial/token/treasury/trading/settlement safety language;
- GitBook legacy classification;
- publication approval gates.

## Relationship to Nucleus Instructions

Product pages in `docs/<nucleus>/` must align with the relevant nucleus `.instructions` before they are treated as approved public documentation.

If a nucleus is in Hold, Planning Only, Critical Hold, Mock Local, or Production Blocked state, VitePress pages must not imply production readiness or active user-facing execution.

## Draft to Publication Flow

| State | Meaning | Required Evidence |
|---|---|---|
| Draft | Content can be edited locally and may be incomplete. | Author and scope are known. |
| Candidate | Structurally complete and ready for review. | Inventory, source references, risk language, and validation checklist. |
| Approved | Reviewed and accepted for the stated scope. | Required owner, coordinator, safety, governance, or nucleus approval as applicable. |
| Published | Released through approved documentation pipeline. | Publication authorization, version/date, target, and post-publication record. |
| Deprecated | Retained for historical context only. | Replacement or retirement note. |

Documentation source changes do not equal publication approval.

A successful local build does not equal publication approval.

Published docs must not contain unapproved financial, tokenomics, treasury, APY, governance, legal, or production-readiness claims.

## Approval Requirements

| Change Type | Required Approval |
|---|---|
| Low-risk wording correction | Documentation Coordinator |
| VitePress structure/navigation/sidebar change | Documentation Coordinator; affected nucleus owner if product scope changes |
| Portfolio status or maturity claim | Portfolio Coordinator |
| Nucleus product claim | Affected nucleus owner |
| Financial, tokenomics, treasury, APY, payout, trading, DEX, lottery, marketplace settlement, governance execution, legal, or production-readiness claim | Portfolio Coordinator plus appropriate safety/governance/nucleus review |
| Publication or official release claim | Explicit publication authority confirmation |
| Deployment pipeline or hosting change | Coordinator approval and implementation request |
| DAO/governance ratification claim | Governance/DAO approval evidence |

## Coordinator Approval Required

Coordinator approval is required before:

- publishing public docs;
- changing publication target;
- claiming final L4 or higher maturity;
- approving production-facing statements;
- changing versioning or repository structure;
- adding or modifying deployment assumptions;
- presenting generated docs as official release.

## Nucleus Owner Approval Required

Nucleus owner approval is required before VitePress docs make material claims about:

- implemented product behavior;
- validation status;
- user-facing readiness;
- governance gates;
- local execution restrictions;
- product-specific blockers or risks.

## Governance / DAO Approval Required

Governance or DAO approval evidence is required before docs claim:

- ratified governance outcomes;
- approved treasury movement;
- token policy finality;
- settlement activation;
- DEX routing/swap activation;
- live trading activation;
- lottery game activation;
- marketplace value transfer activation;
- on-chain execution readiness.

## Alignment Conclusion

VitePress is structurally present and active as the Documentation platform. It remains a candidate documentation surface until REQ-04 structural validation and REQ-05 publication governance confirm build readiness, link integrity, ownership, approval authority, and publication path.
