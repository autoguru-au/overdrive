import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';

import { MarkdownRenderer } from './MarkdownRenderer';

const meta: Meta<typeof MarkdownRenderer> = {
	title: 'Content/Markdown Renderer',
	tags: ['new'],
	component: MarkdownRenderer,
	parameters: {
		docs: {
			description: {
				component:
					'Renders GitHub Flavored Markdown content using Overdrive design tokens and components. ' +
					'Wraps `react-markdown` with `remark-gfm` and maps every HTML element to an Overdrive-styled sub-component.\n\n' +
					'Supports headings, paragraphs, bold, italic, strikethrough, inline code, fenced code blocks, ' +
					'blockquotes, ordered/unordered/task lists, tables, links, images, and horizontal rules.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '720px', width: '100%' }}>{Story()}</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof MarkdownRenderer>;

export const Standard: Story = {
	args: {
		content:
			'This is a **simple paragraph** demonstrating the Markdown Renderer component.',
		testId: 'markdown-standard',
	},
};

export const Headings: Story = {
	args: {
		content: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`,
	},
};

export const InlineFormatting: Story = {
	args: {
		content: `This text has **bold**, *italic*, ~~strikethrough~~, and \`inline code\` formatting.`,
	},
};

export const CodeBlock: Story = {
	args: {
		content: `Here is a fenced code block:

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);
\`\`\``,
	},
};

export const Lists: Story = {
	args: {
		content: `## Unordered list

- First item
- Second item
  - Nested item A
  - Nested item B
- Third item

## Ordered list

1. Step one
2. Step two
3. Step three

## Task list

- [x] Completed task
- [ ] Pending task
- [ ] Another pending task`,
	},
};

export const Blockquote: Story = {
	args: {
		content: `> This is a blockquote.
>
> It can span multiple lines and contain **bold** or *italic* text.
>
> — Someone wise`,
	},
};

export const Table: Story = {
	args: {
		content: `| Feature | Status | Notes |
| --- | --- | --- |
| Headings | Done | h1 through h6 |
| Lists | Done | Ordered, unordered, task |
| Code blocks | Done | Syntax highlighting via \`pre\` |
| Tables | Done | GFM tables |`,
	},
};

export const Links: Story = {
	args: {
		content: `Here is an [internal link](/about) and an [external link](https://example.com) that opens in a new tab.`,
	},
};

export const Image: Story = {
	args: {
		content: `![A placeholder image](https://placehold.co/600x300?text=Overdrive+Image)`,
	},
};

export const Canary: Story = {
	args: {
		content: `# MD Renderer Canary

## Heading 1

### Heading 2

#### Heading 3

This is a paragraph with **bold text**, *italic text*, and ~~strikethrough~~.

Here is some \`inline code\` within a sentence.

\`\`\`typescript
const greet = (name: string): string => {
  return \`Hello, \${name}!\`;
};

console.log(greet('World'));
\`\`\`

> This is a blockquote. It can span multiple lines.

- Unordered item one
- Unordered item two
  - Nested item
- Unordered item three

1. Ordered item one
2. Ordered item two
3. Ordered item three

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

[Visit AutoGuru](https://www.autoguru.com.au)

![Placeholder image](https://placehold.co/600x400)

| Column A | Column B | Column C |
| --- | --- | --- |
| Row 1A | Row 1B | Row 1C |
| Row 2A | Row 2B | Row 2C |
| Row 3A | Row 3B | Row 3C |

That covers all the common markdown elements.`,
		testId: 'markdown-canary',
	},
};

export const FullDocument: Story = {
	args: {
		content: `# Full Document Example

This demonstrates **all** the markdown features combined into a single document.

## Formatting

You can use **bold**, *italic*, ~~strikethrough~~, and \`inline code\`.

## Links

Visit [AutoGuru](https://www.autoguru.com.au) for more information.

## Code

\`\`\`javascript
const overdrive = {
  name: 'Overdrive',
  type: 'Design System',
  awesome: true,
};
\`\`\`

## Lists

### Unordered

- Components
- Design tokens
- Accessibility

### Ordered

1. Install the package
2. Import the component
3. Render markdown

### Tasks

- [x] Build component
- [x] Write tests
- [ ] Ship it

## Table

| Component | Purpose |
| --- | --- |
| Heading | Section titles |
| Text | Body copy |
| TextLink | Navigation |

## Blockquote

> Design systems enable teams to build better products faster.

---

*End of document.*`,
		testId: 'markdown-full',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Renders headings', async () => {
			await expect(
				canvas.getByRole('heading', { level: 1, name: 'Full Document Example' }),
			).toBeInTheDocument();
			await expect(
				canvas.getByRole('heading', { level: 2, name: 'Formatting' }),
			).toBeInTheDocument();
		});

		await step('Renders links', async () => {
			const link = canvas.getByRole('link', { name: 'AutoGuru' });
			await expect(link).toHaveAttribute(
				'href',
				'https://www.autoguru.com.au',
			);
		});

		await step('Renders a table', async () => {
			await expect(canvas.getByRole('table')).toBeInTheDocument();
		});

		await step('Renders a blockquote', async () => {
			await expect(
				canvas.getByText(/Design systems enable teams/),
			).toBeInTheDocument();
		});

		await step('Applies data attributes', async () => {
			const root = canvasElement.querySelector(
				'[data-od-component="markdown-renderer"]',
			);
			await expect(root).toBeInTheDocument();
			await expect(root).toHaveAttribute('data-testid', 'markdown-full');
		});
	},
};
