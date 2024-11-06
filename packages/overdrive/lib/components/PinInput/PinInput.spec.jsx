import { render } from '@testing-library/react';
import * as React from 'react';

import { PinInput } from './PinInput';

describe('<PinInput />', () => {
	it('should not throw', () =>
		expect(() => render(<PinInput />)).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(
				<PinInput
					size="medium"
					value='6'
					digits={6}
				/>,
			).container.firstChild,
		).toMatchSnapshot();

		expect(render(<PinInput />).container.firstChild).toMatchSnapshot();
	});
});
