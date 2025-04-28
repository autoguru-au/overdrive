import clsx from 'clsx';
import React, { type ElementType, type ComponentPropsWithRef } from 'react';

import { useDeepCompareMemo } from '../../hooks';
import type {
	Sprinkles,
	SprinklesResponsive,
	SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import { filterNonSprinklesProps } from '../../utils/sprinkles';

import { boxStyles } from './boxStyles';

export type StyleProps = Sprinkles &
	SprinklesResponsive &
	SprinklesLegacyColours;
type PolymorphicComponentProps<E extends ElementType, Props = object> = {
	as?: E;
	className?: clsx.ClassValue;
} & Omit<ComponentPropsWithRef<E>, keyof Props | 'as' | 'className'> &
	Props;

export type BoxProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
	E,
	StyleProps
>;

/**
 * A polymorphic Box component that provides a flexible container with styling capabilities, defauilting to a `<div>` element.
 * Use the `as` prop to control the rendered HTML tag. The box component exposes design system tokens relative to each style
 * prop.
 *
 * Props include:
 * - Sprinkles props (spacing, colors, layout, etc.)
 * - Responsive props (arrays for different breakpoints)
 * - Also accepts valid HTML attributes for the chosen HTML tag
 *
 * @example
 * <Box as="section" mx="5" py="5" backgroundColor="accent">
 *   Section content
 * </Box>
 *
 * @example
 * <Box display={['block', 'flex']} p={['3', '6', '8']}>Responsive padding</Box>
 */
export const Box = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: BoxProps<E>) => {
	const Component = as ?? 'div';

	// Deep compare props for style calculation
	const style = useDeepCompareMemo(
		() =>
			boxStyles({
				as,
				className,
				...props,
			}),
		[as, className, props],
	);

	// Deep compare props for remaining props
	const remainingProps = useDeepCompareMemo(
		() => filterNonSprinklesProps(props),
		[props],
	);

	return <Component className={style} {...remainingProps} />;
};

Box.displayName = 'Box';
