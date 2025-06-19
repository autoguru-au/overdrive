import type { ClassValue as ClassName } from 'clsx';
import React, { type ComponentProps } from 'react';

import { type Sprinkles } from '../../styles/sprinkles.css';
import { typographyStyles } from '../../styles/typography.css';
import type { TestId } from '../../types';
import { Box } from '../Box/Box';

import type { TextStyleProps } from './textStyles';

type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<ComponentProps<'label'>, 'htmlFor'>;

type AdditionalStyleProps = Pick<
	Sprinkles,
	| 'display'
	| 'm'
	| 'mb'
	| 'ml'
	| 'mr'
	| 'mt'
	| 'mx'
	| 'my'
	| 'margin'
	| 'marginBottom'
	| 'marginLeft'
	| 'marginRight'
	| 'marginTop'
	| 'marginX'
	| 'marginY'
	| 'p'
	| 'pb'
	| 'pl'
	| 'pr'
	| 'pt'
	| 'px'
	| 'py'
	| 'padding'
	| 'paddingBottom'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingX'
	| 'paddingY'
>;

export interface TextProps
	extends Omit<ElementAttributes, 'className' | 'color' | 'is'>,
		AdditionalStyleProps,
		TextStyleProps,
		TestId {
	className?: ClassName;
}

/**
 * The main Overdrive component for consistent typography sizing and styling.
 * Supports semantic text styling with size, color, and weight variations.
 *
 * @example
 * <Text>
 *   This is some text
 * </Text>
 *
 * <Text as="p">
 *   This will render as a paragraph
 * </Text>
 *
 * <Text size="5" color="primary" strong>
 *   Important text
 * </Text>
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
	(
		{
			as = 'span',
			children,
			className,

			//style props
			align = 'left',
			breakWord,
			color, // modern semantic colour tokens
			colour, // legacy colours
			noWrap,
			size = '4',
			strong = false,
			transform,
			weight = 'normal',
			wrap,

			...props
		},
		ref,
	) => (
		<Box
			as={as}
			ref={ref}
			textAlign={align}
			textWrap={wrap}
			className={[
				typographyStyles({
					as,
					breakWord,
					color,
					colour: colour ?? (strong ? 'dark' : undefined),
					noWrap,
					size,
					strong,
					transform,
					weight,
				}),
				className,
			]}
			{...props}
		>
			{children}
		</Box>
	),
);

Text.displayName = 'Text';
