---
schema_version: "1.0.0"
document_id: "PRIV-RPT-017"
aliases: []
document_type: "REPORT"
title: "Trading Sanitization Decision Register"
summary: "Private decision register classifying current public Trading references for future sanitization follow-up."
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
related_cores: ["TRADING", "ACS", "ACADEMY", "TREASURY", "GOVERNANCE", "TOKENOMICS", "SECURITY", "BUSINESS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Sanitization Decision Register

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| public_documentation_update | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_approval | NOT_GRANTED |
| production_enablement | false |
| provider_activation | false |
| exchange_api_activation | false |
| wallet_signing | false |
| contract_writes | false |
| financial_execution | false |
| public_api_change | false |
| schema_change | false |
| runtime_interface_change | false |

## Purpose

This register records the disposition of current public Trading references so
future sanitization, if explicitly authorized, can be performed without
inventing policy or reopening the private Trading baseline.

This request records Trading boundary findings and sanitization decisions only.
It does not modify or remediate public files.

## Decision Criteria

- Generic conceptual architecture and explicit safety disclosures may be
  ACCEPTABLE_PUBLIC_ABSTRACTION.
- Risk, permission, automation, or role language that could become too
  operational is MONITOR_ONLY.
- Private promotional, commercial, provider-key, strategy, allocation, ACS
  veto, or incentive mechanics are SANITIZATION_REQUIRED.
- Public return, profit, yield, investment, public-sale, compliance, or legal
  claims are LEGAL_REVIEW_REQUIRED or SANITIZATION_REQUIRED.
- Any private path, private artifact name, or enabled execution claim is a
  BOUNDARY_BLOCKER.
- No classification in this register authorizes a public edit.

## Public Surface Inventory

| Surface | Review Focus | Result |
| --- | --- | --- |
| docs/trading/ | Trading architecture, access, agents, APIs, risk, execution, and reporting | Material conceptual findings classified below |
| docs/index.md | Trading entrypoint and global risk notice | No private mechanics or paths found |
| README.md | Ecosystem Trading framing and financial-risk notice | No private mechanics or paths found |
| SUMMARY.md | Trading navigation entries | Public filenames only; no private artifact exposure |
| docs/.vitepress/ | Public navigation configuration | Public Trading pages only; no private artifact exposure |
| documentation/DOCUMENTATION-MASTER-INDEX.md | Generated public document inventory | Public Trading sources only |
| public generated JSON artifacts | Manifest, graph, validation, and baseline-report inventory | institutional-disclosure sources remain excluded |
| papers/ | Academic-paper scan | NOT_PRESENT |

## Trading Decision Register

| Public Surface | Observed Reference | Classification | Rationale | Required Action | Follow-Up Request | Dependency Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| docs/trading/overview.md and docs/trading/user-facing-strategies.md | User-owned exchange accounts and user-controlled capital | ACCEPTABLE_PUBLIC_ABSTRACTION | The language supports user control without exposing private promotional or tenant mechanics | Retain abstract framing and monitor for product-specific drift | None | Trading / Documentation Core | ACTIVE |
| docs/trading/overview.md, docs/trading/user-facing-strategies.md, and docs/trading/cex-api-security.md | Least-privilege, withdrawal-disabled, and revocable exchange API keys | ACCEPTABLE_PUBLIC_ABSTRACTION | Generic credential-safety guidance is public-safe and does not reveal the private LLM provider-key flow | Retain security guidance without adding private storage or activation mechanics | None | Trading / Security | ACTIVE |
| docs/trading/acs-trinity-integration.md and docs/trading/overview.md | ACS analysis, adversarial review, monitoring, and governance support | MONITOR_ONLY | Public roles remain conceptual but must not drift into private veto criteria | Keep role-level framing; scan future changes for private criteria | None | ACS / Trading / Documentation Core | ACTIVE |
| docs/trading/acs-trinity-integration.md and docs/trading/architecture.md | Trinity analysis, risk review, monitoring, and reporting support | MONITOR_ONLY | No internal algorithm is exposed, but workflow language is operationally suggestive | Preserve human validation and block algorithms, signals, timing, and sub-agent topology | None | ACS / Trading | ACTIVE |
| docs/trading/access-model.md, docs/trading/overview.md, and docs/trading/scalper-futures.md | `$Neurons` balance or token status as possible Trading access conditions | SANITIZATION_REQUIRED | Token-linked access overlaps the private unresolved commercial boundary and may be read as approved policy | Abstract to governance-defined eligibility in a separately authorized public rewrite | TRADING-PUBLIC-SANITIZATION-REQ-01 | Trading / Tokenomics / Governance / Documentation Core | RECOMMENDED |
| docs/trading/access-model.md, docs/trading/user-facing-strategies.md, and docs/trading/scalper-futures.md | Promotional campaigns, subscriptions, product tiers, milestones, and advanced-service paths | SANITIZATION_REQUIRED | The combined framing may imply a defined promotional-to-paid conversion path even though private commercial mechanics remain unresolved | Remove or abstract commercial access categories in a separately authorized public rewrite | TRADING-PUBLIC-SANITIZATION-REQ-01 | Trading / Business / Governance / Documentation Core | RECOMMENDED |
| docs/trading/access-model.md, docs/trading/risk-management.md, and docs/trading/scalper-futures.md | Leverage, risk tiers, risk profiles, exposure, drawdown, and loss limits without numbers | MONITOR_ONLY | Generic risk controls are appropriate, but private classification thresholds must remain absent | Retain non-numeric risk language and scan for thresholds or ranges | None | Trading / Governance / Legal | ACTIVE |
| docs/trading/overview.md, docs/trading/user-facing-strategies.md, and docs/trading/scalper-futures.md | No-custody-by-default language | ACCEPTABLE_PUBLIC_ABSTRACTION | This is an approved architectural principle and does not expose private operational mechanics | Retain conditional user-control framing | None | Trading / Security | ACTIVE |
| docs/trading/overview.md and docs/trading/compliance-and-user-disclosures.md | No-profit-guarantee, no-investment-advice, capital-loss, and backtest-limit language | ACCEPTABLE_PUBLIC_ABSTRACTION | The language is cautionary rather than promissory or approval-oriented | Retain and monitor for contradictory performance claims | None | Trading / Legal / Documentation Core | ACTIVE |
| docs/trading/user-facing-strategies.md, docs/trading/architecture.md, and docs/trading/strategy-lifecycle.md | Automated bots, strategy engines, order management, live states, pilots, and kill switches | MONITOR_ONLY | The descriptions are conditional but could be misread as live production capability | Preserve conditional wording and closed-gate status; scan future activation claims | None | Trading / Security / Governance | ACTIVE |
| docs/trading/cex-api-security.md, docs/trading/architecture.md, and docs/trading/scalper-futures.md | Exchange connector, exchange API setup, storage-model options, and test modes | MONITOR_ONLY | No specific private provider flow is exposed, but the guidance is operationally suggestive | Keep generic and conditional; prohibit provider lists, activation steps, and private topology | None | Trading / Security / Integrations | ACTIVE |
| docs/trading/architecture.md and docs/trading/reporting-and-accountability.md | Telemetry, monitoring, incidents, errors, and accountability | ACCEPTABLE_PUBLIC_ABSTRACTION | Transparent oversight is public-safe when it does not expose private thresholds or formulas | Retain abstract observability and accountability framing | None | Trading / ACS / Accountability | ACTIVE |
| docs/trading/reporting-and-accountability.md and docs/trading/scalper-futures.md | PnL, fees, funding, drawdown, win rate, and performance-report fields | MONITOR_ONLY | The fields are reporting concepts with anti-promise context, but could drift into public performance claims or private formulas | Keep non-promotional context and scan for formulas, projections, or cherry-picked results | None | Trading / Accountability / Legal | ACTIVE |
| docs/trading/, docs/index.md, README.md, SUMMARY.md, docs/.vitepress/, and public generated artifacts | No private path, private artifact name, USD 100 cap, private fee, LLM-provider flow, ACS-veto logic, Trinity algorithm, or enabled-execution claim found | MONITOR_ONLY | No blocker exists; recurrence would be severe and requires regression scanning | Repeat the boundary scan after material Trading or navigation changes | None | Documentation Core / Trading | ACTIVE |

## Cross-Core Dependency Notes

### ACS

ACS and Trinity may remain public as conceptual analysis, risk-review,
monitoring, and oversight roles. Private veto criteria, internal algorithms,
sub-agent generation boundaries, and execution topology remain prohibited.

### Academy

Academy may remain a conceptual risk-education dependency. Specific private
onboarding curricula, provider-key training flows, prerequisites, and
commercial access dependencies remain private.

### Tokenomics and Governance

`$Neurons` and promotional access findings depend on unresolved Trading,
Tokenomics, Business, and Governance policy. Public abstraction requires a
separate authorized request and must not invent thresholds or commercial
terms.

### Security and Integrations

Least-privilege exchange API guidance remains public-safe. Specific provider
support, connector activation, credential storage, infrastructure topology,
and operational enablement remain private or unapproved.

### Legal and Accountability

Risk and performance reporting must remain cautionary. No profit, return,
yield, public-sale, regulatory, compliance, or investment approval is inferred
from the current public corpus.

## Recommended Future Requests

- `TRADING-PUBLIC-SANITIZATION-REQ-01`: abstract `$Neurons` access and
  promotional, subscription, tier, and advanced-service access language after
  explicit public-edit authorization.
- `DOCUMENTATION-GENERATOR-DRIFT-REQ-01`: reconcile the separately documented
  public generated-artifact drift under an authorized generation scope.
- A later recurring Trading boundary regression audit after material changes
  to Trading, ACS, Tokenomics, Academy, navigation, or product status.

## Deferred Items

- No public file is modified or sanitized in this request.
- No private Trading architecture or economic decision is changed.
- No fee, commission, risk threshold, strategy algorithm, or legal conclusion
  is introduced.
- Preexisting public generated-artifact drift is recorded but not remediated.
- Provider activation, exchange activation, wallet signing, contract writes,
  and financial execution remain disabled.

## Gate Preservation

This request created private Trading boundary audit and sanitization decision
artifacts only. It did not modify or remediate public documentation, update
academic paper material, update investor material, update fundraising
material, expose private artifacts, change public navigation, modify public
APIs, schemas or runtime interfaces, activate providers or exchange APIs,
enable wallet signing, write contracts, perform financial execution, change
production systems or open operational gates.
