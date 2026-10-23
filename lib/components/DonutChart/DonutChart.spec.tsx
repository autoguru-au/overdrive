import { act, fireEvent, render, screen } from '@testing-library/react';
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
	valueLabel: 'Spend',
	shareLabel: 'Share',
};

const tooltipIn = (element: HTMLElement) =>
	element.querySelector('[data-od-component="chart-tooltip"]');

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

		expect(screen.getByText('$26.4K')).toBeInTheDocument();
		expect(screen.queryByRole('table')).not.toBeInTheDocument();
		expect(
			screen.getAllByRole('listitem').map((item) => item.textContent),
		).toEqual([
			'Maintenance $12K (45%)',
			'Fuel $10.3K (39%)',
			'Tolls $4.2K (16%)',
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

	it('gives no mark and no tab stop to a slice of 0, NaN or less', () => {
		render(
			<DonutChart
				{...props}
				data={[
					{ ...expensesByCategory[0], value: 0 },
					{ ...expensesByCategory[1], value: Number.NaN },
					expensesByCategory[2],
				]}
			/>,
		);

		const slices = screen.getAllByRole('graphics-symbol');
		expect(slices).toHaveLength(1);
		expect(slices[0]).toHaveAccessibleName('Tolls, $4.2K, 100%');
		// The legend still shows all categories.
		expect(screen.getAllByRole('listitem')).toHaveLength(3);
	});

	it('does not fail when the data gets shorter while a slice is active', () => {
		const { rerender } = render(<DonutChart {...props} />);
		const slices = screen.getAllByRole('graphics-symbol');

		fireEvent.pointerEnter(slices[2], { pointerType: 'mouse' });
		act(() => slices[2].focus());
		rerender(
			<DonutChart {...props} data={expensesByCategory.slice(0, 2)} />,
		);

		expect(screen.getAllByRole('graphics-symbol')).toHaveLength(2);
		for (const item of screen.getAllByRole('listitem')) {
			expect(item).not.toHaveAttribute('data-dimmed');
		}
	});

	it('shows no tooltip while the legend shows', () => {
		const { container } = render(<DonutChart {...props} />);
		const [first] = screen.getAllByRole('graphics-symbol');

		act(() => first.focus());
		expect(tooltipIn(container)).toBeNull();
	});

	it('hides the legend and shows a tooltip for the active slice', () => {
		const { container } = render(<DonutChart {...props} hideLegend />);
		const slices = screen.getAllByRole('graphics-symbol');

		expect(screen.queryAllByRole('listitem')).toHaveLength(0);
		expect(tooltipIn(container)).toBeNull();

		fireEvent.pointerEnter(slices[1], { pointerType: 'mouse' });
		expect(tooltipIn(container)?.textContent).toBe(
			'FuelSpend$10.3KShare39%',
		);

		fireEvent.pointerLeave(slices[1]);
		act(() => slices[2].focus());
		expect(tooltipIn(container)).toHaveTextContent('Tolls');

		fireEvent.keyDown(slices[2], { key: 'Escape' });
		expect(tooltipIn(container)).toBeNull();
	});

	it('shows the header above the ring and the legend below it', () => {
		render(
			<DonutChart
				{...props}
				description="Monthly"
				title="Spend by category"
			/>,
		);

		const heading = screen.getByRole('heading', {
			level: 2,
			name: 'Spend by category',
		});
		const ring = screen.getByRole('graphics-document');
		const legend = screen.getByRole('list');
		expect(screen.getByText('Monthly')).toBeInTheDocument();
		expect(
			heading.compareDocumentPosition(ring) &
				Node.DOCUMENT_POSITION_FOLLOWING,
		).toBeTruthy();
		expect(
			ring.compareDocumentPosition(legend) &
				Node.DOCUMENT_POSITION_FOLLOWING,
		).toBeTruthy();
	});

	it('keeps the header in the empty state', () => {
		render(
			<DonutChart
				{...props}
				data={expensesByCategory.map((item) => ({ ...item, value: 0 }))}
				title="Spend by category"
				titleAs="h4"
			/>,
		);

		expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
			'Spend by category',
		);
		expect(screen.getByText('No spend data')).toBeInTheDocument();
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
