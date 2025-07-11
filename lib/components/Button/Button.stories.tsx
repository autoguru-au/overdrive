import { AccountBoxIcon, ArrowLeftIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { fn } from 'storybook/test';

import { Box } from '../Box/Box';
import { FlexInline } from '../Flex/FlexInline';
import { Icon } from '../Icon/Icon';

import { Button, type ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Primitives/Buttons',
	tags: ['polymorphic'],
	component: Button,
	args: {
		as: 'button',
		variant: 'secondary',
		size: 'medium',
		minimal: false,
		rounded: false,
		isFullWidth: false,
		isLoading: false,
		disabled: false,
		withDoubleClicks: false,
		children: undefined,
		localeText: undefined,
		testId: 'storybook-button',
		onClick: fn(),
	},
	argTypes: {
		as: {
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
					<FlexInline gap="3">
						<Button {...args}>Login</Button>
						<Button {...args}>
							<Icon icon={AccountBoxIcon} />
							Login
						</Button>

						<Button {...args} aria-label="login">
							<Icon icon={AccountBoxIcon} />
						</Button>

						<Button rounded {...args} aria-label="login">
							<Icon icon={AccountBoxIcon} />
						</Button>

						<Button isLoading {...args}>
							A very very very long button Label
						</Button>

						<Button disabled {...args}>
							Login
						</Button>
					</FlexInline>
					<div>
						<Button isFullWidth {...args}>
							Full Width
						</Button>
					</div>
					<FlexInline gap="3">
						<Button minimal {...args}>
							Login
						</Button>

						<Button minimal {...args}>
							<Icon icon={AccountBoxIcon} />
							Login
						</Button>

						<Button minimal {...args} aria-label="login">
							<Icon icon={AccountBoxIcon} />
						</Button>

						<Button minimal rounded {...args}>
							1
						</Button>

						<Button minimal rounded {...args} aria-label="login">
							<Icon icon={AccountBoxIcon} />1
						</Button>
						<Button minimal rounded {...args} aria-label="login">
							<Icon icon={AccountBoxIcon} />
						</Button>

						<Button minimal isLoading {...args}>
							Login
						</Button>

						<Button minimal disabled {...args}>
							Login
						</Button>
					</FlexInline>
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
