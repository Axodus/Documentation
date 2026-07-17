---
schema_version: "1.0.0"
document_id: "DOC-RPT-160"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Decision Register"
summary: "Freezes the request sequencing, truth interpretation, mutation, and gate decisions for EPIC-07."
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
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-01"]
related_adrs: []
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-DECISION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Decision Register

| Decision ID | Decision | Rationale | Enforcement |
| --- | --- | --- | --- |
| `DEC-EP7-0001` | Truth reconstruction precedes traceability and maturity closure. | A governed corpus can remain semantically incomplete. | EPIC-08 is deferred until EPIC-07 closure. |
| `DEC-EP7-0002` | REQ-01 through REQ-06 may change only `.rag/` reports and the authorized private ledger. | Freeze must precede public remediation. | `docs/` delta must remain zero. |
| `DEC-EP7-0003` | REQ-07 is the only request authorized to change `docs/`. | Public reconstruction must be bounded by an exact manifest. | Every changed public path must exist in the REQ-06 manifest. |
| `DEC-EP7-0004` | REQ-08 is audit-only for `docs/`. | Audit findings cannot self-authorize remediation. | New corrections become governed backlog. |
| `DEC-EP7-0005` | Owner context directly defines identity and intended interpretation within its stated scope. | Owner intent is a legitimate normative source. | It cannot prove implementation, activation, legal, security, or financial state. |
| `DEC-EP7-0006` | Committed code and tests may verify represented behavior, not operational deployment. | Prototype evidence and production evidence are distinct. | Stronger statuses require deployment or operational evidence. |
| `DEC-EP7-0007` | Private evidence is stored only in the excluded ledger; reports cite evidence IDs. | Prevents boundary leakage through governance reports. | Negative publication checks are mandatory. |
| `DEC-EP7-0008` | `.knowledge/` remains authority-pending. | Its authority normalization was deferred. | It may identify candidates but cannot close a fact. |
| `DEC-EP7-0009` | Same-level contradictions remain unresolved until an authorized owner or formal decision resolves them. | Mechanical precedence cannot manufacture truth. | Stronger public claims remain blocked. |
| `DEC-EP7-0010` | Production and financial gates remain closed. | EPIC-07 has documentation authority only. | No provider, exchange, wallet, contract, or financial action is authorized. |
