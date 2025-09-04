---
allowed-tools: Bash(yarn test *), Bash(yarn lint*), Bash(git *), Bash(gh *), Read, Glob, Grep
argument-hint: [brief description of changes]
description: Create or update PR following Overdrive practices
---

# Create/Update Pull Request for Overdrive

Create or update a pull request following AutoGuru Overdrive development practices.

## Overdrive Development Practices

### Code Quality Standards
- ✅ **NO new dependencies** - use existing dependencies only
- ✅ **Design tokens only** - no hardcoded values, use tokens from `themes/`
- ✅ **Compose from primitives** - build from Box, Text, Icon, Stack, etc.
- ✅ **Fix all linting/TypeScript errors** in modified files before PR
- ✅ **Set displayName** on all components
- ✅ **Use React Aria** for interactive components (accessibility)
- ✅ **State via data attributes** managed by `dataAttrs` helper
- ✅ **Vanilla Extract styling** - all styles use CSS-in-TypeScript
- ✅ **Sprinkles utility system** for responsive design and consistency
- ✅ **Component styles wrapped** in `cssLayerComponent` CSS layer

### Architecture Requirements
- 📁 **Component structure**: ComponentName.tsx, ComponentName.css.ts, ComponentName.stories.tsx, ComponentName.spec.tsx (if needed), index.ts
- 🎨 **Styling approach**: Vanilla Extract + Sprinkles for responsive, token-driven styles
- 📖 **Storybook stories required** for all components (1 or more stories: Standard, Variants, Interactivity test)
- 🧪 **Testing strategy**: Focus on Storybook stories over unit tests; use `composeStories` pattern
- 👆 **Interaction testing**: For components with interactive states ensure a Storybook play function exists with interactiona assertions
- ♿ **Accessibility**: Keyboard navigation, screen readers, focus management, semantic queries in tests

### Quality Checklist
- 🚫 **No ESLint errors**
- 🚫 **No TypeScript errors**
- 🚫 **No unused imports**
- 🚫 **No console statements**
- 🚫 **No inline styles**
- 🚫 **No magic numbers** (use design tokens)
- 🚫 **No `any` types** (use `unknown` or proper types)
- ✅ **JSDoc comments on props**
- ✅ **Consistent naming conventions**

## PR Creation Process

!git status
!git diff --cached
!git log --oneline -10

**Branch:** $ARGUMENTS

### Pre-PR Checks
1. Run quality checks: `yarn lint && yarn test run`
2. **If any component** has been changed/added/removed generate a changeset: `yarn changeset` and populate one comment like per component
3. Check for existing PR on this branch
4. Ensure changes follow Code Quality Standards, Architecture Requirements and Quality Checklist above

### PR Management Strategy
- **If PR exists**: Update the existing PR with new commits and enhanced description
- **If no PR exists**: Create new PR with comprehensive summary following the practices above

Please analyze the current branch changes and either:
1. **Update existing PR** (if PR #1247 exists for current branch) with additional commits and enhanced description
2. **Create new PR** with detailed summary covering:
   - Component changes and styling improvements
   - Architecture adherence (Vanilla Extract + Sprinkles)
   - Testing coverage (Storybook stories + accessibility)
   - Quality compliance (linting, TypeScript, best practices)

### PR Description Template
```markdown
## Summary
- Detailed explantation of larger changes, short summary of any smaller changes
- Emphasise changes to architecture, patterns or developer impact

## Breaking Changes [only output if any present]
- [describe any breaking changes]
```

🤖 Generated with [Claude Code](https://claude.ai/code)
