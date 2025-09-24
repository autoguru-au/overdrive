import { render } from '@testing-library/react';
import React from 'react';

import { ToggleButtons } from '.';

describe('<ToggleButtons />', () => {
	it('should not throw', () => {
		expect(() => render(<ToggleButtons />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<ToggleButtons />).container.firstChild,
		).toMatchSnapshot();
	});
});
