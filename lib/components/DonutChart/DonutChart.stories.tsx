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

The chart has three parts, as a modal does: a header with \`title\` and
\`description\`, the body with the ring, and a footer with the legend. Without
\`title\` there is no header. Set \`titleAs\` to the heading level that fits
the page.

Hover or focus on a slice shows a tooltip with the name, the value and the
share of the slice. Set \`hideLegend\` to show only the ring. Set
\`hideTooltip\` to remove the tooltip. With \`hideLegend\`, the tooltip always
shows, because it is then the only text for the slices.

The chart has no border or card. To show it in a card, put it in a container
with a border, for example a \`Box\`.

When all values are 0, the chart shows \`emptyLabel\` in place of the ring.

Screen readers read the name of the chart, and the name, the value and the
share of each slice.
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
		// No border: the story only keeps the chart as wide as its content.
		(Story) => (
			<Box maxWidth="fit-content">
				<Story />
			</Box>
		),
	],
	args: {
		data: expensesByCategory,
		title: 'Spend by category',
		description: 'Monthly',
		'aria-label': 'Spend by category',
		formatValue: formatCompactCurrency,
		formatPercent,
		totalLabel: 'Total',
		emptyLabel: 'No spend data',
		valueLabel: 'Spend',
		shareLabel: 'Share',
	},
	argTypes: {
		formatValue: { table: { disable: true } },
		formatPercent: { table: { disable: true } },
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof DonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const tooltipIn = (element: HTMLElement) =>
	element.querySelector('[data-chart-tooltip]');

/** Three categories from the design data, with the header from the design. */
export const Standard: Story = {};

/** Without `title`, the chart has no header. */
export const WithoutHeader: Story = {
	args: { title: undefined, description: undefined },
};

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

/**
 * Only the ring. Hover or focus on a slice shows a tooltip with its name,
 * value and share. The tooltip goes away from the centre of the ring.
 */
export const WithoutLegend: Story = {
	args: { hideLegend: true },
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const slices = canvas.getAllByRole('graphics-symbol');

		await step('the legend does not show', async () => {
			await expect(canvas.queryAllByRole('listitem')).toHaveLength(0);
			await expect(tooltipIn(canvasElement)).toBeNull();
		});

		await step('hover on a slice shows its tooltip', async () => {
			await userEvent.hover(slices[1]);
			const tooltip = tooltipIn(canvasElement);
			await expect(tooltip).toHaveTextContent('Fuel');
			await expect(tooltip).toHaveTextContent('$10.3K');
			await expect(tooltip).toHaveTextContent('39%');
			await userEvent.unhover(slices[1]);
			await expect(tooltipIn(canvasElement)).toBeNull();
		});

		await step(
			'keyboard focus shows the tooltip of the slice',
			async () => {
				await userEvent.tab();
				await expect(slices[0]).toHaveFocus();
				await expect(tooltipIn(canvasElement)).toHaveTextContent(
					'Maintenance',
				);
				await userEvent.keyboard('{Escape}');
				await expect(tooltipIn(canvasElement)).toBeNull();
			},
		);

		await step('the chart returns to its default state', async () => {
			await userEvent.tab();
			await expect(slices[0]).not.toHaveFocus();
		});
	},
};

/**
 * Without the tooltip. Hover or focus on a slice dims the other slices and
 * their legend swatches, and the legend gives the details. With `hideLegend`,
 * the tooltip always shows.
 */
export const WithoutTooltip: Story = {
	tags: ['skip-themes'],
	args: { hideTooltip: true },
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const [first] = canvas.getAllByRole('graphics-symbol');

		await step('hover on a slice shows no tooltip', async () => {
			await userEvent.hover(first);
			await expect(first).toHaveAttribute('data-active');
			await expect(tooltipIn(canvasElement)).toBeNull();
			await userEvent.unhover(first);
		});

		await step('keyboard focus shows no tooltip', async () => {
			await userEvent.tab();
			await expect(first).toHaveFocus();
			await expect(first).toHaveAttribute('data-active');
			await expect(tooltipIn(canvasElement)).toBeNull();
		});

		await step('the chart returns to its default state', async () => {
			await userEvent.tab();
			await expect(first).not.toHaveFocus();
		});
	},
};

/**
 * Keyboard and pointer behaviour. Tab moves focus to the first slice and the
 * arrow keys move between the slices. The other slices and their legend
 * swatches dim; the text does not dim. The tooltip shows the details of the
 * active slice.
 */
export const Interaction: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
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
			'Tab focuses the first slice, shows its tooltip and dims the others',
			async () => {
				await userEvent.tab();
				await expect(slices[0]).toHaveFocus();
				await expect(slices[0]).toHaveAttribute('data-active');
				await expect(tooltipIn(canvasElement)).toHaveTextContent(
					'Maintenance',
				);
				await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
				await expect(legendItems[1]).toHaveAttribute('data-dimmed');
			},
		);

		await step('the arrow keys move between the slices', async () => {
			await userEvent.keyboard('{ArrowRight}');
			await expect(slices[1]).toHaveFocus();
			await expect(tooltipIn(canvasElement)).toHaveTextContent('Fuel');
			await expect(legendItems[1]).not.toHaveAttribute('data-dimmed');
			await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
			await expect(slices.at(-1)).toHaveFocus();
		});

		await step(
			'Escape closes the tooltip and removes the highlight',
			async () => {
				await userEvent.keyboard('{Escape}');
				await expect(tooltipIn(canvasElement)).toBeNull();
				await expect(legendItems[0]).not.toHaveAttribute('data-dimmed');
				await expect(slices.at(-1)).toHaveFocus();
			},
		);

		await step('the chart returns to its default state', async () => {
			await userEvent.tab();
			await expect(slices.at(-1)).not.toHaveFocus();
		});
	},
};
