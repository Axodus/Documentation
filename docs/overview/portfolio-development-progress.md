---
schema_version: "1.0.0"
document_id: "CORE-GDE-021"
aliases: []
document_type: "GUIDE"
title: "Portfolio Development Progress"
summary: "Explains the deterministic Axodus portfolio development baseline and its evidence boundaries."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "AXODUS"
authority_level: "PORTFOLIO"
author: "Axodus Core"
owner: "Axodus Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Portfolio Methodology Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-09-26"
last_updated: "2026-09-26"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-12-26"
supersedes: []
relationships: [{type: "RELATES_TO", target: "CORE-GDE-003"}]
related_epics: ["AXODUS-PORTFOLIO-REQ-01"]
related_requirements: []
related_adrs: []
related_cores: ["AXODUS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/overview/portfolio-development-progress.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Portfolio Development Progress

## Review status

The deterministic development-progress methodology is frozen as
`axodus-portfolio-development-progress/v1`. Its first calculated result is an
experimental baseline submitted for final CTO acceptance. The historical
56.8% value remains labelled as an editorial legacy comparison until that
acceptance is recorded. The number below is not a production-readiness,
financial-authority, or execution metric.

## Baseline under review

- Portfolio: 71.5633% internal; 71.6% displayed.
- ACS: 61.8000% internal; 61.8% displayed.
- Trading: 70.9000% internal; 70.9% displayed.
- Repository evidence inventory: 18 repositories.
- Canonical scoring population: 15 nuclei at equal exact weight `1/15`.
- Institutional remains included in the population.

The complete generated matrix, ACS and Trading traces, migration comparison,
validation record, and hashes are maintained in the local Axodus coordination
workspace under `.instructions/portfolio_progress_*`. The Documentation
Overview is a downstream reader and never a scoring input.

## What the score measures

The score aggregates capability states across Research, Requirements and Scope,
Architecture and Contracts, Implementation, Validation, Integration, Operational
Readiness, and Production Readiness. Each dimension has a frozen v1 weight.
Capability and program weights are explicit. Calculations use exact rational
arithmetic internally; rounding occurs only when displaying the result.

Missing evidence is distinct from `NOT_STARTED`. Ambiguous or conflicting
required evidence fails the calculation instead of being assigned a guessed
percentage. Blockers affect only their declared capabilities and dimensions.
Research, POCs, and provider evaluations do not automatically increase
implementation or integration progress.

## Evidence and limitations

The manifest records repository revisions, worktree fingerprints, capability
states, evidence paths and hashes, blockers, methodology hash, and input-manifest
hash. Reproduction does not require an LLM or network access.

All 18 repositories were inspected. AgentsAI, `.github`, and `.github-private`
provide coordination or supporting evidence and have no standalone program
weight. Institutional is scored from its repository evidence and remains in the
15-program denominator.

The current root coordination guide validator reports 57 marker/link defects.
They are classified as non-scoring quality defects under v1 because they are not
frozen product capability acceptance criteria. Generated Documentation reports
are outputs, not scoring inputs.

No production deployment, live trading, financial execution, wallet signing,
treasury movement, settlement, payout, minting, provider adoption, or on-chain
write is authorized by this score or its calculation.
