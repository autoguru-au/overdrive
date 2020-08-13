import type { FunctionComponent } from 'react';
import * as React from 'react';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';
import { TextStyleProps, useTextStyles } from './useTextStyles';

export interface Props extends TextStyleProps {
	className?: string;
	is?: 'p' | 'span';
	strong?: boolean;
	display?: Extract<
		BoxStyleProps['display'],
		'inline' | 'inlineBlock' | 'block'
	>;
}

export const Text: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'span',
	align = 'left',
	colour,
	display,
	fontWeight = 'normal',
	transform,
	noWrap,
	size = '4',
	strong = false,
}) => (
	<Box
		is={Component}
		display={display}
		textAlign={align}
		className={[
			useTextStyles({
				size,
				colour: colour ?? (strong ? 'dark' : undefined),
				fontWeight: strong ? 'bold' : fontWeight,
				transform,
				noWrap,
			}),
			className,
		]}>
		{children}
	</Box>
);
