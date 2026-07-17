---
schema_version: "1.0.0"
document_id: "DOC-RPT-006"
aliases: []
document_type: "REPORT"
title: "Documentation Batch 01 Authority Evidence"
summary: "Records the approved governance default and candidate ownership evidence used to freeze Batch 01."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION.MIGRATION.BATCH_01.AUTHORITY"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-02"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "DOC-PLAY-001"}, {type: "DEPENDS_ON", target: "DOC-STD-002"}, {type: "DEPENDS_ON", target: "DOC-POL-001"}, {type: "RELATES_TO", target: "DOC-ADR-019"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-04"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["ACCOUNTABILITY", "ACADEMY", "ACS", "BBA_AGENCY", "BUSINESS", "DEFI", "DEX", "GOVERNANCE", "LOTTERY", "MARKETPLACE", "MINING", "RUNTIME", "SECURITY", "TOKENOMICS", "TRADING", "TREASURY"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-MIGRATION-PLAYBOOK.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-MIGRATION-CRITERIA.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Documentation Batch 01 Authority Evidence

## Decision

REQ-04 establishes this Batch 01 governance default:

| Responsibility | Assigned role |
|---|---|
| Batch coordinator and migration owner | Axodus Documentation Core |
| Technical review | Documentation Architecture Reviewer |
| Business/portfolio review | Portfolio Documentation Reviewer |
| Security and gate review | Security Reviewer |
| Approval | Documentation Coordinator |
| Derived-artifact verification | Generator Maintainer |

The assignments implement the approved roles in `DOC-PLAY-001`, the review threshold in `DOC-STD-002`, and logical authority in `DOC-POL-001`. They authorize candidate freeze only.

## Candidate Ownership Evidence

The legacy candidates explicitly declare these owner claims:

| Candidate family | Declared owner |
|---|---|
| Accountability | Accountability Nucleus |
| Academy | Academy Nucleus |
| ACS | ACS Nucleus |
| BBA Agency | Axodus BBA |
| Business | Axodus Business |
| DeFi | Axodus DeFi |
| DEX | Axodus DEX |
| Governance | Governance Nucleus |
| Lottery | Axodus Lottery / CryptoDraw |
| Marketplace | Axodus Marketplace |
| Mining | Axodus Mining |
| Runtime | Axodus Runtime |
| Security | Security |
| Tokenomics | Axodus Tokenomics |
| Trading | Axodus Trading |
| Treasury | Axodus Treasury |
| Transversal overview and alternates | Axodus Core |

These are explicit source claims, not folder-name or commit-author inference. REQ-05 MUST confirm each claim before promotion. A failed confirmation blocks that candidate and triggers alternate handling.

## Scope and Type Evidence

All 16 public scopes and reserved `CORE` scope resolve in `DOC-STD-002`. `GDE` is allowed by `PUBLIC_CORE_STANDARD`. No final number is allocated or reserved.

## Security Evidence

A path-scoped lexical review of the 24 frozen files found no candidate requiring `BLOCKED_SECURITY`. No value or document content was copied into this evidence.

This finding is not a credential guarantee. REQ-05 requires security review and redacted handling before any source edit.

## Authority Boundary

Freeze means that path, order, proposed scope/type pattern, review roles, and likely relation target are stable for execution preparation. It does not approve content claims, publication status, canonical metadata, final IDs, migration, or registry removal.
