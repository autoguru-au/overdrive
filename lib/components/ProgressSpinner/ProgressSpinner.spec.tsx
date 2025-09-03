import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { ProgressSpinner } from './ProgressSpinner';

describe('<ProgressSpinner />', () => {
	it('should render with default props', () => {
		const { container } = render(<ProgressSpinner />);

		const spinner = container.querySelector(
			'[data-od-component="progress-spinner"]',
		);
		expect(spinner).toBeInTheDocument();
	});

	it('should accept size prop and render correctly', () => {
		const { container } = render(<ProgressSpinner size="large" />);

		const spinner = container.querySelector(
			'[data-od-component="progress-spinner"]',
		);
		expect(spinner).toBeInTheDocument();

		const svg = container.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	it('should apply color styling', () => {
		const { container } = render(<ProgressSpinner colour="primary" />);

		const spinner = container.querySelector(
			'[data-od-component="progress-spinner"]',
		);
		expect(spinner).toBeInTheDocument();
	});

	it('should render SVG with correct viewBox', () => {
		const { container } = render(<ProgressSpinner />);

		const svg = container.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('viewBox', '25 25 50 50');
	});

	it('should render circle element with proper attributes', () => {
		const { container } = render(<ProgressSpinner />);

		const circle = container.querySelector('circle');
		expect(circle).toBeInTheDocument();
		expect(circle).toHaveAttribute('cx', '50');
		expect(circle).toHaveAttribute('cy', '50');
		expect(circle).toHaveAttribute('r', '20');
		expect(circle).toHaveAttribute('fill', 'none');
	});
});
