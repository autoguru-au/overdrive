import React from 'react';
import { render } from '@testing-library/react';
import { LinearProgressIndicator } from '.';

describe('<LinearProgressIndicator />', () => {
	it('should not throw', () =>
		expect(() => render(<LinearProgressIndicator />)).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<LinearProgressIndicator />).container.firstChild,
		).toMatchSnapshot();
	});
});
