import clsx from 'clsx';
import type { ElementType } from 'react';

import * as resetStyles from '../../reset/reset.css';
import {
	filterSprinklesProps,
	sprinkles,
	type Sprinkles,
	sprinklesResponsive,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';

import type { BoxProps } from './Box';

export type BoxStylesProps<E extends ElementType = 'div'> = Sprinkles &
	SprinklesResponsive &
	Pick<BoxProps<E>, 'as' | 'className'>;

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
	const resets =
		tagName in resetStyles.element ? resetStyles.element[tagName] : '';
	const { sprinklesProps, sprinklesResponsiveProps } =
		filterSprinklesProps(props);
	return clsx(
		resets,
		sprinkles(sprinklesProps),
		sprinklesResponsive(sprinklesResponsiveProps),
		className,
	);
};
