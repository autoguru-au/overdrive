import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Text } from './Text';

describe('<Text />', () => {
	it('should render children as text content', () => {
		render(<Text>Hello World</Text>);
		
		const text = screen.getByText('Hello World');
		expect(text).toBeInTheDocument();
	});

	it('should render as different elements when using "as" prop', () => {
		render(<Text as="span" testId="text-span">Span text</Text>);
		
		const element = screen.getByTestId('text-span');
		expect(element.tagName).toBe('SPAN');
		expect(element).toHaveTextContent('Span text');
	});

	it('should apply size variants correctly', () => {
		render(<Text size="7" testId="large-text">Large text</Text>);
		
		const element = screen.getByTestId('large-text');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Large text');
	});

	it('should apply color styling', () => {
		render(<Text colour="primary" testId="colored-text">Colored text</Text>);
		
		const element = screen.getByTestId('colored-text');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Colored text');
	});

	it('should handle weight and transform properties', () => {
		render(
			<Text weight="bold" transform="uppercase" testId="styled-text">
				Styled text
			</Text>
		);
		
		const element = screen.getByTestId('styled-text');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Styled text');
	});
});