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

import type { TextStylesProps } from '../../styles/typography';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './TextLink.css';

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
}

/**
 * TextLink component for rendering navigation links
 *
 * @example
 * ```tsx
 * <TextLink href="https://example.com">Click me</TextLink>
 *
 * // With an icon
 * <TextLink href="/settings" icon={SettingsIcon}>Settings</TextLink>
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
			icon,
			muted = false,
			noWrap,
			size,
			strong,
			transform,
			weight = 'semiBold',
			...props
		},
		ref,
	) => {
		invariant(
			!(Component !== undefined && props.href !== undefined),
			'You cannot have both href and as defined.',
		);
		const body = (
			<Text
				colour={muted ? 'muted' : 'link'}
				noWrap={noWrap}
				pr={icon ? '5' : undefined}
				size={size}
				strong={strong}
				transform={transform}
				weight={weight}
				className={[
					styles.body,
					{
						[styles.muted]: muted,
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

		const allProps = {
			rel: props.rel ?? 'noopener noreferrer',
			...props,
			ref,
		};

		if (Component === undefined) {
			return (
				<Box
					as="a"
					color={color}
					colour={colour}
					className={[className, styles.root]}
					{...allProps}
				>
					{body}
				</Box>
			);
		}

		return isValidElement(Component)
			? cloneElement(Component, allProps, body)
			: createElement(Component, allProps, body);
	},
);

TextLink.displayName = 'TextLink';
