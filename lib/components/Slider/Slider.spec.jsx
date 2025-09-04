import React from 'react';
import { render } from '@testing-library/react';
import { Slider } from '.';

describe('<Slider />', () => {
	it('should not throw', () => {
		expect(() => render(<Slider />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Slider />).container.firstChild).toMatchSnapshot();
	});
});
