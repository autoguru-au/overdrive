import React from 'react';
import { mount, render } from 'enzyme';
import { NumberInput } from './NumberInput';

const testLabel = 'Hello World!';
describe('<NumberInput />', () => {
	it('should not throw', () => {
		expect(() => mount(<NumberInput />).unmount()).not.toThrow();
	});

	it('should have input type of number', () => {
		const numberInput = mount(
			<NumberInput
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput.find('input').prop('type')).toEqual('number');
		numberInput.unmount();
	});

	it('should pass on className to dom element', () => {
		const numberInput = mount(
			<NumberInput
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput.hasClass('number-input-class')).toBeTruthy();
		numberInput.unmount();
	});

	it('should match snapshot for default number input', () => {
		const numberInput = render(
			<NumberInput
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput).toMatchSnapshot();
	});

	it('should match snapshot for active number input', () => {
		const numberInput = mount(
			<NumberInput
				className="number-input-class"
				placeholder={testLabel}
			/>
		);

		numberInput.find('input').simulate('focus');

		numberInput.find('input').simulate('change', { target: { value: 3 } });

		// Snapshot confirms this
		expect(numberInput).toMatchSnapshot();

		numberInput.unmount();
	});

	it('should match snapshot for touched number input', () => {
		const numberInput = render(
			<NumberInput
				isTouched={true}
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput).toMatchSnapshot();
	});

	it('should match snapshot for touched valid number input', () => {
		const numberInput = render(
			<NumberInput
				isTouched={true}
				isValid={true}
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput).toMatchSnapshot();
	});

	it('should match snapshot for touched invalid number input', () => {
		const numberInput = render(
			<NumberInput
				isTouched={true}
				isValid={false}
				className="number-input-class"
				placeholder={testLabel}
			/>
		);
		expect(numberInput).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const numberInput = render(<NumberInput placeholder={testLabel} />);
		expect(numberInput.find('label').text()).toEqual(testLabel);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();
		const numberInput = mount(
			<NumberInput onFocus={spyedCallback} placeholder={testLabel} />
		);
		numberInput.find('input').simulate('focus');

		expect(spyedCallback).toHaveBeenCalled();
		numberInput.unmount();
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();
		const numberInput = mount(
			<NumberInput onBlur={spyedCallback} placeholder={testLabel} />
		);
		numberInput.find('input').simulate('blur');

		expect(spyedCallback).toHaveBeenCalled();
		numberInput.unmount();
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();
		const numberInput = mount(
			<NumberInput onChange={spyedCallback} placeholder={testLabel} />
		);
		numberInput.find('input').simulate('change');

		expect(spyedCallback).toHaveBeenCalled();
		numberInput.unmount();
	});
});
