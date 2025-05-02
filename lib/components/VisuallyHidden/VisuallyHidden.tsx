import React, { type ElementType, type PropsWithChildren } from 'react';

import { useBox, type UseBoxProps } from '../Box';

import { visuallyHidden } from './VisuallyHidden.css';

export interface VisuallyHiddenProps<E extends ElementType>
	extends PropsWithChildren {
	as?: E;
}

/**
 * Wrap any content or components with `<VisuallyHidden>` to apply styling that ensure the child content is not
 * visually displayed on the screen but is still present in the DOM/accessibility tree for assitive technology.
 * Use the `as` prop to change the rendered html tag.
 */
export const VisuallyHidden = <E extends ElementType>({
	children,
	...props
}: VisuallyHiddenProps<E>) => {
	const { Component } = useBox<E>(props as UseBoxProps<E>);

	return (
		<Component
			className={visuallyHidden}
			data-od-component="VisuallyHidden"
		>
			{children}
		</Component>
	);
};

export default VisuallyHidden;
