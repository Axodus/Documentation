# Monitoring and Telemetry

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Mining

---

## Purpose

Mining operations require continuous monitoring. Telemetry supports accountability and helps detect downtime, reduced hashrate, overheating, pool issues, payout anomalies, and reporting gaps.

## Metrics

Metrics may include expected hashrate, actual hashrate, pool-reported hashrate, local hashrate, uptime, downtime, temperature, fan speed, power usage, error rate, accepted shares, stale shares, rejected shares, pool connection status, validator uptime, missed blocks, slashing status, rewards, costs, asset price, and conversion value.

## Alert Types

Alert types include hashrate drop, device offline, overheating, pool disconnect, payout anomaly, validator slashing risk, cost spike, and dashboard data gap.

## Monitoring Records

Fields should include record ID, period, operation ID, hardware or node reference, metrics, alerts, incidents, resolved status, and report reference.

## Reporting Rules

Telemetry should distinguish local and pool-reported hashrate, include downtime reason if known, reference reporting period, disclose missing data, create incident records for material alerts, and avoid implying guaranteed payout.

