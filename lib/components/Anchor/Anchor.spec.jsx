import { render } from '@testing-library/react';
import * as React from 'react';

import { Button } from '../Button';

import { Anchor } from './Anchor';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Anchor />', () => {
	it('should not throw', () =>
		expect(() => render(<Anchor />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(render(<Anchor />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot with label, icon and to props', () => {
		expect(
			render(
				<Anchor icon={TestIcon} href="https://www.autoguru.com.au">
					Hello World!
				</Anchor>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should add an a dom element', () => {
		const { container } = render(
			<Anchor className="anchor-class">Hello World!</Anchor>,
		);
		expect(container.querySelector('a')).toBeTruthy();
	});

	it('should pass on className', () => {
		expect(
			render(<Anchor className="test" />).container.firstChild.firstChild,
		).toHaveClass('test');
	});

	it('should add a span element inside the a tag with the the label text value', () => {
		const { container } = render(
			<Anchor href="https://www.autoguru.com.au">Hello World!</Anchor>,
		);
		expect(container).toHaveTextContent('Hello World!');
	});

	it('should the icon passed in props', () => {
		const { container } = render(
			<Anchor icon={TestIcon} href="https://www.autoguru.com.au">
				Hello World!
			</Anchor>,
		);
		expect(container.querySelector('svg')).toBeTruthy();
	});

	it('should use the listen to the href attribute', () => {
		const { container } = render(
			<Anchor icon={TestIcon} href="https://www.autoguru.com.au">
				Hello World!
			</Anchor>,
		);
		expect(container.firstChild.firstChild).toHaveAttribute(
			'href',
			'https://www.autoguru.com.au',
		);
	});

	describe('when custom component', () => {
		it('should add Button dom element if button component is passed down to it', () => {
			const { container } = render(
				<Anchor className="anchor-class" as={<Button />}>
					Hello World!
				</Anchor>,
			);
			expect(container.querySelector('button')).toBeTruthy();
		});

		it('should match snapshot with label, icon custom component', () => {
			const { container } = render(
				<Anchor icon={TestIcon} as={<Button />}>
					Hello World!
				</Anchor>,
			);
			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
