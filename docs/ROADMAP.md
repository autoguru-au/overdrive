# Overdrive Roadmap

## Ongoing

| Initiative                  | Description                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Dependency Upgrades**     | Manual check using `yarn check-deps` to pick up additional upgrades                                                                      |
| **MFE Component Promotion** | Continue identifying any MFE-based components that can be promoted into Overdrive                                                        |
| **Expand Test Coverage**    | Improve test coverage (currently 83.5%)                                                                                                  |
| **Accessibility Standards** | Review interactive components for WCAG and ARIA standards                                                                                |
| **Story Args**              | Make handling of args and argTypes (especially style props) more consistent across all stories and continue to remove `@ts-expect-error` |

## Component Uplift

| Component      | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **DropDown**   | Fix controlled vs. uncontrolled state, and enhance with mobile modal overlay experience             |
| **Tooltip**    | Allow support for richtext content and detect children to selectively spread correct props to child |
| **Positioner** | Rebuild the Positioner component with the new CSS `anchor-position` properties                      |

## Future State

| Initiative                            | Description                                                                                                                                                               | Reference                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Storybook MCP Server**              | Install and integrate experimental Storybook MCP server for enhanced development capabilities                                                                             | [Link](https://github.com/storybookjs/mcp-server-storybook)                         |
| **Dark Mode**                         | Implement a simple dark mode mechanism and a iverted version of base colour tokens                                                                                        |                                                                                     |
| **Unified Testing with Storybook 10** | Migrate to Storybook 10's support for writing Vitest tests within `.stories.tsx` files to unify test running and coverage reports between Vitest and Story play functions | [Link](https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/) |
| **Vite+ Exploration**                 | Explore migration to Vite+ tooling (free for open source projects), including transitions from ESLint to Oxlint and eventually Prettier to Oxfmt for improved performance | [Link](https://oss.vite.plus/)                                                      |
| **Bundle Size Monitoring**            | Add automated bundle size tracking in CI using existing `yarn analyse` tool                                                                                               |                                                                                     |
| **Rebuild Input Fields**.             |                                                                                                                                                                           |                                                                                     |
| **React 19 Compiler Optimization**    | Leverage React 19 compiler features to reduce manual memoization (155 instances of memo/useMemo/useCallback)                                                              | Medium                                                                              |
