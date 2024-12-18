import clsx from 'clsx';
import React from 'react';

import { odStyle, type ODStyle } from '../../styles/sprinkles.css';
import { stack, type RecipeStackProps } from '../../styles/stack.css';

import {
	variantColourSwatch,
	type VariantColourSwatchProps,
} from './styles.css';

type ElementAttributes = React.ComponentPropsWithoutRef<'div'>;
type FilteredAttributes = Pick<ElementAttributes, 'className' | 'style'>;
type ComponentProps<P> = React.PropsWithChildren<P & FilteredAttributes>;

export const Box = ({
	children,
	className,
	style,
	...props
}: ComponentProps<ODStyle>) => (
	<div className={clsx([odStyle(props), className])} style={style}>
		{children}
	</div>
);

type StackSprinkles = Pick<
	ODStyle,
	'alignItems' | 'flexDirection' | 'flexWrap' | 'gap' | 'justifyContent'
>;
export const Stack = ({
	alignItems,
	children,
	className,
	flexDirection,
	flexWrap,
	gap,
	horizontal,
	justifyContent,
	space,
	style,
	...props
}: ComponentProps<StackSprinkles & RecipeStackProps>) => (
	<div
		{...props}
		className={clsx([
			odStyle({
				alignItems,
				flexDirection,
				flexWrap,
				gap,
				justifyContent,
			}),
			stack({ space, horizontal }),
			className,
		])}
		style={style}
	>
		{children}
	</div>
);

type ColourSwatchProps = ComponentProps<
	Omit<ODStyle, 'size'> & VariantColourSwatchProps
>;
export const ColourSwatch = ({ shape, size, ...props }: ColourSwatchProps) => (
	<Box {...props} className={variantColourSwatch({ shape, size })}></Box>
);

export { type ODStyle } from '../../styles/sprinkles.css';
