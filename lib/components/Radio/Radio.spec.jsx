import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { Heading } from '../Heading/Heading';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('<RadioButton />', () => {
	describe('when not nested in a RadioGroup', () => {
		it.skip('should throw if a RadioButton element is not nested inside a RadioGroup', () => {
			expect(() => render(<Radio value="1" />)).toThrow();
		});
	});

	describe('when nested in a RadioGroup', () => {
		it('should not throw', () =>
			expect(() => {
				render(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>,
				);
			}).not.toThrow());

		it('should match the snapshot for a single radio with no value or label', () => {
			expect(
				render(
					<RadioGroup name="radio">
						<Radio />
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match the snapshot for a single radio', () => {
			expect(
				render(
					<RadioGroup name="radio">
						<Radio children="radio label 1" value="1" />
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match the snapshot for a checked radio', () => {
			expect(
				render(
					<RadioGroup name="radio">
						<Radio children="radio label 1" checked value="1" />
						<Radio
							children="radio label 2"
							value="2"
							checked={false}
						/>
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match the snapshot for a group of radios', () => {
			expect(
				render(
					<RadioGroup name="radio">
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should automatically select the radio with value equal to the value of its radiogroup', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1" />
					<Radio children="radio label 2" value="2" />
					<Radio children="radio label 3" value="3" />
					<Radio children="radio label 4" value="4" />
				</RadioGroup>,
			);

			expect(
				container.querySelector('input[type="radio"][checked]'),
			).toHaveAttribute('value', '2');
		});

		it.skip('should select the radio after it has been clicked', () => {
			const TestComponent = () => {
				const [value, setValue] = useState('2');

				return (
					<RadioGroup name="radio" value={value} onChange={setValue}>
						<Radio children="radio label 1" value="1" />
						<Radio children="radio label 2" value="2" />
						<Radio children="radio label 3" value="3" />
						<Radio children="radio label 4" value="4" />
					</RadioGroup>
				);
			};

			const { container } = render(<TestComponent />);

			fireEvent.click(container.querySelector('input:not([checked])'));

			expect(container.querySelector('input[checked]')).toHaveAttribute(
				'value',
				'1',
			);
		});

		it('should not throw is onChange callback is not attached', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1" />
					<Radio children="radio label 2" value="2" />
					<Radio children="radio label 3" value="3" />
					<Radio children="radio label 4" value="4" />
				</RadioGroup>,
			);

			expect(() => {
				fireEvent.click(
					container.querySelector(
						'input[type="radio"]:not([checked])',
					),
				);
			}).not.toThrow();
		});

		it('should call the onClick function passed down to the radio button when it has been clicked', () => {
			const spyedChangeCallback = jest.fn();

			const { container } = render(
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

			fireEvent.click(container.querySelector('input:not([checked])'));

			expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
		});

		it('should disable the native radio element if disabled prop is set to true', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1" />
					<Radio children="radio label 2" disabled value="2" />
					<Radio children="radio label 3" value="3" />
					<Radio children="radio label 4" value="4" />
				</RadioGroup>,
			);

			expect(container.querySelector("input[value='2']")).toHaveAttribute(
				'disabled',
			);
		});
	});

	describe('when with component child', () => {
		it('should match the snapshot', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1">
						<Heading>Hello checkbox</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it('should render the component child', () => {
			const { getByText } = render(
				<RadioGroup name="radio" value="2">
					<Radio children="radio label 1" value="1">
						<Heading>Hello checkbox</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(getByText('Hello checkbox')).toMatchSnapshot();
		});
	});
});
