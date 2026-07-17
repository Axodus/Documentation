---
schema_version: "1.0.0"
document_id: "PRIV-RPT-014"
aliases: []
document_type: "REPORT"
title: "Trading Boundary Risk Review"
summary: "Private review of Trading public/private boundary rules and current exposure posture."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "TREASURY", "GOVERNANCE", "MARKETPLACE", "TOKENOMICS", "BUSINESS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Boundary Risk Review

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

This report records the private/public separation rules for Trading and the
current boundary risk posture for Trading-related documentation surfaces.

## Review Verdict

Private Trading content remains internal only.

Private Trading Track B/C content, including promotional-agent mechanics,
licensing direction, performance-commission concepts, private ACS veto
criteria, and strategy-level operational logic, is not approved for public
documentation, academic-paper material, investor use, fundraising use, public
navigation, or external institutional disclosure.

## Private Content Categories

The following Trading content categories are treated as private internal
material:

- promotional USD 100 cap mechanics;
- licensing-fee and performance-commission model;
- LLM provider key flow;
- specific exchange connector flow;
- tenant capital-allocation mechanics;
- private ACS veto criteria;
- Trinity internal strategy logic;
- strategy algorithms, signals, and timing rules;
- result-sharing incentive mechanics;
- risk-profile thresholds and classification rules;
- `$Neurons` purchase or access mechanics for Trading;
- strategy-level revenue and fee mechanics.

## Prohibited Public Themes

The following themes are prohibited from public Trading disclosure unless a
separate disclosure decision and legal review explicitly authorize them:

- USD 100 promotional cap;
- licensing fee model;
- performance commission;
- LLM provider API key flow;
- specific exchange connector flow;
- tenant capital-allocation mechanics;
- private ACS veto criteria;
- Trinity internal strategy logic;
- result-sharing incentive mechanics;
- risk-profile thresholds;
- strategy algorithms;
- commission percentages;
- investment-return framing;
- guaranteed-profit or yield framing;
- public commercial claims for autonomous Trading products;
- legal or compliance claims.

## Allowed Public-Safe Themes

The following Trading themes remain public-safe at abstract level only:

- user-owned exchange accounts;
- least-privilege API key guidance;
- no-custody-by-default positioning;
- high-level ACS or Trinity involvement;
- no-profit-guarantee language;
- high-level risk disclosure;
- education before access;
- risk-aware automated-operation framing.

## Scan Surfaces

The following public-facing surfaces were reviewed for Trading boundary
context:

- `docs/trading/`
- `docs/index.md`
- `README.md`
- `SUMMARY.md`
- `docs/.vitepress/`
- `.rag/DOCUMENTATION-MASTER-INDEX.md`
- `papers/`: NOT_PRESENT

## Current Public Trading Reference Findings

Current public Trading documentation contains conceptual references that
intersect with the private Trading boundary but do not reproduce the private
baseline.

Findings recorded:

- `docs/trading/overview.md` references user-facing strategy access, Academy
  education, ACS or Trinity analysis, no-custody-by-default, and no-profit
  guarantee language.
- `docs/trading/user-facing-strategies.md` references user-owned exchange
  accounts, API key permissions, leverage risk, and no-profit-guarantee
  confirmations.
- `docs/trading/access-model.md` references possible `$Neurons` access,
  Academy-gated access, promotional access, and risk-tier concepts.
- `docs/trading/scalper-futures.md` references API-key-based execution in a
  user-owned account and no-custody-by-default language.
- `docs/trading/acs-trinity-integration.md` references ACS, Trinity,
  Morpheus, and Agent Smith as analytical or monitoring surfaces.
- `docs/trading/compliance-and-user-disclosures.md` references exchange risk,
  API key risk, leverage risk, and prohibited guarantee claims.
- `README.md`, `SUMMARY.md`, and navigation surfaces expose Trading and ACS
  conceptual paths but do not reference private Trading disclosure artifacts.

These findings are treated as boundary-observation items only.

## Risk Assessment

| Area | Risk | Boundary Decision |
| --- | --- | --- |
| User-owned exchange account language | Public readers may infer a specific promotional trading flow | Keep the actual promotional flow and USD 100 cap private |
| API key and connector references | Public readers may infer active provider-key or exchange-activation flow | Preserve provider flow, permission specifics, and activation boundaries as private |
| ACS and Trinity references | Public readers may infer active private veto logic or strategy coordination details | Keep private ACS criteria and sub-agent mechanics out of public docs |
| `$Neurons` access language | Public readers may over-read token-based Trading access as active product policy | Keep purchase, access, and monetization mechanics private and unresolved |
| Futures and leverage language | Public readers may over-read high-risk strategy material as public product offer | Preserve strategy thresholds, licensing model, and core monetization details as private |

## No-Remediation Statement

This request records Trading boundary findings only and does not remediate
public files.

No files under `docs/`, `README.md`, `SUMMARY.md`, or `papers/` are modified by
this request.

## Follow-Up Recommendation

If stricter public-safe Trading framing is later required, create a separate
sanitization request focused on public Trading phrasing around user-owned
accounts, API key flow, ACS or Trinity references, promotional access language,
and generic token or risk-tier references.

That future work should remain separate from this private disclosure baseline
so the current request preserves private/public separation without altering
public documentation.

## Gate Preservation

This report does not authorize public disclosure, external use, academic-paper
reuse, investor use, fundraising use, legal approval, public navigation
updates, production enablement, provider activation, exchange API activation,
wallet signing, contract writes, financial execution, production API calls,
production database writes, schema changes, or runtime-interface changes.
