---
schema_version: "1.0.0"
document_id: "DOC-RPT-195"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Status Evidence Matrix"
summary: "Separates implementation, activation, operation, production, and maturity status for material Axodus surfaces."
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
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-02"]
related_adrs: []
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-08-STATUS-EVIDENCE-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Status Evidence Matrix

| Status ID | Surface | Implemented Meaning | Activation | Operational | Production | Evidence | Required Public Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `STAT-EP8-0001` | Documentation pipeline | Generator, validators, tests, and VitePress artifacts exist. | Local workflow enabled. | Demonstrated in repository. | Not a product-production claim. | `EVID-EP8-0001` | `IMPLEMENTED_AND_VALIDATED_DOCUMENTATION` |
| `STAT-EP8-0002` | Business runtime | Typed mock/read-only workflow surfaces exist. | Sensitive bridges disabled. | Planning model demonstrable locally. | Not production. | `EVID-EP7-0006/0007` | `PROTOTYPE_VERIFIED_READ_ONLY` |
| `STAT-EP8-0003` | Trinity planning | Advisory role and intended exchange are defined. | General transport unverified. | Not demonstrated end to end. | Not production. | `EVID-EP7-0004/0006` | `DIRECTIONAL_ADVISORY` |
| `STAT-EP8-0004` | ACS gates | Read-only/local signal controls exist. | Production enforcement disabled. | Prototype behavior represented. | Not production enforcement. | `EVID-EP7-0008/0009` | `PROTOTYPE_VERIFIED_NON_PRODUCTION` |
| `STAT-EP8-0005` | Governance | Design and implementation artifacts exist. | Authority varies and is unverified by scope. | Decision flow is a governed model. | No autonomous production governance claim. | `EVID-EP7-0013` | `ACTIVE_IF_SCOPE_VERIFIED` |
| `STAT-EP8-0006` | Academy/PoK | Product intent and partial artifacts exist. | Certification/economic effects inactive. | Full cycle not demonstrated. | Not production. | `EVID-EP7-0011` | `DIRECTIONAL_AND_PARTIAL_PROTOTYPE` |
| `STAT-EP8-0007` | Marketplace | Repository/product surfaces exist. | Commercial settlement unverified. | Listing lifecycle incomplete. | Not production commerce. | `EVID-EP7-0012` | `PRODUCT_MODEL_OR_PROTOTYPE` |
| `STAT-EP8-0008` | Treasury | Public design and policy drafts exist. | Custody/signing disabled or unverified. | No intended-environment proof. | Not production Treasury. | `EVID-EP7-0003` | `CONCEPTUAL_AND_BLOCKED` |
| `STAT-EP8-0009` | Tokenomics | Contract and design artifacts exist. | Issuance/distribution unverified. | No enabled economic cycle. | Not production economics. | `EVID-EP7-0019` | `ARTIFACT_EXISTS_NOT_ACTIVATED` |
| `STAT-EP8-0010` | Trading | Prototype and validation artifacts exist. | Provider/exchange/financial gates closed. | No live strategy execution proof. | Not production trading. | `EVID-EP7-0014` | `PROTOTYPE_ONLY_GATES_CLOSED` |
| `STAT-EP8-0011` | Mining | Repository and design artifacts exist. | Infrastructure/operator state unverified. | No active operation proof. | Not production mining. | `EVID-EP7-0015` | `MODEL_WITH_EVIDENCE_GAPS` |
| `STAT-EP8-0012` | Lottery | Prototype artifacts exist. | Legal/public release blocked. | No public operation proof. | Not production lottery. | `EVID-EP7-0016` | `PROTOTYPE_ONLY_RELEASE_BLOCKED` |
| `STAT-EP8-0013` | Portfolio Runtime | Operating model and partial prototypes exist. | Provider and sensitive execution closed. | Cross-core lifecycle not end-to-end demonstrated. | Not integrated production runtime. | `EVID-EP8-0002` | `MODEL_AND_PARTIAL_PROTOTYPE` |
| `STAT-EP8-0014` | Cross-core integrations | Documentation contracts exist. | Most interfaces unconfirmed. | Bilateral operation not inferred. | Not an integrated production system. | `EVID-EP8-0004` | `DOCUMENTED_NOT_OPERATIONALLY_INTEGRATED` |

## Status Semantics

- `implemented`: committed artifact or behavior exists;
- `activated`: an authorized, configured execution path is enabled;
- `operational`: the intended flow can be demonstrated in its environment;
- `production`: readiness, authority, security, monitoring, rollback, and
  production gates are satisfied.

No row treats these states as synonyms.
