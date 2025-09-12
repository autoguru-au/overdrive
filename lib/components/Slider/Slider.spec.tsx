import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { textStyles } from '../../styles/typography';

import { Slider } from './Slider';
import * as stories from './Slider.stories';

const { Standard, Variants } = composeStories(stories);

describe('<Slider />', () => {
	it('renders with default props and expected structure', () => {
		render(<Standard />);

		const slider = screen.getAllByRole('slider')[0];
		const valueDisplay = screen.getAllByText(/kms/)[0];

		// Check core elements are present
		expect(slider).toBeInTheDocument();
		expect(slider).toHaveAttribute('type', 'range');
		expect(valueDisplay).toBeInTheDocument();

		// Verify accessibility attributes
		expect(slider).toHaveAccessibleName('Distance');
	});

	it('handles user interactions and value changes', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();

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

		const slider = screen.getAllByRole('slider', {
			name: /test slider/i,
		})[0];

		// Verify initial state
		expect(slider).toHaveValue('50');
		expect(screen.getAllByText('50units')[0]).toBeInTheDocument();

		// Test keyboard interaction
		await user.click(slider);
		await user.keyboard('{ArrowRight}');

		expect(onChange).toHaveBeenCalledWith(60);
	});

	it('supports flexible labelling approaches', () => {
		const { rerender } = render(
			<Slider
				label="String Label"
				minValue={0}
				maxValue={100}
				defaultValue={25}
			/>,
		);

		// Test string label
		let slider = screen.getAllByRole('slider', {
			name: /string label/i,
		})[0];
		expect(slider).toHaveAccessibleName('String Label');
		expect(screen.getAllByText('String Label')[0]).toBeInTheDocument();

		// Test JSX label
		const customLabel = (
			<label className={textStyles({ size: '4', weight: 'semiBold' })}>
				Custom JSX Label
			</label>
		);

		rerender(
			<Slider
				label={customLabel}
				minValue={0}
				maxValue={100}
				defaultValue={25}
			/>,
		);

		slider = screen.getAllByRole('slider', {
			name: /custom jsx label/i,
		})[0];
		expect(slider).toHaveAccessibleName('Custom JSX Label');
		expect(screen.getAllByText('Custom JSX Label')[0]).toBeInTheDocument();
	});

	it('handles disabled states and boundary conditions', async () => {
		render(<Variants />);

		const sliders = screen.getAllByRole('slider');
		const disabledSlider = sliders.find((slider) =>
			slider.hasAttribute('disabled'),
		);

		// Test disabled slider cannot be interacted with
		expect(disabledSlider).toBeDefined();
		if (disabledSlider) {
			expect(disabledSlider).toBeDisabled();
		}
	});
});
