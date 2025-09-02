import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { PolymorphicBox } from './PolymorphicBox';

describe('<PolymorphicBox />', () => {
	it('should render as div by default', () => {
		render(<PolymorphicBox data-testid="box">Content</PolymorphicBox>);
		
		const element = screen.getByTestId('box');
		expect(element.tagName).toBe('DIV');
		expect(element).toHaveTextContent('Content');
	});

	it('should render with different HTML element using as prop', () => {
		render(
			<PolymorphicBox as="section" data-testid="box">
				Section content
			</PolymorphicBox>
		);
		
		const element = screen.getByTestId('box');
		expect(element.tagName).toBe('SECTION');
		expect(element).toHaveTextContent('Section content');
	});
});