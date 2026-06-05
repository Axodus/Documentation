# Documentation Content Inventory

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---
## Scope

Resolved Documentation workspace path:

`/opt/Axodus/Documentation`

Resolved repository path:

`/mnt/d/Rede/Github/Axodus/Documentation`

Resolved VitePress source root:

`docs/`

Inventory date:

2026-06-05

Generated and dependency paths excluded from content source inventory:

- `docs/.vitepress/dist/`
- `docs/.vitepress/cache/`
- `node_modules/`
## Inventory Summary

| Metric | Result |
|---|---|
| Markdown pages inventoried | 248 |
| Nav/sidebar targets detected | 248 |
| Missing nav/sidebar targets | 0 |
| Orphan pages | 0 |
| Placeholder or empty pages | 6 |
| High or critical risk pages | 189 |
| Medium risk pages | 55 |
| Duplicate/overlapping title groups | 11 |
| Thin pages under 100 words | 9 |
## Page Counts by Area

| Area | Pages |
|---|---:|
| academy | 10 |
| accountability | 5 |
| acs | 15 |
| bba-agency | 15 |
| business | 14 |
| defi | 18 |
| dex | 20 |
| glossary | 1 |
| governance | 12 |
| index.md | 1 |
| lottery | 20 |
| marketplace | 21 |
| mining | 22 |
| overview | 8 |
| runtime | 14 |
| security | 7 |
| tokenomics | 16 |
| trading | 14 |
| treasury | 15 |
## Navigation and Sidebar Coverage

| Check | Result |
|---|---|
| Active VitePress config | `docs/.vitepress/config.mts` |
| Nav/sidebar route targets | 248 |
| Content pages under `docs/` | 248 |
| Missing configured targets | 0 |
| Orphan content pages | 0 |

REQ-06 did not change navigation or content.

Coverage warnings:

- Current route/file coverage is complete for existing VitePress areas.
- No dedicated `docs/mcp/` area exists, even though MCP appears as a strategic workspace in root instructions and as planned in product mapping.
- No dedicated `docs/compute/` area exists, even though Compute appears as a planned product-map area.
- Most pages remain draft-class content; route completeness must not be treated as publication readiness.

## Placeholder and Empty Pages

| File | Status | Notes |
|---|---|---|
| `docs/business/client-lifecycle.md` | PLACEHOLDER | returns, treasury, tokenomics, governance |
| `docs/governance/accountability.md` | PLACEHOLDER | returns, treasury, tokenomics, governance |
| `docs/security/disclosure-policy.md` | PLACEHOLDER | audits, security, legal |
| `docs/security/overview.md` | PLACEHOLDER | treasury, governance, audits, security |
| `docs/tokenomics/overview.md` | PLACEHOLDER | APY, returns, treasury, tokenomics |
| `docs/tokenomics/supply-and-emission.md` | PLACEHOLDER | returns, treasury, tokenomics, governance |

## Thin Pages Under 100 Words

These pages are not empty, but they are skeletal and should be expanded or clearly scoped before publication readiness.

| File | Word Count | Area | Correction Priority | Notes |
|---|---:|---|---|---|
| `docs/accountability/release-notes.md` | 55 | accountability | P2 | Thin accountability page. |
| `docs/security/api-security.md` | 56 | security | P2 | Thin security page. |
| `docs/security/wallet-security.md` | 55 | security | P2 | Thin security page. |
| `docs/accountability/roadmap-updates.md` | 59 | accountability | P2 | Thin accountability page. |
| `docs/security/frontend-security.md` | 57 | security | P2 | Thin security page. |
| `docs/accountability/governance-records.md` | 62 | accountability | P2 | Thin accountability page. |
| `docs/accountability/financial-reports.md` | 64 | accountability | P2 | Thin accountability page. |
| `docs/security/trading-api-security.md` | 69 | security | P2 | Thin security page. |
| `docs/security/smart-contract-security.md` | 71 | security | P2 | Thin security page. |
## Duplicate or Overlapping Pages

These groups are not necessarily invalid duplicates. They are repeated page types across nuclei and should be checked for terminology consistency during REQ-07 and REQ-08.

| Shared Title | Files |
|---|---|
| Reporting and Accountability | `docs/bba-agency/reporting-and-accountability.md`<br>`docs/defi/reporting-and-accountability.md`<br>`docs/dex/reporting-and-accountability.md`<br>`docs/lottery/reporting-and-accountability.md`<br>`docs/marketplace/reporting-and-accountability.md`<br>`docs/mining/reporting-and-accountability.md`<br>`docs/tokenomics/reporting-and-accountability.md`<br>`docs/trading/reporting-and-accountability.md`<br>`docs/treasury/reporting-and-accountability.md` |
| Risk and Compliance | `docs/bba-agency/risk-and-compliance.md`<br>`docs/business/risk-and-compliance.md`<br>`docs/lottery/risk-and-compliance.md`<br>`docs/marketplace/risk-and-compliance.md`<br>`docs/mining/risk-and-compliance.md`<br>`docs/tokenomics/risk-and-compliance.md` |
| ACS Integration | `docs/business/acs-integration.md`<br>`docs/defi/acs-integration.md`<br>`docs/dex/acs-integration.md`<br>`docs/lottery/acs-integration.md`<br>`docs/marketplace/acs-integration.md`<br>`docs/mining/acs-integration.md`<br>`docs/runtime/acs-integration.md` |
| Governance Alignment | `docs/business/governance-alignment.md`<br>`docs/defi/governance-alignment.md`<br>`docs/dex/governance-alignment.md`<br>`docs/lottery/governance-alignment.md`<br>`docs/marketplace/governance-alignment.md`<br>`docs/mining/governance-alignment.md`<br>`docs/trading/governance-alignment.md`<br>`docs/treasury/governance-alignment.md` |
| Academy and User Education | `docs/defi/academy-and-user-education.md`<br>`docs/dex/academy-and-user-education.md`<br>`docs/mining/academy-and-user-education.md` |
| Compliance and Disclosures | `docs/defi/compliance-and-disclosures.md`<br>`docs/treasury/compliance-and-disclosures.md` |
| Security and Smart Contracts | `docs/defi/security-and-smart-contracts.md`<br>`docs/dex/security-and-smart-contracts.md`<br>`docs/lottery/security-and-smart-contracts.md` |
| Tokenomics Alignment | `docs/defi/tokenomics-alignment.md`<br>`docs/dex/tokenomics-alignment.md`<br>`docs/lottery/tokenomics-alignment.md`<br>`docs/marketplace/tokenomics-alignment.md`<br>`docs/mining/tokenomics-alignment.md`<br>`docs/treasury/tokenomics-alignment.md` |
| Treasury Alignment | `docs/defi/treasury-alignment.md`<br>`docs/dex/treasury-alignment.md`<br>`docs/marketplace/treasury-alignment.md`<br>`docs/mining/treasury-alignment.md`<br>`docs/tokenomics/treasury-alignment.md`<br>`docs/trading/treasury-alignment.md` |
| Fees and Revenue | `docs/dex/fees-and-revenue.md`<br>`docs/marketplace/fees-and-revenue.md` |
| ACS and Trinity Integration | `docs/trading/acs-trinity-integration.md`<br>`docs/treasury/acs-trinity-integration.md` |
## Page Inventory Table

| ID | File | Route / Nav Target | Title | Area | Status | Nav Status | Risk Level | Review Required | Correction Priority | Notes |
| -- | ---- | ------------------ | ----- | ---- | ------ | ---------- | ---------- | --------------- | ------------------- | ----- |
| DOC-PAGE-001 | `docs/academy/academy-risk.md` | `/academy/academy-risk` | Academy Risk and Abuse Prevention | academy | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, tokenomics, governance, security |
| DOC-PAGE-002 | `docs/academy/course-publishing.md` | `/academy/course-publishing` | Course Publishing | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-003 | `docs/academy/governance-alignment.md` | `/academy/governance-alignment` | Academy Governance Alignment | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-004 | `docs/academy/learn-to-win.md` | `/academy/learn-to-win` | Learn-to-Win | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-005 | `docs/academy/locked-rewards.md` | `/academy/locked-rewards` | Academy Locked Rewards | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | tokenomics, governance, audits, security |
| DOC-PAGE-006 | `docs/academy/marketplace-integration.md` | `/academy/marketplace-integration` | Academy Marketplace Integration | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-007 | `docs/academy/overview.md` | `/academy/overview` | Academy Overview | academy | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-008 | `docs/academy/proof-of-knowledge.md` | `/academy/proof-of-knowledge` | Proof of Knowledge | academy | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, governance, security, execution |
| DOC-PAGE-009 | `docs/academy/token-reward-flows.md` | `/academy/token-reward-flows` | Academy Token Reward Flows | academy | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-010 | `docs/academy/tutor-validation.md` | `/academy/tutor-validation` | Tutor Validation | academy | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, governance, security, execution |
| DOC-PAGE-011 | `docs/accountability/financial-reports.md` | `/accountability/financial-reports` | Financial Reports | accountability | MISSING_CONTEXT | IN_NAV | MEDIUM | FINANCIAL_COMPLIANCE | P3 | returns, treasury |
| DOC-PAGE-012 | `docs/accountability/governance-records.md` | `/accountability/governance-records` | Governance Records | accountability | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | governance, execution |
| DOC-PAGE-013 | `docs/accountability/overview.md` | `/accountability/overview` | Accountability Overview | accountability | MISSING_CONTEXT | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | treasury, governance, audits, execution |
| DOC-PAGE-014 | `docs/accountability/release-notes.md` | `/accountability/release-notes` | Release Notes | accountability | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | governance, security |
| DOC-PAGE-015 | `docs/accountability/roadmap-updates.md` | `/accountability/roadmap-updates` | Roadmap Updates | accountability | MISSING_CONTEXT | IN_NAV | LOW | NONE | P3 | production |
| DOC-PAGE-016 | `docs/acs/accountability.md` | `/acs/accountability` | ACS Accountability | acs | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | governance, execution |
| DOC-PAGE-017 | `docs/acs/agent-roles.md` | `/acs/agent-roles` | ACS Agent Roles | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-018 | `docs/acs/agent-smith.md` | `/acs/agent-smith` | Agent Smith | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-019 | `docs/acs/architecture.md` | `/acs/architecture` | ACS Architecture | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-020 | `docs/acs/business-integration.md` | `/acs/business-integration` | ACS Business Integration | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-021 | `docs/acs/governance-alignment.md` | `/acs/governance-alignment` | ACS Governance Alignment | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-022 | `docs/acs/human-oversight.md` | `/acs/human-oversight` | ACS Human Oversight | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-023 | `docs/acs/memory-and-knowledge.md` | `/acs/memory-and-knowledge` | ACS Memory and Knowledge | acs | MISSING_CONTEXT | IN_NAV | LOW | NONE | P3 | production |
| DOC-PAGE-024 | `docs/acs/morpheus.md` | `/acs/morpheus` | Morpheus | acs | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | tokenomics, governance, security, legal |
| DOC-PAGE-025 | `docs/acs/overview.md` | `/acs/overview` | ACS Overview | acs | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-026 | `docs/acs/risk-review.md` | `/acs/risk-review` | ACS Risk Review | acs | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-027 | `docs/acs/runtime.md` | `/acs/runtime` | ACS Runtime | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-028 | `docs/acs/security-and-risk.md` | `/acs/security-and-risk` | ACS Security and Risk | acs | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-029 | `docs/acs/tooling-and-mcp.md` | `/acs/tooling-and-mcp` | ACS Tooling and MCP | acs | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-030 | `docs/acs/trinity.md` | `/acs/trinity` | Trinity | acs | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, governance, security |
| DOC-PAGE-031 | `docs/bba-agency/academy-and-marketplace-alignment.md` | `/bba-agency/academy-and-marketplace-alignment` | Academy and Marketplace Alignment | bba-agency | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, tokenomics, governance, production |
| DOC-PAGE-032 | `docs/bba-agency/acs-agent-workflow.md` | `/bba-agency/acs-agent-workflow` | ACS Agent Workflow | bba-agency | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, governance, production |
| DOC-PAGE-033 | `docs/bba-agency/brand-architecture.md` | `/bba-agency/brand-architecture` | Brand Architecture | bba-agency | MISSING_CONTEXT | IN_NAV | MEDIUM | GOVERNANCE | P3 | governance, production |
| DOC-PAGE-034 | `docs/bba-agency/campaign-lifecycle.md` | `/bba-agency/campaign-lifecycle` | Campaign Lifecycle | bba-agency | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-035 | `docs/bba-agency/claim-review.md` | `/bba-agency/claim-review` | Claim Review | bba-agency | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-036 | `docs/bba-agency/client-intake.md` | `/bba-agency/client-intake` | Client Intake | bba-agency | MISSING_CONTEXT | IN_NAV | MEDIUM | FINANCIAL_COMPLIANCE | P3 | treasury, tokenomics, governance, production |
| DOC-PAGE-037 | `docs/bba-agency/content-and-narrative.md` | `/bba-agency/content-and-narrative` | Content and Narrative | bba-agency | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, production |
| DOC-PAGE-038 | `docs/bba-agency/dao-and-governance-communication.md` | `/bba-agency/dao-and-governance-communication` | DAO and Governance Communication | bba-agency | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | governance, production, execution, legal |
| DOC-PAGE-039 | `docs/bba-agency/growth-operations.md` | `/bba-agency/growth-operations` | Growth Operations | bba-agency | HIGH_RISK | IN_NAV | HIGH | FINANCIAL_COMPLIANCE | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-040 | `docs/bba-agency/overview.md` | `/bba-agency/overview` | Axodus BBA Agency Overview | bba-agency | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-041 | `docs/bba-agency/positioning.md` | `/bba-agency/positioning` | Positioning | bba-agency | HIGH_RISK | IN_NAV | HIGH | FINANCIAL_COMPLIANCE | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-042 | `docs/bba-agency/reporting-and-accountability.md` | `/bba-agency/reporting-and-accountability` | Reporting and Accountability | bba-agency | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-043 | `docs/bba-agency/risk-and-compliance.md` | `/bba-agency/risk-and-compliance` | Risk and Compliance | bba-agency | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-044 | `docs/bba-agency/service-model.md` | `/bba-agency/service-model` | Service Model | bba-agency | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-045 | `docs/bba-agency/web3-launch-support.md` | `/bba-agency/web3-launch-support` | Web3 Launch Support | bba-agency | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | treasury, tokenomics, governance, audits |
| DOC-PAGE-046 | `docs/business/accountability.md` | `/business/accountability` | Business Accountability | business | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-047 | `docs/business/acs-integration.md` | `/business/acs-integration` | ACS Integration | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-048 | `docs/business/bba.md` | `/business/bba` | BBA | business | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-049 | `docs/business/change-requests.md` | `/business/change-requests` | Change Requests | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-050 | `docs/business/client-lifecycle.md` | `/business/client-lifecycle` | Client Lifecycle | business | PLACEHOLDER | IN_NAV | HIGH | LEGAL | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-051 | `docs/business/dao-service-requests.md` | `/business/dao-service-requests` | DAO Service Requests | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-052 | `docs/business/delivery-lifecycle.md` | `/business/delivery-lifecycle` | Delivery Lifecycle | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-053 | `docs/business/governance-alignment.md` | `/business/governance-alignment` | Governance Alignment | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-054 | `docs/business/overview.md` | `/business/overview` | Business Overview | business | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-055 | `docs/business/plugin-requests.md` | `/business/plugin-requests` | Plugin Requests | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-056 | `docs/business/request-intake.md` | `/business/request-intake` | Business Request Intake | business | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-057 | `docs/business/risk-and-compliance.md` | `/business/risk-and-compliance` | Risk and Compliance | business | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-058 | `docs/business/runtime.md` | `/business/runtime` | Business Runtime | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-059 | `docs/business/service-catalog.md` | `/business/service-catalog` | Business Service Catalog | business | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-060 | `docs/defi/academy-and-user-education.md` | `/defi/academy-and-user-education` | Academy and User Education | defi | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-061 | `docs/defi/acs-integration.md` | `/defi/acs-integration` | ACS Integration | defi | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-062 | `docs/defi/architecture.md` | `/defi/architecture` | DeFi Architecture | defi | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, treasury, tokenomics, governance |
| DOC-PAGE-063 | `docs/defi/compliance-and-disclosures.md` | `/defi/compliance-and-disclosures` | Compliance and Disclosures | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, governance |
| DOC-PAGE-064 | `docs/defi/daas.md` | `/defi/daas` | DaaS | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-065 | `docs/defi/derivatives-and-debentures.md` | `/defi/derivatives-and-debentures` | Derivatives and Debentures | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, governance, security |
| DOC-PAGE-066 | `docs/defi/etf-daas.md` | `/defi/etf-daas` | ETF DaaS | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, governance, security |
| DOC-PAGE-067 | `docs/defi/governance-alignment.md` | `/defi/governance-alignment` | Governance Alignment | defi | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-068 | `docs/defi/liquidity-model.md` | `/defi/liquidity-model` | Liquidity Model | defi | MISSING_CONTEXT | IN_NAV | MEDIUM | FINANCIAL_COMPLIANCE | P3 | returns, treasury, tokenomics, governance |
| DOC-PAGE-069 | `docs/defi/overview.md` | `/defi/overview` | Axodus DeFi Overview | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-070 | `docs/defi/protocol-model.md` | `/defi/protocol-model` | Protocol Model | defi | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, returns, treasury, governance |
| DOC-PAGE-071 | `docs/defi/reporting-and-accountability.md` | `/defi/reporting-and-accountability` | Reporting and Accountability | defi | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, returns, treasury, governance |
| DOC-PAGE-072 | `docs/defi/risk-management.md` | `/defi/risk-management` | DeFi Risk Management | defi | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, treasury, governance, audits |
| DOC-PAGE-073 | `docs/defi/security-and-smart-contracts.md` | `/defi/security-and-smart-contracts` | Security and Smart Contracts | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | treasury, governance, audits, security |
| DOC-PAGE-074 | `docs/defi/staking-and-yield.md` | `/defi/staking-and-yield` | Staking and Yield | defi | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-075 | `docs/defi/tokenomics-alignment.md` | `/defi/tokenomics-alignment` | Tokenomics Alignment | defi | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-076 | `docs/defi/treasury-alignment.md` | `/defi/treasury-alignment` | Treasury Alignment | defi | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, treasury, tokenomics, governance |
| DOC-PAGE-077 | `docs/defi/vaults-and-strategies.md` | `/defi/vaults-and-strategies` | Vaults and Strategies | defi | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, governance |
| DOC-PAGE-078 | `docs/dex/academy-and-user-education.md` | `/dex/academy-and-user-education` | Academy and User Education | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-079 | `docs/dex/acs-integration.md` | `/dex/acs-integration` | ACS Integration | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-080 | `docs/dex/architecture.md` | `/dex/architecture` | DEX Architecture | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-081 | `docs/dex/fees-and-revenue.md` | `/dex/fees-and-revenue` | Fees and Revenue | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-082 | `docs/dex/governance-alignment.md` | `/dex/governance-alignment` | Governance Alignment | dex | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-083 | `docs/dex/liquidity-pools.md` | `/dex/liquidity-pools` | Liquidity Pools | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-084 | `docs/dex/listing-policy.md` | `/dex/listing-policy` | Listing Policy | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, governance, security, execution |
| DOC-PAGE-085 | `docs/dex/lp-model.md` | `/dex/lp-model` | LP Model | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, treasury, tokenomics, execution |
| DOC-PAGE-086 | `docs/dex/marketplace-integration.md` | `/dex/marketplace-integration` | Marketplace Integration | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, tokenomics, execution |
| DOC-PAGE-087 | `docs/dex/mev-and-execution-risk.md` | `/dex/mev-and-execution-risk` | MEV and Execution Risk | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, execution |
| DOC-PAGE-088 | `docs/dex/overview.md` | `/dex/overview` | Axodus DEX Overview | dex | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-089 | `docs/dex/reporting-and-accountability.md` | `/dex/reporting-and-accountability` | Reporting and Accountability | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, security, execution |
| DOC-PAGE-090 | `docs/dex/risk-and-disclosures.md` | `/dex/risk-and-disclosures` | Risk and Disclosures | dex | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, tokenomics, governance, audits |
| DOC-PAGE-091 | `docs/dex/routing-and-aggregation.md` | `/dex/routing-and-aggregation` | Routing and Aggregation | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, tokenomics, execution |
| DOC-PAGE-092 | `docs/dex/security-and-smart-contracts.md` | `/dex/security-and-smart-contracts` | Security and Smart Contracts | dex | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | treasury, tokenomics, governance, audits |
| DOC-PAGE-093 | `docs/dex/slippage-and-price-impact.md` | `/dex/slippage-and-price-impact` | Slippage and Price Impact | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, tokenomics, execution |
| DOC-PAGE-094 | `docs/dex/swap-model.md` | `/dex/swap-model` | Swap Model | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-095 | `docs/dex/tokenomics-alignment.md` | `/dex/tokenomics-alignment` | Tokenomics Alignment | dex | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-096 | `docs/dex/trading-integration.md` | `/dex/trading-integration` | Trading Integration | dex | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, treasury, execution |
| DOC-PAGE-097 | `docs/dex/treasury-alignment.md` | `/dex/treasury-alignment` | Treasury Alignment | dex | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-098 | `docs/glossary/terms.md` | `/glossary/terms` | Glossary Terms | glossary | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-099 | `docs/governance/accountability.md` | `/governance/accountability` | Governance Accountability | governance | PLACEHOLDER | IN_NAV | HIGH | SECURITY | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-100 | `docs/governance/boardroom-council.md` | `/governance/boardroom-council` | Boardroom Council | governance | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, governance, audits, security |
| DOC-PAGE-101 | `docs/governance/community-dao.md` | `/governance/community-dao` | Community DAO | governance | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, security, execution |
| DOC-PAGE-102 | `docs/governance/constitutional-governance.md` | `/governance/constitutional-governance` | Constitutional Governance | governance | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, treasury, tokenomics, governance |
| DOC-PAGE-103 | `docs/governance/dao-federation.md` | `/governance/dao-federation` | DAO Federation | governance | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, execution |
| DOC-PAGE-104 | `docs/governance/execution-receipts.md` | `/governance/execution-receipts` | Execution Receipts | governance | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, security, execution |
| DOC-PAGE-105 | `docs/governance/executive-dao.md` | `/governance/executive-dao` | Executive DAO | governance | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-106 | `docs/governance/governance-lifecycle.md` | `/governance/governance-lifecycle` | Governance Lifecycle | governance | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-107 | `docs/governance/governance-risk.md` | `/governance/governance-risk` | Governance Risk | governance | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-108 | `docs/governance/overview.md` | `/governance/overview` | Governance Overview | governance | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, governance, security, execution |
| DOC-PAGE-109 | `docs/governance/plugin-requests.md` | `/governance/plugin-requests` | Governance Plugin Requests | governance | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-110 | `docs/governance/proposal-lifecycle.md` | `/governance/proposal-lifecycle` | Proposal Lifecycle | governance | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-111 | `docs/index.md` | `/index` | index | index.md | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-112 | `docs/lottery/acs-integration.md` | `/lottery/acs-integration` | ACS Integration | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-113 | `docs/lottery/claims-and-settlement.md` | `/lottery/claims-and-settlement` | Claims and Settlement | lottery | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-114 | `docs/lottery/cryptodraw.md` | `/lottery/cryptodraw` | CryptoDraw | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, audits |
| DOC-PAGE-115 | `docs/lottery/draw-lifecycle.md` | `/lottery/draw-lifecycle` | Draw Lifecycle | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | governance, security, execution, legal |
| DOC-PAGE-116 | `docs/lottery/game-models.md` | `/lottery/game-models` | Game Models | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | governance, audits, security, execution |
| DOC-PAGE-117 | `docs/lottery/governance-alignment.md` | `/lottery/governance-alignment` | Governance Alignment | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-118 | `docs/lottery/lotofacil-style-model.md` | `/lottery/lotofacil-style-model` | Lotofacil-Style Model | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | production, legal |
| DOC-PAGE-119 | `docs/lottery/merkle-and-indexing.md` | `/lottery/merkle-and-indexing` | Merkle and Indexing | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | audits, execution |
| DOC-PAGE-120 | `docs/lottery/operations-and-runtime.md` | `/lottery/operations-and-runtime` | Operations and Runtime | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | treasury, governance, security, legal |
| DOC-PAGE-121 | `docs/lottery/overview.md` | `/lottery/overview` | Axodus Lottery Overview | lottery | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-122 | `docs/lottery/prize-pools-and-payouts.md` | `/lottery/prize-pools-and-payouts` | Prize Pools and Payouts | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | returns, treasury, execution, legal |
| DOC-PAGE-123 | `docs/lottery/randomness-and-vrf.md` | `/lottery/randomness-and-vrf` | Randomness and VRF | lottery | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | governance, audits, security, production |
| DOC-PAGE-124 | `docs/lottery/reporting-and-accountability.md` | `/lottery/reporting-and-accountability` | Reporting and Accountability | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, execution |
| DOC-PAGE-125 | `docs/lottery/responsible-participation.md` | `/lottery/responsible-participation` | Responsible Participation | lottery | MISSING_CONTEXT | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, security, execution, legal |
| DOC-PAGE-126 | `docs/lottery/risk-and-compliance.md` | `/lottery/risk-and-compliance` | Risk and Compliance | lottery | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-127 | `docs/lottery/security-and-smart-contracts.md` | `/lottery/security-and-smart-contracts` | Security and Smart Contracts | lottery | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | treasury, tokenomics, governance, audits |
| DOC-PAGE-128 | `docs/lottery/supersete-style-model.md` | `/lottery/supersete-style-model` | SuperSete-Style Model | lottery | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | governance, security, legal |
| DOC-PAGE-129 | `docs/lottery/ticket-model.md` | `/lottery/ticket-model` | Ticket Model | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, audits, security, execution |
| DOC-PAGE-130 | `docs/lottery/tokenomics-alignment.md` | `/lottery/tokenomics-alignment` | Tokenomics Alignment | lottery | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-131 | `docs/lottery/treasury-and-fees.md` | `/lottery/treasury-and-fees` | Treasury and Fees | lottery | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-132 | `docs/marketplace/academy-alignment.md` | `/marketplace/academy-alignment` | Academy Alignment | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, tokenomics, execution |
| DOC-PAGE-133 | `docs/marketplace/acs-integration.md` | `/marketplace/acs-integration` | ACS Integration | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-134 | `docs/marketplace/architecture.md` | `/marketplace/architecture` | Marketplace Architecture | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, audits |
| DOC-PAGE-135 | `docs/marketplace/business-and-bba-alignment.md` | `/marketplace/business-and-bba-alignment` | Business and BBA Alignment | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, tokenomics, governance, audits |
| DOC-PAGE-136 | `docs/marketplace/buyer-flow.md` | `/marketplace/buyer-flow` | Buyer Flow | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, production, execution |
| DOC-PAGE-137 | `docs/marketplace/credits-and-locked-rewards.md` | `/marketplace/credits-and-locked-rewards` | Credits and Locked Rewards | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, execution |
| DOC-PAGE-138 | `docs/marketplace/dex-and-defi-integration.md` | `/marketplace/dex-and-defi-integration` | DEX and DeFi Integration | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, governance |
| DOC-PAGE-139 | `docs/marketplace/disputes-refunds-and-support.md` | `/marketplace/disputes-refunds-and-support` | Disputes, Refunds and Support | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, production, execution |
| DOC-PAGE-140 | `docs/marketplace/fees-and-revenue.md` | `/marketplace/fees-and-revenue` | Fees and Revenue | marketplace | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-141 | `docs/marketplace/governance-alignment.md` | `/marketplace/governance-alignment` | Governance Alignment | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-142 | `docs/marketplace/listing-model.md` | `/marketplace/listing-model` | Listing Model | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, tokenomics, governance |
| DOC-PAGE-143 | `docs/marketplace/overview.md` | `/marketplace/overview` | Axodus Marketplace Overview | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-144 | `docs/marketplace/payments-and-settlement.md` | `/marketplace/payments-and-settlement` | Payments and Settlement | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, tokenomics, audits, execution |
| DOC-PAGE-145 | `docs/marketplace/reporting-and-accountability.md` | `/marketplace/reporting-and-accountability` | Reporting and Accountability | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, execution |
| DOC-PAGE-146 | `docs/marketplace/reputation-and-quality.md` | `/marketplace/reputation-and-quality` | Reputation and Quality | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | FINANCIAL_COMPLIANCE | P3 | returns, governance, production |
| DOC-PAGE-147 | `docs/marketplace/risk-and-compliance.md` | `/marketplace/risk-and-compliance` | Risk and Compliance | marketplace | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, tokenomics, governance |
| DOC-PAGE-148 | `docs/marketplace/security-and-data-protection.md` | `/marketplace/security-and-data-protection` | Security and Data Protection | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | governance, security, production, execution |
| DOC-PAGE-149 | `docs/marketplace/seller-provider-model.md` | `/marketplace/seller-provider-model` | Seller / Provider Model | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | governance, security, production, execution |
| DOC-PAGE-150 | `docs/marketplace/service-catalog.md` | `/marketplace/service-catalog` | Service Catalog | marketplace | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-151 | `docs/marketplace/tokenomics-alignment.md` | `/marketplace/tokenomics-alignment` | Tokenomics Alignment | marketplace | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-152 | `docs/marketplace/treasury-alignment.md` | `/marketplace/treasury-alignment` | Treasury Alignment | marketplace | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, treasury, governance, execution |
| DOC-PAGE-153 | `docs/mining/academy-and-user-education.md` | `/mining/academy-and-user-education` | Academy and User Education | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, governance, security, execution |
| DOC-PAGE-154 | `docs/mining/acs-integration.md` | `/mining/acs-integration` | ACS Integration | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-155 | `docs/mining/architecture.md` | `/mining/architecture` | Mining Architecture | mining | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-156 | `docs/mining/costs-fees-and-profitability.md` | `/mining/costs-fees-and-profitability` | Costs, Fees and Profitability | mining | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, governance, execution |
| DOC-PAGE-157 | `docs/mining/governance-alignment.md` | `/mining/governance-alignment` | Governance Alignment | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-158 | `docs/mining/hardware-energy-and-uptime.md` | `/mining/hardware-energy-and-uptime` | Hardware, Energy and Uptime | mining | MISSING_CONTEXT | IN_NAV | LOW | FINANCIAL_COMPLIANCE | P3 | returns |
| DOC-PAGE-159 | `docs/mining/infrastructure-and-operations.md` | `/mining/infrastructure-and-operations` | Infrastructure and Operations | mining | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-160 | `docs/mining/marketplace-business-and-bba-alignment.md` | `/mining/marketplace-business-and-bba-alignment` | Marketplace, Business and BBA Alignment | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, production, execution |
| DOC-PAGE-161 | `docs/mining/mining-models.md` | `/mining/mining-models` | Mining Models | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, governance, security, execution |
| DOC-PAGE-162 | `docs/mining/monitoring-and-telemetry.md` | `/mining/monitoring-and-telemetry` | Monitoring and Telemetry | mining | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, execution |
| DOC-PAGE-163 | `docs/mining/node-and-validator-operations.md` | `/mining/node-and-validator-operations` | Node and Validator Operations | mining | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, tokenomics, governance, security |
| DOC-PAGE-164 | `docs/mining/overview.md` | `/mining/overview` | Axodus Mining Overview | mining | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-165 | `docs/mining/pools-hashrate-and-network-difficulty.md` | `/mining/pools-hashrate-and-network-difficulty` | Pools, Hashrate and Network Difficulty | mining | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, execution |
| DOC-PAGE-166 | `docs/mining/reporting-and-accountability.md` | `/mining/reporting-and-accountability` | Reporting and Accountability | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, execution |
| DOC-PAGE-167 | `docs/mining/rewards-and-payouts.md` | `/mining/rewards-and-payouts` | Rewards and Payouts | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, security, execution |
| DOC-PAGE-168 | `docs/mining/risk-and-compliance.md` | `/mining/risk-and-compliance` | Risk and Compliance | mining | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-169 | `docs/mining/security-and-custody.md` | `/mining/security-and-custody` | Security and Custody | mining | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, security, execution |
| DOC-PAGE-170 | `docs/mining/sustainability-and-responsible-operations.md` | `/mining/sustainability-and-responsible-operations` | Sustainability and Responsible Operations | mining | MISSING_CONTEXT | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, production, legal |
| DOC-PAGE-171 | `docs/mining/tokenomics-alignment.md` | `/mining/tokenomics-alignment` | Tokenomics Alignment | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-172 | `docs/mining/trading-and-risk-hedging.md` | `/mining/trading-and-risk-hedging` | Trading and Risk Hedging | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, execution |
| DOC-PAGE-173 | `docs/mining/treasury-alignment.md` | `/mining/treasury-alignment` | Treasury Alignment | mining | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, treasury, governance, execution |
| DOC-PAGE-174 | `docs/mining/user-facing-products.md` | `/mining/user-facing-products` | User-Facing Products | mining | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, governance, production |
| DOC-PAGE-175 | `docs/overview/constitutional-model.md` | `/overview/constitutional-model` | Constitutional Model | overview | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-176 | `docs/overview/core-principles.md` | `/overview/core-principles` | Core Principles | overview | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-177 | `docs/overview/documentation-standards.md` | `/overview/documentation-standards` | Documentation Standards | overview | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, tokenomics, audits |
| DOC-PAGE-178 | `docs/overview/documentation-status.md` | `/overview/documentation-status` | Documentation Status | overview | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | governance, audits, security, production |
| DOC-PAGE-179 | `docs/overview/ecosystem-overview.md` | `/overview/ecosystem-overview` | Ecosystem Overview | overview | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, treasury, tokenomics, governance |
| DOC-PAGE-180 | `docs/overview/product-map.md` | `/overview/product-map` | Product Map | overview | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-181 | `docs/overview/risk-notices.md` | `/overview/risk-notices` | Risk Notices | overview | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-182 | `docs/overview/terminology.md` | `/overview/terminology` | Terminology | overview | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-183 | `docs/runtime/accountability-records.md` | `/runtime/accountability-records` | Accountability Records | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, audits, security |
| DOC-PAGE-184 | `docs/runtime/acs-integration.md` | `/runtime/acs-integration` | ACS Integration | runtime | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-185 | `docs/runtime/architecture.md` | `/runtime/architecture` | Runtime Architecture | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-186 | `docs/runtime/change-control.md` | `/runtime/change-control` | Change Control | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-187 | `docs/runtime/communication-cadence.md` | `/runtime/communication-cadence` | Communication Cadence | runtime | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | governance, production, execution |
| DOC-PAGE-188 | `docs/runtime/delays-and-blockers.md` | `/runtime/delays-and-blockers` | Delays and Blockers | runtime | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, tokenomics, governance, security |
| DOC-PAGE-189 | `docs/runtime/execution-handoff.md` | `/runtime/execution-handoff` | Execution Handoff | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-190 | `docs/runtime/governance-escalation.md` | `/runtime/governance-escalation` | Governance Escalation | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-191 | `docs/runtime/milestones.md` | `/runtime/milestones` | Milestones | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-192 | `docs/runtime/overview.md` | `/runtime/overview` | Runtime Overview | runtime | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, governance, production, execution |
| DOC-PAGE-193 | `docs/runtime/request-lifecycle.md` | `/runtime/request-lifecycle` | Request Lifecycle | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-194 | `docs/runtime/risk-controls.md` | `/runtime/risk-controls` | Risk Controls | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-195 | `docs/runtime/status-model.md` | `/runtime/status-model` | Status Model | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-196 | `docs/runtime/validation-and-confirmation.md` | `/runtime/validation-and-confirmation` | Validation and Confirmation | runtime | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-197 | `docs/security/api-security.md` | `/security/api-security` | API Security | security | MISSING_CONTEXT | IN_NAV | LOW | SECURITY | P3 | security |
| DOC-PAGE-198 | `docs/security/disclosure-policy.md` | `/security/disclosure-policy` | Disclosure Policy | security | PLACEHOLDER | IN_NAV | MEDIUM | LEGAL | P1 | audits, security, legal |
| DOC-PAGE-199 | `docs/security/frontend-security.md` | `/security/frontend-security` | Frontend Security | security | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | security, execution |
| DOC-PAGE-200 | `docs/security/overview.md` | `/security/overview` | Security Overview | security | PLACEHOLDER | IN_NAV | HIGH | SECURITY | P1 | treasury, governance, audits, security |
| DOC-PAGE-201 | `docs/security/smart-contract-security.md` | `/security/smart-contract-security` | Smart Contract Security | security | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-202 | `docs/security/trading-api-security.md` | `/security/trading-api-security` | Trading API Security | security | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | security, execution |
| DOC-PAGE-203 | `docs/security/wallet-security.md` | `/security/wallet-security` | Wallet Security | security | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, governance, security, execution |
| DOC-PAGE-204 | `docs/tokenomics/academy-rewards.md` | `/tokenomics/academy-rewards` | Academy Rewards | tokenomics | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | returns, tokenomics, execution, legal |
| DOC-PAGE-205 | `docs/tokenomics/contract-dependencies.md` | `/tokenomics/contract-dependencies` | Contract Dependencies | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-206 | `docs/tokenomics/cross-chain-readiness.md` | `/tokenomics/cross-chain-readiness` | Cross-Chain Readiness | tokenomics | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, security, production, execution |
| DOC-PAGE-207 | `docs/tokenomics/governance-participation.md` | `/tokenomics/governance-participation` | Governance Participation | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-208 | `docs/tokenomics/locked-rewards.md` | `/tokenomics/locked-rewards` | Locked Rewards Status | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, execution |
| DOC-PAGE-209 | `docs/tokenomics/marketplace-utility.md` | `/tokenomics/marketplace-utility` | Marketplace Utility | tokenomics | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | treasury, tokenomics, execution, legal |
| DOC-PAGE-210 | `docs/tokenomics/neurons-token.md` | `/tokenomics/neurons-token` | $Neurons Token | tokenomics | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-211 | `docs/tokenomics/overview.md` | `/tokenomics/overview` | Tokenomics Overview | tokenomics | PLACEHOLDER | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-212 | `docs/tokenomics/pok-minting.md` | `/tokenomics/pok-minting` | PoK Minting | tokenomics | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | tokenomics, execution |
| DOC-PAGE-213 | `docs/tokenomics/reporting-and-accountability.md` | `/tokenomics/reporting-and-accountability` | Reporting and Accountability | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, audits |
| DOC-PAGE-214 | `docs/tokenomics/reward-policy.md` | `/tokenomics/reward-policy` | Reward Policy | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-215 | `docs/tokenomics/risk-and-compliance.md` | `/tokenomics/risk-and-compliance` | Risk and Compliance | tokenomics | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, tokenomics, governance |
| DOC-PAGE-216 | `docs/tokenomics/supply-and-emission.md` | `/tokenomics/supply-and-emission` | Supply and Emission | tokenomics | PLACEHOLDER | IN_NAV | HIGH | LEGAL | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-217 | `docs/tokenomics/technical-architecture.md` | `/tokenomics/technical-architecture` | Technical Architecture | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | tokenomics, audits, security, production |
| DOC-PAGE-218 | `docs/tokenomics/treasury-alignment.md` | `/tokenomics/treasury-alignment` | Treasury Alignment | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, execution |
| DOC-PAGE-219 | `docs/tokenomics/utility-model.md` | `/tokenomics/utility-model` | Utility Model | tokenomics | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-220 | `docs/trading/access-model.md` | `/trading/access-model` | Access Model | trading | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-221 | `docs/trading/acs-trinity-integration.md` | `/trading/acs-trinity-integration` | ACS and Trinity Integration | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-222 | `docs/trading/architecture.md` | `/trading/architecture` | Trading Architecture | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-223 | `docs/trading/cex-api-security.md` | `/trading/cex-api-security` | CEX API Security | trading | MISSING_CONTEXT | IN_NAV | MEDIUM | LEGAL | P3 | security, execution, legal |
| DOC-PAGE-224 | `docs/trading/compliance-and-user-disclosures.md` | `/trading/compliance-and-user-disclosures` | Compliance and User Disclosures | trading | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-225 | `docs/trading/governance-alignment.md` | `/trading/governance-alignment` | Governance Alignment | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-226 | `docs/trading/internal-trading.md` | `/trading/internal-trading` | Internal Trading | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, governance, production |
| DOC-PAGE-227 | `docs/trading/overview.md` | `/trading/overview` | Trading Overview | trading | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, tokenomics, governance |
| DOC-PAGE-228 | `docs/trading/reporting-and-accountability.md` | `/trading/reporting-and-accountability` | Reporting and Accountability | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, governance, security |
| DOC-PAGE-229 | `docs/trading/risk-management.md` | `/trading/risk-management` | Risk Management | trading | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | treasury, governance, security, execution |
| DOC-PAGE-230 | `docs/trading/scalper-futures.md` | `/trading/scalper-futures` | Scalper Futures | trading | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-231 | `docs/trading/strategy-lifecycle.md` | `/trading/strategy-lifecycle` | Strategy Lifecycle | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, governance, security |
| DOC-PAGE-232 | `docs/trading/treasury-alignment.md` | `/trading/treasury-alignment` | Treasury Alignment | trading | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | APY, returns, treasury, governance |
| DOC-PAGE-233 | `docs/trading/user-facing-strategies.md` | `/trading/user-facing-strategies` | User-Facing Strategies | trading | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, tokenomics, governance, security |
| DOC-PAGE-234 | `docs/treasury/acs-trinity-integration.md` | `/treasury/acs-trinity-integration` | ACS and Trinity Integration | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-235 | `docs/treasury/architecture.md` | `/treasury/architecture` | Treasury Architecture | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-236 | `docs/treasury/capital-allocation.md` | `/treasury/capital-allocation` | Capital Allocation | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, governance, security, production |
| DOC-PAGE-237 | `docs/treasury/compliance-and-disclosures.md` | `/treasury/compliance-and-disclosures` | Compliance and Disclosures | treasury | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-238 | `docs/treasury/custody-and-security.md` | `/treasury/custody-and-security` | Custody and Security | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-239 | `docs/treasury/governance-alignment.md` | `/treasury/governance-alignment` | Governance Alignment | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | treasury, tokenomics, governance, security |
| DOC-PAGE-240 | `docs/treasury/overview.md` | `/treasury/overview` | Treasury Overview | treasury | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, tokenomics |
| DOC-PAGE-241 | `docs/treasury/reporting-and-accountability.md` | `/treasury/reporting-and-accountability` | Reporting and Accountability | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-242 | `docs/treasury/reserves-and-liquidity.md` | `/treasury/reserves-and-liquidity` | Reserves and Liquidity | treasury | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-243 | `docs/treasury/revenue-and-fees.md` | `/treasury/revenue-and-fees` | Revenue and Fees | treasury | HIGH_RISK | IN_NAV | HIGH | LEGAL | P2 | APY, returns, treasury, tokenomics |
| DOC-PAGE-244 | `docs/treasury/risk-management.md` | `/treasury/risk-management` | Treasury Risk Management | treasury | HIGH_RISK | IN_NAV | HIGH | SECURITY | P2 | returns, treasury, tokenomics, governance |
| DOC-PAGE-245 | `docs/treasury/strategy-oversight.md` | `/treasury/strategy-oversight` | Strategy Oversight | treasury | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | APY, returns, treasury, governance |
| DOC-PAGE-246 | `docs/treasury/tokenomics-alignment.md` | `/treasury/tokenomics-alignment` | Tokenomics Alignment | treasury | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | treasury, tokenomics, governance, execution |
| DOC-PAGE-247 | `docs/treasury/trading-alignment.md` | `/treasury/trading-alignment` | Trading Alignment | treasury | MISSING_CONTEXT | IN_NAV | MEDIUM | SECURITY | P3 | returns, treasury, governance, execution |
| DOC-PAGE-248 | `docs/treasury/treasury-policy.md` | `/treasury/treasury-policy` | Treasury Policy | treasury | HIGH_RISK | IN_NAV | CRITICAL | MULTI_REVIEW | P1 | returns, treasury, governance, audits |

## Correction Priority Summary

- P1: placeholder, empty, or critical-risk pages requiring early scoped correction or review.
- P2: high-risk pages requiring review before public approval.
- P3: pages with draft/planned/future language or missing maturity context.
- NONE: no immediate correction identified by static inventory.

REQ-06 does not authorize content rewriting or publication.
