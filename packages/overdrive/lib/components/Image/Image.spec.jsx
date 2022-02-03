import { render } from '@testing-library/react';
import * as React from 'react';

import { Text } from '../Text';

import { Image } from './Inline';

const TestComponent = () => <div>divider component from test</div>;

describe('<Inline />', () => {
	it('should not throw', () => {
		expect(() => render(<Image />)).not.toThrow();
	});

	it.each([
		['default', true],
		['no', false],
		['custom element', <div>divider</div>],
	])('should match snapshot for %s dividers', (label, value) => {
		const { container } = render(
			<Image dividers={value}>
				<Text>A</Text>
				<Text>B</Text>
				<Text>C</Text>
			</Image>,
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not be able to render components', () => {
		const component = (
			<Image dividers={<TestComponent />}>
				<Text>A</Text>
				<Text>B</Text>
			</Image>
		);

		expect(() => render(component)).not.toThrow();

		const { container } = render(component);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not render undefined children', () => {
		const { container } = render(
			<Image>
				{null}
				<Text>A</Text>
				<Text>B</Text>
				<Text>C</Text>
				{false}
			</Image>,
		);

		expect(container.firstChild.children).toHaveLength(3);
	});
});
