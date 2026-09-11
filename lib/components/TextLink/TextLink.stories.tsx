import { ArrowRightIcon, CaretRightIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { expect } from 'storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink } from './TextLink';
import * as styles from './TextLink.css';

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
		variant: 'primary',
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
			options: ['primary', 'secondary', 'critical'],
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
			control: {
				type: 'boolean',
			},
		},
		transform: {
			options: transformOptions,
			control: {
				type: 'select',
			},
		},
		weight: {
			options: fontWeightOptions,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Standard: Story = {
	play: async ({ args, canvas, step }) => {
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
	play: async ({ canvas, step, userEvent }) => {
		const link = canvas.getAllByRole('link')[0];

		await step('<TextLink /> has SVG icon', async () => {
			await expect(link.querySelector('svg')).toBeInTheDocument();
		});

		await step('<TextLink /> is interactive', async () => {
			await expect(link).toHaveStyle({ cursor: 'pointer' });
			await userEvent.keyboard('{Tab}');
			await expect(link).toHaveFocus();
			await userEvent.hover(link);
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

/** Which classes move the label with the underline, per Figma. */
const linkedTextStateBehaviour = [
	{ variant: 'primary', labelFollowsState: true },
	{ variant: 'secondary', labelFollowsState: false },
	{ variant: 'critical', labelFollowsState: true },
] as const;

/**
 * Every style rule in the document, flattened out of `@layer` and `@media`
 * wrappers.
 *
 * The recursion checks `selectorText` *before* descending: since CSS nesting
 * shipped, a plain `CSSStyleRule` also carries a `cssRules` list, so a walker
 * that recurses first and asks questions later skips every rule it is looking
 * for and reports an empty stylesheet.
 */
const eachStyleRule = function* (rules: CSSRuleList): Generator<CSSStyleRule> {
	// `Array.from` rather than iterating directly: `CSSRuleList` is an
	// array-like, not a guaranteed iterable.
	for (const rule of Array.from(rules)) {
		if ('selectorText' in rule) yield rule as CSSStyleRule;
		const nested = (rule as CSSGroupingRule).cssRules;
		if (nested?.length) yield* eachStyleRule(nested);
	}
};

/**
 * Reads the declaration block a variant emits for its hover / pressed rule.
 *
 * Asserted against the stylesheet rather than a simulated interaction on
 * purpose: `userEvent.hover` dispatches mouse events without moving the real
 * pointer, so it never engages CSS `:hover`, and the resulting assertion would
 * pass or fail on pointer position rather than on the component.
 *
 * The class comes from the recipe rather than a name pattern. A production
 * Storybook build strips vanilla-extract's debug names — `variant_primary`
 * becomes `_5ax1bk5` — so matching on a readable class name passes in dev and
 * fails in the built Storybook that Chromatic renders.
 */
const stateDeclarations = (
	variant: keyof typeof styles.linkedText.classNames.variants.variant,
	state: 'hover' | 'active',
) => {
	const cls = styles.linkedText.classNames.variants.variant[variant];
	const marker = state === 'hover' ? '[data-hover]' : ':active';

	for (const sheet of Array.from(document.styleSheets)) {
		let rules: CSSRuleList;
		// A cross-origin stylesheet throws on access; skip rather than fail.
		try {
			rules = sheet.cssRules;
		} catch {
			continue;
		}

		for (const rule of eachStyleRule(rules)) {
			if (
				rule.selectorText.includes(cls) &&
				rule.selectorText.includes(marker)
			) {
				return rule.style.cssText.replaceAll(/\s+/g, ' ').trim();
			}
		}
	}

	return null;
};

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
 * This is the default appearance for every link — `variant` picks the colour
 * class and defaults to `primary`. The underline is drawn in **every** state.
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
 * Semibold — which is what the component defaults to. The icon tracks the label
 * at `1em`, matching Figma's 16px/14px.
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
						// Wrapped so the link is not itself a grid item — grid
						// and flex items are blockified, which would render
						// these specimens as blocks and misrepresent the
						// component's real `display: inline`.
						<div key={variant}>
							<TextLink {...args} {...row} variant={variant}>
								{children}
							</TextLink>
						</div>
					))}
				</React.Fragment>
			))}
		</>
	),
	args: {
		children: 'View booking',
	},
	play: async ({ canvas, step }) => {
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

		await step(
			'hover and pressed move the label only where Figma does',
			async () => {
				for (const {
					variant,
					labelFollowsState,
				} of linkedTextStateBehaviour) {
					for (const state of ['hover', 'active'] as const) {
						const declarations = stateDeclarations(variant, state);

						// Fail loudly rather than silently pass if the rule
						// cannot be read at all.
						await expect(declarations).not.toBeNull();
						// The underline always moves between states.
						await expect(declarations).toContain(
							'border-bottom-color:',
						);
						// The label moves with it only for primary/critical.
						await expect(/(^|;)\s*color:/.test(declarations!)).toBe(
							labelFollowsState,
						);
					}
				}
			},
		);
	},
};
