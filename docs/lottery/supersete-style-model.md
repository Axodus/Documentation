# SuperSete-Style Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

The SuperSete-style model is a CryptoDraw game model inspired by position-based or column-based digit matching mechanics.

## Scope

This page does not claim official affiliation, endorsement, licensing, or replication of any public lottery product. Public use requires legal, compliance, governance, and security review.

## Conceptual Rules

Users select digits or numbers for defined columns or positions. The draw generates one result per column or position. Matches are counted by position, and prize tiers are based on the number of correct positions.

## Parameters to Define

Required parameters include number of columns, digit or number range per column, selections per column, entry cost if any, prize tiers, minimum matches for prize, distribution percentages, rollover policy, claim window, fee policy, and maximum tickets per user if any.

## Ticket Validation

Each column must have a valid selection. Selections must match the allowed range. Multi-selection per column must follow published rules if supported. Tickets must reference the game model version, and invalid tickets must not enter the draw.

## Winner Calculation

Winner calculation compares each ticket column to the draw result column, counts correct positions, maps the count to a prize tier, splits tier pools where applicable, applies rollover or reserve rules, and creates claim records.

## Risk Considerations

Column-based matching can be misunderstood by users. Tier rules must be exact before draw opening. Similarity to existing formats requires careful naming and compliance review.

