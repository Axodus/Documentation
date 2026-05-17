# DeFi Architecture

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DeFi

---

## Purpose

Axodus DeFi architecture separates products, protocol integrations, strategies, vaults, risk, governance, treasury, tokenomics, education, security, monitoring, reporting, and ACS support.

## Architecture Layers

- Product layer: DaaS services, ETF DaaS design, vaults, staking products, liquidity products, and user-facing DeFi modules.
- Protocol integration layer: external protocol adapters, chain connectors, DEX connectors, staking protocols, lending protocols if approved, and liquidity pool integrations.
- Vault and strategy layer: deposit and withdrawal logic, strategy allocation, rebalancing, accounting, and position tracking if implemented.
- Oracle and data layer: price feeds, APY or rate sources, TVL, liquidity data, protocol health inputs, and risk metrics.
- Access layer: product access rules, user eligibility, Academy requirements, token or subscription gates if defined, and DAO or treasury role access.
- Risk layer: protocol, smart contract, market, liquidity, oracle, bridge, and concentration risk.
- Governance layer: protocol whitelisting, strategy approval, parameter control, emergency pause, and treasury exposure approval.
- Treasury layer: capital allocation, exposure tracking, reserve impact, yield or loss reporting, and strategy limits.
- Security layer: contract review, audit status, access control, upgrade review, and incident response.
- Monitoring layer: strategy status, protocol health, APY changes, TVL changes, liquidity depth, incidents, and oracle status.
- Reporting layer: DeFi reports, strategy reports, treasury exposure reports, user product reports if applicable, and accountability records.
- ACS layer: research, risk flagging, report drafting, protocol summaries, and claim review support.

## Core Objects

| Object | Purpose |
| --- | --- |
| DeFiProduct | Product category, status, audience, risk level, governance status, and documentation link |
| ProtocolIntegration | Protocol, chain, integration type, risk, security review, governance status, and status |
| Strategy | Objective, protocols, assets, allocation rules, limits, expected metrics, and approval reference |
| Vault | Assets, strategy, deposit and withdrawal rules, fees, accounting model, risk level, and status |
| RiskLimit | Limit type, threshold, breach action, and governance status |
| DeFiReport | Exposure, yield or loss, fees, incidents, limitations, and governance references |

## Architecture Invariants

Security review is required for contract-dependent products. Every strategy requires risk classification. Governance controls material parameter and strategy changes. Treasury tracks capital exposure. Reports must include limitations. Public docs must not claim live integrations unless verified.
