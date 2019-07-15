import React from 'react';
import { render } from '@testing-library/react';
import { Badge, EColour } from './Badge';

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

	it('should apply success colour style', () => {
		const { container } = render(
			<Badge colour={EColour.Success} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('colourSuccess');
	});

	it('should apply danger colour style', () => {
		const { container } = render(
			<Badge colour={EColour.Danger} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('colourDanger');
	});

	it('should apply warning colour style', () => {
		const { container } = render(
			<Badge colour={EColour.Warning} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('colourWarning');
	});

	it('should not apply inverted style when inverted prop is set to false', () => {
		const { container } = render(
			<Badge
				colour={EColour.Default}
				invert={false}
				label="Hello World!"
			/>,
		);
		expect(container.querySelector('span')).not.toHaveClass('inverted');
	});

	it('should apply inverted style when inverted prop is set', () => {
		const { container } = render(
			<Badge invert colour={EColour.Default} label="Hello World!" />,
		);
		expect(container.querySelector('span')).toHaveClass('inverted');
	});
});
