import clsx from 'clsx';
import type { ElementType } from 'react';

import { element } from '../../reset/reset.css';
import {
	sprinkles,
	type Sprinkles,
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';
import { filterSprinklesProps } from '../../utils/sprinkles';

import type { BoxProps } from './Box';

export type BoxStylesProps<E extends ElementType = 'div'> = Sprinkles &
	SprinklesResponsive &
	Pick<BoxProps<E>, 'as' | 'className'>;

const borderColorProps = [
	'borderColor',
	'borderBottomColor',
	'borderLeftColor',
	'borderRightColor',
	'borderTopColor',
];
const borderStyleProps = [
	'borderStyle',
	'borderBottomStyle',
	'borderLeftStyle',
	'borderRightStyle',
	'borderTopStyle',
];
const borderWidthProps = [
	'borderWidth',
	'borderBottomWidth',
	'borderLeftWidth',
	'borderRightWidth',
	'borderTopWidth',
];

/**
 * A function to be used for the `className` prop, returns combined base reset styles for the specified HTML element
 * and concatenates classes together with `className` can be an array, object, or other `clsx`-supported structure
 */
export const boxStyles = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: BoxStylesProps<E>) => {
	const tagName: string = as?.toString() ?? 'div';
	const resets = tagName in element ? element[tagName] : '';

	const hasBorderStyle = borderStyleProps.some((key) => !!props[key]);
	const hasBorderColorOrWidth = [
		...borderColorProps,
		...borderWidthProps,
	].some((key) => !!props[key]);

	const { sprinklesProps, sprinklesResponsiveProps } =
		filterSprinklesProps(props);

	if (hasBorderColorOrWidth && !hasBorderStyle) {
		sprinklesProps['borderStyle'] = 'solid';
	}

	return clsx(
		resets,
		sprinkles(sprinklesProps),
		sprinklesResponsive(sprinklesResponsiveProps),
		className,
	);
};
