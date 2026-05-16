# AXODUS TOKENOMICS KNOWLEDGE PACK

Domain: Tokenomics  
Layer: Semantic Memory  
Audience: Agent Coder, ACS agents, documentation agents, governance reviewers, treasury reviewers, product planners, smart contract reviewers  
Status: Draft  
Version: 0.1.0  

## Purpose

This folder contains the deep semantic knowledge base for the Tokenomics nucleus of Axodus.

These files are not public-facing documentation pages. They are agent-oriented knowledge packs designed to help coding agents, documentation agents, ACS agents, governance agents, treasury reviewers, smart contract reviewers, and future MCP systems generate accurate and consistent public documentation and implementation plans.

The Tokenomics nucleus defines the economic language, utility model, reward rules, policy boundaries, governance relationship, risk controls, and contract-dependent behavior of `$Neurons` and related Axodus incentive mechanisms.

## Tokenomics Thesis

Axodus Tokenomics must be documented as an ecosystem utility and incentive model, not as an investment promise.

`$Neurons` is the canonical token notation and should be described as a utility, reward, access, coordination, and governance participation asset inside the Axodus ecosystem.

Tokenomics connects:

- Academy rewards;
- Learn-to-Win incentives;
- free-course locked/internal-use balances;
- paid-course reward policies;
- Marketplace utility;
- product access rules;
- governance participation;
- Business service flows;
- Treasury reporting;
- DaaS/DeFi risk policy;
- ACS-assisted analysis;
- Accountability and public reporting.

Tokenomics must never be described as guaranteed profit, guaranteed yield, passive income, risk-free reward, guaranteed APY, guaranteed appreciation, or investment return.

## Important Status Note

Some Tokenomics details may exist as historical, conceptual, planned, or draft models. Agents must not convert those into final public claims unless implementation and governance approval are verified.

Known design references that must be handled carefully:

- canonical token notation: `$Neurons`;
- older symbol references such as `NRS` should be treated as deprecated or historical unless revalidated;
- historical/planned supply reference: 10,000,000 total supply;
- historical/planned transaction fee references: 0.35% burn, 0.25% liquidity, 0.5% treasury;
- free-course Academy rewards may be locked or internal-use;
- paid-course rewards may follow different rules;
- locked rewards may support Marketplace, governance, or access utility only if policy and contracts support it;
- same-token locked reward architecture is preferred conceptually over creating unnecessary token fragmentation, but implementation must be validated.

## Required Public Tokenomics Pages

The public documentation generated from this knowledge pack should include at least:

- `docs/tokenomics/overview.md`
- `docs/tokenomics/neurons-token.md`
- `docs/tokenomics/utility-model.md`
- `docs/tokenomics/supply-and-emission.md`
- `docs/tokenomics/reward-policy.md`
- `docs/tokenomics/locked-rewards.md`
- `docs/tokenomics/academy-rewards.md`
- `docs/tokenomics/marketplace-utility.md`
- `docs/tokenomics/governance-participation.md`
- `docs/tokenomics/treasury-alignment.md`
- `docs/tokenomics/contract-dependencies.md`
- `docs/tokenomics/risk-and-compliance.md`
- `docs/tokenomics/reporting-and-accountability.md`

## Non-Negotiable Tokenomics Invariants

- `$Neurons` is the canonical token notation.
- Do not use `NRS` as the primary token symbol in new docs unless documenting historical references.
- Tokenomics must not be framed as investment advice or financial guarantee.
- `$Neurons` must be framed through utility, access, rewards, governance participation, and ecosystem coordination.
- Reward rules must distinguish free-course, paid-course, locked, unlocked, internal-use, claimable, spent, expired, and revoked states.
- Locked reward behavior must not be claimed unless contracts and policy support it.
- Academy reward policy must include anti-abuse and anti-farming controls.
- Marketplace utility must define settlement questions before claiming final behavior.
- Governance participation must not assume locked rewards can vote unless explicitly approved and implemented.
- Treasury-related token flows must be reportable and accountable.
- Contract-dependent behavior must be marked as Draft, Planned, or Needs Review until validated.
- Public Tokenomics documentation must be written in English.
