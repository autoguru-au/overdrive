import React, { useState } from 'react';
import { mount, render, shallow } from 'enzyme';
import { Stepper } from './Stepper';
import { act } from 'react-dom/test-utils';

describe('<Stepper />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Stepper />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<Stepper />)).toMatchSnapshot();
	});

	it('should match snapshot with props', () => {
		expect(
			render(<Stepper min={-20} max={20} value={19} step={1.5} />),
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
					format={value => `${value}%`}
				/>,
			),
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const stepper = mount(<Stepper className="stepper-class" value={10} />);
		expect(stepper.find('div.stepper-class').length === 1).toBeTruthy();
	});

	it('should add a span element with the formatted value in it', () => {
		const stepper = mount(
			<Stepper
				min={0}
				max={100}
				value={99}
				step={0.5}
				format={value => `$${value}`}
			/>,
		);
		expect(
			stepper
				.find('span')
				.first()
				.text(),
		).toEqual('$99');
	});

	it('should display passed down value even when outside acceptable boundaries', () => {
		const stepper = mount(
			<Stepper
				min={-100}
				max={40}
				value={45}
				step={1}
				format={value => `${value}%`}
			/>,
		);
		expect(
			stepper
				.find('span')
				.first()
				.text(),
		).toEqual('45%');
	});

	it('should fire change with the correct changed value after next and previous button click', () => {
		const spyedCallback = jest.fn(value => `${value}%`);

		const wrapper = mount(
			<Stepper
				min={-100}
				max={100}
				value={45}
				step={5}
				format={spyedCallback}
			/>,
		);

		expect(
			wrapper
				.find('span')
				.first()
				.text(),
		).toEqual('45%');

		wrapper
			.find('button')
			.at(1)
			.simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(50);

		wrapper
			.find('button')
			.at(1)
			.simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(55);

		wrapper
			.find('button')
			.at(0)
			.simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(50);

		wrapper.unmount();
	});

	it('should update its value when and a value prop comes in', done => {
		const spyedCallback = jest.fn(value => `$${value}`);
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

		const wrapper = mount(<StepperWrapper getValueSetter={onSetValue} />);

		function onSetValue(setValue) {
			setTimeout(() => {
				expect(
					wrapper
						.find('span')
						.first()
						.text(),
				).toEqual('$16');

				act(() => {
					setValue(199);
				});

				expect(
					wrapper
						.find('span')
						.first()
						.text(),
				).toEqual('$199');

				wrapper
					.find('button')
					.at(1)
					.simulate('click');

				expect(
					wrapper
						.find('span')
						.first()
						.text(),
				).toEqual('$100');

				act(() => {
					setValue(250);
				});

				wrapper
					.find('button')
					.at(1)
					.simulate('click');

				expect(
					wrapper
						.find('span')
						.first()
						.text(),
				).toEqual('$100');

				expect(spyedCallback).toHaveBeenCalledTimes(7);

				wrapper.unmount();
				done();
			}, 100);
		}
	});

	it('should onChange when the value changes', () => {
		const onChangeHandler = jest.fn();

		const stepper = mount(
			<Stepper
				min={-100}
				max={100}
				step={0.5}
				value={1}
				onChange={onChangeHandler}
			/>,
		);

		expect(
			stepper
				.find('span')
				.first()
				.text(),
		).toEqual('1');

		stepper
			.find('button')
			.at(1)
			.simulate('click');

		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(1.5);

		stepper
			.find('button')
			.at(1)
			.simulate('click');

		expect(onChangeHandler).toHaveBeenCalledTimes(2);
		expect(onChangeHandler).toHaveBeenCalledWith(2);
	});
});
