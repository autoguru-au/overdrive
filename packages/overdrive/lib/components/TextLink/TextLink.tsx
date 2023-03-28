import { IconType } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	AnchorHTMLAttributes,
	cloneElement,
	ComponentProps,
	createElement,
	ElementType,
	forwardRef,
	isValidElement,
	ReactElement,
	ReactNode,
} from 'react';

import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import * as styles from './TextLink.css';

type TextProps = Omit<ComponentProps<typeof Text>, 'is' | 'colour'>;
type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'children' | 'style' | 'is' | keyof TextProps
>;

export interface Props extends TextProps, AnchorProps {
	children?: ReactNode;
	className?: string;
	is?: ElementType | ReactElement;
	muted?: boolean;
	icon?: IconType;
}

export const TextLink = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			is: Component,
			children,
			className,
			strong,
			fontWeight = 'semiBold',
			muted = false,
			size,
			icon,
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
				is="span"
				colour={muted ? 'muted' : 'link'}
				size={size}
				fontWeight={fontWeight}
				strong={strong}
				className={clsx(
					useBoxStyles({
						is: 'span',
						pointerEvents: 'none',
						position: 'relative',
						paddingRight: icon ? '5' : void 0,
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
						display="inlineBlock"
						className={clsx(
							styles.icon,
							useBoxStyles({
								position: 'absolute',
							}),
						)}
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
				<Box is="a" className={[className, styles.root]} {...allProps}>
					{body}
				</Box>
			);
		}

		return isValidElement(Component)
			? cloneElement(Component, allProps, body)
			: createElement(Component, allProps, body);
	},
);

export default TextLink;
