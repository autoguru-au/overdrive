import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { Heading } from '../Heading';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

const renderRadioGroup = (value = '', onChange?: (value: string) => void) =>
	render(
		<RadioGroup name="radio" value={value} onChange={onChange}>
			<Radio value="1">radio label 1</Radio>
			<Radio value="2">radio label 2</Radio>
			<Radio value="3">radio label 3</Radio>
			<Radio value="4">radio label 4</Radio>
		</RadioGroup>,
	);

const ring = (container: HTMLElement) => container.querySelector('[data-size]');

describe('<Radio />', () => {
	describe('when not nested in a RadioGroup', () => {
		it('should throw if a Radio element is not nested inside a RadioGroup', () => {
			expect(() => render(<Radio value="1" />)).toThrow();
		});
	});

	describe('when nested in a RadioGroup', () => {
		it('should not throw', () =>
			expect(() => {
				render(
					<RadioGroup name="radio" value="">
						<Radio value="" />
					</RadioGroup>,
				);
			}).not.toThrow());

		it('should match the snapshot for a single radio with no value or label', () => {
			expect(
				render(
					<RadioGroup name="radio" value="">
						<Radio value="" />
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match the snapshot for a single radio', () => {
			expect(
				render(
					<RadioGroup name="radio" value="">
						<Radio value="1">radio label 1</Radio>
					</RadioGroup>,
				).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match the snapshot for a checked radio', () => {
			expect(
				render(
					<RadioGroup name="radio" value="1">
						<Radio value="1">radio label 1</Radio>
						<Radio value="2">radio label 2</Radio>
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

			fireEvent.click(container.querySelector('input:not([checked])')!);

			expect(spyedCallback).toHaveBeenCalledWith('2');
		});

		it('should not throw is onChange callback is not attached', () => {
			const { container } = renderRadioGroup('2');

			expect(() => {
				fireEvent.click(
					container.querySelector(
						'input[type="radio"]:not([checked])',
					)!,
				);
			}).not.toThrow();
		});

		it('should call the onClick function passed down to the radio button when it has been clicked', () => {
			const spyedChangeCallback = vi.fn();

			const { container } = renderRadioGroup('2', spyedChangeCallback);

			fireEvent.click(container.querySelector('input:not([checked])')!);

			expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
		});

		it('should disable the native radio element if disabled prop is set to true', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio value="1">radio label 1</Radio>
					<Radio disabled value="2">
						radio label 2
					</Radio>
					<Radio value="3">radio label 3</Radio>
					<Radio value="4">radio label 4</Radio>
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
					<Radio value="1">
						<Heading>Hello radio</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it('should render the component child', () => {
			const { getByText } = render(
				<RadioGroup name="radio" value="2">
					<Radio value="1">
						<Heading>Hello radio</Heading>
					</Radio>
				</RadioGroup>,
			);

			expect(getByText('Hello radio')).toMatchSnapshot();
		});
	});

	describe('size', () => {
		const renderWithSizes = (
			groupSize?: 'medium' | 'small',
			radioSize?: 'medium' | 'small',
		) =>
			render(
				<RadioGroup name="radio" value="1" size={groupSize}>
					<Radio value="1" size={radioSize} />
				</RadioGroup>,
			);

		it('should default to medium, the DS-2026 20px ring', () => {
			expect(ring(renderWithSizes().container)).toHaveAttribute(
				'data-size',
				'medium',
			);
		});

		it('should take the size off its group', () => {
			expect(ring(renderWithSizes('small').container)).toHaveAttribute(
				'data-size',
				'small',
			);
		});

		it('should let an individual radio override its group', () => {
			expect(
				ring(renderWithSizes('small', 'medium').container),
			).toHaveAttribute('data-size', 'medium');
		});

		it('should give each size its own class, so the ring can be sized', () => {
			const { container: medium } = renderWithSizes('medium');
			const { container: small } = renderWithSizes('small');

			expect(ring(medium)!.className).not.toEqual(ring(small)!.className);
		});
	});

	describe('state hooks on the ring', () => {
		it('should mark the selected radio, so the accent can be painted', () => {
			const { container } = render(
				<RadioGroup name="radio" value="1">
					<Radio value="1" />
				</RadioGroup>,
			);

			expect(ring(container)).toHaveAttribute('data-active');
		});

		it('should leave the attribute off an unselected radio', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio value="1" />
				</RadioGroup>,
			);

			expect(ring(container)).not.toHaveAttribute('data-active');
		});

		it('should mark a disabled radio', () => {
			const { container } = render(
				<RadioGroup name="radio" value="2">
					<Radio value="1" disabled />
				</RadioGroup>,
			);

			expect(ring(container)).toHaveAttribute('data-disabled');
		});
	});

	describe('root element hooks', () => {
		it('should mark the radio root with its component name', () => {
			const { container } = render(
				<RadioGroup name="radio" value="1">
					<Radio value="1" />
				</RadioGroup>,
			);

			expect(
				container.querySelector('[data-od-component="radio"]'),
			).toBeInTheDocument();
		});

		it('should mark the group root with its component name', () => {
			const { container } = render(
				<RadioGroup name="radio" value="1">
					<Radio value="1" />
				</RadioGroup>,
			);

			expect(
				container.querySelector('[data-od-component="radio-group"]'),
			).toBeInTheDocument();
		});

		it('should put a supplied testId on the radio root', () => {
			const { container } = render(
				<RadioGroup name="radio" value="1">
					<Radio value="1" testId="delivery-option" />
				</RadioGroup>,
			);

			expect(
				container.querySelector('[data-testid="delivery-option"]'),
			).toBeInTheDocument();
		});

		it('should put a supplied testId on the group root', () => {
			const { container } = render(
				<RadioGroup name="radio" value="1" testId="delivery-options">
					<Radio value="1" />
				</RadioGroup>,
			);

			expect(
				container.querySelector('[data-testid="delivery-options"]'),
			).toBeInTheDocument();
		});
	});

	describe('accessible name', () => {
		it('should pass aria-label to the native input, for a radio with no label', () => {
			const { getByRole } = render(
				<RadioGroup name="radio" value="1">
					<Radio value="1" aria-label="Express delivery" />
				</RadioGroup>,
			);

			expect(getByRole('radio')).toHaveAccessibleName('Express delivery');
		});

		it('should pass aria-labelledby to the native input', () => {
			const { getByRole } = render(
				<>
					<span id="delivery-heading">Express delivery</span>
					<RadioGroup name="radio" value="1">
						<Radio value="1" aria-labelledby="delivery-heading" />
					</RadioGroup>
				</>,
			);

			expect(getByRole('radio')).toHaveAccessibleName('Express delivery');
		});
	});
});
