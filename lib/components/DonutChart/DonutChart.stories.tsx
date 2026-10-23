import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';

import {
	expensesByCategory,
	formatCompactCurrency,
	formatPercent,
} from '../../stories/shared/chartData';
import { Box } from '../Box/Box';

import { DonutChart } from './DonutChart';

const GUIDE = `
\`DonutChart\` shows the share of each category in a ring, with the total in
the centre and a legend with the value and the share of each slice.

The component has **no fixed text, locale or currency**. Give the translated
text in props and give the formatters (\`formatValue\`, \`formatPercent\`). The
centre has room for a short value, so use a compact format, for example
\`Intl.NumberFormat\` with \`notation: 'compact'\`.

Give the slice colours as tokens, for example
\`tokens.color.gamut.green['900']\`, so that they follow the theme.

When all values are 0, the chart shows \`emptyLabel\` in place of the ring.
`;

const meta = {
	title: 'Components/Charts/Donut Chart',
	component: DonutChart,
	tags: ['new'],
	parameters: {
		// Fail the story tests on any axe violation, not only report it.
		a11y: { test: 'error' },
		docs: {
			description: { component: GUIDE },
		},
	},
	decorators: [
		(Story) => (
			<Box
				borderColor="default"
				borderRadius="medium"
				borderWidth="1"
				padding="3"
				maxWidth="fit-content"
			>
				<Story />
			</Box>
		),
	],
	args: {
		data: expensesByCategory,
		'aria-label': 'Spend by category',
		formatValue: formatCompactCurrency,
		formatPercent,
		totalLabel: 'Total',
		emptyLabel: 'No spend data',
		categoryLabel: 'Category',
		valueLabel: 'Spend',
		shareLabel: 'Share',
	},
	argTypes: {
		view: { control: 'inline-radio', options: ['chart', 'table'] },
		formatValue: { table: { disable: true } },
		formatPercent: { table: { disable: true } },
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof DonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Three categories from the design data. */
export const Standard: Story = {};

/** Two categories. */
export const TwoSlices: Story = {
	args: {
		data: expensesByCategory.filter((item) => item.key !== 'fuel'),
	},
};

/** One category takes the full ring. */
export const OneSlice: Story = {
	args: { data: expensesByCategory.slice(0, 1) },
};

/** All values are 0: the chart shows `emptyLabel`. */
export const Empty: Story = {
	args: {
		data: expensesByCategory.map((item) => ({ ...item, value: 0 })),
	},
};

/** The same data as a visible table. */
export const TableView: Story = {
	args: { view: 'table' },
};

/**
 * Keyboard and pointer behaviour. Tab moves focus to the first slice and the
 * arrow keys move between the slices. The active slice and its legend item
 * stay at full opacity; the others dim.
 */
export const Interaction: Story = {
	tags: ['test', '!autodocs'],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const slices = canvas.getAllByRole('graphics-symbol');
		const legendItems = canvas.getAllByRole('listitem');

		await step('each slice has a summary for screen readers', async () => {
			await expect(slices).toHaveLength(expensesByCategory.length);
			await expect(slices[0]).toHaveAccessibleName(
				'Maintenance, $12K, 45%',
			);
		});

		await step(
			'Tab focuses the first slice and dims the others',
			async () => {
				await userEvent.tab();
				await expect(slices[0]).toHaveFocus();
				await expect(slices[0]).toHaveAttribute('data-active');
				await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
				await expect(legendItems[1]).toHaveAttribute('data-dimmed');
			},
		);

		await step('the arrow keys move between the slices', async () => {
			await userEvent.keyboard('{ArrowRight}');
			await expect(slices[1]).toHaveFocus();
			await expect(legendItems[1]).not.toHaveAttribute('data-dimmed');
			await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
			await expect(slices.at(-1)).toHaveFocus();
		});

		await step('Escape removes the highlight', async () => {
			await userEvent.keyboard('{Escape}');
			await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
			await expect(slices.at(-1)).toHaveFocus();
		});

		await step('the chart returns to its default state', async () => {
			await userEvent.tab();
			await expect(slices.at(-1)).not.toHaveFocus();
		});
	},
};
