import { render } from '@testing-library/react';
import * as React from 'react';

import * as styles from './Badge.css';
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
		expect(container.firstChild).toHaveClass('badge-class');
	});

	it('should apply green colour style', () => {
		const { container } = render(
			<Badge colour="green" label="Hello World!" />,
		);
		expect(container.firstChild.firstChild).toHaveClass(styles.colours.default.green);
	});

	it('should apply red colour style', () => {
		const { container } = render(
			<Badge colour="red" label="Hello World!" />,
		);
		expect(container.firstChild.firstChild).toHaveClass(styles.colours.default.red);
	});

	it('should apply inverted style when inverted look is set', () => {
		const { container } = render(
			<Badge look="inverted" colour="neutral" label="Hello World!" />,
		);
		expect(container.firstChild.firstChild).toHaveClass(styles.colours.inverted.neutral.background);
		expect(container.querySelector('span')).toHaveClass(styles.colours.inverted.neutral.text);
	});

	it('should apply minimal style when minimal look is set', () => {
		const { container } = render(
			<Badge look="standard" colour="neutral" label="Hello World!" />,
		);
		expect(container.firstChild.firstChild).toHaveClass(styles.colours.default.neutral);
	});
});
