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
	muted?: boolean;
	/**
	 * Optional icon from the `@autoguru/icons` set — any icon in the library
	 * works. Omit it for the no-icon appearance.
	 *
	 * Trails the label by default; with `variant` set, `iconPosition` moves it
	 * to either side.
	 */
	icon?: IconType;
	/**
	 * DS-2026 linked-text colour class, mirroring the `Class` values of the
	 * Figma Button component's `Style=Linked text` axis.
	 *
	 * Setting it opts into the DS-2026 appearance — the underline is drawn in
	 * every state and changes colour on hover and press, and the label defaults
	 * to Semibold at size `'4'`. Leave it unset for the established
	 * underline-on-hover appearance, which is unchanged.
	 */
	variant?: TextLinkVariant;
	/**
	 * Which side of the label the `icon` sits on.
	 *
	 * Requires `variant`; the legacy appearance always trails the icon.
	 *
	 * @default 'right'
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Presents the link as unavailable and stops it receiving pointer events.
	 *
	 * Requires `variant`.
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
	const iconEl = icon ? <Icon icon={icon} /> : null;

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
 * TextLink component for rendering navigation links
 *
 * @example
 * ```tsx
 * <TextLink href="https://example.com">Click me</TextLink>
 *
 * // With an icon
 * <TextLink href="/settings" icon={GearIcon}>Settings</TextLink>
 *
 * // DS-2026 linked text
 * <TextLink href="/bookings" variant="primary">View bookings</TextLink>
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
			variant,
			weight: incomingWeight,
			...props
		},
		ref,
	) => {
		invariant(
			!(Component !== undefined && props.href !== undefined),
			'You cannot have both href and as defined.',
		);

		const isLinkedText = variant !== undefined;
		// Figma's linked text is Semibold, Large (16px) or Small (14px); the
		// legacy appearance keeps its medium weight and inherited size.
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
