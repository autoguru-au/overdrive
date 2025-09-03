import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import { LoadingBox } from './LoadingBox';

describe('<LoadingBox />', () => {
	beforeEach(() => {
		// Mock Math.random for consistent testing
		vi.spyOn(Math, 'random').mockReturnValue(0.5);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('renders with default props', () => {
		render(<LoadingBox data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box).toBeInTheDocument();
		expect(box).toHaveAttribute('data-od-component', 'loading-box');
	});

	it('renders with custom className', () => {
		render(
			<LoadingBox className="custom-class" data-testid="loading-box" />,
		);

		const box = screen.getByTestId('loading-box');
		expect(box).toHaveClass('custom-class');
	});

	it('renders without blinking when blinking is false', () => {
		render(<LoadingBox blinking={false} data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box).toBeInTheDocument();
	});

	it('renders with random width when randomWidth is true', () => {
		render(<LoadingBox randomWidth data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		// With Math.random mocked to 0.5, width should be 50%
		expect(box).toHaveStyle('width: 50%');
	});

	it('renders with full width by default', () => {
		render(<LoadingBox data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box).not.toHaveStyle('width: 50%');
	});

	it('passes through Box props', () => {
		render(<LoadingBox padding="4" margin="2" data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box).toBeInTheDocument();
	});

	it('renders with valid background color', () => {
		render(
			<LoadingBox backgroundColour="gray300" data-testid="loading-box" />,
		);

		const box = screen.getByTestId('loading-box');
		expect(box).toBeInTheDocument();
	});

	it('renders with custom display prop', () => {
		render(<LoadingBox display="inline" data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box).toBeInTheDocument();
	});

	it('renders with custom element type', () => {
		render(<LoadingBox as="div" data-testid="loading-box" />);

		const box = screen.getByTestId('loading-box');
		expect(box.tagName.toLowerCase()).toBe('div');
	});

	it('generates different random widths', () => {
		// Test the random width function indirectly
		vi.spyOn(Math, 'random').mockReturnValue(0.8);

		render(<LoadingBox randomWidth data-testid="random-box" />);

		const box = screen.getByTestId('random-box');
		// With Math.random = 0.8, width should be 56% (0.8 * 20 + 40)
		expect(box).toHaveStyle('width: 56%');
	});

	it('handles min and max random width boundaries', () => {
		// Test with min value (Math.random = 0)
		vi.spyOn(Math, 'random').mockReturnValue(0);

		const { rerender } = render(
			<LoadingBox randomWidth data-testid="min-box" />,
		);

		let box = screen.getByTestId('min-box');
		expect(box).toHaveStyle('width: 40%');

		// Test with max value (Math.random = 1)
		vi.spyOn(Math, 'random').mockReturnValue(1);

		rerender(<LoadingBox randomWidth data-testid="max-box" />);

		box = screen.getByTestId('max-box');
		expect(box).toHaveStyle('width: 60%');
	});
});
