import clsx from 'clsx';
import React from 'react';

import type { Sprinkles } from '../../styles/sprinkles.css';

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

export const ColourSwatch = ({
	children,
	className,
	shape,
	size,
	...props
}: VariantColourSwatchProps & {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) => (
	<div
		className={clsx(variantColourSwatch({ shape, size }), className)}
		{...props}
	>
		{children}
	</div>
);
