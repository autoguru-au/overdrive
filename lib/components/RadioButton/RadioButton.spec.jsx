import React from 'react';
import { RadioButton, RadioGroup } from './';
import { mount, render } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('<RadioButton />', () => {
	describe('When not nested in a RadioGroup', () => {
		it('should throw if a RadioButton element is not nested inside a RadioGroup', () =>
			expect(() => render(<RadioButton value="1" />)).toThrow());
	});
	describe('When nested in a RadioGroup', () => {
		it('should throw if a RadioGroup does not get a name prop', () =>
			expect(() =>
				render(
					<RadioGroup>
						<RadioButton />
					</RadioGroup>
				)
			).toThrow());

		it('should not throw', () =>
			expect(() =>
				render(
					<RadioGroup name="radio">
						<RadioButton />
					</RadioGroup>
				)
			).not.toThrow());

		it('should match the snapshot for a single radio with no value or label', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<RadioButton />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a single radio', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<RadioButton value="1" label="radio label 1" />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a checked radio', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<RadioButton
							value="1"
							label="radio label 1"
							checked={true}
						/>
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should match the snapshot for a focused radio', () =>
			expect(
				mount(
					<RadioGroup name="radio">
						<RadioButton value="1" label="radio label 1" />
					</RadioGroup>
				)
					.find(RadioButton)
					.simulate('focus')
			).toMatchSnapshot());

		it('should match the snapshot for a group of radios', () =>
			expect(
				render(
					<RadioGroup name="radio">
						<RadioButton value="1" label="radio label 1" />
						<RadioButton value="2" label="radio label 2" />
						<RadioButton value="3" label="radio label 3" />
						<RadioButton value="4" label="radio label 4" />
					</RadioGroup>
				)
			).toMatchSnapshot());

		it('should automatically select the radio with value equal to the value of its radiogroup', () =>
			expect(
				render(
					<RadioGroup name="radio" value="2">
						<RadioButton value="1" label="radio label 1" />
						<RadioButton value="2" label="radio label 2" />
						<RadioButton value="3" label="radio label 3" />
						<RadioButton value="4" label="radio label 4" />
					</RadioGroup>
				)
					.find('>div:nth-of-type(2)')
					.hasClass('checked')
			).toBeTruthy());

		it('should select the radio after it has been clicked', () => {
			let group;
			act(() => {
				group = mount(
					<RadioGroup name="radio" value="2">
						<RadioButton value="1" label="radio label 1" />
						<RadioButton value="2" label="radio label 2" />
						<RadioButton value="3" label="radio label 3" />
						<RadioButton value="4" label="radio label 4" />
					</RadioGroup>
				);
			});

			expect(
				group
					.find('div.radio')
					.at(3)
					.hasClass('checked')
			).not.toBeTruthy();

			act(() => {
				group
					.find('div.radio')
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
	});
});
