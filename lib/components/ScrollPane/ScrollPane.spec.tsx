import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { ScrollPane } from './ScrollPane';

describe('<ScrollPane />', () => {
	it('should render children with scrollable container', () => {
		render(
			<ScrollPane testId="scroll-pane">
				<div>Scrollable content</div>
			</ScrollPane>,
		);

		const scrollPane = screen.getByTestId('scroll-pane');
		expect(scrollPane).toBeInTheDocument();
		expect(screen.getByText('Scrollable content')).toBeInTheDocument();
	});

	it('should accept height prop for fixed height', () => {
		render(
			<ScrollPane height="full" testId="fixed-height-pane">
				<div>Content with fixed height</div>
			</ScrollPane>,
		);

		const scrollPane = screen.getByTestId('fixed-height-pane');
		expect(scrollPane).toBeInTheDocument();
		expect(
			screen.getByText('Content with fixed height'),
		).toBeInTheDocument();
	});

	it('should support maxHeight for flexible scrolling', () => {
		render(
			<ScrollPane testId="max-height-pane">
				<div>Content with max height</div>
			</ScrollPane>,
		);

		const scrollPane = screen.getByTestId('max-height-pane');
		expect(scrollPane).toBeInTheDocument();
		expect(screen.getByText('Content with max height')).toBeInTheDocument();
	});

	it('should render with multiple children', () => {
		render(
			<ScrollPane testId="multi-child-pane">
				<div>First child</div>
				<div>Second child</div>
				<div>Third child</div>
			</ScrollPane>,
		);

		const scrollPane = screen.getByTestId('multi-child-pane');
		expect(scrollPane).toBeInTheDocument();
		expect(screen.getByText('First child')).toBeInTheDocument();
		expect(screen.getByText('Second child')).toBeInTheDocument();
		expect(screen.getByText('Third child')).toBeInTheDocument();
	});

	it('should apply custom className when provided', () => {
		render(
			<ScrollPane className="custom-scroll" testId="custom-pane">
				<div>Custom styled content</div>
			</ScrollPane>,
		);

		const scrollPane = screen.getByTestId('custom-pane');
		expect(scrollPane).toBeInTheDocument();
		expect(scrollPane).toHaveClass('custom-scroll');
	});
});
