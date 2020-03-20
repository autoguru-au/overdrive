import React from 'react';
import { render } from '@testing-library/react';
import { Section } from '.';

describe('<Section />', () => {
	it('should not throw', () => {
		expect(() => render(<Section />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Section />).container.firstChild).toMatchSnapshot();
	});
});
