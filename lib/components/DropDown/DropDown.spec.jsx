import { DownloadIcon, TrashCanOutlineIcon } from '@autoguru/icons';
import { render } from '@testing-library/react';
import * as React from 'react';
import { beforeAll, describe, it, expect } from 'vitest';

import { DropDown } from './DropDown';
import { DropDownOption } from './DropDownOption';

const option1 = <DropDownOption label="Download" icon={DownloadIcon} />;
const option2 = <DropDownOption label="Delete" icon={TrashCanOutlineIcon} />;

const standardProps = {
	label: 'Attachment',
	options: [option1, option2],
};

// Mock window.matchMedia for useMedia hook
const mockMatchMedia = (query) => ({
	matches: query.includes('768px') || query.includes('1024px'), // Default to desktop view (tablet+)
	media: query,
	onchange: null,
	addListener: () => {},
	removeListener: () => {},
	addEventListener: () => {},
	removeEventListener: () => {},
	dispatchEvent: () => true,
});

describe('<DropDown />', () => {
	beforeAll(() => {
		Object.defineProperty(globalThis, 'matchMedia', {
			writable: true,
			value: mockMatchMedia,
		});
	});

	it('should not throw', () => {
		expect(() => render(<DropDown />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<DropDown {...standardProps} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot as Primary variant', () => {
		expect(
			render(<DropDown {...standardProps} variant="primary" />).container
				.firstChild,
		).toMatchSnapshot();
	});
});
