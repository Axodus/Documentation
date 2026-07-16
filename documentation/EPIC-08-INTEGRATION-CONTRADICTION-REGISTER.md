---
schema_version: "1.0.0"
document_id: "DOC-RPT-192"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Integration Contradiction Register"
summary: "Classifies material bilateral integration contradictions and their safe remediation route."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-08"]
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-01"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-08-INTEGRATION-CONTRADICTION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Integration Contradiction Register

| Contradiction ID | Integrations | Finding | Risk | Frozen Treatment | REQ-05 Eligibility |
| --- | --- | --- | --- | --- | --- |
| `ICONF-EP8-0001` | `INTG-EP8-0008` | Business has a governed ACS contract; ACS has a legacy, less-qualified page. | `MEDIUM` | Preserve Business as canonical source and align the ACS side. | `ELIGIBLE_AFTER_TRACE_FREEZE` |
| `ICONF-EP8-0002` | `INTG-EP8-0013` | Trinity planning is semantically aligned but transport, estimate method, and service behavior are absent. | `HIGH` | Retain advisory/incomplete status. | `QUALIFIER_ONLY` |
| `ICONF-EP8-0003` | `INTG-EP8-0010` | Business/Marketplace asset handoff lacks complete ownership and release authority. | `HIGH` | Do not close the flow by cross-reference alone. | `REFERENCE_AND_GAP_ONLY` |
| `ICONF-EP8-0004` | `INTG-EP8-0001/0005` | Academy pages can imply ACS validation or reward consequence stronger than consuming authorities support. | `HIGH` | Separate evidence, qualification, approval, and economic effect. | `ELIGIBLE_AFTER_STATUS_FREEZE` |
| `ICONF-EP8-0005` | `INTG-EP8-0006/0007` | ACS local holds, alerts, governed suspension, and production enforcement are not uniformly distinguished. | `HIGH` | Use the EPIC-07 authority ladder. | `ELIGIBLE_AFTER_AUTHORITY_FREEZE` |
| `ICONF-EP8-0006` | `INTG-EP8-0014..0020` | Governance target pages often describe specific dependencies while Governance remains portfolio-generic. | `MEDIUM` | Add bounded bilateral references; do not infer active authorities. | `ELIGIBLE_AFTER_AUTHORITY_FREEZE` |
| `ICONF-EP8-0007` | `INTG-EP8-0021..0024` | Lottery documents describe integration mechanics without legal-safe release evidence. | `CRITICAL` | Keep public operation and economic effects blocked. | `QUALIFIER_ONLY` |
| `ICONF-EP8-0008` | `INTG-EP8-0027/0030/0032/0035` | Product-side economic models are more specific than Treasury's active-state evidence. | `HIGH` | Treasury review is a dependency, not proof of custody or execution. | `ELIGIBLE_AFTER_STATUS_FREEZE` |
| `ICONF-EP8-0009` | `INTG-EP8-0028/0029` | Mining telemetry and runtime concepts lack verified provider and operating evidence. | `HIGH` | Retain interface-unconfirmed and non-production status. | `REFERENCE_AND_GAP_ONLY` |
| `ICONF-EP8-0010` | `INTG-EP8-0033..0035` | Trading integration language can imply active monitoring or execution despite closed provider and financial gates. | `CRITICAL` | Add status/authority qualifiers only. | `QUALIFIER_ONLY` |
| `ICONF-EP8-0011` | `INTG-EP8-0031/0032` | Contract and token artifacts can be mistaken for active issuance or distribution. | `CRITICAL` | Separate implemented artifact, activation, authority, and economic state. | `ELIGIBLE_AFTER_STATUS_FREEZE` |
| `ICONF-EP8-0012` | runtime pairs | Runtime is described as cross-core discipline, while most product interfaces have no verified transport. | `HIGH` | Use canonical references and retain interface gaps. | `REFERENCE_AND_GAP_ONLY` |

Contradictions are frozen findings. They do not authorize public edits until
REQ-04 includes exact paths and wording in the remediation manifest.
