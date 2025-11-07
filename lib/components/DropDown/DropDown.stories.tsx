import {
	DownloadIcon,
	SettingsIcon,
	SquareEditOutlineIcon,
	TrashCanOutlineIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps, useState } from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import { DropDown } from './DropDown';
import { DropDownOption } from './DropDownOption';

const onClick = action('onClick');
const onOpenChange = action('onOpenChange');

const meta = {
	title: 'Components/Drop Down',
	component: DropDown,
	tags: ['updated'],
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'grid',
					gridGap: '12px',
					gridAutoFlow: 'row dense',
				}}
			>
				<Story />
			</div>
		),
	],
	args: {
		label: 'Attachment',
		children: undefined,
		size: 'medium',
		variant: 'primary',
	},
	argTypes: {
		children: { control: false },
		size: {
			options: ['small', 'medium'],
			control: {
				type: 'select',
			},
		},
		variant: {
			options: [
				'primary',
				'secondary',
				'danger',
				'information',
				'warning',
				'danger',
			] as ComponentProps<typeof Button>['variant'][],
			control: {
				type: 'select',
			},
		},
	},
	render: (args) => (
		<Box
			style={{
				height: '100vh',
				width: '100vw',
				maxHeight: '350px',
			}}
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<DropDown {...args} />
		</Box>
	),
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const option1 = <DropDownOption label="Download" icon={DownloadIcon} />;
const option2 = <DropDownOption label="Delete" icon={TrashCanOutlineIcon} />;
const optionDisabled = (
	<DropDownOption disabled label="Edit" icon={SquareEditOutlineIcon} />
);

export const Primary: Story = {
	args: {
		label: 'Attachment',
		children: (
			<>
				{option1}
				{option1}
				{optionDisabled}
			</>
		),
		onClick,
		onOpenChange,
	},
};

/**
 * Example with the dropdown initially open in controlled mode
 */
export const WithOpenMenu: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(true);
		return (
			<Box
				style={{
					height: '100vh',
					width: '100vw',
					maxHeight: '350px',
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<DropDown
					{...args}
					isOpen={isOpen}
					onOpenChange={(open) => {
						onOpenChange(open);
						setIsOpen(open);
					}}
				>
					{option1}
					{option1}
					{optionDisabled}
				</DropDown>
			</Box>
		);
	},
	args: {
		label: 'Attachment',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		variant: 'secondary',
	},
};

export const MinimalPrimary: Story = {
	args: {
		...Primary.args,
		variant: 'primary',
		minimal: true,
	},
};

/**
 * Example with custom icon in controlled mode
 */
export const WithCustomIcon: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(true);
		return (
			<Box
				style={{
					height: '100vh',
					width: '100vw',
					maxHeight: '350px',
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<DropDown
					{...args}
					isOpen={isOpen}
					onOpenChange={(open) => {
						onOpenChange(open);
						setIsOpen(open);
					}}
				>
					{option1}
					{option1}
					{optionDisabled}
				</DropDown>
			</Box>
		);
	},
	args: {
		label: 'Attachment',
		variant: 'secondary',
		icon: SettingsIcon,
	},
};

/**
 * Example with many options in controlled mode
 */
export const WithManyOptions: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(true);
		return (
			<Box
				style={{
					height: '100vh',
					width: '100vw',
					maxHeight: '350px',
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<DropDown
					{...args}
					isOpen={isOpen}
					onOpenChange={(open) => {
						onOpenChange(open);
						setIsOpen(open);
					}}
				>
					{Array.from({ length: 99 }).map((_, index) => (
						<React.Fragment key={index}>
							{index % 2 === 0 ? option1 : option2}
						</React.Fragment>
					))}
				</DropDown>
			</Box>
		);
	},
	args: {
		label: 'Attachment',
		variant: 'primary',
	},
};

/**
 * Controlled example demonstrating the new onOpenChange callback
 */
export const Controlled: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<Box
				style={{
					height: '100vh',
					width: '100vw',
					maxHeight: '350px',
				}}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<DropDown
					{...args}
					isOpen={isOpen}
					onOpenChange={(open) => {
						onOpenChange(open);
						setIsOpen(open);
					}}
				>
					{option1}
					{option2}
					{optionDisabled}
				</DropDown>
			</Box>
		);
	},
	args: {
		label: 'Controlled Menu',
		variant: 'primary',
	},
};
