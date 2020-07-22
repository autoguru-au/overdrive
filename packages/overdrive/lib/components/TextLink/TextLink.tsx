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
	ReactText,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Text } from '../Text';
import * as styleRefs from './TextLink.treat';

type TextProps = Omit<ComponentProps<typeof Text>, 'is' | 'colour'>;
type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'children' | 'style' | 'is' | keyof TextProps
>;

export interface Props extends TextProps, AnchorProps {
	children: ReactText;
	className?: string;
	is?: ElementType | ReactElement;
	muted?: boolean;
}

export const TextLink = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			is: Component,
			children,
			className,
			fontWeight = 'bold',
			strong,
			muted = false,
			size,
			...props
		},
		ref,
	) => {
		invariant(
			!(Component !== undefined && props.href !== undefined),
			'You cannot have both href and as defined.',
		);

		const styles = useStyles(styleRefs);

		const body = (
			<Text
				is="span"
				colour={muted && ('muted' as any)}
				size={size}
				strong={strong}
				fontWeight={fontWeight}
				className={clsx(
					styles.root,

					{
						[styles.muted]: muted,
					},
				)}>
				{children}
			</Text>
		);

		const allProps = {
			rel: props.rel ?? 'noopener noreferrer',
			...props,
			ref,
			className: clsx(className),
		};

		if (Component === undefined) {
			return (
				<Box is="a" {...allProps}>
					{body}
				</Box>
			);
		}

		return isValidElement(Component)
			? cloneElement(Component, allProps, body)
			: createElement(Component, allProps, body);
	},
);
