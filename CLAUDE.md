# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

Overdrive is AutoGuru's React component library and design system, built with
React 19+, TypeScript, Vanilla Extract for styling, and Storybook for component
documentation. The library provides a comprehensive set of accessible, reusable
UI components.

## Common Development Commands

### Building and Quality Checks

- `yarn build` - Build the library for distribution
- `yarn format` - Format code with Prettier
- `yarn lint` - Run ESLint and TypeScript checks

### Key Testing Commands

- `yarn test run ComponentName` - Run specific component tests
- `yarn test run ComponentName -u` - Update snapshots if needed
- `yarn test:a11y` - Run accessibility tests via Storybook

### Storybook

- `yarn storybook:build` - Build static Storybook
- `yarn chromatic` - Run visual regression tests with Chromatic

### Single Test Execution

Use Vitest's pattern matching: `yarn test ComponentName` or
`yarn test path/to/test.spec.tsx`

Note: The Vitest configuration uses the modern `test.projects` field in
`vite.config.ts` for workspace configuration, replacing the deprecated
`vitest.workspace.ts` file.

## Architecture, Design System Rules, Testing Strategy and Code Quality Standards

Key requirements:

- Fix all ESLint and TypeScript errors before committing
- Use JSDoc comments on props and consistent naming conventions
- No hardcoded values - use design tokens only

**For complete design system rules, patterns, and best practices, testing
guidelines, accessibility requirements, and Storybook patterns see
[AGENTS.md](./AGENTS.md)**

## Vanilla Extract Sprinkles Reference

For comprehensive documentation on the `sprinkles` utility system, see
[sprinkles.md](./.claude/commands/sprinkles.md).
