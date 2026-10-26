import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import {
	expenseSeries,
	formatCompactCurrency,
	formatCurrency,
	weeklyExpenses,
} from '../../stories/shared/chartData';

import { StackedBarChart } from './StackedBarChart';

const GUIDE = `
\`StackedBarChart\` shows the values of each series stacked in one column for
each period, for example the spend by category for each week.

The component has **no fixed text, locale or currency**. Give the translated
text in props (\`aria-label\`, \`totalLabel\`, the series and column
labels), and give the formatters (\`formatValue\`, \`formatTick\`). Use
\`Intl.NumberFormat\` for the values and \`Intl.DateTimeFormat#formatRange\` for
date ranges.

Give the series colours as tokens, for example
\`tokens.color.gamut.green['900']\`, so that they follow the theme.

The width follows the container. The height follows the container when the
container has a height, with a minimum.

The chart has three parts, as a modal does: a header with \`title\` and
\`description\`, the body with the columns, and a footer with the legend.
Without \`title\` there is no header, and with \`hideLegend\` there is no
footer. The chart has no border or card. To show it in a card, put it in a
container with a border, for example a \`Box\`.

Screen readers read the name of the chart, and the name of each column with
its total and the value of each series.
`;

const meta = {
	title: 'Components/Charts/Stacked Bar Chart',
	component: StackedBarChart,
	tags: ['new'],
	parameters: {
		// Fail the story tests on any axe violation, not only report it.
		a11y: { test: 'error' },
		docs: {
			description: { component: GUIDE },
		},
	},
	args: {
		data: weeklyExpenses,
		series: expenseSeries,
		'aria-label': 'Weekly expenses by category',
		formatValue: formatCurrency,
		formatTick: formatCompactCurrency,
		totalLabel: 'Total',
	},
	argTypes: {
		tickCount: { control: { type: 'number', min: 1, max: 10 } },
		formatValue: { table: { disable: true } },
		formatTick: { table: { disable: true } },
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof StackedBarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const tooltipIn = (element: HTMLElement) =>
	element.querySelector('[data-od-component="chart-tooltip"]');

/**
 * Eight weeks of expenses from the design. The Y axis uses nice steps: the
 * largest column is $6,220, so the axis goes to $7.5K in steps of $2.5K.
 */
export const Standard: Story = {};

/** A header with a title and a description. */
export const WithHeader: Story = {
	args: { title: 'Expenses', description: 'Weekly' },
};

/** No legend. The column tooltip still gives the name of each series. */
export const WithoutLegend: Story = {
	args: { hideLegend: true },
};

/**
 * The Y axis column is as wide as the widest tick label, so longer formats
 * from other locales fit without a fixed margin.
 */
export const OtherLocale: Story = {
	args: {
		series: expenseSeries.map((item) => ({
			...item,
			label: { maintenance: 'Serwis', fuel: 'Paliwo', tolls: 'Opłaty' }[
				item.key
			],
		})),
		data: weeklyExpenses.map((datum, index) => ({
			...datum,
			label: [
				'1–7 sie',
				'8–14 sie',
				'15–21 sie',
				'22–28 sie',
				'29 sie – 4 wrz',
				'5–11 wrz',
				'12–18 wrz',
				'19–23 wrz',
			][index],
		})),
		formatValue: new Intl.NumberFormat('pl-PL', {
			style: 'currency',
			currency: 'AUD',
			maximumFractionDigits: 0,
		}).format,
		formatTick: new Intl.NumberFormat('pl-PL', {
			style: 'currency',
			currency: 'AUD',
			notation: 'compact',
			maximumFractionDigits: 1,
		}).format,
		totalLabel: 'Razem',
		'aria-label': 'Wydatki tygodniowe według kategorii',
	},
};

/** Each column fills the band up to 64px, so a few periods still read as columns. */
export const FewPeriods: Story = {
	args: { data: weeklyExpenses.slice(0, 3) },
};

/**
 * Keyboard and pointer behaviour. Tab moves focus to the first column, the
 * arrow keys move between the columns and wrap at the ends, and Escape closes
 * the tooltip. Hover shows the tooltip and dims the other columns.
 */
export const Interaction: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const columns = canvas.getAllByRole('graphics-symbol');

		await step('each column has a summary for screen readers', async () => {
			await expect(columns).toHaveLength(weeklyExpenses.length);
			await expect(columns[4]).toHaveAccessibleName(
				'29 Aug – 4 Sep, Total $6,220, Maintenance $3,560, Fuel $1,900, Tolls $760',
			);
		});

		await step('the Y axis uses nice steps', async () => {
			for (const tick of ['$0', '$2.5K', '$5K', '$7.5K']) {
				await expect(canvas.getAllByText(tick)[0]).toBeVisible();
			}
		});

		await step(
			'Tab focuses the first column and shows its tooltip',
			async () => {
				await userEvent.tab();
				await expect(columns[0]).toHaveFocus();
				await expect(tooltipIn(columns[0])).not.toBeNull();
			},
		);

		await step(
			'the arrow keys move between the columns and wrap',
			async () => {
				await userEvent.keyboard('{ArrowRight}');
				await expect(columns[1]).toHaveFocus();
				await expect(tooltipIn(columns[1])).not.toBeNull();
				await expect(tooltipIn(columns[0])).toBeNull();

				await userEvent.keyboard('{End}');
				await expect(columns.at(-1)).toHaveFocus();
				await userEvent.keyboard('{ArrowRight}');
				await expect(columns[0]).toHaveFocus();
				await userEvent.keyboard('{ArrowLeft}');
				await expect(columns.at(-1)).toHaveFocus();
				await userEvent.keyboard('{Home}');
				await expect(columns[0]).toHaveFocus();
			},
		);

		await step('Escape closes the tooltip and keeps focus', async () => {
			await userEvent.keyboard('{Escape}');
			await expect(tooltipIn(columns[0])).toBeNull();
			await expect(columns[0]).toHaveFocus();
		});

		await step(
			'hover shows the tooltip of the hovered column',
			async () => {
				await userEvent.hover(columns[4]);
				await expect(tooltipIn(columns[4])).not.toBeNull();
				await expect(columns[4]).toHaveAttribute('data-active');
				await expect(columns[3]).not.toHaveAttribute('data-active');
			},
		);

		await step('the chart returns to its default state', async () => {
			await userEvent.unhover(columns[4]);
			await userEvent.tab();
			await expect(tooltipIn(canvasElement)).toBeNull();
		});
	},
};
