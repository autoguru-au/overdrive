import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { StepProgress } from './StepProgress';
import { StepProgressItem } from './StepProgressItem';

const GUIDE = `
\`StepProgress\` tells the user where they are in a multi-step flow — a
checkout, a wizard, a long form — as a numbered sequence joined by connectors.

> ⚠️ **It reports position, it does not navigate.** Nothing in it is clickable.

\`activeStep\` is the whole model. The component holds no state: move the user
forward or back by changing that number. In the default \`steps\` variant there
is deliberately **no completed state** — a step the user has already been
through looks exactly like one they have not reached yet. The \`stages\`
variant does show where the user has been: the stages ahead of the current one
fade.

Layout and sizing options are covered in the props table below. Each variant
is documented next to its example. The single circle-and-label primitive,
\`StepProgressItem\`, is exported for layouts this component does not cover —
its props are on the **StepProgressItem** tab of the props table. It is purely
presentational: it carries no list or current-position semantics, so you have
to supply those yourself.
`;

const STEPS = ['Your details', 'Vehicle', 'Booking', 'Payment'];

const INLINE_RADIO = 'inline-radio';

const meta = {
	title: 'Primitives/Indicators/Step Progress',
	component: StepProgress,
	subcomponents: { StepProgressItem },
	tags: ['new'],
	parameters: {
		docs: {
			description: { component: GUIDE },
		},
	},
	args: {
		steps: STEPS,
		activeStep: 2,
	},
	argTypes: {
		variant: {
			control: INLINE_RADIO,
			options: ['steps', 'stages'],
		},
		activeStep: {
			control: { type: 'number', min: 1, max: 5, step: 1 },
		},
		layout: {
			control: INLINE_RADIO,
			options: ['horizontal', 'vertical'],
		},
		size: { control: INLINE_RADIO, options: ['large', 'small'] },
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof StepProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Each step is a circle carrying its 1-based position, with an optional label.
 * The current step's circle fills, its number goes bold and its label goes
 * semibold. Connectors — a caret in horizontal layout, a short rule in
 * vertical — are drawn between steps, never before the first or after the
 * last, and are hidden from assistive technology.
 */
export const Standard: Story = {};

/**
 * Steps run down with their labels beside the circles. Horizontal is the
 * tighter layout, but it needs labels of one to three words — when they no
 * longer fit, switch to `vertical` rather than letting them wrap, which
 * pushes the circles out of alignment.
 */
export const Vertical: Story = {
	args: { layout: 'vertical' },
};

/**
 * The flat, text-only row from the design's `Stages` set — no circles, carets
 * between the names. Unlike the default variant, it does show where the user
 * has been: past stages sit at full strength, the current one goes semibold,
 * and upcoming stages fade along with the caret leading into each. Always
 * horizontal at one size — `layout`, `size` and `hideLabels` have no effect.
 */
export const Stages: Story = {
	args: { variant: 'stages' },
};

/** The design covers three to five steps. */
export const StepCounts: Story = {
	render: (args) => (
		<Stack space="7">
			{[3, 4, 5].map((count) => (
				<Stack key={count} space="3">
					<Text size="3" color="soft">
						{`${count} steps`}
					</Text>
					<StepProgress
						{...args}
						activeStep={2}
						aria-label={`Progress with ${count} steps`}
						steps={[
							'Your details',
							'Vehicle',
							'Booking',
							'Payment',
							'Confirm',
						].slice(0, count)}
					/>
				</Stack>
			))}
		</Stack>
	),
};

/**
 * `hideLabels` is the last resort for a width neither layout survives. The
 * labels stay in the accessibility tree, so a screen reader still hears them —
 * but bare numbers say nothing about the flow, so reach for `vertical` first.
 */
export const LabelsHidden: Story = {
	args: { hideLabels: true },
};

/**
 * `onDark` restyles the sequence for a dark panel or hero: unselected labels
 * turn white, the circles keep their white fill but take a white ring, and the
 * current step's circle and label take the brand accent. It does not paint a
 * background — the surface is the consumer's job.
 */
export const OnDark: Story = {
	args: { onDark: true },
	render: (args) => (
		<Box backgroundColor="hard" borderRadius="md" padding="6">
			<StepProgress {...args} />
		</Box>
	),
};
