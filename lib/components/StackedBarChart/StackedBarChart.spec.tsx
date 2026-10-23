import { act, fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';

import {
	expenseSeries,
	formatCompactCurrency,
	formatCurrency,
	weeklyExpenses,
} from '../../stories/shared/chartData';

import { StackedBarChart, type StackedBarChartProps } from '.';

const props: StackedBarChartProps = {
	data: weeklyExpenses,
	series: expenseSeries,
	'aria-label': 'Weekly expenses by category',
	formatValue: formatCurrency,
	formatTick: formatCompactCurrency,
	totalLabel: 'Total',
	categoryLabel: 'Week',
};

const tooltipIn = (element: HTMLElement) =>
	element.querySelector('[data-od-component="chart-tooltip"]');

describe('<StackedBarChart />', () => {
	it('renders one column for each datum, with a summary', () => {
		render(<StackedBarChart {...props} />);

		const columns = screen.getAllByRole('graphics-symbol');
		expect(columns).toHaveLength(8);
		expect(columns[0]).toHaveAccessibleName(
			'1–7 Aug, Total $2,440, Maintenance $1,170, Fuel $900, Tolls $370',
		);
	});

	it('names the chart and the hidden table with the aria-label', () => {
		render(<StackedBarChart {...props} />);

		expect(
			screen.getByRole('graphics-document', {
				name: 'Weekly expenses by category',
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole('table', { name: 'Weekly expenses by category' }),
		).toBeInTheDocument();
	});

	it('shows nice Y axis ticks with the tick formatter', () => {
		render(<StackedBarChart {...props} />);

		for (const tick of ['$0', '$2.5K', '$5K', '$7.5K']) {
			expect(screen.getByText(tick)).toBeInTheDocument();
		}
	});

	it('shows only the table in the table view', () => {
		render(<StackedBarChart {...props} view="table" />);

		expect(screen.queryByRole('graphics-document')).not.toBeInTheDocument();
		const table = screen.getByRole('table');
		const rows = within(table).getAllByRole('row');
		expect(rows).toHaveLength(9);
		expect(
			within(rows[0])
				.getAllByRole('columnheader')
				.map((cell) => cell.textContent),
		).toEqual(['Week', 'Maintenance', 'Fuel', 'Tolls', 'Total']);
		expect(
			within(rows[5])
				.getAllByRole('cell')
				.map((cell) => cell.textContent),
		).toEqual(['$3,560', '$1,900', '$760', '$6,220']);
	});

	it('counts missing and negative values as 0', () => {
		render(
			<StackedBarChart
				{...props}
				data={[
					{ id: 'a', label: 'A', values: { maintenance: 10 } },
					{ id: 'b', label: 'B', values: { fuel: -5, tolls: 4 } },
				]}
			/>,
		);

		const columns = screen.getAllByRole('graphics-symbol');
		expect(columns[0]).toHaveAccessibleName(
			'A, Total $10, Maintenance $10, Fuel $0, Tolls $0',
		);
		expect(columns[1]).toHaveAccessibleName(
			'B, Total $4, Maintenance $0, Fuel $0, Tolls $4',
		);
	});

	it('makes the chart one tab stop and moves focus with the arrow keys', () => {
		render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		expect(columns.map((column) => column.tabIndex)).toEqual([
			0, -1, -1, -1, -1, -1, -1, -1,
		]);

		act(() => columns[0].focus());
		expect(tooltipIn(columns[0])).not.toBeNull();

		fireEvent.keyDown(columns[0], { key: 'ArrowLeft' });
		expect(columns[7]).toHaveFocus();
		expect(columns[7].tabIndex).toBe(0);
		expect(tooltipIn(columns[7])).not.toBeNull();
		expect(tooltipIn(columns[0])).toBeNull();
	});

	it('closes the tooltip on Escape and does not pass the key on', () => {
		// A modal listens on the document, so the chart must stop the key there.
		const onKeyDown = vi.fn();
		document.addEventListener('keydown', onKeyDown);
		render(<StackedBarChart {...props} />);
		const [first] = screen.getAllByRole('graphics-symbol');

		act(() => first.focus());
		fireEvent.keyDown(first, { key: 'Escape' });
		expect(tooltipIn(first)).toBeNull();
		expect(onKeyDown).not.toHaveBeenCalled();

		// With no tooltip open, Escape goes on to the document.
		fireEvent.keyDown(first, { key: 'Escape' });
		expect(onKeyDown).toHaveBeenCalledTimes(1);
		document.removeEventListener('keydown', onKeyDown);
	});

	it('shows the tooltip of the hovered column, but not for a touch', () => {
		render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		fireEvent.pointerEnter(columns[2], { pointerType: 'touch' });
		expect(tooltipIn(columns[2])).toBeNull();

		fireEvent.pointerEnter(columns[2], { pointerType: 'mouse' });
		expect(tooltipIn(columns[2])).not.toBeNull();
		expect(columns[2]).toHaveAttribute('data-active');

		fireEvent.pointerLeave(columns[2]);
		expect(tooltipIn(columns[2])).toBeNull();
	});

	it('renders an empty chart without errors', () => {
		render(<StackedBarChart {...props} data={[]} />);

		expect(screen.queryAllByRole('graphics-symbol')).toHaveLength(0);
		expect(screen.getByText('$0')).toBeInTheDocument();
	});

	it('passes testId and className to the root', () => {
		const { container } = render(
			<StackedBarChart {...props} className="custom" testId="chart" />,
		);

		const root = container.querySelector(
			'[data-od-component="stacked-bar-chart"]',
		);
		expect(root).toHaveAttribute('data-testid', 'chart');
		expect(root).toHaveClass('custom');
	});
});
