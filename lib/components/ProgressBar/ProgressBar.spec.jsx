import { render } from '@testing-library/react';
import * as React from 'react';

import { ProgressBar } from '.';

describe('<ProgressBar />', () => {
	it('should not throw', () => {
		expect(() => render(<ProgressBar percentage={0.1} />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<ProgressBar percentage={0.5} />).container.firstChild,
		).toMatchSnapshot();
	});
});
