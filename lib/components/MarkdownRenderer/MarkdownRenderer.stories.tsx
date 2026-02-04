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
					'Supports headings, paragraphs, bold, italic, strikethrough, inline code, fenced code blocks, ' +
					'blockquotes, ordered/unordered/task lists, tables, links, images, and horizontal rules.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '720px', width: '100%', margin: '0 auto' }}>
				{Story()}
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof MarkdownRenderer>;

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

export const FullDocument: Story = {
	args: {
		content: `# Getting Started with Overdrive

Overdrive is AutoGuru's **design system** — a collection of *reusable components*, design tokens, and guidelines that help our teams build consistent, accessible experiences.

> Great design systems don't just enforce consistency — they empower teams to move faster with confidence.

## Why Use a Design System?

A shared component library removes guesswork. Instead of reinventing buttons, modals, and form fields for every project, engineers pull from a **single source of truth**. This means fewer bugs, faster reviews, and a more cohesive product.

Key benefits include:

- Consistent look and feel across all products
- Built-in accessibility out of the box
- Faster development with pre-built, tested components
- Easier onboarding for new team members

## Quick Start

Getting up and running is straightforward:

1. Install the package from the registry
2. Wrap your app with the \`OverdriveProvider\`
3. Import and use any component

Here is a minimal setup:

\`\`\`tsx
import { OverdriveProvider, Button } from '@autoguru/overdrive';

function App() {
  return (
    <OverdriveProvider>
      <Button variant="primary">Book Now</Button>
    </OverdriveProvider>
  );
}
\`\`\`

## Component Overview

| Component | Category | Description |
| --- | --- | --- |
| Button | Actions | Primary and secondary actions |
| TextInput | Forms | Single-line text entry |
| Modal | Overlays | Dialogs and confirmations |
| Heading | Typography | Section and page titles |
| TextLink | Navigation | Inline and standalone links |

### Current Progress

- [x] Core primitive components
- [x] Form inputs and validation
- [x] Typography and layout system
- [ ] Data visualisation components
- [ ] Animation and motion library

## Inline Formatting

You can combine **bold text** with *italics*, use ~~strikethrough~~ for deprecated content, and reference code like \`<Button />\` or \`sprinkles()\` inline.

## Learn More

Visit [AutoGuru](https://www.autoguru.com.au) to see the design system in action, or check the [contribution guide](/contributing) to get involved.

![Overdrive banner](https://placehold.co/720x200?text=Overdrive+Design+System)

---

*Built with care by the AutoGuru engineering team.*`,
		testId: 'markdown-full',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Renders headings', async () => {
			await expect(
				canvas.getByRole('heading', {
					level: 1,
					name: 'Getting Started with Overdrive',
				}),
			).toBeInTheDocument();
			await expect(
				canvas.getByRole('heading', {
					level: 2,
					name: 'Why Use a Design System?',
				}),
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
				canvas.getByText(/Great design systems/),
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
