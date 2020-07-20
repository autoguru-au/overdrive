import { render } from '@testing-library/react';
import * as React from 'react';

import { Actions } from './index';

describe('<Actions />', () => {
	it('should not throw', () => {
		expect(() => render(<Actions />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Actions />).container.firstChild).toMatchSnapshot();
	});
});
