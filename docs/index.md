---
schema_version: "1.0.0"
document_id: "DOC-GDE-006"
aliases: []
document_type: "GUIDE"
title: "Axodus Documentation"
summary: "Provides the canonical public landing page for Axodus ecosystem documentation."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.PUBLICATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "VitePress Maintainer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-15"
last_reviewed: "2026-07-15"
review_cycle: "QUARTERLY"
next_review: "2026-10-01"
supersedes: []
relationships: [{type: "RELATES_TO", target: "DOC-GDE-005"}, {type: "REALIZES", target: "DOC-ADR-014"}, {type: "DOCUMENTS", target: "DOC-POL-004"}]
related_epics: ["DOCUMENTATION-EPIC-01", "DOCUMENTATION-EPIC-07"]
related_requirements: ["AXODUS-DOCUMENTATION-REQ-01", "DOCUMENTATION-EPIC-07-REQ-07"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/index.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Axodus Documentation

Governed modular infrastructure for transforming needs into knowledge,
decisions, services, products, infrastructure, and ecosystem assets.

Axodus coordinates specialized nuclei through bounded authority, human
accountability, agent-assisted analysis, risk controls, and reviewable
execution lifecycles. DeFi is a material part of Axodus, but not its sole
identity.

- [Start with the Ecosystem](/overview/ecosystem-overview)
- [Cross-Core Architecture](/overview/cross-core-architecture)
- [Execution Model](/overview/execution-model)
- [Governance Model](/governance/overview)
- [Product Map](/overview/product-map)

## Governance First

Constitutional governance, DAO coordination, proposal routing, execution records, and accountability.

## Treasury Aware

Capital allocation, reporting expectations, custody controls, and risk-managed financial operations.

## Modular Nuclei

Academy, Business, Marketplace, Trading, DeFi, DEX, Mining, Lottery, ACS, and BBA Agency documentation.

<div class="axodus-portal">
  <section class="axodus-section">
    <h2>Documentation Status</h2>
    <p>
      Axodus documentation is under active reconstruction. Pages marked Draft, Planned, Prototype, Testnet, Needs Review, or Active if Verified are not final production specifications unless implementation evidence and governance records support that status.
    </p>
    <div class="status-row">
      <span class="status-badge draft">Draft</span>
      <span class="status-badge planned">Planned</span>
      <span class="status-badge needs-review">Needs Review</span>
      <span class="status-badge">Active if Verified</span>
    </div>
  </section>

  <section class="axodus-section">
    <h2>Core Pillars</h2>
    <p>
      Start with the control, capital, token, education, and intelligence layers that define how Axodus coordinates ecosystem work.
    </p>
    <div class="doc-grid">
      <a class="nucleus-card" href="/governance/overview"><strong>Governance</strong><span>Constitutional coordination, DAO federation, proposal lifecycle, and execution boundaries.</span></a>
      <a class="nucleus-card" href="/treasury/overview"><strong>Treasury</strong><span>Capital stewardship, reserve policy, risk limits, reporting, and governance oversight.</span></a>
      <a class="nucleus-card" href="/tokenomics/overview"><strong>Tokenomics</strong><span>$Neurons controlled issuance, PoK minting, utility boundaries, and risk framing.</span></a>
      <a class="nucleus-card" href="/academy/overview"><strong>Academy</strong><span>Education, onboarding, Proof of Knowledge, course flows, and cautious reward documentation.</span></a>
      <a class="nucleus-card" href="/acs/overview"><strong>ACS / AI Agents</strong><span>Advisory analysis, agent roles, governance support, human oversight, and risk review.</span></a>
      <a class="nucleus-card" href="/accountability/overview"><strong>Accountability</strong><span>Governance records, financial reporting, release notes, limitations, and public transparency.</span></a>
    </div>
  </section>

  <section class="axodus-section">
    <h2>Product Nuclei</h2>
    <p>
      Explore the product and service areas that make up the Axodus ecosystem. Each nucleus documents scope, status, dependencies, governance touchpoints, and risk considerations.
    </p>
    <div class="doc-grid">
      <a class="nucleus-card" href="/trading/overview"><strong>Trading</strong><span>Internal strategy infrastructure, user-facing strategy access, API safety, and market risk.</span></a>
      <a class="nucleus-card" href="/defi/overview"><strong>DeFi / DaaS</strong><span>DeFi-as-a-Service, ETF-oriented concepts, protocol models, liquidity, and disclosures.</span></a>
      <a class="nucleus-card" href="/dex/overview"><strong>DEX</strong><span>Swap model, liquidity pools, routing, listings, execution risks, and reporting.</span></a>
      <a class="nucleus-card" href="/mining/overview"><strong>Mining</strong><span>Infrastructure, mining models, costs, rewards, operations, and responsible disclosure.</span></a>
      <a class="nucleus-card" href="/marketplace/overview"><strong>Marketplace</strong><span>Listings, sellers, payments, credits, quality, disputes, and integrations.</span></a>
      <a class="nucleus-card" href="/lottery/overview"><strong>Lottery / CryptoDraw</strong><span>Game models, ticket flow, draw lifecycle, randomness, claims, and responsible participation.</span></a>
      <a class="nucleus-card" href="/business/overview"><strong>Business</strong><span>Formal request intake, service scoping, delivery runtime, change control, and validation.</span></a>
      <a class="nucleus-card" href="/bba-agency/overview"><strong>BBA Agency</strong><span>Blockchain business communication, positioning, campaign lifecycle, and claim review.</span></a>
      <a class="nucleus-card" href="/runtime/overview"><strong>Runtime</strong><span>Cross-nucleus operating lifecycle for requests, approvals, execution, change, and archive.</span></a>
    </div>
  </section>

  <section class="axodus-section">
    <h2>Reference</h2>
    <div class="doc-grid">
      <a class="nucleus-card" href="/overview/documentation-status"><strong>Documentation Status</strong><span>How to interpret maturity labels and active-if-verified language.</span></a>
      <a class="nucleus-card" href="/overview/risk-notices"><strong>Risk Notices</strong><span>Reusable risk language for DeFi, trading, treasury, token, mining, lottery, and marketplace pages.</span></a>
      <a class="nucleus-card" href="/overview/documentation-standards"><strong>Documentation Standards</strong><span>Public-facing summary of writing, terminology, and content safety rules.</span></a>
      <a class="nucleus-card" href="/glossary/terms"><strong>Glossary</strong><span>Canonical terminology for Axodus nuclei, governance, ACS, $Neurons, and product concepts.</span></a>
    </div>
  </section>

  <section class="axodus-section risk-notice">
    <strong>Risk Notice</strong>
    <p>
      Axodus documentation must not be interpreted as financial advice or as a guarantee of APY, yield, ROI, profit, payout, token appreciation, execution quality, lottery outcome, or risk-free result.
    </p>
  </section>
</div>
