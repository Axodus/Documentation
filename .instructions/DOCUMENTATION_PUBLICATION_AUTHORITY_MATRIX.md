# Documentation Publication Authority Matrix

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

Publication without approval is forbidden for sensitive areas.

| Content Area | Required Reviewer | Required Approver | Enhanced Review Required | Publication Without Approval |
| ------------ | ----------------- | ----------------- | ------------------------ | ---------------------------- |
| General documentation | Documentation Coordinator | Coordinator | Nucleus owner when domain-specific | FORBIDDEN |
| Architecture | Documentation Coordinator, nucleus owner | Coordinator | Security when execution-sensitive | FORBIDDEN |
| Core boundaries | Core owner, Documentation Coordinator | Coordinator | Governance/security when authority-sensitive | FORBIDDEN |
| Governance | Governance owner | Coordinator / Governance authority | Governance review | FORBIDDEN |
| DAO authority | Governance owner | Coordinator / Governance authority | Governance and legal/compliance when public claims are involved | FORBIDDEN |
| Tokenomics | Tokenomics owner, financial/compliance reviewer | Coordinator | Financial/compliance, governance, security | FORBIDDEN |
| APY / yield / returns | Financial/compliance reviewer | Coordinator | Financial/compliance and legal/compliance | FORBIDDEN |
| Treasury | Treasury owner, financial/compliance reviewer | Coordinator | Governance, financial/compliance, security | FORBIDDEN |
| DeFi products | DeFi owner | Coordinator | Security, financial/compliance, governance | FORBIDDEN |
| DEX / swaps / routing / settlement | DEX owner | Coordinator | Security, financial/compliance, governance | FORBIDDEN |
| Trading | Trading owner | Coordinator | Security, financial/compliance, governance | FORBIDDEN |
| Mining / payouts | Mining owner | Coordinator | Financial/compliance, security, legal/compliance | FORBIDDEN |
| Marketplace / payments / settlement | Marketplace owner | Coordinator | Financial/compliance, governance, security | FORBIDDEN |
| Academy credentials / rewards | Academy owner | Coordinator | Governance, financial/compliance when rewards have value | FORBIDDEN |
| Security / audits | Security reviewer | Coordinator | Security and legal/compliance when disclosure/bounty/audit claims exist | FORBIDDEN |
| Legal / compliance | Legal/compliance reviewer | Coordinator | Legal/compliance | FORBIDDEN |
| Production readiness | Product owner, security reviewer | Coordinator | Security, QA/build evidence, governance when sensitive | FORBIDDEN |
| Wallet / on-chain execution | Product owner, security reviewer | Coordinator | Security, governance, financial/compliance when value-moving | FORBIDDEN |

## Authority Rules

- Coordinator approval is mandatory for publication.
- Domain owner review is mandatory when content describes a nucleus.
- Enhanced review is mandatory for financial, governance, legal, security, wallet, on-chain, settlement, payout, trading, swap, APY, return, treasury, tokenomics, or production-readiness claims.
- Documentation `.instructions` can prepare and validate publication packages but cannot grant publication authority by itself.
