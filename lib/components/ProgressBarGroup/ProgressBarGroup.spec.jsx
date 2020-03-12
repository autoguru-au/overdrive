import { render } from '@testing-library/react';
import * as React from 'react';

import { ProgressBarGroup } from '.';

describe('<ProgressBarGroup />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<ProgressBarGroup values={[1, 2, 3]} />),
		).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<ProgressBarGroup values={[1, 2, 3]} />).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should should render a prefix for every value', () => {
		expect(
			render(
				<ProgressBarGroup
					values={[1, 2, 3]}
					prefixLabels={['a', 'b', 'c']}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should should ignore extra labels', () => {
		expect(
			render(
				<ProgressBarGroup
					values={[1, 2, 3]}
					prefixLabels={['a', 'b', 'c', 'd']}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should should ignore not break when not enough labels', () => {
		expect(
			render(<ProgressBarGroup values={[1, 2, 3]} prefixLabels={['a']} />)
				.container.firstChild,
		).toMatchSnapshot();
	});
});
