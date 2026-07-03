---
schema_version: "1.0.0"
document_id: "DOC-ADR-021"
aliases: []
document_type: "ADR"
title: "Exception Expiry Disposition Governance"
summary: "Proposes evidence-backed dispositions and risk-capped renewal for expiring documentation exceptions."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EXCEPTIONS"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-03"
last_updated: "2026-07-03"
last_reviewed: "2026-07-03"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-POL-006"}, {type: "RELATES_TO", target: "DOC-ADR-018"}, {type: "DOCUMENTS", target: "DOC-SPEC-008"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-01"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019", "DOC-ADR-020"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "DOCUMENTATION-EXCEPTION-POLICY.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "DOCUMENTATION-EXCEPTION-DISPOSITION-MODEL.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# DOC-ADR-021 — Exception Expiry Disposition Governance

## Status

PROPOSED

## Context

The 573 active `MIGRATE_ON_CHANGE` exceptions share an expiry of
`2026-10-01T00:00:00Z`. The current policy defines renewal and revocation
mechanics but does not provide a portfolio-wide decision taxonomy or renewal
duration cap.

## Problem

Axodus needs explicit, auditable decisions for every remaining exception
without automatically renewing all debt, forcing unsafe migration, or allowing
expired exceptions to remain tolerated.

## Alternatives Considered

1. Renew all exceptions automatically.
2. Force migration of all exceptions before expiry.
3. Define evidence-backed dispositions with risk-capped renewal.
4. Leave expired exceptions active until their source changes.

## Proposed Decision

Adopt one evidence-backed primary disposition per exception:
`MIGRATE`, `RENEW_EXCEPTION`, `REVOKE_EXCEPTION`, `ARCHIVE_LEGACY`,
`MERGE_DUPLICATE`, `SECURITY_REVIEW`, `AUTHORITY_REVIEW`, or
`DEFER_WITH_RISK`.

P0/P1 renewals and temporary review extensions are capped at 90 days.
Lower-priority cases are capped at 180 days. Every extension requires current
justification, owner and approver confirmation, safe evidence, and a resolution
deadline.

A review or deferred decision does not silently extend expiry. Revocation must
be paired with corrective governance and cannot leave an ungoverned baseline
deviation.

## Justification

The proposed model distinguishes decision from execution, directs risk to the
correct authority, prevents blanket renewal, and retains the immutable
exception identity and baseline evidence established by existing policy.

## Trade-offs

- Reviewing 573 decisions is operationally expensive.
- Temporary extensions may still be necessary for blocked cases.
- New disposition metadata may require a future compatible registry version.
- Risk-based caps require consistent priority evidence.

## Compatibility

REQ-01 does not change the registry, Validation Framework, exception policy, or
Documentation Schema 1.0.0. Until separately approved and implemented, current
entries retain `MIGRATE_ON_CHANGE`.

## Future Impacts

Approval would require a governed inventory, registry compatibility decision,
validation rules, deterministic reporting, migration scheduling, and closure
checks for zero expired-undecided exceptions.

## Gate Preservation

Disposition governance cannot authorize production, publication, provider
execution, credentials, financial operations, signing, contracts, APIs, or
databases.
