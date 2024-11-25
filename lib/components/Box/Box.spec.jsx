import { render } from '@testing-library/react';
import * as React from 'react';

import { Box } from './Box';

describe('<Box />', () => {
	it('should not throw', () => expect(() => render(<Box />)).not.toThrow());

	it('should match snapshot for default Box', () => {
		expect(render(<Box />).container.firstChild).toMatchSnapshot();
	});
});
