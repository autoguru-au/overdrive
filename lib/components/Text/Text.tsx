import React, { cloneElement } from 'react';

import { useBox, UseBoxProps, type BoxLikeProps } from '../Box/useBox';

import { textStyles, type TextStylesProps } from './textStyles';

// array of allowed HTML elements for Text
const TEXT_TAGS = ['span', 'p', 'label'] as const;
export type TextTags = (typeof TEXT_TAGS)[number];

interface CustomTextProps extends Omit<TextStylesProps, 'as'> {
	/** Use bold font weight */
	strong?: boolean;
}

export type TextProps<E extends TextTags = 'span'> = Omit<
	BoxLikeProps<E, CustomTextProps>,
	'is'
>;

/**
 * The main Overdrive component for consistent typography sizing and styling.
 * Supports semantic text styling with size, color, and weight variations.
 *
 * @example
 * <Text>
 *   This is some text
 * </Text>
 *
 * <Text as="p">
 *   This will render as a paragraph
 * </Text>
 *
 * <Text size="5" color="primary" strong>
 *   Important text
 * </Text>
 */
export const Text = <E extends TextTags>({
	as = 'span' as E,
	children,
	className,
	color, // semantic tokens
	colour: _colour, // legacy intentional tokens
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
		as: as as string,
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
