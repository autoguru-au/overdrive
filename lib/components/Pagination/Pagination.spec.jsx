import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Pagination } from '.';

describe('<Pagination />', () => {
	it('should not throw', () =>
		expect(() => render(<Pagination />)).not.toThrow());

	it('should match snapshot for loading phase', () => {
		expect(render(<Pagination />).container.firstChild).toMatchSnapshot();
	});

	it('should return 10 pages for 100 items and page size of 10', () => {
		expect(
			render(
				<Pagination total={100} activePage={1} pageSize={10} />,
			).container.querySelector('button:nth-last-child(2)'),
		).toHaveTextContent('10');
	});

	it('should return 11 pages for 101 items and page size of 10', () => {
		expect(
			render(
				<Pagination total={101} activePage={1} pageSize={10} />,
			).container.querySelector('button:nth-last-child(2)'),
		).toHaveTextContent('11');
	});

	it('should show ... in 4th bubble for 101 items and page size of 10', () => {
		expect(
			render(
				<Pagination total={101} activePage={1} pageSize={10} />,
			).container.querySelector('button:nth-of-type(5)'),
		).toHaveTextContent('...');
	});

	it('should show ... in 2nd bubble for 101 items and page size of 10', () => {
		expect(
			render(
				<Pagination total={101} activePage={9} pageSize={10} />,
			).container.querySelector('button:nth-of-type(3)'),
		).toHaveTextContent('...');
	});

	it('should show all pages if number of pages equals number of displayed pages', () => {
		const { container } = render(
			<Pagination total={50} activePage={1} pageSize={10} />,
		);

		expect(
			container.querySelector('button:nth-of-type(2)'),
		).toHaveTextContent('1');

		expect(
			container.querySelector('button:nth-of-type(3)'),
		).toHaveTextContent('2');

		expect(
			container.querySelector('button:nth-of-type(4)'),
		).toHaveTextContent('3');

		expect(
			container.querySelector('button:nth-of-type(5)'),
		).toHaveTextContent('4');

		expect(
			container.querySelector('button:nth-of-type(6)'),
		).toHaveTextContent('5');
	});

	it('should show all pages if active page falls within pages num minus displayed pages num/+1', () => {
		expect(
			render(
				<Pagination total={95} activePage={6} pageSize={10} />,
			).container.querySelector('button:nth-of-type(2)'),
		).toHaveTextContent('6');

		expect(
			render(
				<Pagination total={95} activePage={7} pageSize={10} />,
			).container.querySelector('button:nth-of-type(2)'),
		).toHaveTextContent('6');
	});

	describe('with an onChange handler', () => {
		it('should have a default onChange handler', () => {
			const { getByText } = render(
				<Pagination total={95} activePage={7} pageSize={10} />,
			);

			// This test works, and is validated with code coverage.
			expect(() => {
				fireEvent.click(getByText('6'));
			}).not.toThrow();
		});

		it('should fire with the correct pageNumber', () => {
			const spyedCallback = jest.fn();

			const { getByText } = render(
				<Pagination
					total={95}
					activePage={7}
					pageSize={10}
					onChange={spyedCallback}
				/>,
			);

			fireEvent.click(getByText('6'));

			expect(spyedCallback).toHaveBeenCalledWith({ pageNumber: 6 });
		});
	});
});
