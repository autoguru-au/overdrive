import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { sprinkles } from '../../styles';

import { Alert } from './Alert';

describe('<Alert />', () => {
	it('should not throw', () => {
		expect(() => render(<Alert />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<Alert onRequestClose={vi.fn()} />).container.firstChild,
		).toMatchSnapshot();
	});

	it.each([
		['danger', 'alertForeground'],
		['information', 'infoForeground'],
		['success', 'successForeground'],
		['warning', 'warningForeground'],
	])('should apply the %s foreground colour token', (intent, colour) => {
		const { getByRole } = render(<Alert intent={intent} />);

		expect(getByRole('alert')).toHaveClass(sprinkles({ color: colour }));
	});

	it('should fire callback when X is clicked', () => {
		const closeHandler = vi.fn();

		const { getByLabelText } = render(
			<Alert onRequestClose={closeHandler} />,
		);

		fireEvent.click(getByLabelText('close'));

		expect(closeHandler).toHaveBeenCalledTimes(1);
	});
});
