import { render } from '@testing-library/react';
import * as React from 'react';

import { NumberBubble } from './';

describe('<Section />', () => {
	it('should not throw', () => {
		expect(() => render(<NumberBubble />)).not.toThrow();
	});

	it('should not throw with positive value', () => {
		expect(() => render(<NumberBubble value={9} />)).not.toThrow();
	});

	it('should not throw with negative value', () => {
		expect(() => render(<NumberBubble value={-9} />)).not.toThrow();
	});

	it('should match the snapshot for positive value', () => {
		expect(
			render(<NumberBubble value={3} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot for negative value', () => {
		expect(
			render(<NumberBubble value={-3} />).container.firstChild,
		).toMatchSnapshot();
	});
});
