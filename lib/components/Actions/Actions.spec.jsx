import React from 'react';
import { render } from '@testing-library/react';
import { Actions } from '.';

describe('<Actions />', () => {
	it('should not throw', () => {
		expect(() => render(<Actions />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Actions />).container.firstChild).toMatchSnapshot();
	});

	it('should pass className down', () => {
		expect(
			render(<Actions className="test" />).container.firstChild,
		).toHaveClass('test');
	});
});
