---
schema_version: "1.0.0"
document_id: "MARKET-GDE-003"
aliases: []
document_type: "GUIDE"
title: "Buyer Flow"
summary: "Provides governed buyer flow guidance within the Axodus documentation corpus."
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
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/marketplace/buyer-flow.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Buyer Flow

---

## Purpose

Buyer flow must make purchase decisions clear and safe.

## Workflow

1. Buyer discovers a listing.
2. Buyer reviews details, seller status, included and excluded items, price, accepted assets, delivery terms, refund policy, disclosures, and support path.
3. Buyer starts checkout and confirms payment method.
4. Discounts or credits are applied if eligible and approved.
5. Buyer approves or signs a transaction if crypto payment is used.
6. Payment is processed and an order is created.
7. Access or delivery starts.
8. Buyer accepts delivery, completes the course, opens support, or starts a dispute if policy allows.
9. Settlement proceeds under the order terms.

## Order Fields

Order fields may include order ID, buyer reference, listing ID, seller ID, order status, payment status, delivery status, settlement status, refund status, dispute status, price, payment asset, credits used, discounts, fees, creation time, and completion time.

## Order Statuses

Statuses may include Created, Awaiting Payment, Paid, In Delivery, Delivered, Completed, Cancelled, Refunded, Disputed, and Failed.

## Buyer Protection Requirements

Listings should expose seller status, price, fees, refund policy, delivery model, risk disclosures, support path, and transaction summary before payment. Outcomes depend on listing terms and are not guaranteed.
