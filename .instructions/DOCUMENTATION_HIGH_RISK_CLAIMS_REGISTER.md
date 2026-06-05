# Documentation High-Risk Claims Register

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Scope

This register summarizes sensitive claim categories found by static keyword inspection. It intentionally does not copy long source passages or secret-like values. REQ-06 does not approve claims or authorize publication.

## Summary

| Metric | Result |
|---|---:|
| Claim categories detected | 17 |
| High/critical review categories | 11 |
| Critical blockers found by representative review | 0 |
| Secret leakage findings in docs Markdown | 0 |

Security review note:

A read-only security/editorial BUB review scanned 248 Markdown files under `docs/` and found no obvious fake audit/production-ready claim in sampled red flags and no secret-like values in the safe leakage scan. The same review confirmed broad high-sensitivity coverage requiring review before publication.

## BUB Review Category Summary

| Category | Files | Risk | Notes |
|---|---:|---|---|
| Financial/APY/returns/profit | 125 | HIGH | Mostly framed with not-guaranteed and review language, but still sensitive. |
| Treasury/tokenomics/rewards | 215 | HIGH | Requires source-of-truth and policy review before public finalization. |
| Governance/DAO authority | 220 | HIGH | Authority language must match governance records. |
| Security/audit/production readiness | 89 | HIGH | No obvious fake audit or production-ready claim found in sampled red flags. |
| Wallet/on-chain execution | 119 | HIGH | Conceptual in samples, but execution checklists need security review. |
| Trading/swaps/payouts/settlement/bridges | 226 | HIGH | Strong review requirement before publication. |
| Legal/compliance | 111 | HIGH | Pages generally state they are not legal advice. |
| Credentials/API keys/private keys | 32 | HIGH | No secret-like values found in safe leakage scan. |

## Claims Register

| Claim ID | File | Category | Claim Summary | Risk | Evidence Needed | Required Review | REQ-07 Action |
| -------- | ---- | -------- | ------------- | ---- | --------------- | --------------- | ------------- |
| DOC-CLAIM-001 | 37 pages: docs/bba-agency/claim-review.md, docs/bba-agency/risk-and-compliance.md, docs/business/bba.md, docs/defi/academy-and-user-education.md, docs/defi/acs-integration.md, docs/defi/architecture.md, docs/defi/compliance-and-disclosures.md, docs/defi/daas.md, ... | APY | Mentions APY terminology across 37 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-002 | 102 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/marketplace-integration.md, docs/academy/proof-of-knowledge.md, docs/academy/token-reward-flows.md, docs/acs/trinity.md, ... | return guarantees | Mentions return guarantees terminology across 102 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-003 | 106 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, docs/academy/token-reward-flows.md, docs/accountability/financial-reports.md, docs/acs/trinity.md, ... | investment performance | Mentions investment performance terminology across 106 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-004 | 188 pages: docs/academy/course-publishing.md, docs/academy/marketplace-integration.md, docs/accountability/financial-reports.md, docs/accountability/overview.md, docs/acs/agent-roles.md, docs/acs/agent-smith.md, docs/acs/architecture.md, docs/acs/business-integration.md, ... | treasury | Mentions treasury terminology across 188 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-005 | 156 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/token-reward-flows.md, ... | tokenomics | Mentions tokenomics terminology across 156 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-006 | 212 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, ... | governance authority | Mentions governance authority terminology across 212 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | GOVERNANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-007 | 63 pages: docs/academy/locked-rewards.md, docs/accountability/overview.md, docs/acs/agent-smith.md, docs/acs/architecture.md, docs/acs/human-oversight.md, docs/acs/overview.md, docs/acs/risk-review.md, docs/acs/runtime.md, ... | audits | Mentions audits terminology across 63 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | MULTI_REVIEW | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-008 | 166 pages: docs/academy/academy-risk.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, docs/academy/token-reward-flows.md, ... | security guarantees | Mentions security guarantees terminology across 166 page(s). | MEDIUM | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | SECURITY | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-009 | 107 pages: docs/academy/governance-alignment.md, docs/accountability/roadmap-updates.md, docs/acs/agent-roles.md, docs/acs/business-integration.md, docs/acs/memory-and-knowledge.md, docs/acs/risk-review.md, docs/acs/security-and-risk.md, docs/acs/tooling-and-mcp.md, ... | production readiness | Mentions production readiness terminology across 107 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | MULTI_REVIEW | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-010 | 39 pages: docs/academy/academy-risk.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, docs/academy/token-reward-flows.md, docs/academy/tutor-validation.md, docs/acs/tooling-and-mcp.md, ... | wallet execution | Mentions wallet execution terminology across 39 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | SECURITY | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-011 | 166 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, ... | on-chain execution | Mentions on-chain execution terminology across 166 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | SECURITY | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-012 | 165 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, ... | trading | Mentions trading terminology across 165 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-013 | 96 pages: docs/academy/academy-risk.md, docs/business/dao-service-requests.md, docs/business/plugin-requests.md, docs/business/service-catalog.md, docs/defi/academy-and-user-education.md, docs/defi/acs-integration.md, docs/defi/architecture.md, docs/defi/compliance-and-disclosures.md, ... | swaps | Mentions swaps terminology across 96 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | MULTI_REVIEW | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-014 | 147 pages: docs/academy/academy-risk.md, docs/academy/course-publishing.md, docs/academy/governance-alignment.md, docs/academy/learn-to-win.md, docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/academy/proof-of-knowledge.md, ... | payouts | Mentions payouts terminology across 147 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-015 | 47 pages: docs/academy/locked-rewards.md, docs/academy/marketplace-integration.md, docs/academy/overview.md, docs/dex/academy-and-user-education.md, docs/dex/architecture.md, docs/dex/marketplace-integration.md, docs/dex/overview.md, docs/dex/tokenomics-alignment.md, ... | settlement | Mentions settlement terminology across 47 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | FINANCIAL_COMPLIANCE | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-016 | 24 pages: docs/business/plugin-requests.md, docs/defi/academy-and-user-education.md, docs/defi/architecture.md, docs/defi/governance-alignment.md, docs/defi/overview.md, docs/defi/protocol-model.md, docs/defi/risk-management.md, docs/defi/security-and-smart-contracts.md, ... | bridges | Mentions bridges terminology across 24 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | MULTI_REVIEW | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |
| DOC-CLAIM-017 | 103 pages: docs/academy/token-reward-flows.md, docs/acs/morpheus.md, docs/acs/overview.md, docs/acs/risk-review.md, docs/acs/security-and-risk.md, docs/acs/trinity.md, docs/bba-agency/claim-review.md, docs/bba-agency/content-and-narrative.md, ... | compliance/legal claims | Mentions compliance/legal claims terminology across 103 page(s). | HIGH | Implementation/governance/security/compliance evidence or explicit draft/gated language before publication. | LEGAL | Review and keep conservative/draft/gated wording in REQ-07; do not add approval or production claims. |

## Handling Rule

High-risk claim categories require review before publication. REQ-07 may prepare conservative draft corrections, but it must not imply approvals, live execution, production readiness, guaranteed returns, audit completion, treasury authority, trading enablement, swaps, payouts, settlement, or on-chain execution unless separate evidence exists and approval is explicit.

Recommended REQ-07 handling:

- Proceed with draft corrections under high-risk review requirements.
- Normalize sensitive pages to consistent labels such as `Draft`, `Planned`, `Active if Verified`, `Requires Governance Review`, `Requires Security Review`, and `Requires Legal/Compliance Review`.
- Prioritize APY/yield, user-facing trading, API keys, treasury custody/execution, lottery payouts, marketplace settlement, tokenomics allocation/supply, audits, and production-readiness pages.
