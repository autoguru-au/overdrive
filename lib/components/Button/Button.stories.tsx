import { AccountBoxIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';

import { Button } from '.';

const onClick = action('onClick');

const meta = {
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
	argTypes: {
		is: {
			options: ['button', 'a'],
		},
	},
} satisfies Meta<typeof Button>;

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
		onClick,
	},
};

const TemplateMulti = (args: ComponentProps<typeof Button>) => (
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

export const Primary: Story = {
	args: {
		size: 'medium',
		variant: 'primary',
		onClick,
	},
	render: TemplateMulti,
};

export const PrimarySmall: Story = {
	args: {
		size: 'small',
		variant: 'primary',
		onClick,
	},
	render: TemplateMulti,
};

export const Secondary: Story = {
	args: {
		size: 'medium',
		variant: 'secondary',
		onClick,
	},
	render: TemplateMulti,
};

export const SecondarySmall: Story = {
	args: {
		size: 'small',
		variant: 'secondary',
		onClick,
	},
	render: TemplateMulti,
};

export const Brand: Story = {
	args: {
		size: 'medium',
		variant: 'brand',
		onClick,
	},
	render: TemplateMulti,
};

export const Information: Story = {
	args: {
		size: 'medium',
		variant: 'information',
		onClick,
	},
	render: TemplateMulti,
};

export const Warning: Story = {
	args: {
		size: 'medium',
		variant: 'warning',
		onClick,
	},
	render: TemplateMulti,
};

export const Success: Story = {
	args: {
		size: 'medium',
		variant: 'success',
		onClick,
	},
	render: TemplateMulti,
};
