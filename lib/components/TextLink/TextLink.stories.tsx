import { ArrowRightIcon, CaretRightIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink } from './TextLink';
import * as styles from './TextLink.css';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];
const variantOptions = ['primary', 'secondary', 'critical'];

/** `color.link.*` as the browser reports it, so the state stories can tell the rungs apart. */
const linkColour = {
	primary: 'rgb(24, 133, 111)', // green-800 #18856F
	hover: 'rgb(3, 175, 131)', // green-700 #03AF83
};

const noWrapOptions: Array<ComponentProps<typeof Heading>['noWrap']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];

const meta = {
	title: 'Content/Text Link',
	component: TextLink,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 300 }}>
				<Story />
			</div>
		),
	],
	args: {
		size: '4',
		weight: 'semiBold',
		icon: undefined,
		muted: false,
		noWrap: undefined,
		transform: undefined,
		href: '#link',
		children: 'Hello',
	},
	argTypes: {
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			options: ['Arrow Right', 'Chevron Right'],
			mapping: {
				'Arrow Right': ArrowRightIcon,
				'Chevron Right': CaretRightIcon,
			},
		},
		noWrap: {
			options: noWrapOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		transform: {
			options: transformOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		weight: {
			options: fontWeightOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		variant: {
			options: variantOptions,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
			description:
				'Opts into the linked-text appearance and picks its colour class. Omit for the established appearance.',
		},
	},
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof TextLink>;

/**
 * Linked text, `primary` class — underlined in every state, and the label moves
 * colour with the underline on hover and press.
 */
export const Primary: Story = {
	args: { variant: 'primary', children: 'Button' },
	play: async ({ canvas, step }) => {
		await step('renders the linked-text appearance', async () => {
			await expect(canvas.getAllByRole('link')[0]).toHaveStyle({
				borderBottomStyle: 'solid',
			});
		});

		await step('draws no icon — `With Icon` owns that', async () => {
			await expect(
				canvas.getAllByRole('link')[0].querySelector('svg'),
			).toBeNull();
		});
	},
};

/**
 * Linked text, `secondary` class — the label holds its colour and only the
 * underline moves on hover and press.
 */
export const Secondary: Story = {
	args: { ...Primary.args, variant: 'secondary' },
};

/** Linked text, `critical` class — for destructive navigation. */
export const Critical: Story = {
	args: { ...Primary.args, variant: 'critical' },
};

/**
 * Unavailable and not focusable. `disabled` is a real prop, so this story needs
 * nothing beyond an arg.
 */
export const Disabled: Story = {
	args: { ...Primary.args, disabled: true },
	play: async ({ canvas, step }) => {
		await step('is marked unavailable', async () => {
			const link = canvas.getAllByRole('link')[0];

			await expect(link).toHaveAttribute('aria-disabled', 'true');
			await expect(link).toHaveAttribute('tabindex', '-1');
		});
	},
};

/**
 * The hover state, held open. `:hover` cannot be set from an arg, so the story
 * sets `data-hover` — the attribute the shared `selectors.hover` pattern
 * already matches, the same way `Radio` and `CheckBox` hold their hover state.
 */
export const Hover: Story = {
	args: Primary.args,
	render: (args) => <TextLink {...args} data-hover />,
	play: async ({ canvas, step }) => {
		await step('is not the resting colour', async () => {
			await expect(
				getComputedStyle(canvas.getAllByRole('link')[0])
					.borderBottomColor,
			).not.toBe(linkColour.primary);
		});
	},
};

/**
 * The pressed state, held open. `:active` cannot be set from an arg either, so
 * the story replays the class's own `:active` declarations through
 * `storyForcePressed` — driven off the same colour map the recipe uses, so the
 * forced state cannot drift from the real one.
 */
export const Pressed: Story = {
	args: Primary.args,
	parameters: {
		// `storyForcePressed` is a story-only class and its name is a build
		// hash, so the generated snippet is neither stable nor copy-pasteable.
		docs: {
			source: {
				code: '<TextLink href="#link" variant="primary">Button</TextLink>',
			},
		},
	},
	render: (args) => (
		<TextLink {...args} className={styles.storyForcePressed} />
	),
	play: async ({ canvas, step }) => {
		await step('is neither the resting nor the hover colour', async () => {
			const colour = getComputedStyle(
				canvas.getAllByRole('link')[0],
			).borderBottomColor;

			await expect(colour).not.toBe(linkColour.primary);
			await expect(colour).not.toBe(linkColour.hover);
		});
	},
};

/**
 * The established appearance draws its underline on focus as well as on hover,
 * so a keyboard user gets the same non-colour cue a pointer user does.
 * `:focus-visible` cannot be set from an arg, so the story sets
 * `data-focus-visible` — the attribute the shared `selectors.focusVisible`
 * pattern already matches, the same way `Hover` sets `data-hover`.
 */
export const FocusUnderline: Story = {
	args: { variant: undefined, children: 'supported vehicles' },
	render: (args) => (
		<>
			<TextLink {...args} />
			<TextLink {...args} data-focus-visible />
		</>
	),
	play: async ({ canvas, step }) => {
		await step('rests without an underline', async () => {
			await expect(
				getComputedStyle(canvas.getAllByRole('link')[0]).boxShadow,
			).not.toContain('-2px');
		});

		await step('draws the underline on focus', async () => {
			await expect(
				getComputedStyle(canvas.getAllByRole('link')[1]).boxShadow,
			).toContain('-2px');
		});
	},
};

export const InsideParagraph: Story = {
	decorators: [
		(Story) => (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
				<Story /> autem consectetur consequuntur eius fugiat illo ipsum
				nobis numquam, officiis placeat quia, quidem reprehenderit rerum
				temporibus veniam vero.
			</Text>
		),
	],
};

export const WithIcon: Story = {
	args: {
		icon: CaretRightIcon,
	},
	play: async ({ canvasElement, step }) => {
		const user = userEvent.setup();
		const canvas = within(canvasElement);
		const link = canvas.getAllByRole('link')[0];

		await step('<TextLink /> has SVG icon', async () => {
			await expect(link.querySelector('svg')).toBeInTheDocument();
		});

		await step(
			'the default appearance uses color.link.primary',
			async () => {
				// green-800 #18856F. Asserted from the emitted CSS so a regression
				// back to the legacy `typography.colour.link` green fails here.
				await expect(
					getComputedStyle(link.firstElementChild!).color,
				).toBe(linkColour.primary);
			},
		);

		await step('<TextLink /> is interactive', async () => {
			await expect(link).toHaveStyle({ cursor: 'pointer' });

			// Focusability is asserted as tab-order membership plus a direct
			// `focus()`, not by pressing Tab. A capture environment that renders
			// the story in a frame without OS focus never moves focus on a
			// keypress, so `{Tab}` would fail on where the story is running
			// rather than on the component.
			await expect(link).not.toHaveAttribute('tabindex', '-1');
			link.focus();
			await expect(link).toHaveFocus();

			await user.hover(link);
		});
	},
};

export const WithIconInsideParagraph: Story = {
	args: {
		icon: ArrowRightIcon,
	},
	decorators: InsideParagraph.decorators,
};
