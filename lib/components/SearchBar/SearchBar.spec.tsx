import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
	it('should render with placeholder text', () => {
		render(<SearchBar placeholder="Search for items" />);
		
		const input = screen.getByRole('searchbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('placeholder', 'Search for items');
	});

	it('should call onChange when user types', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		
		render(<SearchBar placeholder="Search" onChange={onChange} />);
		
		const input = screen.getByRole('searchbox');
		await user.type(input, 'test query');
		
		expect(onChange).toHaveBeenCalledWith('test query');
	});
});