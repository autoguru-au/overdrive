import clsx from 'clsx';
import React from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
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
}: ComponentProps<Sprinkles>) => (
	<div className={clsx([sprinkles(props), className])} style={style}>
		{children}
	</div>
);

type StackSprinkles = Pick<
	Sprinkles,
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

type ColourSwatchProps = ComponentProps<
	Omit<Sprinkles, 'size'> & VariantColourSwatchProps
>;
export const ColourSwatch = ({ shape, size, ...props }: ColourSwatchProps) => (
	<Box {...props} className={variantColourSwatch({ shape, size })}></Box>
);

export { type Sprinkles } from '../../styles/sprinkles.css';
