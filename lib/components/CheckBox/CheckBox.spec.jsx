import React from 'react';
import { CheckBox } from './';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Radio, RadioGroup } from '../Radio';

describe('<CheckBox />', () => {
	it('should not throw', () =>
		expect(() => render(<CheckBox />)).not.toThrow());

	it('should match the snapshot for a single check with no value or label', () =>
		expect(render(<CheckBox />)).toMatchSnapshot());

	it('should match the snapshot for a single check', () =>
		expect(
			render(<CheckBox value="1" label="check label 1" />)
		).toMatchSnapshot());

	it('should match the snapshot for a checked check', () =>
		expect(
			render(<CheckBox value="1" label="check label 1" checked={true} />)
		).toMatchSnapshot());

	it('should match the snapshot for a focused check', () =>
		expect(
			mount(<CheckBox value="1" label="check label 1" />)
				.find(CheckBox)
				.simulate('focus')
		).toMatchSnapshot());

	it('should call the onClick function passed down to it when clicked', () => {
		let checkBox;
		const spyedClickCallback = jest.fn();
		act(() => {
			checkBox = mount(
				<CheckBox
					value="1"
					label="check label 1"
					onClick={spyedClickCallback}
				/>
			);
		});

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('click');
		});

		checkBox.update();
		expect(spyedClickCallback).toHaveBeenCalledTimes(1);
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
				/>
			);
		});

		act(() => {
			checkBox.find("input[type='checkbox']").simulate('change');
		});

		checkBox.update();
		expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
	});
});
