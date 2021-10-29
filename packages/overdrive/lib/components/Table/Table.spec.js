import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { arrayRingLookup } from '../../utils';

import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { TableRowGroup } from './TableRowGroup';
import { useTableContext } from './context';

describe('<Table />', () => {
	describe('when pure table', () => {
		it('should render children', () => {
			const { getByTestId } = render(
				<Table columnTemplate=''>
					<div data-testid='child' />
				</Table>,
			);

			expect(getByTestId('child')).not.toBeNull();
		});

		it('should set a default padding', () => {
			const Child = ({ cb }) => {
				cb(useTableContext());
				return null;
			};

			let ctx;
			render(
				<Table columnTemplate=''>
					<Child
						cb={(c) => {
							ctx = c;
						}}
					/>
				</Table>,
			);

			expect(ctx).toHaveProperty('padding');
		});
	});

	describe('when <TableCell />', () => {
		it('should render a text node', () => {
			const { getByText } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableCell>test child</TableCell>
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			expect(getByText('test child').tagName).toEqual('SPAN');
		});

		it('should render a custom component', () => {
			const { getByTestId, container } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableCell>
								<div data-testid='custo-child' />
							</TableCell>
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			expect(container.querySelectorAll('span')).toHaveLength(0);
			expect(getByTestId('custo-child')).not.toBeNull();
		});
	});

	describe('when <TableHeadCell />', () => {
		it('should render a text node', () => {
			const { getByText } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableHeadCell>test child</TableHeadCell>
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			expect(getByText('test child').tagName).toEqual('SPAN');
		});

		it('should render an icon when sorted', () => {
			const { container } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableHeadCell sort='asc'>test child</TableHeadCell>
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			expect(container.querySelectorAll('svg')).toHaveLength(1);
		});

		it('should trigger a sort callback', () => {
			const spyedCallback = jest.fn();

			const { getByRole } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableHeadCell sort='asc' onSort={spyedCallback} />
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			const ariaSorter = getByRole('columnheader');

			fireEvent.click(ariaSorter);

			expect(spyedCallback).toHaveBeenCalledTimes(1);
		});
	});

	describe('when <TableRow />', () => {
		it('should allow row clicking', () => {
			const spyedCallback = jest.fn();

			const { getByRole } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow onClick={spyedCallback}>test</TableRow>
					</TableRowGroup>
				</Table>,
			);

			const row = getByRole('row');

			fireEvent.click(row);

			expect(spyedCallback).toHaveBeenCalledTimes(1);
		});
	});

	describe('when implemented', () => {
		it('should match snapshot', () => {
			const { container } = render(
				<Table columnTemplate=''>
					<TableRowGroup>
						<TableRow>
							<TableHeadCell>col 1</TableHeadCell>
							<TableHeadCell sort='asc'>col 2</TableHeadCell>
						</TableRow>
					</TableRowGroup>
					<TableRowGroup>
						<TableRow>
							<TableCell>row 1, col 1</TableCell>
							<TableCell>row 1, col 2</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>row 2, col 1</TableCell>
							<TableCell>row 2, col 2</TableCell>
						</TableRow>
					</TableRowGroup>
				</Table>,
			);

			expect(container.firstChild).toMatchSnapshot();
		});
	});

	describe('when sorting', () => {
		const sortFlow = ['asc', 'desc', 'none'];
		const sortFlowRingLookup = arrayRingLookup(sortFlow);

		const makeSortedCell = (defaultsort = 'none') => {
			const Impl = () => {
				const [sort, setsort] = useState(defaultsort);

				return (
					<Table columnTemplate=''>
						<TableHeadCell
							sort={sort}
							onSort={() =>
								setsort((prev) =>
									sortFlowRingLookup(
										sortFlow.lastIndexOf(prev) + 1,
									),
								)
							}>
							col 1
						</TableHeadCell>
					</Table>
				);
			};

			return Impl;
		};

		it('should sort default none->asc->desc->none', () => {
			const TestCmp = makeSortedCell('none');

			const { getAllByRole } = render(<TestCmp />);

			const sortItem = getAllByRole('columnheader').find((item) =>
				item.getAttribute('aria-sort'),
			);

			expect(sortItem).toHaveAttribute('aria-sort', 'none');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'ascending');
			expect(sortItem).toHaveTextContent('col 1 sorted ascending');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'descending');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'none');
		});
	});
});
