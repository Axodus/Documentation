---
schema_version: "1.0.0"
document_id: "MINING-GDE-007"
aliases: []
document_type: "GUIDE"
title: "Monitoring and Telemetry"
summary: "Defines the monitoring and telemetry model for Axodus Mining within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "MINING"
authority_level: "CORE"
author: "Axodus Mining"
owner: "Axodus Mining"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-17"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-15"
supersedes: []
relationships: [{type: "RELATES_TO", target: "MINING-GDE-001"}, {type: "RELATES_TO", target: "MINING-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-06"]
related_requirements: ["DOCUMENTATION-EPIC-06-REQ-05"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MINING"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/mining/monitoring-and-telemetry.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Monitoring and Telemetry

## Purpose

Mining operations require continuous monitoring. Telemetry supports accountability and helps detect downtime, reduced hashrate, overheating, pool issues, payout anomalies, and reporting gaps.

This page documents the monitoring and telemetry model for Mining. It must not
be read as proof that a live production monitoring stack, payout-monitoring
pipeline, or continuously operating mining deployment is already active.

## Metrics

Metrics may include expected hashrate, actual hashrate, pool-reported hashrate, local hashrate, uptime, downtime, temperature, fan speed, power usage, error rate, accepted shares, stale shares, rejected shares, pool connection status, validator uptime, missed blocks, slashing status, rewards, costs, asset price, and conversion value.

## Alert Types

Alert types include hashrate drop, device offline, overheating, pool disconnect, payout anomaly, validator slashing risk, cost spike, and dashboard data gap.

## Monitoring Records

Fields should include record ID, period, operation ID, hardware or node reference, metrics, alerts, incidents, resolved status, and report reference.

## Reporting Rules

Telemetry should distinguish local and pool-reported hashrate, include downtime reason if known, reference reporting period, disclose missing data, create incident records for material alerts, and avoid implying guaranteed payout.
