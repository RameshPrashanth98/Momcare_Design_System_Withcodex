# Quick Task 260317-qwf: Build reusable React + TypeScript + Storybook components for the Search Records screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Search Records screen family with an M3-style search surface, record cards, and record-action grouping while extending the shared search and chip primitives only where the requested API requires it.

## Tasks

### 1. Extend shared primitives for records search
- Expand `SearchBar` to support the requested leading icon, trailing search action, and `onSearch` behavior.
- Expand `StatusChip` to support an optional `leadingIcon` while preserving current usage.

### 2. Build the Search Records component family
- Create `ActionButtonGrid`, `RecordCard`, and `SearchRecordsLayout`.
- Reuse existing `TopAppBar`, `IconButton`, `LanguageSwitcher`, `SectionHeader`, `Button`, `NavigationBar`, and `Typography`.

### 3. Compose and document the screen
- Add `src/screens/SearchRecords/SearchRecordsScreen.tsx` and the screen story.
- Add stories for the new search-records components and updated shared primitives.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
