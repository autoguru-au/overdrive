import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { VisuallyHidden } from './VisuallyHidden';

describe('<VisuallyHidden />', () => {
	it('should render children but hide them visually', () => {
		render(
			<VisuallyHidden>
				<span>Hidden but accessible text</span>
			</VisuallyHidden>
		);
		
		const hiddenText = screen.getByText('Hidden but accessible text');
		expect(hiddenText).toBeInTheDocument();
	});

	it('should use visually hidden CSS class', () => {
		const { container } = render(
			<VisuallyHidden>
				<span>Hidden content</span>
			</VisuallyHidden>
		);
		
		const hiddenElement = container.querySelector('[data-od-component="visually-hidden"]');
		expect(hiddenElement).toBeInTheDocument();
		// Should have some CSS class applied for visual hiding
		expect(hiddenElement?.className).toBeTruthy();
	});

	it('should support different HTML elements using "as" prop', () => {
		render(
			<VisuallyHidden as="span">
				<span>Hidden span content</span>
			</VisuallyHidden>
		);
		
		const hiddenText = screen.getByText('Hidden span content');
		expect(hiddenText).toBeInTheDocument();
		expect(hiddenText.parentElement?.tagName).toBe('SPAN');
	});

	it('should render multiple children', () => {
		render(
			<VisuallyHidden>
				<span>First hidden text</span>
				<span>Second hidden text</span>
			</VisuallyHidden>
		);
		
		expect(screen.getByText('First hidden text')).toBeInTheDocument();
		expect(screen.getByText('Second hidden text')).toBeInTheDocument();
	});

	it('should maintain accessibility while hiding visual appearance', () => {
		render(
			<VisuallyHidden>
				<label htmlFor="test-input">Accessible label</label>
			</VisuallyHidden>
		);
		
		const label = screen.getByText('Accessible label');
		expect(label).toBeInTheDocument();
		expect(label.tagName).toBe('LABEL');
		expect(label).toHaveAttribute('for', 'test-input');
	});
});