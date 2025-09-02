import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Heading } from './Heading';

describe('<Heading />', () => {
	it('should render children as heading content', () => {
		render(<Heading>Main Title</Heading>);
		
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('Main Title');
	});

	it('should render different heading levels using "as" prop', () => {
		render(<Heading as="h3" testId="h3-heading">Section Title</Heading>);
		
		const heading = screen.getByRole('heading', { level: 3 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('Section Title');
		expect(screen.getByTestId('h3-heading')).toBe(heading);
	});

	it('should apply size variants correctly', () => {
		render(<Heading size="8" testId="large-heading">Large Heading</Heading>);
		
		const element = screen.getByTestId('large-heading');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Large Heading');
	});

	it('should apply default bold weight', () => {
		render(<Heading testId="bold-heading">Bold Heading</Heading>);
		
		const element = screen.getByTestId('bold-heading');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Bold Heading');
	});

	it('should support color and alignment props', () => {
		render(
			<Heading 
				colour="primary" 
				align="center" 
				testId="styled-heading"
			>
				Styled Heading
			</Heading>
		);
		
		const element = screen.getByTestId('styled-heading');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('Styled Heading');
	});
});