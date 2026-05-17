# Liquidity Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DeFi

---

## Purpose

Liquidity is essential for DeFi products, token markets, DEX activity, vault exits, and treasury operations. It must be measured, managed, incentivized when approved, and reported.

## Concepts

Liquidity is the ability to enter, exit, trade, or settle without large price impact. Liquidity pools hold assets for AMM or DeFi protocol activity. LP tokens may represent liquidity provider shares. Slippage is the difference between expected and executed price. Impermanent loss is LP underperformance relative to holding assets. Depth is available liquidity near current price.

## Liquidity Models

Models may include treasury-supported liquidity, incentive-supported liquidity, marketplace or product liquidity, external protocol liquidity, and DEX liquidity.

## Policy Fields

Liquidity policy should define program identifier, objective, assets, target pool or protocol, allocation, incentives if any, expected duration, risk limits, impermanent loss policy, withdrawal policy, governance status, treasury impact, and reporting frequency.

## Metrics

Metrics may include TVL, pool depth, volume, slippage, spread, utilization, impermanent loss estimate, fees generated, incentive cost, net effect after incentives, and treasury exposure.

## Risk Considerations

Liquidity risks include impermanent loss, low depth, incentive mining exits, treasury exposure, protocol exploits, and misleading liquidity claims.

## Related Pages

- [DEX Overview](../dex/overview.md)
- [Treasury Alignment](treasury-alignment.md)
- [Tokenomics Alignment](tokenomics-alignment.md)
- [Risk Management](risk-management.md)
