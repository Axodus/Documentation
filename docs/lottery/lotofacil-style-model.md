# Lotofacil-Style Model

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / CryptoDraw

---

## Purpose

The Lotofacil-style model is a CryptoDraw game model inspired by combination-based number matching mechanics.

## Scope

This page does not claim official affiliation, endorsement, licensing, or replication of any public lottery product. Any naming, similarity, or public launch requires legal and compliance review.

## Conceptual Rules

Users select a defined count of unique numbers from a defined range. The draw generates a defined count of winning numbers from the same range. Ticket matches are counted against the draw result, and prize tiers are based on the number of matches.

## Parameters to Define

Required parameters include number range, numbers per ticket, numbers drawn, entry cost if any, extra number support if any, prize tiers, tier distribution percentages, rollover policy, claim window, fee policy, and maximum tickets per user if any.

## Ticket Validation

Selected numbers must be unique, within range, match the allowed count or variation, be created before draw close, and reference the active game model version. Invalid tickets must not enter the draw.

## Winner Calculation

Winner calculation compares ticket numbers to drawn numbers, counts matches, maps the match count to a prize tier, splits the tier pool by rule if multiple winners exist, applies rollover or reserve logic if no winner exists, and creates claim records.

## Risk Considerations

Users may assume rules match an existing public lottery. Prize tiers and rollovers require exact accounting. Similarity to public lottery formats may create legal, brand, or regulatory risk.

