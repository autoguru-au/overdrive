import React from 'react';
import { Pagination } from '.';
import { mount, render, shallow } from 'enzyme';

describe('<Pagination />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Pagination />)).not.toThrow());

	it('should match snapshot for loading phase', () => {
		expect(render(<Pagination />)).toMatchSnapshot();
	});

	it('should return 10 pages for 100 items and page size of 10', () => {
		expect(
			render(<Pagination total={100} activePage={1} pageSize={10} />)
				.find('button')
				.slice(-2)
				.text(),
		).toEqual('10');
	});

	it('should return 11 pages for 101 items and page size of 10', () => {
		expect(
			render(<Pagination total={101} activePage={1} pageSize={10} />)
				.find('button')
				.slice(-2)
				.text(),
		).toEqual('11');
	});

	it('should show ... in 4th bubble for 101 items and page size of 10', () => {
		expect(
			render(<Pagination total={101} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(5)')
				.text(),
		).toEqual('...');
	});

	it('should show ... in 2nd bubble for 101 items and page size of 10', () => {
		expect(
			render(<Pagination total={101} activePage={9} pageSize={10} />)
				.find('button:nth-of-type(3)')
				.text(),
		).toEqual('...');
	});

	it('should show all pages if number of pages equals number of displayed pages', () => {
		expect(
			render(<Pagination total={50} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(2)')
				.text(),
		).toEqual('1');
		expect(
			render(<Pagination total={50} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(3)')
				.text(),
		).toEqual('2');
		expect(
			render(<Pagination total={50} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(4)')
				.text(),
		).toEqual('3');
		expect(
			render(<Pagination total={50} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(5)')
				.text(),
		).toEqual('4');
		expect(
			render(<Pagination total={50} activePage={1} pageSize={10} />)
				.find('button:nth-of-type(6)')
				.text(),
		).toEqual('5');
	});

	it('should show all pages if active page falls within pages num minus displayed pages num/+1', () => {
		expect(
			render(<Pagination total={95} activePage={6} pageSize={10} />)
				.find('button:nth-of-type(2)')
				.text(),
		).toEqual('6');
		expect(
			render(<Pagination total={95} activePage={7} pageSize={10} />)
				.find('button:nth-of-type(2)')
				.text(),
		).toEqual('6');
	});

	describe('with an onChange handler', () => {
		it('should have a default onChange handler', () => {
			const wrapper = mount(
				<Pagination total={95} activePage={7} pageSize={10} />,
			);

			// This test works, and is validated with code coverage.
			expect(() => {
				wrapper
					.find('button')
					.at(3)
					.simulate('click');
			}).not.toThrow();
		});

		it('should fire when a bubble is clicked', () => {
			const spyedCallback = jest.fn();

			const wrapper = mount(
				<Pagination
					total={95}
					activePage={7}
					pageSize={10}
					onChange={spyedCallback}
				/>,
			);

			wrapper
				.find('button')
				.at(3)
				.simulate('click');

			expect(spyedCallback).toHaveBeenCalled();
		});

		it('should fire with the correct pageNumber', () => {
			const spyedCallback = jest.fn();

			const wrapper = mount(
				<Pagination
					total={95}
					activePage={1}
					pageSize={10}
					onChange={spyedCallback}
				/>,
			);

			wrapper
				.find('button')
				.at(3)
				.simulate('click');

			expect(spyedCallback).toHaveBeenCalledWith({ pageNumber: 3 });
		});
	});
});
