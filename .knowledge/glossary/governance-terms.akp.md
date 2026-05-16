# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: GOVERNANCE TERMS

[GOVERNANCE_TERMS]

terms:

  Governance:
    status: Active
    domain: Governance
    short_definition: "Governance is the coordination heart of Axodus, responsible for decision-making, constitutional alignment, DAO coordination, treasury visibility, and accountability."
    long_definition:
      - Governance is not only voting.
      - It coordinates product access, DAO federation, treasury-sensitive actions, proposal review, plugin approval, and public accountability.
    avoid:
      - governance_as_marketing
      - governance_as_simple_polling
    related_terms:
      - Executive_DAO
      - Boardroom_Council
      - Community_DAO
      - Proposal_Lifecycle

  Executive_DAO:
    status: Draft
    domain: Governance
    short_definition: "The Executive DAO is the strategic governance coordination layer of Axodus."
    long_definition:
      - It may coordinate roadmap alignment, technical priorities, strategic execution, and proposal sponsorship.
      - Final membership numbers or authority parameters must not be claimed unless verified.
    avoid:
      - describing_as_unchecked_central_authority
    related_terms:
      - Governance
      - Boardroom_Council
      - Roadmap

  Boardroom_Council:
    status: Draft
    domain: Governance
    short_definition: "The Boardroom Council is the supervisory governance layer intended to review risk, treasury, constitutional, plugin, and high-impact ecosystem matters."
    long_definition:
      - Historical planning may mention specific seat counts or thresholds, but these must be marked Draft or Proposed unless verified.
    aliases:
      - Boardroom
    avoid:
      - opaque_central_control_language
      - final_thresholds_without_confirmation
    related_terms:
      - Executive_DAO
      - Treasury
      - Risk_Management

  Community_DAO:
    status: Draft
    domain: Governance
    short_definition: "The Community DAO is the public participation layer of Axodus governance."
    long_definition:
      - It supports community feedback, voting, signaling, and legitimacy.
      - Mechanisms such as quadratic voting may be planned but should not be claimed live unless implemented.
    related_terms:
      - Governance
      - Quadratic_Voting
      - Proposal

  DAO:
    status: Active
    domain: Governance
    short_definition: "A DAO is a decentralized autonomous organization used for collective governance and coordination."
    long_definition:
      - In Axodus, DAOs may exist at ecosystem, local, product, or partner levels.
      - Official product access may depend on constitutional alignment and federation status.
    related_terms:
      - DAO_Federation
      - Local_DAO
      - Governance

  Local_DAO:
    status: Active
    domain: Governance
    short_definition: "A Local DAO is a DAO that may operate with local governance rules while remaining subject to Axodus constitutional guardrails when officially integrated."
    long_definition:
      - Local DAOs can request custom plugins or workflows.
      - Local autonomy must not bypass constitutional alignment, treasury controls, or accountability.
    related_terms:
      - DAO_Federation
      - Constitutional_Governance
      - Plugin_Request

  DAO_Federation:
    status: Draft
    domain: Governance
    short_definition: "DAO Federation is the model for coordinating multiple DAOs under shared constitutional principles while preserving local autonomy."
    long_definition:
      - It may use a hub-and-spoke model, federation registry, product access status, and alignment review.
      - Do not claim full registry implementation unless verified.
    related_terms:
      - Local_DAO
      - Constitution_of_Axodus
      - Federation_Registry

  Federation_Registry:
    status: Planned
    domain: Governance
    short_definition: "A Federation Registry is a proposed or implemented record of recognized DAOs, alignment status, product access, and governance metadata."
    long_definition:
      - It may track DAO status, approved plugins, supported chains, product access, risk level, and review history.
      - Mark as Planned if not implemented.
    related_terms:
      - DAO_Federation
      - Product_Access
      - Execution_Receipt

  Constitutional_Governance:
    status: Draft
    domain: Governance
    short_definition: "Constitutional Governance is the use of shared principles and guardrails to align DAOs, products, treasury actions, and ecosystem decisions."
    long_definition:
      - It helps prevent fragmentation, governance bypass, opaque treasury activity, and unreviewed product access.
    related_terms:
      - Constitution_of_Axodus
      - DAO_Federation
      - Governance

  Local_Governance:
    status: Active
    domain: Governance
    short_definition: "Local Governance refers to DAO-specific decision-making rules operating within a local community or product context."
    long_definition:
      - Local Governance may use specific plugins, thresholds, or workflows, but official Axodus integration requires constitutional alignment.
    related_terms:
      - Local_DAO
      - Plugin_Request
      - DAO_Federation

  Proposal:
    status: Active
    domain: Governance
    short_definition: "A Proposal is a structured governance decision object that describes intent, context, requested action, risk, and execution requirements."
    long_definition:
      - A proposal should include metadata, affected systems, risk level, governance routing, execution plan, and accountability requirements.
    related_terms:
      - Proposal_Lifecycle
      - Vote
      - Execution_Receipt

  Proposal_Lifecycle:
    status: Draft
    domain: Governance
    short_definition: "The Proposal Lifecycle describes how a governance idea moves from intake to review, vote, execution, receipt, accountability, and archive."
    long_definition:
      - It helps ensure governance decisions are understandable before voting and auditable after execution.
    related_terms:
      - Proposal
      - Execution_Receipt
      - Governance_Record

  Vote:
    status: Active
    domain: Governance
    short_definition: "A Vote is a governance participation action used to express approval, rejection, preference, or signaling."
    long_definition:
      - Voting mechanisms may vary by DAO, plugin, or governance layer.
      - Do not claim a specific vote mechanism is live unless verified.
    related_terms:
      - Community_DAO
      - Quadratic_Voting
      - Voting_Plugin

  Quadratic_Voting:
    status: Planned
    domain: Governance
    short_definition: "Quadratic Voting is a voting mechanism intended to reduce dominance by making voting power scale sublinearly."
    long_definition:
      - It may be considered for community governance to reduce token whale dominance.
      - Do not claim it is implemented unless verified.
    related_terms:
      - Community_DAO
      - Vote
      - Governance_Capture

  Plugin:
    status: Active
    domain: Governance
    short_definition: "A Plugin is a modular extension that adds or modifies governance, voting, execution, registry, reporting, or product access behavior."
    long_definition:
      - Plugins can be local, shared, global, experimental, active, or deprecated.
      - High-risk plugins require governance and security review.
    related_terms:
      - Plugin_Request
      - Voting_Plugin
      - Execution_Plugin

  Plugin_Request:
    status: Active
    domain: Governance
    short_definition: "A Plugin Request is a structured request for a custom governance or operational extension."
    long_definition:
      - Plugin requests usually enter through Business, receive ACS analysis, require technical scoping, and may require governance/security review.
    related_terms:
      - Business
      - ACS
      - Governance

  Voting_Plugin:
    status: Draft
    domain: Governance
    short_definition: "A Voting Plugin is a governance extension that defines how votes are cast, weighted, counted, or validated."
    long_definition:
      - Examples may include DAO-specific voting models.
      - Do not claim specific deployments unless verified.
    related_terms:
      - Plugin
      - Vote
      - Local_DAO

  Execution_Plugin:
    status: Draft
    domain: Governance
    short_definition: "An Execution Plugin is a governance extension that defines how approved decisions are executed."
    long_definition:
      - Execution plugins may affect contracts, treasury, or product access and therefore require strong review.
    related_terms:
      - Plugin
      - Execution_Receipt
      - Security_Review

  Execution_Receipt:
    status: Planned
    domain: Governance
    short_definition: "An Execution Receipt is a structured record showing how an approved governance action was executed."
    long_definition:
      - It links proposal intent to on-chain or off-chain evidence, responsible actors, status, and accountability records.
      - Mark as Planned if not implemented.
    related_terms:
      - Governance_Record
      - Proposal_Lifecycle
      - Accountability

  Governance_Record:
    status: Planned
    domain: Governance
    short_definition: "A Governance Record is a preserved record of proposal context, discussion, vote, execution, and accountability."
    long_definition:
      - It may include proposal metadata, voting result, execution receipt, related PRs, reports, and follow-up items.
    related_terms:
      - Proposal
      - Execution_Receipt
      - Accountability

  Governance_Capture:
    status: Active
    domain: Governance
    short_definition: "Governance Capture occurs when a small group or dominant actor controls governance outcomes against broader ecosystem interests."
    long_definition:
      - Governance design should include anti-capture considerations such as transparency, layered review, public discussion, and possibly quadratic voting or delegation mechanisms.
    related_terms:
      - Community_DAO
      - Boardroom_Council
      - Risk_Management

  Reason_Code:
    status: Draft
    domain: Governance
    short_definition: "A Reason Code is a standardized label explaining why a proposal, request, review, or execution received a specific status."
    long_definition:
      - Reason codes help governance, Business, ACS, and accountability systems preserve decision rationale.
    related_terms:
      - Proposal_Lifecycle
      - ACS
      - Accountability
