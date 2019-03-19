import React from 'react';
import { mount, render } from 'enzyme';
import { SelectInput } from './SelectInput';

const testLabel = 'Hello World!';
describe('<SelectInput />', () => {
	it('should not throw', () => {
		expect(() =>
			mount(<SelectInput placeholder={testLabel} />).unmount()
		).not.toThrow();
	});

	it('should have a select input', () => {
		const selectInput = mount(<SelectInput placeholder={testLabel} />);
		expect(selectInput.find('select').exists()).toEqual(true);
		selectInput.unmount();
	});

	it('should render some options', () => {
		const selectInput = render(
			<SelectInput placeholder={testLabel}>
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>
		);

		expect(selectInput).toMatchSnapshot();

		expect(selectInput.find('option').length).toBe(3);
	});

	it('should pass on className to dom element', () => {
		const selectInput = mount(
			<SelectInput
				className="select-input-class"
				placeholder={testLabel}
			/>
		);
		expect(selectInput.hasClass('select-input-class')).toBeTruthy();
		selectInput.unmount();
	});

	it('should match snapshot for default select input', () => {
		const selectInput = render(
			<SelectInput
				className="select-input-class"
				placeholder={testLabel}
			/>
		);
		expect(selectInput).toMatchSnapshot();
	});

	it('should match snapshot for active select input', () => {
		const selectInput = mount(
			<SelectInput className="select-input-class" placeholder={testLabel}>
				<option value="value1">ValueA</option>
			</SelectInput>
		);

		selectInput.find('select').simulate('focus');

		selectInput
			.find('select')
			.simulate('change', { target: { value: 'value1' } });

		// Snapshot confirms this
		expect(selectInput).toMatchSnapshot();

		selectInput.unmount();
	});

	it('should match snapshot for touched select input', () => {
		const selectInput = render(
			<SelectInput
				isTouched={true}
				className="select-input-class"
				placeholder={testLabel}
			/>
		);
		expect(selectInput).toMatchSnapshot();
	});

	it('should match snapshot for touched valid select input', () => {
		const selectInput = render(
			<SelectInput
				isTouched={true}
				isValid={true}
				className="select-input-class"
				placeholder={testLabel}
			/>
		);
		expect(selectInput).toMatchSnapshot();
	});

	it('should match snapshot for touched invalid select input', () => {
		const selectInput = render(
			<SelectInput
				isTouched={true}
				isValid={false}
				className="select-input-class"
				placeholder={testLabel}
			/>
		);
		expect(selectInput).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const selectInput = render(<SelectInput placeholder={testLabel} />);
		expect(selectInput.find('label').text()).toEqual(testLabel);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();
		const selectInput = mount(
			<SelectInput onFocus={spyedCallback} placeholder={testLabel} />
		);
		selectInput.find('select').simulate('focus');

		expect(spyedCallback).toHaveBeenCalled();
		selectInput.unmount();
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();
		const selectInput = mount(
			<SelectInput onBlur={spyedCallback} placeholder={testLabel} />
		);
		selectInput.find('select').simulate('blur');

		expect(spyedCallback).toHaveBeenCalled();
		selectInput.unmount();
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();
		const selectInput = mount(
			<SelectInput onChange={spyedCallback} placeholder={testLabel} />
		);
		selectInput.find('select').simulate('change');

		expect(spyedCallback).toHaveBeenCalled();
		selectInput.unmount();
	});
});
