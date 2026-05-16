# AXODUS KNOWLEDGE PACK MANIFEST
# DOMAIN: ACADEMY
# TYPE: FILE MAP AND SEMANTIC INDEX

[MANIFEST]

domain:
  name: Academy
  role: education_onboarding_reputation_and_token_utility_nucleus
  maturity: evolving
  documentation_language: English
  public_docs_status: reconstruction_required

core_files:
  - README.md
  - manifest.akp.md
  - academy-core.akp.md
  - academy-architecture.akp.md
  - learn-to-win.akp.md
  - proof-of-knowledge.akp.md
  - token-reward-flows.akp.md
  - locked-rewards.akp.md
  - course-publishing.akp.md
  - tutor-validation.akp.md
  - marketplace-integration.akp.md
  - governance-business-acs-relations.akp.md
  - academy-risk-and-abuse-prevention.akp.md
  - academy-page-directives.akp.md

semantic_domains:
  academy_identity:
    source_file: academy-core.akp.md
    concepts:
      - academy_as_onboarding_engine
      - academy_as_education_nucleus
      - academy_as_token_utility_layer
      - academy_as_reputation_layer
      - academy_as_marketplace_connected_product

  academy_architecture:
    source_file: academy-architecture.akp.md
    concepts:
      - learning_runtime
      - reward_runtime
      - certification_runtime
      - tutor_runtime
      - marketplace_runtime
      - governance_runtime

  learn_to_win:
    source_file: learn-to-win.akp.md
    concepts:
      - gamified_learning
      - progression
      - rewards
      - milestones
      - anti_farming
      - anti_sybil

  proof_of_knowledge:
    source_file: proof-of-knowledge.akp.md
    concepts:
      - knowledge_validation
      - assessment
      - certification
      - reputation
      - governance_readiness

  rewards:
    source_file: token-reward-flows.akp.md
    concepts:
      - reward_source
      - free_course_rewards
      - paid_course_rewards
      - internal_utility
      - reward_status
      - contract_enforcement

  locked_rewards:
    source_file: locked-rewards.akp.md
    concepts:
      - locked_balance
      - non_transferable_if_enforced
      - marketplace_use
      - voting_use
      - platform_access
      - unlock_conditions

  course_publishing:
    source_file: course-publishing.akp.md
    concepts:
      - tutor_courses
      - company_courses
      - pricing
      - royalties
      - commissions
      - accepted_currencies
      - course_parameters

  tutor_validation:
    source_file: tutor-validation.akp.md
    concepts:
      - tutor_quality
      - constitutional_alignment
      - reputation
      - review_process
      - abuse_prevention

  marketplace_integration:
    source_file: marketplace-integration.akp.md
    concepts:
      - course_commerce
      - educational_products
      - token_utility
      - fee_distribution
      - access_rules

  relationships:
    source_file: governance-business-acs-relations.akp.md
    concepts:
      - governance_policy
      - Business_intake
      - ACS_review
      - quality_control
      - reward_policy_review

  risk:
    source_file: academy-risk-and-abuse-prevention.akp.md
    concepts:
      - sybil_attack
      - reward_farming
      - low_quality_courses
      - misleading_token_claims
      - tutor_fraud
      - credential_abuse

public_documentation_targets:
  overview:
    target: docs/academy/overview.md
    source_files:
      - academy-core.akp.md
      - academy-architecture.akp.md

  learn_to_win:
    target: docs/academy/learn-to-win.md
    source_files:
      - learn-to-win.akp.md
      - academy-risk-and-abuse-prevention.akp.md

  proof_of_knowledge:
    target: docs/academy/proof-of-knowledge.md
    source_files:
      - proof-of-knowledge.akp.md
      - tutor-validation.akp.md

  course_publishing:
    target: docs/academy/course-publishing.md
    source_files:
      - course-publishing.akp.md
      - marketplace-integration.akp.md

  tutor_validation:
    target: docs/academy/tutor-validation.md
    source_files:
      - tutor-validation.akp.md
      - governance-business-acs-relations.akp.md

  token_reward_flows:
    target: docs/academy/token-reward-flows.md
    source_files:
      - token-reward-flows.akp.md
      - locked-rewards.akp.md

  locked_rewards:
    target: docs/academy/locked-rewards.md
    source_files:
      - locked-rewards.akp.md
      - token-reward-flows.akp.md

  marketplace_integration:
    target: docs/academy/marketplace-integration.md
    source_files:
      - marketplace-integration.akp.md
      - course-publishing.akp.md

  governance_alignment:
    target: docs/academy/governance-alignment.md
    source_files:
      - governance-business-acs-relations.akp.md
      - academy-risk-and-abuse-prevention.akp.md

global_invariants:
  - academy_is_core_onboarding_layer
  - academy_is_not_investment_product
  - rewards_depend_on_contract_and_policy
  - free_course_rewards_may_be_locked
  - paid_course_rewards_may_follow_different_rules
  - locked_rewards_must_not_be_called_transferable
  - token_claims_must_be_careful
  - tutor_quality_requires_validation
  - marketplace_integration_requires_fee_and_access_rules
  - governance_may_review_reward_and_quality_policy
  - ACS_supports_but_does_not_decide
  - public_docs_must_be_English
