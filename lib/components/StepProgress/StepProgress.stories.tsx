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

/**
 * Wide enough for the four labels below at their natural width, so the row is
 * never squeezed by the viewport the story happens to be rendered at.
 */
const ROW_MEASURING_WIDTH = 900;

/** The x co-ordinate an element is centred on, in viewport pixels. */
const horizontalCentre = (element: Element) => {
	const { left, width } = element.getBoundingClientRect();
	return left + width / 2;
};

/**
 * A regression guard, not a usage example. The labels are deliberately
 * mismatched — `Fleet` against `Payment authorisation` — because that is the
 * case the component used to get wrong: the caret sat in a fixed cell at the
 * end of each label, so the distance between two circles followed the copy
 * rather than the layout. Every other story here uses labels of a similar
 * length, which is why the defect survived review.
 *
 * It is covered twice over, because neither mechanism alone is enough. The
 * `play` function measures the geometry, which no unit test can reach — jsdom
 * has neither layout nor stylesheets — but it runs under `yarn test:a11y`
 * (`--project=storybook`, real Chromium) and CI runs only `--project=
 * unit-tests`, so it is a local and future check rather than a gate today. The
 * Chromatic snapshot is the half that does run on every review, and uneven
 * spacing is exactly the kind of regression a picture catches.
 *
 * It measures one row in a container with room for it, which is the only place
 * the even pitch holds: squeeze the row and the columns hit their min-content
 * floor at different widths. So it fixes its own width rather than inheriting
 * the viewport's, takes the wide Chromatic viewport only, and opts out of the
 * per-theme Chromatic decorator — three stacked copies of the row put nine
 * extra circles in the canvas and the geometry is read off all of them.
 */
export const EvenSpacing: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
	parameters: {
		chromatic: { viewports: [1024] },
	},
	decorators: [
		(Story) => (
			<div style={{ width: ROW_MEASURING_WIDTH }}>
				<Story />
			</div>
		),
	],
	args: {
		steps: ['Fleet', 'Account', 'Payment authorisation', 'MIC Setup'],
		activeStep: 3,
	},
	play: async ({ canvasElement, step }) => {
		await document.fonts.ready;

		// A decorator may render the story more than once in the one canvas,
		// so the geometry is read off a single sequence rather than the canvas.
		const row = canvasElement.querySelector(
			'[data-od-component="step-progress"]',
		);
		await expect(row).not.toBeNull();

		const list = row!.querySelector('ol');
		/* eslint-disable unicorn/prefer-spread -- the build target does not
		   down-level NodeList iteration, so spreading one fails typecheck. */
		const circles = Array.from(
			row!.querySelectorAll('[data-od-component="step-progress-item"]'),
			(item) => item.firstElementChild as HTMLElement,
		);
		const carets = Array.from(
			row!.querySelectorAll(
				'[data-od-component="step-progress-connector"]',
			),
		);
		/* eslint-enable unicorn/prefer-spread */

		const circleCentres = circles.map((circle) => horizontalCentre(circle));
		const gaps = circleCentres
			.slice(1)
			.map((position, index) => position - circleCentres[index]);

		await step('every step sits at the same pitch', async () => {
			await expect(gaps).toHaveLength(3);
			// Sub-pixel layout means these land a fraction apart rather than
			// exactly equal, so compare the spread against a 1px tolerance.
			const spread = Math.max(...gaps) - Math.min(...gaps);
			await expect(spread).toBeLessThan(1);
		});

		await step('each caret sits between the pair it joins', async () => {
			await expect(carets).toHaveLength(3);

			carets.forEach((caret, index) => {
				const midpoint =
					(circleCentres[index] + circleCentres[index + 1]) / 2;
				expect(
					Math.abs(horizontalCentre(caret) - midpoint),
				).toBeLessThan(1);
			});
		});

		await step(
			'the row is sized by its labels, not its container',
			async () => {
				const parent = list?.parentElement;
				await expect(list).not.toBeNull();
				await expect(parent).not.toBeNull();
				await expect(list!.getBoundingClientRect().width).toBeLessThan(
					parent!.getBoundingClientRect().width,
				);
			},
		);
	},
};
