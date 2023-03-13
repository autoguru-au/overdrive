import { render } from '@testing-library/react';
import * as React from 'react';

import { SliderProgress } from './';
import { action } from '@storybook/addon-actions';

const standardProps = {
	paused: false,
	totalCount: 3,
	activeIndex: 1,
	duration: '1s',
	onRequestNext: () => action('onRequestNext'),
};

describe('<Section />', () => {
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
