import type { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import React, { cloneElement } from 'react';

import { boxStyles } from '../Box/boxStyles';
import { type BoxLikeProps, useBox } from '../Box/useBox';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { TextStylesProps } from '../Text/textStyles';

import * as styles from './TextLink.css';

interface CustomProps extends Pick<TextStylesProps, 'noWrap' | 'transform'> {
	/** Make the link colour less prominent */
	muted?: boolean;
	/** Optional icon, displayed after the link text */
	icon?: IconType;
	/** Applies font weight */
	strong?: boolean;
}

export type TextLinkProps = BoxLikeProps<'a', CustomProps>;

/**
 * TextLink component for rendering navigation links
 *
 * @example
 * <TextLink href="https://example.com">Click me</TextLink>
 *
 * // With an icon
 * <TextLink href="/settings" icon={SettingsIcon}>Settings</TextLink>
 */
export const TextLink = ({
	as = 'a',
	children,
	className,
	fontWeight = 'semiBold',
	icon,
	muted = false,
	size,
	strong,
	transform,
	...props
}: TextLinkProps) => {
	const body = (
		<Text
			as="span"
			className={[
				{
					[styles.muted]: muted,
				},
			]}
			colour={muted ? 'muted' : 'link'}
			fontWeight={fontWeight}
			pointerEvents="none"
			position="relative"
			pr={icon ? '5' : undefined}
			size={size}
			strong={strong}
			transform={transform}
		>
			{children}
			{icon ? (
				<Icon
					icon={icon}
					size="small"
					display="inline-block"
					className={clsx(
						styles.icon,
						boxStyles({
							position: 'absolute',
						}),
					)}
				/>
			) : null}
		</Text>
	);

	const { Component, componentProps, reactElement } = useBox<'a'>({
		...props,
		as,
		className: [styles.root, className],
		odComponent: 'TextLink',
		rel: props.rel ?? 'noopener noreferrer',
	});

	if (reactElement) {
		return cloneElement(reactElement, componentProps, body);
	}

	return <Component {...componentProps}>{body}</Component>;
};

TextLink.displayName = 'TextLink';
