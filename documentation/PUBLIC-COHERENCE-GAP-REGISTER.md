---
schema_version: "1.0.0"
document_id: "DOC-RPT-135"
aliases: []
document_type: "REPORT"
title: "Public Coherence Gap Register"
summary: "Registers terminology, claim, maturity, and disclosure coherence gaps for later remediation selection under EPIC-05 REQ-02."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_05"
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
related_epics: ["DOCUMENTATION-EPIC-05"]
related_requirements: ["DOCUMENTATION-EPIC-05-REQ-02"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/PUBLIC-COHERENCE-GAP-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Public Coherence Gap Register

## Gap Register

| Gap ID | Domain | Source Path | Gap Type | Current State | Expected State | Dependency | Risk | Recommended Action | REQ-03 Eligibility |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAP-001 | `overview` | `docs/overview/terminology.md` | `METADATA_DISCIPLINE` | Ungoverned status-style page with public terminology authority role. | Governed canonical terminology page or explicit baseline-only classification. | Public terminology decisions | `MEDIUM` | Freeze metadata/status correction only. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-002 | `overview` | `docs/overview/product-map.md` | `MATURITY_LANGUAGE` | Draft status rows can still be over-read as product existence statements. | Explicit document-status-only interpretation. | Maturity-language review | `MEDIUM` | Add publication and implementation qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-003 | `overview` | `docs/overview/constitutional-model.md` | `AUTHORITY_SCOPE` | Strong conceptual content, but no governed metadata and uneven ratification/authority qualifiers. | Clear conceptual/ratified/legal distinction. | Governance terminology decisions | `MEDIUM` | Freeze qualifier corrections only. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-004 | `governance` | `docs/governance/executive-dao.md` | `ACTIVATION_AMBIGUITY` | Named governance body with draft caveat. | Explicit design-layer, not activated-body reading. | Governance claim review | `HIGH` | Add prototype and authority qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-005 | `governance` | `docs/governance/boardroom-council.md` | `AUTHORITY_AMBIGUITY` | Review powers described, but authority activation remains easy to over-read. | Explicit proposed review role only. | Governance claim review | `HIGH` | Narrow authority wording. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-006 | `governance` | `docs/governance/dao-federation.md` | `OPERATIONAL_INFERENCE` | Federation actors and statuses can be read as an operating registry. | Directional federation model only. | Terminology and maturity review | `HIGH` | Add prototype/status qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-007 | `tokenomics` | `docs/tokenomics/supply-and-emission.md` | `EXACT_PARAMETER_EXPOSURE` | Exact public mint limits are stated in a draft page. | Stronger `if verified` or `documented model` qualifier for exact parameters. | Claim and boundary review | `HIGH` | Freeze qualifier corrections; do not add new claims. | `ELIGIBLE_AFTER_DOCUMENTATION_REVIEW` |
| GAP-008 | `tokenomics` | `docs/tokenomics/pok-minting.md` | `TERM_AMBIGUITY` | `Proof of Knowledge` can be misread as implemented credentialing or cryptographic proof protocol. | Explicit proposed educational participation mechanism. | Terminology decisions | `HIGH` | Add prototype and scope qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-009 | `treasury` | `docs/treasury/treasury-policy.md` | `ACTION_ENABLEMENT_RISK` | Draft policy reads like approved live treasury framework. | Draft public framework only, not active treasury authorization. | Boundary review | `HIGH` | Tighten authority and publication qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-010 | `treasury` | `docs/treasury/capital-allocation.md` | `FINANCIAL_OPERATION_INFERENCE` | Draft categories can be mistaken for active allocation policy. | Directional treasury-design framing. | Claim and boundary review | `HIGH` | Qualifier corrections only. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-011 | `trading` | `docs/trading/overview.md` | `ACTIVE_PRODUCT_INFERENCE` | Trading is described as a product nucleus with future-sensitive capabilities. | `Active if Verified` or similarly explicit gating. | Claim and maturity review | `HIGH` | Freeze status/qualifier corrections. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-012 | `trading` | `docs/trading/internal-trading.md` | `FINANCIAL_CLAIM_STRENGTH` | Revenue and sustainability language is too easy to over-read. | Research/pilot/reporting framing only unless verified. | Claim and boundary review | `HIGH` | Narrow revenue and live-capital wording. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-013 | `trading` | `docs/trading/user-facing-strategies.md` | `AVAILABILITY_INFERENCE` | User-facing availability is plausible but not implementation-verified. | Conditional availability only. | Claim and maturity review | `HIGH` | Add activation and publication qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-014 | `mining` | `docs/mining/infrastructure-and-operations.md` | `OPERATIONAL_MATURITY` | Lifecycle includes `production operation`. | Distinguish operation model from verified operating deployment. | Maturity review | `HIGH` | Qualifier correction only. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-015 | `mining` | `docs/mining/overview.md` | `PRODUCT_EXISTENCE_INFERENCE` | Broad scope can be over-read as current mining product reality. | Design and product-model framing unless verified. | Claim and boundary review | `HIGH` | Add activation qualifiers. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-016 | `lottery` | `docs/lottery/prize-pools-and-payouts.md` | `PRIZE_ENABLEMENT_INFERENCE` | Payout models can be mistaken for funded or approved live models. | Conditional, funded-only, approved-only wording. | Boundary review | `HIGH` | Freeze qualifier corrections. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-017 | `lottery` | `docs/lottery/overview.md` | `STATUS_PARITY` | Overview is strong, but linked pages need equal boundary strength. | Domain-wide consistent concept/activation gating. | Boundary review | `MEDIUM` | Use as anchor for downstream wording alignment. | `ELIGIBLE_FOR_BATCH_01` |
| GAP-018 | `requests` | `docs/*` versus `requests/*` | `REQUEST_STATE_INFERENCE` | Public corpus can still be over-read as more settled than private requests authorize. | Explicit non-inference rule retained in public wording. | Request-state alignment | `HIGH` | Freeze request-state clarification language only. | `ELIGIBLE_FOR_BATCH_01` |

## Gap Summary

Most gaps are low-to-medium complexity wording repairs with high interpretive
value. That makes them good candidates for a bounded Batch 01 freeze.
