# Overdrive Roadmap

A draft roadmap for Overdrive evoloution.

### Ongoing

| Initiative                  | Description                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Dependency Upgrades**     | Manual check using `yarn check-deps` to pick up additional upgrades                                                                      |
| **MFE Component Promotion** | Continue identifying any MFE-based components that can be promoted into Overdrive                                                        |
| **Accessibility Standards** | Review interactive components for WCAG and ARIA standards                                                                                |
| **Story Args**              | Make handling of args and argTypes (especially style props) more consistent across all stories and continue to remove `@ts-expect-error` |
| **Expand Test Coverage**    | Update tests to increase coverage (currently 83%)                                                                                        |

---

### Component Uplift

| Component            | Description                                                                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DropDown**         | Fix controlled vs. uncontrolled state, and enhance with mobile modal overlay experience                                                                                |
| **Tooltip**          | Allow support for richtext content and detect children to selectively spread correct props to child                                                                    |
| **Polymorphic `as`** | Create a new Box prop, or alternate version of Box to handle polymorphic `as` component. Prototype in /components/Box/polymorphicBox folder                            |
| **Positioner**       | Rebuild the Positioner component with the new CSS `anchor-position` properties. Flow on effect to Tooltip, Flyout, DropDown and AutoSuggest                            |
| **Input Fields**.    | The input fields use a material UI design pattern with the inset label on border but won't be used in new designs. The fields can modernised which will help with a11y |

---

### Future State

| Initiative                            | Description                                                                                                                                                               | Reference                                                                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Storybook MCP Server**              | Install and integrate experimental Storybook MCP server for enhanced development capabilities                                                                             | [Storybook MCP](https://github.com/storybookjs/mcp)                                                                                                                                        |
| **Dark Mode**                         | Implement a simple dark mode mechanism and draft inverted version of base colour tokens                                                                                   |                                                                                                                                                                                            |
| **Unified Testing with Storybook 10** | Migrate to Storybook 10's support for writing Vitest tests within `.stories.tsx` files to unify test running and coverage reports between Vitest and Story play functions | [Storybook .test syntax proposal](https://chromatic-ui.notion.site/Storybook-test-syntax-in-CSF-2566e816203480cb95ddc674ddfbf5d3#2566e816203480cb95ddc674ddfbf5d3)                         |
| **Vite+ Exploration**                 | Explore migration to Vite+ tooling (free for open source projects), including transitions from ESLint to Oxlint and eventually Prettier to Oxfmt for improved performance | [Vite+](https://oss.vite.plus/)                                                                                                                                                            |
| **Semantic Color Tokens**             | The new `color` set of tokens can be improved on and adopted by design (color set has been loaded in to Figma variables and design should change workflow)                |                                                                                                                                                                                            |
| **Bundle Size Monitoring**            | Add automated bundle size tracking in CI using existing `yarn analyse` tool                                                                                               |                                                                                                                                                                                            |
| **React 19 Compiler Optimization**    | If React 19 compiler is assumed, manual memoization can start to be phased out across components (155 instances of memo/useMemo/useCallback)                              |                                                                                                                                                                                            |
| **Sync Tokens**                       | Sync tokens from Figma to code. Example combination: Figma > Supernova.io account > Supernova.io GH action > Style Dictionary conversion script                           | [experiment branch](https://github.com/autoguru-au/overdrive/tree/supernova/style-dictionary), [Supernova.io](https://www.supernova.io/), [Style Dictionary](https://styledictionary.com/) |
