---
schema_version: "1.0.0"
document_id: "DOC-RPT-205"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Traceability Remediation Manifest"
summary: "Freezes the exact existing public paths and bounded traceability actions authorized for EPIC-08 REQ-05."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-08"]
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-04", "DOCUMENTATION-EPIC-08-REQ-05"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-08-TRACEABILITY-REMEDIATION-MANIFEST.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Traceability Remediation Manifest

## Exact Block Contract

Each selected page receives a final `## Canonical Traceability` section with
the exact integration, interface, authority, evidence, status, and counterpart
values frozen below. Existing meaning may not be broadened. Links use relative
paths to the frozen counterpart. Existing front matter is preserved; the one
legacy ACS page may adopt governed front matter using the existing ACS guide
profile and ID `ACS-GDE-003`.

| Manifest ID | Path | Current State | Frozen Action | Allowed Traceability Values / Wording | Evidence IDs | Authority IDs | Rollback | Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `REM-EP8-0001` | `docs/overview/cross-core-architecture.md` | canonical anchor, pair details implicit | add traceability index | State that 36 pair families are documented, symmetry does not prove activation, and route to Business/ACS, Academy/Tokenomics, Marketplace/Treasury, Trading/Treasury, Mining/ACS, Lottery/Treasury, Governance/Runtime anchors. | `EVID-EP8-0004/0007` | portfolio matrix | revert section | links resolve; no capability promotion |
| `REM-EP8-0002` | `docs/overview/execution-model.md` | eleven flows lack governed IDs/interfaces | add flow IDs and interface/status note | Add `FLOW-EP8-0001..0011`; state six flows remain incomplete and interfaces are traceability crosswalks, not live transports. | `EVID-EP8-0007` | `AUTH-EP8-0001..0014` | revert section/table edits | 11 IDs unique; six incomplete retained |
| `REM-EP8-0003` | `docs/acs/business-integration.md` | legacy ungoverned counterpart | adopt front matter; add bilateral traceability | Integration `INTG-EP8-0008`; counterpart `../business/acs-integration.md`; interfaces `INT-EP7-006/007`; authority `AUTH-EP8-0002/0012`; status advisory prototype, Business owns disposition. | `EVID-EP7-0006/0008` | `AUTH-EP8-0002/0012` | revert file | `ACS-GDE-003` unique; front matter validates |
| `REM-EP8-0004` | `docs/business/acs-integration.md` | governed source side | add bilateral traceability | Integration `INTG-EP8-0008`; counterpart `../acs/business-integration.md`; interfaces `INT-EP7-006/007`; status prototype/model, no autonomous approval. | `EVID-EP7-0006/0008` | `AUTH-EP8-0002/0012` | revert section | counterpart resolves |
| `REM-EP8-0005` | `docs/acs/governance-alignment.md` | enforcement levels ambiguous | add authority ladder traceability | Integrations `INTG-EP8-0006`; distinguish advisory signal, local hold, governed suspension, production enforcement; production authority unresolved. | `EVID-EP7-0008/0009` | `AUTH-EP8-0012/0013` | revert section | no production enforcement claim |
| `REM-EP8-0006` | `docs/runtime/acs-integration.md` | governed runtime side | add bilateral traceability | Integration `INTG-EP8-0007`; counterpart `../acs/runtime.md`; interfaces `INT-EP7-006/007/014`; status prototype and review-bound. | `EVID-EP7-0008/0009` | `AUTH-EP8-0012/0013/0014` | revert section | counterpart resolves |
| `REM-EP8-0007` | `docs/academy/token-reward-flows.md` | reward states can imply effects | add effect-separation traceability | Integration `INTG-EP8-0005`; counterpart `../tokenomics/academy-rewards.md`; interfaces `INT-EP7-010/011/013`; qualification is not issuance/distribution. | `EVID-EP7-0011/0019` | `AUTH-EP8-0007` | revert section | financial gates remain closed |
| `REM-EP8-0008` | `docs/tokenomics/academy-rewards.md` | token-side model | add bilateral traceability | Integration `INTG-EP8-0005`; counterpart `../academy/token-reward-flows.md`; same interfaces; state directional/inactive effect. | `EVID-EP7-0011/0019` | `AUTH-EP8-0007` | revert section | no active reward claim |
| `REM-EP8-0009` | `docs/marketplace/business-and-bba-alignment.md` | asset handoff incomplete | add asset/release traceability | Integration `INTG-EP8-0010`; counterpart `../business/service-catalog.md`; interfaces `INT-EP7-008/009`; ownership/release/listing decisions remain separate. | `EVID-EP7-0004/0012` | `AUTH-EP8-0004/0005` | revert section | gap remains incomplete |
| `REM-EP8-0010` | `docs/marketplace/treasury-alignment.md` | product-side economic details | add closed-gate traceability | Integration `INTG-EP8-0027`; counterpart `../treasury/overview.md`; interfaces `INT-EP7-012/013`; settlement/custody/signing unverified. | `EVID-EP7-0003/0012` | `AUTH-EP8-0006` | revert section | no settlement activation |
| `REM-EP8-0011` | `docs/tokenomics/treasury-alignment.md` | token-side economic model | add bilateral traceability | Integration `INTG-EP8-0032`; counterpart `../treasury/tokenomics-alignment.md`; interfaces `INT-EP7-012/013`; issuance/distribution inactive. | `EVID-EP7-0003/0019` | `AUTH-EP8-0006/0007` | revert section | no token activation |
| `REM-EP8-0012` | `docs/treasury/tokenomics-alignment.md` | Treasury-side economic model | add bilateral traceability | Integration `INTG-EP8-0032`; counterpart `../tokenomics/treasury-alignment.md`; same interfaces/status. | `EVID-EP7-0003/0019` | `AUTH-EP8-0006/0007` | revert section | counterpart resolves |
| `REM-EP8-0013` | `docs/trading/acs-trinity-integration.md` | support can imply live monitoring | add non-production traceability | Integration `INTG-EP8-0033`; counterpart `../acs/overview.md`; interfaces `INT-EP7-006/007`; monitoring/enforcement not active. | `EVID-EP7-0008/0014` | `AUTH-EP8-0012/0013` | revert section | provider/exchange gates closed |
| `REM-EP8-0014` | `docs/trading/treasury-alignment.md` | trading-side economic model | add bilateral traceability | Integration `INTG-EP8-0035`; counterpart `../treasury/trading-alignment.md`; interfaces `INT-EP7-012/013`; allocation/execution blocked. | `EVID-EP7-0003/0014` | `AUTH-EP8-0006` | revert section | no live trading/custody |
| `REM-EP8-0015` | `docs/mining/acs-integration.md` | monitoring model lacks evidence | add unconfirmed-interface traceability | Integration `INTG-EP8-0028`; counterpart `../acs/overview.md`; interfaces `INT-EP7-006/007`; no continuous or production monitoring claim. | `EVID-EP7-0008/0015` | `AUTH-EP8-0012/0013` | revert section | no 24/7 claim |
| `REM-EP8-0016` | `docs/mining/treasury-alignment.md` | mining-side economic model | add closed-gate traceability | Integration `INTG-EP8-0030`; counterpart `../treasury/overview.md`; interfaces `INT-EP7-012/013`; cost/revenue/custody unverified. | `EVID-EP7-0003/0015` | `AUTH-EP8-0006` | revert section | no revenue/payout activation |
| `REM-EP8-0017` | `docs/lottery/acs-integration.md` | concept can imply live controls | add legal/boundary traceability only | Integration `INTG-EP8-0021`; counterpart `../acs/overview.md`; interfaces `INT-EP7-006/007`; no production enforcement or public release. | `EVID-EP7-0008/0016` | `AUTH-EP8-0012/0013` | revert section | no Lottery expansion |
| `REM-EP8-0018` | `docs/lottery/treasury-and-fees.md` | model fields can imply active finance | add legal/financial gate traceability only | Integration `INTG-EP8-0024`; counterpart `../treasury/overview.md`; interfaces `INT-EP7-012/013`; no active prize, fee, custody, or operation. | `EVID-EP7-0003/0016` | `AUTH-EP8-0006` | revert section | no financial claim expansion |
| `REM-EP8-0019` | `docs/runtime/governance-escalation.md` | decision/execution handoff implicit | add decision-to-execution traceability | Integration `INTG-EP8-0017`; counterpart `../governance/proposal-lifecycle.md`; interfaces `INT-EP7-004/005/014`; decision does not prove executor readiness or execution. | `EVID-EP7-0013`, `EVID-EP8-0002` | `AUTH-EP8-0010/0011` | revert section | receipt and executor qualifiers present |

## Prohibited Execution

- Paths outside these 19 entries.
- New pages, capabilities, interfaces, authority, economic mechanics, or status.
- Private evidence content or private paths.
- Lottery expansion beyond the exact boundary block.
- Schema, generator logic, relationship model, or external repository changes.
