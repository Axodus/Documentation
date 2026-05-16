# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: CORE ECOSYSTEM TERMS

[CORE_ECOSYSTEM_TERMS]

terms:

  Axodus:
    status: Active
    domain: Core
    short_definition: "Axodus is a modular DeFi ecosystem coordinated through governance, treasury discipline, education, accountability, and AI-assisted operations."
    long_definition:
      - Axodus is not a single product.
      - Axodus is an ecosystem composed of multiple nuclei such as Governance, Business, Academy, Trading, Marketplace, ACS, Treasury, Tokenomics, and Accountability.
      - Axodus is designed around sustainability, transparency, modular product development, DAO coordination, and risk-aware financial infrastructure.
    aliases:
      - Axodus ecosystem
      - Axodus Core
    avoid:
      - describing_Axodus_as_only_a_token
      - describing_Axodus_as_only_a_trading_platform
      - describing_Axodus_as_only_a_governance_app
    related_terms:
      - Nucleus
      - Governance
      - Business
      - Academy
      - ACS
      - Treasury

  Axodus_Core:
    status: Active
    domain: Core
    short_definition: "Axodus Core refers to the central strategic, technical, and governance coordination layer of the Axodus ecosystem."
    long_definition:
      - Axodus Core should be used when discussing ecosystem-level coordination, foundational documentation, shared principles, and cross-nucleus architecture.
      - It should not be confused with a single centralized authority that overrides governance.
    aliases:
      - Core
      - Core layer
    related_terms:
      - Governance
      - Constitution_of_Axodus
      - Executive_DAO

  Nucleus:
    status: Active
    domain: Core
    short_definition: "A nucleus is a specialized operational domain inside Axodus, such as Governance, Business, Academy, Trading, or ACS."
    long_definition:
      - Nuclei allow Axodus to organize work by responsibility while preserving ecosystem-level coherence.
      - Each nucleus should have its own overview, responsibilities, workflows, dependencies, governance touchpoints, risks, and future work.
    aliases:
      - product_nucleus
      - ecosystem_nucleus
      - module
    avoid:
      - using_nucleus_to_mean_unrelated_team_without_scope
    related_terms:
      - Product_Map
      - Business
      - Governance

  Product_Nucleus:
    status: Active
    domain: Core
    short_definition: "A product nucleus is a nucleus focused on a product or service area within Axodus."
    long_definition:
      - Examples may include Trading, Academy, Marketplace, Mining, DaaS, Lottery, or BBA depending on maturity.
      - Product nuclei may depend on Governance, Treasury, ACS, Tokenomics, or Business.
    related_terms:
      - Nucleus
      - Marketplace
      - Trading
      - Academy

  Ecosystem_Map:
    status: Draft
    domain: Core
    short_definition: "The Ecosystem Map describes the relationships between Axodus nuclei, governance layers, products, and operational systems."
    long_definition:
      - It should help users and contributors understand how Governance, Business, Academy, Trading, ACS, Treasury, Marketplace, Tokenomics, and Accountability interact.
    related_terms:
      - Architecture
      - Product_Map
      - Nucleus

  Product_Map:
    status: Draft
    domain: Core
    short_definition: "The Product Map organizes Axodus product nuclei and their relationships."
    long_definition:
      - It should distinguish active, planned, experimental, and conceptual products.
      - It must not present all planned products as live.
    related_terms:
      - Nucleus
      - Roadmap
      - Marketplace

  Architecture:
    status: Active
    domain: Core
    short_definition: "Architecture describes how Axodus systems, nuclei, governance layers, and data flows are structured."
    long_definition:
      - Architecture documentation should explain high-level ecosystem relationships before technical implementation details.
    related_terms:
      - Ecosystem_Map
      - Governance
      - ACS

  DeFi:
    status: Active
    domain: DeFi
    short_definition: "DeFi refers to decentralized finance systems, protocols, and products."
    long_definition:
      - In Axodus, DeFi is related to staking, treasury strategies, DaaS, ETF-oriented models, derivatives, liquidity, and risk management.
      - DeFi documentation must include risk context.
    avoid:
      - risk_free_DeFi
      - guaranteed_yield
    related_terms:
      - DaaS
      - ETF_DaaS
      - Treasury
      - Risk_Management

  DaaS:
    status: Active
    domain: DeFi
    short_definition: "DaaS means DeFi as a Service, a model for providing structured decentralized finance capabilities as ecosystem services."
    long_definition:
      - Axodus uses DaaS as part of its broader DeFi infrastructure direction.
      - It may include productized access to DeFi strategies, governance-aware financial infrastructure, and service-oriented DeFi components.
    aliases:
      - DeFi_as_a_Service
    avoid:
      - guaranteed_returns_as_service
    related_terms:
      - ETF_DaaS
      - Treasury
      - Governance

  ETF_DaaS:
    status: Draft
    domain: DeFi
    short_definition: "ETF DaaS refers to an ETF-oriented DeFi-as-a-Service model for structured, diversified, and governable DeFi exposure."
    long_definition:
      - This concept should be documented carefully as a design direction.
      - It must not imply regulated ETF status unless legally and formally established.
      - It should be framed as an ecosystem model, not a guaranteed investment product.
    aliases:
      - ETF-oriented DaaS
      - DeFi ETF model
    avoid:
      - regulated_ETF_claim_without_legal_basis
      - guaranteed_yield
      - risk_free_portfolio
    related_terms:
      - DaaS
      - Treasury
      - Risk_Management
      - Governance

  Constitution_of_Axodus:
    status: Draft
    domain: Governance
    short_definition: "The Constitution of Axodus is the shared principle and guardrail framework intended to align DAOs, products, treasury decisions, and ecosystem operations."
    long_definition:
      - It defines core values such as transparency, accountability, sustainability, governance traceability, and risk awareness.
      - It should not be described as finalized legal doctrine unless a formal legal document exists.
    aliases:
      - Axodus Constitution
      - constitutional framework
    related_terms:
      - Constitutional_Governance
      - DAO_Federation
      - Governance

  Roadmap:
    status: Active
    domain: Core
    short_definition: "The Roadmap describes Axodus development direction by phases without overpromising fixed delivery dates."
    long_definition:
      - The roadmap should distinguish documentation rebuild, governance maturation, Business runtime, Academy/token utility, Trading/Treasury, product expansion, and accountability phases.
    avoid:
      - fixed_dates_without_confirmation
      - guaranteed_launches
    related_terms:
      - Product_Map
      - Architecture
      - Accountability

  Documentation:
    status: Active
    domain: Core
    short_definition: "Documentation is the canonical written knowledge layer for Axodus users, contributors, agents, and governance participants."
    long_definition:
      - Public documentation must be written in English.
      - Documentation should derive from validated knowledge packs and current ecosystem architecture.
    related_terms:
      - Knowledge_Pack
      - Glossary
      - Accountability

  Knowledge_Pack:
    status: Active
    domain: ACS
    short_definition: "A Knowledge Pack is an internal semantic memory file used by agents to preserve structured ecosystem context."
    long_definition:
      - Knowledge packs are stored under `.knowledge`.
      - They are not public documentation, but public docs can be generated from them.
      - They use dense, structured Markdown optimized for retrieval and reasoning.
    aliases:
      - AKP
      - semantic memory pack
    related_terms:
      - ACS
      - Semantic_Memory
      - Documentation
