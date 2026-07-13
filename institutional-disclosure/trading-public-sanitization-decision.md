---
schema_version: "1.0.0"
document_id: "PRIV-RPT-021"
aliases: []
document_type: "REPORT"
title: "Trading Public Sanitization Decision"
summary: "Private decision report for the two current Trading public sanitization finding groups."
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
related_requirements: ["TRADING-PUBLIC-SANITIZATION-DECISION-REQ-01"]
related_adrs: []
related_cores: ["TRADING", "ACS", "TOKENOMICS", "GOVERNANCE", "LEGAL"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Trading Public Sanitization Decision

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| request_id | TRADING-PUBLIC-SANITIZATION-DECISION-REQ-01 |
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

This report decides the treatment of the two current Trading
`SANITIZATION_REQUIRED` finding groups. It freezes the reviewed public
occurrences, defines candidate public-safe abstractions for Legal review, and
records the dependencies required before the decision may be reopened.

This is a decision-only private record. It does not authorize a public edit,
sanitization execution, generated-artifact refresh, external use, or operational
enablement.

## Decision Authority

This report applies the current Trading private baseline, the Trading boundary
audit and decision register, and the cross-core disclosure matrix, governance
standard, and sanitization roadmap. Those controls classify both finding groups
as `PRIVATE_ONLY` for public documentation, `REQUIRED` for sanitization, and
`REQUIRED_BEFORE_PUBLICATION` for Legal review.

Documentation Core owns the evidence freeze and repository boundary. Trading
owns technical accuracy. Tokenomics and Governance own token-linked eligibility
policy; Business and Governance own commercial access policy. Legal owns the
publication determination for the exact replacement framing. No listed owner,
including Legal, can independently authorize public mutation or open production
or financial gates.

The reviewed repository state is commit
`5ad494f08a67d8c9512e68aaec080006e5469701`. The request was added at that
commit, no in-scope public source changed in that commit, and the worktree was
clean before this report was created. The current scan therefore does not
require corpus-change escalation.

## Source Findings

The review covered the five private Trading baseline artifacts:

- `institutional-disclosure/trading-private-architecture.md`
- `institutional-disclosure/trading-boundary-risk-review.md`
- `institutional-disclosure/trading-promotional-agent-model.md`
- `institutional-disclosure/trading-core-strategy-catalog.md`
- `institutional-disclosure/trading-open-decisions.md`

It also covered:

- `institutional-disclosure/trading-boundary-consolidation-audit.md`
- `institutional-disclosure/trading-sanitization-decision-register.md`
- `institutional-disclosure/cross-core-disclosure-matrix.md`
- `institutional-disclosure/cross-core-disclosure-governance-standard.md`
- `institutional-disclosure/cross-core-sanitization-roadmap.md`

| Finding | Current state | Source conclusion |
| --- | --- | --- |
| TRADING-SAN-01 — Trading access associated with `$Neurons` | STILL_PRESENT | Conditional token balance, status, utility, threshold, and token-gated access language may be read as an approved token-linked access policy. The strict boundary remains exceeded even though no private mechanic or active sale claim was found. |
| TRADING-SAN-02 — Promotional, subscription, tier, milestone, and advanced-service access | STILL_PRESENT | The combined access vocabulary may be read as a defined commercial or capability progression. Conditional qualifiers reduce but do not remove that implication. |

The current scan found no private path exposure, private artifact name, direct
private-mechanic disclosure, guaranteed outcome claim, legal-approval claim, or
active-execution claim. The two findings are abstraction-boundary issues, not
direct-leakage incidents or current boundary blockers.

## Public Occurrence Inventory

Line references below freeze the governed Markdown sources at the reviewed
commit. Each row records every semantically in-scope occurrence in that source;
multiple references on one line are treated as one occurrence context.

### TRADING-SAN-01 — `$Neurons`-Associated Access

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/trading/access-model.md` | 16; 20; 31; 39; 41; 53; 57 | Access inputs; minimum balance or token status; access-rule fields; possible balance forms; locked-value eligibility; governance review; related token-page navigation. |
| `docs/trading/architecture.md` | 22 | The access-control layer lists `$Neurons` among access inputs. |
| `docs/trading/compliance-and-user-disclosures.md` | 55 | Token-gated strategy access is a public-review trigger. |
| `docs/trading/governance-alignment.md` | 20; 26; 27 | Token-based access, token-gated access models, and locked-value access are governance-sensitive. |
| `docs/trading/overview.md` | 71 | The Trading relationship map connects Tokenomics to `$Neurons`-based access if approved. |
| `docs/trading/scalper-futures.md` | 22; 32; 34 | Token utility is connected to product access; balance is a possible condition; token thresholds are presented as policy-dependent. |
| `docs/trading/user-facing-strategies.md` | 30 | Token balance is listed as a possible eligibility condition. |

### TRADING-SAN-02 — Promotional and Layered Service Access

| Exact public source | Occurrence lines | Semantic context |
| --- | --- | --- |
| `docs/trading/access-model.md` | 16; 22-24; 31; 33-35; 49; 53 | Subscriptions, campaigns, milestones, rule fields, named product tiers, subscription expiry, free access, and campaign or tier governance. |
| `docs/trading/architecture.md` | 22 | The access-control layer combines subscriptions and strategy tiers with other eligibility inputs. |
| `docs/trading/governance-alignment.md` | 20; 27 | Free user access and campaign treatment are governance-sensitive. |
| `docs/trading/scalper-futures.md` | 22; 32; 34 | The concept links basic access to advanced services and lists campaign, subscription, milestone, and free-access possibilities. |
| `docs/trading/user-facing-strategies.md` | 30 | Eligibility lists subscription, campaign, and milestone conditions together. |

### Derived Public Mirrors

The following rendered and search artifacts reproduce the source contexts
above. Consistent with the Trading consolidation audit, they are derived
mirrors rather than independent policy sources, but their current paths are
frozen because any later authorized source correction would require separate,
controlled regeneration and verification:

- `docs/.vitepress/dist/trading/access-model.html`
- `docs/.vitepress/dist/trading/architecture.html`
- `docs/.vitepress/dist/trading/compliance-and-user-disclosures.html`
- `docs/.vitepress/dist/trading/governance-alignment.html`
- `docs/.vitepress/dist/trading/overview.html`
- `docs/.vitepress/dist/trading/scalper-futures.html`
- `docs/.vitepress/dist/trading/user-facing-strategies.html`
- `docs/.vitepress/dist/assets/trading_access-model.md.BjG1Cx-N.js`
- `docs/.vitepress/dist/assets/trading_architecture.md.CcpwC7UK.js`
- `docs/.vitepress/dist/assets/trading_compliance-and-user-disclosures.md.B3npr7Tp.js`
- `docs/.vitepress/dist/assets/trading_governance-alignment.md.BbU60W04.js`
- `docs/.vitepress/dist/assets/trading_overview.md.DQEBD8sh.js`
- `docs/.vitepress/dist/assets/trading_scalper-futures.md.DbJT-vry.js`
- `docs/.vitepress/dist/assets/trading_user-facing-strategies.md.DK-zGVT0.js`
- `docs/.vitepress/dist/assets/chunks/@localSearchIndexroot.CzgpSeLt.js`

The rest of `docs/trading/` contains no additional occurrence in either finding
group. `docs/index.md`, `README.md`, `SUMMARY.md`,
`docs/.vitepress/config.mts`, and
`documentation/DOCUMENTATION-MASTER-INDEX.md` contain only generic ecosystem or
navigation references and do not associate the two finding groups with Trading
access. VitePress cache dependencies contain no independent governed wording.

## Risk Assessment

| Risk area | Assessment | Effect on decision |
| --- | --- | --- |
| Reader interpretation | Conditional token eligibility may still be interpreted as approved access policy. | Prevents `NO_ACTION`. |
| Commercial implication | Subscriptions, campaigns, tiers, milestones, and advanced services together imply a defined access progression that the private boundary does not approve for public use. | Prevents `NO_ACTION` and `GO_SCOPED` without Legal review. |
| Financial-service sensitivity | The wording concerns access to high-risk Trading capabilities, so even a generalized access statement can carry financial-service and promotional meaning. | Requires an exact-wording Legal determination before publication. |
| Boundary consistency | Both groups conflict with the stricter cross-core rule that token-linked and commercial access policy remains private. | Requires future abstraction or removal after the dependency is resolved. |
| Mitigating context | Draft, conceptual, policy-dependent, education, user-control, risk, and no-guarantee language reduces but does not eliminate the access-policy implication. | Supports deferral rather than an emergency blocker or immediate no-go. |
| Reversibility | Source occurrences are discrete and derived output is reproducible, but no correction is authorized while the Legal dependency is open. | Reversibility is feasible but not yet actionable. |

## Legal Dependency Assessment

| Finding | Legal state | Required determination | Other required owners |
| --- | --- | --- | --- |
| TRADING-SAN-01 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Determine whether public Trading eligibility may be described at all and whether the candidate abstraction fully removes token-linked commercial meaning. Review the exact proposed wording, target source lines, and surrounding context. | Trading / Tokenomics / Governance / Documentation Core |
| TRADING-SAN-02 | REQUIRED_BEFORE_PUBLICATION; approval not granted | Determine whether generalized service-access language avoids implying a financial-service tier, subscription-linked capability, promotional conversion, performance entitlement, or approved availability. Review the exact proposed wording, target source lines, and surrounding context. | Trading / Business / Governance / Documentation Core |

Legal review may approve, condition, reject, or defer wording. It does not grant
repository mutation, publication, product, technical, production, or financial
authority. Because the required exact-use determinations are absent, the
decision cannot advance to `GO_SCOPED`.

## Public-Safe Target Framing

The following directions are candidates for Legal and owner review only. They
are not authorized replacement text and do not form a correction set.

| Finding | Candidate direction | Required boundary |
| --- | --- | --- |
| TRADING-SAN-01 | Describe access, if offered, only as governance-defined, risk-aware eligibility with applicable educational prerequisites. | Remove token identity, balance, status, holding, utility, threshold, and token-gated access implications. Preserve conditional status and avoid any availability or approval claim. |
| TRADING-SAN-02 | Describe access, if offered, only as general service access governed by documented readiness, risk controls, and user-controlled integration requirements. | Remove campaign, subscription, tier, milestone, free-to-advanced progression, and conversion implications. Do not imply entitlement, enabled capability, or finalized commercial policy. |
| Shared context | Retain education, user control, conceptual non-custodial automation, risk disclosure, and governance review only at abstract level. | Do not expand operational detail or weaken closed-gate language. |

## Decision

| Finding | Decision | Rationale | Frozen public source paths | Candidate target framing | Dependencies | Future execution scope |
| --- | --- | --- | --- | --- | --- | --- |
| TRADING-SAN-01 | DEFERRED_PENDING_LEGAL | The finding remains, but the matrix requires Legal review before publication and no exact-wording determination exists. | `docs/trading/access-model.md`; `docs/trading/architecture.md`; `docs/trading/compliance-and-user-disclosures.md`; `docs/trading/governance-alignment.md`; `docs/trading/overview.md`; `docs/trading/scalper-futures.md`; `docs/trading/user-facing-strategies.md` | Governance-defined, risk-aware eligibility and educational prerequisites only, subject to review. | Trading / Tokenomics / Governance / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |
| TRADING-SAN-02 | DEFERRED_PENDING_LEGAL | The finding remains, but even a general access abstraction requires a determination that it does not imply a financial-service tier, subscription-linked capability, or promotional progression. | `docs/trading/access-model.md`; `docs/trading/architecture.md`; `docs/trading/governance-alignment.md`; `docs/trading/scalper-futures.md`; `docs/trading/user-facing-strategies.md` | General service access, readiness, risk controls, and user-controlled integrations only, subject to review. | Trading / Business / Governance / Legal / Documentation Core | NONE — this decision is not `GO_SCOPED`. |

Final request decision: `DEFERRED_PENDING_LEGAL`.

Neither finding is `NO_ACTION` because both remain present. Neither is
`NO_GO` because a bounded public-safe abstraction may be possible after review.
Neither is `GO_SCOPED` because the publication-level Legal dependency is open.

## Authorized Correction Set

`NONE`.

No source line, public file, navigation entry, rendered artifact, search index,
or generated artifact is authorized for mutation. Candidate directions above
exist only to make the Legal dependency reviewable. They must not be copied
into public documentation without a new decision and a separately authorized
execution request.

## Excluded Changes

- All files under `docs/`, including the frozen Trading source paths.
- `docs/index.md`, `README.md`, `SUMMARY.md`, `docs/.vitepress/`, and
  `documentation/DOCUMENTATION-MASTER-INDEX.md`.
- Public manifests, graphs, indexes, validation outputs, rendered output, and
  search artifacts.
- Private baseline policy, unresolved economic or operational mechanics, and
  cross-core classifications.
- Existing public risk, education, user-control, security, accountability, and
  no-guarantee language outside an independently approved future scope.
- Public API, schema, runtime interface, provider, exchange, wallet, contract,
  production, or financial changes.

## Execution Preconditions

No sanitization execution may begin under this decision. The decision may be
reopened only after all of the following are recorded:

1. Legal issues a written determination for the exact candidate wording, exact
   public source lines, and surrounding context for both findings.
2. Trading and the applicable Tokenomics, Business, and Governance owners
   confirm technical and policy accuracy without introducing private policy.
3. Documentation Core refreshes the occurrence inventory and confirms that the
   public corpus, matrix, standard, roadmap, owners, and gates have not changed.
4. A new or superseding decision assigns `GO_SCOPED` to each row intended for
   correction and records an exact, bounded, reversible correction set.
5. A separate execution request explicitly authorizes those source paths and
   any required generated-artifact treatment.
6. Pre-execution validation, relationship checks, combined documentation
   checks, generator drift checks, boundary scans, and diff hygiene pass.

Satisfying a Legal dependency alone does not satisfy the remaining conditions.

## Rollback Requirements

There is no approved public correction and therefore no approved file-specific
rollback set.

If an unauthorized public or generated mutation appears while this decision is
in effect, execution must stop, the exact diff and pre-change revision must be
preserved, and the incident must be escalated before any reviewed,
non-destructive restoration. Regeneration must not be used to conceal unrelated
drift or overwrite user-owned changes.

Any later authorized execution must define its own source revision, exact file
list, acceptance evidence, rejected-wording record, and non-destructive revert
path before mutation begins. Rollback must restore the last accepted public
wording and rerun all required boundary and repository checks.

## Review Triggers

Review is `EVENT_DRIVEN`. Reopen this decision when any of the following occurs:

- Legal issues or changes guidance for token-linked eligibility, Trading access,
  subscriptions, promotions, tiers, financial-service capabilities, automated
  Trading, performance, or returns.
- Any frozen source or derived-mirror path changes.
- A new Trading page, navigation entry, index, manifest, or generated surface
  introduces related access language.
- Trading, Tokenomics, Business, Governance, Security, or Documentation Core
  changes the applicable access, disclosure, or ownership policy.
- The cross-core matrix, governance standard, sanitization roadmap, or Trading
  decision register changes.
- Product, provider, exchange, production, or financial gate status changes.
- A private path, private identifier, unsupported approval claim, guaranteed
  outcome claim, or enabled-operation claim is detected publicly.

Any occurrence change requires a new evidence freeze before decision work
continues.

## Gate Preservation

This report creates one private decision artifact only. It does not sanitize or
modify public documentation, update navigation or generated public artifacts,
authorize external disclosure, claim Legal approval, create investor or
fundraising material, or change an academic paper. It does not alter public
APIs, schemas, runtime interfaces, providers, exchanges, wallets, contracts, or
production systems.

Public mutation and sanitization remain unauthorized. Legal approval is not
granted. Production, provider activation, exchange activation, wallet signing,
contract writes, and financial execution remain disabled. All operational and
financial gates remain preserved closed.
