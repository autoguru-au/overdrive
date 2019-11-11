import { render } from '@testing-library/react';
import React from 'react';

import { Stack } from '.';

describe('<Stack />', () => {
	it('should not throw', () => {
		expect(() => render(<Stack />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Stack />).container.firstChild).toMatchSnapshot();
	});
});
