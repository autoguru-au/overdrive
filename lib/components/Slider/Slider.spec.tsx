import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

import { Slider } from '.';

describe('<Slider />', () => {
	it('should handle value changes and display values correctly', async () => {
		const onChange = vi.fn();
		const user = userEvent.setup();

		render(
			<Slider
				label="Test Slider"
				minValue={0}
				maxValue={100}
				step={10}
				value={50}
				unitText="units"
				onChange={onChange}
			/>,
		);

		const slider = screen.getByRole('slider', { name: /test slider/i });
		const valueDisplay = screen.getByText('50units');

		// Verify initial state
		expect(slider).toHaveValue('50');
		expect(valueDisplay).toBeInTheDocument();

		// Test keyboard interaction
		await user.click(slider);
		await user.keyboard('{ArrowRight}');

		expect(onChange).toHaveBeenCalledWith(60);
	});

	it('should handle disabled state correctly', async () => {
		const { rerender } = render(
			<Slider
				label="Test Slider"
				minValue={0}
				maxValue={50}
				step={5}
				defaultValue={25}
			/>,
		);

		// Test enabled state
		const slider = screen.getByRole('slider', { name: /test slider/i });
		expect(slider).not.toBeDisabled();
		expect(slider).toHaveValue('25');

		// Test disabled state
		rerender(
			<Slider
				label="Test Slider"
				minValue={0}
				maxValue={50}
				step={5}
				defaultValue={25}
				isDisabled
			/>,
		);

		expect(slider).toBeDisabled();
		expect(slider).toHaveValue('25');
	});
});
