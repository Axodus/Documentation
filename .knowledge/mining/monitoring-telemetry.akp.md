# AXODUS KNOWLEDGE PACK
# DOMAIN: MINING
# TYPE: MONITORING AND TELEMETRY MODEL

[AXODUS_MINING_MONITORING_TELEMETRY]

## 1. Monitoring Thesis

Mining operations require continuous monitoring.

Telemetry creates operational accountability and helps detect downtime, reduced hashrate, overheating, pool issues, payout anomalies, and reward reporting gaps.

## 2. Metrics

metrics:
  hashrate:
    - expected_hashrate
    - actual_hashrate
    - pool_reported_hashrate
    - local_hashrate
    - average_hashrate
    - variance

  uptime:
    - uptime_percentage
    - downtime_minutes
    - downtime_reason
    - affected_units

  hardware_health:
    - temperature
    - fan_speed
    - power_usage
    - error_rate
    - device_status

  pool_status:
    - accepted_shares
    - stale_shares
    - rejected_shares
    - pool_connection_status
    - pool_payout_status

  validator_status:
    - node_uptime
    - missed_blocks
    - slashing_status
    - rewards
    - sync_status

  rewards:
    - gross_rewards
    - fees
    - net_estimate
    - payout_threshold
    - payout_status

  financial:
    - energy_cost
    - hosting_cost
    - maintenance_cost
    - asset_price
    - conversion_value

## 3. Alert Types

alert_types:
  hashrate_drop:
    trigger:
      - actual_hashrate_below_threshold

  device_offline:
    trigger:
      - hardware_or_node_not_reporting

  overheating:
    trigger:
      - temperature_above_threshold

  pool_disconnect:
    trigger:
      - pool_connection_lost

  payout_anomaly:
    trigger:
      - expected_reward_or_payout_missing_or_unusual

  validator_slashing_risk:
    trigger:
      - missed_blocks_or_downtime_if applicable

  cost_spike:
    trigger:
      - energy_or_hosting_cost_above_assumption

  dashboard_data_gap:
    trigger:
      - telemetry_missing_for_period

## 4. Monitoring Record Fields

monitoring_record_fields:
  - record_id
  - period
  - operation_id
  - hardware_or_node_reference
  - metrics
  - alerts
  - incidents
  - resolved_status
  - report_reference

## 5. Reporting Rules

reporting_rules:
  - telemetry_should_distinguish_local_and_pool_reported_hashrate
  - downtime_should_include_reason_if known
  - reward_reports_should_reference_monitoring_period
  - missing_data_should_be_disclosed
  - alerts_should_create_incident_or_review_records_if material
  - user_dashboard_metrics_should_not_imply guaranteed payout

## 6. Public Documentation Guidance

The public Monitoring and Telemetry page should:

- list metrics and alert types;
- define monitoring records;
- explain reporting rules;
- state telemetry supports accountability but not guaranteed rewards.
