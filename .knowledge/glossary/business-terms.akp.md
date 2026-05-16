# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: BUSINESS TERMS

[BUSINESS_TERMS]

terms:

  Business:
    status: Active
    domain: Business
    short_definition: "Business is the structured intake, scoping, delivery, service coordination, and change management runtime of Axodus."
    long_definition:
      - Business receives client, DAO, partner, internal, Academy, Marketplace, Trading, ACS, and BBA requests.
      - It transforms requests into scoped, reviewable, governable, and deliverable workflows.
    aliases:
      - Axodus Business
      - Business nucleus
    avoid:
      - generic_sales_department
      - automatic_request_approval
    related_terms:
      - Request_Intake
      - Business_Runtime
      - Change_Request
      - BBA

  Request_Intake:
    status: Active
    domain: Business
    short_definition: "Request Intake is the structured process for capturing, classifying, and preparing a request before scoping or execution."
    long_definition:
      - It collects requester identity, objective, scope, affected nuclei, governance impact, risk, dependencies, and acceptance expectations.
      - Intake is not approval or commitment.
    related_terms:
      - Business
      - Business_Runtime
      - ACS

  Business_Runtime:
    status: Draft
    domain: Business
    short_definition: "Business Runtime is the full lifecycle that moves a request from intake to classification, review, scope, delivery, acceptance, reporting, and archive."
    long_definition:
      - It includes ACS-assisted analysis, governance requirement checks, change request handling, milestone validation, and accountability records.
    related_terms:
      - Request_Intake
      - Delivery_Lifecycle
      - Change_Request

  Service_Catalog:
    status: Draft
    domain: Business
    short_definition: "The Service Catalog lists the categories of services that Axodus Business can receive, scope, coordinate, or deliver."
    long_definition:
      - It may include governance, DAO, development, Academy, Marketplace, Trading, Treasury, Tokenomics, ACS, BBA, and documentation services.
    related_terms:
      - Business
      - BBA
      - DAO_Service_Request

  Client_Lifecycle:
    status: Draft
    domain: Business
    short_definition: "The Client Lifecycle describes how a client, DAO, partner, or requester moves from initial contact through delivery and closure."
    long_definition:
      - It includes lead, qualification, intake, discovery, proposal, onboarding, delivery, acceptance, support, renewal, or closure.
    related_terms:
      - Request_Intake
      - Delivery_Lifecycle
      - Acceptance_Record

  Delivery_Lifecycle:
    status: Draft
    domain: Business
    short_definition: "The Delivery Lifecycle describes how approved scope is transformed into milestones, implementation, review, final delivery, and acceptance."
    long_definition:
      - Delivery begins only after scope is approved.
      - It must include quality gates and review requirements.
    related_terms:
      - Scope_Document
      - Milestone
      - Acceptance_Record

  Scope_Document:
    status: Active
    domain: Business
    short_definition: "A Scope Document defines deliverables, boundaries, assumptions, dependencies, risks, milestones, and acceptance criteria for a request."
    long_definition:
      - Scope protects both Axodus and the requester by clarifying what will and will not be delivered.
    related_terms:
      - Change_Request
      - Acceptance_Criteria
      - Delivery_Lifecycle

  Acceptance_Criteria:
    status: Active
    domain: Business
    short_definition: "Acceptance Criteria are the conditions used to determine whether a deliverable satisfies the approved scope."
    long_definition:
      - They should be defined before execution and used during delivery validation.
    related_terms:
      - Scope_Document
      - Acceptance_Record

  Acceptance_Record:
    status: Draft
    domain: Business
    short_definition: "An Acceptance Record documents whether the requester or responsible owner accepted the completed delivery."
    long_definition:
      - It may include deliverables reviewed, unresolved items, final notes, and archive references.
    related_terms:
      - Delivery_Lifecycle
      - Accountability

  Change_Request:
    status: Active
    domain: Business
    short_definition: "A Change Request is a formal record of a requested modification after scope has been defined or approved."
    long_definition:
      - It may affect scope, timeline, cost, risk, governance, security, or acceptance.
      - New ideas after approval may require additional time, cost, or governance review.
    aliases:
      - CR
      - scope change
    avoid:
      - silent_scope_creep
    related_terms:
      - Scope_Document
      - Business_Runtime
      - Governance_Review

  Scope_Creep:
    status: Active
    domain: Business
    short_definition: "Scope Creep occurs when work expands beyond the approved scope without a formal change request."
    long_definition:
      - Scope creep creates delivery, cost, timeline, accountability, and governance risks.
    related_terms:
      - Change_Request
      - Scope_Document

  DAO_Service_Request:
    status: Active
    domain: Business
    short_definition: "A DAO Service Request is a structured request from a DAO or sub-DAO for tools, plugins, dashboards, reporting, training, automation, or product access."
    long_definition:
      - DAO service requests may require governance review, constitutional alignment checks, and federation status validation.
    related_terms:
      - DAO
      - Plugin_Request
      - Business

  BBA:
    status: Active
    domain: Business
    short_definition: "BBA means Blockchain Business & Advertising, the Axodus layer for blockchain-native positioning, growth, advertising, and business communication."
    long_definition:
      - BBA is part of Axodus Business.
      - It focuses on ROI-aware, transparent, accurate, and governance-aligned communication for blockchain products.
      - It is not token pump marketing or generic hype.
    aliases:
      - Blockchain Business & Advertising
      - Axodus BBA
    avoid:
      - pump_marketing
      - guaranteed_ROI
      - fake_partnership_claims
    related_terms:
      - Business
      - Campaign_Strategy
      - ACS

  Campaign_Strategy:
    status: Draft
    domain: Business
    short_definition: "Campaign Strategy defines objectives, audiences, channels, messages, conversion paths, and measurement for a BBA campaign."
    long_definition:
      - In Axodus, campaign strategy must include claim review and risk-aware communication.
    related_terms:
      - BBA
      - Growth_Operations
      - Claim_Review

  Growth_Operations:
    status: Draft
    domain: Business
    short_definition: "Growth Operations are structured activities designed to improve acquisition, onboarding, retention, activation, and conversion."
    long_definition:
      - Growth operations should be tied to real metrics and avoid fake or manipulative claims.
    related_terms:
      - BBA
      - Marketplace
      - Academy

  Claim_Review:
    status: Active
    domain: Business
    short_definition: "Claim Review is the process of validating product, token, financial, audit, partnership, or performance claims before publication."
    long_definition:
      - Claim Review is especially important for BBA, public documentation, governance communication, and investor or partner materials.
    related_terms:
      - BBA
      - Risk_Management
      - Accountability

  Milestone:
    status: Active
    domain: Business
    short_definition: "A Milestone is a defined checkpoint in a delivery lifecycle with expected outputs and review criteria."
    long_definition:
      - Milestones help track progress, validate partial delivery, and detect blockers.
    related_terms:
      - Delivery_Lifecycle
      - Acceptance_Criteria

  Handoff:
    status: Active
    domain: Business
    short_definition: "A Handoff is the transfer of approved context, scope, or deliverables from one actor or phase to another."
    long_definition:
      - Examples include Business to Coder, ACS to human reviewer, delivery to client, or governance to execution.
    related_terms:
      - Delivery_Lifecycle
      - ACS
      - Accountability
