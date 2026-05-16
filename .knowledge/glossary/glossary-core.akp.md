# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: CORE GLOSSARY MODEL

[AXODUS_GLOSSARY_CORE]

## 1. Glossary Identity

glossary_role:
  primary:
    - shared_vocabulary_layer
    - terminology_standardization_system
    - semantic_alignment_layer
    - documentation_consistency_anchor
    - agent_retrieval_support_layer

glossary_is_not:
  - marketing_copy
  - legal_dictionary
  - final_implementation_spec_for_all_terms
  - replacement_for_technical_documentation
  - replacement_for_contract_review
  - replacement_for_governance_decisions

glossary_thesis:
  - Axodus has multiple nuclei, governance layers, token utility flows, AI agents, business runtimes, financial concepts, and product categories.
  - Documentation quality depends on using shared terms consistently.
  - The Glossary must reduce ambiguity between conceptual, planned, active, and technical terms.
  - Agents must rely on canonical terms instead of inventing new aliases.
  - Dangerous or misleading terms must be avoided, especially around finance, tokenomics, trading, and governance.

## 2. Term Object Model

term_object:
  fields:
    canonical_term:
      description:
        - official_term_to_use_in_docs

    aliases:
      description:
        - accepted_alternative_names_or_common_references

    deprecated_aliases:
      description:
        - terms_that_may_appear_in_old_material_but_should_not_be_used

    short_definition:
      description:
        - one_sentence_definition_for_public_glossary

    long_definition:
      description:
        - deeper_context_for_agents_or_detailed_docs

    domain:
      description:
        - related_nucleus_or_concept_area

    status:
      description:
        - Draft_Planned_Active_Conceptual_Deprecated_Needs_Review

    usage_notes:
      description:
        - how_to_use_term_safely

    avoid:
      description:
        - language_or_implications_to_avoid

    related_terms:
      description:
        - connected_concepts_for_cross_links

    public_doc_targets:
      description:
        - pages_where_term_should_be_linked_or_defined

## 3. Term Status Model

term_statuses:
  Active:
    meaning:
      - term_is_currently_valid_and_should_be_used

  Draft:
    meaning:
      - term_is_being_defined_and_may_change

  Planned:
    meaning:
      - term_describes_intended_future_system_or_capability

  Conceptual:
    meaning:
      - term_describes_design_idea_not_final_implementation

  Experimental:
    meaning:
      - term_describes_limited_or_test_feature

  Deprecated:
    meaning:
      - term_should_not_be_used_for_new_docs

  Historical:
    meaning:
      - term_may_exist_in_old_docs_but_is_not_current_canonical_language

  Needs_Review:
    meaning:
      - term_definition_or_implementation_status_uncertain

## 4. Definition Style

definition_style:
  short_definition:
    rules:
      - one_sentence
      - clear_plain_English
      - no_hype
      - no_financial_promises

  long_definition:
    rules:
      - explain_context
      - mention_related_nuclei
      - mention_limits_if_needed
      - distinguish_planned_vs_active_if relevant

  usage_notes:
    rules:
      - explain_when_to_use
      - explain_when_not_to_use
      - include_risk_language_for_sensitive_terms

  avoid:
    rules:
      - list_misleading_synonyms
      - list_unverified_claims
      - list_overstatements

## 5. Glossary Scope

in_scope:
  - ecosystem_terms
  - governance_terms
  - business_terms
  - academy_terms
  - ACS_terms
  - tokenomics_terms
  - trading_terms
  - treasury_terms
  - marketplace_terms
  - security_terms
  - accountability_terms
  - documentation_status_terms

out_of_scope:
  - detailed_legal_definitions
  - final_contract_behavior_unless_verified
  - investment_advice
  - exchange_specific_trading_rules
  - jurisdiction_specific_compliance_claims
  - fake_or_unapproved_brand_terms

## 6. Glossary Usage Rules for Agents

agent_usage_rules:
  - always_check_canonical_term_before_generating_docs
  - preserve_capitalization_for_named_layers
  - use_$Neurons_not_NRS_as_current_token_reference
  - use_ACS_for_AI_Coordination_System_after_first_definition
  - avoid_guaranteed_financial_language
  - mark_draft_concepts_as_draft
  - use_related_terms_for_cross_links
  - do_not_turn_conceptual_terms_into_live_features
  - if_term_is_unknown_or_conflicting_mark_Needs_Review

## 7. Public Glossary Requirements

public_glossary_requirements:
  - English_only
  - alphabetical_or_domain_grouped
  - concise_definitions
  - status_when_helpful
  - cross_links_when_available
  - no_internal_agent_secrets
  - no excessive implementation speculation
  - no hype
  - no unsafe financial claims

## 8. Glossary Anti-Patterns

anti_patterns:
  synonym_sprawl:
    problem:
      - multiple_terms_for_same_concept_create_confusion

  undefined_acronyms:
    problem:
      - users_do_not_understand_terms_like_ACS_BBA_DaaS

  planned_as_live:
    problem:
      - conceptual_feature_documented_as_operational

  token_as_investment:
    problem:
      - legal_and_reputational_risk

  governance_as_marketing:
    problem:
      - weakens_trust_and_clarity

  AI_as_authority:
    problem:
      - misrepresents_ACS_role

  glossary_without_links:
    problem:
      - terms_do_not_help_navigation

## 9. Public Documentation Guidance

The public glossary should:

- define terms clearly;
- include canonical names and relevant aliases;
- avoid long operational details;
- link to deeper docs;
- mark terms that are Draft, Planned, or Needs Review when necessary;
- include a terminology standards page for contributors and agents.
