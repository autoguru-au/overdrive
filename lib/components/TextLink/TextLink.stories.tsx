import { ArrowRightIcon, CaretRightIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React, { type ComponentProps } from 'react';
import { expect } from 'storybook/test';

import {
	ladderGroupStart,
	ladderPreviewInline,
	ladderRow,
	labels,
	linkSizeLadderGrid,
	linkStateLadderGrid,
	small,
	spaceLadderHeaderCell,
	tokenCode,
	tokenDescription,
} from '../../stories/helpers/styles.css';
import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import { TextLink, type TextLinkProps } from './TextLink';
import * as styles from './TextLink.css';
import type { TextLinkVariant } from './TextLink.css';

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
		// The narrow column keeps the single-link stories realistic; the matrix
		// story needs the full canvas, so it opts out via `fullWidth`.
		(Story, { parameters }) => (
			<div style={{ maxWidth: parameters.fullWidth ? undefined : 300 }}>
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
	variant: TextLinkVariant,
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

/** Which classes move the label with the underline, per Figma. */
const CLASSES: Array<{
	variant: TextLinkVariant;
	labelFollowsState: boolean;
	tag?: string;
}> = [
	{ variant: 'primary', labelFollowsState: true, tag: 'default' },
	{ variant: 'secondary', labelFollowsState: false },
	{ variant: 'critical', labelFollowsState: true },
];

/**
 * Hover is forced with `data-hover` — `selectors.hover` matches it alongside
 * `:hover`. Pressed has no such hook, so the story class replays the `:active`
 * declarations.
 */
const STATES: Array<{
	label: string;
	props: Partial<TextLinkProps> & { 'data-hover'?: boolean };
	code(variant: TextLinkVariant): string;
}> = [
	{ label: 'Default', props: {}, code: (variant) => `variant="${variant}"` },
	{ label: 'Hover', props: { 'data-hover': true }, code: () => ':hover' },
	{
		label: 'Pressed',
		props: { className: styles.storyForcePressed },
		code: () => ':active',
	},
	{ label: 'Disabled', props: { disabled: true }, code: () => 'disabled' },
];

/** Figma's Large is `size="4"` (16px) and Small is `size="3"` (14px). */
const SIZES: Array<{
	label: string;
	size: TextLinkProps['size'];
	px: string;
	tag?: string;
}> = [
	{ label: 'Large', size: '4', px: '16', tag: 'default' },
	{ label: 'Small', size: '3', px: '14' },
];

const ICONS: Array<{
	label: string;
	props: Partial<TextLinkProps>;
	code(size: TextLinkProps['size']): string;
}> = [
	{ label: 'None', props: {}, code: (size) => `size="${size}"` },
	{
		label: 'Left',
		props: { icon: ArrowRightIcon, iconPosition: 'left' },
		code: () => 'iconPosition="left"',
	},
	{
		label: 'Right',
		props: { icon: ArrowRightIcon, iconPosition: 'right' },
		code: () => 'iconPosition="right"',
	},
];

const STATE_COL = ['Class', 'State', 'Preview', 'Props', 'Tag'];
const SIZE_COL = ['Size', 'Px', 'Icon', 'Preview', 'Props', 'Tag'];

const EmptyCell = () => <span className={small} aria-hidden="true" />;

const HeaderRow = ({ columns }: { columns: string[] }) => (
	<div className={ladderRow}>
		{columns.map((heading) => (
			<span
				className={clsx(labels, small, spaceLadderHeaderCell)}
				key={heading}
			>
				{heading}
			</span>
		))}
	</div>
);

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
 */
export const LinkedText: Story = {
	parameters: { fullWidth: true },
	render: ({ children, ...args }) => (
		<>
			<Text weight="bold" size="4">
				Class × state
			</Text>
			<div className={linkStateLadderGrid}>
				<HeaderRow columns={STATE_COL} />
				{CLASSES.flatMap(({ variant, tag }, group) =>
					STATES.map(({ label, props, code }, index) => (
						<div
							className={clsx(
								ladderRow,
								group > 0 && index === 0 && ladderGroupStart,
							)}
							key={`${variant}-${label}`}
						>
							{index === 0 ? (
								<span className={clsx(small, labels)}>
									{variant}
								</span>
							) : (
								<EmptyCell />
							)}
							<span className={small}>{label}</span>
							<span className={ladderPreviewInline}>
								<TextLink
									{...args}
									{...props}
									variant={variant}
								>
									{children}
								</TextLink>
							</span>
							<code className={tokenCode}>{code(variant)}</code>
							{index === 0 && tag ? (
								<span className={clsx(small, tokenDescription)}>
									{tag}
								</span>
							) : (
								<EmptyCell />
							)}
						</div>
					)),
				)}
			</div>

			<Text weight="bold" size="4">
				Size × icon
			</Text>
			<div className={linkSizeLadderGrid}>
				<HeaderRow columns={SIZE_COL} />
				{SIZES.flatMap(({ label: sizeLabel, size, px, tag }, group) =>
					ICONS.map(({ label, props, code }, index) => (
						<div
							className={clsx(
								ladderRow,
								group > 0 && index === 0 && ladderGroupStart,
							)}
							key={`${size}-${label}`}
						>
							{index === 0 ? (
								<span className={clsx(small, labels)}>
									{sizeLabel}
								</span>
							) : (
								<EmptyCell />
							)}
							{index === 0 ? (
								<span className={small}>{px}</span>
							) : (
								<EmptyCell />
							)}
							<span className={small}>{label}</span>
							<span className={ladderPreviewInline}>
								<TextLink {...args} {...props} size={size}>
									{children}
								</TextLink>
							</span>
							<code className={tokenCode}>{code(size)}</code>
							{index === 0 && tag ? (
								<span className={clsx(small, tokenDescription)}>
									{tag}
								</span>
							) : (
								<EmptyCell />
							)}
						</div>
					)),
				)}
			</div>
		</>
	),
	args: {
		children: 'View booking',
	},
	play: async ({ canvas, step }) => {
		await step('every linked-text variation renders', async () => {
			await expect(canvas.getAllByRole('link')).toHaveLength(
				CLASSES.length * STATES.length + SIZES.length * ICONS.length,
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

			await expect(disabled).toHaveLength(CLASSES.length);
			await expect(disabled[0]).toHaveStyle({ pointerEvents: 'none' });
		});

		await step(
			'hover and pressed move the label only where Figma does',
			async () => {
				for (const { variant, labelFollowsState } of CLASSES) {
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
