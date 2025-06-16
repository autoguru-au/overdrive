import { IconType } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
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

import { componentStyles } from '../../styles';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './TextLink.css';

type TextProps = Omit<ComponentProps<typeof Text>, 'is' | 'colour'>;
type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'color' | 'children' | 'style' | 'is' | keyof TextProps
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
			color,
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
				as="span"
				colour={muted ? 'muted' : 'link'}
				size={size}
				fontWeight={fontWeight}
				strong={strong}
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
					colour={color}
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
