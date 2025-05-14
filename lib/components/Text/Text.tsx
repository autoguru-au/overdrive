import React, { cloneElement } from 'react';

import type { ResetTagNames } from '../../styles/reset.css';
import { textStyles, type TextStylesProps } from '../../styles/typography.css';
import { useBox, UseBoxProps, type BoxLikeProps } from '../Box';

export type TextTags = Extract<ResetTagNames, 'label' | 'p' | 'span'>;
interface CustomTextProps extends Omit<TextStylesProps, 'as'> {
	/** Use bold font weight */
	strong?: boolean;
}

export type TextProps<E extends TextTags> = BoxLikeProps<E, CustomTextProps>;

export const Text = <E extends TextTags>({
	as = 'span' as E,
	children,
	className,
	colour,
	display,
	fontWeight = 'normal',
	transform,
	breakWord,
	noWrap,
	size = '4',
	strong = false,
	...props
}: TextProps<E>) => {
	const styles = textStyles({
		as: as as TextTags,
		size,
		colour: colour ?? (strong ? 'dark' : undefined),
		fontWeight: strong ? 'bold' : fontWeight,
		transform,
		noWrap,
		breakWord,
	});

	const { Component, componentProps, reactElement } = useBox<E>({
		...(props as UseBoxProps<E>),
		as,
		className: [styles, className],
		display,
	});

	if (reactElement) {
		return cloneElement(reactElement, componentProps, children);
	}

	return <Component {...componentProps}>{children}</Component>;
};

Text.displayName = 'Text';
