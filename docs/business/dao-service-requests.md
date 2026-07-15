---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-009"
aliases: []
document_type: "GUIDE"
title: "DAO Service Requests"
summary: "Defines the intake and delivery baseline for DAO-facing Business requests within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "BUSINESS"
authority_level: "CORE"
author: "Axodus Business"
owner: "Axodus Business"
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/dao-service-requests.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DAO Service Requests

## Purpose

DAOs and sub-DAOs may request tools, workflows, plugins, dashboards, automations, training, reports, or product access through Axodus Business.

Business is the structured entry point. ACS assists analysis, Governance validates sensitive items, and delivery teams execute approved scopes.

## Scope

This page covers DAO-facing requests related to Axodus services, governance infrastructure, product access, federation support, reporting, automation, training, and integrations.

## Request Types

- Governance plugins: custom voting, eligibility, execution, reporting, federation, or local workflow extensions.
- Dashboards: proposal, treasury, member, federation status, or governance metrics dashboards.
- Reporting: governance reports, financial reports, treasury snapshots, accountability records, or execution receipt summaries.
- Product access: access to Axodus products, Marketplace tools, Academy paths, Trading tools, or DaaS services.
- Automation: proposal notifications, recurring reports, ACS summaries, or governance monitoring.
- Training: governance, proposal creation, treasury risk, or Academy DAO learning paths.
- Consulting: DAO structure review, governance process design, risk review, or tokenomics review.
- Integration: DAO tooling connected to Axodus registries, wallets, contracts, APIs, or indexers.

## DAO Intake Fields

DAO requests should capture DAO name, representative, authority or mandate, chain or network, governance framework, current status, federation status if any, constitutional alignment status if any, requested service type, objective, operational problem, technical requirements, governance requirements, treasury impact, product access requested, plugin or integration requirements, risk context, timeline, funding model, and acceptance criteria.

## Request Flow

1. DAO submits request through Business intake.
2. Business validates authority and context.
3. ACS classifies request type, risk, missing information, and governance touchpoints.
4. Business checks constitutional alignment and federation implications.
5. Governance review is triggered when required.
6. Business defines scope, boundaries, dependencies, and acceptance criteria.
7. Technical and security review occurs when needed.
8. Delivery executes the approved scope.
9. DAO and Axodus validate the output.
10. Registry, documentation, or product access records are updated when applicable.
11. Material outcomes are recorded for accountability.

## Federation Relationship

DAO service requests may depend on federation status. Product access may require constitutional alignment. Custom plugins may be local to a DAO, but official Axodus integration requires traceability and governance review.

Business must not grant official Axodus status, federation status, or product access without the required governance record.

## Outputs

Possible outputs include plugin scopes, dashboard specifications, report packages, training packages, integration plans, governance proposals, execution receipts, and accountability notes.

## Risk Flags

Risk flags include unclear DAO authority, unknown constitutional alignment, plugin security risk, treasury risk, product access risk, governance capture risk, data privacy risk, and brand risk.

## Related Pages

- [Plugin Requests](plugin-requests.md)
- [Governance Alignment](governance-alignment.md)
- [DAO Federation](../governance/dao-federation.md)
- [ACS Integration](acs-integration.md)
