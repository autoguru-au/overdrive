import * as React from 'react';
import { render } from '@testing-library/react';
import { Inline } from '.';
import { Text } from '../Typography';

const TestComponent = () => <div>divider component</div>;

describe('<Inline />', () => {
	it('should not throw', () => {
		expect(() => render(<Inline />)).not.toThrow();
	});

	it.each([
		['default', true],
		['no', false],
		['custom element', <div>divider</div>],
		['custom component', TestComponent],
	])('should match snapshot for %s dividers', (value) => {
		const { container } = render(
			<Inline dividers={value}>
				<Text>A</Text>
				<Text>B</Text>
				<Text>C</Text>
			</Inline>,
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
