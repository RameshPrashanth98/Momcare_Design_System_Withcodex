# Quick Task 260317-syy: Build reusable React + TypeScript + Storybook components for the Lab Reports screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Lab Reports screen family with token-driven filter chips, report cards, and upload action patterns while reusing the shared mother-context and records shell components already present in the design system.

## Tasks

### 1. Reuse the shared mother-record shell
- Reuse the existing `TopAppBar`, `IconButton`, `LanguageSwitcher`, `ContextHeader`, `MotherSummaryCard`, `SectionHeader`, `StatusChip`, `Button`, `ExtendedFAB`, `NavigationBar`, `Typography`, and `Divider` components.
- Keep the screen aligned with the same contextual header and mother summary pattern used in the other records screens.

### 2. Build the Lab Reports component family
- Create `FilterChip`, `FilterChipGroup`, `LabReportCard`, and `LabReportsLayout`.
- Keep the chips, cards, and layout mobile-first, keyboard accessible, and fully token-driven.

### 3. Compose and document the screen
- Add `src/screens/LabReports/LabReportsScreen.tsx` and the screen story.
- Add Storybook stories for each new lab-reports component.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
