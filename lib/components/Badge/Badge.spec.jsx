import React from 'react';
import { render } from '@testing-library/react';
import { Badge, EBadgeColour } from './Badge';

describe('<Badge />', () => {
	it('should not throw', () => expect(() => render(<Badge />)).not.toThrow());

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
		expect(container.querySelector('span')).toHaveClass('badge-class');
	});

	it('should apply green colour style', () => {
		const { container } = render(
			<Badge colour={EBadgeColour.Green} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('green');
	});

	it('should apply red colour style', () => {
		const { container } = render(
			<Badge colour={EBadgeColour.Red} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('red');
	});

	it('should apply inverted style when inverted look is set', () => {
		const { container } = render(
			<Badge
				look="inverted"
				colour={EBadgeColour.Neutral}
				label="Hello World!"
			/>,
		);
		expect(container.querySelector('span')).toHaveClass('invert');
	});

	it('should apply minimal style when minimal look is set', () => {
		const { container } = render(
			<Badge
				look="minimal"
				colour={EBadgeColour.Neutral}
				label="Hello World!"
			/>,
		);
		expect(container.querySelector('span')).toHaveClass('minimal');
	});
});
