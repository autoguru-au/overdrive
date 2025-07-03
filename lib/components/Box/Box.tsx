import type { PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { useBox, type UseBoxProps as BoxProps } from './useBox/useBox';

/**
 * The Box component provides powerful responsive style props to a given tag, defaulting to a `<div>` element.
 * Style props are generated from the design tokens, are fully type-safe, and reuse utility classes.
 *
 * Use the `as` prop to control the rendered HTML tag. The box component exposes design system tokens relative to each style
 * prop.
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
 * <Box as={<MyCustomThing />} borderColor="info" borderWidth="1" />
 */
export const Box = forwardRef<HTMLElement, PropsWithChildren<BoxProps>>(
	({ children, ...props }, ref) => {
		const { Component, componentProps } = useBox(props);

		return (
			<Component {...componentProps} ref={ref}>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';

export { type UseBoxProps as BoxProps } from './useBox/useBox';
