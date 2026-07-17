---
schema_version: "1.0.0"
document_id: "DOC-RPT-230"
aliases: []
document_type: "REPORT"
title: "EPIC-09 Control and Infrastructure Qualification Register"
summary: "Freezes substantive qualification decisions for ACS, Runtime, Treasury, Tokenomics, and Security."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_09"
authority_level: "PROJECT"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-09"]
related_requirements: ["DOCUMENTATION-EPIC-09-REQ-04"]
related_adrs: []
related_cores: ["ACS", "RUNTIME", "TREASURY", "TOKENOMICS", "SECURITY"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag/EPIC-09-CONTROL-INFRASTRUCTURE-QUALIFICATION-REGISTER.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# EPIC-09 Control and Infrastructure Qualification Register

| Decision ID | Path | Frozen Action | Required Substance | Status Decision | Residual Dependency | REQ-06 Eligibility |
| --- | --- | --- | --- | --- | --- | --- |
| `QUAL-EP9-CI-001` | `docs/acs/accountability.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-002` | `docs/acs/agent-smith.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-003` | `docs/acs/human-oversight.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-004` | `docs/acs/memory-and-knowledge.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-005` | `docs/acs/morpheus.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-006` | `docs/acs/risk-review.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-007` | `docs/acs/runtime.md` | `EDIT_FOR_SUBSTANCE` | components, state, enabled versus mock behavior, provider boundary, gates, failure and recovery | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-008` | `docs/acs/security-and-risk.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-009` | `docs/acs/tooling-and-mcp.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-010` | `docs/acs/trinity.md` | `EDIT_FOR_SUBSTANCE` | concrete control purpose, actors, decision rights, process, dependencies, status, limitations and exception behavior | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-011` | `docs/security/api-security.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-012` | `docs/security/disclosure-policy.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-013` | `docs/security/frontend-security.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-014` | `docs/security/overview.md` | `EDIT_FOR_SUBSTANCE` | purpose, controlled actors, inputs, outputs, authority, current activation state, limits | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-015` | `docs/security/smart-contract-security.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-016` | `docs/security/trading-api-security.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-017` | `docs/security/wallet-security.md` | `EDIT_FOR_SUBSTANCE` | assets or data at risk, control owner, validation limit, escalation, incident and recovery boundary | Retain `Canonical` only after qualification. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-018` | `docs/tokenomics/contract-dependencies.md` | `EDIT_FOR_SUBSTANCE` | conceptual utility, authorization dependency, issuance/distribution state, prohibited financial interpretation | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-019` | `docs/tokenomics/cross-chain-readiness.md` | `EDIT_FOR_SUBSTANCE` | conceptual utility, authorization dependency, issuance/distribution state, prohibited financial interpretation | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-020` | `docs/tokenomics/governance-participation.md` | `EDIT_FOR_SUBSTANCE` | conceptual utility, authorization dependency, issuance/distribution state, prohibited financial interpretation | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-021` | `docs/tokenomics/locked-rewards.md` | `EDIT_FOR_SUBSTANCE` | conceptual utility, authorization dependency, issuance/distribution state, prohibited financial interpretation | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-022` | `docs/tokenomics/marketplace-utility.md` | `EDIT_FOR_SUBSTANCE` | conceptual utility, authorization dependency, issuance/distribution state, prohibited financial interpretation | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |
| `QUAL-EP9-CI-023` | `docs/tokenomics/technical-architecture.md` | `EDIT_FOR_SUBSTANCE` | components, state, enabled versus mock behavior, provider boundary, gates, failure and recovery | Retain current label; no promotion. | `DEFER_TO_EPIC_10` | `ELIGIBLE_WITH_BOUNDARY` |

## Mandatory Boundaries

- ACS and agents remain advisory or observational unless formal authority, compatible implementation, and active permission coexist.
- Runtime pages distinguish mock/read-only, implemented-not-activated, and enabled execution.
- Treasury pages do not imply custody, signing, asset movement, settlement, or active reserves.
- Tokenomics pages do not imply active issuance, distribution, guaranteed utility, yield, return, or market value.
- Security documentation describes controls and validation requirements, never a security guarantee.
- Incident, suspension, recovery, provider, wallet, contract, and financial gaps remain `DEFER_TO_EPIC_10`.

