# AXODUS KNOWLEDGE PACK
# DOMAIN: CORE
# FILE: glossary.akp.md
# TYPE: SEMANTIC GLOSSARY
# STATUS: ACTIVE DRAFT
# LANGUAGE: EN

[AXODUS_GLOSSARY]

Axodus:
  definition:
    - modular DeFi ecosystem centered on governance, treasury, education, business services, trading, token utility, and accountability
  avoid:
    - defining Axodus as only a token
    - defining Axodus as only a trading bot
    - defining Axodus as only a DAO

Nucleus:
  definition:
    - a major functional domain inside Axodus with specific responsibilities, workflows, documentation, risks, and governance touchpoints
  examples:
    - Governance
    - Business
    - Academy
    - Trading
    - Treasury
    - ACS
    - Marketplace
    - Tokenomics

Governance:
  definition:
    - the coordination heart of Axodus
    - responsible for proposals, decisions, approvals, execution visibility, constitutional alignment, and DAO federation

Executive DAO:
  definition:
    - strategic and executive coordination layer
    - supports roadmap alignment, technical prioritization, and ecosystem execution

Boardroom Council:
  definition:
    - supervisory governance layer
    - reviews risk, compliance, treasury matters, constitutional alignment, and sensitive decisions

Community DAO:
  definition:
    - open community participation layer
    - supports public proposals, voting, signaling, and legitimacy

Constitutional Governance:
  definition:
    - governance model based on shared constitutional principles, constraints, and ecosystem-wide guardrails

Local Governance:
  definition:
    - governance applied within a specific DAO, sub-DAO, product community, or partner community
    - may have autonomy but must remain aligned with constitutional constraints if connected to Axodus

DAO Federation:
  definition:
    - a model where multiple DAOs operate under shared constitutional principles while preserving local autonomy

Business:
  definition:
    - structured request intake, service coordination, client lifecycle, and delivery runtime for Axodus
  includes:
    - DAO service requests
    - plugin requests
    - client requests
    - technical service workflows
    - BBA-related services

BBA:
  definition:
    - Blockchain Business & Advertising
    - specialized Axodus business/advertising layer focused on blockchain-native communication, campaign design, growth strategy, and ROI-aware positioning

Academy:
  definition:
    - education and onboarding nucleus
    - supports courses, tutors, Proof of Knowledge, Learn-to-Win, certification, and token utility

Learn-to-Win:
  definition:
    - gamified learning model where users may receive rewards for education-related progress
  caution:
    - reward rules must be contract or policy defined
    - no financial guarantee language

Proof of Knowledge:
  definition:
    - validation model for learning, assessments, certification, or knowledge-based eligibility

Marketplace:
  definition:
    - commercialization layer for products, courses, services, and internal ecosystem utility consumption

Trading:
  definition:
    - nucleus for internal financial strategy infrastructure and user-facing trading strategy products
  caution:
    - trading must never be described as guaranteed profit

Treasury:
  definition:
    - ecosystem capital management layer
    - responsible for allocation, liquidity, exposure, reporting, and risk constraints

Risk Management:
  definition:
    - discipline that identifies, limits, monitors, and reports risks across DeFi, treasury, trading, governance, products, and operations

Accountability:
  definition:
    - transparency layer for publishing reports, roadmap updates, treasury summaries, release notes, governance records, and relevant execution history

ACS:
  definition:
    - AI Coordination System
    - agentic support layer for analysis, classification, governance assistance, operational review, and decision support

Morpheus:
  definition:
    - ACS agent archetype focused on strategy, narrative coherence, governance alignment, and ecosystem sensemaking

Trinity:
  definition:
    - ACS agent archetype focused on trading intelligence, operations, execution support, market analysis, P&L review, and risk monitoring

Agent Smith:
  definition:
    - ACS agent archetype focused on adversarial review, stress testing, risk challenge, abuse resistance, and controlled friction

DaaS:
  definition:
    - DeFi as a Service
    - modular DeFi infrastructure or services provided through Axodus products, governance, and business workflows

ETF DaaS:
  definition:
    - ETF-oriented DeFi-as-a-Service model
    - may involve basket-like treasury, allocation, or product structures
  caution:
    - must not imply regulated ETF status unless legally confirmed
    - documentation should use careful language

$Neurons:
  definition:
    - ecosystem token associated with utility, rewards, access, governance participation, and coordination mechanisms
  caution:
    - must not be described as guaranteed investment return
    - exact mechanics depend on contracts and governance

Token Utility:
  definition:
    - practical use of a token inside the ecosystem
  examples:
    - access
    - rewards
    - governance participation
    - marketplace use
    - subscriptions
    - internal consumption

Locked Rewards:
  definition:
    - rewards that may be restricted from transfer, sale, withdrawal, or swapping
    - may be usable internally if contract rules support it
  caution:
    - exact behavior must be documented according to implementation

Governance Plugin:
  definition:
    - modular extension that adds specific governance functionality to a DAO or governance process
  examples:
    - voting plugin
    - treasury plugin
    - reporting plugin
    - DAO-specific extension

Proposal Lifecycle:
  definition:
    - path from idea or request to validation, voting, execution, and accountability

Business Runtime:
  definition:
    - structured lifecycle for intake, classification, analysis, approval, execution, milestone validation, change requests, delivery, and archive

Change Request:
  definition:
    - request to alter approved scope, budget, timeline, technical requirements, or governance impact after initial approval

Smart Contract:
  definition:
    - on-chain program enforcing logic such as tokens, governance, rewards, access, execution, or financial rules

API Key Security:
  definition:
    - security discipline for protecting user or system API keys, especially in trading products
  rule:
    - withdrawal permissions should be disabled for trading API keys

Governance Traceability:
  definition:
    - ability to connect proposals, decisions, votes, executions, and reports across on-chain and off-chain records

Reason Code:
  definition:
    - structured label or explanation attached to decisions, guards, execution results, proposal status, or governance constraints

Roadmap:
  definition:
    - phased project direction
  caution:
    - should avoid false deadlines or overpromising

Security Disclosure:
  definition:
    - process for reporting vulnerabilities responsibly
  caution:
    - do not invent a contact email unless confirmed

Canonical Documentation:
  definition:
    - official documentation files in root or `/docs`
  excludes:
    - old drafts
    - unreviewed planning notes
    - archived materials

Knowledge Pack:
  definition:
    - dense semantic memory file used by agents and contributors to generate consistent documentation and reasoning
  location:
    - `.knowledge`