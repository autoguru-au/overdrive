---
allowed-tools: Bash(yarn plop *), Bash(yarn test *), Bash(yarn lint*), Read, Glob, Grep
argument-hint: [ComponentName]
description: Generate a new Overdrive component
---

# Generate New Component for Overdrive

Generate a new React component using Overdrive's plop scaffolding templates, following AutoGuru's design system standards.

## Component Generation Process

!yarn plop component "{{componentName}}"

**Component Name:** {{componentName}}

### Pre-Generation Setup
1. **Design Screenshot Analysis** (if provided)
   - Review attached design screenshot for component requirements
   - Identify visual patterns, spacing, colors, and interactive states
   - Note accessibility considerations and responsive behavior
   - Plan component props and API based on design variations

### Generated Files Structure
The plop generator will create:
```
lib/components/{{componentName}}/
├── {{componentName}}.tsx         # Component logic & props
├── {{componentName}}.css.ts      # Vanilla Extract styles
├── {{componentName}}.stories.tsx # Storybook stories
├── {{componentName}}.spec.jsx    # Unit tests (if needed)
└── index.ts                      # Exports
```

### Post-Generation Development Checklist

#### 1. Component Implementation
- [ ] **Design Token Usage**: Replace placeholder styles with theme tokens from `/lib/themes/`
- [ ] **Primitive Composition**: Build using Box, Text, Icon, Stack, etc.
- [ ] **Props Interface**: Define comprehensive TypeScript props with JSDoc
- [ ] **Display Name**: Set component `displayName` for debugging
- [ ] **Accessibility**: Implement React Aria for interactive elements
- [ ] **State Management**: Use data attributes with `dataAttrs` helper

#### 2. Styling (Vanilla Extract)
- [ ] **CSS Layer**: Wrap styles in `cssLayerComponent` CSS layer
- [ ] **Sprinkles Integration**: Use sprinkles for responsive and utility styles
- [ ] **Design Tokens**: Use only theme tokens, no hardcoded values
- [ ] **State Variants**: Create style variants for different states
- [ ] **Responsive Design**: Implement mobile-first responsive patterns

#### 3. Storybook Stories (~5 stories required)
- [ ] **Standard**: Basic component usage
- [ ] **Variants**: Different props and configurations
- [ ] **Interactive States**: Hover, focus, active, disabled states
- [ ] **Edge Cases**: Long content, empty states, error states
- [ ] **Accessibility**: Keyboard navigation and screen reader testing

#### 4. Quality Assurance
- [ ] **TypeScript**: No TypeScript errors (`yarn lint:tsc`)
- [ ] **ESLint**: No linting errors (`yarn lint:eslint`)
- [ ] **Tests**: Unit tests pass (`yarn test {{componentName}} --update --run`)
- [ ] **Accessibility**: Keyboard and screen reader compliance
- [ ] **Visual Testing**: Storybook stories render correctly

### Design Screenshot Integration

**📸 Design Screenshot Instructions:**
1. **Attach Design File**: Use Claude Code's file attachment to upload design screenshots
2. **Multiple States**: Include designs showing different component states (default, hover, disabled, etc.)
3. **Responsive Views**: Provide mobile and desktop versions if available
4. **Specifications**: Include any design specs (spacing, colors, typography) as separate images

**Design Analysis Process:**
- Extract color values and map to existing theme tokens
- Measure spacing using design system units (4px, 8px, 12px, 16px, etc.)
- Identify typography scales from theme
- Note animation/transition requirements
- Plan component variants based on design variations

### Development Commands

```bash
# Generate component
yarn plop component

# Start Storybook development
yarn storybook

# Run tests for specific component
yarn test ComponentName

# Run quality checks
yarn lint
yarn test:ci

# Build component library
yarn build
```

### Component Architecture Guidelines

1. **Props Interface**
   ```typescript
   interface ComponentNameProps extends TestId {
     variant?: 'primary' | 'secondary'
     size?: 'small' | 'medium' | 'large'
     disabled?: boolean
     children: ReactNode
   }
   ```

2. **Style Structure**
   ```typescript
   // ComponentName.css.ts
   import { style, styleVariants } from '@vanilla-extract/css'
   import { cssLayerComponent } from '../../styles/layers.css'
   import { sprinkles } from '../../styles/sprinkles.css'

   export const root = style([
     cssLayerComponent,
     sprinkles({ /* responsive styles */ }),
     { /* custom styles using theme tokens */ }
   ])
   ```

3. **Component Implementation**
   ```typescript
   const ComponentName = ({ variant = 'primary', ...props }: ComponentNameProps) => {
     return (
       <Box
         className={styles.root}
         data-od-component="component-name"
         {...dataAttrs({ variant })}
         {...props}
       >
         {/* component content */}
       </Box>
     )
   }
   ComponentName.displayName = 'ComponentName'
   ```

🤖 Generated with [Claude Code](https://claude.ai/code)
