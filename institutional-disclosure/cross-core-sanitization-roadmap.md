---
schema_version: "1.0.0"
document_id: "PRIV-RPT-020"
aliases: []
document_type: "ROADMAP"
title: "Cross-Core Sanitization Roadmap"
summary: "Private planning roadmap for disclosure decisions and any separately authorized future sanitization across Academy, Marketplace, ACS, and Trading."
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
related_cores: ["ACADEMY", "MARKETPLACE", "ACS", "TRADING", "DOCUMENTATION", "GOVERNANCE", "SECURITY", "TREASURY", "TOKENOMICS", "LEGAL"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Core Sanitization Roadmap

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| planning_only | true |
| public_documentation_mutation | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| academic_paper_update | NOT_AUTHORIZED |
| institutional_publication | NOT_AUTHORIZED |
| investor_use | NOT_AUTHORIZED |
| fundraising_use | NOT_AUTHORIZED |
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

This roadmap orders disclosure decision work and identifies candidate public
sanitization scope across Academy, Marketplace, ACS, and Trading. It is a
planning proposal only. It does not authorize a decision outcome, public edit,
sanitization execution, generation of changed public artifacts, or external
use.

## Current State

| Core | Private baseline | Consolidation audit | Required public findings | Monitor-only posture | Boundary blockers | Current action |
| --- | --- | --- | ---: | --- | ---: | --- |
| Academy | COMPLETE | COMPLETE with Marketplace | 4 | Tokenomics navigation and adjacent reward/legal language | 0 | Decision request recommended |
| Marketplace | COMPLETE | COMPLETE with Academy | 8 | Dynamic pricing and licensed modularity | 0 | Decision request recommended |
| ACS | COMPLETE | COMPLETE | 0 | 8 conceptual, permission, runtime, restriction, and absence controls | 0 | Decision request recommended for explicit no-change decision |
| Trading | COMPLETE | COMPLETE | 2 | 7 role, connector, risk, automation, reporting, and regression controls | 0 | Decision request recommended |

Cross-core direct leakage status: NONE FOUND.

Current abstraction drift:

- Academy public pages contain token utility, locked reward, reward-flow, and
  course-commerce settlement language beyond the strict private boundary.
- Marketplace public pages contain token payment, treasury, fee, commission,
  royalty, seller settlement, locked-reward, and accepted-asset language beyond
  the strict private boundary.
- Trading public pages contain token-linked access and
  promotional/subscription/tier language beyond the strict private boundary.
- ACS remains conceptual; RedHat, L1-L4, private veto criteria, override
  semantics, private topology, and logging specifics remain unexposed.

## Core Prioritization

Priority is based on legal and reputational risk, direct private leakage,
financial sensitivity, operational specificity, public reach, cross-core
dependency, sanitization complexity, and existing boundary classification.

| Priority | Core | Rationale | Planning decision |
| ---: | --- | --- | --- |
| 1 | Trading | Highest regulatory and reputational sensitivity; automated financial operations, leverage, access, performance, and exchange-adjacent framing | Decide strict public access framing first |
| 2 | Academy | Reward, token, treasury, redemption, tutor settlement, and revenue-sensitive framing affect user expectations and access | Decide reward and payment abstraction after Trading |
| 3 | Marketplace | Highest finding count, with fees, commissions, royalties, settlement, treasury, and payment mechanics; depends on shared economic terminology | Decide after Academy establishes shared reward/payment terminology |
| 4 | ACS | Public corpus is mostly conceptual and private RedHat mechanics remain unexposed | Confirm monitor-only/no-change posture after financial cores |

This ordering is a planning proposal, not authorization to sanitize.

## Academy Sanitization Candidates

| Candidate | Current classification | Proposed decision scope | Dependencies | Execution status |
| --- | --- | --- | --- | --- |
| Generic $Neurons utility | SANITIZATION_REQUIRED | Decide whether to replace token-specific utility with competence and education abstraction | Academy / Tokenomics / Documentation Core / Legal | NOT_AUTHORIZED |
| Locked rewards | SANITIZATION_REQUIRED | Decide whether to remove lock/unlock/claim specificity and retain only non-financial readiness language | Academy / Tokenomics / Treasury / Legal | NOT_AUTHORIZED |
| Reward-flow states | SANITIZATION_REQUIRED | Decide whether to remove locked, unlocked, claimed, wallet, and spendable flow vocabulary | Academy / Tokenomics / Treasury / ACS / Legal | NOT_AUTHORIZED |
| Marketplace payment and tutor-settlement adjacency | SANITIZATION_REQUIRED | Decide whether to reduce course-commerce integration to generic commerce language | Academy / Marketplace / Treasury / Legal | NOT_AUTHORIZED |
| Generic PoK minting | MONITOR_ONLY | Confirm that no POK Minter budget, cadence, signer, or distribution mechanic is disclosed | Academy / Tokenomics / Governance | NOT_AUTHORIZED |
| Dividends, APR, revenue distribution | MONITOR_ONLY | Preserve prohibition and trigger Legal review if positive or promissory language appears | Legal / Treasury / Governance | NOT_AUTHORIZED |

Academy decision work must not invent reward rates, lock periods, redemption
rules, treasury assets, tutor limits, release criteria, or legal conclusions.

## Marketplace Sanitization Candidates

| Candidate | Current classification | Proposed decision scope | Dependencies | Execution status |
| --- | --- | --- | --- | --- |
| $Neurons payment utility | SANITIZATION_REQUIRED | Decide whether to replace token-specific payment language with abstract transaction interfaces | Marketplace / Tokenomics / Treasury / Legal | NOT_AUTHORIZED |
| Treasury alignment and reporting fields | SANITIZATION_REQUIRED | Decide whether to reduce treasury-linked detail to accountability abstractions | Marketplace / Treasury / Governance / Legal | NOT_AUTHORIZED |
| Fee categories and routing | SANITIZATION_REQUIRED | Decide whether to replace structured fee treatment with generic commercial-governance language | Marketplace / Treasury / Business / Legal | NOT_AUTHORIZED |
| Royalty references | SANITIZATION_REQUIRED | Decide whether to remove or abstract royalty economics | Marketplace / Business / Treasury / Legal | NOT_AUTHORIZED |
| Commission references | SANITIZATION_REQUIRED | Decide whether to replace commission mechanics with generic policy language | Marketplace / Treasury / Business / Legal | NOT_AUTHORIZED |
| Seller settlement and payout fields | SANITIZATION_REQUIRED | Decide whether to replace payout detail with generic order-completion language | Marketplace / Treasury / Governance / Legal | NOT_AUTHORIZED |
| Locked rewards and internal utility | SANITIZATION_REQUIRED | Align with the Academy reward-language decision | Marketplace / Academy / Tokenomics / Treasury / Legal | NOT_AUTHORIZED |
| Accepted assets and payment utility | SANITIZATION_REQUIRED | Decide whether to abstract assets and payment flows to a generic transaction boundary | Marketplace / Treasury / Integrations / Legal | NOT_AUTHORIZED |
| Dynamic pricing | MONITOR_ONLY | Preserve generic adaptation while blocking formulas, auctions, providers, and conversion logic | Marketplace / Treasury / Governance | NOT_AUTHORIZED |
| Licensed modular deployment | MONITOR_ONLY | Preserve modularity abstraction while blocking license terms and continuing economics | Marketplace / Business / Legal | NOT_AUTHORIZED |

Marketplace decision work must not invent rates, splits, settlement formulas,
oracle providers, accepted assets, routing percentages, license terms, or
royalty duration.

## ACS Sanitization Candidates

| Candidate | Current classification | Proposed decision scope | Dependencies | Execution status |
| --- | --- | --- | --- | --- |
| Smith and Morpheus conceptual roles | ACCEPTABLE_PUBLIC_ABSTRACTION | Confirm advisory limits and no final authority | ACS / Governance / Documentation Core | NOT_AUTHORIZED |
| Trinity operational and financial role wording | MONITOR_ONLY | Confirm limitations and prevent enabled financial-execution implications | ACS / Trading / Governance / Legal | NOT_AUTHORIZED |
| Risk scoring and public permission labels | MONITOR_ONLY | Keep generic, non-numeric, and distinct from private L1-L4 | ACS / Security / Governance | NOT_AUTHORIZED |
| Sensitive-action and automated-restriction language | MONITOR_ONLY | Preserve human authority and non-production status | ACS / Security / Governance / Legal | NOT_AUTHORIZED |
| RedHat | NOT_REQUIRED | Confirm continued public absence | ACS / Security / Governance / Documentation Core | NOT_AUTHORIZED |
| L1-L4 and private veto heuristics | NOT_REQUIRED | Confirm continued public absence and blocker handling | ACS / Security / Governance | NOT_AUTHORIZED |
| Override, no-silent-drift, topology, and logging specifics | NOT_REQUIRED | Confirm continued public absence and implementation-neutral auditability | ACS / Security / Governance / Accountability | NOT_AUTHORIZED |

The expected ACS decision is monitor-only with no public mutation unless new
evidence contradicts the current audit. That expectation is not a pre-approved
outcome.

## Trading Sanitization Candidates

| Candidate | Current classification | Proposed decision scope | Dependencies | Execution status |
| --- | --- | --- | --- | --- |
| $Neurons-linked access | SANITIZATION_REQUIRED | Decide whether to replace token balance or status with governance-defined eligibility | Trading / Tokenomics / Governance / Legal / Documentation Core | NOT_AUTHORIZED |
| Promotional, subscription, tier, and milestone access | SANITIZATION_REQUIRED | Decide whether to remove or abstract commercial access categories that imply a finalized conversion path | Trading / Business / Governance / Legal / Documentation Core | NOT_AUTHORIZED |
| User-owned accounts and no-custody-by-default | ACCEPTABLE_PUBLIC_ABSTRACTION | Preserve conditional user-control and non-custodial principles | Trading / Security / Legal | NOT_AUTHORIZED |
| Least-privilege exchange API guidance | ACCEPTABLE_PUBLIC_ABSTRACTION | Preserve generic security guidance without private onboarding, storage, or activation mechanics | Trading / Security / Integrations | NOT_AUTHORIZED |
| ACS and Trinity roles | MONITOR_ONLY | Preserve role-level oversight while blocking private veto criteria, algorithms, signals, and topology | Trading / ACS / Security / Governance | NOT_AUTHORIZED |
| Leverage and risk-profile language | MONITOR_ONLY | Preserve non-numeric caution and block thresholds, ranges, and approval implications | Trading / Legal / Governance / Security | NOT_AUTHORIZED |
| Automated agents, connectors, live states, and kill switches | MONITOR_ONLY | Preserve conditional architecture and closed-gate status | Trading / Security / Governance / Integrations | NOT_AUTHORIZED |
| Performance and reporting fields | MONITOR_ONLY | Preserve accountability context and block formulas, projections, selected results, and return claims | Trading / Accountability / Legal | NOT_AUTHORIZED |

Trading decision work must not expose or invent the USD 100 cap, reactivation
rule, licensing fee, performance commission, provider-key flow, specific
connector flow, allocation percentages, private ACS criteria, Trinity strategy
logic, sharing incentives, thresholds, or performance results.

## Dependencies

| Dependency | Required before decision completion | Required before any execution |
| --- | --- | --- |
| Cross-Core Disclosure Matrix | Confirm row state, owner, legal dependency, trigger, and blocker | Confirm no classification changed since decision |
| Governance Standard | Confirm authority routing and dedicated-request boundary | Confirm explicit public-edit and sanitization authorization |
| Documentation Core | Verify target files, source evidence, and boundary | Review diff, generator impact, navigation, and acceptance evidence |
| Core Owner | Confirm technical and operational accuracy | Review exact rewritten wording |
| Security | Required for ACS and Trading execution, provider, permission, credential, and topology language | Approve security-safe abstraction |
| Governance | Required for authority, veto, access, allocation, and policy language | Approve authority-safe abstraction |
| Treasury and Tokenomics | Required for reward, payment, fee, royalty, settlement, redemption, and token language | Approve economic abstraction without inventing policy |
| Legal | Required for identified publication or external-use dependencies | Approve exact legal-sensitive wording before publication |
| Generator drift reconciliation | Independent request; not required to classify findings | Must be distinguished from sanitization-introduced drift before acceptance |

## Recommended Request Sequence

1. TRADING-PUBLIC-SANITIZATION-DECISION-REQ-01
2. ACADEMY-PUBLIC-SANITIZATION-DECISION-REQ-01
3. MARKETPLACE-PUBLIC-SANITIZATION-DECISION-REQ-01
4. ACS-PUBLIC-SANITIZATION-DECISION-REQ-01

Each decision request must:

- confirm exact public surfaces and findings;
- reconcile the matrix row, legal dependency, owner, and trigger;
- return go, no-go, defer, or blocked for each row;
- authorize no edits.

No execution request should be generated until its corresponding decision
request passes. A passed decision still requires a separate, explicit public
sanitization execution request.

## Validation Gates

Any future decision or execution must verify:

- all findings map to an existing matrix row;
- every row has one disclosure state, sanitization state, legal state, owner,
  review trigger, rationale, and blocker decision;
- no UNDEFINED external target proceeds;
- no private path, filename, ID, mechanic, number, provider, algorithm,
  permission model, topology, or execution claim enters public surfaces;
- no public edit occurs during decision-only work;
- only explicitly authorized public rows change during execution;
- public navigation, generated artifacts, academic, investor, and fundraising
  surfaces remain unchanged unless separately authorized;
- validate, relationships, check, generator check, tests, diff check, status,
  and VitePress build results are recorded;
- preexisting generator drift is distinguished from request-introduced drift;
- all production and financial gates remain closed.

## Rollback Strategy

No rollback action is required for this planning-only request because it
modifies no public surface.

For a future authorized sanitization execution:

1. preserve the pre-execution revision and exact authorized file list;
2. stop if an unauthorized file, blocker, or private mechanic appears;
3. restore only the authorized request changes through a reviewed,
   non-destructive revert;
4. rerun public boundary scans, validation, generator check, tests, and build;
5. record the rejected wording and cause in the private decision register;
6. keep the prior public wording until a revised request passes.

Rollback must not use a public regeneration command to conceal unrelated drift
or overwrite user-owned changes.

## Deferred Items

- Public sanitization execution is deferred pending four decision requests.
- Academic-paper, institutional-public, investor, and fundraising work is
  deferred and unauthorized.
- Legal-sensitive terms remain private pending exact-use review.
- All unresolved fees, rates, percentages, thresholds, formulas, providers,
  routes, signers, assets, allocations, approvals, and execution mechanics
  remain undefined and private.
- Production disclosure is deferred while production and financial gates remain
  closed.
- Public generated-artifact reconciliation remains a separate request.

## Gate Preservation

This request created private cross-core disclosure governance artifacts only. It did not sanitize or modify public documentation, update the academic paper, create investor or fundraising material, authorize public disclosure, claim legal approval, change public APIs, schemas or runtime interfaces, enable production, activate providers or exchanges, perform wallet signing, write contracts, perform financial execution or open operational gates.

Public sanitization, public documentation mutation, academic-paper update,
investor use, fundraising use, and public disclosure remain unauthorized.
Legal approval is not granted. Production, provider activation, exchange API
activation, wallet signing, contract writes, and financial execution remain
disabled. Public APIs, schemas, and runtime interfaces remain unchanged.
Financial gates remain preserved closed.
