---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-007"
aliases: []
document_type: "GUIDE"
title: "Governance Alignment"
summary: "Defines the governance routing and authority boundaries for Business-managed work within the Axodus documentation corpus."
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
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}, {type: "RELATES_TO", target: "GOV-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/governance-alignment.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Governance Alignment

## Purpose

Business must operate inside Axodus Governance because many Business requests affect DAOs, treasury, tokenomics, Marketplace policy, Academy rewards, Trading products, ACS permissions, governance plugins, product access, constitutional alignment, or public claims.

Business is the gateway, not the final authority, for governance-sensitive
requests. It operationalizes approved scope and prepares governance context,
but it does not create institutional authority by itself.

## Scope

This page defines governance-sensitive Business request types, routing levels, constitutional alignment checks, review outputs, reason codes, and Business boundaries.

## Governance-Sensitive Requests

Business must identify and route requests involving:

- DAO federation status, product access, or registry updates;
- governance plugins, voting rules, eligibility rules, execution modules, or local workflows;
- treasury allocation, reporting, revenue distribution, or financial exposure;
- tokenomics, reward policy, locked rewards, unlock rules, utility, or emissions;
- Learn-to-Win rewards, certification power, tutor policy, or Academy partner programs with rewards;
- Marketplace fees, payment assets, locked reward usage, or seller rules;
- Trading strategy access, treasury trading, risk policy, or API key policy;
- ACS agent permission expansion, MCP tools with sensitive authority, or autonomous workflow authority;
- material public claims about Axodus, audits, partnerships, tokenomics, governance, treasury, or product status.

## Routing Levels

- No governance required: low-risk documentation or internal non-sensitive process updates.
- Governance visibility: moderate process changes or non-sensitive public updates.
- Governance review: DAO policy impact, Marketplace fee changes, reward policy updates, or product policy changes.
- Formal proposal: treasury action, plugin deployment, federation status, or tokenomics change.
- High-level review: constitutional exceptions, critical security or treasury issues, or ACS authority expansion.

## Business Governance Flow

1. Business receives the request.
2. ACS or Business owner classifies governance sensitivity.
3. Missing governance context is collected.
4. Responsible governance layer is identified.
5. Governance brief is prepared.
6. Request is paused or limited until review if required.
7. Governance decision is recorded.
8. Scope is updated based on the decision.
9. Delivery continues only within approved scope.
10. Accountability record is created when material.

## Constitutional Alignment

Business should check whether a request aligns with Axodus principles, preserves transparency, requires treasury visibility, creates user or market risk, attempts to bypass governance, makes false or unverified claims, or affects federation or product access.

Outcomes may be `Aligned`, `Conditionally Aligned`, `Needs Review`, or `Not Aligned`.

## Governance Review Outputs

Governance may return `Approved`, `Approved With Conditions`, `Rejected`, `Needs Revision`, `Deferred`, or `Escalated`. Business must respect these outcomes and update scope accordingly.

## Reason Codes

Common reason codes include `GOVERNANCE_REVIEW_REQUIRED`, `DAO_AUTHORITY_UNCLEAR`, `CONSTITUTIONAL_ALIGNMENT_REQUIRED`, `TREASURY_REVIEW_REQUIRED`, `TOKENOMICS_REVIEW_REQUIRED`, `PLUGIN_SECURITY_REVIEW_REQUIRED`, `ACS_PERMISSION_REVIEW_REQUIRED`, and `PUBLIC_CLAIM_REVIEW_REQUIRED`.

## Business Boundaries

Business can receive requests, structure context, prepare scopes, coordinate reviews, communicate status, and execute approved scope. Business cannot approve DAO federation alone, approve treasury actions, approve tokenomics changes, approve high-risk plugins, approve sensitive ACS permissions, claim governance approval before a decision, or ignore rejection and conditions.

## Related Pages

- [Governance Overview](../governance/overview.md)
- [DAO Federation](../governance/dao-federation.md)
- [Proposal Lifecycle](../governance/proposal-lifecycle.md)
- [Treasury Overview](../treasury/overview.md)
- [Tokenomics Overview](../tokenomics/overview.md)
