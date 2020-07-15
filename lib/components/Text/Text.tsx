import type { FunctionComponent } from 'react';
import * as React from 'react';

import { Box } from '../Box/Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';
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
				noWrap,
			}),
			className,
		]}>
		{children}
	</Box>
);
