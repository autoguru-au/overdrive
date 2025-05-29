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
			children,
			className,

			// style props
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

			backgroundColor,
			backgroundColour,
			boxShadow,
			color,
			colour,
			opacity,

			borderRadius,
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

			...allOtherProps
		},
		ref,
	) => {
		const cls = boxStyles({
			as,
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

			backgroundColor,
			backgroundColour,
			boxShadow,
			color,
			colour,
			opacity,

			borderRadius,
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
