---
schema_version: "1.0.0"
document_id: "PRIV-PROP-013"
aliases: []
document_type: "PROPOSAL"
title: "Academy Public Sanitization Decision Request"
summary: "Private decision-only request for the four current Academy public sanitization finding groups."
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

# Academy Public Sanitization Decision Request

## Control Flags

| Flag | Value |
| --- | --- |
| request_id | ACADEMY-PUBLIC-SANITIZATION-DECISION-REQ-01 |
| execution_mode | DECISION_ONLY |
| public_file_mutation | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| legal_approval | NOT_GRANTED |
| production | NOT_ENABLED |
| financial_gates | PRESERVED_CLOSED |

## Objective

Decide the treatment of the four Academy `SANITIZATION_REQUIRED` groups:

1. `$Neurons` utility framing.
2. Locked reward framing.
3. Reward-flow framing.
4. Marketplace payment-utility framing.

## Required Review

Review the Academy private baseline, Academy/Marketplace consolidation audit
and decision register, and cross-core disclosure matrix, standard, and
roadmap. Scan `docs/academy/`, `docs/index.md`, `README.md`, `SUMMARY.md`,
`docs/.vitepress/`, and `.rag/DOCUMENTATION-MASTER-INDEX.md`.

Freeze every public occurrence. Separate public-safe education from token,
treasury, redemption, settlement, revenue, and investment-like mechanics.

## Output

Create only
`institutional-disclosure/academy-public-sanitization-decision.md` with
document ID `PRIV-RPT-022`, type `REPORT`, maturity `D1`, and the established
private-disclosure metadata dated `2026-07-13`.

Required sections:

- Control Flags
- Purpose
- Decision Authority
- Source Findings
- Public Occurrence Inventory
- Reward and Access Boundary
- Economic and Legal Risk Assessment
- Public-Safe Target Framing
- Decision
- Authorized Correction Set
- Excluded Changes
- Execution Preconditions
- Rollback Requirements
- Review Triggers
- Gate Preservation

## Decision Rules

Each finding must be assigned exactly one of `GO_SCOPED`, `NO_GO`,
`DEFERRED_PENDING_LEGAL`, or `NO_ACTION`; the report must also state one final
request decision using the most restrictive evidence-backed state.

Competence development, learning progress, completion recognition,
certification, risk-aware access, tenant readiness, and generic course
discovery may remain abstract. Locked or spendable rewards, wallet release,
treasury-backed flows, POK Minter mechanics, ACS release veto, redemption,
dividends, APR, revenue distribution, and specific token payment mechanics
remain private.

Use `DEFERRED_PENDING_LEGAL` whenever safe reframing depends on deciding
whether a reference represents financial reward, redeemable value, investment
return, revenue participation, or treasury-backed benefit. Do not claim legal
approval or edit public files.

## Acceptance

All four groups and occurrences are frozen and decided; educational concepts
remain distinguishable; legal dependencies and any future bounded correction
scope are explicit; all gates remain closed.
