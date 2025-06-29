import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { Tooltip } from './Tooltip';

describe('<Tolltip />', () => {
	it('should not throw', () => {
		expect(() => {
			render(
				<Tooltip label="Test">
					<div>trigger</div>
				</Tooltip>,
			);
		}).not.toThrow();
	});

	it('should have body when open', () => {
		const { container, getByText } = render(
			<Tooltip label="tooltip content">
				<div>trigger</div>
			</Tooltip>,
		);

		fireEvent.mouseEnter(getByText('trigger'));

		expect(container.parentNode).toHaveTextContent('tooltip content');
	});

	// TODO: This is skipped, as the `style="visibility: visible;"` shouldnt be there
	it('should match snapshot when closed', () => {
		const { baseElement } = render(
			<Tooltip label="tooltip content">
				<div>trigger</div>
			</Tooltip>,
		);

		expect(baseElement).toMatchSnapshot();
	});

	it('should match snapshot when opened', () => {
		const { baseElement, getByText } = render(
			<Tooltip label="tooltip content">
				<div>trigger</div>
			</Tooltip>,
		);

		fireEvent.mouseEnter(getByText('trigger'));

		expect(baseElement).toMatchSnapshot();
	});

	describe('multiple children support', () => {
		it('should work with multiple children', () => {
			const { container } = render(
				<Tooltip label="Test">
					<div>First child</div>
					<div>Second child</div>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('First child');
			expect(container).toHaveTextContent('Second child');

			// Multiple children should be wrapped in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();
		});

		it('should show tooltip when hovering over multiple children wrapper', () => {
			const { container } = render(
				<Tooltip label="tooltip content">
					<div>First child</div>
					<div>Second child</div>
				</Tooltip>,
			);

			const wrapper = container.querySelector('span');
			fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent('tooltip content');
		});

		it('should work with React Fragment children', () => {
			const { container } = render(
				<Tooltip label="Fragment tooltip">
					<>
						<div>Fragment child 1</div>
						<div>Fragment child 2</div>
					</>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Fragment child 1');
			expect(container).toHaveTextContent('Fragment child 2');

			// Fragment children should be wrapped in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();
		});

		it('should show tooltip when hovering over React Fragment wrapper', () => {
			const { container } = render(
				<Tooltip label="Fragment tooltip content">
					<>
						<div>Fragment child 1</div>
						<div>Fragment child 2</div>
					</>
				</Tooltip>,
			);

			const wrapper = container.querySelector('span');
			fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent(
				'Fragment tooltip content',
			);
		});
	});
});
