# AXODUS KNOWLEDGE PACK
# DOMAIN: BBA AGENCY
# TYPE: ACS AGENT WORKFLOW MODEL

[BBA_ACS_AGENT_WORKFLOW]

## 1. ACS Workflow Thesis

ACS agents can significantly improve BBA throughput and quality by supporting research, positioning, drafting, claim review, audience analysis, campaign analysis, and reporting.

Agents must work inside Business and Runtime boundaries.

Agents assist. They do not final-approve public claims.

## 2. Agent Roles

agent_roles:
  Morpheus:
    primary_BBA_role:
      - narrative_strategy
      - positioning
      - governance_alignment
      - ecosystem_consistency
      - documentation_coherence

  Agent_Smith:
    primary_BBA_role:
      - adversarial_claim_review
      - hype_detection
      - unsafe_claim_detection
      - risk_stress_testing
      - governance_bypass_detection

  Trinity:
    primary_BBA_role:
      - trading_claim_review
      - treasury_performance_context
      - PnL_language_review
      - risk_disclosure_support
      - financial_metric_context

  Coder:
    primary_BBA_role:
      - implement_docs_pages
      - update_static_site
      - structure_markdown
      - integrate_navigation
      - build_campaign_pages_if_requested

## 3. ACS BBA Workflow

workflow:
  - BBA_request_received_through_Business_or_Runtime
  - context_loaded_from_knowledge_packs
  - Morpheus_prepares_positioning_or_narrative_draft
  - Agent_Smith_reviews_claims_and_risks
  - Trinity_reviews_financial_trading_or_treasury_claims_if_relevant
  - human_Business_or_BBA_reviewer_validates
  - governance_or_security_review_if_required
  - final_material_approved
  - campaign_or_docs_published
  - reporting_and_accountability_record_created

## 4. Agent Output Types

output_types:
  positioning_brief:
    fields:
      - product
      - audience
      - value_proposition
      - messages
      - risks
      - claim_notes

  claim_risk_report:
    fields:
      - claims
      - risk_level
      - evidence_required
      - safer_language
      - escalation_needed

  campaign_brief:
    fields:
      - objective
      - audience
      - channels
      - messages
      - deliverables
      - metrics
      - review_requirements

  content_draft:
    fields:
      - channel
      - copy
      - CTA
      - claims
      - disclaimers

  report_draft:
    fields:
      - results
      - metrics
      - limitations
      - lessons
      - next_actions

## 5. Agent Boundaries

agents_can:
  - analyze
  - draft
  - summarize
  - identify_risk
  - suggest_safer_language
  - prepare_handoffs
  - support_reporting

agents_cannot:
  - approve_sensitive_claims_final
  - invent_evidence
  - claim_partnerships
  - guarantee_results
  - publish_without_review_if_sensitive
  - bypass_Business_scope
  - override_Governance
  - make_legal_or_compliance_certifications

## 6. Public Documentation Guidance

The public ACS Agent Workflow page should:

- explain how ACS supports BBA;
- define agent roles;
- show workflow and output types;
- clarify boundaries and review requirements.
