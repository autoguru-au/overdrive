import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AutoSuggest, type AutoSuggestValue } from './AutoSuggest';

const mockSuggestions: AutoSuggestValue<{ id: string; category: string }>[] = [
	{
		text: 'Apple',
		payload: { id: '1', category: 'fruit' },
	},
	{
		text: 'Banana',
		payload: { id: '2', category: 'fruit' },
	},
	{
		text: 'Carrot',
		payload: { id: '3', category: 'vegetable' },
	},
];

const defaultProps = {
	label: 'Search items',
	placeholder: 'Type to search...',
	suggestions: mockSuggestions,
	value: null,
	name: 'test-autosuggest',
};

describe('<AutoSuggest />', () => {
	beforeEach(() => {
		// Mock window.matchMedia
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(), // deprecated
				removeListener: vi.fn(), // deprecated
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			})),
		});
	});

	it('renders input field with label and placeholder', () => {
		render(<AutoSuggest {...defaultProps} />);

		// AutoSuggest uses aria-label set to placeholder text
		const input = screen.getByRole('combobox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-label', 'Type to search...');

		// The actual input element has the label prop passed through
		const textInput = screen.getByDisplayValue('');
		expect(textInput).toHaveAttribute('label', 'Search items');
	});

	it('shows suggestions when typing in input', async () => {
		const user = userEvent.setup();

		render(<AutoSuggest {...defaultProps} inlineOptions />);

		// Get the actual text input element
		const textInput = screen.getByDisplayValue('');
		await user.click(textInput);
		await user.type(textInput, 'a');

		// Wait for suggestions to appear in inline mode
		await waitFor(() => {
			expect(screen.getByText('Apple')).toBeInTheDocument();
			expect(screen.getByText('Banana')).toBeInTheDocument();
		});
	});

	it('filters suggestions based on input text', async () => {
		const user = userEvent.setup();

		// Filter suggestions to only show matching ones
		const filteredSuggestions = mockSuggestions.filter((s) =>
			s.text.toLowerCase().includes('car'),
		);

		render(
			<AutoSuggest
				{...defaultProps}
				suggestions={filteredSuggestions}
				inlineOptions
			/>,
		);

		const textInput = screen.getByDisplayValue('');
		await user.click(textInput);
		await user.type(textInput, 'car');

		await waitFor(() => {
			expect(screen.getByText('Carrot')).toBeInTheDocument();
			expect(screen.queryByText('Apple')).not.toBeInTheDocument();
			expect(screen.queryByText('Banana')).not.toBeInTheDocument();
		});
	});

	it('handles suggestion selection via mouse click', async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(
			<AutoSuggest
				{...defaultProps}
				onChange={handleChange}
				inlineOptions
			/>,
		);

		const textInput = screen.getByDisplayValue('');
		await user.click(textInput);
		await user.type(textInput, 'a');

		await waitFor(() => {
			expect(screen.getByText('Apple')).toBeInTheDocument();
		});

		await user.click(screen.getByText('Apple'));

		expect(handleChange).toHaveBeenCalledWith(
			expect.objectContaining({
				text: 'Apple',
				payload: { id: '1', category: 'fruit' },
			}),
		);
	});

	it('supports keyboard navigation through suggestions', async () => {
		const user = userEvent.setup();
		const handleChange = vi.fn();

		render(
			<AutoSuggest
				{...defaultProps}
				onChange={handleChange}
				inlineOptions
			/>,
		);

		const textInput = screen.getByDisplayValue('');
		await user.click(textInput);
		await user.type(textInput, 'a');

		// Wait for suggestions to appear
		await waitFor(() => {
			expect(screen.getByText('Apple')).toBeInTheDocument();
		});

		// Navigate with arrow keys
		await user.keyboard('{ArrowDown}');
		await user.keyboard('{ArrowDown}');
		await user.keyboard('{ArrowUp}');

		// Enter to select
		await user.keyboard('{Enter}');

		expect(handleChange).toHaveBeenCalledWith(
			expect.objectContaining({
				text: 'Apple',
				payload: { id: '1', category: 'fruit' },
			}),
		);
	});
});
