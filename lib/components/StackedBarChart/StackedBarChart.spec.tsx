import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import type { Mock } from 'vitest';

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
};

const tooltipIn = (element: HTMLElement) =>
	element.querySelector('[data-chart-tooltip]');

describe('<StackedBarChart />', () => {
	it('renders one column for each datum, with a summary', () => {
		render(<StackedBarChart {...props} />);

		const columns = screen.getAllByRole('graphics-symbol');
		expect(columns).toHaveLength(8);
		expect(columns[0]).toHaveAccessibleName(
			'1–7 Aug, Total $2,440, Maintenance $1,170, Fuel $900, Tolls $370',
		);
	});

	it('names the chart with the aria-label, and has no table', () => {
		render(<StackedBarChart {...props} />);

		expect(
			screen.getByRole('graphics-document', {
				name: 'Weekly expenses by category',
			}),
		).toBeInTheDocument();
		expect(screen.queryByRole('table')).not.toBeInTheDocument();
	});

	it('shows nice Y axis ticks with the tick formatter', () => {
		render(<StackedBarChart {...props} />);

		for (const tick of ['$0', '$2.5K', '$5K', '$7.5K']) {
			expect(screen.getByText(tick)).toBeInTheDocument();
		}
	});

	it('counts missing, negative and NaN values as 0', () => {
		render(
			<StackedBarChart
				{...props}
				data={[
					{
						id: 'a',
						label: 'A',
						values: { maintenance: 10, fuel: Number.NaN },
					},
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
		try {
			render(<StackedBarChart {...props} />);
			const [first] = screen.getAllByRole('graphics-symbol');

			act(() => first.focus());
			fireEvent.keyDown(first, { key: 'Escape' });
			expect(tooltipIn(first)).toBeNull();
			expect(onKeyDown).not.toHaveBeenCalled();

			// With no tooltip open, Escape goes on to the document.
			fireEvent.keyDown(first, { key: 'Escape' });
			expect(onKeyDown).toHaveBeenCalledTimes(1);
		} finally {
			document.removeEventListener('keydown', onKeyDown);
		}
	});

	it('places the tooltip again when the chart body changes size', () => {
		// jsdom has no layout and no `ResizeObserver`, so both are stubs.
		let width = 300;
		const observers: {
			resize: () => void;
			observe: Mock;
			disconnect: Mock;
		}[] = [];
		vi.stubGlobal(
			'ResizeObserver',
			class {
				observe = vi.fn();
				disconnect = vi.fn();
				constructor(resize: () => void) {
					observers.push({ resize, ...this });
				}
			},
		);
		vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
			() => ({ left: 0, right: width, top: 0, bottom: 200 }) as DOMRect,
		);
		try {
			render(<StackedBarChart {...props} />);
			const [first] = screen.getAllByRole('graphics-symbol');

			act(() => first.focus());
			const tooltip = tooltipIn(first) as HTMLElement;
			const observer = observers.at(-1)!;
			expect(tooltip.style.maxWidth).toBe('300px');
			expect(observer.observe).toHaveBeenCalledWith(
				screen.getByRole('graphics-document').parentElement,
			);

			width = 200;
			act(() => observer.resize());
			expect(tooltip.style.maxWidth).toBe('200px');

			fireEvent.keyDown(first, { key: 'Escape' });
			expect(observer.disconnect).toHaveBeenCalled();
		} finally {
			vi.unstubAllGlobals();
			vi.restoreAllMocks();
		}
	});

	it('shows the focused column after a key, also with the pointer on another column', () => {
		render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		fireEvent.pointerEnter(columns[2], { pointerType: 'mouse' });
		act(() => columns[2].focus());
		fireEvent.keyDown(columns[2], { key: 'ArrowRight' });

		expect(columns[3]).toHaveFocus();
		expect(tooltipIn(columns[3])).not.toBeNull();
		expect(tooltipIn(columns[2])).toBeNull();
	});

	it('shows the focused column after Tab, also with the pointer on another column', () => {
		render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		fireEvent.pointerEnter(columns[2], { pointerType: 'mouse' });
		act(() => columns[5].focus());

		expect(tooltipIn(columns[5])).not.toBeNull();
		expect(tooltipIn(columns[2])).toBeNull();
	});

	it('keeps the focused column active when the data removes a column before it', () => {
		const { rerender } = render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		act(() => columns[1].focus());
		rerender(<StackedBarChart {...props} data={weeklyExpenses.slice(1)} />);

		const after = screen.getAllByRole('graphics-symbol');
		expect(after[0]).toBe(columns[1]);
		expect(after[0]).toHaveFocus();
		expect(after[0].tabIndex).toBe(0);
		expect(tooltipIn(after[0])).not.toBeNull();
		expect(tooltipIn(after[1])).toBeNull();

		fireEvent.keyDown(after[0], { key: 'ArrowRight' });
		expect(after[1]).toHaveFocus();
	});

	it('keeps the browser shortcuts for arrow keys with a modifier key', () => {
		render(<StackedBarChart {...props} />);
		const [first] = screen.getAllByRole('graphics-symbol');

		act(() => first.focus());
		const notPrevented = fireEvent.keyDown(first, {
			key: 'ArrowLeft',
			altKey: true,
		});

		expect(notPrevented).toBe(true);
		expect(first).toHaveFocus();
	});

	it('does not fail when the data gets shorter while a column is active', () => {
		const { rerender } = render(<StackedBarChart {...props} />);
		const columns = screen.getAllByRole('graphics-symbol');

		fireEvent.pointerEnter(columns[7], { pointerType: 'mouse' });
		rerender(
			<StackedBarChart {...props} data={weeklyExpenses.slice(0, 3)} />,
		);

		expect(screen.getAllByRole('graphics-symbol')).toHaveLength(3);
		expect(screen.getByRole('graphics-document')).not.toHaveAttribute(
			'data-has-active',
		);
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

	it('has no header without a title, and the legend in the footer', () => {
		render(<StackedBarChart {...props} />);

		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
		const plot = screen.getByRole('graphics-document');
		const legend = screen.getByRole('list');
		// The legend comes after the plot: it is the footer.
		expect(
			plot.compareDocumentPosition(legend) &
				Node.DOCUMENT_POSITION_FOLLOWING,
		).toBeTruthy();
	});

	it('shows the title and the description in the header', () => {
		render(
			<StackedBarChart
				{...props}
				description="Weekly"
				title="Expenses"
				titleAs="h3"
			/>,
		);

		const heading = screen.getByRole('heading', { level: 3 });
		expect(heading).toHaveTextContent('Expenses');
		expect(screen.getByText('Weekly')).toBeInTheDocument();
		expect(
			heading.compareDocumentPosition(
				screen.getByRole('graphics-document'),
			) & Node.DOCUMENT_POSITION_FOLLOWING,
		).toBeTruthy();
	});

	it('hides the legend in the footer, and keeps the header', () => {
		render(<StackedBarChart {...props} hideLegend title="Expenses" />);

		expect(screen.queryByRole('list')).not.toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 2, name: 'Expenses' }),
		).toBeInTheDocument();
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
