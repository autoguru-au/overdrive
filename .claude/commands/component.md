---
allowed-tools: Bash(yarn plop *), Bash(yarn test *), Bash(yarn lint*), Read, Glob, Grep, mcp__figma-dev-mode-mcp-server__get_code, mcp__figma-dev-mode-mcp-server__get_metadata, mcp__figma-dev-mode-mcp-server__get_image
argument-hint: [ComponentName] [FigmaURL|--design-attachment]
description: Generate a new Overdrive component with design input
---

# Generate New Component for Overdrive

Generate a new React component using Overdrive's plop scaffolding templates, following AutoGuru's design system standards.

## Usage Options

### Option 1: With Figma Design Link
```
/component ButtonComponent https://figma.com/design/fileKey/fileName?node-id=123:456
```

### Option 2: With Design Attachment Flag
```
/component ButtonComponent --design-attachment
```
*(Prompts user to attach design file)*

### Option 3: Basic Component (discouraged without design)
```
/component ButtonComponent
```
*(Will prompt for design input)*

## Component Generation Process

**Component Name:** {{componentName}}
**Design Input:** {{designInput || "⚠️  No design provided - will request design input"}}

## Design Input Processing

{{#if (contains designInput "figma.com")}}
### 🎨 Figma Design Detected
Figma URL: {{designInput}}

**Analyzing Figma Design:**
1. Extracting node metadata and specifications
2. Getting code suggestions from Figma Dev Mode
3. Downloading design image for reference
4. Mapping design tokens to Overdrive theme

{{#execute}}
!mcp__figma-dev-mode-mcp-server__get_metadata --clientLanguages="typescript,javascript" --clientFrameworks="react"
!mcp__figma-dev-mode-mcp-server__get_code --clientLanguages="typescript,javascript" --clientFrameworks="react"
!mcp__figma-dev-mode-mcp-server__get_image --clientLanguages="typescript,javascript" --clientFrameworks="react"
{{/execute}}

{{else if (eq designInput "--design-attachment")}}
### 📎 Design Attachment Required
**Please attach your design file(s):**
- Upload design screenshots (PNG, JPG, PDF)
- Include multiple views if responsive design needed
- Provide design specifications or style guide if available

⏸️  **Component generation paused** - waiting for design attachment...

{{else}}
### ⚠️  Design Input Required
**No design provided. Please provide design materials:**

**Option 1: Figma Link**
```
/component {{componentName}} https://figma.com/design/your-file?node-id=123:456
```

**Option 2: Design File Attachment**
```
/component {{componentName}} --design-attachment
```
Then attach your design file(s).

⏸️  **Component generation paused** - design input required before proceeding.

{{/if}}

## Component Generation

{{#if designInput}}
!yarn plop component "{{componentName}}"
{{else}}
<!-- Generation will resume after design input is provided -->
{{/if}}

### Pre-Generation Design Analysis

**IMPORTANT: This command requires design input. If no design is provided, the component generation will be paused to request design materials.**

#### Step 1: Design Input Validation
- **If Figma URL provided:** Use Figma MCP tools to fetch design data
- **If `--design-attachment` flag:** Request user to attach design file
- **If no design provided:** Pause and request design input before proceeding

#### Step 2: Design Analysis Process
1. **Visual Analysis**
   - Review design for component requirements and specifications
   - Identify visual patterns, spacing, colors, and interactive states
   - Note accessibility considerations and responsive behavior
   - Plan component props and API based on design variations

2. **Figma Integration** (if Figma URL provided)
   - Extract design tokens and measurements using Figma MCP server
   - Get component code suggestions from Figma Dev Mode
   - Analyze component hierarchy and structure

3. **Design Attachment Processing** (if design file attached)
   - Read and analyze uploaded design file
   - Extract visual requirements and specifications
   - Document design patterns and requirements

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

#### 1. Code Quality & Structure
- [ ] **Clean DOM**: Use native HTML elements correctly and employ semantic HTML
- [ ] **Efficient State**: Avoid unnecessary re-renders, review for rendering efficiency
- [ ] **Modularity**: Ensure component is reusable and focused on single responsibility
- [ ] **Primitive Composition**: Build and extend from the `useBox`, or another primitive such as Text, Icon, Stack, etc.
- [ ] **Display Name**: Set component `displayName` for debugging

#### 2. Props & Attributes
- [ ] **Consistent Naming**: Adhere to library conventions (e.g. `color`, not `colour`)
- [ ] **Clear Interface**: Define comprehensive TypeScript props with JSDoc and export them
- [ ] **CSS-like Styling Props**: Generate CSS-related props from vanilla-extract sprinkles
- [ ] **Kebab-case Values**: Use kebab-case for prop values that mirror CSS (e.g. `flex-end`)
- [ ] **State Management**: Use data attributes with `dataAttrs` helper
- [ ] **Test ID**: Enable with the `testId` prop convention

#### 3. Styling (Vanilla Extract)
- [ ] **Responsive Design**: Implement mobile-first responsive patterns
- [ ] **Sprinkles Integration**: Use sprinkles for responsive and utility styles
- [ ] **Design Token Usage**: Use only `sprinkles` function or theme tokens from `/lib/themes/`. No hardcoded values
- [ ] **State Variants**: Create style variants for different states
- [ ] **CSS Layer**: Wrap styles in `cssLayerComponent` CSS layer

#### 4. Accessibility (A11y)
- [ ] **React Aria Integration**: Implement React Aria for interactive elements where appropriate
- [ ] **Keyboard Navigation**: Ensure all interactive elements are fully operable using only keyboard
- [ ] **Visible Focus**: Implement clear, consistent, and visible focus outline
- [ ] **ARIA Roles & Attributes**: Apply WAI-ARIA roles and properties where native semantics are insufficient
- [ ] **Screen Readers**: Review component interactivity patterns for screen reader compatability

#### 5. Testing & Storybook
- [ ] **Standard Story**: Basic component usage
- [ ] **Variants Story**: Different props and configurations only if needed
- [ ] **Interactive States Story**: Hover, focus, active, disabled states tested in Storybook `play` function
- [ ] **Edge Cases Story**: Long content, empty states, error states only for more complex components
- [ ] **Accessibility Story**: Keyboard navigation and screen reader testing

#### 6. Quality Assurance
- [ ] **TypeScript**: No TypeScript errors (`yarn lint:tsc`)
- [ ] **ESLint**: No linting errors (`yarn lint:eslint`)
- [ ] **Tests**: Unit tests pass (`yarn test {{componentName}} --update --run`)

### Design Requirements

**This command enforces design-driven development:**

1. **Figma Integration** 🎨
   - Provides automatic code extraction and design token mapping
   - Enables design-to-code consistency validation
   - Extracts measurements and specifications directly from design

2. **Design File Analysis** 📎
   - Processes uploaded design screenshots and specifications
   - Analyzes visual patterns and component requirements
   - Maps designs to Overdrive design system tokens

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
