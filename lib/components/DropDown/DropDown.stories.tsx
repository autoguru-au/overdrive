import {
	DownloadIcon,
	SettingsIcon,
	SquareEditOutlineIcon,
	TrashCanOutlineIcon,
} from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import { DropDown } from './DropDown';
import { DropDownOption } from './DropDownOption';

const onClick = action('onClick');

const meta = {
	title: 'Components/Drop Down',
	component: DropDown,
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
	},
};

export const WithOpenMenu: Story = {
	args: {
		...Primary.args,
		isOpen: true,
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

export const WithCustomIcon: Story = {
	args: {
		...Primary.args,
		variant: 'secondary',
		icon: SettingsIcon,
		isOpen: true,
	},
};

export const WithManyOptions: Story = {
	args: {
		...Primary.args,
		isOpen: true,
		children: (
			<>
				{Array.from({ length: 99 }).map((_, index) => (
					<React.Fragment key={index}>
						{index % 2 === 0 ? option1 : option2}
					</React.Fragment>
				))}
			</>
		),
	},
};
