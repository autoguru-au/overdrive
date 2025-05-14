import clsx from 'clsx';
import type { ElementType } from 'react';

import { resetStyles } from '../../styles/reset.css';
import {
	sprinkles,
	sprinklesLegacyColours,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { filterPropsWithStyles } from '../../utils/sprinkles';

import type { AsPolyProp, CommonBoxProps, StyleProps } from './';

export type BoxStylesProps<E extends ElementType = 'div'> = AsPolyProp<E> &
	Pick<CommonBoxProps, 'className'> &
	StyleProps;

export type BoxStylesReturn<P extends object> = [string, P];

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
 * Processes component props, or used directly with style prop values to
 * generate the combined className string for all style props (mapped from
 * vanilla-extract sprinkles) as well the incoming className.
 *
 * Also applies tag-specific resets based on the `as` prop value.
 *
 * @returns A `{ className, baseProps }` where baseProps are leftover after extracting
 * all style props.
 */
export const boxStylesWithFilteredProps = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: BoxStylesProps<E>) => {
	const hasBorderStyle = borderStyleProps.some((key) => !!props[key]);
	const hasBorderColorOrWidth = [
		...borderColorProps,
		...borderWidthProps,
	].some((key) => !!props[key]);

	const {
		sprinklesProps,
		sprinklesResponsiveProps,
		sprinklesLegacyColourProps,
		baseProps,
	} = filterPropsWithStyles(props);

	// a little bit of logic specific to border properties for backwards compatability
	if (hasBorderColorOrWidth && !hasBorderStyle) {
		sprinklesProps['borderStyle'] = 'solid';
	}

	return {
		className: clsx(
			resetStyles({ as: as ? `${as}` : as }),
			sprinkles(sprinklesProps),
			sprinklesResponsive(sprinklesResponsiveProps),
			sprinklesLegacyColours(sprinklesLegacyColourProps),
			className,
		),
		baseProps,
	};
};

/**
 * Processes component props, or used directly with style prop values to
 * generate the combined className string for all style props (mapped from
 * vanilla-extract sprinkles) as well the incoming className.
 *
 * Also applies tag-specific resets based on the `as` prop value.
 */
export const boxStyles = <E extends ElementType = 'div'>(
	props: BoxStylesProps<E>,
) => {
	const { className } = boxStylesWithFilteredProps<E>(props);
	return className;
};
