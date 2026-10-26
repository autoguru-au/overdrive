import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect } from 'storybook/test';

import { FlexStack } from '../Flex/FlexStack';

import { RangeMeter, type RangeMeterZone } from './RangeMeter';

/**
 * The pricing example from the FMO booking MFE. The historical range is
 * $194.32 to $300.92, and the outliers start at $170 and at $345. The track
 * goes 10% of the outer range past the outliers.
 */
const priceZones: RangeMeterZone[] = [
	{ intent: 'danger', end: 170 },
	{ intent: 'warning', end: 194.32 },
	{ intent: 'success', end: 300.92 },
	{ intent: 'warning', end: 345 },
	{ intent: 'danger', end: 362.5 },
];

const meta = {
	title: 'Primitives/Indicators/Range Meter',
	component: RangeMeter,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '360px', width: '100%' }}>
				<Story />
			</div>
		),
	],
	args: {
		title: 'Historical range',
		value: 171,
		min: 152.5,
		max: 362.5,
		zones: priceZones,
		valueText: '$171.00, 12% below the historical range',
		footer: '$194.32 – $300.92',
	},
} satisfies Meta<typeof RangeMeter>;

export default meta;

type Story = StoryObj<typeof RangeMeter>;

export const Standard: Story = {};

export const InTheRange: Story = {
	args: {
		value: 246.07,
		valueText: '$246.07, in the historical range',
	},
};

/**
 * Without outlier data, the range has one zone on each side. The track goes
 * past the value, so that the marker shows in full.
 */
export const ThreeZones: Story = {
	args: {
		value: 320,
		min: 183.66,
		max: 330.66,
		zones: [
			{ intent: 'danger', end: 194.32 },
			{ intent: 'success', end: 300.92 },
			{ intent: 'danger', end: 330.66 },
		],
		valueText: '$320.00, 6% above the historical range',
	},
};

/** A value out of the range shows at the nearer end of the track. */
export const OutOfRange: Story = {
	render: (args) => (
		<FlexStack gap="6">
			<RangeMeter
				{...args}
				value={100}
				valueText="$100.00, below the track"
			/>
			<RangeMeter
				{...args}
				value={500}
				valueText="$500.00, above the track"
			/>
		</FlexStack>
	),
};

/** The part of the track after the last zone is neutral. */
export const NeutralRemainder: Story = {
	args: {
		title: 'Brake pad wear',
		value: 35,
		min: 0,
		max: 100,
		zones: [
			{ intent: 'success', end: 60 },
			{ intent: 'warning', end: 85 },
		],
		valueText: '35% worn',
		footer: 'Replace at 85%',
	},
};

/** All the intents, in order. */
export const Intents: Story = {
	args: {
		title: 'Intents',
		value: 50,
		min: 0,
		max: 100,
		zones: [
			{ intent: 'neutral', end: 25 },
			{ intent: 'success', end: 50 },
			{ intent: 'warning', end: 75 },
			{ intent: 'danger', end: 100 },
		],
		valueText: '50',
		footer: 'neutral, success, warning, danger',
	},
};

/** If `min` equals `max`, the track is neutral and the marker is in the centre. */
export const EmptyRange: Story = {
	args: {
		min: 250,
		max: 250,
		value: 171,
		valueText: '$171.00, no historical range',
		footer: 'No historical range for this line',
	},
};

/**
 * Without `title`, the meter has no header and takes its name from
 * `aria-label`. Without `footer`, the meter has no footer.
 */
export const WithoutTitle: Story = {
	args: {
		title: undefined,
		'aria-label': 'Quoted price against the historical range',
		footer: undefined,
	},
};

export const Accessibility: Story = {
	play: async ({ canvas, step }) => {
		const meter = canvas.getAllByRole('meter')[0];

		await step('The title is a heading and names the meter', async () => {
			const heading = canvas.getAllByRole('heading', { level: 2 })[0];
			await expect(meter).toHaveAttribute('aria-labelledby', heading.id);
			await expect(meter).toHaveAccessibleName('Historical range');
		});

		await step('The footer describes the meter', async () => {
			await expect(meter).toHaveAccessibleDescription(
				'$194.32 – $300.92',
			);
		});

		await step('The meter gives the value and its meaning', async () => {
			await expect(meter).toHaveAttribute('aria-valuenow', '171');
			await expect(meter).toHaveAttribute('aria-valuemin', '152.5');
			await expect(meter).toHaveAttribute('aria-valuemax', '362.5');
			await expect(meter).toHaveAttribute(
				'aria-valuetext',
				'$171.00, 12% below the historical range',
			);
		});

		await step('The meter is not a tab stop', async () => {
			await expect(meter).not.toHaveAttribute('tabindex');
		});
	},
};
