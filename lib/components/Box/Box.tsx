import React, { type PropsWithChildren, type ElementType } from 'react';

import { useBox, type UseBoxProps } from './useBox';

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
	children,
	...props
}: PropsWithChildren<UseBoxProps<E>>) => {
	const { Component, componentProps } = useBox<E>(props as UseBoxProps<E>);

	return <Component {...componentProps}>{children}</Component>;
};

Box.displayName = 'Box';
