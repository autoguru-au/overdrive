import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { Heading } from '../Heading';

import { CheckBox } from './CheckBox';

describe('<CheckBox />', () => {
	it('should not throw', () => {
		expect(() => render(<CheckBox />)).not.toThrow();
	});

	it('should match the snapshot for a single check with no value or label', () => {
		expect(render(<CheckBox />).container.firstChild).toMatchSnapshot();
	});

	it('should match the snapshot for a single check', () => {
		expect(
			render(<CheckBox children="check label 1" value="1" />).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot for a checked check', () => {
		expect(
			render(<CheckBox children="check label 1" checked value="1" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot for a disable checkbox', () => {
		expect(
			render(<CheckBox disabled children="check label 1" value="1" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<CheckBox className="check-class" />).container.firstChild
				.firstChild,
		).toHaveClass('check-class');
	});

	it('should call the onClick function passed down to it when clicked', () => {
		const spyedClickCallback = vi.fn();

		const { container } = render(
			<CheckBox
				children="check label 1"
				value="1"
				onClick={spyedClickCallback}
			/>,
		);

		fireEvent.click(container.querySelector('input'));

		expect(spyedClickCallback).toHaveBeenCalledTimes(1);
	});

	it('should pass the checked value to the native element', () => {
		const { container } = render(
			<CheckBox children="check label 1" checked value="1" />,
		);

		expect(container.querySelector('input')).toHaveAttribute('checked', '');
	});

	it('should not throw is onChange callback is not attached', () => {
		const { container } = render(
			<CheckBox children="check label 1" value="1" />,
		);

		expect(() => {
			fireEvent.change(container.querySelector('input'), {});
		}).not.toThrow();
	});

	it('should call the onChange function passed down to it when checked value has changes', () => {
		const spyedChangeCallback = vi.fn();
		const { container } = render(
			<CheckBox
				children="check label 1"
				value="1"
				onChange={spyedChangeCallback}
			/>,
		);

		expect(() => {
			fireEvent.click(container.querySelector('input'), {});
		}).not.toThrow();

		expect(spyedChangeCallback).toHaveBeenCalledTimes(1);
	});

	describe('when with component child', () => {
		it('should match the snapshot', () => {
			expect(
				render(
					<CheckBox children="check label 1" value="1">
						<Heading>Hello checkbox</Heading>
					</CheckBox>,
				).container.firstChild,
			).toMatchSnapshot();
		});
	});

	describe('size', () => {
		const indicator = (container) =>
			container.querySelector('[data-size]');

		it('should default to medium, the DS-2026 20px box', () => {
			const { container } = render(<CheckBox value="1" />);

			expect(indicator(container)).toHaveAttribute('data-size', 'medium');
		});

		it('should render the small box when asked for it', () => {
			const { container } = render(<CheckBox size="small" value="1" />);

			expect(indicator(container)).toHaveAttribute('data-size', 'small');
		});

		it('should give each size its own class, so the box can be sized', () => {
			const { container: medium } = render(<CheckBox value="1" />);
			const { container: small } = render(
				<CheckBox size="small" value="1" />,
			);

			expect(indicator(medium).className).not.toEqual(
				indicator(small).className,
			);
		});
	});

	describe('root element hooks', () => {
		it('should mark the root with its component name', () => {
			const { container } = render(<CheckBox value="1" />);

			expect(
				container.querySelector('[data-od-component="checkbox"]'),
			).toBeInTheDocument();
		});

		it('should put a supplied testId on the root', () => {
			const { container } = render(
				<CheckBox testId="terms-checkbox" value="1" />,
			);

			expect(container.querySelector('[data-testid]')).toHaveAttribute(
				'data-testid',
				'terms-checkbox',
			);
		});
	});

	describe('indeterminate', () => {
		it('sets the native indeterminate flag, so it announces as mixed', () => {
			const { container } = render(<CheckBox isIndeterminate value="1" />);

			expect(container.querySelector('input').indeterminate).toBe(true);
		});

		it('carries the accent, marked apart from a plain tick', () => {
			const { container } = render(<CheckBox isIndeterminate value="1" />);
			const box = container.querySelector('[data-size]');

			expect(box).toHaveAttribute('data-indeterminate');
		});

		it('leaves the attribute off an ordinary box', () => {
			const { container } = render(<CheckBox value="1" />);

			expect(
				container.querySelector('[data-size]'),
			).not.toHaveAttribute('data-indeterminate');
		});
	});
});
