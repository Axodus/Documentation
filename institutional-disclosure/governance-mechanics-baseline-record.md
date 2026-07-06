---
schema_version: "1.0.0"
document_id: "PRIV-RPT-002"
aliases: []
document_type: "REPORT"
title: "Governance Mechanics Baseline Record"
summary: "Private closure record for the Axodus governance mechanics baseline."
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
created_date: "2026-07-06"
last_updated: "2026-07-06"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["GOVERNANCE", "TOKENOMICS"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# Governance Mechanics Baseline Record

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| legal_review | SEPARATE_DISCLOSURE_GATE_REQUIRED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |

## Baseline Status

Track B is closed as a private internal baseline for Track C drafting. This
closure does not approve public governance, legal status, fundraising use,
investor circulation, external disclosure, or production governance activation.

## Decided Items

- Axodus private governance uses a staged Executive DAO, Boardroom, and
  Community DAO model.
- Executive DAO is the private-phase authority for sensitive and unresolved
  decisions.
- Boardroom is the intended expert/delegated review layer and uses
  quadratic-voting logic as a design preference.
- Community DAO is the intended broad participation layer and uses
  one-token-one-vote logic as a design preference.
- Sub-1-Neuron participation should be supported through delegation after
  delegation rules are approved.
- Tenant governance and federation governance must remain distinct.
- Named AI agents may support review, challenge, evidence mapping, and
  escalation, but may not finalize governance or tokenomics.

## Items Remaining TBD

- Quorum percentages: [TBD — pending governance decision with first adopters]
- Vote-cycle durations: [TBD — pending governance decision with first adopters]
- Veto criteria: [TBD — pending governance decision with first adopters]
- Boardroom internal approval threshold: [TBD — pending governance decision with first adopters]
- Federation/Tenant revenue split ratio: [TBD — pending governance decision with first adopters]
- Community DAO activation criteria: [TBD — pending governance decision with first adopters]
- Delegate eligibility and removal: [TBD — pending governance decision with first adopters]
- Community contestability path: [TBD — pending governance decision with first adopters]

## Dependencies

First-adopter governance is required before unresolved voting, delegation,
tenant/federation, and contestability parameters are treated as final.

Legal review is required before externalizing governance mechanics, presenting
DAO language publicly, using governance mechanics in commercial materials, or
linking governance mechanics to fundraising or investor communications.

## Public-Use Blocks

The governance mechanics baseline must not be used as:

- a public governance charter;
- an operating constitution;
- proof of decentralization;
- legal or regulatory position;
- fundraising material;
- investor material;
- academic-paper source content;
- public repository content.

## Track C Authorization

Track C may proceed only as private internal drafting based on this governance
baseline. Track C must preserve all unresolved governance dependencies and must
not convert the governance baseline into public tokenomics, fundraising,
investment, or investor-facing claims.
