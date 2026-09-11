import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { ModalFooter } from './ModalFooter';

describe('<ModalFooter />', () => {
	it('renders only the primary button when no secondary label is given', () => {
		const { getByText, queryAllByRole } = render(
			<ModalFooter primaryLabel="Confirm" />,
		);

		expect(getByText('Confirm')).toBeInTheDocument();
		expect(queryAllByRole('button')).toHaveLength(1);
	});

	it('renders secondary before primary and wires up both click handlers', () => {
		const onPrimaryClick = vi.fn();
		const onSecondaryClick = vi.fn();

		const { getAllByRole } = render(
			<ModalFooter
				primaryLabel="Confirm"
				onPrimaryClick={onPrimaryClick}
				secondaryLabel="Cancel"
				onSecondaryClick={onSecondaryClick}
			/>,
		);

		const buttons = getAllByRole('button');
		expect(buttons).toHaveLength(2);
		expect(buttons[0]).toHaveTextContent('Cancel');
		expect(buttons[1]).toHaveTextContent('Confirm');

		fireEvent.click(buttons[1]);
		expect(onPrimaryClick).toHaveBeenCalledTimes(1);
		expect(onSecondaryClick).not.toHaveBeenCalled();

		fireEvent.click(buttons[0]);
		expect(onSecondaryClick).toHaveBeenCalledTimes(1);
	});
});
