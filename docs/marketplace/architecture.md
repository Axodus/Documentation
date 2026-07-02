---
schema_version: "1.0.0"
document_id: "MARKET-GDE-002"
aliases: []
document_type: "GUIDE"
title: "Marketplace Architecture"
summary: "Provides governed marketplace architecture guidance within the Axodus documentation corpus."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "MARKETPLACE"
authority_level: "CORE"
author: "Axodus Marketplace"
owner: "Axodus Marketplace"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-17"
last_updated: "2026-07-02"
last_reviewed: "2026-07-02"
review_cycle: "QUARTERLY"
next_review: "2026-10-02"
supersedes: []
relationships: [{type: "RELATES_TO", target: "MARKET-GDE-001"}]
related_epics: ["DOCUMENTATION-EPIC-02"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-02-REQ-09"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-019"]
related_cores: ["MARKETPLACE"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/marketplace/architecture.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Marketplace Architecture

---

## Purpose

Marketplace architecture separates listings, sellers, buyers, checkout, payments, settlement, delivery, disputes, reputation, governance, treasury, security, ACS, and reporting.

## Architecture Layers

- Catalog layer: categories, search, discovery, featured sections, and official sections if approved.
- Listing layer: metadata, pricing, deliverables, requirements, claims, disclosures, and status.
- Seller provider layer: seller profiles, tutor profiles, verification, quality status, and suspension status.
- Buyer layer: buyer reference, access rights, order history, reviews, and support records.
- Checkout layer: order creation, payment asset selection, discounts, credits, and confirmation.
- Payment layer: payment capture, crypto or gateway handling if implemented, DEX conversion if implemented, and status.
- Settlement layer: seller payout, treasury fees, royalties, commissions, refunds, reserves, and liabilities.
- Delivery layer: course access, digital download, service delivery, subscription access, and milestone acceptance.
- Dispute layer: dispute intake, evidence, resolution, refund, or payout adjustment.
- Reputation layer: reviews, ratings, badges, dispute history, and completion records.
- Governance layer: listing, seller, fee, locked reward, sensitive category, and dispute policies.
- Treasury layer: revenue, settlements, refunds, locked credit liabilities, and reporting.
- Security layer: wallet safety, payment safety, data protection, fraud prevention, and access control.
- ACS layer: listing review, seller quality summaries, dispute summaries, reports, and risk flags.
- Reporting layer: marketplace, listing, fee, settlement, credit, dispute, and incident reports.

## Core Objects

Core objects include `Listing`, `SellerProfile`, `Order`, `PaymentRecord`, `SettlementRecord`, `DisputeRecord`, `CreditRecord`, and `MarketplaceReport`.

## Architecture Invariants

Seller status must be visible. Listing claims must be reviewable. Payment and settlement records must be auditable. Locked rewards require explicit policy, contract, treasury, and compliance support before marketplace spending is claimed.
