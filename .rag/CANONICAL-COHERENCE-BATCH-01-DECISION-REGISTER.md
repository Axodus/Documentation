---
schema_version: "1.0.0"
document_id: "DOC-RPT-138"
aliases: []
document_type: "REPORT"
title: "Canonical Coherence Batch 01 Decision Register"
summary: "Freezes exact Batch 01 remediation decisions for terminology, status, maturity, and boundary corrections under EPIC-05 REQ-03."
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
related_requirements: ["DOCUMENTATION-EPIC-05-REQ-03"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/CANONICAL-COHERENCE-BATCH-01-DECISION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Canonical Coherence Batch 01 Decision Register

## Exact Frozen Decisions

| Decision ID | Source Path | Section | Current Wording | Issue | Evidence | Decision | Required Future Action | Risk | Owner | Reviewer | Boundary Impact | Expected Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `PUB-COH-EP5-0001` | `docs/overview/terminology.md` | whole page | Plain-text status page with `Status: Active` and no governed front matter. | Canonical terminology surface is under-governed and status language is inconsistent with its own rule set. | REQ-01 status freeze, REQ-02 terminology review. | `FREEZE_FOR_BATCH_01` | Add governed front matter and replace page-level status reading with documentation-safe wording. | `CONTROLLED_MEDIUM` | Documentation Maintainer | Documentation Architecture Reviewer | None | `generate`, `validate`, `check` |
| `PUB-COH-EP5-0002` | `docs/overview/product-map.md` | nucleus table and notes | Draft status rows list many nuclei with capability-rich role wording. | Readers can infer implementation or launch state from documentation-status rows. | REQ-02 maturity review and claim register. | `FREEZE_FOR_BATCH_01` | Add explicit statement that table statuses are documentation statuses only and not operational confirmation. | `CONTROLLED_MEDIUM` | Documentation Maintainer | Portfolio Documentation Reviewer | Low | `validate`, `check` |
| `PUB-COH-EP5-0003` | `docs/overview/constitutional-model.md` | scope, definition, current status | Constitutional framing is strong but ratification and legal finality are unevenly separated. | Authority and ratification posture can be over-read. | REQ-02 maturity review; REQ-01 page freeze. | `FREEZE_FOR_BATCH_01` | Add explicit conceptual, not ratified-by-default, and not legally finalized-by-default qualifiers. | `CONTROLLED_MEDIUM` | Documentation Maintainer | Documentation Architecture Reviewer | Low | `validate`, `check` |
| `PUB-COH-EP5-0004` | `docs/governance/executive-dao.md` | purpose, scope, current status | Named governance body is described as a coordination layer in current design. | Governance body naming is still easy to misread as activation. | REQ-02 claim review and governance terminology control. | `FREEZE_FOR_BATCH_01` | Narrow wording to proposed design layer and explicitly deny activated-body inference. | `MEDIUM` | Governance Nucleus | Documentation Architecture Reviewer | Low | `validate`, `check` |
| `PUB-COH-EP5-0005` | `docs/governance/boardroom-council.md` | scope, status, accountability | Supervisory powers are described, but authority-state separation is weaker than the role description. | Public authority ambiguity. | REQ-02 claim review; governance boundary review. | `FREEZE_FOR_BATCH_01` | Add explicit non-implemented authority qualifier and keep review role directional. | `MEDIUM` | Governance Nucleus | Portfolio Documentation Reviewer | Low | `validate`, `check` |
| `PUB-COH-EP5-0006` | `docs/governance/dao-federation.md` | model, status table, lifecycle | Federation model and statuses can be mistaken for an operating registry. | Operational registry inference. | REQ-02 maturity review; terminology comparison. | `FREEZE_FOR_BATCH_01` | Add directional/prototype framing to statuses, registry, and lifecycle references. | `MEDIUM` | Governance Nucleus | Documentation Architecture Reviewer | Low | `validate`, `check` |
| `PUB-COH-EP5-0007` | `docs/tokenomics/pok-minting.md` | purpose, scope, detailed mint flow | `Proof-of-Knowledge` and contract flow can be read as implemented credentialing or verified deployment. | Terminology and prototype ambiguity. | REQ-02 terminology and claim review. | `FREEZE_FOR_BATCH_01` | Clarify educational participation scope, prototype posture, and documented-model status. | `HIGH` | Axodus Tokenomics | Documentation Architecture Reviewer | Medium | `validate`, `check`, relationships unchanged |
| `PUB-COH-EP5-0008` | `docs/treasury/treasury-policy.md` | action categories and authority language | Draft policy reads like approved active treasury framework. | Treasury authorization over-read. | REQ-02 disclosure boundary review and claim register. | `FREEZE_FOR_BATCH_01` | Add draft framework, non-authorization, and non-execution qualifiers. | `HIGH` | Axodus Treasury | Portfolio Documentation Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0009` | `docs/treasury/capital-allocation.md` | categories, limits, flow descriptions | Allocation categories are concrete enough to imply active treasury program. | Financial operation inference. | REQ-02 claim review and maturity review. | `FREEZE_FOR_BATCH_01` | Reframe as directional treasury-design model unless independently verified. | `HIGH` | Axodus Treasury | Documentation Architecture Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0010` | `docs/trading/overview.md` | purpose, ecosystem role, status | Trading is described as both internal and user-facing nucleus. | Product and execution availability inference. | REQ-02 claim and disclosure review. | `FREEZE_FOR_BATCH_01` | Add `active if verified` style qualifiers for product and operations references. | `HIGH` | Axodus Trading | Security Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0011` | `docs/trading/internal-trading.md` | purpose, objectives, treasury rules, metrics | Revenue, sustainability, pilot, and PnL language can be over-read publicly. | Financial and live-capital claim strength too high. | REQ-02 claim review and boundary review. | `FREEZE_FOR_BATCH_01` | Narrow to research, pilot, and reporting model wording unless independently verified. | `HIGH` | Axodus Trading | Portfolio Documentation Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0012` | `docs/trading/user-facing-strategies.md` | purpose, execution model, eligibility, onboarding | Availability and support language can imply current released product access. | Product availability ambiguity. | REQ-02 claim review. | `FREEZE_FOR_BATCH_01` | Make availability explicitly conditional on implementation and release evidence. | `HIGH` | Axodus Trading | Documentation Architecture Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0013` | `docs/mining/overview.md` | purpose, scope, ecosystem role | Governed page still describes a broad mining nucleus in ways that can imply active operations or products. | Product and operating-status ambiguity. | REQ-02 claim review and maturity review. | `FREEZE_FOR_BATCH_01` | Add concept-versus-operation and `if verified` qualifiers to scope-sensitive wording. | `HIGH` | Axodus Mining | Portfolio Documentation Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0014` | `docs/mining/infrastructure-and-operations.md` | lifecycle | Lifecycle includes `production operation`. | Operational maturity conflation. | REQ-02 maturity review and disclosure review. | `FREEZE_FOR_BATCH_01` | Replace with evidence-gated operation-model wording and separate deployment verification from lifecycle design. | `HIGH` | Axodus Mining | Documentation Architecture Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0015` | `docs/lottery/prize-pools-and-payouts.md` | payout models and risk considerations | Prize models can be interpreted as live or funded commitments. | Prize enablement and liability inference. | REQ-02 boundary review and claim review. | `FREEZE_FOR_BATCH_01` | Add funded-only, approved-only, legal-dependent, and implementation-dependent qualifiers. | `HIGH` | Axodus Lottery | Security Reviewer | Medium | `validate`, `check` |
| `PUB-COH-EP5-0016` | `docs/*` versus `requests/*` | cross-surface interpretation | Public pages can still be read as more settled than private requests authorize. | Request-state inference risk. | REQ-01 request alignment review; REQ-02 decision report. | `FREEZE_FOR_BATCH_01` | Add explicit non-inference wording only where a page currently leans on future or gated capability language. | `HIGH` | Documentation Maintainer | Documentation Architecture Reviewer | Low | `validate`, `check`, no relationship delta |

## Batch Reading

All frozen decisions remain within the allowed REQ-03 change surface:
terminology, status labels, maturity qualifiers, prototype qualifiers, public
disclosure qualifiers, cross-reference corrections, and request-state
alignment.
