---
schema_version: "1.0.0"
document_id: "DOC-RPT-149"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Business Canonicalization Register"
summary: "Freezes exact canonicalization decisions for the Business surface under EPIC-06 REQ-02."
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
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-02"]
related_adrs: []
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-06-BUSINESS-CANONICALIZATION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Business Canonicalization Register

## Frozen Business Decisions

| Decision ID | Source Path | Focus | Current State | Frozen Decision | Future Action | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| `BUS-CAN-0001` | `docs/business/overview.md` | Core identity | Overview presents Business as intake, scoping, coordination, and delivery runtime. | Keep canonical anchor, but harden wording so Business is read as operational infrastructure and ecosystem asset-construction nucleus, not a generic software company or freelancer marketplace. | Add identity qualifiers only. | `MEDIUM` |
| `BUS-CAN-0002` | `docs/business/overview.md` | Development model taxonomy | Contracted, community, and strategic development are not explicitly separated. | Freeze a three-mode development taxonomy for Business canonical wording. | Add taxonomy to existing page or adjacent existing page; no new page by default. | `MEDIUM` |
| `BUS-CAN-0003` | `docs/business/overview.md` and `docs/business/service-catalog.md` | Asset-building posture | Current wording emphasizes services and delivery more than asset creation. | Freeze wording that Business may build Axodus-owned ecosystem assets before monetization. | Add asset-builder qualifier without promising commercialization or availability. | `MEDIUM` |
| `BUS-CAN-0004` | `docs/business/runtime.md` | Runtime state | Runtime page describes lifecycle and statuses, but not explicit mock/read-only status. | Freeze explicit mock/read-only runtime statement and bridge-mock statement for Governance, Financial, and ACS surfaces. | Add architectural-preparation-only wording. | `MEDIUM` |
| `BUS-CAN-0005` | `docs/business/governance-alignment.md` | Governance boundary | Governance boundary is good, but Business identity hardening requires stronger “operationalizes, does not authorize” language. | Keep page and freeze stronger non-authority wording. | Add concise authority qualifier. | `LOW` |
| `BUS-CAN-0006` | `docs/business/acs-integration.md` | ACS boundary | ACS is already advisory, but Business context now requires clearer “Business requests ACS, does not provision it” reading. | Freeze ACS-consumer wording and preserve non-commitment boundaries. | Narrow orchestration wording only. | `LOW` |
| `BUS-CAN-0007` | `docs/business/acs-integration.md` | Trinity role | Trinity is mentioned as analysis support, but not yet clearly bounded as consumer relationship only. | Freeze Trinity as support/analysis consumer relationship, never as institutional authority replacement. | Add or tighten Trinity qualifier within existing page. | `MEDIUM` |
| `BUS-CAN-0008` | `docs/business/request-intake.md` | Demand-source breadth | Scope already includes many requester types, but the core rule that internal and external demand share one pipeline is implicit rather than explicit. | Freeze explicit “same operational pipeline” wording. | Add qualifier to intake or overview. | `LOW` |
| `BUS-CAN-0009` | `docs/business/client-lifecycle.md` | Contracting and commercial posture | Lifecycle mentions funding model and commercial templates, but must not imply finalized contracting machinery. | Freeze stronger directional-only wording for commercial templates, pricing, and agreement mechanics. | Add non-finalized contracting qualifier. | `LOW` |
| `BUS-CAN-0010` | `docs/business/service-catalog.md` | Marketplace relation | Marketplace services appear as one category, but Business/Marketplace distinction is not explicit enough. | Freeze wording that Marketplace is a channel and Business is the operational infrastructure. | Add relationship qualifier only. | `MEDIUM` |
| `BUS-CAN-0011` | `docs/business/dao-service-requests.md` and `docs/business/plugin-requests.md` | DAO and plugin authority | Public posture is broadly correct, but must preserve Governance as institutional decision-maker. | Keep pages and harden anti-bypass wording only. | Metadata hardening plus authority qualifier. | `LOW` |
| `BUS-CAN-0012` | `docs/business/*` under-governed cluster | Front matter adoption | 14 of 15 Business pages remain under-governed. | Freeze front matter adoption as the main Batch 01 hardening lever. | Apply governed metadata selectively in REQ-04 to existing pages only. | `MEDIUM` |

## New Page Decision

No new Business page is authorized by REQ-02.

The following topics must first be consolidated into existing pages:

- Business identity as infrastructure nucleus
- contracted/community/strategic development taxonomy
- asset-building posture
- runtime mock/read-only state
- Trinity relationship
- Marketplace-as-channel distinction

## Metadata Hardening Priority

Primary front matter adoption candidates for REQ-04:

- `docs/business/runtime.md`
- `docs/business/request-intake.md`
- `docs/business/service-catalog.md`
- `docs/business/client-lifecycle.md`
- `docs/business/delivery-lifecycle.md`
- `docs/business/governance-alignment.md`
- `docs/business/acs-integration.md`
