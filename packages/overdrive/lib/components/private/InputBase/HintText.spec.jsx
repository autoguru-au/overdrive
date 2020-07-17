import { render } from '@testing-library/react';
import * as React from 'react';

import { HintText } from './HintText';

describe('<HintText />', () => {
	it('should not throw', () => {
		expect(() => render(<HintText />)).not.toThrow();
	});

	it.skip('should pass on className to dom element', () => {
		expect(
			render(<HintText className="hinted-class">Hello World!</HintText>)
				.container.firstChild,
		).toHaveClass('hinted-class');
	});

	it('should match snapshot for default hint', () => {
		expect(
			render(<HintText>Hello World!</HintText>).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for active hint', () => {
		expect(
			render(<HintText isActive>Hello World!</HintText>).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should display children', () => {
		expect(
			render(<HintText>Hello World!</HintText>).container.firstChild,
		).toHaveTextContent('Hello World!');
	});
});
