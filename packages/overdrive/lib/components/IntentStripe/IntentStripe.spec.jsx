import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { IntentStripe } from './IntentStripe';

describe('<Alert />', () => {
	it('should not throw', () => {
		expect(() => render(<IntentStripe />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<IntentStripe />).container.firstChild,
		).toMatchSnapshot();
	});
});
