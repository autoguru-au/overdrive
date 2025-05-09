import React, { cloneElement, type ElementType } from 'react';

import { useBox, type UseBoxProps } from '../Box';

import { visuallyHidden } from './VisuallyHidden.css';

/**
 * Wrap any content or components with `<VisuallyHidden>` to apply styling that ensure the child content is not
 * visually displayed on the screen but is still present in the DOM/accessibility tree for assitive technology.
 * Use the `as` prop to change the rendered html tag.
 */
export const VisuallyHidden = <E extends ElementType>({
	children,
	...props
}: UseBoxProps<E>) => {
	const { Component, componentProps, reactElement } = useBox<E>({
		...(props as UseBoxProps<E>),
		className: visuallyHidden,
		odComponent: 'visually-hidden',
	});

	if (reactElement) {
		return cloneElement(reactElement, componentProps, children);
	}

	return <Component {...componentProps}>{children}</Component>;
};

export default VisuallyHidden;
