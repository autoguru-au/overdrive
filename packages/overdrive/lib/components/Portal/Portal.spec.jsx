import * as React from 'react';
import { render } from '@testing-library/react';
import { Portal } from './Portal';

describe('<Portal />', () => {
	it('should not throw', () => {
		expect(() => render(<Portal />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Portal />).container.firstChild).toMatchSnapshot();
	});
});
