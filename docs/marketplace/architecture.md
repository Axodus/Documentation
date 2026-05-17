# Marketplace Architecture

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Marketplace

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

