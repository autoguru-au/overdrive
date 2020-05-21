import * as React from 'react';
import { render } from '@testing-library/react';
import { Inline } from '.';

describe('<Inline />', () => {
	it('should not throw', () => {
		expect(() => render(<Inline />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Inline />).container.firstChild).toMatchSnapshot();
	});
});
