import clsx from 'clsx';

import * as resetStyles from '../../reset/reset.css';
import {
	sprinkles,
	isSprinklesProperty,
	type Sprinkles,
	sprinklesResponsive,
	isSprinklesResponsiveProperty,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';

import type { BoxProps } from './Box';

export type BoxStylesProps = Sprinkles &
	SprinklesResponsive &
	Pick<BoxProps, 'as' | 'className'>;

/**
 * Filters and separates sprinkles props into three categories that relate to base sprinkes, responsive sprinkles, and leftovers
 *
 * @param props - Object containing all props to be filtered
 * @returns `{ sprinklesProps, sprinklesResponsiveProps, remainingProps }`
 */
export const filterSprinklesProps = (props: object) =>
	Object.entries(props).reduce(
		(acc, [key, value]) => {
			if (isSprinklesProperty(key)) {
				acc.sprinklesProps[key] = value;
			} else if (isSprinklesResponsiveProperty(key)) {
				//@ts-expect-error responsive sprinkles props are too complex to represent
				acc.sprinklesResponsiveProps[key] = value;
			} else {
				acc.remainingProps[key] = value;
			}
			return acc;
		},
		{
			sprinklesProps: {} as Sprinkles,
			sprinklesResponsiveProps: {} as SprinklesResponsive,
			remainingProps: {},
		},
	);

/**
 * A hook that returns combined base reset styles for the specified HTML element with any additional className props
 */
export const boxStyles = ({ as, className, ...props }: BoxStylesProps) => {
	const tagName = as?.toString();
	const resets =
		tagName && tagName in resetStyles.element
			? [resetStyles.element[tagName]]
			: [resetStyles.element.div];
	const { sprinklesProps, sprinklesResponsiveProps } =
		filterSprinklesProps(props);
	return clsx(
		resets,
		sprinkles(sprinklesProps),
		sprinklesResponsive(sprinklesResponsiveProps),
		className,
	);
};
