import React, { cloneElement } from 'react';

import { useBox, UseBoxProps, type BoxLikeProps } from '../Box/useBox';

import { textStyles, type TextStylesProps } from './textStyles';

export type TextTags = 'label' | 'p' | 'span';

interface CustomTextProps extends Omit<TextStylesProps, 'as'> {
	/** Use bold font weight */
	strong?: boolean;
}

export type TextProps<E extends TextTags = 'span'> = Omit<
	BoxLikeProps<E, CustomTextProps>,
	'is'
>;

export const Text = <E extends TextTags>({
	as = 'span' as E,
	children,
	className,
	color,
	colour: _colour,
	display,
	fontWeight = 'normal',
	transform,
	breakWord,
	noWrap,
	size = '4',
	strong = false,
	...props
}: TextProps<E>) => {
	const colourOrDefault = !_colour && strong ? 'dark' : _colour;
	const colour = color ? undefined : colourOrDefault;

	const styles = textStyles({
		as: as as TextTags,
		size,
		color,
		colour,
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
