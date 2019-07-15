import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '.';

describe('<Text />', () => {
	it('should not throw', () => expect(() => render(<Text />)).not.toThrow());

	it('should match snapshot when empty', () => {
		expect(render(<Text />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot with text', () => {
		expect(
			render(<Text>Hello World</Text>).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(<Text className="text-class" />);
		expect(container.firstChild).toHaveClass('text-class');
	});

	describe('when muted', () => {
		it('should match snapshot', () => {
			expect(
				render(<Text muted>Hello World</Text>).container.firstChild,
			).toMatchSnapshot();
		});
	});
});
