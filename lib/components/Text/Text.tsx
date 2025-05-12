import React from 'react';

import { Sprinkles } from '../../styles/sprinkles.css';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import type { UseBoxProps } from '../Box';
import { Box } from '../Box';

import { TextStyleProps, useTextStyles } from './useTextStyles';

type Display = Extract<
	UseBoxProps['display'],
	'inline' | 'inline-block' | 'block'
>;
type ElementAttributes = React.ComponentPropsWithoutRef<'p'> &
	Pick<React.ComponentProps<'label'>, 'htmlFor'>;

export interface TextProps
	extends Omit<ElementAttributes, 'color' | 'is'>,
		TextStyleProps {
	/** Set the text colour */
	color?: Sprinkles['color'];
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
			colour,
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
			className={[
				useTextStyles({
					as,
					size,
					colour: colour ?? (strong ? 'dark' : undefined),
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
