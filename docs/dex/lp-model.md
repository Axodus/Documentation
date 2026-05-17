# LP Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

Liquidity providers enable swaps by depositing assets into pools. LPs may earn fees or incentives, but can lose value.

## Concepts

An LP is a user, Treasury, or actor who deposits assets into a pool. An LP token or record may represent pool share if implemented. Fees accrued are variable and depend on pool activity. Impermanent loss is the difference between an LP position and simply holding the assets.

## LP Flow

1. User selects pool.
2. Pool risk and token status are displayed.
3. Deposit amounts are entered.
4. Pool share is estimated.
5. Impermanent loss warning is displayed.
6. User approves tokens if needed.
7. User adds liquidity.
8. LP position is created.
9. Fees and position are tracked if supported.
10. User removes liquidity when desired.
11. Final received assets depend on pool state.

## LP Position Record

An LP position should include owner reference, pool, deposited assets, pool share, entry prices if available, current value estimate, fees accrued if available, incentives if any, impermanent loss context, status, and transaction references.

## Risk Considerations

LP risks include impermanent loss, token failure, low volume, smart contract risk, withdrawal risk, and incentive changes. LP fees and incentives are variable and not guaranteed.
