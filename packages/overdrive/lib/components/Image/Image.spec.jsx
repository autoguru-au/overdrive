import { render } from '@testing-library/react';
import * as React from 'react';

import { Image } from './Image';

describe('<Image />', () => {
	it('should not throw', () => {
		expect(() => render(<Image />)).not.toThrow();
	});

	it.each([
		['default', true],
		['no', false],
		['yes', true],
	])('should match snapshot for eager value of %s', (label, value) => {
		const { container } = render(
			<Image eager={value} />,
		);

		expect(container.firstChild).toMatchSnapshot();
	});

});
