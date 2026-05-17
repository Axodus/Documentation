# Routing and Aggregation

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX

---

## Purpose

Routing determines how a swap is executed across available liquidity. Better routing can reduce price impact or improve output, but it does not guarantee best possible execution.

## Concepts

Routes may be direct, multi-hop, split across multiple pools if supported, or supplied by an aggregator. Route scores may consider output, fees, price impact, gas, risk, or other parameters.

## Flow

1. Input and output tokens are selected.
2. Available pools are identified.
3. Token and pool statuses are checked.
4. Candidate routes are generated.
5. Output, fees, gas, and price impact are estimated.
6. Risk flags are added.
7. Selected route is displayed.
8. User confirms the swap.
9. Transaction executes or fails.

## Route Record

A route record should include route identifier, input token, output token, hops, pools, expected output, fees, price impact, gas estimate if available, risk flags, aggregator used if any, and status.

## Aggregation Considerations

External aggregators add dependency risk. The best output may not be the best risk-adjusted route. Gas cost can reduce effective output. Route results can change before execution. Aggregation must not hide token or pool warnings.

## Risk Considerations

Routing is subject to liquidity, fees, chain conditions, token availability, pool safety, external aggregators, and execution timing.
