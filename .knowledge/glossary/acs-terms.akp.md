# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: ACS TERMS

[ACS_TERMS]

terms:

  ACS:
    status: Active
    domain: ACS
    short_definition: "ACS means AI Coordination System, the AI-assisted operational intelligence and coordination layer of Axodus."
    long_definition:
      - ACS supports Business, Governance, Academy, Trading, Treasury, Marketplace, documentation, and operations through analysis, classification, structured outputs, and knowledge memory.
      - ACS does not replace governance or human accountability.
    aliases:
      - AI Coordination System
      - Axodus ACS
    avoid:
      - autonomous_final_authority
      - AI_governance_replacement
    related_terms:
      - Morpheus
      - Trinity
      - Agent_Smith
      - Semantic_Memory

  Agent:
    status: Active
    domain: ACS
    short_definition: "An Agent is an AI role or runtime actor with defined responsibilities, outputs, boundaries, and permissions."
    long_definition:
      - In Axodus, agents should have clear scope and must not receive unrestricted authority by default.
    related_terms:
      - ACS
      - Morpheus
      - Trinity
      - Agent_Smith

  Morpheus:
    status: Active
    domain: ACS
    short_definition: "Morpheus is the ACS agent archetype focused on strategy, narrative, governance alignment, and ecosystem coherence."
    long_definition:
      - Morpheus helps preserve Axodus mission, documentation clarity, constitutional alignment, and product/nucleus coherence.
      - Morpheus does not replace governance.
    related_terms:
      - ACS
      - Governance
      - Documentation

  Trinity:
    status: Active
    domain: ACS
    short_definition: "Trinity is the ACS agent archetype focused on trading, operations, execution intelligence, P&L context, and financial risk monitoring."
    long_definition:
      - Trinity can support trading and treasury analysis but must not be described as an autonomous manager of user or treasury funds.
    avoid:
      - guaranteed_trading_profit
      - autonomous_treasury_trader
    related_terms:
      - Trading
      - Treasury
      - Risk_Management

  Agent_Smith:
    status: Active
    domain: ACS
    short_definition: "Agent Smith is the ACS agent archetype focused on adversarial review, stress testing, abuse resistance, and unsafe-access friction."
    long_definition:
      - Agent Smith challenges assumptions, detects abuse vectors, identifies governance bypass risk, and creates safety friction.
      - It is not a malicious actor or final veto authority by default.
    aliases:
      - Smith
    related_terms:
      - Adversarial_Review
      - Risk_Management
      - Governance

  Adversarial_Review:
    status: Active
    domain: ACS
    short_definition: "Adversarial Review is the process of intentionally challenging assumptions, identifying failure modes, and exposing abuse vectors."
    long_definition:
      - It is especially relevant for treasury, tokenomics, trading, governance plugins, reward systems, and ACS tool permissions.
    related_terms:
      - Agent_Smith
      - Risk_Management
      - Security_Review

  Semantic_Memory:
    status: Active
    domain: ACS
    short_definition: "Semantic Memory is the structured knowledge layer that helps agents preserve and retrieve Axodus context."
    long_definition:
      - In Axodus, semantic memory is represented by `.knowledge` packs.
      - It should be validated and should not contain secrets.
    related_terms:
      - Knowledge_Pack
      - ACS
      - Documentation

  Knowledge_Layer:
    status: Active
    domain: ACS
    short_definition: "The Knowledge Layer is the ACS architecture layer that stores structured context, memory, and semantic source material."
    related_terms:
      - Semantic_Memory
      - Knowledge_Pack

  Runtime:
    status: Active
    domain: ACS
    short_definition: "Runtime is the structured workflow through which ACS receives tasks, loads context, assigns agents, analyzes, routes review, and hands off outputs."
    long_definition:
      - Runtime should define stages, statuses, outputs, review requirements, and completion criteria.
    related_terms:
      - ACS
      - Business_Runtime
      - Human_Oversight

  Tool_Gateway:
    status: Draft
    domain: ACS
    short_definition: "A Tool Gateway is the controlled interface through which agents access tools, connectors, scripts, APIs, or MCP servers."
    long_definition:
      - It should enforce scope, permissions, logs, and revocation.
    related_terms:
      - MCP
      - Least_Privilege
      - Tool_Call_Log

  MCP:
    status: Active
    domain: ACS
    short_definition: "MCP means Model Context Protocol, a tool integration pattern that can expose external systems to agents through structured interfaces."
    long_definition:
      - In Axodus, MCPs may support GitHub, filesystem, databases, governance systems, documentation, trading, or other controlled tools.
      - MCP access must be permissioned and logged.
    aliases:
      - Model Context Protocol
    related_terms:
      - Tool_Gateway
      - Least_Privilege
      - Prompt_Injection

  Tool_Call_Log:
    status: Planned
    domain: ACS
    short_definition: "A Tool Call Log is a record of an agent using a tool, including task, permission scope, action, result, and timestamp."
    long_definition:
      - It supports auditability and accountability for material ACS activity.
    related_terms:
      - MCP
      - Auditability
      - Accountability

  Human_Oversight:
    status: Active
    domain: ACS
    short_definition: "Human Oversight is the requirement that sensitive ACS outputs or actions be reviewed by responsible humans before use."
    long_definition:
      - Human oversight is required for sensitive governance, treasury, tokenomics, trading, security, public communication, and client commitment tasks.
    related_terms:
      - ACS
      - Governance
      - Accountability

  Agentic_Workflow:
    status: Draft
    domain: ACS
    short_definition: "An Agentic Workflow is a structured process where one or more agents perform analysis or drafting under defined roles and review boundaries."
    related_terms:
      - ACS
      - Runtime
      - Agent

  Dreaming:
    status: Conceptual
    domain: ACS
    short_definition: "Dreaming is a proposed memory assimilation process where agents periodically summarize, reconcile, and update operational knowledge."
    long_definition:
      - Dreaming can reduce redundancy and context drift, but memory updates require validation before becoming source of truth.
    aliases:
      - memory assimilation
    related_terms:
      - Semantic_Memory
      - Knowledge_Pack
      - ACS
