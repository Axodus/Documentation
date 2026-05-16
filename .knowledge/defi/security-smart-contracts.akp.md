# AXODUS KNOWLEDGE PACK
# DOMAIN: DEFI
# TYPE: SECURITY AND SMART CONTRACTS MODEL

[AXODUS_DEFI_SECURITY_SMART_CONTRACTS]

## 1. Security Thesis

DeFi products are only as trustworthy as their contracts, integrations, controls, and operational security.

Security review must happen before production deployment or treasury exposure.

Do not claim "audited" unless a real audit exists.

## 2. Security Scope

security_scope:
  - smart_contracts
  - protocol_integrations
  - vaults
  - staking_contracts
  - reward_contracts
  - access_control
  - upgradeability
  - oracle_dependencies
  - bridge_dependencies
  - admin_roles
  - frontend_transaction_safety
  - monitoring_and_incident_response

## 3. Security Review Types

review_types:
  internal_review:
    description:
      - developer_or_security_team_reviews_code_and_design

  external_audit:
    description:
      - independent_auditor_reviews_contracts_or_system

  formal_verification:
    description:
      - mathematical_or_formal_methods_for_specific_properties_if used

  test_coverage_review:
    description:
      - unit_integration_fuzz_or_invariant_tests

  economic_security_review:
    description:
      - incentive_or_attack_surface_review

  protocol_due_diligence:
    description:
      - external_protocol_risk_review

## 4. Smart Contract Checklist

checklist:
  - access_control_defined
  - admin_roles_minimized
  - upgradeability_risks_reviewed
  - pause_or_emergency_control_defined_if needed
  - reentrancy_reviewed
  - oracle_manipulation_reviewed
  - precision_and_rounding_reviewed
  - share_accounting_reviewed_if vault
  - fee_logic_reviewed
  - withdrawal_logic_reviewed
  - reward_logic_reviewed
  - external_call_risk_reviewed
  - tests_written
  - deployment_and_verification_plan_ready
  - incident_response_plan_defined

## 5. Security Statuses

security_statuses:
  Not_Reviewed:
    meaning:
      - no_security_review_completed

  Internal_Review:
    meaning:
      - internal_review_completed_or_in_progress

  External_Audit_Pending:
    meaning:
      - audit_planned_or_in_progress

  Audited:
    meaning:
      - real_audit_completed_with_scope_and_report

  Issues_Found:
    meaning:
      - review_found_findings_to_fix

  Fixed_Pending_Verification:
    meaning:
      - fixes_applied_but_not_confirmed

  Approved_For_Test:
    meaning:
      - safe_for_limited_testing_under_scope

  Approved_For_Production:
    meaning:
      - approved_under_defined_scope_and_risk

## 6. Incident Response

incident_response:
  - detect_issue
  - pause_if_possible
  - assess_impact
  - protect_users_or_treasury
  - notify_required_stakeholders
  - investigate_root_cause
  - fix_or_mitigate
  - produce_incident_report
  - update_policy_or_contracts_if needed

## 7. Public Documentation Guidance

The public Security and Smart Contracts page should:

- define security scope and review types;
- list checklist and statuses;
- explain incident response;
- avoid claiming audit or safety without evidence.
