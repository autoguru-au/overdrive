import clsx from 'clsx';
import type { ElementType } from 'react';

import { borderReset } from '../../../styles/reset.css';
import { resetStyles } from '../../../styles/resetStyles';
import {
	sprinkles,
	type Sprinkles,
	type SprinklesLegacyColours,
} from '../../../styles/sprinkles.css';
import { filterPropsWithStyles } from '../../../utils/sprinkles';
import type { CommonBoxProps } from '../Box';

import type { AsPolyProp } from './useBox';

/** All vanilla-extract sprinkles props */
export type StyleProps = Sprinkles & SprinklesLegacyColours;

export type BoxStylesProps<E extends ElementType = 'div'> = AsPolyProp<E> &
	Pick<CommonBoxProps, 'className'> &
	StyleProps;

export type BoxStylesReturn<P extends object> = [string, P];

const borderProperties = ['Color', 'Colour', 'Width'];
const borderPostfixes = ['', 'Bottom', 'Left', 'Right', 'Top'];
const borderPropertyNames = new Set(
	borderProperties.flatMap((property) =>
		borderPostfixes.flatMap((postfix) => [
			`border${postfix}${property}`,
			`border${property}${postfix}`,
		]),
	),
);
export const calcHasBorder = (keys: string[]) =>
	[...borderPropertyNames].some((borderProp) => borderProp in keys);

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
	const { sprinklesProps, baseProps } = filterPropsWithStyles(props);
	const hasBorder = calcHasBorder(Object.keys(props));

	return {
		className: clsx(
			resetStyles({ as: as ? `${as}` : as }),
			// When any border color or width is specified, automatically set borderWidth to 'none'
			// and borderStyle to 'solid'. This handles properties with old naming and css-aligned
			hasBorder && borderReset,
			sprinkles(sprinklesProps),
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
