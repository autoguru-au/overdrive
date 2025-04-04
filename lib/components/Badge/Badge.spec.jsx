import { render } from '@testing-library/react';
import * as React from 'react';

import { Badge } from './Badge';

describe('<Badge />', () => {
	it('should not throw', () =>
		expect(() => render(<Badge label="badge" />)).not.toThrow());

	it('should match snapshot with label', () => {
		expect(
			render(<Badge label="Hello World!" />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should add a span element with the text value in it', () => {
		const { container } = render(
			<Badge className="badge-class" label="Hello World!" />,
		);
		expect(container).toHaveTextContent('Hello World!');
	});

	it('should pass on className to dom element', () => {
		const { container } = render(
			<Badge className="badge-class" label="Hello World!" />,
		);
		expect(container.firstChild.firstChild).toHaveClass('badge-class');
	});
});
