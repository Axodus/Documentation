---
schema_version: "1.0.0"
document_id: "DOC-RPT-199"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Decision to Execution Register"
summary: "Traces decision records to executor readiness, activation, receipts, suspension, and reversal requirements."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_08"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
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
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-08-DECISION-TO-EXECUTION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Decision to Execution Register

| Decision Trace ID | Authority ID | Required Decision | Executor Condition | Required Receipt | Suspension / Reversal | Current Traceability | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `DEC-EP8-0001` | `AUTH-EP8-0001` | product scope and accountable owner | authorized implementation team | design/release record | product owner/governed authority | model only | `OWNER_DEFINED_PENDING_DECISION` |
| `DEC-EP8-0002` | `AUTH-EP8-0002` | accepted scope, funding posture, review triggers | assigned team and enabled runtime | delivery/acceptance record | Business owner; Governance if triggered | mock lifecycle | `OWNER_DEFINED_PENDING_DECISION` |
| `DEC-EP8-0003` | `AUTH-EP8-0003` | capability, data, tools, permissions, security approval | isolated agent runtime | test, permission, activation record | Security/owner revocation | decision and executor absent | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0004` | `AUTH-EP8-0004` | rights/privacy/reuse/release decision | asset registry and publisher | version/license/release record | release authority | incomplete flow | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0005` | `AUTH-EP8-0005` | listing decision for asset class | enabled Marketplace operator | listing/removal record | listing authority | product surface only | `FORMALLY_GRANTED_NOT_ACTIVATED` |
| `DEC-EP8-0006` | `AUTH-EP8-0006` | Treasury/Governance action authorization | enabled signer/custodian | transaction/reconciliation record | Treasury/Governance authority | no active signer evidence | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0007` | `AUTH-EP8-0007` | economic rule and eligible event authorization | enabled contract/executor | issuance/distribution/supply record | economic authority | no active rule/executor | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0008` | `AUTH-EP8-0008` | readiness and environment activation | authorized runtime operator | activation/health/rollback record | owner/Security | model and partial prototype | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0009` | `AUTH-EP8-0009` | provider security and capability approval | enabled adapter and scoped credentials | provider health/execution record | owner/Security | provider gate closed | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0010` | `AUTH-EP8-0010` | valid proposal and scope authority | governance decision mechanism | proposal/decision record | governance policy | model; scope activation varies | `FORMALLY_GRANTED_NOT_ACTIVATED` |
| `DEC-EP8-0011` | `AUTH-EP8-0011` | approved decision plus executor designation | ready authorized executor | execution/verification receipt | governance authority | executor evidence absent | `UNRESOLVED_AUTHORITY` |
| `DEC-EP8-0012` | `AUTH-EP8-0012` | none for advisory signal; provenance required | ACS prototype | signal/review record | owner disposition | prototype verified | `OBSERVATIONAL_ONLY` |
| `DEC-EP8-0013` | `AUTH-EP8-0013` | local policy for hold; formal decision for broader suspension | local gate or authorized responder | hold/suspension/appeal record | owning authority | local behavior only | `IMPLEMENTED_WITHOUT_AUTHORITY` |
| `DEC-EP8-0014` | `AUTH-EP8-0014` | incident classification and containment authority | authorized responder | incident/recovery/postmortem | incident authority | roles not instantiated | `FORMALLY_GRANTED_NOT_ACTIVATED` |

A decision is incomplete until scope, executor eligibility, execution status,
and receipt are traceable. Approval text alone never proves execution.
