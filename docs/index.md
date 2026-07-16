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

<p class="ux-home-kicker">Governed ecosystem documentation</p>

<p class="ux-home-lead">
  Governed infrastructure for coordinating knowledge, decisions, services,
  products, and ecosystem execution.
</p>

<p class="ux-home-summary">
  Explore the Axodus concept, architecture, governance model, execution flows,
  and specialized product nuclei. Each page distinguishes documented intent,
  prototype state, authority, and evidence-backed operation.
</p>

<nav class="ux-home-actions" aria-label="Primary documentation paths">
  <a class="ux-action ux-action-primary" href="/overview/ecosystem-overview">Start with Axodus <span aria-hidden="true">&#8599;</span></a>
  <a class="ux-action" href="/overview/cross-core-architecture">Explore Architecture</a>
  <a class="ux-action" href="/overview/execution-model">Understand Execution</a>
  <a class="ux-action" href="/overview/documentation-status">View Documentation Status</a>
</nav>

<div class="ux-state-strip" aria-label="Current documentation state">
  <span><strong>Living</strong> documentation</span>
  <span><strong>Prototype-stage</strong> ecosystem</span>
  <span><strong>269</strong> public pages</span>
  <span><strong>Governed</strong> status and evidence boundaries</span>
</div>

<div class="ux-home-shell">
  <section class="ux-section ux-paths" aria-labelledby="choose-your-path">
    <div class="ux-section-heading">
      <p class="ux-section-index">01 / Orientation</p>
      <div>
        <h2 id="choose-your-path">Choose your path</h2>
        <p>Enter through the view that matches the question you need to answer.</p>
      </div>
    </div>
    <div class="ux-path-grid">
      <a class="ux-path-card" href="/overview/ecosystem-overview"><span>New reader</span><strong>Ecosystem Overview</strong><small>Understand the purpose, scope, and current posture.</small></a>
      <a class="ux-path-card" href="/overview/cross-core-architecture"><span>Architect</span><strong>Cross-Core Architecture</strong><small>Trace responsibilities, interfaces, and dependencies.</small></a>
      <a class="ux-path-card" href="/overview/execution-model"><span>Operator</span><strong>Execution Model</strong><small>Follow governed flows, controls, and closed gates.</small></a>
      <a class="ux-path-card" href="/governance/overview"><span>Governance participant</span><strong>Governance Overview</strong><small>Find authority, review, approval, and escalation paths.</small></a>
      <a class="ux-path-card" href="/runtime/architecture"><span>Developer</span><strong>Runtime Architecture</strong><small>Locate technical boundaries and implementation posture.</small></a>
      <a class="ux-path-card" href="/overview/documentation-status"><span>Reviewer</span><strong>Status and Boundaries</strong><small>Interpret labels, evidence limits, and risk notices.</small></a>
    </div>
  </section>

  <section class="ux-section" aria-labelledby="core-system-map">
    <div class="ux-section-heading">
      <p class="ux-section-index">02 / System map</p>
      <div>
        <h2 id="core-system-map">Core system map</h2>
        <p>Axodus nuclei are grouped by responsibility, not presented as equally mature or equally active.</p>
      </div>
    </div>
    <div class="ux-core-groups">
      <article class="ux-core-group">
        <p>Coordination and control</p>
        <div>
          <a href="/governance/overview">Governance</a>
          <a href="/treasury/overview">Treasury</a>
          <a href="/tokenomics/overview">Tokenomics</a>
          <a href="/acs/overview">ACS</a>
          <a href="/runtime/overview">Runtime</a>
          <a href="/accountability/overview">Accountability</a>
        </div>
      </article>
      <article class="ux-core-group">
        <p>User and ecosystem journey</p>
        <div>
          <a href="/academy/overview">Academy</a>
          <a href="/business/overview">Business</a>
          <a href="/bba-agency/overview">BBA Agency</a>
          <a href="/marketplace/overview">Marketplace</a>
        </div>
      </article>
      <article class="ux-core-group">
        <p>Products and protocols</p>
        <div>
          <a href="/trading/overview">Trading</a>
          <a href="/defi/overview">DeFi / DaaS</a>
          <a href="/dex/overview">DEX</a>
          <a href="/mining/overview">Mining</a>
          <a href="/lottery/overview">Lottery / CryptoDraw</a>
        </div>
      </article>
    </div>
  </section>

  <section class="ux-section" aria-labelledby="how-axodus-works">
    <div class="ux-section-heading">
      <p class="ux-section-index">03 / Execution</p>
      <div>
        <h2 id="how-axodus-works">How Axodus works</h2>
        <p>A compact orientation to the governed lifecycle. Individual flows may remain prototype-stage or incomplete.</p>
      </div>
    </div>
    <ol class="ux-flow" aria-label="Axodus execution flow">
      <li><span>01</span>Need or proposal</li>
      <li><span>02</span>Qualification</li>
      <li><span>03</span>Governance and authority</li>
      <li><span>04</span>Planning and execution</li>
      <li><span>05</span>Risk controls</li>
      <li><span>06</span>Product, service, or ecosystem asset</li>
      <li><span>07</span>Accountability and evidence</li>
    </ol>
  </section>

  <section class="ux-section" aria-labelledby="status-legend">
    <div class="ux-section-heading">
      <p class="ux-section-index">04 / Interpretation</p>
      <div>
        <h2 id="status-legend">Status legend</h2>
        <p>Labels communicate documentary or implementation posture. They do not grant authority or open operational gates.</p>
      </div>
    </div>
    <div class="ux-status-legend" aria-label="Official documentation statuses">
      <PageStatusBadge status="Draft" compact />
      <PageStatusBadge status="Planned" compact />
      <PageStatusBadge status="Prototype" compact />
      <PageStatusBadge status="Testnet" compact />
      <PageStatusBadge status="Active if Verified" compact />
      <PageStatusBadge status="Deprecated" compact />
      <PageStatusBadge status="Canonical" compact />
      <PageStatusBadge status="Reference" compact />
      <PageStatusBadge status="Governed" compact />
      <PageStatusBadge status="Baseline" compact />
      <PageStatusBadge status="Review Required" compact />
      <PageStatusBadge status="Legacy" compact />
    </div>
    <p class="ux-legend-link"><a href="/overview/documentation-status">Read the complete status interpretation rules &#8594;</a></p>
  </section>

  <aside class="ux-risk-callout" aria-labelledby="risk-notice-title">
    <div aria-hidden="true">!</div>
    <p><strong id="risk-notice-title">Read claims with their boundaries.</strong> Axodus documentation is not financial advice and does not guarantee APY, yield, ROI, profit, payout, token appreciation, execution quality, lottery outcome, or a risk-free result. <a href="/overview/risk-notices">Review risk notices</a>.</p>
  </aside>
</div>
