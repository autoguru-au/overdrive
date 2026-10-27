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
the centre and a legend with the value and the share of each slice. Reach for
it when the parts of a whole matter more than the trend over time — if the
question is "how did this change?", use \`StackedBarChart\` instead.

### Usage

\`\`\`tsx
const currency = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUD',
	notation: 'compact',
	maximumFractionDigits: 1,
});
const percent = new Intl.NumberFormat('en-AU', { style: 'percent' });

<DonutChart
	title="Spend by category"
	description="Monthly"
	aria-label="Spend by category"
	data={[
		{ key: 'maintenance', label: 'Maintenance', value: 11970, color: tokens.color.gamut.green['900'] },
		{ key: 'fuel', label: 'Fuel', value: 10250, color: tokens.color.gamut.red['700'] },
		{ key: 'tolls', label: 'Tolls', value: 4180, color: tokens.color.gamut.yellow['500'] },
	]}
	formatValue={(value) => currency.format(value)}
	formatPercent={(value) => percent.format(value)}
	totalLabel="Total"
	emptyLabel="No spend data"
/>
\`\`\`

### You supply every string and every number format

> ⚠️ The component has **no fixed text, locale or currency**, and it never
> calls \`Intl\` for you. Every label is a prop, and \`formatValue\` and
> \`formatPercent\` do all the formatting.

The centre has room for a short value only, so give \`formatValue\` a compact
format (\`notation: 'compact'\`). The same formatter runs in the centre, the
legend, the tooltip and the screen reader text, so a long format breaks the
layout of the centre.

Give \`color\` as a token, for example \`tokens.color.gamut.green['900']\`, so
the slices follow the theme. Hard-coded hex values will not.

### Anatomy

\`\`\`
┌──────────────────────────────────┐
│ title / description              │  header — omitted without \`title\`
├──────────────────────────────────┤
│            ╭─────╮               │
│           │ $26.4K │             │  body — ring + total in the centre
│            ╰─────╯               │
├──────────────────────────────────┤
│ ● Maintenance   $12.0K (45%)     │  footer — legend, or \`emptyLabel\`
│ ● Fuel          $10.3K (39%)     │
└──────────────────────────────────┘
\`\`\`

The ring is a fixed 160px and the chart has **no border or card**. To put it
in a card, wrap it in a bordered container, for example a \`Box\`.

### Legend and tooltip

Hovering or focusing a slice dims the others and shows a tooltip with the
name, the value and the share. Two props turn the two readouts off.

| | Shows | Use when |
| --- | --- | --- |
| Default | Legend in the footer, tooltip on the active slice | The values matter and there is room |
| \`hideLegend\` | The ring and the tooltip alone | Space is tight, or the ring sits beside its own key |
| \`hideTooltip\` | The legend alone | The legend already answers it and the tooltip is noise |

\`hideTooltip\` is ignored under \`hideLegend\`: with neither, the slices
would have no text at all, so the tooltip always wins.

The tooltip labels its two rows with \`valueLabel\` and \`shareLabel\` (for
example "Spend" and "Share"). Leave them out and the rows show the numbers
alone.

### Keyboard and screen readers

The whole chart is **one tab stop**.

| Key | Does |
| --- | --- |
| <kbd>Tab</kbd> | Enters the chart at the last-used slice |
| <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> | Moves between slices, wrapping at the ends |
| <kbd>Home</kbd> / <kbd>End</kbd> | First / last slice |
| <kbd>Esc</kbd> | Dismisses the tooltip, until the next hover or focus |

Screen readers hear the chart name followed by the total (\`aria-label\` +
\`totalLabel\` + the formatted total), then each slice as "name, value, share".
The centre is hidden from them, so it is not read twice.

### Edge cases

- **Every value 0** — \`emptyLabel\` replaces the ring and the legend. The
  chart keeps its accessible name, so two empty charts are still tellable apart.
- **Negative, \`NaN\` or \`Infinity\`** — counts as 0. The slice is not drawn
  and takes no tab stop, but it stays in the legend. One bad number costs you
  one slice, not the chart.
- **One slice** — draws a complete ring at 100%.
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
