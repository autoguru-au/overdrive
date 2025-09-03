import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { OptionList } from './OptionList';
import { OptionListItem, ItemSplitLabel } from './OptionListItem';

describe('<OptionList />', () => {
	it('renders with label and checkbox items', () => {
		render(
			<OptionList label="Select options">
				<OptionListItem value="option1">Option 1</OptionListItem>
				<OptionListItem value="option2">Option 2</OptionListItem>
				<OptionListItem value="option3">Option 3</OptionListItem>
			</OptionList>,
		);

		expect(screen.getByLabelText('Select options')).toBeInTheDocument();
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
		expect(screen.getByText('Option 3')).toBeInTheDocument();
	});

	it('supports controlled selection', async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(
			<OptionList
				label="Controlled options"
				value={['option1']}
				onChange={handleChange}
			>
				<OptionListItem value="option1">Option 1</OptionListItem>
				<OptionListItem value="option2">Option 2</OptionListItem>
			</OptionList>,
		);

		// Option 1 should be checked initially
		const option1 = screen.getByLabelText('Option 1');
		expect(option1).toBeChecked();

		// Click option 2
		const option2 = screen.getByLabelText('Option 2');
		await user.click(option2);

		expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
	});

	it('supports uncontrolled selection with defaultValue', () => {
		render(
			<OptionList label="Default selection" defaultValue={['option2']}>
				<OptionListItem value="option1">Option 1</OptionListItem>
				<OptionListItem value="option2">Option 2</OptionListItem>
			</OptionList>,
		);

		const option1 = screen.getByLabelText('Option 1');
		const option2 = screen.getByLabelText('Option 2');

		expect(option1).not.toBeChecked();
		expect(option2).toBeChecked();
	});

	it('renders with description text', () => {
		render(
			<OptionList
				label="Options with description"
				description="Select one or more options"
			>
				<OptionListItem value="option1">Option 1</OptionListItem>
			</OptionList>,
		);

		expect(
			screen.getByText('Select one or more options'),
		).toBeInTheDocument();
	});

	it('supports ItemSplitLabel for complex layouts', () => {
		render(
			<OptionList label="Split label options">
				<OptionListItem value="premium">
					<ItemSplitLabel content={['Premium Plan', '$29/month']} />
				</OptionListItem>
				<OptionListItem value="basic">
					<ItemSplitLabel>
						<span>Basic Plan</span>
						<span>$9/month</span>
					</ItemSplitLabel>
				</OptionListItem>
			</OptionList>,
		);

		expect(screen.getByText('Premium Plan')).toBeInTheDocument();
		expect(screen.getByText('$29/month')).toBeInTheDocument();
		expect(screen.getByText('Basic Plan')).toBeInTheDocument();
		expect(screen.getByText('$9/month')).toBeInTheDocument();
	});
});
