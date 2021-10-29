import { render } from '@testing-library/react';
import * as React from 'react';

import { Badge } from './Badge';

describe('<Badge />', () => {
	it('should not throw', () =>
		expect(() => render(<Badge label='badge' />)).not.toThrow());

	it('should match snapshot with label', () => {
		expect(
			render(<Badge label='Hello World!' />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should add a span element with the text value in it', () => {
		const { container } = render(
			<Badge className='badge-class' label='Hello World!' />,
		);
		expect(container).toHaveTextContent('Hello World!');
	});

	it.skip('should pass on className to dom element', () => {
		const { container } = render(
			<Badge className='badge-class' label='Hello World!' />,
		);
		expect(container.querySelector('span')).toHaveClass('badge-class');
	});

	it.skip('should apply green colour style', () => {
		const { container } = render(
			<Badge colour='green' label='Hello World!' />,
		);
		expect(container.querySelector('span')).toHaveClass('green');
	});

	it.skip('should apply red colour style', () => {
		const { container } = render(
			<Badge colour='red' label='Hello World!' />,
		);
		expect(container.querySelector('span')).toHaveClass('red');
	});

	it.skip('should apply inverted style when inverted look is set', () => {
		const { container } = render(
			<Badge look='inverted' colour='neutral' label='Hello World!' />,
		);
		expect(container.querySelector('span')).toHaveClass('invert');
	});

	it.skip('should apply minimal style when minimal look is set', () => {
		const { container } = render(
			<Badge look='minimal' colour='neutral' label='Hello World!' />,
		);
		expect(container.querySelector('span')).toHaveClass('minimal');
	});
});
