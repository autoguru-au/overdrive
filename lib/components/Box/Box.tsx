import React, {
	cloneElement,
	isValidElement,
	type ElementType,
	type ReactElement,
} from 'react';

import { useBox, type UseBoxProps } from './useBox';

export interface BoxProps {
	/**
	 * Pass a React element instead of an HTML tag. The provided element will receive the Box's generated props
	 * (e.g. className, data attributes). The `as` prop will be ignored
	 */
	asComponent?: ReactElement;
}

/**
 * A polymorphic Box component that provides a flexible container with styling capabilities, defaulting to a `<div>` element.
 * Use the `as` prop to control the rendered HTML tag. The box component exposes design system tokens relative to each style
 * prop.
 *
 * An alternative to the `as` prop is `asComponent` which allows a React element to render with the custom props
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
 *
 * @example
 * <Box asComponent={<MyCustomThing />} borderColor="info" borderWidth="1" />
 */
export const Box = <E extends ElementType = 'div'>({
	asComponent,
	children,
	...props
}: UseBoxProps<E> & BoxProps) => {
	const { Component, componentProps } = useBox<E>(props as UseBoxProps<E>);

	if (isValidElement(asComponent)) {
		return cloneElement(asComponent, componentProps, children);
	}

	return <Component {...componentProps}>{children}</Component>;
};

Box.displayName = 'Box';
