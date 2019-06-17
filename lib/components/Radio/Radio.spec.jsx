import React, { useState } from 'react';
import { Radio, RadioGroup } from '.';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Heading } from '../Typography/Heading';

describe('<RadioButton />', () => {
	describe('when not nested in a RadioGroup', () => {
		it('should throw if a RadioButton element is not nested inside a RadioGroup', () =>
			expect(() => render(<Radio value="1" />)).toThrow());
	});

	describe('when nested in a RadioGroup', () => {
		it('should not throw', () =>
			expect(() =>
				mount(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>,
				),
			).not.toThrow());

		it('should match the snapshot for a single radio with no value or label', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>,
				),
			).toMatchSnapshot());

		it('should match the snapshot for a single radio', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<Radio children="radio label 1" value="1" />
					</RadioGroup>,
				),
			).toMatchSnapshot());

		it('should match the snapshot for a checked radio', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<Radio children="radio label 1" checked value="1" />
						<Radio
							children="radio label 2"
							value="2"
							checked={false}
						/>
					</RadioGroup>,
				),
			).toMatchSnapshot());

		it('should match the snapshot for a focused radio', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<Radio children="radio label 1" value="1" />
					</RadioGroup>,
				)
					.find(Radio)
					.simulate('focus'),
			).toMatchSnapshot());

		it('should match the snapshot for a group of radios', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>,
				),
			).toMatchSnapshot());

		it('should automatically select the radio with value equal to the value of its radiogroup', () =>
			expect(
				render(
					<RadioGroup name="radio" value="2">
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>,
				)
					.find('>div:nth-of-type(2)')
					.hasClass('checked'),
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
							<Radio children="radio label 1" value="1" />
							<Radio children="radio label 2" value="2" />
							<Radio children="radio label 3" value="3" />
							<Radio children="radio label 4" value="4" />
						</RadioGroup>
					);
				};

				group = mount(<TestComponent />);
			});

			expect(
				group
					.find('div.radio')
					.at(3)
					.hasClass('checked'),
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
					.hasClass('checked'),
			).toBeTruthy();
		});

		it('should not throw is onChange callback is not attached', () => {
			let group;
			act(() => {
				const TestComponent = () => {
					return (
						<RadioGroup name="radio" value="2">
							<Radio children="radio label 1" value="1" />
							<Radio children="radio label 2" value="2" />
							<Radio children="radio label 3" value="3" />
							<Radio children="radio label 4" value="4" />
						</RadioGroup>
					);
				};

				group = mount(<TestComponent />);
			});

			expect(
				group
					.find('div.radio')
					.at(2)
					.hasClass('checked'),
			).not.toBeTruthy();

			act(() => {
				expect(() =>
					group
						.find("div.radio>input[type='radio']")
						.at(3)
						.simulate('click'),
				).not.toThrow();
			});
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
							<Radio children="radio label 1" value="1" />
							<Radio children="radio label 2" value="2" />
							<Radio children="radio label 3" value="3" />
							<Radio children="radio label 4" value="4" />
						</RadioGroup>
					);
				};

				group = mount(<TestComponent />);
			});

			expect(
				group
					.find('div.radio')
					.at(2)
					.hasClass('checked'),
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
					.hasClass('checked'),
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
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>,
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
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" disabled value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>,
				);
			});

			expect(
				group
					.find("div.radio>input[type='radio']")
					.at(1)
					.is('[disabled]'),
			).toBeTruthy();
		});
	});

	describe('when with component child', () => {
		it('should match the snapshot', () => {
			const radio = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1">
						<Heading>Hello checkbox</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(radio.html()).toMatchSnapshot();
		});

		it('Should render the component child', () => {
			const radio = mount(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1">
						<Heading>Hello checkbox</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(radio.find(Heading)).toBeTruthy();
		});
	});
});
