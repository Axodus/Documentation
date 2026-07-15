---
schema_version: "1.0.0"
document_id: "DOC-RPT-182"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Remediation Manifest"
summary: "Freezes the exact public paths and permitted canonical reconstruction actions for EPIC-07 REQ-07."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
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
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-06"]
related_adrs: []
related_cores: ["DOCUMENTATION", "GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-07-REMEDIATION-MANIFEST.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Remediation Manifest

## Execution Rule

REQ-07 may change only the paths and action types below. It may narrow wording
further when validation or boundary review requires it, but may not add a new
path, capability, authority, economic mechanic, or production claim.

| Manifest ID | Path | Action | Frozen Change | Evidence / Model | Rollback |
| --- | --- | --- | --- | --- | --- |
| `EP7-B01-001` | `docs/index.md` | `REWRITE_BOUNDED` | Replace DeFi-only tagline with the frozen ecosystem identity and route readers to architecture and execution anchors. | REQ-02 | Revert file commit. |
| `EP7-B01-002` | `docs/overview/ecosystem-overview.md` | `REWRITE_SUBSTANTIAL` | Present definition, participant entry, value transformation, nucleus groups, and present-state limits. | REQ-02 | Revert file commit. |
| `EP7-B01-003` | `docs/overview/product-map.md` | `REWRITE_SUBSTANTIAL_METADATA` | Replace page-count-style map with responsibility, output, dependency, and current-posture map; add `CORE-GDE-007`. | REQ-02 | Revert file commit. |
| `EP7-B01-004` | `docs/overview/terminology.md` | `REWRITE_BOUNDED_METADATA` | Define nucleus, tenant, status dimensions, PoK, authority, and activation; add `CORE-GDE-008`. | REQ-01, REQ-02 | Revert file commit. |
| `EP7-B01-005` | `docs/overview/cross-core-architecture.md` | `CREATE` | Publish public-safe layers, interface contracts, dependency direction, data classes, and runtime boundaries as `CORE-GDE-005`. | REQ-03 | Delete file. |
| `EP7-B01-006` | `docs/overview/execution-model.md` | `CREATE` | Publish the eleven flows with completeness and status boundaries as `CORE-GDE-006`. | REQ-05 | Delete file. |
| `EP7-B01-007` | `docs/business/overview.md` | `REWRITE_BOUNDED` | Clarify infrastructure identity, development types, asset role, inputs/outputs, and authority. | Owner context, REQ-02 | Revert file commit. |
| `EP7-B01-008` | `docs/business/runtime.md` | `REWRITE_BOUNDED` | Align mock/read-only runtime to demand, planning, delivery, asset, and incident flows. | REQ-03, REQ-05 | Revert file commit. |
| `EP7-B01-009` | `docs/acs/overview.md` | `REWRITE_BOUNDED` | Distinguish analysis, alert, local hold, governed suspension, and production enforcement. | REQ-03, REQ-04 | Revert file commit. |
| `EP7-B01-010` | `docs/acs/trinity.md` | `REWRITE_SUBSTANTIAL_METADATA` | Expand Trinity from trading-only archetype to bounded planning/estimation assistant while preserving financial limits; add `ACS-GDE-002`. | Owner context, REQ-04, FLOW-02 | Revert file commit. |
| `EP7-B01-011` | `docs/governance/overview.md` | `REWRITE_BOUNDED` | Add applied decision rights and authority-state distinctions. | REQ-04 | Revert file commit. |
| `EP7-B01-012` | `docs/governance/proposal-lifecycle.md` | `REWRITE_BOUNDED` | Separate decision, executor readiness, execution, verification, and receipt. | FLOW-08 | Revert file commit. |
| `EP7-B01-013` | `docs/academy/overview.md` | `REWRITE_BOUNDED` | Clarify inputs, outputs, authority, and current Academy posture. | REQ-02, FLOW-07 | Revert file commit. |
| `EP7-B01-014` | `docs/academy/proof-of-knowledge.md` | `REWRITE_SUBSTANTIAL_METADATA` | Define scoped prototype qualification without anti-sybil, certification, governance, or token guarantees; add `ACADEMY-GDE-002`. | FLOW-07 | Revert file commit. |
| `EP7-B01-015` | `docs/marketplace/overview.md` | `REWRITE_BOUNDED_METADATA` | Define Marketplace as authorized distribution channel, not Business replacement; add `MARKETPLACE-GDE-001`. | REQ-02, FLOW-06 | Revert file commit. |
| `EP7-B01-016` | `docs/treasury/overview.md` | `REWRITE_BOUNDED` | Explain Treasury's decision/execution role in economic flow while retaining active-state gates. | REQ-04, FLOW-10 | Revert file commit. |
| `EP7-B01-017` | `docs/tokenomics/overview.md` | `REWRITE_BOUNDED` | Separate utility and eligibility intent from issuance, distribution, value, and enabled economics. | REQ-02, FLOW-07, FLOW-10 | Revert file commit. |
| `EP7-B01-018` | `docs/runtime/overview.md` | `REWRITE_BOUNDED` | Add activation, incident, pause, recovery, and evidence boundaries. | REQ-03, FLOW-11 | Revert file commit. |
| `EP7-B01-019` | `docs/.vitepress/config.mts` | `NAVIGATION_ONLY` | Add the two new overview pages to navigation. | Manifest entries 005-006 | Revert config commit. |

## Prohibited Execution

- No other `docs/` path may change.
- No Lottery page may change.
- No private evidence may be copied.
- No schema, generator, relationship-model, or external-repository change.
- No active financial, legal, security, production, provider, wallet, or
  contract status may be introduced.
