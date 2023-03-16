import { render } from '@testing-library/react';
import * as React from 'react';

import 'intersection-observer'; // polyfill for testing
import { HorizontalAutoScroller } from './';

const standardProps = {
	paused: false,
	activePage: 0,
};

describe('<HorizontalAutoScroller />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<HorizontalAutoScroller {...standardProps} />),
		).not.toThrow();
	});

	it('should not throw with many items', () => {
		expect(() =>
			render(
				<HorizontalAutoScroller {...standardProps}>
					{Array.from({ length: 40 }).map((_, index) => (
						<span key={index} />
					))}
				</HorizontalAutoScroller>,
			),
		).not.toThrow();
	});

	it('should match the snapshot for 8 items', () => {
		expect(
			render(
				<HorizontalAutoScroller {...standardProps}>
					{Array.from({ length: 8 }).map((_, index) => (
						<span key={index} />
					))}
				</HorizontalAutoScroller>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot with custom slider colour', () => {
		expect(
			render(
				<HorizontalAutoScroller
					{...standardProps}
					sliderProgressColour="yellow500"
				>
					{Array.from({ length: 4 }).map((_, index) => (
						<span key={index} />
					))}
				</HorizontalAutoScroller>,
			).container.firstChild,
		).toMatchSnapshot();
	});
});
