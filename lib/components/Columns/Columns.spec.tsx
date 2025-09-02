import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Columns } from './Columns';

describe('<Columns />', () => {
	it('should render children in column layout', () => {
		render(
			<Columns testId="columns-container">
				<div>Column 1</div>
				<div>Column 2</div>
			</Columns>
		);
		
		const container = screen.getByTestId('columns-container');
		expect(container).toBeInTheDocument();
		expect(screen.getByText('Column 1')).toBeInTheDocument();
		expect(screen.getByText('Column 2')).toBeInTheDocument();
	});

	it('should accept columns prop to define column count', () => {
		render(
			<Columns columns={3} testId="three-columns">
				<div>A</div>
				<div>B</div>
				<div>C</div>
			</Columns>
		);
		
		const container = screen.getByTestId('three-columns');
		expect(container).toBeInTheDocument();
		expect(screen.getByText('A')).toBeInTheDocument();
		expect(screen.getByText('B')).toBeInTheDocument();
		expect(screen.getByText('C')).toBeInTheDocument();
	});

	it('should support space prop for gap between columns', () => {
		render(
			<Columns space="4" testId="spaced-columns">
				<div>First</div>
				<div>Second</div>
			</Columns>
		);
		
		const container = screen.getByTestId('spaced-columns');
		expect(container).toBeInTheDocument();
		expect(screen.getByText('First')).toBeInTheDocument();
		expect(screen.getByText('Second')).toBeInTheDocument();
	});

	it('should handle responsive space values', () => {
		render(
			<Columns space={['2', '4']} testId="responsive-columns">
				<div>Item 1</div>
				<div>Item 2</div>
			</Columns>
		);
		
		const container = screen.getByTestId('responsive-columns');
		expect(container).toBeInTheDocument();
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		expect(screen.getByText('Item 2')).toBeInTheDocument();
	});
});