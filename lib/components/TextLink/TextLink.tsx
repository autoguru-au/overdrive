import { IconType } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	cloneElement,
	type ComponentPropsWithoutRef,
	createElement,
	type ElementType,
	forwardRef,
	isValidElement,
	type ReactElement,
	type ReactNode,
} from 'react';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
import {
	namedTextStyleMap,
	type NamedTextStyle,
	type TextStylesProps,
} from '../../styles/typography';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './TextLink.css';
import type { TextLinkVariant } from './TextLink.css';

/**
 * Resolves a `size` — a scale value or a DS-2026 named text style — to the
 * `text` sprinkle value, the same way `typography()` does internally.
 */
const rootTextSize = (
	size: TextStylesProps['size'],
): Sprinkles['text'] | undefined =>
	namedTextStyleMap[size as NamedTextStyle]?.size ??
	(size as Sprinkles['text']);

type AnchorProps = ComponentPropsWithoutRef<'a'>;
type FilteredAnchorProps = Omit<AnchorProps, keyof TextStylesProps>;
type FilteredTextStyleProps = Omit<
	TextStylesProps,
	'as' | 'align' | 'breakword' | 'wordbreak' | 'wrap'
>;

export interface TextLinkProps
	extends FilteredAnchorProps,
		FilteredTextStyleProps {
	children?: ReactNode;
	className?: string;
	as?: ElementType | ReactElement;
	/**
	 * @deprecated The pre-DS-2026 appearance — muted label, hover floods the
	 * line with the link colour. Setting it opts out of `variant` entirely.
	 * Removed in v5 (DS-2026 major); no replacement is planned.
	 */
	muted?: boolean;
	/**
	 * Optional icon from the `@autoguru/icons` set — any icon in the library
	 * works. Omit it for the no-icon appearance.
	 *
	 * `iconPosition` moves it to either side of the label.
	 */
	icon?: IconType;
	/**
	 * DS-2026 linked-text colour class, mirroring the `Class` values of the
	 * Figma Button component's `Style=Linked text` axis.
	 *
	 * The underline is drawn in every state and changes colour on hover and
	 * press. `primary` and `critical` move the label with it; `secondary` holds
	 * its label and moves only the underline.
	 *
	 * @default 'primary'
	 */
	variant?: TextLinkVariant;
	/**
	 * Which side of the label the `icon` sits on.
	 *
	 * @default 'right'
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Presents the link as unavailable and stops it receiving pointer events.
	 */
	disabled?: boolean;
}

type SharedTextProps = Pick<
	TextLinkProps,
	'noWrap' | 'size' | 'strong' | 'transform' | 'weight'
>;

interface BodyProps {
	children?: ReactNode;
	icon?: IconType;
	textProps: SharedTextProps;
}

/**
 * DS-2026 linked text: the icon is a flex sibling of the label so the underline
 * runs beneath both, and the label inherits its colour from the root.
 */
const LinkedTextBody = ({
	children,
	icon,
	iconPosition,
	textProps,
}: BodyProps & Pick<TextLinkProps, 'iconPosition'>) => {
	// `inline-block`, because the root is `inline` — `Icon`'s default `block`
	// would force the icon onto its own line.
	const iconEl = icon ? <Icon icon={icon} display="inline-block" /> : null;

	return (
		<>
			{iconPosition === 'left' ? iconEl : null}
			{/*
			 * `color="unset"` is load-bearing: given no colour, `typography()`
			 * falls back to the `neutral` text colour, which would sit on the
			 * label and beat the variant colour inherited from the root.
			 */}
			<Text {...textProps} color="unset">
				{children}
			</Text>
			{iconPosition === 'right' ? iconEl : null}
		</>
	);
};

/** The established appearance: icon absolutely positioned inside the label. */
const LegacyBody = ({
	children,
	icon,
	muted,
	textProps,
}: BodyProps & Pick<TextLinkProps, 'muted'>) => (
	<Text
		{...textProps}
		colour={muted ? 'muted' : 'link'}
		pr={icon ? '5' : undefined}
		className={[
			styles.body,
			{
				[styles.muted]: Boolean(muted),
			},
		]}
	>
		{children}
		{icon ? (
			<Icon
				icon={icon}
				size="small"
				display="inline-block"
				className={clsx(styles.icon)}
			/>
		) : null}
	</Text>
);

/**
 * TextLink component for rendering navigation links.
 *
 * Renders the DS-2026 linked-text appearance — underlined in every state, and
 * moving colour on hover and press. `variant` picks the colour class and
 * defaults to `primary`.
 *
 * The pre-DS-2026 appearance is gone; the darker `link.primary` replaces it and
 * clears WCAG AA on white, which the old `#01C68C` did not (2.22:1).
 *
 * @example
 * ```tsx
 * <TextLink href="https://example.com">Click me</TextLink>
 *
 * // With an icon
 * <TextLink href="/settings" icon={GearIcon}>Settings</TextLink>
 *
 * // Other colour classes
 * <TextLink href="/bookings" variant="secondary">View bookings</TextLink>
 * <TextLink href="/cancel" variant="critical" icon={TrashIcon}>Cancel</TextLink>
 * ```
 */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
	(
		{
			as: Component,
			children,
			className,
			color,
			colour,
			disabled = false,
			icon,
			iconPosition = 'right',
			muted = false,
			noWrap,
			size: incomingSize,
			strong,
			transform,
			variant = 'primary',
			weight: incomingWeight,
			...props
		},
		ref,
	) => {
		invariant(
			!(Component !== undefined && props.href !== undefined),
			'You cannot have both href and as defined.',
		);

		// Every link is DS-2026 linked text now. The pre-DS-2026 appearance is
		// reachable only through the deprecated `muted`, which keeps working
		// until it is removed in v5 rather than silently becoming a no-op.
		const isLinkedText = !muted;
		// Figma's linked text is Semibold, Large (16px) or Small (14px); the
		// deprecated `muted` appearance keeps its medium weight and inherited size.
		const textProps = {
			noWrap,
			size: incomingSize ?? (isLinkedText ? ('4' as const) : undefined),
			strong,
			transform,
			weight: incomingWeight ?? (isLinkedText ? 'semiBold' : 'medium'),
		};

		const body = isLinkedText ? (
			<LinkedTextBody
				icon={icon}
				iconPosition={iconPosition}
				textProps={textProps}
			>
				{children}
			</LinkedTextBody>
		) : (
			<LegacyBody icon={icon} muted={muted} textProps={textProps}>
				{children}
			</LegacyBody>
		);

		const rootClassName = isLinkedText
			? [
					className,
					styles.linkedText({ disabled, variant }),
					// The root carries the label's font size so the icon's `1em`
					// tracks it — Figma pairs a 16px label with a 16px icon and a
					// 14px label with a 14px one.
					sprinkles({ text: rootTextSize(textProps.size) }),
					focusOutlineStyle,
				]
			: [className, styles.root];

		const allProps = {
			rel: props.rel ?? 'noopener noreferrer',
			...props,
			...(isLinkedText && disabled
				? { 'aria-disabled': true, tabIndex: -1 }
				: {}),
			ref,
		};

		if (Component === undefined) {
			return (
				<Box
					as="a"
					color={color}
					colour={colour}
					className={rootClassName}
					{...allProps}
				>
					{body}
				</Box>
			);
		}

		const asProps = {
			...allProps,
			// The legacy appearance has never styled the `as` path; only carry
			// the class list across for the DS-2026 variants.
			...(isLinkedText ? { className: clsx(rootClassName) } : {}),
		};

		return isValidElement(Component)
			? cloneElement(Component, asProps, body)
			: createElement(Component, asProps, body);
	},
);

TextLink.displayName = 'TextLink';
