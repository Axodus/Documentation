---
schema_version: "1.0.0"
document_id: "DOC-RPT-166"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Participant and Tenant Model"
summary: "Freezes participant classes, tenant semantics, responsibility boundaries, and agent participation in Axodus."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PORTFOLIO"
author: "Axodus Documentation Core"
owner: "Axodus Core"
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
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-02"]
related_adrs: []
related_cores: ["GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-PARTICIPANT-AND-TENANT-MODEL.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Participant and Tenant Model

## Participant Classes

| Class | Examples | Permitted Role | Authority Limit |
| --- | --- | --- | --- |
| Individual participant | learner, client, buyer, contributor, operator | Submit needs, learn, contribute, consume authorized products, provide review. | No institutional authority by participation alone. |
| Organization | company, protocol, blockchain, partner | Request work, provide assets, sponsor initiatives, integrate under contract or policy. | Cannot bypass governance, security, privacy, or financial gates. |
| Community | ecosystem or public-interest group | Propose community infrastructure and coordinate requirements. | Community demand does not automatically authorize execution or funding. |
| DAO or subDAO | federated DAO, local DAO | Propose and decide within recognized scope. | Authority is bounded by constitution, federation, policy, and treasury constraints. |
| Tenant | bounded local governance domain | Maintain local participants, services, policy, and decisions within delegated scope. | Not generic SaaS tenancy; no authority outside the delegated domain. |
| Internal Axodus team | product, operations, engineering, documentation | Initiate strategic work and operate within assigned responsibility. | Internal origin does not skip the common review pipeline. |
| Human authority or reviewer | owner, approver, governance, security, legal, treasury reviewer | Validate, approve, reject, suspend, or escalate within assigned authority. | Must not approve outside role or evidence. |
| Agent or MCP | Trinity, Morpheus, Agent Smith, specialized service | Analyze, classify, draft, inspect, signal, or assist within capability and policy. | No inherent institutional, financial, legal, or production authority. |
| External provider | chain, exchange, cloud, custody, identity, payment, data service | Supply an authorized dependency. | Provider presence or connector code does not mean activation. |

## Tenant Freeze

`Tenant` means a bounded local governance domain operating under shared
constitutional and portfolio constraints. It may own local policy, members,
services, records, and delegated decisions. It does not mean a conventional
software account, isolated customer database, or unrestricted autonomous DAO.

Public Documentation should introduce the term only where local governance
scope is material. Otherwise, use the more precise existing terms such as
`local DAO`, `federated DAO`, `community`, or `organization`.

## Responsibility Rules

- Internal and external demand use the same conceptual qualification pipeline.
- Participants may trigger work but do not thereby authorize it.
- Humans remain accountable for sensitive review and acceptance.
- Agents can recommend and signal; they cannot self-grant authority.
- Tenant autonomy is local and bounded.
- Data access follows minimum necessary scope and applicable privacy controls.
