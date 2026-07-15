---
schema_version: "1.0.0"
document_id: "ACADEMY-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Proof of Knowledge"
summary: "Defines Proof of Knowledge as scoped prototype learning or qualification evidence without automatic certification, governance, identity, or token effects."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACADEMY.PROOF_OF_KNOWLEDGE"
authority_level: "CORE"
author: "Axodus Academy"
owner: "Axodus Academy"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "ACADEMY-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-07"]
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-07"]
related_adrs: []
related_cores: ["ACADEMY", "GOVERNANCE", "TOKENOMICS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/academy/proof-of-knowledge.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Proof of Knowledge

Proof of Knowledge (PoK) is a proposed model for recording scoped learning,
assessment, or qualification evidence. It allows an authorized consumer to
understand what was assessed, by whom, under which criteria, and for what
purpose.

PoK is not assumed to be a cryptographic proof protocol. A PoK record does not
automatically prove identity, prevent sybil behavior, confer professional
certification, grant governance rights, authorize token issuance, or guarantee
safe financial behavior.

## Conceptual Cycle

1. A participant enters an authorized learning path.
2. The Academy records progression and assessment requirements.
3. A learner submits the required evidence.
4. An authorized assessment process evaluates the evidence.
5. A human or governed reviewer validates the result where required.
6. A scoped PoK record identifies the achievement, evidence, issuer, status,
   limitations, and applicable use.
7. A consuming nucleus independently decides whether that record satisfies its
   eligibility policy.

## Required Record

A PoK record should identify participant reference, learning path, assessment,
criteria version, evidence reference, result, reviewer or issuer, issue date,
scope, limitations, status, and revocation or expiry behavior when applicable.

## Authority and Economic Boundary

Academy may define and operate an approved learning assessment. Governance,
employers, tenants, products, and other consumers retain authority over how they
recognize the result.

Any reward, Neurons issuance, distribution, access right, or governance effect
requires a separate Tokenomics, Treasury, contract, security, and authority
decision. PoK alone cannot trigger an economic effect.

## Current Status

The educational intent is defined, but the complete protocol, assessment
authority, certification recognition, revocation model, anti-abuse guarantees,
and enabled reward behavior remain incomplete.
