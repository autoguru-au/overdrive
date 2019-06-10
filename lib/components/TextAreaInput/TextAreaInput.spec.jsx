import React from 'react';
import { mount, render } from 'enzyme';
import { TextAreaInput } from './TextAreaInput';

describe('<TextAreaInput />', () => {
	it('should not throw', () => {
		expect(() =>
			mount(
				<TextAreaInput placeholder="placeholder something" />,
			).unmount(),
		).not.toThrow();
	});

	it('should have a textarea tag', () => {
		const textAreaInput = mount(
			<TextAreaInput placeholder="placeholder something" />,
		);
		expect(textAreaInput.find('textarea').exists()).toEqual(true);
		textAreaInput.unmount();
	});

	it('should pass on className to dom element', () => {
		const textAreaInput = mount(
			<TextAreaInput
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textAreaInput.hasClass('textarea-input-class')).toBeTruthy();
		textAreaInput.unmount();
	});

	it('should match snapshot for default select input', () => {
		const textAreaInput = render(
			<TextAreaInput
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textAreaInput).toMatchSnapshot();
	});

	it('should match snapshot for active select input', () => {
		const textAreaInput = mount(
			<TextAreaInput
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);

		textAreaInput.find('textarea').simulate('focus');

		textAreaInput
			.find('textarea')
			.simulate('change', { target: { value: 'Test value' } });

		// Snapshot confirms this
		expect(textAreaInput).toMatchSnapshot();

		textAreaInput.unmount();
	});

	it('should match snapshot for touched select input', () => {
		const textAreaInput = render(
			<TextAreaInput
				isTouched
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textAreaInput).toMatchSnapshot();
	});

	it('should match snapshot for touched valid select input', () => {
		const textAreaInput = render(
			<TextAreaInput
				isTouched
				isValid
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textAreaInput).toMatchSnapshot();
	});

	it('should match snapshot for touched invalid select input', () => {
		const textAreaInput = render(
			<TextAreaInput
				isTouched
				isValid={false}
				className="textarea-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textAreaInput).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const textAreaInput = render(
			<TextAreaInput placeholder="placeholder something" />,
		);
		expect(textAreaInput.find('label').text()).toEqual(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();
		const textAreaInput = mount(
			<TextAreaInput
				placeholder="placeholder something"
				onFocus={spyedCallback}
			/>,
		);
		textAreaInput.find('textarea').simulate('focus');

		expect(spyedCallback).toHaveBeenCalled();
		textAreaInput.unmount();
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();
		const textAreaInput = mount(
			<TextAreaInput
				placeholder="placeholder something"
				onBlur={spyedCallback}
			/>,
		);
		textAreaInput.find('textarea').simulate('blur');

		expect(spyedCallback).toHaveBeenCalled();
		textAreaInput.unmount();
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();
		const textAreaInput = mount(
			<TextAreaInput
				placeholder="placeholder something"
				onChange={spyedCallback}
			/>,
		);
		textAreaInput.find('textarea').simulate('change');

		expect(spyedCallback).toHaveBeenCalled();
		textAreaInput.unmount();
	});
});
