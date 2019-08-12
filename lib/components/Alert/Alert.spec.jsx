import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Alert } from '.';

describe('<Alert />', () => {
	it('should not throw', () => {
		expect(() => render(<Alert />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<Alert onRequestClose={jest.fn()} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should fire callback when X is clicked', () => {
		const closeHandler = jest.fn();

		const { getByLabelText } = render(
			<Alert onRequestClose={closeHandler} />,
		);

		fireEvent.click(getByLabelText('close'));

		expect(closeHandler).toHaveBeenCalledTimes(1);
	});
});
