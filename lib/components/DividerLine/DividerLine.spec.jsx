import { render } from '@testing-library/react';
import * as React from 'react';

import { DividerLine } from './DividerLine';

describe('<DividerLine />', () => {
	it('should not throw', () => {
		expect(() => render(<DividerLine />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<DividerLine space="3" size="2" colour="shine" />).container
				.firstChild,
		).toMatchSnapshot();
	});
	it('should match the snapshot as vertical', () => {
		expect(
			render(<DividerLine isVertical space="3" size="2" colour="shine" />)
				.container.firstChild,
		).toMatchSnapshot();
	});
});
