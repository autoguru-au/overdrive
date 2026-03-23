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
			const h1s = canvas.getAllByRole('heading', {
				level: 1,
				name: 'Getting Started with Overdrive',
			});
			await expect(h1s.length).toBeGreaterThan(0);
			const h2s = canvas.getAllByRole('heading', {
				level: 2,
				name: 'Why Use a Design System?',
			});
			await expect(h2s.length).toBeGreaterThan(0);
		});

		await step('Renders links', async () => {
			const links = canvas.getAllByRole('link', { name: 'AutoGuru' });
			await expect(links[0]).toHaveAttribute(
				'href',
				'https://www.autoguru.com.au',
			);
		});

		await step('Renders a table', async () => {
			const tables = canvas.getAllByRole('table');
			await expect(tables.length).toBeGreaterThan(0);
		});

		await step('Renders a blockquote', async () => {
			const matches = canvas.getAllByText(/Great design systems/);
			await expect(matches.length).toBeGreaterThan(0);
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

// --- Compact density stories ---

const compactDecorator = (Story: () => React.ReactNode) => (
	<div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
		{Story()}
	</div>
);

const aiSummaryContent = `## 1. Where is the booking at

**Status:** Approved

Booking 1509298 was created as a draft on 23 Mar 2026 and submitted for review. A reviewer flagged a concern ("is 1 litre enough?") and moved it to Requires Changes. The supplier resubmitted the same day, and the booking has now been **approved** with authorisation number **CF-1509298** at a total value of **$470.11**.

## 2. What has changed

The booking transitioned from **Submitted** to **Approved**. Higher-level authorisation was granted.

- **Status:** Approved (authorisation CF-1509298 granted)
- **Approval amount:** $470.11
- **No changes to:** Tasks, pricing, supplier comments, or rules

## 3. What should happen next

**Required action: Await Supplier Completion** (MEDIUM priority)

1. Monitor the booking for supplier action and completion
2. Cancellation remains available if needed
3. No further review or resubmission is required`;

export const CompactHeadings: Story = {
	args: {
		content: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`,
		density: 'compact',
	},
	decorators: [compactDecorator],
};

export const CompactFullDocument: Story = {
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

### Current Progress

- [x] Core primitive components
- [x] Form inputs and validation
- [ ] Data visualisation components

## Inline Formatting

You can combine **bold text** with *italics*, use ~~strikethrough~~ for deprecated content, and reference code like \`<Button />\` or \`sprinkles()\` inline.

---

*Built with care by the AutoGuru engineering team.*`,
		density: 'compact',
	},
	decorators: [compactDecorator],
};

export const CompactAISummary: Story = {
	args: {
		content: aiSummaryContent,
		density: 'compact',
	},
	decorators: [compactDecorator],
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates compact density in a widget context such as an AI-generated booking summary panel.',
			},
		},
	},
};

export const DensityComparison: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '2rem' }}>
			<div style={{ flex: 1 }}>
				<p>
					<strong>Comfortable (default)</strong>
				</p>
				<MarkdownRenderer content={aiSummaryContent} />
			</div>
			<div style={{ flex: 1, maxWidth: '400px' }}>
				<p>
					<strong>Compact</strong>
				</p>
				<MarkdownRenderer
					content={aiSummaryContent}
					density="compact"
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Side-by-side comparison of comfortable and compact density using the same AI summary content.',
			},
		},
	},
};
