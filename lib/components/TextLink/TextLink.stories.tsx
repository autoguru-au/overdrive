import { ArrowRightIcon, CaretRightIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink, type TextLinkProps } from './TextLink';
import * as styles from './TextLink.css';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];
const variantOptions = ['primary', 'secondary', 'critical'];

/**
 * `disabled` is a real prop; `hover` and `pressed` are CSS states a static
 * story cannot enter on its own. Exposing all three through one control lets a
 * reviewer step a single link through all four states.
 */
const stateProps = {
	default: {},
	disabled: { disabled: true },
	hover: { 'data-hover': true },
	pressed: { className: styles.storyForcePressed },
} satisfies Record<string, Partial<TextLinkProps> & { 'data-hover'?: boolean }>;

type LinkState = keyof typeof stateProps;

interface StoryArgs extends TextLinkProps {
	/** Story-only: which visual state to draw the link in. */
	state?: LinkState;
}

const noWrapOptions: Array<ComponentProps<typeof Heading>['noWrap']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];

const renderWithState = ({ state = 'default', children, ...args }: StoryArgs) => (
	<TextLink {...args} {...stateProps[state]}>
		{children}
	</TextLink>
);

const meta = {
	title: 'Content/Text Link',
	component: TextLink,
	// Meta-level so the `state` control drives every story, not just the three
	// colour-class ones.
	render: renderWithState,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 300 }}>
				<Story />
			</div>
		),
	],
	args: {
		state: 'default',
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
		state: {
			options: Object.keys(stateProps),
			control: {
				type: 'inline-radio',
			},
			description:
				'Story-only. Draws the link in one of its four visual states.',
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
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>;

/**
 * Linked text, `primary` class — underlined in every state, and the
 * label moves colour with the underline on hover and press.
 */
export const Primary: Story = {
	args: { variant: 'primary', children: 'Button' },
	play: async ({ canvas, step }) => {
		await step('renders the linked-text appearance', async () => {
			await expect(canvas.getByRole('link')).toHaveStyle({
				borderBottomStyle: 'solid',
			});
		});

		await step('draws no icon — `With Icon` owns that', async () => {
			await expect(
				canvas.getByRole('link').querySelector('svg'),
			).toBeNull();
		});
	},
};

/**
 * Linked text, `secondary` class — the label holds its colour and only
 * the underline moves on hover and press.
 */
export const Secondary: Story = {
	args: { variant: 'secondary', children: 'Button' },
	play: Primary.play,
};

/**
 * Linked text, `critical` class — for destructive navigation.
 */
export const Critical: Story = {
	args: { variant: 'critical', children: 'Button' },
	play: Primary.play,
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

		await step('the default appearance uses color.link.primary', async () => {
			// green-800 #18856F. Asserted from the emitted CSS so a regression
			// back to the legacy `typography.colour.link` green fails here.
			await expect(
				getComputedStyle(link.firstElementChild!).color,
			).toBe('rgb(24, 133, 111)');
		});

		await step('<TextLink /> is interactive', async () => {
			await expect(link).toHaveStyle({ cursor: 'pointer' });
			await user.keyboard('{Tab}');
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
