import React from 'react';

import { type Sprinkles } from '../../styles/sprinkles.css';
import { typographyStyles } from '../../styles/typography.css';
import type { TestId } from '../../types';
import { Box } from '../Box/Box';

import type { TextStyleProps } from './textStyles';

type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<React.ComponentProps<'label'>, 'htmlFor'>;

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
	extends Omit<ElementAttributes, 'color' | 'is'>,
		AdditionalStyleProps,
		TextStyleProps,
		TestId {}

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
