import React from 'react';
import { CheckBox } from '.';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('<CheckBox />', () => {
	it('should not throw', () =>
		expect(() => render(<CheckBox />)).not.toThrow());

	it('should match the snapshot for a single check with no value or label', () =>
		expect(render(<CheckBox />)).toMatchSnapshot());

	it('should match the snapshot for a single check', () =>
		expect(
			render(<CheckBox value="1" label="check label 1" />),
		).toMatchSnapshot());

	it('should match the snapshot for a checked check', () =>
		expect(
			render(<CheckBox checked value="1" label="check label 1" />),
		).toMatchSnapshot());

	it('should match the snapshot for a focused check', () =>
		expect(
			mount(<CheckBox value="1" label="check label 1" />)
				.find(CheckBox)
				.simulate('focus'),
		).toMatchSnapshot());

	it('should pass on className to dom element', () => {
		const check = mount(<CheckBox className="check-class" />);
		expect(check.hasClass('check-class')).toBeTruthy();
	});

	it('should call the onClick function passed down to it when clicked', () => {
		let checkBox;
		const spyedClickCallback = jest.fn();
		act(() => {
			checkBox = mount(
				<CheckBox
					value="1"
					label="check label 1"
					onClick={spyedClickCallback}
				/>,
			);
		});

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('click');
		});

		checkBox.update();
		expect(spyedClickCallback).toHaveBeenCalledTimes(1);
	});

	it('should pass the cheked value to the native element', () => {
		const checkBoxUnchecked = mount(
			<CheckBox value="1" label="check label 1" checked={false} />,
		);
		const checkBoxChecked = mount(
			<CheckBox checked value="1" label="check label 1" />,
		);
		expect(
			checkBoxUnchecked.find("input[type='checkbox']").getDOMNode()
				.checked,
		).toEqual(false);
		expect(
			checkBoxChecked.find("input[type='checkbox']").getDOMNode().checked,
		).toEqual(true);
	});

	it('should call the onChange function passed down to it when checked value has changes', () => {
		let checkBox;
		const spyedChangeCallback = jest.fn();
		act(() => {
			checkBox = mount(
				<CheckBox
					value="1"
					label="check label 1"
					onChange={spyedChangeCallback}
				/>,
			);
		});

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('change');
		});

		checkBox.update();
		expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
	});
});
