import clsx from 'clsx';
import type { ElementType } from 'react';

import { element } from '../../reset/reset.css';
import {
	sprinkles,
	sprinklesLegacyColours,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { filterSprinklesProps } from '../../utils/sprinkles';

import type { BoxBasedProps, StyleProps } from './';

export type BoxStylesProps<E extends ElementType = 'div'> = StyleProps &
	Omit<BoxBasedProps<E>, 'children'>;

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

	const {
		sprinklesProps,
		sprinklesResponsiveProps,
		sprinklesLegacyColourProps,
	} = filterSprinklesProps(props);

	if (hasBorderColorOrWidth && !hasBorderStyle) {
		sprinklesProps['borderStyle'] = 'solid';
	}

	return clsx(
		resets,
		sprinkles(sprinklesProps),
		sprinklesResponsive(sprinklesResponsiveProps),
		sprinklesLegacyColours(sprinklesLegacyColourProps),
		className,
	);
};
