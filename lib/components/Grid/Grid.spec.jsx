import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Grid } from './Grid';
import { GridItem } from './GridItem';

describe('<Grid />', () => {
	it('should not throw', () =>
		expect(() =>
			render(
				<Grid>
					<GridItem />
				</Grid>
			)
		).not.toThrow());
});

describe('<GridItem />', () => {
	it('should throw if GridItem is not wrapped inside a Grid', () =>
		expect(() => render(<GridItem />)).toThrow());
});
