import React from 'react';

import { type Sprinkles } from '../../styles/sprinkles.css';
import { typographyStyles } from '../../styles/typography.css';
import type { TestId } from '../../types';
import { Box } from '../Box/Box';

import type { TextStyleProps } from './textStyles';

type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<React.ComponentProps<'label'>, 'htmlFor'>;

export interface TextProps
	extends Omit<ElementAttributes, 'color' | 'is'>,
		TextStyleProps,
		TestId {
	/** Select CSS display property  */
	display?: Sprinkles['display'];
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
	(
		{
			as = 'span',
			children,
			className,

			//style props
			align = 'left',
			color, // modern semantic colour tokens
			colour, // legacy colours
			display,
			transform,
			breakWord,
			noWrap,
			size = '4',
			strong = false,
			weight = 'normal',

			...props
		},
		ref,
	) => (
		<Box
			as={as}
			ref={ref}
			display={display}
			textAlign={align}
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
