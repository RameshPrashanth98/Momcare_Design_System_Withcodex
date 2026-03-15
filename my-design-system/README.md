# My Design System

This workspace contains the Morph Maternity design-system foundations.

## Token Architecture

The token model uses three token layers:

- `primitive` for source-faithful values taken directly from the HTML foundations file
- `semantic` for reusable usage roles built on top of primitive values
- `componentAlias` for common cross-component mappings and state tokens

## Validation Commands

- `npm run typecheck`
- `npm run tokens:check`
