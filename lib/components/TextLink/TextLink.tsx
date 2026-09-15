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
	/** Optional icon, displayed after the link text */
	icon?: IconType;
	/**
	 * Opts the link into the linked-text appearance and picks its colour
	 * class.
	 *
	 * The underline is drawn in every state and changes colour on hover and
	 * press. `primary` and `critical` move the label with it; `secondary`
	 * holds its label and moves only the underline.
	 *
	 * Omit it to keep the established appearance.
	 */
	variant?: TextLinkVariant;
	/**
	 * Presents the link as unavailable and stops it receiving pointer events.
	 * Applies to the linked-text appearance only — it needs `variant`.
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
 * Linked text: the icon is a flex sibling of the label so the underline
 * runs beneath both, and the label inherits its colour from the root.
 */
const LinkedTextBody = ({ children, icon, textProps }: BodyProps) => (
	<>
		{/*
		 * `color="unset"` is load-bearing: given no colour, `typography()`
		 * falls back to the `neutral` text colour, which would sit on the
		 * label and beat the variant colour inherited from the root.
		 */}
		<Text {...textProps} color="unset">
			{children}
		</Text>
		{icon ? (
			// `inline-block`, because the root is `inline` — `Icon`'s default
			// `block` would force the icon onto its own line.
			<Icon icon={icon} display="inline-block" />
		) : null}
	</>
);

/** The established appearance: icon absolutely positioned inside the label. */
const LegacyBody = ({
	children,
	icon,
	muted,
	textProps,
}: BodyProps & Pick<TextLinkProps, 'muted'>) => (
	<Text
		{...textProps}
		color={muted ? 'tertiary' : 'unset'}
		pr={icon ? '5' : undefined}
		className={[
			styles.body,
			{
				[styles.legacyLabel]: !muted,
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
 * // Linked text — opt in with `variant`
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
			muted = false,
			noWrap,
			size,
			strong,
			transform,
			variant,
			weight = 'medium',
			...props
		},
		ref,
	) => {
		invariant(
			!(Component !== undefined && props.href !== undefined),
			'You cannot have both href and as defined.',
		);

		const isLinkedText = variant !== undefined;
		const textProps = { noWrap, size, strong, transform, weight };

		const body = isLinkedText ? (
			<LinkedTextBody icon={icon} textProps={textProps}>
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
					// tracks it.
					sprinkles({ text: rootTextSize(size) }),
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
			// The established appearance has never styled the `as` path; only
			// carry the class list across for the linked-text variants.
			...(isLinkedText ? { className: clsx(rootClassName) } : {}),
		};

		return isValidElement(Component)
			? cloneElement(Component, asProps, body)
			: createElement(Component, asProps, body);
	},
);

TextLink.displayName = 'TextLink';
