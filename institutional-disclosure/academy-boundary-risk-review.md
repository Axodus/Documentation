---
schema_version: "1.0.0"
document_id: "PRIV-RPT-006"
aliases: []
document_type: "REPORT"
title: "Academy Boundary Risk Review"
summary: "Private review of Academy public/private boundary rules and current exposure posture."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D1"
authority_scope: "DOCUMENTATION.PRIVATE_DISCLOSURE"
authority_level: "PROJECT"
author: "Axodus Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: null
created_date: "2026-07-08"
last_updated: "2026-07-08"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["ACADEMY", "TOKENOMICS", "GOVERNANCE", "MARKETPLACE", "ACS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Boundary Risk Review

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_review | REQUIRED_BEFORE_EXTERNAL_USE |

## Purpose

This report records the private/public separation rules for Academy and the
current boundary risk posture for Academy-related documentation surfaces.

## Review Verdict

Private Academy content remains internal only.

Private Academy strategic architecture, Track B operational governance
mechanics, and Track C tokenomics-sensitive mechanics are not approved for
public documentation, academic-paper material, investor use, fundraising use,
public navigation, or external institutional disclosure.

## Private Content Categories

The following Academy content categories are treated as private internal
material:

- private `$Neurons` economy mechanics;
- reward issuance and release flows tied to governance or treasury decisions;
- POK Minter budget and distribution mechanics;
- ACS veto logic over token release or redemption;
- locked-to-wallet redemption flows;
- local Academy governance budget allocation;
- progressive governance power transfer details;
- central treasury and tutor redemption mechanics;
- revenue verification and distribution-sensitive language;
- VALT acquisition and reserve-linked mint flows.

## Prohibited Public Themes

The following themes are prohibited from public Academy disclosure unless a
separate disclosure decision and legal review explicitly authorize them:

- `$Neurons` private mechanics;
- POK Minter;
- emission logic;
- treasury mechanics;
- minting flows;
- locked-to-wallet redemption;
- ACS veto over token release;
- dividend framing;
- APR framing;
- revenue distribution;
- tutor redemption;
- governance budget allocation;
- governance power transfer mechanics;
- tenant access passport enforcement details;
- VALT minting mechanics;
- specific treasury reserve assets;
- legal or compliance claims;
- investment or fundraising framing.

## Allowed Public-Safe Themes

The following Academy themes remain public-safe at abstract level only:

- education;
- competence gateway;
- educational accountability;
- self-assessment;
- certification-based readiness;
- epistemic self-determination;
- learning-before-action;
- user responsibility;
- risk-aware access;
- tenant readiness.

## Scan Surfaces

The following public-facing surfaces were reviewed for Academy boundary context:

- `docs/academy/`
- `docs/index.md`
- `README.md`
- `SUMMARY.md`

## Current Public Academy Reference Findings

Current public Academy documentation contains generic references that intersect
with the private Academy boundary but do not by themselves reproduce the full
private baseline.

Findings recorded:

- `docs/academy/overview.md` references generic `$Neurons` utility in Academy
  overview language.
- `docs/academy/token-reward-flows.md` references generic reward flows, locked
  and unlocked reward states, and wallet claim concepts in cautious
  implementation language.
- `docs/academy/locked-rewards.md` references locked rewards, internal-use
  rewards, possible unlock conditions, and `$Neurons`-adjacent design patterns.
- `docs/academy/marketplace-integration.md` references Marketplace payment
  utility and possible use of `$Neurons` or locked rewards for course commerce.
- `SUMMARY.md` links to public Academy and Tokenomics content but does not link
  to any private Academy disclosure artifacts.
- `README.md` was part of the scan surface and no Academy private-artifact
  references were found.

These findings are treated as boundary-observation items only.

## Risk Assessment

| Area | Risk | Boundary Decision |
| --- | --- | --- |
| Generic `$Neurons` references | Public readers may infer more concrete Academy tokenomics than intended | Keep current findings recorded privately and avoid importing private mechanics into public docs |
| Locked rewards language | Public wording may be read as a hidden implementation commitment | Preserve cautious language and keep private redemption details out of public paths |
| Marketplace payment utility | Public payment examples may invite inference about tutor settlement or treasury mechanics | Treat settlement, redemption, and reserve behavior as private-only |
| Reward-flow vocabulary | Claim, unlock, or internal-use terms may overlap with private reward architecture | Do not externalize locked-to-wallet release mechanics |
| Governance references | Public Academy alignment language may be mistaken for live local governance mechanics | Keep governance cascade and power-transfer details private |

## No-Remediation Statement

This request records Academy boundary findings only and does not remediate
public files.

No files under `docs/`, `README.md`, or `SUMMARY.md` are modified by this
request.

## Follow-Up Recommendation

If a stricter public-safe Academy framing is later enforced, create a separate
sanitization request focused on public Academy phrasing, especially around
generic `$Neurons`, locked rewards, reward flows, and Marketplace payment
utility.

That future work should remain separate from this private disclosure baseline
so the current request preserves private/public separation without altering
public documentation.

## Gate Preservation

This report does not authorize public disclosure, external use, academic-paper
reuse, investor use, fundraising use, legal approval, production enablement,
financial execution, provider execution, wallet signing, contract writes, or
public navigation updates.
