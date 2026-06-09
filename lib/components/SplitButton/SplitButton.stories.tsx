import { CloudUploadOutlineIcon, ImportIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps, useState } from 'react';
import { action } from 'storybook/actions';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { DropDownOption } from '../DropDown/DropDownOption';

import { SplitButton } from './SplitButton';

const onClick = action('onClick');
const onOpenChange = action('onOpenChange');

const meta = {
	title: 'Components/Split Button',
	component: SplitButton,
	tags: ['new'],
	args: {
		label: 'Bulk upload',
		variant: 'secondary',
		size: 'medium',
		children: undefined,
		onClick: fn(onClick),
		onOpenChange: fn(onOpenChange),
	},
	argTypes: {
		children: { control: false },
		size: {
			options: ['small', 'medium'],
			control: { type: 'select' },
		},
		variant: {
			options: [
				'primary',
				'secondary',
				'danger',
				'information',
				'warning',
			] as ComponentProps<typeof Button>['variant'][],
			control: { type: 'select' },
		},
	},
	render: (args) => (
		<Box
			style={{ height: '100vh', width: '100vw', maxHeight: '350px' }}
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<SplitButton {...args} />
		</Box>
	),
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
	<>
		<DropDownOption label="Single upload" icon={CloudUploadOutlineIcon} />
		<DropDownOption label="Import from CSV" icon={ImportIcon} />
		<DropDownOption disabled label="Import from API" />
	</>
);

export const Standard: Story = {
	args: {
		children: options,
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const primary = canvas.getAllByRole('button', {
			name: /bulk upload/i,
		})[0];
		const trigger = canvas.getAllByRole('button', {
			name: /more options/i,
		})[0];

		await step('Primary action does not open the menu', async () => {
			await userEvent.click(primary);
			await expect(args.onClick).toHaveBeenCalled();
			await expect(args.onOpenChange).not.toHaveBeenCalled();
		});

		await step('Trigger opens the menu', async () => {
			await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
			await userEvent.click(trigger);
			await expect(args.onOpenChange).toHaveBeenCalledWith(true);
			await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		});
	},
};

export const Primary: Story = {
	args: {
		children: options,
		variant: 'primary',
	},
};

/**
 * Example with the menu initially open in controlled mode.
 */
export const WithOpenMenu: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(true);
		return (
			<Box
				style={{ height: '100vh', width: '100vw', maxHeight: '350px' }}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<SplitButton
					{...args}
					isOpen={isOpen}
					onOpenChange={(open) => {
						onOpenChange(open);
						setIsOpen(open);
					}}
				>
					{options}
				</SplitButton>
			</Box>
		);
	},
	args: {
		variant: 'secondary',
	},
};
