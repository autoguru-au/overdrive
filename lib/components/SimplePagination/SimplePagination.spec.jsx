import React from 'react';
import { EPageChangeDirection, SimplePagination } from '.';
import { mount, render, shallow } from 'enzyme';

describe('<SimplePagination />', () => {
	it('should not throw', () =>
		expect(() => shallow(<SimplePagination />)).not.toThrow());
	it('should not throw when onChange callback is undefined', () => {
		const wrapper = mount(<SimplePagination hasPrevious hasNext />);
		expect(() => {
			wrapper
				.find('button')
				.at(0)
				.simulate('click');
		}).not.toThrow();
		wrapper.unmount();
	});

	it('should match snapshot for hasNext', () => {
		expect(render(<SimplePagination hasNext />)).toMatchSnapshot();
	});

	it('should match snapshot for hasPrevious', () => {
		expect(render(<SimplePagination hasPrevious />)).toMatchSnapshot();
	});

	it('should match snapshot for hasNext and hasPrevious', () => {
		expect(
			render(<SimplePagination hasPrevious hasNext />),
		).toMatchSnapshot();
	});

	it('should fire change with the correct change direction for next button click', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<SimplePagination hasPrevious hasNext onChange={spyedCallback} />,
		);

		wrapper
			.find('button')
			.at(1)
			.simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(EPageChangeDirection.Next);
		wrapper.unmount();
	});

	it('should not fire change for next direction if hasNext is disabled but clicked', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<SimplePagination
				hasPrevious
				hasNext={false}
				onChange={spyedCallback}
			/>,
		);

		wrapper
			.find('button')
			.at(1)
			.simulate('click');

		expect(spyedCallback).not.toHaveBeenCalledWith(
			EPageChangeDirection.Next,
		);
		wrapper.unmount();
	});

	it('should fire change with the correct change direction for previous button click', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<SimplePagination hasPrevious hasNext onChange={spyedCallback} />,
		);

		wrapper
			.find('button')
			.at(0)
			.simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(
			EPageChangeDirection.Previous,
		);
		wrapper.unmount();
	});

	it('should not fire change for previous direction if hasPrevious is disabled but clicked', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<SimplePagination
				hasNext
				hasPrevious={false}
				onChange={spyedCallback}
			/>,
		);

		wrapper
			.find('button')
			.at(0)
			.simulate('click');

		expect(spyedCallback).not.toHaveBeenCalledWith(
			EPageChangeDirection.Previous,
		);
		wrapper.unmount();
	});
});
