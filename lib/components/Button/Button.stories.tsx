import { AccountBoxIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { type ComponentProps } from 'react';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';

import { Button } from '.';

const meta: Meta<typeof Button> = {
	title: 'Primatives/Buttons',
	component: Button,
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
		variant: 'secondary',
		size: 'medium',
		minimal: false,
		rounded: false,
		children: undefined,
		isFullWidth: false,
		isLoading: false,
		disabled: false,
		is: undefined,
		onClick: fn(),
		withDoubleClicks: false,
		testId: 'storybook-button',
	},
	argTypes: {
		is: {
			options: ['button', 'a'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Standard: Story = {
	decorators: [
		(Story) => (
			<div>
				<Story />
			</div>
		),
	],
	args: {
		children: 'Login',
	},
};

const TemplateMulti = ({
	children,
	onClick,
	size,
	variant,
}: ComponentProps<typeof Button>) => {
	const args = {
		children,
		onClick,
		size,
		variant,
	};

	return (
		<>
			<Columns space="3">
				<Column>
					<Button {...args}>Login</Button>
				</Column>
				<Column>
					<Button {...args}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
				</Column>
				<Column>
					<Button {...args}>
						<Icon icon={AccountBoxIcon} />
					</Button>
				</Column>
				<Column>
					<Button isLoading {...args}>
						A very very very long button Label
					</Button>
				</Column>
				<Column>
					<Button disabled {...args}>
						Login
					</Button>
				</Column>
			</Columns>
			<Columns space="3">
				<Column>
					<Button rounded {...args}>
						Login
					</Button>
				</Column>
				<Column>
					<Button rounded {...args}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
				</Column>
				<Column>
					<Button rounded {...args}>
						<Icon icon={AccountBoxIcon} />
					</Button>
				</Column>
				<Column>
					<Button rounded isLoading {...args}>
						Login
					</Button>
				</Column>
				<Column>
					<Button rounded disabled {...args}>
						Login
					</Button>
				</Column>
			</Columns>
			<Columns space="3">
				<Column>
					<Button minimal {...args}>
						Login
					</Button>
				</Column>
				<Column>
					<Button minimal {...args}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
				</Column>
				<Column>
					<Button minimal {...args}>
						<Icon icon={AccountBoxIcon} />
					</Button>
				</Column>
				<Column>
					<Button minimal isLoading {...args}>
						Login
					</Button>
				</Column>
				<Column>
					<Button minimal disabled {...args}>
						Login
					</Button>
				</Column>
			</Columns>
			<Columns space="3">
				<Column>
					<Button minimal rounded {...args}>
						1
					</Button>
				</Column>
				<Column>
					<Button minimal rounded {...args}>
						<Icon icon={AccountBoxIcon} />1
					</Button>
				</Column>
				<Column>
					<Button minimal rounded {...args}>
						<Icon icon={AccountBoxIcon} />
					</Button>
				</Column>
				<Column>
					<Button minimal rounded isLoading {...args}>
						1
					</Button>
				</Column>
				<Column>
					<Button minimal rounded disabled {...args}>
						1
					</Button>
				</Column>
			</Columns>
			<Button isFullWidth {...args}>
				Full Width
			</Button>
		</>
	);
};

export const PrimaryMedium: Story = {
	args: {
		size: 'medium',
		variant: 'primary',
	},
	render: TemplateMulti,
};

export const PrimarySmall: Story = {
	args: {
		size: 'small',
		variant: 'primary',
	},
	render: TemplateMulti,
};

export const SecondaryMedium: Story = {
	args: {
		size: 'medium',
		variant: 'secondary',
	},
	render: TemplateMulti,
};

export const SecondarySmall: Story = {
	args: {
		size: 'small',
		variant: 'secondary',
	},
	render: TemplateMulti,
};

export const BrandMedium: Story = {
	args: {
		size: 'medium',
		variant: 'brand',
	},
	render: TemplateMulti,
};

export const InformationMedium: Story = {
	args: {
		size: 'medium',
		variant: 'information',
	},
	render: TemplateMulti,
};

export const WarningMedium: Story = {
	args: {
		size: 'medium',
		variant: 'warning',
	},
	render: TemplateMulti,
};

export const SuccessMedium: Story = {
	args: {
		size: 'medium',
		variant: 'success',
	},
	render: TemplateMulti,
};
