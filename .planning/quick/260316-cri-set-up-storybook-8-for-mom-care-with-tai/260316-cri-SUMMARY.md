---
quick_id: 260316-cri
title: set up Storybook 8 for Mom Care with Tailwind and token foundations
completed: 2026-03-16
commit: 41ed82d
---

# Quick Task 260316-cri Summary

Set up Storybook 8 for the Mom Care workspace with the React Vite framework, Tailwind CSS integration, token-driven preview styling, and a foundations welcome page.

## Files Updated

- `my-design-system/package.json`
- `my-design-system/package-lock.json`
- `my-design-system/tsconfig.json`
- `my-design-system/.gitignore`
- `my-design-system/.storybook/main.ts`
- `my-design-system/.storybook/preview.ts`
- `my-design-system/postcss.config.js`
- `my-design-system/src/storybook/tailwind.css`
- `my-design-system/src/storybook/Welcome.stories.tsx`
- `my-design-system/src/components/Navigation/Bottomnavbar.stories.tsx`

## Verification

- `npm run typecheck` - passed
- `npm run tailwind:check` - passed
- `npm run build-storybook` - passed

## Notes

- Storybook uses `@storybook/react-vite` on the Storybook 8 line, with `@storybook/addon-a11y` and `@storybook/addon-essentials` for accessibility and controls/docs support.
- `preview.ts` imports the Tailwind entry and Mom Care tokens to set backgrounds, default typography, and padded preview framing.
- `Welcome.stories.tsx` provides a foundations landing page with color palette and typography scale samples drawn from the token source of truth.
- `storybook-static/` is now ignored and not tracked.
