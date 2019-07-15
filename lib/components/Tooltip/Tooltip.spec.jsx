import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
});
