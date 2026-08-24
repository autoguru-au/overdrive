import { ArrowRightIcon, CaretRightIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink } from './TextLink';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];

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
		icon: void 0,
		muted: false,
		noWrap: undefined,
		transform: undefined,
		href: '#link',
		children: 'Hello',
		variant: undefined,
		iconPosition: 'right',
		disabled: false,
	},
	argTypes: {
		icon: {
			// The shared AutoGuru icon set, so any icon in the library can be
			// tried here — and `None` covers the no-icon variation, which the
			// previous two-icon mapping had no way to select.
			...argTypesExampleIcons,
			description: 'Optional icon, from the @autoguru/icons set',
		},
		variant: {
			options: [undefined, 'primary', 'secondary', 'critical'],
			control: {
				type: 'select',
			},
		},
		iconPosition: {
			options: ['left', 'right'],
			control: {
				type: 'inline-radio',
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
	},
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Standard: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const link = canvas.getAllByRole('link')[0];

		await step('<TextLink /> renders content and attributes', async () => {
			await expect(link).toHaveAttribute('href', args.href);
			await expect(link).toHaveTextContent(args.children as string);
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

const linkedTextVariants = ['primary', 'secondary', 'critical'] as const;

const iconLeft = { icon: ArrowRightIcon, iconPosition: 'left' } as const;
const iconRight = { icon: ArrowRightIcon, iconPosition: 'right' } as const;

/**
 * Figma's linked-text axes, minus `Class` (the columns) and the hover/pressed
 * states, which need real interaction. `Large` is `size="4"`, `Small` is `"3"`,
 * and the `Icon` axis runs `None` / `Left` / `Right` at each size.
 */
const linkedTextRows = [
	{ label: 'Large · no icon', size: '4' },
	{ label: 'Large · icon left', size: '4', ...iconLeft },
	{ label: 'Large · icon right', size: '4', ...iconRight },
	{ label: 'Large · disabled', size: '4', ...iconRight, disabled: true },
	{ label: 'Small · no icon', size: '3' },
	{ label: 'Small · icon left', size: '3', ...iconLeft },
	{ label: 'Small · icon right', size: '3', ...iconRight },
	{ label: 'Small · disabled', size: '3', ...iconRight, disabled: true },
] as const satisfies Array<
	{ label: string } & Partial<ComponentProps<typeof TextLink>>
>;

/**
 * The DS-2026 **linked text** appearance, from the `Style=Linked text` axis of
 * the Figma Button component
 * ([node `362:2275`](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=362-2275)) —
 * not the superseded standalone `Link` frame.
 *
 * Setting `variant` opts in. Unlike the default appearance, the underline is
 * drawn in **every** state.
 *
 * `primary` and `critical` move the **label and underline together**;
 * `secondary` **holds its label** and moves only the underline:
 *
 * | `variant` | default (label + underline) | hover | pressed |
 * |---|---|---|---|
 * | `primary` | `link.primary` | both → `link.hover` | both → `link.pressed` |
 * | `secondary` | `link.secondary` | label held, underline → `link.hover` | label held, underline → `link.pressed` |
 * | `critical` | `link.critical` | both → `link.criticalHover` | both → `link.criticalPressed` |
 *
 * Figma's Large maps to `size="4"` (16px) and Small to `size="3"` (14px), both
 * Semibold — which is what `variant` defaults to. The icon tracks the label at
 * `1em`, matching Figma's 16px/14px.
 *
 * Hover and pressed need real interaction to see; `disabled` is a prop, so it is
 * rendered directly at both sizes.
 */
export const LinkedText: Story = {
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'grid',
					gap: '20px',
					gridTemplateColumns: 'auto repeat(3, max-content)',
					alignItems: 'center',
				}}
			>
				<Story />
			</div>
		),
	],
	render: ({ children, ...args }) => (
		<>
			<div />
			{linkedTextVariants.map((variant) => (
				<Text key={variant} weight="bold" size="3">
					{variant}
				</Text>
			))}

			{linkedTextRows.map(({ label, ...row }) => (
				<React.Fragment key={label}>
					<Text size="3" color="secondary">
						{label}
					</Text>
					{linkedTextVariants.map((variant) => (
						<TextLink
							{...args}
							{...row}
							key={variant}
							variant={variant}
						>
							{children}
						</TextLink>
					))}
				</React.Fragment>
			))}
		</>
	),
	args: {
		children: 'View booking',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('every linked-text variation renders', async () => {
			await expect(canvas.getAllByRole('link')).toHaveLength(
				linkedTextRows.length * linkedTextVariants.length,
			);
		});

		await step('the underline is present without hovering', async () => {
			await expect(canvas.getAllByRole('link')[0]).toHaveStyle({
				borderBottomStyle: 'solid',
			});
		});

		await step('the icon tracks the label size', async () => {
			// Figma pairs a 16px label with a 16px icon, 14px with 14px — the
			// icon is sized in `em`, so the root must carry the label's size.
			for (const size of ['16px', '14px']) {
				const link = canvas
					.getAllByRole('link')
					.find(
						(el) =>
							getComputedStyle(el).fontSize === size &&
							el.querySelector('[data-od-component="icon"]'),
					);

				await expect(link).toBeDefined();
				await expect(
					getComputedStyle(
						link!.querySelector('[data-od-component="icon"]')!,
					).width,
				).toBe(size);
			}
		});

		await step('disabled variations are marked unavailable', async () => {
			const disabled = canvas
				.getAllByRole('link')
				.filter(
					(link) => link.getAttribute('aria-disabled') === 'true',
				);

			await expect(disabled).toHaveLength(linkedTextVariants.length * 2);
			await expect(disabled[0]).toHaveStyle({ pointerEvents: 'none' });
		});

		await step('hover moves the label only where Figma does', async () => {
			const user = userEvent.setup();
			// Resolve each token through a probe so the comparison is
			// `rgb(...)` on both sides — computed `color` is never raw hex.
			const token = (name: string) => {
				const probe = document.createElement('span');
				probe.style.color = `var(--od-color-link-${name})`;
				canvasElement.append(probe);
				const value = getComputedStyle(probe).color;
				probe.remove();
				return value;
			};
			// Row 0 is Large, one link per variant, in column order.
			const [primary, secondary] = canvas.getAllByRole('link');

			// primary: label follows the underline to `link.hover`.
			await user.hover(primary);
			await expect(getComputedStyle(primary).color).toBe(token('hover'));

			// secondary: label holds while the underline moves.
			await user.hover(secondary);
			await expect(getComputedStyle(secondary).borderBottomColor).toBe(
				token('hover'),
			);
			await expect(getComputedStyle(secondary).color).toBe(
				token('secondary'),
			);

			await user.unhover(secondary);
		});
	},
};
