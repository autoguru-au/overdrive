import { render } from '@testing-library/react';
import * as React from 'react';

import { TextBubble } from './';

describe('<Section />', () => {
	it('should not throw', () => {
		expect(() => render(<TextBubble label='OK' />)).not.toThrow();
	});

	it('should not throw with small text', () => {
		expect(() => render(<TextBubble label='S' />)).not.toThrow();
	});

	it('should not throw with very long text', () => {
		expect(() => render(<TextBubble
			label='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' />)).not.toThrow();
	});

	it('should match the snapshot for standard label', () => {
		expect(
			render(<TextBubble label='PASS' />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot background and text colour', () => {
		expect(
			render(<TextBubble label='ERROR'
								 textColour='danger'
								 backgroundColour='gray900' />).container.firstChild,
		).toMatchSnapshot();
	});
});
