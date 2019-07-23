import React from 'react';
import { render } from '@testing-library/react';
import { TextLink } from '.';

describe('<TextLink />', () => {
	it('should not throw', () => {
		expect(() => render(<TextLink />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<TextLink />).container.firstChild).toMatchSnapshot();
	});

	it('should allow as override', () => {
		expect(
			render(<TextLink as={<p />}>Test</TextLink>).container.firstChild,
		).toMatchSnapshot();
	});
});
