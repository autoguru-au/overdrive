import * as React from 'react';
import { render } from '@testing-library/react';
import { Inline } from './Inline';
import { Text } from '../Text';

const TestComponent = () => <div>divider component from test</div>;

describe('<Inline />', () => {
	it('should not throw', () => {
		expect(() => render(<Inline />)).not.toThrow();
	});

	it.each([
		['default', true],
		['no', false],
		['custom element', <div>divider</div>],
	])('should match snapshot for %s dividers', (label, value) => {
		const { container } = render(
			<Inline dividers={value}>
				<Text>A</Text>
				<Text>B</Text>
				<Text>C</Text>
			</Inline>,
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not be able to render components', () => {
		const component = (
			<Inline dividers={<TestComponent />}>
				<Text>A</Text>
				<Text>B</Text>
			</Inline>
		);

		expect(() => render(component)).not.toThrow();

		const { container } = render(component);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not render undefined children', () => {
		const { container } = render(
			<Inline>
				{null}
				<Text>A</Text>
				<Text>B</Text>
				<Text>C</Text>
				{false}
			</Inline>,
		);

		expect(container.firstChild.children).toHaveLength(3);
	});
});
