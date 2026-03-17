# Quick Task 260317-rmt: Build reusable React + TypeScript + Storybook components for the Weight & Health Tracking screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Weight & Health Tracking screen family with a token-driven weight chart, blood pressure records, and hemoglobin summary while reusing the shared record-shell primitives already established in the design system.

## Tasks

### 1. Reuse the shared shell and record primitives
- Reuse the existing `TopAppBar`, `IconButton`, `LanguageSwitcher`, `ContextHeader`, `MotherSummaryCard`, `SectionHeader`, `StatusChip`, `ExtendedFAB`, `NavigationBar`, `Typography`, and `Divider` components.
- Keep the new screen aligned with the same contextual mother-summary and records layout pattern used by Vaccination Records.

### 2. Build the Weight & Health Tracking component family
- Create `WeightChartCard`, `BloodPressureRecordItem`, `BloodPressureRecordList`, `HemoglobinCard`, and `WeightHealthTrackingLayout`.
- Keep the chart and health surfaces token-driven, keyboard accessible, and mobile-first.

### 3. Compose and document the screen
- Add `src/screens/WeightHealthTracking/WeightHealthTrackingScreen.tsx` and the screen story.
- Add Storybook stories for each new weight-and-health component.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
