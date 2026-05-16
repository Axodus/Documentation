# AXODUS KNOWLEDGE PACK
# DOMAIN: ACS
# TYPE: MEMORY AND KNOWLEDGE MODEL

[ACS_MEMORY_AND_KNOWLEDGE]

## 1. Memory Thesis

ACS requires persistent semantic memory because Axodus is too complex to rely only on live prompts or isolated conversations.

Agents need access to stable, curated, structured, and retrievable context.

Knowledge packs solve this problem by acting as an AI-native semantic memory layer.

The `.knowledge` directory is not public documentation. It is agent memory infrastructure.

Public docs should derive from it, but knowledge packs can be denser, more explicit, and more operational.

## 2. Memory Layers

memory_layers:
  semantic_knowledge_packs:
    description:
      - structured_domain_context_for_agents
    examples:
      - core
      - governance
      - academy
      - business
      - ACS
      - trading
      - treasury

  public_documentation:
    description:
      - canonical_human_readable_docs
    location:
      - docs
      - root_files

  planning_documents:
    description:
      - drafts_notes_research_historical_material
    location:
      - Documents

  operational_memory:
    description:
      - task_outputs_reviews_decisions_summaries
    status:
      - may_be_implemented_in_ACS_runtime_later

  agent_local_memory:
    description:
      - individual_agent_context_identity_and_state
    examples:
      - Morpheus_memory
      - Trinity_memory
      - Smith_memory

## 3. Knowledge Pack Purpose

knowledge_pack_purpose:
  - reduce_context_loss
  - improve_documentation_consistency
  - support_agent_retrieval
  - preserve_architectural_invariants
  - guide_Coder_agents
  - prevent_obsolete_docs_from_becoming_truth
  - support_multi_agent_coordination
  - enable_future_MCP_and_ACS_runtime_indexing

## 4. Knowledge Pack Format

format_principles:
  - Markdown_readable
  - semantic_blocks
  - explicit_relationships
  - invariants
  - anti_patterns
  - workflows
  - status_models
  - risk_models
  - public_documentation_guidance

why_not_binary_or_obscure_encoding:
  - semantic_retrieval_works_better_with_readable_structured_text
  - agents_reason_better_over_taxonomy_and_relationships
  - humans_can_review_and_maintain_it
  - future_agents_can_index_it
  - compressed_binary_reduces_usefulness_and_auditability

## 5. Knowledge Pack Lifecycle

lifecycle:
  1_create:
    - domain_context_generated_from_current_understanding

  2_review:
    - human_or_domain_owner_validates_content

  3_use:
    - Coder_and_agents_generate_docs_or_tasks_from_pack

  4_compare:
    - outputs_compared_against_knowledge_invariants

  5_update:
    - pack_updated_when_project_model_changes

  6_archive_or_supersede:
    - outdated_pack_marked_or_replaced

## 6. Memory Validation Rules

validation_rules:
  - unverified_agent_output_should_not_become_knowledge
  - major_architecture_changes_require_review
  - outdated_content_should_be_marked_Superseded_or_Deprecated
  - public_docs_should_not_conflict_with_current_knowledge_packs
  - knowledge_packs_should_not_include_secrets
  - knowledge_packs_should_mark_uncertainty
  - agent_memory_should_distinguish_fact_plan_and_hypothesis

## 7. Dreaming / Assimilation Concept

dreaming_concept:
  definition:
    - periodic_agent_memory_assimilation_and_reconciliation_process

purpose:
  - reduce_redundancy
  - align_agent_memory_with_governance_limits
  - summarize_recent_changes
  - detect_contradictions
  - preserve_validated_learnings
  - remove_or_mark_outdated_assumptions

possible_cadences:
  light_assimilation:
    - frequent
    - summarizes_recent_context
    - low_risk

  deep_assimilation:
    - periodic
    - reviews_domain_knowledge
    - requires_validation

  governance_assimilation:
    - triggered_by_major_governance_decision
    - updates_constitutional_or_policy_context

dreaming_warning:
  - autonomous_memory_updates_can_amplify_errors
  - outputs_should_be_reviewed_before_becoming_source_of_truth

## 8. Knowledge Object Types

knowledge_object_types:
  invariant:
    description:
      - statement_that_should_remain_true_across_docs_and_tasks

  workflow:
    description:
      - defined_process_or_runtime

  status_model:
    description:
      - allowed_statuses_and_meanings

  relationship_map:
    description:
      - connection_between_nuclei_agents_or_systems

  risk_model:
    description:
      - risks_controls_and_anti_patterns

  directive:
    description:
      - instructions_for_public_docs_or implementation

  assumption:
    description:
      - plausible_but_unverified_context

  open_question:
    description:
      - unresolved_design_or_policy_issue

## 9. Retrieval Rules

retrieval_rules:
  - agents_should_load_domain_pack_before_generating_domain_docs
  - agents_should_load_core_pack_for_any_ecosystem_level_task
  - agents_should_load_governance_pack_for policy_DAO_treasury_or_tokenomics_tasks
  - agents_should_load_security_risk_pack_for_tool_contract_or_financial_tasks
  - agents_should_use_manifest_to_identify_relevant_files
  - agents_should_not_rely_on_old_public_docs_if_knowledge_pack_says_docs_are_obsolete

## 10. Memory Risks

memory_risks:
  stale_context:
    description:
      - project_changes_but_knowledge_pack_not_updated

  contamination:
    description:
      - false_or_unreviewed_output_written_as_truth

  over_compression:
    description:
      - context_becomes_too_cryptic_for_reasoning

  duplication_conflict:
    description:
      - multiple_files_define_same_rule_differently

  secret_leakage:
    description:
      - private_credentials_or_sensitive_data_written_to_memory

  agent_overtrust:
    description:
      - agent_treats_memory_as_final_even_when_status_is_Draft

## 11. Public Documentation Guidance

The public Memory and Knowledge page should:

- explain `.knowledge` as internal semantic memory;
- explain difference between `.knowledge`, `/docs`, and `/Documents`;
- explain knowledge pack lifecycle;
- explain validation rules;
- explain why readable semantic packs are preferred over binary compression;
- explain that public docs derive from validated knowledge.
