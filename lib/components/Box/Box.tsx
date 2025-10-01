import type { ElementType } from 'react';
import React, { cloneElement, forwardRef } from 'react';

import {
	type PolymorphicRef,
	useBox,
	type UseBoxProps as BoxProps,
} from './useBox/useBox';

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
const BoxRender = <E extends ElementType = 'div'>(
	allProps: BoxProps<E>,
	ref: PolymorphicRef<E>,
) => {
	const { children, ...props } = allProps;
	const { Component, componentProps, reactElement } = useBox(props);

	if (reactElement) {
		return cloneElement(reactElement, {
			...componentProps,
			ref,
			children,
		});
	}

	return (
		<Component {...componentProps} ref={ref}>
			{children}
		</Component>
	);
};

type BoxComponent = <E extends ElementType = 'div'>(
	props: BoxProps<E> & { ref?: PolymorphicRef<E> },
) => ReturnType<typeof BoxRender<E>>;

export const Box = forwardRef(BoxRender) as BoxComponent & {
	displayName?: string;
};

Box.displayName = 'Box';

export {
	type UseBoxProps as BoxProps,
	type UseBoxPropsDefault as BoxPropsDefault,
} from './useBox/useBox';
