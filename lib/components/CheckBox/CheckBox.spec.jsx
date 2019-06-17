import React from 'react';
import { CheckBox } from '.';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Heading } from '../Typography/Heading';

describe('<CheckBox />', () => {
	it('should not throw', () =>
		expect(() => render(<CheckBox />)).not.toThrow());

	it('should match the snapshot for a single check with no value or label', () =>
		expect(render(<CheckBox />)).toMatchSnapshot());

	it('should match the snapshot for a single check', () =>
		expect(
			render(<CheckBox children="check label 1" value="1" />),
		).toMatchSnapshot());

	it('should match the snapshot for a checked check', () =>
		expect(
			render(<CheckBox children="check label 1" checked value="1" />),
		).toMatchSnapshot());

	it('should match the snapshot for a focused check', () =>
		expect(
			mount(<CheckBox children="check label 1" value="1" />)
				.find(CheckBox)
				.simulate('focus'),
		).toMatchSnapshot());

	it('should pass on className to dom element', () => {
		const check = mount(<CheckBox className="check-class" />);
		expect(check.hasClass('check-class')).toBeTruthy();
	});

	it('should call the onClick function passed down to it when clicked', () => {
		const spyedClickCallback = jest.fn();
		const checkBox = mount(
			<CheckBox
				children="check label 1"
				value="1"
				onClick={spyedClickCallback}
			/>,
		);

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('click');
		});

		checkBox.update();
		expect(spyedClickCallback).toHaveBeenCalledTimes(1);
	});

	it('should pass the cheked value to the native element', () => {
		const checkBoxUnchecked = mount(
			<CheckBox children="check label 1" value="1" checked={false} />,
		);
		const checkBoxChecked = mount(
			<CheckBox children="check label 1" checked value="1" />,
		);

		expect(
			checkBoxUnchecked.find("input[type='checkbox']").getDOMNode()
				.checked,
		).toEqual(false);

		expect(
			checkBoxChecked.find("input[type='checkbox']").getDOMNode().checked,
		).toEqual(true);
	});

	it('should not throw is onChange callback is not attached', () => {
		const checkBox = mount(<CheckBox children="check label 1" value="1" />);

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('change');
		});

		checkBox.update();
	});

	it('should call the onChange function passed down to it when checked value has changes', () => {
		const spyedChangeCallback = jest.fn();
		const checkBox = mount(
			<CheckBox
				children="check label 1"
				value="1"
				onChange={spyedChangeCallback}
			/>,
		);

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('change');
		});

		act(() => {
			expect(() =>
				checkBox.find("input[type='checkbox']").simulate('click'),
			).not.toThrow();
		});

		checkBox.update();
		expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
	});

	describe('when with component child', () => {
		it('should match the snapshot', () => {
			const checkbox = render(
				<CheckBox children="check label 1" value="1">
					<Heading>Hello checkbox</Heading>
				</CheckBox>,
			);

			expect(checkbox.html()).toMatchSnapshot();
		});
		it('Should render the component child', () => {
			const checkbox = mount(
				<CheckBox children="check label 1" value="1">
					<Heading>Hello checkbox</Heading>
				</CheckBox>,
			);

			expect(checkbox.find(Heading)).toBeTruthy();
		});
	});
});
