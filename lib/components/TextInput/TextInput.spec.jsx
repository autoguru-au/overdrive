import React from 'react';
import { TextInput } from '.';
import { fireEvent, render } from '@testing-library/react';

describe('<TextInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(<TextInput placeholder="placeholder something" id="id" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const { container } = render(
			<TextInput
				placeholder="placeholder"
				id="id"
				hintText={hintText()}
			/>,
		);

		expect(container.firstChild).toMatchSnapshot();

		expect(container).toHaveTextContent(hintText());
	});

	it('should have input type of text', () => {
		const { container } = render(
			<TextInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(
			container.querySelector('input[type="text"]'),
		).toBeInTheDocument();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(
			<TextInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(container.firstChild).toHaveClass('input-class');
	});

	it('should match snapshot when active', () => {
		const { container } = render(
			<TextInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);

		fireEvent.focus(container.querySelector('input'));

		fireEvent.change(container.querySelector('input'), {
			target: { value: 'value from the tests' },
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when touched', () => {
		expect(
			render(
				<TextInput
					isTouched
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and valid', () => {
		expect(
			render(
				<TextInput
					isTouched
					isValid
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and invalid', () => {
		expect(
			render(
				<TextInput
					isTouched
					isValid={false}
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const { container } = render(
			<TextInput placeholder="placeholder something" />,
		);

		expect(container.querySelector('label')).toHaveTextContent(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextInput
				placeholder="placeholder something"
				onFocus={spyedCallback}
			/>,
		);

		fireEvent.focus(container.querySelector('input'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextInput
				placeholder="placeholder something"
				onBlur={spyedCallback}
			/>,
		);

		fireEvent.blur(container.querySelector('input'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextInput
				placeholder="placeholder something"
				onChange={spyedCallback}
			/>,
		);

		fireEvent.change(container.querySelector('input'), {
			target: { value: 'test' },
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});
});
