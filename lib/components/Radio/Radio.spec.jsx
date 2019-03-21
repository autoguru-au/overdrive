import React, { useState } from 'react';
import { Radio, RadioGroup } from './';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('<RadioButton />', () => {
	describe('when not nested in a RadioGroup', () => {
		it('should throw if a RadioButton element is not nested inside a RadioGroup', () =>
			expect(() => render(<Radio value="1" />)).toThrow());
	});

	describe('when nested in a RadioGroup', () => {
		it('should not throw', () =>
			expect(() =>
				render(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>
				)
			).not.toThrow());

		it('should match the snapshot for a single radio with no value or label', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a single radio', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<Radio value="1" label="radio label 1" />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a checked radio', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<Radio value="1" label="radio label 1" checked={true} />
						<Radio
							value="2"
							label="radio label 2"
							checked={false}
						/>
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a focused radio', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<Radio value="1" label="radio label 1" />
					</RadioGroup>
				)
					.find(Radio)
					.simulate('focus')
			).toMatchSnapshot());

		it('should match the snapshot for a group of radios', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<Radio value="1" label="radio label 1" />
						<Radio value="2" label="radio label 2" />
						<Radio value="3" label="radio label 3" />
						<Radio value="4" label="radio label 4" />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should automatically select the radio with value equal to the value of its radiogroup', () =>
			expect(
				render(
					<RadioGroup name="radio" value="2">
						<Radio value="1" label="radio label 1" />
						<Radio value="2" label="radio label 2" />
						<Radio value="3" label="radio label 3" />
						<Radio value="4" label="radio label 4" />
					</RadioGroup>
				)
					.find('>div:nth-of-type(2)')
					.hasClass('checked')
			).toBeTruthy());

		it('should select the radio after it has been clicked', () => {
			let group;
			act(() => {
				const TestComponent = () => {
					const [value, setValue] = useState();

					return (
						<RadioGroup
							name="radio"
							value={value}
							onChange={setValue}>
							<Radio value="1" label="radio label 1" />
							<Radio value="2" label="radio label 2" />
							<Radio value="3" label="radio label 3" />
							<Radio value="4" label="radio label 4" />
						</RadioGroup>
					);
				};

				group = mount(<TestComponent />);
			});

			expect(
				group
					.find('div.radio')
					.at(3)
					.hasClass('checked')
			).not.toBeTruthy();

			act(() => {
				group
					.find("div.radio>input[type='radio']")
					.at(3)
					.simulate('click');
			});

			group.update();

			expect(
				group
					.find('div.radio')
					.at(3)
					.hasClass('checked')
			).toBeTruthy();
		});

		it('should select the radio if the native radio element has been clicked', () => {
			let group;
			act(() => {
				const TestComponent = () => {
					const [value, setValue] = useState();

					return (
						<RadioGroup
							name="radio"
							value={value}
							onChange={setValue}>
							<Radio value="1" label="radio label 1" />
							<Radio value="2" label="radio label 2" />
							<Radio value="3" label="radio label 3" />
							<Radio value="4" label="radio label 4" />
						</RadioGroup>
					);
				};

				group = mount(<TestComponent />);
			});

			expect(
				group
					.find('div.radio')
					.at(2)
					.hasClass('checked')
			).not.toBeTruthy();

			act(() => {
				const radio = group.find("div.radio>input[type='radio']").at(2);

				radio.simulate('click');
			});

			group.update();
			expect(
				group
					.find('div.radio')
					.at(2)
					.hasClass('checked')
			).toBeTruthy();
		});

		it('should call the onClick function passed down to the radio button when it has been clicked', () => {
			let group;
			const spyedChangeCallback = jest.fn();
			act(() => {
				group = mount(
					<RadioGroup
						name="radio"
						value="2"
						onChange={spyedChangeCallback}>
						<Radio value="1" label="radio label 1" />
						<Radio value="2" label="radio label 2" />
						<Radio value="3" label="radio label 3" />
						<Radio value="4" label="radio label 4" />
					</RadioGroup>
				);
			});

			act(() => {
				group
					.find("div.radio>input[type='radio']")
					.at(1)
					.simulate('click');
			});

			group.update();

			expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
		});

		it('should disable the native radio element if disabled prop is set to true', () => {
			let group;
			act(() => {
				group = mount(
					<RadioGroup name="radio" value="2">
						<Radio value="1" label="radio label 1" />
						<Radio
							value="2"
							label="radio label 2"
							disabled={true}
						/>
						<Radio value="3" label="radio label 3" />
						<Radio value="4" label="radio label 4" />
					</RadioGroup>
				);
			});

			expect(
				group
					.find("div.radio>input[type='radio']")
					.at(1)
					.is('[disabled]')
			).toBeTruthy();
		});
	});
});
