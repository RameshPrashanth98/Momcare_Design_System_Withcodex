# Quick Task 260317-lvj: Build reusable React + TypeScript + Storybook components for the Medical History screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Build a reusable Medical History screen component set in `my-design-system` using React, TypeScript, Storybook CSF3, existing design tokens from `src/tokens/`, and Material 3 inspired layout patterns.

## Tasks

### 1. Add Medical History primitives and composition layer
- Files: `my-design-system/src/components/MedicalHistory/*`
- Action: Implement token-driven Medical History components for pregnancy history, conditions, notes, attachments, actions, and layout.
- Verify: Components are reusable, mobile-first, keyboard accessible, and rely on shared tokens.
- Done: `SummaryCard`, `PregnancyHistoryCard`, `ConditionChipGroup`, `NoteCard`, `AttachmentListItem`, `ActionBar`, `MedicalHistoryLayout`, and related stories are in place.

### 2. Compose the full Medical History screen
- Files: `my-design-system/src/screens/MedicalHistory/*`
- Action: Assemble the requested hi-fi screen using existing shared primitives plus the new Medical History components.
- Verify: Screen includes the top app bar, summary card, grouped sections, attachment rows, action bar, and bottom navigation.
- Done: `MedicalHistoryScreen.tsx` and its Storybook story are implemented.

### 3. Document and validate in Storybook
- Files: Medical History story files and Storybook output
- Action: Add CSF3 stories for the new components and a shared-primitives showcase, then run validation.
- Verify: `npm run typecheck`, `npm run tokens:check`, and `npm run build-storybook` all succeed.
- Done: Story coverage and validation are complete.
