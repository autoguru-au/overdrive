import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { TextAreaInput } from './TextAreaInput';

describe('<TextAreaInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(
				<TextAreaInput placeholder="placeholder something" id="id" />,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const { container } = render(
			<TextAreaInput
				placeholder="placeholder"
				id="id"
				hintText={hintText()}
			/>,
		);

		expect(container.firstChild).toMatchSnapshot();

		expect(container).toHaveTextContent(hintText());
	});

	it('should have input type of textarea', () => {
		const { container } = render(
			<TextAreaInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(container.querySelector('textarea')).toBeInTheDocument();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(
			<TextAreaInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(container.firstChild).toHaveClass('input-class');
	});

	it('should match snapshot when active', () => {
		const { container } = render(
			<TextAreaInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);

		fireEvent.focus(container.querySelector('textarea'));

		fireEvent.change(container.querySelector('textarea'), {
			target: { value: 'value from the tests' },
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when touched', () => {
		expect(
			render(
				<TextAreaInput
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
				<TextAreaInput
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
				<TextAreaInput
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
			<TextAreaInput placeholder="placeholder something" />,
		);

		expect(container.querySelector('label')).toHaveTextContent(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextAreaInput
				placeholder="placeholder something"
				onFocus={spyedCallback}
			/>,
		);

		fireEvent.focus(container.querySelector('textarea'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextAreaInput
				placeholder="placeholder something"
				onBlur={spyedCallback}
			/>,
		);

		fireEvent.blur(container.querySelector('textarea'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<TextAreaInput
				placeholder="placeholder something"
				onChange={spyedCallback}
			/>,
		);

		fireEvent.change(container.querySelector('textarea'), {
			target: { value: 'test' },
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});
});
