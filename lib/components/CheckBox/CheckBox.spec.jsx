import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { Heading } from '../Heading';

import { CheckBox } from './CheckBox';
import * as styles from './CheckBox.css.ts';

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
		const box = ({ container }) =>
			container.querySelector(`.${styles.checkbox.default}`);

		it('adds no size class at the default, so existing usage is untouched', () => {
			const cls = box(render(<CheckBox value="1" />)).className;

			expect(cls).not.toContain(styles.boxSize.medium);
			expect(cls).not.toContain(styles.boxSize.small);
		});

		it.each(['medium', 'small'])('adds the %s box class', (size) => {
			const cls = box(
				render(<CheckBox value="1" size={size} />),
			).className;

			expect(cls).toContain(styles.boxSize[size]);
		});
	});
});
