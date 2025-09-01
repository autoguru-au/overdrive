import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { AutoSuggest, AutoSuggestValue } from './AutoSuggest';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

// Mock data for testing
const mockSuggestions: AutoSuggestValue<string>[] = [
	{ text: 'Apple', payload: 'apple' },
	{ text: 'Banana', payload: 'banana' },
	{ text: 'Cherry', payload: 'cherry' },
	{ text: 'Date', payload: 'date' },
];

describe('<AutoSuggest />', () => {
	it('renders with basic props', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
		expect(screen.getByText('Search fruits')).toBeInTheDocument();
	});

	it('renders with initial value', () => {
		const mockOnChange = vi.fn();
		const initialValue = mockSuggestions[0];

		render(
			<AutoSuggest
				value={initialValue}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				name="fruits"
			/>,
		);

		const input = screen.getByDisplayValue('Apple');
		expect(input).toBeInTheDocument();
	});

	it('renders with empty suggestions array', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={[]}
				onChange={mockOnChange}
				placeholder="Search fruits"
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with inline options prop', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				inlineOptions
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with autoWidth prop', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				autoWidth
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with autoFocus prop', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				autoFocus
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with custom item renderer', () => {
		const mockOnChange = vi.fn();

		const customRenderer = ({ value, highlight }) => (
			<div
				data-testid="custom-item"
				className={highlight ? 'highlighted' : ''}
			>
				Custom: {value.text}
			</div>
		);

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				itemRenderer={customRenderer}
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('handles suggestions with skip property', () => {
		const mockOnChange = vi.fn();
		const suggestionsWithSkip: AutoSuggestValue<string>[] = [
			{ text: 'Apple', payload: 'apple' },
			{ text: 'Banana', payload: 'banana', skip: true },
			{ text: 'Cherry', payload: 'cherry' },
		];

		render(
			<AutoSuggest
				value={null}
				suggestions={suggestionsWithSkip}
				onChange={mockOnChange}
				placeholder="Search fruits"
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with disabled state', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				disabled
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with loading state', () => {
		const mockOnChange = vi.fn();

		render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				isLoading
				name="fruits"
			/>,
		);

		const combobox = screen.getByRole('combobox');
		expect(combobox).toBeInTheDocument();
	});

	it('renders with different sizes', () => {
		const mockOnChange = vi.fn();

		// Test small size
		const { rerender } = render(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				size="small"
				name="fruits"
			/>,
		);

		expect(screen.getByRole('combobox')).toBeInTheDocument();

		// Test large size
		rerender(
			<AutoSuggest
				value={null}
				suggestions={mockSuggestions}
				onChange={mockOnChange}
				placeholder="Search fruits"
				size="large"
				name="fruits"
			/>,
		);

		expect(screen.getByRole('combobox')).toBeInTheDocument();
	});
});
