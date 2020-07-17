import { render } from '@testing-library/react';
import * as React from 'react';
import { createRef } from 'react';

import { EAlignment } from './alignment';
import { Positioner } from './Positioner';

describe('<Positioner />', () => {
	it('should not throw', () =>
		expect(() =>
			render(<Positioner triggerRef={createRef()} />),
		).not.toThrow());

	it('should match snapshot', () => {
		const { baseElement } = render(
			<Positioner
				isOpen
				triggerRef={createRef()}
				alignment={EAlignment.BOTTOM}
			>
				Some body
			</Positioner>,
		);

		expect(baseElement).toMatchSnapshot();
	});

	describe('when #isOpen', () => {
		it('should render the body when open', () => {
			const { baseElement } = render(
				<Positioner
					isOpen
					triggerRef={createRef()}
					alignment={EAlignment.BOTTOM}
				>
					Some body
				</Positioner>,
			);

			expect(baseElement).toHaveTextContent('Some body');
		});

		it('shouldnt have the body when closed', () => {
			const { baseElement } = render(
				<Positioner
					triggerRef={createRef()}
					alignment={EAlignment.BOTTOM}
				>
					Some body
				</Positioner>,
			);

			expect(baseElement).not.toHaveTextContent('Some body');
		});
	});
});
