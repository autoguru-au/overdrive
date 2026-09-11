import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { StepProgressItem } from './StepProgressItem';

const GUIDE = `
\`StepProgressItem\` is the single circle-and-label primitive that
\`StepProgress\` composes into a sequence. It is exported for layouts
\`StepProgress\` does not cover.

> ⚠️ **It is purely presentational.** It carries no list or current-position
> semantics — no \`nav\`, no \`ol\`, no \`aria-current\`. Reach for
> \`StepProgress\` first; use this directly only when you are building a layout
> it does not cover, and supply those semantics yourself.
`;

const meta = {
	title: 'Primitives/Indicators/Step Progress Item',
	component: StepProgressItem,
	tags: ['new'],
	parameters: {
		docs: {
			description: { component: GUIDE },
		},
	},
	args: {
		number: 1,
		label: 'Your details',
	},
	argTypes: {
		arrangement: {
			control: 'inline-radio',
			options: ['vertical', 'horizontal'],
		},
		size: { control: 'inline-radio', options: ['large', 'small'] },
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof StepProgressItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A circle carrying the step's 1-based `number`, with an optional `label`
 * beneath it (`arrangement="vertical"`) or beside it (`horizontal`).
 */
export const Standard: Story = {};

/** The user's current position — the circle fills and the label goes semibold. */
export const Selected: Story = {
	args: { selected: true },
};

/** The label beside the circle instead of beneath it. */
export const Horizontal: Story = {
	args: { arrangement: 'horizontal' },
};

/** A 24px circle with the type scale following. */
export const Small: Story = {
	args: { size: 'small' },
};

/**
 * The label stays in the accessibility tree, so a screen reader still hears
 * it — only the visible text is dropped.
 */
export const NumberOnly: Story = {
	args: { hideLabel: true },
};

/**
 * `onDark` does not paint a background — the surface is the consumer's job.
 */
export const OnDark: Story = {
	args: { onDark: true, selected: true },
	render: (args) => (
		<Box backgroundColor="hard" borderRadius="md" padding="6">
			<StepProgressItem {...args} />
		</Box>
	),
};
