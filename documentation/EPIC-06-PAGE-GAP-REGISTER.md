---
schema_version: "1.0.0"
document_id: "DOC-RPT-147"
aliases: []
document_type: "REPORT"
title: "EPIC-06 Page Gap Register"
summary: "Separates hardening, consolidation, and actual structural gaps across the six EPIC-06 target cores."
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
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-06-PAGE-GAP-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-06 Page Gap Register

## Register

| Gap ID | Core | Source Path or Need | Gap Type | Current State | Expected State | Dependency | Risk | Recommended Action | REQ-02 or REQ-03 Eligibility |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `EP6-GAP-001` | `business` | Business identity framing across `overview`, `service-catalog`, `runtime` | `CANONICAL_HARDENING` | Business is partly documented as intake and service coordination, but still lacks strong anti-software-house and anti-marketplace framing. | Operational infrastructure identity explicit and stable. | Business canonical context | `MEDIUM` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_02_FREEZE` |
| `EP6-GAP-002` | `business` | Development-type taxonomy | `COVERAGE_GAP_WITH_EXISTING_TARGETS` | Contracted, community, and strategic development are not clearly separated in canonical Business pages. | Explicit type distinction inside existing Business canonical pages. | Business canonical context | `MEDIUM` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_02_FREEZE` |
| `EP6-GAP-003` | `business` | Asset-building and post-build monetization posture | `COVERAGE_GAP_WITH_EXISTING_TARGETS` | Existing pages imply services and coordination more than asset creation. | Business-as-asset-builder explicitly documented. | Business canonical context | `MEDIUM` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_02_FREEZE` |
| `EP6-GAP-004` | `business` | Runtime current-state boundary in `docs/business/runtime.md` | `STATUS_GAP` | Runtime page defines lifecycle and statuses but not explicit mock/read-only bridge posture. | Explicit runtime readiness boundary and bridge-mock disclosure. | Business canonical context | `MEDIUM` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_02_FREEZE` |
| `EP6-GAP-005` | `business` | Trinity relationship | `STRUCTURAL_GAP_UNCONFIRMED` | Trinity appears inside ACS/Business references, but no explicit Business-owned canonical treatment exists. | Either consolidate into existing `acs-integration` page or confirm a narrow new page later. | Business canonical context | `MEDIUM` | `DEFER_INSUFFICIENT_EVIDENCE` | `REVIEW_DURING_REQ_02` |
| `EP6-GAP-006` | `mining` | Ownership, cost, and revenue authority | `AUTHORITY_GAP` | Pages cover operations broadly but do not clearly freeze who owns infrastructure, costs, losses, and revenue. | Explicit authority and economic-boundary reading. | Mining coherence review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-007` | `mining` | Production-state interpretation | `STATUS_GAP` | Governed Mining pages still risk active-operation inference. | Consistent concept/prototype/active separation. | EPIC-05 Batch 01 and EPIC-06 REQ-03 | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-008` | `lottery` | Legal-safe framing across prize, settlement, runtime, and treasury-fee pages | `BOUNDARY_GAP` | Coverage exists, but safety posture is uneven and several pages remain under-governed. | Consistent legal-safe and public-safe framing before any expansion. | Legal-safe review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-009` | `lottery` | Explicit publication-decision surface | `STRUCTURAL_GAP_UNCONFIRMED` | Overview and risk pages already perform part of this role. | Decide later whether existing pages are sufficient. | REQ-03 lottery freeze | `HIGH` | `DEFER_INSUFFICIENT_EVIDENCE` | `REVIEW_DURING_REQ_03` |
| `EP6-GAP-010` | `treasury` | Active versus conceptual Treasury distinction | `STATUS_GAP` | Coverage exists but draft pages remain easy to over-read as active policy. | Stable conceptual/prototype/active separation. | Treasury coherence review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-011` | `treasury` | Custody and execution-authority model across ungoverned pages | `AUTHORITY_GAP` | Governed control pages exist, but policy and alignment surfaces remain under-governed. | Consistent authority model across the public cluster. | Treasury coherence review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-012` | `tokenomics` | Utility versus financial expectation consistency | `BOUNDARY_GAP` | Overview is strong, but breadth pages remain under-governed and can drift in interpretation. | Utility-bound, non-investment posture across the cluster. | Tokenomics coherence review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-013` | `tokenomics` | Issuance and distribution status clarity | `STATUS_GAP` | Many pages describe mechanics, but status and verification posture remain uneven. | Stable issuance/distribution-state language. | Tokenomics coherence review | `HIGH` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |
| `EP6-GAP-014` | `runtime` | Production-boundary consolidation | `COHERENCE_GAP` | Runtime is broad and governed, but integration surfaces can still be misread as active automation. | Stronger prototype-versus-production readiness posture. | Runtime coherence review | `MEDIUM` | `CONSOLIDATE_EXISTING_PAGES` | `ELIGIBLE_FOR_REQ_03_FREEZE` |

## Gap Reading

REQ-01 confirms broad topical coverage in every target core. The dominant need
is consolidation into existing pages. No net-new page is authorized by REQ-01.
Possible future new-page candidates remain unconfirmed and review-gated.
