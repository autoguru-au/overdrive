import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { TableCell } from '../Table/TableCell';
import { TableHeadCell } from '../Table/TableHeadCell';
import { TableRow } from '../Table/TableRow';
import { TableRowGroup } from '../Table/TableRowGroup';

import { DataTable } from './DataTable';
import * as stories from './DataTable.stories';

const {
	Standard,
	WithSorting,
	LargeDataset,
	SmallContainer,
	ComplexCells,
	Animated,
} = composeStories(stories);

const renderBasicTable = (
	props: Partial<React.ComponentProps<typeof DataTable>> = {},
) =>
	render(
		<DataTable columnTemplate="repeat(2, auto)" {...props}>
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>Col 1</TableHeadCell>
					<TableHeadCell>Col 2</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				<TableRow>
					<TableCell>A</TableCell>
					<TableCell>B</TableCell>
				</TableRow>
			</TableRowGroup>
		</DataTable>,
	);

describe('<DataTable />', () => {
	describe('rendering', () => {
		it('should render children inside a grid', () => {
			renderBasicTable();

			expect(screen.getByRole('grid')).toBeInTheDocument();
			expect(screen.getByText('Col 1')).toBeInTheDocument();
			expect(screen.getByText('A')).toBeInTheDocument();
		});

		it('should render role="region" on the scroll container', () => {
			renderBasicTable();

			const region = screen.getByRole('region');
			expect(region).toBeInTheDocument();
		});

		it('should set a default aria-label on the scroll container', () => {
			renderBasicTable();

			const region = screen.getByRole('region');
			expect(region).toHaveAttribute('aria-label', 'Data table');
		});

		it('should set a custom aria-label on the scroll container', () => {
			renderBasicTable({ 'aria-label': 'Fleet vehicles' });

			const region = screen.getByRole('region');
			expect(region).toHaveAttribute('aria-label', 'Fleet vehicles');
		});

		it('should set tabIndex={0} for keyboard scrolling', () => {
			renderBasicTable();

			const region = screen.getByRole('region');
			expect(region).toHaveAttribute('tabindex', '0');
		});

		it('should apply odComponent="data-table"', () => {
			renderBasicTable();

			const region = screen.getByRole('region');
			expect(region).toHaveAttribute('data-od-component', 'data-table');
		});
	});

	describe('prop passthrough', () => {
		it('should pass columnTemplate to inner Table', () => {
			renderBasicTable({ columnTemplate: '1fr 2fr' });

			const grid = screen.getByRole('grid');
			expect(grid).toHaveStyle({ gridTemplateColumns: '1fr 2fr' });
		});
	});

	describe('horizontal scroll', () => {
		it('should apply minWidth style to inner wrapper when provided', () => {
			renderBasicTable({ minWidth: '800px' });

			const region = screen.getByRole('region');
			const innerWrapper = region.firstElementChild as HTMLElement;
			expect(innerWrapper).toHaveStyle({ minWidth: '800px' });
		});

		it('should not apply minWidth when omitted', () => {
			renderBasicTable();

			const region = screen.getByRole('region');
			const innerWrapper = region.firstElementChild as HTMLElement;
			expect(innerWrapper).not.toHaveStyle({ minWidth: '800px' });
		});
	});

	describe('ref forwarding', () => {
		it('should forward ref to the scroll container', () => {
			const ref = createRef<HTMLDivElement>();

			render(
				<DataTable ref={ref} columnTemplate="repeat(2, auto)">
					<TableRowGroup>
						<TableRow>
							<TableHeadCell>Col 1</TableHeadCell>
						</TableRow>
					</TableRowGroup>
				</DataTable>,
			);

			expect(ref.current).toBeInstanceOf(HTMLDivElement);
			expect(ref.current).toHaveAttribute('role', 'region');
		});
	});

	describe('stories', () => {
		it('renders the Standard story', () => {
			render(<Standard />);

			expect(screen.getByRole('region')).toBeInTheDocument();
			expect(
				screen.getByText('My Auto Service & Repair'),
			).toBeInTheDocument();
		});

		it('renders the WithSorting story', () => {
			render(<WithSorting />);

			const region = screen.getByRole('region');
			expect(region).toBeInTheDocument();

			// Verify sortable columns have aria-sort
			const sortableHeaders = screen
				.getAllByRole('columnheader')
				.filter((h) => h.hasAttribute('aria-sort'));
			expect(sortableHeaders.length).toBeGreaterThanOrEqual(1);

			// Verify non-sortable columns do NOT have aria-sort
			const nonSortableHeaders = screen
				.getAllByRole('columnheader')
				.filter((h) => !h.hasAttribute('aria-sort'));
			expect(nonSortableHeaders.length).toBeGreaterThanOrEqual(1);
		});

		it('renders the LargeDataset story', () => {
			render(<LargeDataset />);

			expect(screen.getByRole('region')).toBeInTheDocument();
			// 25 rows of data
			expect(screen.getAllByRole('row').length).toBeGreaterThanOrEqual(
				25,
			);
		});

		it('renders the SmallContainer story', () => {
			render(<SmallContainer />);

			expect(screen.getByRole('region')).toBeInTheDocument();
		});

		it('renders the ComplexCells story', () => {
			render(<ComplexCells />);

			expect(screen.getByRole('region')).toBeInTheDocument();
			// Verify composition patterns render
			expect(screen.getByText('Audi S3')).toBeInTheDocument();
			expect(
				screen.getByText('Service due in 6 days'),
			).toBeInTheDocument();
			// Badge text appears in multiple rows, so use getAllByText
			expect(
				screen.getAllByText('Requested HA').length,
			).toBeGreaterThanOrEqual(1);
		});

		it('renders the Animated story with staggered rows', () => {
			render(<Animated />);

			expect(screen.getByRole('region')).toBeInTheDocument();
			// 10 data rows + 1 header row
			expect(screen.getAllByRole('row').length).toBe(11);
		});
	});
});
