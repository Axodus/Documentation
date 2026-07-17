---
schema_version: "1.0.0"
document_id: "DOC-RPT-200"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Authority Conflict Register"
summary: "Freezes conflicts between intended responsibility, documented authority, implementation, activation, and execution rights."
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
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-03"]
related_adrs: []
related_cores: ["BUSINESS", "MARKETPLACE", "ACS", "GOVERNANCE", "TOKENOMICS", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-08-AUTHORITY-CONFLICT-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Authority Conflict Register

| Conflict ID | Authority IDs | Conflict | Risk | Frozen Decision | Remediation Eligibility |
| --- | --- | --- | --- | --- | --- |
| `ACONF-EP8-0001` | `AUTH-EP8-0001/0002` | Business mission includes execution, while its current runtime is non-executive. | `HIGH` | Separate accountable coordination from enabled execution. | `QUALIFIER_AND_REFERENCE` |
| `ACONF-EP8-0002` | `AUTH-EP8-0003` | Agent creation intent exists without a general provisioning authority. | `HIGH` | Retain unresolved authority and blocked activation. | `GAP_REFERENCE_ONLY` |
| `ACONF-EP8-0003` | `AUTH-EP8-0004/0005` | Asset creation, release, and Marketplace listing can be conflated. | `HIGH` | Require separate owner, release, and listing decisions. | `QUALIFIER_AND_REFERENCE` |
| `ACONF-EP8-0004` | `AUTH-EP8-0006` | Draft Treasury policy names roles but no active signer/custodian is evidenced. | `CRITICAL` | Do not classify as formally activated authority. | `STATUS_AND_AUTHORITY_QUALIFIER` |
| `ACONF-EP8-0005` | `AUTH-EP8-0007` | Academy/Tokenomics intent can imply mint or distribution authority. | `CRITICAL` | Preserve independent economic decision and executor gates. | `STATUS_AND_AUTHORITY_QUALIFIER` |
| `ACONF-EP8-0006` | `AUTH-EP8-0008/0009` | Runtime/provider architecture can imply activation authority. | `HIGH` | Require readiness decision, operator, credentials, health, rollback. | `QUALIFIER_AND_REFERENCE` |
| `ACONF-EP8-0007` | `AUTH-EP8-0010/0011` | Governance decision can be mistaken for execution. | `HIGH` | Require executor designation and execution receipt. | `REFERENCE_AND_FLOW_LINK` |
| `ACONF-EP8-0008` | `AUTH-EP8-0012/0013` | ACS alert, local hold, governed suspension, and production enforcement differ. | `CRITICAL` | Keep observational/local implementation separate from authority. | `AUTHORITY_LADDER_QUALIFIER` |
| `ACONF-EP8-0009` | `AUTH-EP8-0014` | Incident-response duties are defined without portfolio-wide active role assignments. | `HIGH` | Retain formally defined but not activated. | `STATUS_QUALIFIER` |
| `ACONF-EP8-0010` | all agent-related actions | Agent output may influence a decision without owning that decision. | `HIGH` | Agents remain consultative; human/governance owner records disposition. | `CANONICAL_REFERENCE` |

No conflict is closed in this request. REQ-04 may select only exact low-risk
qualifiers and references for the remediation manifest.
