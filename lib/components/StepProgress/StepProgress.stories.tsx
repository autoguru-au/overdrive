import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect } from 'storybook/test';

import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { StepProgress } from './StepProgress';
import { StepProgressItem } from './StepProgressItem';

const GUIDE = `
\`StepProgress\` tells the user where they are in a multi-step flow — a
checkout, a wizard, a long form — as a numbered sequence joined by connectors.

> ⚠️ **It reports position, it does not navigate.** Nothing in it is clickable.
> For breadcrumb-style navigation where each stage is a link, use
> \`Breadcrumbs\`.

## Progress is linear and stateless

\`activeStep\` is the whole model. The component holds no state: move the user
forward or back by changing that number.

There is deliberately **no completed state**. A step the user has already been
through looks exactly like one they have not reached yet — only the current step
is filled. If your flow needs to show which steps are done, this is not the
right component.

## Choosing a layout

| \`layout\` | Steps run | Labels sit | Good for |
| --- | --- | --- | --- |
| \`horizontal\` *(default)* | across | beneath each circle | Wide containers, three to five short steps |
| \`vertical\` | down | beside each circle | Narrow columns, longer labels |

Horizontal is the tighter of the two: the connectors butt straight up against
the labels, so the sequence is only as wide as the labels make it. Keep labels
to one to three words. When they no longer fit, switch to \`vertical\` rather
than letting them wrap — wrapping pushes the circles out of alignment.

\`hideLabels\` is the last resort for a width neither layout survives. It keeps
the labels in the accessibility tree and drops them from the screen, so a screen
reader still hears them. Bare numbers say nothing about the flow, so reach for
\`vertical\` first.

## Dark surfaces

\`onDark\` restyles the sequence for a dark panel or hero: unselected labels turn
white, the circles keep their white fill but take a white ring, and the current
step's circle and label take the brand accent. It does not paint a background —
put it on a dark surface yourself.

## Anatomy

Each step is a circle carrying its 1-based position, with an optional label
beneath (horizontal) or beside it (vertical). The current step's circle fills,
its number goes bold and its label goes semibold. Circles are 32px at
\`size="large"\` and 24px at \`small\`, with the type scale following.

Connectors are drawn between steps, never before the first or after the last: a
caret in horizontal layout, a short rule in vertical. They are decorative and
hidden from assistive technology.

## Accessibility

The sequence is a \`nav\` landmark wrapping an ordered list, so screen-reader
users can jump to it and hear how many steps there are. The current step's
\`<li>\` carries \`aria-current="step"\`.

Name the landmark with \`aria-label\` whenever a page has more than one — the
default is \`Progress\`.

## StepProgressItem on its own

\`StepProgressItem\` is exported for layouts this component does not cover. It is
purely presentational: it renders one circle and label and carries no list or
current-position semantics, so you have to supply those yourself.
`;

const STEPS = ['Your details', 'Vehicle', 'Booking', 'Payment'];

const meta = {
	title: 'Components/Step Progress',
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

export const Standard: Story = {};

export const Layouts: Story = {
	render: (args) => (
		<Stack space="7">
			{(['horizontal', 'vertical'] as const).map((layout) => (
				<Stack key={layout} space="3">
					<Text size="3" color="soft">
						{layout}
					</Text>
					<StepProgress {...args} layout={layout} />
				</Stack>
			))}
		</Stack>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<Stack space="7">
			{(['large', 'small'] as const).map((size) => (
				<Stack key={size} space="3">
					<Text size="3" color="soft">
						{size}
					</Text>
					<StepProgress {...args} size={size} />
				</Stack>
			))}
		</Stack>
	),
};

/** Three to five steps, which is what the design covers. */
export const StepCounts: Story = {
	render: (args) => (
		<Stack space="7">
			{[3, 4, 5].map((count) => (
				<StepProgress
					{...args}
					activeStep={2}
					aria-label={`Progress with ${count} steps`}
					key={count}
					steps={[
						'Your details',
						'Vehicle',
						'Booking',
						'Payment',
						'Confirm',
					].slice(0, count)}
				/>
			))}
		</Stack>
	),
};

/**
 * The last resort for a width neither layout survives. The labels stay in the
 * accessibility tree, so a screen reader still hears them.
 */
export const LabelsHidden: Story = {
	args: { hideLabels: true },
};

/**
 * `onDark` does not paint a background — the surface is the consumer's job.
 */
export const OnDark: Story = {
	args: { onDark: true },
	render: (args) => (
		<Box backgroundColor="hard" borderRadius="md" padding="6">
			<Stack space="7">
				<StepProgress {...args} />
				<StepProgress {...args} layout="vertical" />
			</Stack>
		</Box>
	),
};

/** The step primitive, outside a sequence. */
export const StepPrimitive: Story = {
	tags: ['!autodocs'],
	render: () => (
		<Stack space="6">
			{(['large', 'small'] as const).map((size) =>
				(['vertical', 'horizontal'] as const).map((arrangement) => (
					<Box
						display="flex"
						gap="6"
						key={`${size}-${arrangement}`}
						alignItems="flexStart"
					>
						<StepProgressItem
							arrangement={arrangement}
							label="Step one"
							number={1}
							size={size}
						/>
						<StepProgressItem
							arrangement={arrangement}
							label="Step one"
							number={1}
							selected
							size={size}
						/>
						<StepProgressItem
							hideLabel
							label="Step one"
							number={1}
							size={size}
						/>
					</Box>
				)),
			)}
		</Stack>
	),
};

export const Interaction: Story = {
	args: { activeStep: 3 },
	play: async ({ canvas, step }) => {
		await step('exposes a named navigation landmark', async () => {
			const nav = canvas.getAllByRole('navigation', {
				name: 'Progress',
			})[0];
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
