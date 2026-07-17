---
schema_version: "1.0.0"
document_id: "DOC-RPT-158"
aliases: []
document_type: "REPORT"
title: "EPIC-07 Source Register"
summary: "Freezes the source classes, repository revisions, and authority limits used by the EPIC-07 canonical truth inventory."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_07"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
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
related_requirements: ["DOCUMENTATION-EPIC-07-REQ-01"]
related_adrs: []
related_cores: ["DOCUMENTATION", "GOVERNANCE", "BUSINESS", "ACADEMY", "MARKETPLACE", "ACS", "TRADING", "MINING", "LOTTERY", "TREASURY", "TOKENOMICS", "RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-07-SOURCE-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-07 Source Register

## Source Classes

| Source Class | Permitted Use | Authority Limit |
| --- | --- | --- |
| `IMPLEMENTATION_EVIDENCE` | Verify committed behavior, interfaces, guards, and tests. | Does not prove deployment, activation, legal approval, or operational use. |
| `FORMAL_APPROVED_DECISION` | Define authority, activation, policy, and approved direction. | Applies only to its explicit scope and effective state. |
| `OWNER_CANONICAL_CONTEXT` | Define identity, product intent, operating interpretation, and future direction. | Cannot promote implementation, production, legal, security, or financial state. |
| `PRIVATE_CANONICAL_ARCHITECTURE` | Reconstruct private architecture and identify public-safe abstractions. | Private content is not copied or published automatically. |
| `DOCUMENTATION_CANONICAL` | Represent the current governed public corpus. | May be incomplete or contradicted by stronger evidence. |
| `INSTITUTIONAL_PUBLIC_REFERENCE` | Control vocabulary, claims, and public boundaries. | No authority transfer to Documentation. |
| `AUTHORITY_PENDING_REFERENCE` | Identify candidate semantics from `.knowledge/`. | Cannot resolve a fact or contradiction. |
| `LEGACY_CONTEXT_ONLY` | Recover history and earlier intent. | Never current truth by itself. |
| `INFERENCE` | Record an explicit analytical hypothesis. | Must not be published as fact. |

## Repository Snapshot

| Repository | Branch | Frozen Revision | State | Primary Evidence Scope |
| --- | --- | --- | --- | --- |
| `Axodus/Documentation` | `main` | `92414416920f4815f32eb34b46d8c8bcbf7a2cc8` | `CLEAN` | Public corpus, governed decisions, private disclosure controls |
| `Axodus/Institutional` | `main` | `b921dace4d6be81b2233e09981108a6b29794e70` | `CLEAN` | Public terminology and disclosure reference |
| `Axodus/Core` | `dev` | `0ea725a00fd8dd695e1414fe13554b81b618862a` | `CLEAN` | Portfolio-level architecture context |
| `Axodus/Business` | `dev` | `ea33a57536b6487892466526f13afb1a2d57a973` | `CLEAN` | Intake, workflow, review, state, and bridge prototypes |
| `Axodus/ACS` | `dev` | `a7b99f11fd12ebc16b1f483ba5aa6cae265984c7` | `CLEAN` | Agent runtime, policy, gates, signals, and receipts |
| `Axodus/Academy` | `dev` | `fa8e60daae1ca87eda2dc1df4bd6fe8a833b17fa` | `CLEAN` | Academy and Proof of Knowledge model |
| `Axodus/Marketplace` | `dev` | `54b740bcc4d1847b39f024080ad4ecafb23de7ae` | `CLEAN` | Marketplace product and distribution surfaces |
| `Axodus/Governance` | `dev` | `bf64e3b6e15f8aec9ae42cb06e90d3423844ec95` | `CLEAN` | Governance architecture and decision surfaces |
| `Axodus/DAOs` | `develop` | `3391103197a7b5f85b6a99164eeda6ae01364d17` | `CLEAN` | Historical DAO implementation context |
| `Axodus/Trading` | `dev` | `e84785741f2523f66c9eaab9059d3f4c6a1c1f42` | `CLEAN` | Trading prototype and risk gates |
| `Axodus/Mining` | `dev` | `2bb90554cf2758c675cdb8a8129eddcaf3cb7bda` | `CLEAN` | Mining prototype and operational boundaries |
| `Axodus/Lottery` | `dev` | `4ae87fd0afe360aae32abe388e57e10bdf657531` | `CLEAN` | Lottery prototype and release boundaries |
| `Axodus/CryptoDraw` | `develop` | `ffb5112dd5c23dc1812dba6e9c97813e71a4e8f7` | `CLEAN` | Historical draw implementation context |
| `Axodus/Defi` | `dev` | `9c75aeeb7e2a572e72e38303e9fa3cece2e96b98` | `CLEAN` | DeFi architecture and prototype controls |
| `Axodus/Dex` | `dev` | `a20ac75c9dcfda604cbc8453b5759aa561741f48` | `CLEAN` | DEX implementation and execution boundaries |
| `Axodus/AlgoTradingToken` | `main` | `d20b5e27bafa3abe4e2cd5069fced0d8a7199b77` | `CLEAN` | Token contract context, not active-token proof |
| `Axodus/VestingLiquidity` | `main` | `0ed2e77a43b9a322638409e840b206f58c01b43b` | `CLEAN` | Vesting and liquidity implementation context |
| `Axodus/AxodusAPP` | `dev` | `d9ad13cb738fc0547fbdc0cccfbff8932d19517b` | `CLEAN` | Read-only portfolio and interface implementation |
| `Axodus/mcp` | `main` | `836f9351d48e5c293eaad3ffa16b55fa7bad1a98` | `CLEAN` | MCP integration context |

## Reading Rule

Committed source code may verify represented behavior. Repository existence,
fixtures, mocks, tests, or generated builds do not independently verify active
deployment or operational use.
