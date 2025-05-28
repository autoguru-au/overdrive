import clsx from 'clsx';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';

import { boxStyles, type BoxStylesProps } from './newBox/boxStyles';

export interface BoxProps
	extends Omit<BoxStylesProps, 'as'>,
		Omit<
			AllHTMLAttributes<HTMLElement>,
			'as' | 'className' | 'color' | 'height' | 'is' | 'size' | 'width'
		> {
	as?: ElementType;
	is?: ElementType;

	children?: ReactNode;
}

/**
 * Box is a general purpose container with no specific semantics.
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
	(
		{
			is = 'div',
			as = is,
			className,

			p,
			pb,
			pl,
			pr,
			pt,
			px,
			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,

			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			margin,
			marginX,
			marginY,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,

			display,
			width,
			maxWidth,
			minWidth,
			height,
			position,
			overflow,
			userSelect,
			textAlign,
			pointerEvents,

			borderColor,
			borderBottomColor,
			borderLeftColor,
			borderRightColor,
			borderTopColor,

			borderColour,
			borderColourX,
			borderColourY,
			borderColourTop,
			borderColourRight,
			borderColourBottom,
			borderColourLeft,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			boxShadow,
			borderRadius,

			backgroundColour,
			color,
			colour,
			opacity,

			alignItems,
			order,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			justifyContent,
			justifySelf,
			gap,
			columnGap,
			rowGap,

			children,
			...allOtherProps
		},
		ref,
	) => {
		const cls = boxStyles({
			as,
			alignItems,
			order,
			backgroundColour,
			color,
			colour,
			borderColor,
			borderBottomColor,
			borderLeftColor,
			borderRightColor,
			borderTopColor,
			borderColour,
			borderColourBottom,
			borderColourLeft,
			borderColourRight,
			borderColourTop,
			borderColourX,
			borderColourY,
			borderRadius,
			borderWidth,
			borderWidthBottom,
			borderWidthLeft,
			borderWidthRight,
			borderWidthTop,
			borderWidthX,
			borderWidthY,
			boxShadow,
			columnGap,
			display,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			gap,
			height,
			justifyContent,
			justifySelf,
			rowGap,
			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginX,
			marginY,
			maxWidth,
			minWidth,
			opacity,
			overflow,
			p,
			pb,
			pl,
			pr,
			pt,
			px,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
			pointerEvents,
			position,
			textAlign,
			userSelect,
			width,
		});

		const Component = as;

		return (
			<Component
				ref={ref}
				className={clsx(cls, className)}
				{...allOtherProps}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
