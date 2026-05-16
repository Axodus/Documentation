# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: MARKETPLACE AND PRODUCT TERMS

[MARKETPLACE_PRODUCT_TERMS]

terms:

  Marketplace:
    status: Draft
    domain: Marketplace
    short_definition: "Marketplace is the Axodus commerce layer for courses, services, products, templates, tools, and ecosystem offerings."
    long_definition:
      - Marketplace may integrate with Academy, Business, BBA, Tokenomics, and product nuclei.
      - Payment sources, fees, and settlement behavior must not be claimed final unless implemented.
    aliases:
      - Axodus Marketplace
    related_terms:
      - Marketplace_Listing
      - Course_Commerce
      - Token_Utility

  Marketplace_Listing:
    status: Draft
    domain: Marketplace
    short_definition: "A Marketplace Listing is a published item, course, service, product, or offering available through the Marketplace."
    long_definition:
      - Listings should include price, access rules, accepted payments, seller/tutor status, fees, and risk notes where relevant.
    related_terms:
      - Marketplace
      - Course
      - Service_Catalog

  Course_Commerce:
    status: Draft
    domain: Marketplace
    short_definition: "Course Commerce is the sale, access, settlement, and distribution of Academy courses or learning products through Marketplace flows."
    long_definition:
      - It may involve tutors, royalties, commissions, accepted currencies, internal credits, or locked rewards if implemented.
    related_terms:
      - Academy
      - Marketplace
      - Course_Publishing

  Product_Access:
    status: Draft
    domain: Core
    short_definition: "Product Access defines whether and how a user, DAO, or account can access an Axodus product or feature."
    long_definition:
      - Access may depend on federation status, governance approval, token balance, certification, subscription, marketplace purchase, or policy.
    related_terms:
      - Access_Rule
      - DAO_Federation
      - Token_Utility

  Product_Status:
    status: Active
    domain: Core
    short_definition: "Product Status identifies whether a product or feature is active, planned, draft, experimental, deprecated, or needs review."
    related_terms:
      - Roadmap
      - Documentation
      - Status_Label

  Mining:
    status: Planned
    domain: Product
    short_definition: "Mining is an Axodus product nucleus planned or defined for mining-related models, rewards, products, or services."
    long_definition:
      - Documentation must distinguish conceptual or planned mining models from active systems.
    related_terms:
      - Product_Nucleus
      - Tokenomics
      - Risk_Management

  DEX:
    status: Planned
    domain: Product
    short_definition: "DEX means decentralized exchange, a trading or liquidity product category that may be part of Axodus product planning."
    long_definition:
      - Do not claim live DEX functionality unless implemented.
    aliases:
      - decentralized exchange
    related_terms:
      - DeFi
      - Liquidity
      - Trading

  Lottery:
    status: Planned
    domain: Product
    short_definition: "Lottery is an Axodus product category for blockchain-based lottery or draw mechanisms."
    long_definition:
      - It may also be referred to as Lotto or CryptoDraw depending on product branding.
      - Do not claim launch status unless verified.
    aliases:
      - Lotto
      - CryptoDraw
    related_terms:
      - Product_Nucleus
      - Marketplace
      - Governance

  CryptoDraw:
    status: Planned
    domain: Product
    short_definition: "CryptoDraw is a blockchain lottery product concept or repository associated with Axodus lottery mechanics."
    long_definition:
      - It may involve transparent draw logic, tickets, randomness, or on-chain settlement depending on implementation.
      - Do not claim production status unless verified.
    related_terms:
      - Lottery
      - Smart_Contract_Security
      - Governance

  MCPs:
    status: Draft
    domain: ACS
    short_definition: "MCPs are Model Context Protocol servers or integrations that expose tools and context to agents."
    long_definition:
      - MCPs may be considered a product/support category inside Axodus if packaged as services or infrastructure.
    related_terms:
      - MCP
      - ACS
      - Tool_Gateway

  BBA_Product:
    status: Active
    domain: Business
    short_definition: "BBA as a product refers to Axodus Blockchain Business & Advertising services, campaigns, positioning, and growth operations."
    related_terms:
      - BBA
      - Business
      - Campaign_Strategy

  Academy_Product:
    status: Draft
    domain: Academy
    short_definition: "An Academy Product is a course, learning path, certification, workshop, or educational service offered through Academy and possibly Marketplace."
    related_terms:
      - Academy
      - Course
      - Marketplace

  Trading_Product:
    status: Draft
    domain: Trading
    short_definition: "A Trading Product is a user-facing or internal trading tool, strategy, bot, report, or access model."
    long_definition:
      - Trading products must include risk language and must not guarantee returns.
    related_terms:
      - Trading
      - User_Facing_Strategy
      - Strategy_Access

  Service:
    status: Active
    domain: Business
    short_definition: "A Service is scoped work or support provided through Axodus Business or a product nucleus."
    related_terms:
      - Service_Catalog
      - Business
      - Delivery_Lifecycle

  Listing_Status:
    status: Draft
    domain: Marketplace
    short_definition: "Listing Status identifies whether a Marketplace listing is draft, under review, active, suspended, archived, or rejected."
    related_terms:
      - Marketplace_Listing
      - Product_Status

  Accepted_Currencies:
    status: Draft
    domain: Marketplace
    short_definition: "Accepted Currencies are the assets or payment methods supported by a Marketplace listing, course, or service."
    long_definition:
      - Do not claim specific accepted currencies unless implemented.
    related_terms:
      - Marketplace
      - Token_Utility
      - Locked_Rewards

  Royalty:
    status: Draft
    domain: Marketplace
    short_definition: "A Royalty is a defined share of revenue allocated to a creator or rights holder according to policy."
    related_terms:
      - Course_Commerce
      - Marketplace
      - Tutor

  Commission:
    status: Draft
    domain: Marketplace
    short_definition: "A Commission is a defined share of revenue allocated to a party for facilitating a sale, service, or transaction."
    related_terms:
      - Marketplace
      - Service_Catalog

  Operational_Fee:
    status: Draft
    domain: Marketplace
    short_definition: "An Operational Fee is a fee allocated to platform operations, infrastructure, processing, or service delivery."
    related_terms:
      - Marketplace
      - Treasury
      - Accountability
