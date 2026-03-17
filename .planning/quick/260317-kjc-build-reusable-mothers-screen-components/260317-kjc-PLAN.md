# Quick Task 260317-kjc: Build reusable Mothers screen components and stories using existing tokens and M3-inspired patterns - Plan

**Date:** 2026-03-17
**Status:** In Progress

## Objective

Assemble a reusable Mothers screen component set and screen story using the existing Mom Care primitives, Storybook conventions, and token-only styling.

## Tasks

### 1. Add mothers-specific reusable primitives
- Files: `my-design-system/src/components/SearchBar/*`, `FilterSelect/*`, `FilterBar/*`, `StatusChip/*`, `MotherCard/*`, `FloatingActionButton/*`, `NavigationBar/*`, `MothersLayout/*`, `Typography/*`
- Action: Implement mobile-first, token-driven components for mothers search, filtering, cards, status, navigation, and layout.
- Verify: Components compile with typed props, reusable APIs, and keyboard-accessible interactions.
- Done: Mothers screen can be composed from reusable components instead of one-off markup.

### 2. Add composed Mothers screen stories
- Files: `my-design-system/src/screens/Mothers/*`
- Action: Build the composed screen using reusable components and create Storybook stories for the screen and each new component.
- Verify: Story files typecheck and demonstrate the full screen plus component-level states.
- Done: Storybook contains both primitives and a full Mothers screen example.

### 3. Validate and record the quick task
- Files: `.planning/STATE.md`, `.planning/quick/260317-kjc-build-reusable-mothers-screen-components/260317-kjc-SUMMARY.md`
- Action: Run repository checks and record the task outcome.
- Verify: `npm run typecheck` and `npm run tokens:check` pass from `my-design-system/`.
- Done: Summary and state reflect the mothers screen task.
