import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { SelectInput } from './SelectInput';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

// TODO: Confirm these tests are actually valid and working? ️¯\_(ツ)_/¯
describe('<SelectInput />', () => {
	it('should match snapshot', () => {
		expect(
			render(
				<SelectInput placeholder="Hello World!">
					<option value="a">Value 1</option>
					<option value="b">Value 2</option>
					<option value="c">Value 3</option>
				</SelectInput>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should have some hintText', () => {
		const hintText = () => 'hint text';

		const { container } = render(
			<SelectInput placeholder="Hello World!" hintText={hintText()}>
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		expect(container.firstChild).toMatchSnapshot();

		expect(container).toHaveTextContent(hintText());
	});

	it('should have an select element', () => {
		const { container } = render(
			<SelectInput placeholder="Hello World!">
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);
		expect(container.querySelector('select')).toBeInTheDocument();
	});

	it.skip('should pass on className to dom element', () => {
		const { container } = render(
			<SelectInput placeholder="Hello World!" className="input-class">
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);
		expect(container.firstChild).toHaveClass('input-class');
	});

	it('should match snapshot when active', () => {
		const { container } = render(
			<SelectInput placeholder="Hello World!">
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		fireEvent.focus(container.querySelector('select'));

		fireEvent.change(container.querySelector('select'), {
			target: { value: 'a' },
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when touched', () => {
		expect(
			render(
				<SelectInput isTouched placeholder="Hello World!">
					<option value="a">Value 1</option>
					<option value="b">Value 2</option>
					<option value="c">Value 3</option>
				</SelectInput>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and valid', () => {
		expect(
			render(
				<SelectInput isTouched isValid placeholder="Hello World!">
					<option value="a">Value 1</option>
					<option value="b">Value 2</option>
					<option value="c">Value 3</option>
				</SelectInput>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when touched and invalid', () => {
		expect(
			render(
				<SelectInput
					isTouched
					placeholder="Hello World!"
					isValid={false}>
					<option value="a">Value 1</option>
					<option value="b">Value 2</option>
					<option value="c">Value 3</option>
				</SelectInput>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with prefix icon', () => {
		expect(
			render(
				<SelectInput
					className="input-class"
					placeholder="placeholder something"
					prefixIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with custom icon', () => {
		expect(
			render(
				<SelectInput
					className="input-class"
					placeholder="placeholder something"
					fieldIcon={TestIcon}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should display placeholder text', () => {
		const { container } = render(
			<SelectInput placeholder="placeholder something">
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		expect(container.querySelector('label')).toHaveTextContent(
			'placeholder something',
		);
	});

	it('should fire onFocus event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<SelectInput placeholder="Hello World!" onFocus={spyedCallback}>
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		fireEvent.focus(container.querySelector('select'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onBlur event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<SelectInput placeholder="Hello World!" onBlur={spyedCallback}>
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		fireEvent.blur(container.querySelector('select'));

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange event', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<SelectInput placeholder="Hello World!" onChange={spyedCallback}>
				<option value="a">Value 1</option>
				<option value="b">Value 2</option>
				<option value="c">Value 3</option>
			</SelectInput>,
		);

		fireEvent.change(container.querySelector('select'), {
			target: { value: 'test' },
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});
});
