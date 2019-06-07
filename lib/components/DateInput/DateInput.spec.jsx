import React from 'react';
import { DateInput } from './index';
import { mount, render } from 'enzyme';

const todayStr = new Date(2019, 0, 22).toISOString().split('T')[0];
const testLabel = 'Hello World!';

describe('<DateInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(
				<DateInput value={todayStr} placeholder={testLabel} id="id" />,
			),
		).toMatchSnapshot();
	});

	it('should throw when required props not provided', () => {
		expect(() => render(<DateInput value={todayStr} />).toThrow());
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const rendered = render(
			<DateInput
				value={todayStr}
				placeholder="placeholder"
				id="id"
				hintText={hintText()}
			/>,
		);

		expect(rendered).toMatchSnapshot();

		expect(rendered.find('.hintText').text()).toBe(hintText());
	});

	it('should have input type of date', () => {
		const dateInput = mount(
			<DateInput
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput.find('input').prop('type')).toEqual('date');
		dateInput.unmount();
	});

	it('should pass on className to dom element', () => {
		const dateInput = mount(
			<DateInput
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput.hasClass('date-input-class')).toBeTruthy();
		dateInput.unmount();
	});

	it('should match snapshot for default date input', () => {
		const dateInput = render(
			<DateInput
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput).toMatchSnapshot();
	});

	it('should match snapshot for active date input', () => {
		const dateInput = render(
			<DateInput
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput).toMatchSnapshot();
	});

	it('should match snapshot for touched date input', () => {
		const dateInput = render(
			<DateInput
				isTouched={true}
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput).toMatchSnapshot();
	});

	it('should match snapshot for touched valid date input', () => {
		const dateInput = render(
			<DateInput
				isTouched={true}
				isValid={true}
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput).toMatchSnapshot();
	});

	it('should match snapshot for touched invalid date input', () => {
		const dateInput = render(
			<DateInput
				isTouched={true}
				isValid={false}
				className="date-input-class"
				value={todayStr}
				placeholder={testLabel}
			/>,
		);
		expect(dateInput).toMatchSnapshot();
	});

	it('should display placeholder date', () => {
		const dateInput = render(
			<DateInput placeholder={testLabel} value={todayStr} />,
		);
		expect(dateInput.find('label').text()).toEqual(testLabel);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();
		const dateInput = mount(
			<DateInput
				onFocus={spyedCallback}
				placeholder={testLabel}
				value={todayStr}
			/>,
		);
		dateInput.find('input').simulate('focus');

		expect(spyedCallback).toHaveBeenCalled();
		dateInput.unmount();
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();
		const dateInput = mount(
			<DateInput
				onBlur={spyedCallback}
				placeholder={testLabel}
				value={todayStr}
			/>,
		);
		dateInput.find('input').simulate('blur');

		expect(spyedCallback).toHaveBeenCalled();
		dateInput.unmount();
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();
		const dateInput = mount(
			<DateInput
				onChange={spyedCallback}
				placeholder={testLabel}
				value={todayStr}
			/>,
		);
		dateInput.find('input').simulate('change');

		expect(spyedCallback).toHaveBeenCalled();
		dateInput.unmount();
	});
});
