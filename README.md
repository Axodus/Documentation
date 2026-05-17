# Axodus Documentation

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Overview

Axodus is a modular DeFi ecosystem designed around sustainable DeFi-as-a-Service infrastructure, ETF-oriented treasury models, governance coordination, education, transparent accountability, and specialized product nuclei.

Axodus is not a single product, trading bot, token, or DAO interface. It is an ecosystem architecture that connects governance, business workflows, treasury controls, Academy onboarding, Trading infrastructure, Marketplace distribution, ACS / AI agent support, token utility, and public accountability.

The core documentation treats Axodus as a governed operational network. Product access, treasury activity, token utility, agent-assisted workflows, and DAO federation are expected to remain traceable through governance, risk management, and accountability processes.

## Documentation Status

This documentation is under active reconstruction.

Some legacy materials in this repository were written for an earlier GitBook-based documentation model and may be obsolete. The current documentation prioritizes the updated Axodus architecture and should not be interpreted as a final production specification unless explicitly marked as `Active`.

The new documentation framework is VitePress. Canonical published documentation lives in [`/docs`](docs/index.md).

## Ecosystem Map

- Governance
- Business
- BBA Agency
- Runtime
- Academy
- DEX
- Trading
- Mining
- Lottery / CryptoDraw
- Marketplace
- DaaS / DeFi
- Treasury
- Tokenomics
- ACS / AI Agents
- Accountability
- Security

Additional planned or context-dependent nuclei may include MCPs and Compute. These should be documented with explicit status labels before being treated as active systems.

## Start Here

- [Architecture](ARCHITECTURE.md)
- [Governance](GOVERNANCE.md)
- [Roadmap](ROADMAP.md)
- [Security](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Glossary](GLOSSARY.md)
- [Documentation Site](docs/index.md)

## Documentation Sections

- [Ecosystem Overview](docs/overview/ecosystem-overview.md)
- [Core Principles](docs/overview/core-principles.md)
- [Constitutional Model](docs/overview/constitutional-model.md)
- [Terminology](docs/overview/terminology.md)
- [Governance](docs/governance/overview.md)
- [Business](docs/business/overview.md)
- [BBA Agency](docs/bba-agency/overview.md)
- [Runtime](docs/runtime/overview.md)
- [Academy](docs/academy/overview.md)
- [DEX](docs/dex/overview.md)
- [DeFi](docs/defi/overview.md)
- [Trading](docs/trading/overview.md)
- [Treasury](docs/treasury/overview.md)
- [Tokenomics](docs/tokenomics/overview.md)
- [Lottery / CryptoDraw](docs/lottery/overview.md)
- [Marketplace](docs/marketplace/overview.md)
- [Mining](docs/mining/overview.md)
- [ACS / AI Agents](docs/acs/overview.md)
- [Accountability](docs/accountability/overview.md)
- [Security](docs/security/overview.md)

## Repository Guidance

- [Documentation Standards](.instructions/DOCUMENTATION_STANDARDS.md)
- [Content Guardrails](.instructions/CONTENT_GUARDRAILS.md)
- [Rebuild Protocol](.instructions/REBUILD_PROTOCOL.md)
- [Review Checklist](.instructions/REVIEW_CHECKLIST.md)
- [Planning and Historical References](Documents/README.md)

## Important Risk Note

Axodus documentation must not promise guaranteed profit, guaranteed APY, risk-free yield, passive income certainty, or fixed treasury performance. Trading, DeFi, treasury, token, mining, and strategy documents must include appropriate risk context.

## Local Documentation Development

Install dependencies and run VitePress:

```bash
npm install
npm run docs:dev
```

Build the static documentation:

```bash
npm run docs:build
```
