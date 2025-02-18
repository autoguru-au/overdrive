import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { NumberInput } from './NumberInput';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<NumberInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(<NumberInput placeholder="placeholder something" id="id" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when loading', () => {
		expect(
			render(<NumberInput placeholder="placeholder something" id="id" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const { container } = render(
			<NumberInput
				placeholder="placeholder"
				id="id"
				hintText={hintText()}
			/>,
		);

		expect(container.firstChild).toMatchSnapshot();

		expect(container).toHaveTextContent(hintText());
	});

	it('should have input type of number', () => {
		const { container } = render(
			<NumberInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(
			container.querySelector('input[type="number"]'),
		).toBeInTheDocument();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(
			<NumberInput
				className="input-class"
				placeholder="placeholder something"
			/>,
		);
		expect(container.firstChild).toHaveClass('input-class');
	});

	it('should match snapshot when active', () => {
		const { container } = render(
			<NumberInput
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
				<NumberInput
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
				<NumberInput
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
				<NumberInput
					isTouched
					isValid={false}
					className="input-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with prefix icon', () => {
		expect(
			render(
				<NumberInput
					className="input-class"
					placeholder="placeholder something"
					prefixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with suffix icon', () => {
		expect(
			render(
				<NumberInput
					className="input-class"
					placeholder="placeholder something"
					suffixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with both icons', () => {
		expect(
			render(
				<NumberInput
					className="input-class"
					placeholder="placeholder something"
					prefixIcon={TestIcon}
					suffixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const { container } = render(
			<NumberInput placeholder="placeholder something" />,
		);

		expect(container.querySelector('label')).toHaveTextContent(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = vi.fn();

		const { container } = render(
			<NumberInput
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
			<NumberInput
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
			<NumberInput
				placeholder="placeholder something"
				onChange={spyedCallback}
			/>,
		);

		fireEvent.change(container.querySelector('input'), {
			target: { value: 2 },
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});
});
