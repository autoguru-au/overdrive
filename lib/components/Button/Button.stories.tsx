import { AccountBoxIcon, ArrowLeftIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';

import { type ButtonProps } from './Button';

import { Button } from '.';

const meta: Meta<typeof Button> = {
	title: 'Primatives/Buttons',
	component: Button,
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
	args: {
		children: 'Login',
	},
};

/**
 * Example of a the extra small rounded button with a back arrow icon
 */
export const ExtraSmall: Story = {
	args: {
		children: (
			<>
				<Icon icon={ArrowLeftIcon} />
				Change car
			</>
		),
		size: 'xsmall',
		rounded: true,
	},
};

const TemplateMulti = ({
	children,
	onClick,
	variant,
}: ComponentProps<typeof Button>) => (
	<>
		{['medium', 'small'].map((size) => {
			const args = {
				children,
				onClick,
				size: size as ButtonProps['size'],
				variant,
			};

			return (
				<>
					<Box
						textAlign="right"
						style={{ textTransform: 'capitalize' }}
					>
						{size}
					</Box>
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
							<Button {...args} aria-label="login">
								<Icon icon={AccountBoxIcon} />
							</Button>
						</Column>
						<Column>
							<Button rounded {...args} aria-label="login">
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
					<div>
						<Button isFullWidth {...args}>
							Full Width
						</Button>
					</div>
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
							<Button minimal {...args} aria-label="login">
								<Icon icon={AccountBoxIcon} />
							</Button>
						</Column>
						<Column>
							<Button minimal rounded {...args}>
								1
							</Button>
						</Column>
						<Column>
							<Button
								minimal
								rounded
								{...args}
								aria-label="login"
							>
								<Icon icon={AccountBoxIcon} />1
							</Button>
						</Column>
						<Column>
							<Button
								minimal
								rounded
								{...args}
								aria-label="login"
							>
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
				</>
			);
		})}
	</>
);

export const PrimarySet: Story = {
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
		variant: 'primary',
	},
	render: TemplateMulti,
};

export const SecondarySet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'secondary',
	},
	render: TemplateMulti,
};

export const InformationSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'information',
	},
	render: TemplateMulti,
};

export const WarningSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'warning',
	},
	render: TemplateMulti,
};

export const SuccessSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'success',
	},
	render: TemplateMulti,
};
