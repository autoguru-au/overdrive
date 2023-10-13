import type { CSSProperties, ReactNode } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';

import { TextStyleProps, useTextStyles } from './useTextStyles';

export interface Props extends TextStyleProps {
	className?: string;
	is?: 'p' | 'span';
	strong?: boolean;
	children?: ReactNode;
	display?: Extract<
		BoxStyleProps['display'],
		'inline' | 'inlineBlock' | 'block'
	>;
	style?: CSSProperties;
}

export const Text = forwardRef<HTMLElement, Props>(
	({
	children,
	className = '',
	is: Component = 'span',
	align = 'left',
	colour,
	display,
	fontWeight = 'normal',
	transform,
	breakWord,
	noWrap,
	size = '4',
	strong = false,
	style,
	 },
	 ref,
	) => (
	<Box
		is={Component}
		ref={ref}
		display={display}
		textAlign={align}
		className={[
			useTextStyles({
				is: Component,
				size,
				colour: colour ?? (strong ? 'dark' : undefined),
				fontWeight: strong ? 'bold' : fontWeight,
				transform,
				noWrap,
				breakWord,
			}),
			className,
		]}
		style={style}
	>
		{children}
	</Box>
));

export default Text;
