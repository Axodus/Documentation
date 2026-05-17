# Governance Alignment

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DeFi / Governance

---

## Purpose

Material DeFi actions must be governance-aligned because protocol choices, strategies, parameters, incentives, and emergency controls can affect users, Treasury, Tokenomics, and ecosystem trust.

## Governance-Sensitive Items

Sensitive items include protocol whitelisting, chain or bridge approval, strategy approval, fees, risk limits, reward rates, allocation rules, withdrawal rules, DaaS launches, staking products, vaults, ETF DaaS baskets, liquidity incentives, token utility, emergency pause, protocol deprecation, and treasury exposure.

## Routing Levels

| Level | Examples |
| --- | --- |
| No Governance | Educational content without claims, internal research note |
| Governance Visibility | Low-risk strategy research, protocol watchlist update |
| Governance Review | Protocol integration review, user-facing product policy, reward or access policy |
| Formal Proposal | Treasury allocation, vault launch, ETF DaaS basket, incentive program, material parameter change |
| Emergency Review | Exploit, protocol failure, oracle failure, major treasury loss |

## Reason Codes

Use reason codes such as `DEFI_GOVERNANCE_REVIEW_REQUIRED`, `PROTOCOL_WHITELIST_REQUIRED`, `STRATEGY_APPROVAL_REQUIRED`, `TREASURY_EXPOSURE_REVIEW_REQUIRED`, `TOKENOMICS_INCENTIVE_REVIEW_REQUIRED`, `SECURITY_REVIEW_REQUIRED`, and `EMERGENCY_DEFI_ACTION`.

## Risk Considerations

Governance does not remove protocol, market, contract, or legal risk. Governance decisions must respect security, treasury, compliance, and user protection constraints.

## Related Pages

- [Governance Overview](../governance/overview.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Security and Smart Contracts](security-and-smart-contracts.md)
- [Reporting and Accountability](reporting-and-accountability.md)
