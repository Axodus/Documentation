---
schema_version: "1.0.0"
document_id: "ACADEMY-GDE-001"
aliases: []
document_type: "GUIDE"
title: "Academy Overview"
summary: "Provides the governed overview for Academy within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACADEMY"
authority_level: "CORE"
author: "Academy Nucleus"
owner: "Academy Nucleus"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACADEMY"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/academy/overview.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Academy Overview

---

## Purpose

Academy is the education, onboarding, certification, and token utility nucleus of Axodus.

## Scope

Academy covers Learn-to-Win, Proof of Knowledge, user education, tutor validation, course publishing, reward logic, and Marketplace integration.

## Ecosystem Role

Academy is the education and readiness layer for Axodus. It prepares users, tutors, DAO participants, and partners to understand product access, governance participation, marketplace activity, token utility, and risk before using advanced ecosystem workflows.

## Overview

Axodus Academy is not only a content library or a generic LMS. It is an ecosystem-level education engine that connects learning, user progression, Proof of Knowledge, Learn-to-Win, certifications, tutor and partner publishing, Marketplace commerce, and `$Neurons` utility.

Academy should teach users how to safely interact with DeFi, governance, trading, token utility, wallets, APIs, and marketplace flows before they access advanced ecosystem products.

## Responsibilities

- Educate users before advanced product access.
- Validate learning through assessments.
- Support certification.
- Coordinate tutor and course publishing.
- Define cautious token reward flows.
- Support reputation and readiness signals.
- Coordinate with Governance, Business, Marketplace, Tokenomics, ACS, Security, and Accountability.

## Inputs, Outputs, and Authority

Academy accepts learners, content, assessments, tutor contributions, and
qualification requirements. Its canonical outputs are learning progression,
assessment evidence, and scoped qualification records.

Academy does not automatically grant professional certification, governance
rights, identity assurance, anti-sybil proof, or token rewards. Each consuming
nucleus decides how an approved qualification is recognized. Economic effects
require separate Tokenomics, Treasury, contract, security, and authority gates.

## Architecture Layers

| Layer | Responsibility |
| --- | --- |
| Content | Courses, modules, lessons, tutorials, practical tasks, and product onboarding. |
| Access | Free, paid, token-gated, certification-gated, DAO, partner, or scholarship access. |
| Progression | Course progress, lesson completion, milestone tracking, and learning path status. |
| Assessment | Quizzes, tasks, Proof of Knowledge, anti-cheat checks, and validation requirements. |
| Reward | Reward eligibility, locked or unlocked status, claim status, and anti-farming controls. |
| Certification | Certificates, badges, reputation signals, and readiness indicators. |
| Marketplace | Course listings, pricing, payments, royalties, commissions, and tutor revenue. |
| Governance | Reward policy, tutor standards, marketplace policy, disputes, and alignment. |
| ACS | Course review assistance, risk detection, summarization, and abuse pattern detection. |

## User Types

Academy may serve learners, free-course learners, paid-course learners, tutors, companies, partners, DAO participants, marketplace buyers, reviewers, and ACS-assisted workflows.

## Documentation Map

- [Learn-to-Win](learn-to-win.md)
- [Proof of Knowledge](proof-of-knowledge.md)
- [Course Publishing](course-publishing.md)
- [Tutor Validation](tutor-validation.md)
- [Token Reward Flows](token-reward-flows.md)
- [Locked Rewards](locked-rewards.md)
- [Marketplace Integration](marketplace-integration.md)
- [Governance Alignment](governance-alignment.md)
- [Academy Risk](academy-risk.md)

## Runtime Summary

1. User enters a learning path.
2. Course or module is selected.
3. Access rules are checked.
4. User consumes content.
5. Progress is recorded.
6. Assessment or Proof of Knowledge is triggered.
7. Completion is validated.
8. Reward policy is checked.
9. Reward status is assigned according to policy and contracts.
10. Certification or reputation is updated.
11. Marketplace or platform utility is enabled if supported.
12. Accountability or reporting is updated if policy requires it.

## Risk Considerations

Academy reward flows may create abuse, farming, sybil, or expectation risk. Exact token behavior depends on implemented contracts.

## Current Status

Academy is documented as a draft nucleus. Features such as reward issuance, locked balances, marketplace settlement, certifications, reputation, and access gating require implementation and policy validation before they are described as active.
