---
schema_version: "1.0.0"
document_id: "DOC-RPT-153"
aliases: []
document_type: "REPORT"
title: "EPIC-06 High-Risk Boundary Review"
summary: "Freezes the public-boundary posture and release restrictions for Mining, Lottery, Treasury, Tokenomics, and Runtime under EPIC-06 REQ-03."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_06"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-15"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-03"]
related_adrs: []
related_cores: ["MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-06-HIGH-RISK-BOUNDARY-REVIEW.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 High-Risk Boundary Review

## Boundary Rules

- Qualifier tightening is allowed in later execution.
- New capabilities, financial mechanics, or operational claims remain prohibited.
- Public-safe expansion requires explicit eligibility, not inference from topical breadth.

## Core Boundary Freeze

| Core | Boundary Class | Frozen Reading | Not Authorized |
| --- | --- | --- | --- |
| `mining` | `PUBLIC_ACTIVE_IF_VERIFIED` | Mining pages may describe models, risks, accounting, telemetry, and possible product structures, but not verified active operations or revenue unless evidenced. | Product release, payout enablement, custody reality, or profitability implication without evidence. |
| `lottery` | `PUBLIC_PROTOTYPE_ONLY` | Lottery remains concept/prototype/boundary-first documentation. Legal-safe publication is the governing gate. | Any public expansion implying live draw operation, funded prize commitment, legal availability, or active treasury fee program. |
| `treasury` | `PUBLIC_DIRECTIONAL_ONLY` | Treasury public pages remain directional design and accountability documentation unless active operations are verified and authorized. | Active custody, execution, signing, reserve thresholds, or strategy activation claims. |
| `tokenomics` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Tokenomics may document design, utility scope, and guarded mechanisms, but not active issuance, active distribution, or financial expectation. | Investment framing, market-value inference, active staking, finalized distribution, or final launch claims. |
| `runtime` | `PUBLIC_SAFE_WITH_QUALIFICATION` | Runtime is the canonical operating-model and readiness surface, not proof of live automation, provider activation, or enabled execution stack. | Production-runtime implication, autonomous execution implication, or implementation evidence by architecture alone. |

## Lottery Release Gate

Lottery public expansion remains blocked until:

- legal-safe framing is frozen
- public-boundary-safe wording is frozen
- prize, funding, and settlement wording no longer implies active operation
- no page requires new legal or financial claims to remain coherent

## Treasury and Tokenomics Financial Gate

Public remediation may narrow financial wording, but may not:

- add new issuance mechanics
- add new distribution claims
- add new treasury execution mechanics
- add live strategy or wallet-operation claims
- add market-value or yield implications

## Runtime Gate

Runtime may guide later consolidation across cores, but it does not authorize:

- provider activation
- workflow activation
- autonomous action
- contract writes
- wallet signing
- production deployment claims

## Boundary Decision

`Mining`, `Lottery`, `Treasury`, and `Tokenomics` require boundary-first
execution in later requests. `Runtime` remains a controlled consolidation
surface and should not be treated as a product-expansion domain.
