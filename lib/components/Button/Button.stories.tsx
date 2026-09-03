import { UserSquareIcon, ArrowLeftIcon } from '@autoguru/icons';
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
		outlined: false,
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
	outlined,
	variant,
}: ComponentProps<typeof Button>) => (
	<>
		{['medium', 'small'].map((size) => {
			const args = {
				children,
				onClick,
				outlined,
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
							<Icon icon={UserSquareIcon} />
							Login
						</Button>

						<Button {...args} aria-label="login">
							<Icon icon={UserSquareIcon} />
						</Button>

						<Button rounded {...args} aria-label="login">
							<Icon icon={UserSquareIcon} />
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
							<Icon icon={UserSquareIcon} />
							Login
						</Button>

						<Button minimal {...args} aria-label="login">
							<Icon icon={UserSquareIcon} />
						</Button>

						<Button minimal rounded {...args}>
							1
						</Button>

						<Button minimal rounded {...args} aria-label="login">
							<Icon icon={UserSquareIcon} />1
						</Button>
						<Button minimal rounded {...args} aria-label="login">
							<Icon icon={UserSquareIcon} />
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

/**
 * **The one action we want them to take.**
 *
 * Keep it to **two or three per page** at most — past that they stop reading as
 * "the" action and the hierarchy collapses. If two primaries are competing,
 * one of them is usually a Primary Outlined.
 */
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

/**
 * **Other important actions worth promoting, when a stronger primary already
 * owns the page.** Transparent fill, brand border, brand label — it reads as
 * significant without competing with the solid primary next to it.
 *
 * Its colours come from the `color.button.primary.outlined.*` tokens, which a
 * tenant re-brands at runtime through `OverdriveProvider`'s `colorOverrides`.
 * The `minimal` rows below show `minimal` correctly winning over `outlined`.
 */
export const PrimaryOutlinedSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'primary',
		outlined: true,
	},
	render: TemplateMulti,
};

/**
 * **We don't mind either way.** Optional, and not a path we are pushing them
 * down — "Cancel", "Maybe later", "Edit details". Reach for this whenever the
 * action genuinely carries no preference, rather than reaching for a primary out
 * of habit.
 */
export const SecondarySet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'secondary',
	},
	render: TemplateMulti,
};

/**
 * **Not something we want them to do unless they are sure.** Destructive and
 * hard or impossible to walk back — "Delete account", "Cancel booking".
 *
 * Pair it with a confirmation step; the red is a warning, not a safety net. Use
 * it sparingly — a page full of red reads as broken rather than dangerous.
 *
 * This is Figma's **Critical** class. In code the prop value is
 * `variant="danger"`, kept for backwards compatibility.
 *
 * Fills from `color.button.critical.solid.*`. Unlike Primary the fill holds on
 * hover — Figma moves only the elevation — and deepens to the border colour on
 * press.
 */
export const CriticalSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'danger',
	},
	render: TemplateMulti,
};

/**
 * **The same warning, when a Critical Solid would shout.** Transparent fill,
 * critical border, critical label — for a destructive action that is on the page
 * but is not the page's main event, or sitting beside a solid Critical.
 *
 * Same rules as Primary Outlined: no elevation, and the fill washes in on hover
 * and deepens on press. Colours come from `color.button.critical.outlined.*`.
 */
export const CriticalOutlinedSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'danger',
		outlined: true,
	},
	render: TemplateMulti,
};

/**
 * Legacy status set — kept as-is. Not part of the Figma DS-2026 button classes.
 */
export const InformationSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'information',
	},
	render: TemplateMulti,
};

/**
 * Legacy status set — kept as-is. Not part of the Figma DS-2026 button classes.
 */
export const WarningSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'warning',
	},
	render: TemplateMulti,
};

/**
 * Legacy status set — kept as-is. Not part of the Figma DS-2026 button classes.
 */
export const SuccessSet: Story = {
	decorators: PrimarySet.decorators,
	args: {
		variant: 'success',
	},
	render: TemplateMulti,
};
