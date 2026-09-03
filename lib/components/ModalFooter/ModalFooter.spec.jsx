import { render } from '@testing-library/react';
import * as React from 'react';

import { ModalFooter } from './ModalFooter';

describe('<ModalFooter />', () => {
	it('renders its children', () => {
		const { getByText } = render(
			<ModalFooter>
				<button>Cancel</button>
				<button>Save</button>
			</ModalFooter>,
		);

		expect(getByText('Cancel')).toBeInTheDocument();
		expect(getByText('Save')).toBeInTheDocument();
	});

	it('renders in source order (last child on the right visually via flex)', () => {
		const { container } = render(
			<ModalFooter>
				<button data-testid="a">A</button>
				<button data-testid="b">B</button>
			</ModalFooter>,
		);

		const buttons = container.querySelectorAll('button');
		expect(buttons[0]).toHaveAttribute('data-testid', 'a');
		expect(buttons[1]).toHaveAttribute('data-testid', 'b');
	});
});
