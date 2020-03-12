import { render } from '@testing-library/react';
import * as React from 'react';

import { Actions } from '.';

describe('<Actions />', () => {
	it('should not throw', () => {
		expect(() => render(<Actions />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Actions />).container.firstChild).toMatchSnapshot();
	});

	it.skip('should pass className down', () => {
		expect(
			render(<Actions className="test" />).container.firstChild,
		).toHaveClass('test');
	});
});
