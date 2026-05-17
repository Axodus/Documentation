# Pools, Hashrate and Network Difficulty

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Mining

---

## Purpose

Mining rewards depend heavily on hashrate, network difficulty, block rewards, pool performance, and payout method.

## Core Concepts

Hashrate is computational power contributed to a mining network or pool. Network difficulty reflects how hard it is to mine blocks. A block reward is paid by a network for a valid block or equivalent event. A mining pool combines hashrate and shares rewards under pool rules. Pool fees reduce gross rewards.

## Payout Methods

Common methods include PPS, PPLNS, FPPS, Solo, and pool-specific custom methods. Solo mining carries high variance. Pool methods must be documented because they affect payout timing, fees, and variance.

## Pool Account Fields

Fields may include pool ID, network, pool name, payout method, pool fee, worker IDs, payout address, minimum payout, reported hashrate, stale share rate, rejected share rate, payout frequency, status, and risk notes.

## Hashrate Reporting Fields

Reports should distinguish expected, actual, average, peak, pool-reported, and locally reported hashrate. They should include stale shares, rejected shares, downtime, and variance notes.

## Sensitivity Factors

Difficulty increases, block reward changes, asset price changes, pool luck, pool fees, stale shares, rejected shares, and downtime can all reduce expected output. Hashrate does not guarantee fixed payouts.

