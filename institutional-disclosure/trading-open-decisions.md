---
schema_version: "1.0.0"
document_id: "PRIV-RPT-015"
aliases: []
document_type: "REPORT"
title: "Trading Open Decisions"
summary: "Private decision register for unresolved Trading promotional, licensing, strategy, and risk-governance parameters."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "TREASURY", "GOVERNANCE", "TOKENOMICS", "BUSINESS", "SECURITY"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Open Decisions

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

## Decision Register

| Decision Area | Current Status | Current Default or Note | Dependency Owner | TBD Marker Where Unresolved |
| --- | --- | --- | --- | --- |
| promotional licensing fee | Unresolved | Promotional conversion to licensed use may include a fee, but no number or model is approved | Trading / Governance / Treasury | [TBD — pending governance decision with first adopters] |
| promotional performance commission | Unresolved | Licensed use above the promotional boundary may include performance commission, but no percentage is defined | Trading / Governance / Treasury | [TBD — pending governance decision with first adopters] |
| commission percentages by strategy | Unresolved | Core strategy commissions exist only as direction and are not numerically defined | Trading / Governance / Treasury | [TBD — pending governance decision with first adopters] |
| tenant fee model | Unresolved | Tenant-specific fee treatment is expected but not structurally finalized | Trading / Governance / Treasury | [TBD — pending governance decision with first adopters] |
| revenue split model | Unresolved | Revenue split is contemplated without a final rule set | Trading / Treasury / Governance | [TBD — pending governance decision with first adopters] |
| risk-profile questionnaire | Unresolved | A KYC-of-risk style questionnaire is intended, but content and scoring are undefined | Trading / Governance / Legal | [TBD — pending governance decision with first adopters] |
| leverage and exposure limits by risk classification | Unresolved | Limits are expected to vary by risk class, but thresholds are not defined | Trading / Governance / Legal | [TBD — pending governance decision with first adopters] |
| Academy curriculum for Trading strategies | Unresolved | Academy is expected to cover strategy-specific education, but the final curriculum is not structured | Academy / Trading | [TBD — pending governance decision with first adopters] |
| Trinity internal algorithms | Unresolved | Trinity coordinates strategies, but algorithmic logic is intentionally undefined here | Trading / ACS | [TBD — pending governance decision with first adopters] |
| signals and timing rules | Unresolved | Signals and timing are strategy-sensitive and remain private design space | Trading / ACS | [TBD — pending governance decision with first adopters] |
| compliance framing for leveraged operations | Unresolved | Compliance-sensitive language for leveraged and automated operation remains blocked pending review | Legal / Governance / Trading | [TBD — pending governance decision with first adopters] |
| public result-sharing incentive model | Unresolved | Optional social-sharing incentives are contemplated without a final benefit model | Trading / Business / Governance | [TBD — pending governance decision with first adopters] |
| local vs Axodus infrastructure for sub-agents | Unresolved | Runtime topology is still open between local, Axodus-hosted, or hybrid direction | Trading / ACS / Security | [TBD — pending governance decision with first adopters] |
| exchange connector permission scope | Unresolved | Connector permissions should be least privilege, but final scopes are not approved | Security / Trading / Integrations | [TBD — pending governance decision with first adopters] |
| LLM provider key handling model | Unresolved | User-supplied provider-key handling remains security-sensitive and unspecified | Security / Trading / ACS | [TBD — pending governance decision with first adopters] |
| settlement and reporting model | Unresolved | Internal reporting is intended, but settlement and formal reporting objects are not finalized | Trading / Treasury / Governance | [TBD — pending governance decision with first adopters] |
| tenant allocation governance | Unresolved | Tenant-defined allocation is directionally adopted, but governance mechanics are not fixed | Trading / Governance | [TBD — pending governance decision with first adopters] |

## Dependency Notes

### Governance

Governance owns unresolved policy around promotional conversion, fee authority,
risk-profile rules, leverage boundaries, tenant governance, and public
disclosure boundaries. Governance must preserve the exact unresolved marker
until first-adopter decisions exist.

### Trading

Trading owns dependency input for strategy catalog definition, promotional and
core product structure, reporting direction, runtime expectations, and the
operational meaning of client or tenant configurability. Trading does not
finalize legal framing alone.

### ACS

ACS owns dependency input for Trinity coordination direction, telemetry
expectations, anomaly review, and Smith monitoring or veto conditions. ACS does
not independently approve public-facing product mechanics.

### Academy

Academy owns dependency input for preparatory and advanced Trading education,
curriculum depth, sequencing, and readiness criteria linked to Trading access.

### Treasury

Treasury owns dependency input for fee treatment, revenue split direction, and
any future settlement or reporting boundaries that intersect with core Trading
monetization.

### Security

Security owns dependency input for provider-key handling, exchange permission
scope, runtime topology risk, API exposure boundaries, and execution-surface
restrictions.

### Legal

Legal review is required before leveraged-operation framing, automated trading
language, performance-commission language, investment-like interpretation, or
external monetization wording is treated as externally usable.

## Boundary

This decision register is private and must not be copied into public
documentation, academic papers, public institutional materials, investor
materials, fundraising materials, or external commercial communications.

It is not legal approval, production enablement, provider activation, exchange
API activation, wallet-signing approval, contract-write approval, or financial
execution authorization.
