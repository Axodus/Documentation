---
schema_version: "1.0.0"
document_id: "DOC-RPT-198"
aliases: []
document_type: "REPORT"
title: "EPIC-08 Authority Traceability Matrix"
summary: "Links material Axodus action classes to proposal, review, approval, execution, observation, blocking, suspension, reversal, and decision evidence."
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
related_cores: ["BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "GOVERNANCE", "MINING", "LOTTERY", "TOKENOMICS", "TRADING", "TREASURY", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "documentation/EPIC-08-AUTHORITY-TRACEABILITY-MATRIX.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-08 Authority Traceability Matrix

| Authority ID | Action Class | Proposes | Reviews | Approves | Executes | Observes | Blocks / Suspends | Reverses | Decision Source | Activation | State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `AUTH-EP8-0001` | product definition | product/Business owner | domain, boundary, security, Governance as triggered | accountable product authority, not yet instantiated portfolio-wide | authorized product team | Accountability | owner, Security, Governance within scope | approving authority | `documentation/EPIC-07-DECISION-RIGHTS-MATRIX.md`; design rule only | not verified | `OWNER_DEFINED_PENDING_DECISION` |
| `AUTH-EP8-0002` | service creation | requester or Business | Business human owner; domain reviewers | accountable Business/service owner | assigned team when enabled | requester, Runtime | Business owner; Security/Governance when triggered | approving service owner | `CTX-EP7-0001/0002`; no formal operating grant | mock/read-only | `OWNER_DEFINED_PENDING_DECISION` |
| `AUTH-EP8-0003` | agent creation | Business or owning nucleus | human, security, privacy, tool owner | no instantiated general agent authority | no general executor | ACS/Runtime records | Security or owner | approving authority if established | `FLOW-EP7-04`; decision missing | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0004` | asset publication | Business, product owner, tenant | rights, privacy, security, quality | asset release authority unresolved | Marketplace operator when enabled | Business, owner, Accountability | legal, security, listing authority | release/listing authority | `FLOW-EP7-05/06`; formal release decision missing | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0005` | Marketplace listing | Business, seller, authorized tenant | Marketplace, rights, quality, legal/security | listing authority unresolved by asset class | Marketplace operator when enabled | owner, Accountability | Marketplace/legal/security | listing authority | EPIC-07 decision-right model only | not activated | `FORMALLY_GRANTED_NOT_ACTIVATED` |
| `AUTH-EP8-0006` | Treasury action | authorized product or Treasury proposer | Treasury, Governance, security, risk, compliance | explicit Treasury/Governance authority not instantiated | authorized signer only if enabled | Accountability | Treasury risk, Security, Governance | authorized Treasury/Governance authority | EPIC-07 model; no active decision/signer | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0007` | token issuance or distribution | Academy, Tokenomics, Treasury, Governance within scope | economic, legal, security, contract reviewers | explicit economic authority missing | authorized contract only if enabled | Accountability | Governance, Treasury, Security, legal | authorized economic authority | EPIC-07 model; active rule absent | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0008` | runtime activation | owning nucleus | technical, security, data, Governance/provider reviewers | explicit runtime authority not instantiated | authorized operator | Runtime, ACS, Accountability | Security, owner, emergency authority | activating authority | EPIC-07 model; readiness decision absent | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0009` | provider activation | owning nucleus | technical, security, data, provider reviewers | explicit provider authority absent | authorized operator | Runtime, ACS | Security, owner | activating authority | `INT-EP7-015`; decision missing | blocked | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0010` | governance proposal | participant, DAO, Business, authorized nucleus | governance and domain reviewers | authority determined by proposal scope | not the voting mechanism | community, Accountability | constitutional/security/legal authority | governance authority under policy | EPIC-07 governance operating model | active only if scope verified | `FORMALLY_GRANTED_NOT_ACTIVATED` |
| `AUTH-EP8-0011` | governance execution | approved decision only | executor readiness and security | decision scope plus executor authority | authorized executor | Governance, Accountability | constitutional/security/emergency authority | authorized governance authority | decision-to-executor rule; active executor missing | unverified | `UNRESOLVED_AUTHORITY` |
| `AUTH-EP8-0012` | ACS alert | monitor, reporter, ACS | owning human/domain role | no approval required to record a signal | ACS records advisory output | owner, Runtime | none beyond local default-deny controls | owner disposition | `EVID-EP7-0008/0009` | prototype | `OBSERVATIONAL_ONLY` |
| `AUTH-EP8-0013` | ACS block or suspension | ACS signal or incident reporter | owner, Security, Governance as required | governed suspension authority unresolved | local gate can hold; production executor absent | owner, Accountability | local default-deny; broader suspension only if authorized | authorized owner/Governance | local implementation evidence without production grant | local only | `IMPLEMENTED_WITHOUT_AUTHORITY` |
| `AUTH-EP8-0014` | incident response | reporter, monitor, ACS, operator | Security and affected owners | incident authority by scope, not instantiated portfolio-wide | authorized responder | Accountability, affected owners | Security/emergency role within approved controls | incident authority after recovery evidence | EPIC-07 operating model; active roles unverified | partial model | `FORMALLY_GRANTED_NOT_ACTIVATED` |

## Agent Rule

Trinity, Morpheus, Agent Smith, and other agents are `CONSULTATIVE_ONLY` unless
a formal decision, compatible implementation, active permission, defined
boundary, and verifiable evidence all exist. ACS alerting is observational;
local default-deny behavior does not create production suspension authority.
