import { act, fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';

import {
	expensesByCategory,
	formatCompactCurrency,
	formatPercent,
} from '../../stories/shared/chartData';

import { DonutChart, type DonutChartProps } from '.';

const props: DonutChartProps = {
	data: expensesByCategory,
	'aria-label': 'Spend by category',
	formatValue: formatCompactCurrency,
	formatPercent,
	totalLabel: 'Total',
	emptyLabel: 'No spend data',
	categoryLabel: 'Category',
	valueLabel: 'Spend',
	shareLabel: 'Share',
};

describe('<DonutChart />', () => {
	it('renders one slice for each datum, with a summary', () => {
		render(<DonutChart {...props} />);

		const slices = screen.getAllByRole('graphics-symbol');
		expect(slices).toHaveLength(3);
		expect(slices.map((slice) => slice.getAttribute('aria-label'))).toEqual(
			[
				'Maintenance, $12K, 45%',
				'Fuel, $10.3K, 39%',
				'Tolls, $4.2K, 16%',
			],
		);
	});

	it('shows the total in the centre and the shares in the legend', () => {
		render(<DonutChart {...props} />);

		// The centre and the total row of the hidden table.
		expect(screen.getAllByText('$26.4K')).toHaveLength(2);
		expect(
			screen.getAllByRole('listitem').map((item) => item.textContent),
		).toEqual([
			'Maintenance $12K (45%)',
			'Fuel $10.3K (39%)',
			'Tolls $4.2K (16%)',
		]);
	});

	it('shows only the table, with a total row, in the table view', () => {
		render(<DonutChart {...props} view="table" />);

		expect(screen.queryByRole('graphics-document')).not.toBeInTheDocument();
		const rows = within(
			screen.getByRole('table', { name: 'Spend by category' }),
		).getAllByRole('row');
		expect(rows.map((row) => row.textContent)).toEqual([
			'CategorySpendShare',
			'Maintenance$12K45%',
			'Fuel$10.3K39%',
			'Tolls$4.2K16%',
			'Total$26.4K100%',
		]);
	});

	it('shows the empty label when all values are 0', () => {
		render(
			<DonutChart
				{...props}
				data={expensesByCategory.map((item) => ({ ...item, value: 0 }))}
			/>,
		);

		expect(screen.getByText('No spend data')).toBeInTheDocument();
		expect(screen.queryByRole('graphics-symbol')).not.toBeInTheDocument();
	});

	it('dims the other legend items for the active slice', () => {
		render(<DonutChart {...props} />);
		const slices = screen.getAllByRole('graphics-symbol');
		const items = screen.getAllByRole('listitem');

		act(() => slices[0].focus());
		expect(items[0]).not.toHaveAttribute('data-dimmed');
		expect(items[1]).toHaveAttribute('data-dimmed');

		fireEvent.keyDown(slices[0], { key: 'ArrowRight' });
		expect(slices[1]).toHaveFocus();
		expect(items[1]).not.toHaveAttribute('data-dimmed');
		expect(items[0]).toHaveAttribute('data-dimmed');

		fireEvent.keyDown(slices[1], { key: 'Escape' });
		expect(items[0]).not.toHaveAttribute('data-dimmed');
	});

	it('passes testId and className to the root', () => {
		const { container } = render(
			<DonutChart {...props} className="custom" testId="donut" />,
		);

		const root = container.querySelector(
			'[data-od-component="donut-chart"]',
		);
		expect(root).toHaveAttribute('data-testid', 'donut');
		expect(root).toHaveClass('custom');
	});
});
