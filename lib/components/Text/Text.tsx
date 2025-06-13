import React from 'react';

import { type Sprinkles } from '../../styles/sprinkles.css';
import { typographyStyles } from '../../styles/typography.css';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';

import type { TextStyleProps } from './textStyles';

type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<React.ComponentProps<'label'>, 'htmlFor'>;

export interface TextProps
	extends Omit<ElementAttributes, 'color' | 'is'>,
		TextStyleProps {
	/** Select CSS display property  */
	display?: Sprinkles['display'];
}

export const Text = React.forwardRef<HTMLElement, WithTestId<TextProps>>(
	(
		{
			as = 'span',
			children,
			className,
			testId,

			//style props
			align = 'left',
			color,
			colour,
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
			color={color}
			display={display}
			textAlign={align}
			className={[
				typographyStyles({
					as,
					breakWord,
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
			{...dataAttrs({ 'test-id': testId })}
		>
			{children}
		</Box>
	),
);

Text.displayName = 'Text';
