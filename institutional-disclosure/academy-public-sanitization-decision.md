---
schema_version: "1.0.0"
document_id: "PRIV-RPT-022"
aliases: []
document_type: "REPORT"
title: "Academy Public Sanitization Decision"
summary: "Private decision report for the four current Academy public sanitization finding groups."
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
created_date: "2026-07-13"
last_updated: "2026-07-13"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: ["ACADEMY-PUBLIC-SANITIZATION-DECISION-REQ-01"]
related_adrs: []
related_cores: ["ACADEMY", "MARKETPLACE", "TOKENOMICS", "TREASURY", "ACS", "LEGAL"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Public Sanitization Decision

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| request_id | ACADEMY-PUBLIC-SANITIZATION-DECISION-REQ-01 |
| execution_mode | DECISION_ONLY |
| final_decision | DEFERRED_PENDING_LEGAL |
| public_file_mutation | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| authorized_correction_set | NONE |
| legal_review | REQUIRED_BEFORE_PUBLICATION |
| legal_approval | NOT_GRANTED |
| production | NOT_ENABLED |
| financial_gates | PRESERVED_CLOSED |

## Purpose

This report decides the treatment of the four current Academy
`SANITIZATION_REQUIRED` finding groups. It freezes the reviewed public
occurrences, separates public-safe education from private economic mechanics,
defines candidate target abstractions for Legal and owner review, and records
the conditions required before any decision may be reopened.

This is a decision-only private record. It does not authorize a public edit,
sanitization execution, generated-artifact refresh, external use, legal
conclusion, or operational or financial enablement.

## Decision Authority

This report applies the Academy private baseline, the Academy and Marketplace
boundary consolidation audit and sanitization decision register, and the
cross-core disclosure matrix, governance standard, and sanitization roadmap.
The governing rows classify Academy `$Neurons` mechanics, locked rewards, and
reward-flow states as `PRIVATE_ONLY` for public documentation and `REQUIRED`
for sanitization. Marketplace token payments, accepted assets, settlement,
fees, commissions, internal credits, and treasury-facing economics are also
`PRIVATE_ONLY`. Each of the four groups requires Legal review before the exact
replacement framing may be published.

The matrix permits generic education rewards only as non-financial abstract
participation recognition. It does not extend that permission to
token-denominated, locked, claimable, redeemable, wallet-realized, or
spendable value. A classification expresses eligibility, not publication
authority.

Documentation Core owns the evidence freeze and repository boundary. Academy
owns educational and technical accuracy. Marketplace owns course-discovery and
commerce accuracy. Tokenomics and Treasury own token, reward, lock, release,
payment, settlement, redemption, reserve, and distribution accuracy. ACS owns
risk-review accuracy without acquiring release authority. Legal owns the
publication determination for exact legal-sensitive wording. No owner,
including Legal, can independently authorize public mutation or open a
production or financial gate.

The reviewed repository state is commit
`39ff89e16ef0a4eca78071e412250acbdaf41a54`. No governed Academy Markdown
source changed after the Academy and Marketplace boundary audit. The later
generated master-index reconciliation reproduced current public titles but did
not add an independent Academy mechanic, and its current post-reconciliation
state is included in this freeze. The worktree was clean before this report was
created. The current evidence therefore does not require corpus-change
escalation.

## Source Findings

The review covered the four Academy private baseline artifacts:

- `institutional-disclosure/academy-private-architecture.md`
- `institutional-disclosure/academy-boundary-risk-review.md`
- `institutional-disclosure/academy-open-decisions.md`
- `institutional-disclosure/academy-economic-template-notes.md`

It also covered:

- `institutional-disclosure/academy-marketplace-boundary-consolidation-audit.md`
- `institutional-disclosure/academy-marketplace-sanitization-decision-register.md`
- `institutional-disclosure/cross-core-disclosure-matrix.md`
- `institutional-disclosure/cross-core-disclosure-governance-standard.md`
- `institutional-disclosure/cross-core-sanitization-roadmap.md`

| Finding | Current state | Source conclusion |
| --- | --- | --- |
| ACADEMY-SAN-01 — `$Neurons` utility framing | STILL_PRESENT | Academy is publicly associated with token utility, token-gated access, reward issuance, and `$Neurons`-linked use. Conditional language does not satisfy the stricter token-neutral Academy boundary. |
| ACADEMY-SAN-02 — locked reward framing | STILL_PRESENT | Public pages describe restricted balances, internal use, transfer, withdrawal, unlock, voting, access, Marketplace spending, contract patterns, and anti-abuse controls. The concept may be read as locked or redeemable value rather than educational recognition. |
| ACADEMY-SAN-03 — reward-flow framing | STILL_PRESENT | Public pages describe issuance, eligibility, locked and unlocked states, claims, wallet or account realization, Marketplace spending, minting, revocation, budgets, amounts, and policy fields. These are economic state transitions, not merely learning progress. |
| ACADEMY-SAN-04 — Marketplace payment-utility framing | STILL_PRESENT | Public pages describe accepted currencies and assets, payment and credit processing, fees, commissions, royalties, redemption, tutor compensation, settlement, treasury allocation, and revenue distribution. Generic course discovery is separable, but the economic flow is not public-safe under the current boundary. |

The current scan found no public private-artifact path or filename, `POK
Minter` operating mechanic, private ACS release-veto criterion, private
treasury route or percentage, reserve-asset commitment, approved redemption
formula, dividend or APR promise, legal-approval claim, or enabled-execution
claim. The four findings remain abstraction-boundary and legal-routing issues,
not direct private-artifact leakage incidents or current boundary blockers.

The expanded cross-page inventory below does not create a new finding group.
It freezes semantic occurrences that the earlier page-level register grouped
under the same four findings.

## Public Occurrence Inventory

Line references freeze the governed Markdown and source-configuration files at
the reviewed commit. Multiple references on one line are one occurrence
context. Overlap between groups is intentional where one context combines a
token, a locked value state, a reward transition, and a payment use.

### ACADEMY-SAN-01 — `$Neurons` Utility Framing

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/academy/overview.md` | 42; 50; 54; 56; 64; 73 | Academy purpose and ecosystem role associate education, access, reward flows, token-gating, and `$Neurons` or token utility. |
| `docs/academy/learn-to-win.md` | 26 | `$Neurons` is listed with locked internal rewards and access outcomes. |
| `docs/academy/locked-rewards.md` | 57; 63 | A same-token balance pattern and `$Neurons`-linked locked utility are described. |
| `docs/academy/token-reward-flows.md` | 1; 16 | The page title and overview associate Academy rewards with `$Neurons` utility and emissions. |
| `docs/academy/marketplace-integration.md` | 16; 28; 58; 68; 78; 82 | Token utility, `$Neurons` payment or tutor receipt, token-payment policy, and token-value risk are associated with Academy course commerce. |
| `docs/academy/governance-alignment.md` | 20 | Academy is positioned at the intersection of education, token utility, Marketplace commerce, and governance. |
| `docs/academy/tutor-validation.md` | 69 | Token rewards are an additional-review trigger for courses and tutors. |

### ACADEMY-SAN-02 — Locked Reward Framing

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/academy/locked-rewards.md` | 1; 12; 16; 20-28; 30-37; 39-59; 61-79 | The dedicated page defines restricted reward balances, transfer and withdrawal limits, Marketplace, governance and access use, unlock states and conditions, token or credit implementations, settlement, and controls. |
| `docs/academy/token-reward-flows.md` | 18; 22; 37-40; 55-57; 62; 66; 70; 76; 80 | Locked, unlocked, claimable, wallet, transfer, withdrawal, Marketplace, mint, unlock, and policy-field contexts. |
| `docs/academy/overview.md` | 76; 93; 115; 119 | Reward-state architecture, locked-reward navigation, reward-flow risk, and locked balances. |
| `docs/academy/learn-to-win.md` | 26; 38; 44; 46; 50; 54 | Locked or unlocked reward status, internal use, transfer, claims, Marketplace spending, and token unlock policy. |
| `docs/academy/marketplace-integration.md` | 58; 64; 66; 68-70; 73-74; 78; 84 | Locked rewards as payment or credit, tutor receipt, burn or transfer, third-party course use, on-chain or internal spending, refunds, and abuse risk. |
| `docs/academy/governance-alignment.md` | 26; 28; 42; 67 | Locked-reward utility, emission policy, minting, unlocking, and ACS authority limits. |
| `docs/academy/academy-risk.md` | 26; 35; 39; 51; 55; 65 | Locked-reward exploits, controls, claims, spending, revocation, governance influence, and transferability. |

### ACADEMY-SAN-03 — Reward-Flow Framing

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/academy/token-reward-flows.md` | 1; 12; 16; 18; 20-30; 32; 36-45; 47-58; 60-62; 64-70; 74-80 | Reward sources, states, issuance, claim, wallet, spend, mint, revocation, flow steps, utilities, amounts, budgets, and contract or policy fields. |
| `docs/academy/overview.md` | 46; 64; 76; 79; 92-93; 107-108; 115; 119 | Reward logic, state assignment, governance, navigation, expectation risk, and issuance. |
| `docs/academy/learn-to-win.md` | 16; 20; 26; 32; 37-46; 50; 54; 58; 62; 66-70 | Reward eligibility, policy, locked or unlocked assignment, internal or Marketplace use, claim metrics, abuse controls, and financial-promise cautions. |
| `docs/academy/locked-rewards.md` | 1; 12; 16; 20-28; 30-37; 39-59; 61-79 | Dedicated locked-value, status, utility, implementation, unlock, Marketplace, governance, wallet, and control contexts. |
| `docs/academy/marketplace-integration.md` | 58; 64; 66; 69-70; 73; 78; 82; 84 | Reward payment, credit, consumption, spending policy, financial-outcome risk, and abuse contexts. |
| `docs/academy/governance-alignment.md` | 26; 28; 40; 42; 59; 66-67 | Reward budgets, emissions, approvals, abuse analysis, mint or unlock limits, and partner program routing. |
| `docs/academy/academy-risk.md` | 16; 20-21; 25-26; 35-36; 39-40; 51; 55; 57; 61; 65 | Farming, claims, financial misrepresentation, caps, progressive rewards, Marketplace use, pauses, eligibility, revocation, and campaign controls. |
| `docs/academy/course-publishing.md` | 41; 43; 50; 52; 56 | Course reward logic, policy, currencies, governance review, and revalidation. |
| `docs/academy/proof-of-knowledge.md` | 20; 40 | Reward-system protection and post-assessment reward-policy checks. |
| `docs/academy/tutor-validation.md` | 20; 54; 69; 77; 87 | Reward integrity, token-reward review, abuse, and farming risk. |

### ACADEMY-SAN-04 — Marketplace Payment Utility

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/academy/marketplace-integration.md` | 16; 20; 29; 42-53; 56-78; 82-84 | Purchases, accepted payment methods and assets, redemption, credits, entitlement, fees, royalties, commissions, tutor and treasury revenue, settlement, refunds, and payment risks. |
| `docs/academy/course-publishing.md` | 16; 41; 43; 50-56; 62-68 | Education marketplace, prices, accepted currencies, commercial listings, refunds, fees, royalties, commissions, treasury allocation, and payment assets. |
| `docs/academy/overview.md` | 54; 73; 78-79; 84; 94; 110; 119 | Marketplace commerce, paid or token-gated access, payments, royalties, commissions, tutor revenue, Marketplace utility, and settlement. |
| `docs/academy/locked-rewards.md` | 32-33; 45; 56; 58; 65-67; 75 | Marketplace spending, discounts, internal credits, vouchers, payment sources, settlement, tutor compensation, and Marketplace-triggered unlock. |
| `docs/academy/token-reward-flows.md` | 28; 30; 42; 66; 70; 80 | Purchase- or revenue-related rewards, Marketplace spending, payment acceptance, and economic policy fields. |
| `docs/academy/learn-to-win.md` | 26; 28; 40; 50; 54 | Marketplace access, trust signals, utility, reward spending, and course fee policy. |
| `docs/academy/academy-risk.md` | 16; 26; 39; 51; 57 | Marketplace abuse, purchases, refunds, locked-credit use, fees, spend signals, and purchase-route controls. |
| `docs/academy/governance-alignment.md` | 20; 26; 28; 34; 36; 59 | Marketplace commerce and fee policy, commercial terms, course bundles, and partner-course routing. |

### Navigation, Index, and Root Surfaces

| Exact public source | Occurrence lines | Decision context |
| --- | --- | --- |
| `docs/index.md` | 81 | The Academy card advertises cautious reward documentation; this is part of ACADEMY-SAN-03. |
| `SUMMARY.md` | 489; 493 | Public navigation names Academy Locked Rewards and Academy Token Reward Flows. |
| `docs/.vitepress/config.mts` | 106-107 | Academy sidebar source names Token Reward Flows and Locked Rewards. |
| `documentation/DOCUMENTATION-MASTER-INDEX.md` | 612; 616 | The generated public index reproduces the two Academy document titles. |

`README.md` lines 42 and 44 and `docs/index.md` lines 38, 80, and 111
contain generic ecosystem or Tokenomics references. They do not independently
associate an Academy economic mechanic beyond the occurrences above. The
Marketplace Integration navigation label at `SUMMARY.md` line 490,
`docs/.vitepress/config.mts` line 108, and the master index line 613 is generic
course-integration navigation; payment and settlement meaning arises from the
page content, not the label. These contexts remain frozen as reviewed but are
not independent findings.

### Derived Public Mirrors

The current rendered Academy pages, compiled page modules, home-page mirrors,
sidebar rendering, and local search index reproduce the governed source
contexts. They are derived mirrors rather than independent policy sources.
Their current paths are frozen because later source correction would require a
separately authorized, controlled regeneration and verification pass:

- `docs/.vitepress/dist/academy/academy-risk.html`
- `docs/.vitepress/dist/academy/course-publishing.html`
- `docs/.vitepress/dist/academy/governance-alignment.html`
- `docs/.vitepress/dist/academy/learn-to-win.html`
- `docs/.vitepress/dist/academy/locked-rewards.html`
- `docs/.vitepress/dist/academy/marketplace-integration.html`
- `docs/.vitepress/dist/academy/overview.html`
- `docs/.vitepress/dist/academy/proof-of-knowledge.html`
- `docs/.vitepress/dist/academy/token-reward-flows.html`
- `docs/.vitepress/dist/academy/tutor-validation.html`
- `docs/.vitepress/dist/index.html`
- `docs/.vitepress/dist/assets/academy_academy-risk.md.DCpSW7ve.js`
- `docs/.vitepress/dist/assets/academy_academy-risk.md.DCpSW7ve.lean.js`
- `docs/.vitepress/dist/assets/academy_course-publishing.md.DwqU9XK3.js`
- `docs/.vitepress/dist/assets/academy_course-publishing.md.DwqU9XK3.lean.js`
- `docs/.vitepress/dist/assets/academy_governance-alignment.md.BgwYiOSt.js`
- `docs/.vitepress/dist/assets/academy_governance-alignment.md.BgwYiOSt.lean.js`
- `docs/.vitepress/dist/assets/academy_learn-to-win.md.CiwwBHBz.js`
- `docs/.vitepress/dist/assets/academy_learn-to-win.md.CiwwBHBz.lean.js`
- `docs/.vitepress/dist/assets/academy_locked-rewards.md.DR_QStyt.js`
- `docs/.vitepress/dist/assets/academy_locked-rewards.md.DR_QStyt.lean.js`
- `docs/.vitepress/dist/assets/academy_marketplace-integration.md.CGwR_awn.js`
- `docs/.vitepress/dist/assets/academy_marketplace-integration.md.CGwR_awn.lean.js`
- `docs/.vitepress/dist/assets/academy_overview.md.DxjWn7Cu.js`
- `docs/.vitepress/dist/assets/academy_overview.md.DxjWn7Cu.lean.js`
- `docs/.vitepress/dist/assets/academy_proof-of-knowledge.md.CKHCoQ1S.js`
- `docs/.vitepress/dist/assets/academy_proof-of-knowledge.md.CKHCoQ1S.lean.js`
- `docs/.vitepress/dist/assets/academy_token-reward-flows.md.BL9yJk3k.js`
- `docs/.vitepress/dist/assets/academy_token-reward-flows.md.BL9yJk3k.lean.js`
- `docs/.vitepress/dist/assets/academy_tutor-validation.md.DhiCDDNh.js`
- `docs/.vitepress/dist/assets/academy_tutor-validation.md.DhiCDDNh.lean.js`
- `docs/.vitepress/dist/assets/index.md.BJdFBIos.js`
- `docs/.vitepress/dist/assets/index.md.BJdFBIos.lean.js`
- `docs/.vitepress/dist/assets/chunks/@localSearchIndexroot.CzgpSeLt.js`

Global sidebar labels may be repeated in other rendered pages. That repetition
is generated from `docs/.vitepress/config.mts` and is not an independent policy
source. VitePress cache dependencies contain no independent governed Academy
wording.

## Reward and Access Boundary

| Public-safe abstraction | Required limit |
| --- | --- |
| Competence development and learning progress | Describe knowledge acquisition, assessments, and progress without economic value, token issuance, or reward-state transitions. |
| Completion recognition | Badges, certificates, or acknowledgement may be described only as non-financial recognition; do not imply accreditation, redeemability, payment value, governance power, or financial entitlement. |
| Certification and risk-aware access | Describe readiness or educational prerequisites abstractly; do not disclose token gates, locked-value eligibility, thresholds, enforcement, or guaranteed product access. |
| Tenant readiness | Describe preparation for complex modules without private passport enforcement, limits, criteria, or ACS veto mechanics. |
| Generic course discovery | Describe course discovery, learning-path visibility, and access coordination without prices, accepted assets, payments, credits, fees, royalties, settlement, tutor payout, treasury routing, or revenue. |

The following remain private and are not interchangeable with public-safe
completion recognition: locked or spendable rewards, wallet or account release,
minting, claims, transfer or withdrawal, `$Neurons` utility, POK Minter
mechanics, ACS release veto, treasury-backed allocation or redemption, payment
assets, internal credits, tutor settlement, fees, commissions, royalties,
dividends, APR, yield, revenue distribution, profit participation, or
investment-return framing.

## Economic and Legal Risk Assessment

| Finding | Economic risk | Legal dependency | Decision effect |
| --- | --- | --- | --- |
| ACADEMY-SAN-01 | Token utility, token-gating, and `$Neurons` linkage may create an expectation of economic value, access entitlement, issuance, or an approved token use. | Legal must determine whether the exact replacement fully removes token-linked reward, payment, access, sale, or investment meaning. `REQUIRED_BEFORE_PUBLICATION`; approval not granted. | Prevents `NO_ACTION` and `GO_SCOPED` now. |
| ACADEMY-SAN-02 | Locked balances, transfer restrictions, unlock conditions, Marketplace use, and tutor compensation may represent redeemable or spendable value and invite speculative or investment-like interpretation. | Legal must classify the exact proposed treatment as non-financial recognition or require removal, and review every retained use. `REQUIRED_BEFORE_PUBLICATION`; approval not granted. | Requires `DEFERRED_PENDING_LEGAL`. |
| ACADEMY-SAN-03 | Issued, locked, unlocked, claimable, wallet, spent, minted, revoked, amount, and budget states describe an economic flow and can imply entitlement or treasury-backed benefit. | Legal must decide whether any reward reference can remain and whether the candidate learning-progress abstraction removes financial reward, redeemable value, return, revenue participation, and treasury benefit meaning. `REQUIRED_BEFORE_PUBLICATION`; approval not granted. | Requires `DEFERRED_PENDING_LEGAL`. |
| ACADEMY-SAN-04 | Accepted assets, payments, credits, fees, commissions, royalties, redemption, settlement, tutor revenue, treasury revenue, and distribution language describes financial and commercial mechanics. | Legal must review any retained course-access wording and confirm that it does not imply payment acceptance, entitlement, revenue participation, treasury backing, or approved commerce. `REQUIRED_BEFORE_PUBLICATION`; approval not granted. | Requires `DEFERRED_PENDING_LEGAL`. |

Conditional phrases such as `may`, `if implemented`, `Needs Review`, and
`subject to governance approval` reduce implementation certainty but do not
convert the underlying token, reward, payment, settlement, or revenue mechanic
into a public-safe educational abstraction.

Legal may approve, condition, reject, or defer exact wording. Legal review does
not grant repository mutation, publication, governance, product, technical,
production, or financial authority.

## Public-Safe Target Framing

The following directions are candidates for Legal and owner review only. They
are not authorized replacement text and do not form a correction set.

| Finding | Candidate direction | Required boundary |
| --- | --- | --- |
| ACADEMY-SAN-01 | Describe Academy as an education, competence-development, assessment, certification, and risk-readiness layer. | Remove `$Neurons`, token utility, token rewards, token-gating, token-value, and token-linked access implications. |
| ACADEMY-SAN-02 | Describe learning progress and non-financial completion recognition without a locked-value concept. | Remove lock, unlock, balance, transfer, withdrawal, claim, spend, wallet, mint, burn, credit, voting, redemption, and payment implications. |
| ACADEMY-SAN-03 | Describe a learning sequence of discovery, study, assessment, progress recording, completion recognition, certification, and readiness review. | Remove economic reward sources, states, issuance, amount, budget, claim, wallet, Marketplace-spend, mint, revocation, and contract-flow vocabulary. |
| ACADEMY-SAN-04 | Describe generic course discovery, learning-product visibility, and access coordination. | Remove prices, accepted currencies or assets, token payments, credits, fees, commissions, royalties, redemption, refunds, settlement, tutor payout, treasury allocation, revenue, and distribution. |
| Shared context | Retain competence development, learning progress, completion recognition, certification, risk-aware access, tenant readiness, and generic course discovery only at abstract level. | Do not imply accreditation, entitlement, approved availability, economic value, private enforcement, legal approval, or enabled execution. |

## Decision

| Finding | Decision | Rationale | Frozen source set | Candidate target framing | Dependencies | Future execution scope |
| --- | --- | --- | --- | --- | --- | --- |
| ACADEMY-SAN-01 | DEFERRED_PENDING_LEGAL | The finding remains. Token utility is expressly legal-sensitive, and no exact-wording determination confirms that the candidate education abstraction removes all token-linked economic and access meaning. | ACADEMY-SAN-01 inventory above | Token-neutral competence, assessment, certification, and risk readiness only, subject to review. | Academy / Tokenomics / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| ACADEMY-SAN-02 | DEFERRED_PENDING_LEGAL | The finding remains. Safe treatment depends on deciding whether current locked-value references represent financial reward, redeemable or spendable value, or a permissible non-financial recognition concept. | ACADEMY-SAN-02 inventory above | Learning progress and non-financial completion recognition only, subject to review. | Academy / Tokenomics / Treasury / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| ACADEMY-SAN-03 | DEFERRED_PENDING_LEGAL | The finding remains. Current states include claim, wallet, spend, mint, amount, budget, and revenue adjacency, and no Legal determination authorizes a non-financial replacement. | ACADEMY-SAN-03 inventory above | Learning, assessment, progress, completion, certification, and readiness only, subject to review. | Academy / Tokenomics / Treasury / ACS / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| ACADEMY-SAN-04 | DEFERRED_PENDING_LEGAL | The finding remains. Payment, redemption, fees, settlement, revenue, and treasury-backed benefit meaning is explicit, and exact retained course-access wording has not passed Legal review. | ACADEMY-SAN-04 inventory above | Generic course discovery and access coordination only, subject to review. | Academy / Marketplace / Treasury / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |

Final request decision: `DEFERRED_PENDING_LEGAL`.

No finding is `NO_ACTION` because all four remain present. No finding is
`NO_GO` because a bounded public-safe educational abstraction may be possible
after review. No finding is `GO_SCOPED` because each exact publication-level
Legal dependency is open and legal approval is not granted.

## Authorized Correction Set

`NONE`.

No public source line, public file, navigation entry, rendered artifact, search
index, or generated artifact is authorized for mutation. Candidate directions
above exist only to make the Legal dependency reviewable.

If the decision is later reopened, the candidate correction envelope is
limited to the exact occurrence lines in this inventory and their necessary
source navigation labels. A superseding decision must name the selected lines
and paths; it must not treat the whole file list as automatically authorized.

| Finding | Candidate source envelope for a future superseding decision |
| --- | --- |
| ACADEMY-SAN-01 | `docs/academy/overview.md`; `docs/academy/learn-to-win.md`; `docs/academy/locked-rewards.md`; `docs/academy/token-reward-flows.md`; `docs/academy/marketplace-integration.md`; `docs/academy/governance-alignment.md`; `docs/academy/tutor-validation.md` |
| ACADEMY-SAN-02 | `docs/academy/locked-rewards.md`; `docs/academy/token-reward-flows.md`; `docs/academy/overview.md`; `docs/academy/learn-to-win.md`; `docs/academy/marketplace-integration.md`; `docs/academy/governance-alignment.md`; `docs/academy/academy-risk.md`; affected source navigation labels only |
| ACADEMY-SAN-03 | The ten Academy Markdown sources listed in ACADEMY-SAN-03; `docs/index.md` line 81; affected source navigation labels only |
| ACADEMY-SAN-04 | `docs/academy/marketplace-integration.md`; `docs/academy/course-publishing.md`; `docs/academy/overview.md`; `docs/academy/locked-rewards.md`; `docs/academy/token-reward-flows.md`; `docs/academy/learn-to-win.md`; `docs/academy/academy-risk.md`; `docs/academy/governance-alignment.md` |

Derived and generated files are not candidate manual-edit targets. A future
execution request must separately authorize controlled regeneration and verify
the exact derived changes.

## Excluded Changes

- All files under `docs/`, including every frozen Academy source.
- `docs/index.md`, `README.md`, `SUMMARY.md`, `docs/.vitepress/`, and
  `documentation/DOCUMENTATION-MASTER-INDEX.md`.
- Public manifests, graphs, indexes, validation outputs, rendered output, and
  search artifacts.
- Academy, Marketplace, Tokenomics, Treasury, ACS, Legal, or cross-core private
  baseline policy and unresolved mechanics.
- Public-safe competence, progress, certification, readiness, discovery, risk,
  security, accountability, and no-guarantee wording outside an independently
  approved future scope.
- Academic-paper, institutional-public, investor, fundraising, marketing, or
  sale material.
- Public API, schema, runtime interface, provider, wallet, contract,
  production, treasury, token, settlement, redemption, or financial changes.

## Execution Preconditions

No sanitization execution may begin under this decision. The decision may be
reopened only after all of the following are recorded:

1. Legal issues a written determination for the exact candidate wording, exact
   public source lines, and surrounding context for every finding intended for
   correction, explicitly addressing financial reward, redeemable or spendable
   value, investment return, revenue participation, and treasury-backed
   benefit where applicable.
2. Academy and the applicable Marketplace, Tokenomics, Treasury, ACS, and
   Governance owners confirm educational, technical, economic, access, and
   authority accuracy without introducing private mechanics or new policy.
3. Documentation Core refreshes the occurrence inventory and confirms that the
   public corpus, private baseline, decision register, matrix, standard,
   roadmap, owners, and gates have not changed.
4. A new or superseding decision assigns `GO_SCOPED` to each row intended for
   correction and records exact source paths, exact occurrence contexts,
   approved target wording, acceptance evidence, and a reversible correction
   set.
5. A separate execution request explicitly authorizes those public source
   paths and defines source navigation and generated-artifact treatment.
6. Pre-execution metadata validation, relationship checks, combined
   documentation checks, generator drift checks, boundary scans, focused
   tests, VitePress build, diff hygiene, and worktree checks pass.

Satisfying a Legal dependency alone does not satisfy the remaining conditions.

## Rollback Requirements

There is no approved public correction and therefore no approved file-specific
rollback set.

If an unauthorized public or generated mutation appears while this decision is
in effect, execution must stop, the exact diff and pre-change revision must be
preserved, and the incident must be escalated before any reviewed,
non-destructive restoration. Regeneration must not conceal unrelated drift or
overwrite user-owned changes.

Any later authorized execution must define its source revision, exact file and
line envelope, accepted wording, generated output set, rejection evidence, and
non-destructive revert path before mutation begins. Rollback must restore the
last accepted public wording and rerun the occurrence scan, private-boundary
scan, metadata and relationship validation, documentation checks, generator
check, tests, build, diff, and worktree checks.

## Review Triggers

Review is `EVENT_DRIVEN`. Reopen this decision when any of the following occurs:

- Legal issues or changes guidance for tokens, rewards, locked or redeemable
  value, payment assets, course commerce, refunds, settlement, fees,
  commissions, royalties, revenue participation, treasury-backed benefits,
  investment returns, or external credential claims.
- Any frozen source, source-navigation, or derived-mirror path changes.
- A new Academy page, navigation entry, index, manifest, generated surface, or
  cross-core page introduces related token, reward, payment, or access meaning.
- Academy, Marketplace, Tokenomics, Treasury, ACS, Governance, Legal, or
  Documentation Core changes the applicable policy, owner, or authority.
- The Academy private baseline, consolidation audit, decision register,
  cross-core matrix, governance standard, or sanitization roadmap changes.
- POK Minter, ACS release veto, wallet release, redemption, reserve, treasury,
  dividend, APR, yield, revenue distribution, or investment-like wording
  appears or changes publicly.
- Production, provider, wallet, contract, public API, schema, runtime,
  financial, or disclosure gate status changes.
- A private path, private identifier, unsupported approval claim, guaranteed
  outcome claim, or enabled-operation claim is detected publicly.

Any occurrence or governing-corpus change requires a new evidence freeze before
decision work continues.

## Gate Preservation

This report creates one private decision artifact only. It does not sanitize or
modify public documentation, update navigation or generated public artifacts,
authorize external disclosure, claim Legal approval, create investor or
fundraising material, or change an academic paper. It does not alter public
APIs, schemas, runtime interfaces, providers, wallets, contracts, token or
treasury mechanics, settlement, redemption, or production systems.

Public mutation and sanitization remain unauthorized. Legal approval is not
granted. Production, provider activation, wallet signing, contract writes, and
financial execution remain disabled. All operational and financial gates
remain preserved closed.
