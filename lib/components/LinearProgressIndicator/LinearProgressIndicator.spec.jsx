import { render } from '@testing-library/react';
import * as React from 'react';

import { LinearProgressIndicator } from './LinearProgressIndicator';

describe('<LinearProgressIndicator />', () => {
	it('should not throw', () =>
		expect(() => render(<LinearProgressIndicator />)).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<LinearProgressIndicator />).container.firstChild,
		).toMatchSnapshot();
	});
});
