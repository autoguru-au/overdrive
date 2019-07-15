import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SelectInput } from './SelectInput';

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

	it('should pass on className to dom element', () => {
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
			target: { value: 'value from the tests' },
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
