import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { ColourInput } from './ColourInput';

const defaultColour = '#6c1111';
const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<ColourInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(
				<ColourInput
					value={defaultColour}
					placeholder="placeholder something"
					id="id"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const { container } = render(
			<ColourInput
				value={defaultColour}
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
			<ColourInput
				value={defaultColour}
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(
			container.querySelector('input[type="color"]'),
		).toBeInTheDocument();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(
			<ColourInput
				value={defaultColour}
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(container.firstChild).toHaveClass('input-class');
	});

	it('should match snapshot when active', () => {
		const { container } = render(
			<ColourInput
				value={defaultColour}
				className="input-class"
				placeholder="placeholder something"
			/>,
		);

		fireEvent.focus(container.querySelector('input'));

		fireEvent.change(container.querySelector('input'), {
			target: { value: '#ec4040' },
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when touched', () => {
		expect(
			render(
				<ColourInput
					isTouched
					value={defaultColour}
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and valid', () => {
		expect(
			render(
				<ColourInput
					isTouched
					isValid
					value={defaultColour}
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and invalid', () => {
		expect(
			render(
				<ColourInput
					isTouched
					value={defaultColour}
					isValid={false}
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with suffix icon', () => {
		expect(
			render(
				<ColourInput
					className="input-class"
					placeholder="placeholder something"
					value={defaultColour}
					suffixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with both icons', () => {
		expect(
			render(
				<ColourInput
					className="input-class"
					placeholder="placeholder something"
					value={defaultColour}
					suffixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when loading', () => {
		expect(
			render(
				<ColourInput
					isLoading
					className="input-class"
					placeholder="placeholder something"
					value={defaultColour}
					suffixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const { container } = render(
			<ColourInput
				value={defaultColour}
				placeholder="placeholder something"
			/>,
		);

		expect(container.querySelector('label')).toHaveTextContent(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = vi.fn();

		const { container } = render(
			<ColourInput
				value={defaultColour}
				placeholder="placeholder something"
				onFocus={spyedCallback}
			/>,
		);

		fireEvent.focus(container.querySelector('input'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onBlur event', () => {
		const spyedCallback = vi.fn();

		const { container } = render(
			<ColourInput
				value={defaultColour}
				placeholder="placeholder something"
				onBlur={spyedCallback}
			/>,
		);

		fireEvent.blur(container.querySelector('input'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange event', () => {
		const spyedCallback = vi.fn();

		const { container } = render(
			<ColourInput
				value={defaultColour}
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
