import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, within } from 'storybook/test';

import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { StepProgress } from './StepProgress';

const GUIDE = `
\`StepProgress\` tells the user where they are in a multi-step flow — a
checkout, a wizard, a long form — as a numbered sequence joined by connectors.

> ⚠️ **It reports position, it does not navigate.** Nothing in it is clickable.
> For breadcrumb-style navigation where each stage is a link, use
> \`Breadcrumbs\`.

\`activeStep\` is the whole model. The component holds no state: move the user
forward or back by changing that number. There is deliberately **no completed
state** — a step the user has already been through looks exactly like one they
have not reached yet. If your flow needs to show which steps are done, this is
not the right component.

| \`layout\` | Steps run | Labels sit | Good for |
| --- | --- | --- | --- |
| \`horizontal\` *(default)* | across | beneath each circle | Wide containers, three to five short steps |
| \`vertical\` | down | beside each circle | Narrow columns, longer labels |

Each variant below is documented next to its example. The single
circle-and-label primitive, \`StepProgressItem\`, has
[its own page](/docs/primitives-indicators-step-progress-item--docs).
`;

const STEPS = ['Your details', 'Vehicle', 'Booking', 'Payment'];

const meta = {
	title: 'Primitives/Indicators/Step Progress',
	component: StepProgress,
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
		activeStep: {
			control: { type: 'number', min: 1, max: 5, step: 1 },
		},
		layout: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
		},
		size: { control: 'inline-radio', options: ['large', 'small'] },
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
 * Circles are 32px at `size="large"` and 24px at `small`, with the type scale
 * following. Do not mix sizes within one sequence.
 */
export const Small: Story = {
	args: { size: 'small' },
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

/**
 * The sequence is a `nav` landmark wrapping an ordered list, so screen-reader
 * users can jump to it and hear how many steps there are. The current step's
 * `<li>` carries `aria-current="step"`. Name the landmark with `aria-label`
 * whenever a page has more than one — the default is `Progress`.
 */
export const Interaction: Story = {
	args: { activeStep: 3 },
	play: async ({ canvasElement, step }) => {
		// The story renders more than once per document — per theme in Chromatic
		// and twice on the autodocs page — so take the first landmark and scope
		// every later query to it rather than picking up a sibling copy.
		const nav = within(canvasElement).getAllByRole('navigation', {
			name: 'Progress',
		})[0];
		const canvas = within(nav);

		await step('exposes a named navigation landmark', async () => {
			await expect(nav).toBeVisible();
		});

		await step('renders one list item per step', async () => {
			const items = canvas.getAllByRole('listitem');
			await expect(items).toHaveLength(STEPS.length);
		});

		await step('marks only the active step as current', async () => {
			const current = canvas
				.getAllByRole('listitem')
				.filter((item) => item.getAttribute('aria-current') === 'step');

			await expect(current).toHaveLength(1);
			await expect(current[0]).toHaveTextContent(STEPS[2]);
		});

		await step('keeps every label readable', async () => {
			for (const label of STEPS) {
				await expect(canvas.getAllByText(label)[0]).toBeVisible();
			}
		});
	},
};
