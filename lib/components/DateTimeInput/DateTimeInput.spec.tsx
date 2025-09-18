import { render } from '@testing-library/react';
import React from 'react';

import { DateTimeInput } from '.';

const mockTimeOptions = [
	{ label: '9:00 AM', name: '9:00AM' },
	{ label: '10:00 AM', name: '10:00AM' },
];

describe('<DateTimeField />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<DateTimeInput timeOptions={mockTimeOptions} />),
		).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<DateTimeInput timeOptions={mockTimeOptions} />).container
				.firstChild,
		).toMatchSnapshot();
	});
});
