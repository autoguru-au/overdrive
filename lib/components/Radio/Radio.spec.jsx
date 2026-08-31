import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { Heading } from '../Heading';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import * as styles from './Radio.css.ts';

const renderRadioGroup = (value = null, onChange = null) => {
	return render(
		<RadioGroup name="radio" value={value} onChange={onChange}>
			<Radio children="radio label 1" value="1" />
			<Radio children="radio label 2" value="2" />
			<Radio children="radio label 3" value="3" />
			<Radio children="radio label 4" value="4" />
		</RadioGroup>,
	);
};
describe('<RadioButton />', () => {
	describe('when not nested in a RadioGroup', () => {
		it('should throw if a RadioButton element is not nested inside a RadioGroup', () => {
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
				renderRadioGroup('1').container.firstChild,
			).toMatchSnapshot();
		});

		it('should automatically select the radio with value equal to the value of its radiogroup', () => {
			const { container } = renderRadioGroup('2');

			expect(
				container.querySelector('input[type="radio"][checked]'),
			).toHaveAttribute('value', '2');
		});

		it('should select the radio after it has been clicked', () => {
			const spyedCallback = vi.fn();

			const { container } = renderRadioGroup('1', spyedCallback);

			fireEvent.click(container.querySelector('input:not([checked])'));

			expect(spyedCallback).toHaveBeenCalledWith('2');
		});

		it('should not throw is onChange callback is not attached', () => {
			const { container } = renderRadioGroup('2');

			expect(() => {
				fireEvent.click(
					container.querySelector(
						'input[type="radio"]:not([checked])',
					),
				);
			}).not.toThrow();
		});

		it('should call the onClick function passed down to the radio button when it has been clicked', () => {
			const spyedChangeCallback = vi.fn();

			const { container } = renderRadioGroup('2', spyedChangeCallback);

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

	describe('size', () => {
		// `styles.radio` is a composed style, so it is several space-separated
		// classes — only the first is usable as a selector.
		const ring = ({ container }) =>
			container.querySelector(`.${styles.radio.split(' ')[0]}`);

		const renderAt = (size) =>
			render(
				<RadioGroup name="radio" value="1" size={size}>
					<Radio children="one" value="1" />
				</RadioGroup>,
			);

		it('adds no size class at the default, so existing usage is untouched', () => {
			const cls = ring(renderAt(undefined)).className;

			expect(cls).not.toContain(styles.ring.medium);
			expect(cls).not.toContain(styles.ring.small);
		});

		it.each(['medium', 'small'])('adds the %s ring class', (size) => {
			expect(ring(renderAt(size)).className).toContain(styles.ring[size]);
		});
	});
});
