import clsx from 'clsx';
import React from 'react';

import { stack, type RecipeStackProps } from '../../styles/stack.css';

import { sprinkles, type Sprinkles } from './sprinkles.css';
import {
	variantColourSwatch,
	type VariantColourSwatchProps,
} from './styles.css';

export type AsProp<C extends React.ElementType> = {
	as?: C;
};

export type PolyComponentProps<C extends React.ElementType, P> = AsProp<C> &
	Omit<React.ComponentPropsWithoutRef<C>, keyof AsProp<C> | keyof P> &
	P;

export type BoxProps<C extends React.ElementType> = PolyComponentProps<
	C,
	Sprinkles
>;

export const Box = <C extends React.ElementType = 'div'>({
	as,
	children,
	className,
	style,
	...props
}: BoxProps<C>) => {
	const Tag = as ?? 'div';

	return (
		<Tag className={clsx([sprinkles(props), className])} style={style}>
			{children}
		</Tag>
	);
};

type StackSprinkles = Pick<
	Sprinkles,
	'alignItems' | 'flexDirection' | 'flexWrap' | 'gap' | 'justifyContent'
>;

export type StackProps<C extends React.ElementType> = PolyComponentProps<
	C,
	RecipeStackProps & StackSprinkles
>;

export const Stack = <C extends React.ElementType = 'div'>({
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
}: StackProps<C>) => (
	<div
		{...props}
		className={clsx([
			sprinkles({
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

type ColourSwatchProps = Omit<BoxProps<'div'>, 'size'> &
	VariantColourSwatchProps;
export const ColourSwatch = ({ shape, size, ...props }: ColourSwatchProps) => (
	<Box {...props} className={variantColourSwatch({ shape, size })}></Box>
);

export { type Sprinkles } from './sprinkles.css';
