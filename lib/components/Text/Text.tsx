import type { ClassValue as ClassName } from 'clsx';
import React, { type ComponentProps } from 'react';

import { type Sprinkles } from '../../styles/sprinkles.css';
import {
	DEFAULT_TEXT_SIZE,
	DEFAULT_TEXT_WEIGHT,
	textStyles,
	type TextTags,
	type TypographyProps,
} from '../../styles/typography';
import type { TestId } from '../../types';
import { Box } from '../Box/Box';

type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<ComponentProps<'label'>, 'htmlFor'>;

export type AdditionalStyleProps = Pick<
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
	extends Omit<ElementAttributes, 'className' | 'is' | keyof TypographyProps>,
		AdditionalStyleProps,
		TypographyProps,
		TestId {
	as?: TextTags;
	className?: ClassName;
}

/**
 * The main Overdrive component for consistent typography.
 * Supports size, color, and weight variations, as well as style props for display, margin and padding.
 *
 * @example
 * <Text>
 *   This is some text
 * </Text>
 *
 * <Text as="p" my="2">
 *   This will render as a paragraph with vertical margins
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
			align,
			breakWord,
			color, // modern semantic colour tokens
			colour, // legacy colours
			noWrap,
			size = DEFAULT_TEXT_SIZE,
			strong,
			transform,
			weight = DEFAULT_TEXT_WEIGHT,
			wrap,

			...props
		},
		ref,
	) => (
		<Box
			{...props}
			as={as}
			ref={ref}
			className={[
				textStyles({
					align,
					as,
					breakWord,
					color,
					colour,
					noWrap,
					size,
					strong,
					transform,
					weight,
					wrap,
				}),
				className,
			]}
		>
			{children}
		</Box>
	),
);

Text.displayName = 'Text';
