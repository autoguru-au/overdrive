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

import { componentStyles } from '../../styles';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import type { TextStyleProps } from '../Text/textStyles';

import * as styles from './TextLink.css';

type AnchorProps = ComponentPropsWithoutRef<'a'>;
type FilteredAnchorProps = Omit<AnchorProps, keyof TextStyleProps>;
type FilteredTextStyleProps = Omit<
	TextStyleProps,
	'as' | 'align' | 'breakword' | 'wordbreak' | 'wrap'
>;

export interface TextLinkProps
	extends FilteredAnchorProps,
		FilteredTextStyleProps {
	children?: ReactNode;
	className?: string;
	as?: ElementType | ReactElement;
	muted?: boolean;
	icon?: IconType;
}

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
				as="span"
				colour={muted ? 'muted' : 'link'}
				noWrap={noWrap}
				size={size}
				strong={strong}
				transform={transform}
				weight={weight}
				className={clsx(
					componentStyles({
						as: 'span',
						pointerEvents: 'none',
						position: 'relative',
						paddingRight: icon ? '5' : undefined,
					}),
					{
						[styles.muted]: muted,
					},
				)}
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
