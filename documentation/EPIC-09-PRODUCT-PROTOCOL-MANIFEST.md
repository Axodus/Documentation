---
schema_version: "1.0.0"
document_id: "DOC-RPT-238"
aliases: []
document_type: "REPORT"
title: "EPIC-09 PRODUCT PROTOCOL MANIFEST"
summary: "Freezes the non-overlapping product protocol manifest execution paths and limits."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_09"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-09"]
related_requirements: ["DOCUMENTATION-EPIC-09-REQ-06"]
related_adrs: []
related_cores: ["TRADING", "MINING", "LOTTERY", "DEFI", "DEX"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-09-PRODUCT-PROTOCOL-MANIFEST.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 PRODUCT PROTOCOL MANIFEST

| Manifest Entry ID | Path | Current Disposition | Current Status | Frozen Action | Maximum Allowed Scope | Source IDs | Prohibited Interpretations | Navigation Impact | Relationship Impact | Rollback | Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `MAN-EP9-PRODUCT-PROTOCOL-001` | `docs/defi/daas.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0017`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-002` | `docs/defi/derivatives-and-debentures.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0017`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-003` | `docs/defi/protocol-model.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0017`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-004` | `docs/dex/listing-policy.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0018`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-005` | `docs/dex/routing-and-aggregation.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0018`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-006` | `docs/dex/swap-model.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0018`, `EVID-EP8-0005` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-007` | `docs/mining/architecture.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0015`, `EVID-EP8-0005/0007` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-008` | `docs/mining/costs-fees-and-profitability.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add risk source, control owner, review, exception, boundary and disabled-state detail. | `EVID-EP7-0015`, `EVID-EP8-0005/0007` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-009` | `docs/mining/infrastructure-and-operations.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add actors, ordered steps, decisions, outputs, failure and suspension states. | `EVID-EP7-0015`, `EVID-EP8-0005/0007` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-010` | `docs/mining/monitoring-and-telemetry.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add concrete purpose, inputs, outputs, authority, process, status, limits and exceptions. | `EVID-EP7-0015`, `EVID-EP8-0005/0007` | No active custody, issuance, yield, return, liquidity, settlement, mining revenue or financial execution claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-011` | `docs/lottery/operations-and-runtime.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add actors, ordered steps, decisions, outputs, failure and suspension states. | `EVID-EP7-0016`, `EVID-EP8-0005/0007` | No legal release, active draw, prize availability, jurisdiction approval or production randomness claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
| `MAN-EP9-PRODUCT-PROTOCOL-012` | `docs/lottery/randomness-and-vrf.md` | Existing REQ-01 disposition | Existing label retained | `EDIT_FOR_SUBSTANCE` | Add components, interfaces, state transitions, dependencies, status and explicit unknowns. | `EVID-EP7-0016`, `EVID-EP8-0005/0007` | No legal release, active draw, prize availability, jurisdiction approval or production randomness claim. | No navigation change | Existing relationships only | Revert the owning execution commit. | Generator, validation, relationships, tests, build, diff and path audit |
