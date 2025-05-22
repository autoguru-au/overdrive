import { render } from '@testing-library/react';
import * as React from 'react';

import { SliderProgress } from './';
// import { action } from 'storybook/actions';

const standardProps = {
	paused: false,
	totalCount: 3,
	activeIndex: 1,
	duration: '1s',
	// Jest test harness may need additional config for Storybook 8 or dependencies may be stale. Calling `action` sees error:
	// "Cannot find module 'storybook/internal/preview-api' from 'node_modules/@storybook/addon-actions/dist/index.js'"
	// onRequestNext: () => action('onRequestNext'),
};

describe('<ProgressStep />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<SliderProgress {...standardProps} />),
		).not.toThrow();
	});

	it('should not throw with many items', () => {
		expect(() =>
			render(<SliderProgress {...standardProps} totalCount={30} />),
		).not.toThrow();
	});

	it('should match the snapshot for 8 items', () => {
		expect(
			render(<SliderProgress {...standardProps} totalCount={8} />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot with custom background', () => {
		expect(
			render(
				<SliderProgress
					{...standardProps}
					backgroundColour="yellow500"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});
});
