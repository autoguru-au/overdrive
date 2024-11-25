import { render } from '@testing-library/react';
import * as React from 'react';

import { Image } from './Image';
import { ImageServerProvider } from './ImageServerProvider';

const srcUrlMapper = ({ src, width, quality }) =>
	`https://images.autoguru.com.au/?url=${src}&w=${width}&q=${quality}`;

describe('<Image />', () => {
	it('should not throw', () => {
		expect(() => render(<Image />)).not.toThrow();
	});

	it.each([
		['default', true],
		['no', false],
		['yes', true],
	])('should match snapshot for eager value of %s', (label, value) => {
		const { container } = render(<Image eager={value} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it.each([
		['default', true],
		['no', false],
		['yes', true],
	])(
		'should match snapshot for unoptimised value of %s  when no ImageServerProvider is defined',
		(label, value) => {
			const { container } = render(<Image unoptimised={value} />);

			expect(container.firstChild).toMatchSnapshot();
		},
	);

	it.each([
		['default', true],
		['no', false],
		['yes', true],
	])(
		'should match snapshot for unoptimised value of %s when ImageServerProvider is defined',
		(label, value) => {
			const { container } = render(
				<ImageServerProvider srcUrlMapper={srcUrlMapper}>
					<Image unoptimised={value} />,
				</ImageServerProvider>,
			);

			expect(container.firstChild).toMatchSnapshot();
		},
	);

	it.each([
		['no', undefined],
		['single size', '80vw'],
		['multiple sizes', ['100vw', , '60vw', '30vw']],
	])(
		'should match snapshot for sizes value of %s when ImageServerProvider is defined',
		(label, value) => {
			const { container } = render(
				<ImageServerProvider srcUrlMapper={srcUrlMapper}>
					<Image unoptimised={value} />,
				</ImageServerProvider>,
			);

			expect(container.firstChild).toMatchSnapshot();
		},
	);
});
