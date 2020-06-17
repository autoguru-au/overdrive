import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeadCell,
	TableRow,
} from '.';
import { useTableContext } from './TableContext';

describe('<Table />', () => {
	describe('when pure table', () => {
		it('should render children', () => {
			const { getByTestId } = render(
				<Table>
					<tbody data-testid="child" />
				</Table>,
			);

			expect(getByTestId('child')).not.toBeNull();
		});

		it('should set a default padding', () => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const Child = ({ cb }) => {
				cb(useTableContext());
				return null;
			};

			let ctx;
			render(
				<Table>
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
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>test child</TableCell>
						</TableRow>
					</TableBody>
				</Table>,
			);

			expect(getByText('test child').tagName).toEqual('SPAN');
		});

		it('should render a custom component', () => {
			const { getByTestId, container } = render(
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>
								<div data-testid="custo-child" />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>,
			);

			expect(container.querySelectorAll('span')).toHaveLength(0);
			expect(getByTestId('custo-child')).not.toBeNull();
		});
	});

	describe('when <TableHeadCell />', () => {
		it('should render a text node', () => {
			const { getByText } = render(
				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell>test child</TableHeadCell>
						</TableRow>
					</TableHead>
				</Table>,
			);

			expect(getByText('test child').tagName).toEqual('SPAN');
		});

		it('should render an icon when sorted', () => {
			const { container } = render(
				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell sortDirection="asc">
								test child
							</TableHeadCell>
						</TableRow>
					</TableHead>
				</Table>,
			);

			expect(container.querySelectorAll('svg')).toHaveLength(1);
		});

		it('should trigger a sort callback', () => {
			const spyedCallback = jest.fn();

			const { container } = render(
				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell
								sortDirection="asc"
								onChange={spyedCallback}
							/>
						</TableRow>
					</TableHead>
				</Table>,
			);

			const th = container.querySelector('th');

			fireEvent.click(th);

			expect(spyedCallback).toHaveBeenCalledTimes(1);
			expect(spyedCallback).toHaveBeenCalledWith('desc');
		});
	});

	describe('when <TableRow />', () => {
		it('should allow row clicking', () => {
			const spyedCallback = jest.fn();

			const { container } = render(
				<Table>
					<TableBody>
						<TableRow onClick={spyedCallback} />
					</TableBody>
				</Table>,
			);

			const row = container.querySelector('tr');

			fireEvent.click(row);

			expect(spyedCallback).toHaveBeenCalledTimes(1);
		});
	});

	describe('when implemented', () => {
		it('should match snapshot', () => {
			const { container } = render(
				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell>hello</TableHeadCell>
							<TableHeadCell sortDirection="asc">
								test
							</TableHeadCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>first</TableCell>
							<TableCell>test</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>second</TableCell>
							<TableCell>test</TableCell>
						</TableRow>
					</TableBody>
				</Table>,
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it('should shift sorters asc->desc->none->asc', () => {
			const Impl = () => {
				const [sort, setSort] = useState('none');

				return (
					<Table>
						<TableHead>
							<TableRow>
								<TableHeadCell>hello</TableHeadCell>
								<TableHeadCell
									sortDirection={sort}
									onChange={(sort) => setSort(sort)}>
									test
								</TableHeadCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>first</TableCell>
								<TableCell>test</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>second</TableCell>
								<TableCell>test</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				);
			};

			const { container } = render(<Impl />);

			const sortItem = container.querySelectorAll('th')[1];

			expect(sortItem).toHaveAttribute('aria-sort', 'none');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'ascending');
			expect(sortItem).toHaveTextContent('test sorted ascending');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'descending');

			fireEvent.click(sortItem);

			expect(sortItem).toHaveAttribute('aria-sort', 'none');
		});
	});
});
