import type { ClassValue as ClassName } from 'clsx';
import React from 'react';

import { sprinkles } from '../../styles';
import {
	type HeadingTags,
	styledText,
	type TypographyProps,
} from '../../styles/typography';
import type { TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { type AdditionalStyleProps } from '../Text/Text';

type ElementAttributes = React.ComponentPropsWithoutRef<'h1'>;

export interface HeadingProps
	extends Omit<ElementAttributes, 'className' | 'is' | keyof TypographyProps>,
		TypographyProps,
		AdditionalStyleProps,
		TestId {
	as?: HeadingTags;
	className?: ClassName;
}

/**
 * Heading renders an <h1... h6> with default font size and weight
 */
export const Heading = ({
	as: Tag = 'h1',

	align,
	breakWord,
	children,
	className,
	color, // semantic tokens
	colour = 'dark', // legacy intentional tokens
	noWrap,
	size,
	transform,
	testId,
	weight = 'bold',
	wrap,

	display,
	m,
	mb,
	ml,
	mr,
	mt,
	mx,
	my,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	p,
	pb,
	pl,
	pr,
	pt,
	px,
	py,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,

	...props
}: HeadingProps) => {
	const classes = [
		sprinkles({
			display,
			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			my,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginX,
			marginY,
			p,
			pb,
			pl,
			pr,
			pt,
			px,
			py,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
		}),
		className,
	];
	return (
		<Tag
			{...props}
			className={styledText({
				as: Tag,
				align,
				breakWord,
				className: classes,
				color,
				colour,
				noWrap,
				size,
				transform,
				weight,
				wrap,
			})}
			{...dataAttrs({
				testid: testId,
			})}
		>
			{children}
		</Tag>
	);
};
