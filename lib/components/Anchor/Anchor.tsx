import { IconType } from '@autoguru/icons';
import React, { cloneElement, type ElementType } from 'react';

import { Box } from '../Box/Box';
import { useBox, UseBoxProps, type BoxLikeProps } from '../Box/useBox';
import { Icon } from '../Icon/Icon';

const ANCHOR_TAG = 'a';

interface CustomProps {
	icon?: IconType;
}

export type AnchorProps<E extends ElementType = typeof ANCHOR_TAG> =
	BoxLikeProps<E, CustomProps>;

/**
 * Use the Anchor component to render a simple link style with an optional icon.
 */
export const Anchor = <E extends ElementType = typeof ANCHOR_TAG>({
	as = ANCHOR_TAG as E,
	children,
	icon,
	...props
}: AnchorProps<E>) => {
	const { Component, componentProps, reactElement } = useBox<E>({
		...(props as UseBoxProps<E>),
		alignItems: 'center',
		as,
		odComponent: 'anchor',
	});

	const Content = () => (
		<Box
			as="span"
			alignItems="center"
			colour="link"
			display="inline-flex"
			fontSize="4"
			fontWeight="bold"
			gap="2"
		>
			{icon && <Icon icon={icon} size="small" />}
			<span>{children}</span>
		</Box>
	);

	if (reactElement) {
		return cloneElement(reactElement, componentProps, <Content />);
	}

	return (
		<Component {...componentProps}>
			<Content />
		</Component>
	);
};
