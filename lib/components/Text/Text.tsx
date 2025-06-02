import React from 'react';

import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';

import { type TextStyleProps, useTextStyles } from './useTextStyles';

type Display = Extract<
	BoxStyleProps['display'],
	'inline' | 'inlineBlock' | 'inline-block' | 'block'
>;
type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<React.ComponentProps<'label'>, 'htmlFor'>;

export interface TextProps
	extends Omit<ElementAttributes, 'color' | 'is'>,
		TextStyleProps {
	/** Use bold font weight */
	strong?: boolean;
	/** Select CSS display property  */
	display?: Display;
}

export const Text = React.forwardRef<HTMLElement, WithTestId<TextProps>>(
	(
		{
			children,
			className,
			is = 'span',
			as = is,
			testId,
			align = 'left',
			colour,
			color = colour,
			display,
			fontWeight = 'normal',
			transform,
			breakWord,
			noWrap,
			size = '4',
			strong = false,
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
				useTextStyles({
					as,
					size,
					color: color ?? (strong ? 'dark' : undefined),
					fontWeight: strong ? 'bold' : fontWeight,
					transform,
					noWrap,
					breakWord,
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

export default Text;
