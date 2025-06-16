import React, { cloneElement, type ElementType } from 'react';

import { useBox, type UseBoxProps } from './useBox';

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
export const NewBox = <E extends ElementType = 'div'>({
	children,
	...props
}: UseBoxProps<E>) => {
	const { Component, componentProps, reactElement } = useBox<E>(
		props as UseBoxProps<E>,
	);

	if (reactElement) {
		return cloneElement(reactElement, componentProps, children);
	}

	return <Component {...componentProps}>{children}</Component>;
};

NewBox.displayName = 'NewBox';
