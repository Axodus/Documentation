# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: SECURITY AND ACCOUNTABILITY TERMS

[SECURITY_ACCOUNTABILITY_TERMS]

terms:

  Security:
    status: Active
    domain: Security
    short_definition: "Security is the discipline of protecting Axodus systems, users, funds, data, contracts, agents, and infrastructure from misuse, failure, or attack."
    related_terms:
      - Security_Review
      - Smart_Contract_Security
      - Least_Privilege

  Security_Review:
    status: Active
    domain: Security
    short_definition: "A Security Review is an evaluation of technical, operational, contract, tool, or access risks before deployment or activation."
    long_definition:
      - Security review is not the same as a formal external audit unless explicitly stated.
    avoid:
      - calling_review_an_audit_without_audit
    related_terms:
      - Smart_Contract_Security
      - ACS
      - Risk_Management

  Smart_Contract_Security:
    status: Active
    domain: Security
    short_definition: "Smart Contract Security is the practice of reviewing, testing, auditing, and controlling risks in blockchain contracts."
    long_definition:
      - Contract changes involving treasury, tokenomics, governance, rewards, or product access require strong review.
    related_terms:
      - Security_Review
      - Governance
      - Tokenomics

  Frontend_Security:
    status: Active
    domain: Security
    short_definition: "Frontend Security protects user interfaces from unsafe wallet interactions, injection, phishing, broken access assumptions, and misleading transaction flows."
    related_terms:
      - Wallet_Security
      - API_Security

  API_Security:
    status: Active
    domain: Security
    short_definition: "API Security protects backend and external API interactions through authentication, authorization, validation, logging, and least privilege."
    related_terms:
      - API_Key_Security
      - Least_Privilege

  Wallet_Security:
    status: Active
    domain: Security
    short_definition: "Wallet Security protects users from unsafe signing, phishing, malicious approvals, wrong networks, and misleading transaction previews."
    related_terms:
      - Frontend_Security
      - Smart_Contract_Security

  Least_Privilege:
    status: Active
    domain: Security
    short_definition: "Least Privilege means granting only the minimum permissions required for a specific task."
    long_definition:
      - It applies to agents, MCPs, API keys, admin roles, repository access, exchange keys, and infrastructure.
    related_terms:
      - ACS
      - API_Key_Security
      - Tool_Gateway

  Prompt_Injection:
    status: Active
    domain: Security
    short_definition: "Prompt Injection is an attack where untrusted content attempts to manipulate an AI agent into ignoring instructions or misusing tools."
    related_terms:
      - ACS
      - MCP
      - Security_Review

  Audit:
    status: Active
    domain: Security
    short_definition: "An Audit is a formal review, typically by a qualified external or internal reviewer, of code, contracts, processes, or systems."
    long_definition:
      - Do not claim a system is audited unless an actual audit exists.
    related_terms:
      - Security_Review
      - Auditability

  Auditability:
    status: Active
    domain: Accountability
    short_definition: "Auditability is the ability to inspect, verify, and trace decisions, actions, records, contracts, transactions, or reports."
    related_terms:
      - Execution_Receipt
      - Accountability
      - Governance_Record

  Accountability:
    status: Active
    domain: Accountability
    short_definition: "Accountability is the Axodus transparency layer for reporting decisions, treasury activity, roadmap updates, releases, and governance execution."
    long_definition:
      - Accountability is not optional for material decisions.
      - It connects financial reports, governance records, execution receipts, release notes, and public updates.
    related_terms:
      - Financial_Report
      - Governance_Record
      - Execution_Receipt

  Financial_Report:
    status: Draft
    domain: Accountability
    short_definition: "A Financial Report is a structured report covering treasury, revenue, expenses, exposure, strategy context, limitations, and risk notes."
    related_terms:
      - Treasury
      - Accountability
      - Reporting

  Reporting:
    status: Active
    domain: Accountability
    short_definition: "Reporting is the process of publishing or preserving structured updates about financial, governance, product, delivery, or operational status."
    related_terms:
      - Accountability
      - Financial_Report
      - Roadmap

  Release_Notes:
    status: Active
    domain: Accountability
    short_definition: "Release Notes document product, documentation, security, or governance-related changes in a clear and traceable format."
    related_terms:
      - Accountability
      - Documentation
      - Roadmap

  Risk_Disclosure:
    status: Active
    domain: Risk
    short_definition: "A Risk Disclosure explains relevant risks, limitations, uncertainty, and user responsibilities for a product, strategy, token, service, or process."
    long_definition:
      - Risk disclosures are required for DeFi, trading, treasury, tokenomics, rewards, and security-sensitive topics.
    related_terms:
      - Risk_Management
      - Trading_Risk
      - Treasury

  Governance_Review:
    status: Active
    domain: Governance
    short_definition: "Governance Review is the evaluation of a request, proposal, plugin, policy, or decision by the appropriate governance layer."
    related_terms:
      - Governance
      - Proposal
      - Boardroom_Council

  Compliance:
    status: Needs_Review
    domain: Risk
    short_definition: "Compliance refers to alignment with applicable rules, policies, standards, or legal requirements."
    long_definition:
      - Axodus docs should not claim legal compliance unless reviewed by qualified professionals.
    avoid:
      - legally_compliant_without_review
    related_terms:
      - Risk_Management
      - Security
      - Business

  Privacy:
    status: Active
    domain: Security
    short_definition: "Privacy is the protection of user, client, DAO, operational, and sensitive data."
    related_terms:
      - Data_Risk
      - Security
      - ACS

  Data_Risk:
    status: Active
    domain: Security
    short_definition: "Data Risk is the risk of exposing, misusing, corrupting, or relying on incorrect data."
    related_terms:
      - Privacy
      - ACS
      - Reporting

  Incident:
    status: Draft
    domain: Security
    short_definition: "An Incident is an event that may harm security, operations, governance, treasury, users, reputation, or accountability."
    related_terms:
      - Incident_Response
      - Security_Review
      - Accountability

  Incident_Response:
    status: Draft
    domain: Security
    short_definition: "Incident Response is the process for identifying, containing, reviewing, correcting, and reporting incidents."
    related_terms:
      - Incident
      - Security
      - Accountability
