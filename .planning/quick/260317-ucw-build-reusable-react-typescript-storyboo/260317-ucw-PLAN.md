# Quick Task 260317-ucw: Build reusable React + TypeScript + Storybook components for the Login screen using Material 3 patterns and our design tokens from src/tokens/ only. No hardcoded values. - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Add a reusable Login screen family with a centered mobile-first authentication layout, branded header, credential fields, inline helper actions, supporting information, and footer while reusing the design system's shared form and action primitives wherever practical.

## Tasks

### 1. Reuse and extend shared auth primitives where necessary
- Reuse the existing `LanguageSwitcher`, `TextField`, `Checkbox`, `Button`, `Divider`, and `Typography` primitives.
- Extend `Checkbox` to support `children` in addition to the existing label contract.
- Add login-specific wrappers for the requested `IconField` and `PasswordField` contracts rather than duplicating the entire field implementation.

### 2. Build the Login component family
- Create `Icon`, `BrandHeader`, `IconField`, `PasswordField`, `InlineActionGroup`, `InfoSection`, `FooterInfo`, and `LoginLayout`.
- Keep the layout, footer, and supporting blocks token-driven, centered, keyboard accessible, and mobile-first.

### 3. Compose and document the screen
- Add `src/screens/Login/LoginScreen.tsx` and the screen story.
- Add Storybook stories for each new login component and the updated `Checkbox` behavior via the screen composition.
- Verify with `npm run typecheck`, `npm run tokens:check`, and `npm run tailwind:check`.
