import React from 'react';
import { TextInput } from './index';
import { mount, render } from 'enzyme';

describe('<TextInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(<TextInput placeholder="placeholder something" id="id" />),
		).toMatchSnapshot();
	});

	it('should throw when required props not provided', () => {
		expect(() => render(<TextInput />).toThrow());
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const rendered = render(
			<TextInput
				placeholder="placeholder"
				id="id"
				hintText={hintText()}
			/>,
		);

		expect(rendered).toMatchSnapshot();

		expect(rendered.find('.hintText').text()).toBe(hintText());
	});

	it('should have input type of text', () => {
		const textInput = mount(
			<TextInput
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput.find('input').prop('type')).toEqual('text');
		textInput.unmount();
	});

	it('should pass on className to dom element', () => {
		const textInput = mount(
			<TextInput
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput.hasClass('text-input-class')).toBeTruthy();
		textInput.unmount();
	});

	it('should match snapshot for default text input', () => {
		const textInput = render(
			<TextInput
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput).toMatchSnapshot();
	});

	it('should match snapshot for active text input', () => {
		const textInput = mount(
			<TextInput
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);

		textInput.find('input').simulate('focus');

		textInput
			.find('input')
			.simulate('change', { target: { value: 'Test value' } });

		// Snapshot confirms this
		expect(textInput).toMatchSnapshot();

		textInput.unmount();
	});

	it('should match snapshot for touched text input', () => {
		const textInput = render(
			<TextInput
				isTouched={true}
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput).toMatchSnapshot();
	});

	it('should match snapshot for touched valid text input', () => {
		const textInput = render(
			<TextInput
				isTouched={true}
				isValid={true}
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput).toMatchSnapshot();
	});

	it('should match snapshot for touched invalid text input', () => {
		const textInput = render(
			<TextInput
				isTouched={true}
				isValid={false}
				className="text-input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(textInput).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const textInput = render(
			<TextInput placeholder="placeholder something" />,
		);
		expect(textInput.find('label').text()).toEqual('placeholder something');
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();
		const textInput = mount(
			<TextInput
				onFocus={spyedCallback}
				placeholder="placeholder something"
			/>,
		);
		textInput.find('input').simulate('focus');

		expect(spyedCallback).toHaveBeenCalled();
		textInput.unmount();
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();
		const textInput = mount(
			<TextInput
				onBlur={spyedCallback}
				placeholder="placeholder something"
			/>,
		);
		textInput.find('input').simulate('blur');

		expect(spyedCallback).toHaveBeenCalled();
		textInput.unmount();
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();
		const textInput = mount(
			<TextInput
				onChange={spyedCallback}
				placeholder="placeholder something"
			/>,
		);
		textInput.find('input').simulate('change');

		expect(spyedCallback).toHaveBeenCalled();
		textInput.unmount();
	});
});
