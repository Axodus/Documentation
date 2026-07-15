---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-010"
aliases: []
document_type: "GUIDE"
title: "Plugin Requests"
summary: "Defines the Business intake and routing baseline for plugin requests within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "BUSINESS"
authority_level: "CORE"
author: "Axodus Business / Governance"
owner: "Axodus Business / Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}, {type: "RELATES_TO", target: "BUSINESS-GDE-007"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/plugin-requests.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Plugin Requests

## Purpose

Custom governance plugins are a major DAO service request type. A DAO may need a specific voting model, eligibility rule, execution module, reporting extension, federation registry feature, or local governance workflow.

Business receives the request, ACS analyzes it, Governance validates it, technical teams scope it, Security reviews it where needed, and only then can implementation or activation proceed.

## Scope

This page covers plugin requests that originate through Business. Governance-level plugin policy is documented separately in [Governance Plugin Requests](../governance/plugin-requests.md).

## Plugin Types

- Voting plugins: quadratic voting, reputation voting, token-weighted variants, delegated voting extensions, or DAO-specific voting rules.
- Eligibility plugins: token thresholds, membership status, credentials, certificates, or DAO roles.
- Execution plugins: treasury execution, contract call execution, timelock execution, or multisig bridges.
- Reporting plugins: execution receipts, governance metrics, or treasury snapshots.
- Federation plugins: DAO status registry, product access checks, or constitutional alignment records.
- Local workflow plugins: DAO-specific proposal flows, board reviews, or community workflows.

## Required Intake Fields

Plugin requests should capture requesting DAO, requester authority, plugin description, plugin type, governance problem, local/shared/global scope, affected DAO or DAOs, voting or execution logic, eligibility rules, product access impact, treasury impact, security impact, chain or network, governance framework, integration requirements, desired timeline, review expectations, rollback or disable requirements, and documentation needs.

## Flow

1. DAO or internal team submits plugin need through Business.
2. Business validates DAO context, authority, and basic requirements.
3. ACS classifies type, scope, risk, and missing information.
4. Business checks whether the plugin affects official Axodus flows.
5. Constitutional alignment review verifies that the plugin does not bypass guardrails.
6. Governance routes the request to the appropriate approval path.
7. Technical scoping defines contract, frontend, backend, indexer, registry, or documentation requirements.
8. Security review plan defines threat model, tests, and audit needs where applicable.
9. Implementation authorization approves build scope or rejects the request.
10. Development, testing, validation, activation, registry update, documentation update, and execution receipt occur under approved scope.

## Scope Types

- Local: valid only for the requesting DAO.
- Shared: may be reused by multiple DAOs.
- Global: affects Axodus core governance.
- Experimental: limited pilot or test.
- Deprecated: no longer recommended.

A local need must not become a global plugin without governance review.

## Review Criteria

Review should consider functional clarity, constitutional alignment, security model, governance authority, operational maintainability, monitoring, rollback path, and registry status.

## Risk Flags

Risk flags include voting power manipulation, treasury execution risk, permission overreach, unclear scope, governance capture, audit gaps, registry gaps, and missing execution receipts.

## Business Boundaries

Business can receive plugin requests, structure scope, coordinate review, prepare Coder tasks, and communicate status. Business cannot approve high-risk plugins alone, bypass governance, bypass security review, declare a plugin official without authority, or deploy a plugin without approved scope.

## Related Pages

- [DAO Service Requests](dao-service-requests.md)
- [Governance Alignment](governance-alignment.md)
- [Governance Plugin Requests](../governance/plugin-requests.md)
- [Smart Contract Security](../security/smart-contract-security.md)
