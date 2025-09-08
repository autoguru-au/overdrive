import { render } from '@testing-library/react';
import * as React from 'react';

import { DatePicker } from './DatePicker';

// Mock window.matchMedia since it's not available in test environment
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<DatePicker />', () => {
	it('should not throw', () =>
		expect(() => render(<DatePicker onChange={() => {}} />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(
			render(<DatePicker onChange={() => {}} />).container.firstChild,
		).toMatchSnapshot();
	});
});
