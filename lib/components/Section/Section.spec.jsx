import { render } from '@testing-library/react';
import * as React from 'react';

import { Section } from './Section';

describe('<Section />', () => {
	it('should not throw', () => {
		expect(() => render(<Section />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Section />).container.firstChild).toMatchSnapshot();
	});
});
