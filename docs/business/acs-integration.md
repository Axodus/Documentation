---
schema_version: "1.0.0"
document_id: "BUSINESS-GDE-008"
aliases: []
document_type: "GUIDE"
title: "ACS Integration"
summary: "Defines how Business consumes ACS analysis and support within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "BUSINESS"
authority_level: "CORE"
author: "Axodus Business / ACS"
owner: "Axodus Business / ACS"
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
relationships: [{type: "RELATES_TO", target: "BUSINESS-GDE-001"}, {type: "RELATES_TO", target: "ACS-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/business/acs-integration.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Integration

## Purpose

Business is expected to be one of the largest ACS consumers. ACS supports request analysis, classification, risk detection, missing information extraction, scoping, governance routing, implementation handoff, change request review, and accountability drafting.

ACS does not replace the Business owner.
Business consumes ACS capabilities as operational support. It does not
provision ACS authority, and ACS support remains review-bound until validated
through the correct Business, governance, security, treasury, or domain path.

## Scope

This page defines how Business may use ACS outputs and where human, governance, security, treasury, or domain review remains required.

## Support Areas

ACS may support:

- request analysis;
- domain and risk classification;
- scoping and acceptance criteria drafts;
- governance route suggestions;
- risk review and claim checks;
- delivery handoffs and Coder task generation;
- change request analysis;
- delivery reporting and accountability notes.

## Business Flow

1. Business receives raw request.
2. ACS generates structured summary.
3. ACS extracts required fields and missing information.
4. ACS classifies domain, risk, responsible nucleus, and governance touchpoints.
5. ACS drafts scope questions, governance briefs, or handoff material.
6. Business owner reviews and corrects ACS output.
7. Validated output moves to scope, governance, security review, delivery, or archive.
8. ACS assists change requests and reporting.
9. Validated learning may update knowledge packs.

## Output Types

Business ACS outputs may include intake summaries, risk classifications, scope drafts, governance briefs, Coder handoffs, change request analyses, delivery reports, and accountability notes.

## Agent Roles

- Morpheus supports strategic fit, governance alignment, narrative clarity, and public-language review.
- Trinity supports operational risk, metrics, monitoring, financial context,
  and trading or P&L-related analysis where relevant. Trinity remains an
  analytical support surface consumed by Business, not an institutional
  decision-maker or direct authority replacement.
- Agent Smith supports adversarial review, scope creep detection, abuse detection, unsafe-claim review, and permission-risk challenge.

## Review Requirements

Low-risk requests may require Business owner review. Medium-risk requests should include domain owner review. High-risk requests may require Business, domain, adversarial, governance, or security review. Critical requests require mandatory human review and the appropriate governance, security, treasury, or authority layer.

## Boundaries

ACS can summarize, classify, draft, flag, recommend, compare, and generate tasks. ACS cannot commit to client terms, approve budgets, approve governance-sensitive changes, guarantee delivery timeline, promise token or trading outcomes, execute sensitive actions without review, or replace the Business owner.

ACS output is not a client commitment until reviewed and approved through the correct Business or governance path.

## Risk Flags

Business should watch for ACS misclassification, client commitment risk, overcompressed summaries, missed governance triggers, unverified claims, and stale memory.

## Related Pages

- [ACS Overview](../acs/overview.md)
- [ACS Runtime](../acs/runtime.md)
- [ACS Security and Risk](../acs/security-and-risk.md)
- [Business Runtime](runtime.md)
