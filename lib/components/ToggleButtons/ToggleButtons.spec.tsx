import { render } from '@testing-library/react';
import React from 'react';

import { ToggleButtons, ToggleButton } from '.';

describe('<ToggleButtons />', () => {
	it('should not throw', () => {
		expect(() =>
			render(
				<ToggleButtons>
					<ToggleButton id="test1">Test 1</ToggleButton>
					<ToggleButton id="test2">Test 2</ToggleButton>
				</ToggleButtons>,
			),
		).not.toThrow();
	});
});
