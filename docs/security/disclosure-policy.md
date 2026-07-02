---
schema_version: "1.0.0"
document_id: "SEC-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Disclosure Policy"
summary: "Provides governed disclosure policy guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "SECURITY"
authority_level: "CORE"
author: "Security"
owner: "Security"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-06-05"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "SEC-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-07"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["SECURITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/security/disclosure-policy.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Disclosure Policy

---

## Purpose

This document defines the draft responsible disclosure boundary for Axodus security issues. It is not a public bug bounty program, legal commitment, audit statement, or production incident response policy.

## Disclosure Status

Responsible disclosure handling is planned and requires coordinator and security approval before it can be treated as an official public process.

Until an approved contact and process exist:

- do not publish a bug bounty amount;
- do not promise response times;
- do not claim audit coverage;
- do not provide exploit reproduction steps publicly;
- do not expose private keys, credentials, endpoints, wallet procedures, or infrastructure details;
- route sensitive findings through the approved coordinator/security channel when one is documented.

## Current Contact

Security contact:

`Pending coordinator/security approval`

REQ-07 does not create a public intake address. A future security/publication request must confirm the official contact before publication.

## Guardrails

Do not publish fake emails, bug bounty claims, audit claims, or legal commitments.

## Reporter Guidance

Reports should be handled conservatively and should include only safe metadata unless an approved private intake process exists:

- affected area or product;
- non-sensitive description;
- severity estimate;
- reproduction summary without secrets;
- safe screenshots or logs with sensitive values removed;
- contact path once approved.

Do not include seed phrases, private keys, bearer tokens, API keys, passwords, production RPC secrets, wallet signing instructions, or exploitable operational details in public documentation.

## Review Requirements

Publication of this page requires:

- Security review;
- Coordinator approval;
- legal/compliance review if bounty, liability, or reporting commitments are added;
- confirmation that the contact path is active and monitored.
