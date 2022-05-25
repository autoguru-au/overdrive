import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { Stepper } from './Stepper';

describe('<Stepper />', () => {
	it('should not throw', () =>
		expect(() => render(<Stepper />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<Stepper />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot with props', () => {
		expect(
			render(<Stepper min={-20} max={20} value={19} step={1.5} />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with label formatter', () => {
		expect(
			render(
				<Stepper
					min={0}
					max={100}
					value={25}
					step={5}
					format={(value) => `${value}%`}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<Stepper className="stepper-class" value={10} />).container
				.firstChild,
		).toHaveClass('stepper-class');
	});

	it('should add a span element with the formatted value in it', () => {
		const { container } = render(
			<Stepper
				min={0}
				max={100}
				value={99}
				step={0.5}
				format={(value) => `$${value}`}
			/>,
		);

		expect(container).toHaveTextContent('$99');
	});

	it('should display passed down value even when outside acceptable boundaries', () => {
		const { container } = render(
			<Stepper
				min={-100}
				max={40}
				value={45}
				step={1}
				format={(value) => `${value}%`}
			/>,
		);
		expect(container).toHaveTextContent('45%');
	});

	it('should fire change with the correct changed value after next and previous button click', () => {
		const spyedCallback = jest.fn((value) => `${value}%`);

		const { container, getByLabelText } = render(
			<Stepper
				min={-100}
				max={100}
				value={45}
				step={5}
				format={spyedCallback}
			/>,
		);

		expect(container).toHaveTextContent('45%');

		fireEvent.click(getByLabelText('step up'));

		expect(spyedCallback).toHaveBeenCalledWith(50);

		fireEvent.click(getByLabelText('step up'));

		expect(spyedCallback).toHaveBeenCalledWith(55);

		fireEvent.click(getByLabelText('step down'));

		expect(spyedCallback).toHaveBeenCalledWith(50);
	});

	it('should update its value when and a value prop comes in', () => {
		const spyedCallback = jest.fn((value) => `$${value}`);

		const StepperWrapper = ({ getValueSetter }) => {
			const [value, setValue] = useState(16);

			getValueSetter(setValue);

			return (
				<Stepper
					min={-100}
					max={100}
					value={value}
					step={0.5}
					format={spyedCallback}
				/>
			);
		};

		let valueSetter;
		const { container, getByLabelText } = render(
			<StepperWrapper
				getValueSetter={(setter) => {
					valueSetter = setter;
				}}
			/>,
		);

		expect(container).toHaveTextContent('$16');

		act(() => valueSetter(199));

		expect(container).toHaveTextContent('$199');

		fireEvent.click(getByLabelText('step up'));

		// This is true, because the ceiling is 100, so a plus on $199, is $100.
		expect(container).toHaveTextContent('$100');

		act(() => valueSetter(250));

		fireEvent.click(getByLabelText('step up'));

		expect(container).toHaveTextContent('$100');

		expect(spyedCallback).toHaveBeenCalledTimes(7);
	});

	it('should onChange when the value changes', () => {
		const onChangeHandler = jest.fn();

		const { container, getByLabelText } = render(
			<Stepper
				min={-100}
				max={100}
				step={0.5}
				value={1}
				onChange={onChangeHandler}
			/>,
		);

		expect(container).toHaveTextContent('1');

		fireEvent.click(getByLabelText('step up'));

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(1.5);

		fireEvent.click(getByLabelText('step up'));

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith(2);
	});

	describe('when keyboard enabled', () => {
		it('should increment when ArrowRight is activated', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					min={0}
					max={100}
					step={1}
					value={1}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'ArrowRight',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(2);
		});

		it('should decrement when ArrowLeft is activated', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					min={0}
					max={100}
					step={1}
					value={1}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'ArrowLeft',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(0);
		});

		it('should have max value when End is activated', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					min={0}
					max={100}
					step={1}
					value={50}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'End',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(100);
		});

		it('should have min value when Home is activated', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					min={0}
					max={100}
					step={1}
					value={50}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'Home',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(0);
		});
	});

	describe('when setting a value', () => {
		it('should clamp min to a finite negative number', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					max={100}
					step={0.5}
					value={1}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'Home',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(
				Number.MIN_SAFE_INTEGER,
			);
		});

		it('should clamp max to a finite positive number', () => {
			const onChangeHandler = jest.fn();

			const { container } = render(
				<Stepper
					min={0}
					step={0.5}
					value={1}
					onChange={onChangeHandler}
				/>,
			);

			fireEvent.keyDown(container.firstChild, {
				key: 'End',
			});

			expect(onChangeHandler).toHaveBeenCalledWith(
				Number.MAX_SAFE_INTEGER,
			);
		});
	});
});
