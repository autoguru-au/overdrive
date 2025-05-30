import clsx from 'clsx';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';

import { dataAttrs } from '../../utils/dataAttrs';

import { boxStyles, type BoxStylesProps } from './newBox/boxStyles';
import type { CommonBoxProps } from './newBox/useBox';

export interface BoxProps
	extends CommonBoxProps,
		Omit<BoxStylesProps, 'as'>,
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
			odComponent,
			testId,

			// style props
			display,
			height,
			maxWidth,
			minWidth,
			overflow,
			overflowX,
			overflowY,
			pointerEvents,
			position,
			size,
			userSelect,
			useVar,
			width,

			bg,
			backgroundColor,
			backgroundColour,
			boxShadow,
			color,
			colour,
			fg,
			opacity,

			fontSize,
			fontWeight,
			lineHeight,
			text,
			textAlign,
			textWrap,

			borderRadius,
			borderColor,
			borderStyle,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderBottomColor,
			borderBottomStyle,
			borderBottomWidth,
			borderLeftColor,
			borderLeftStyle,
			borderLeftWidth,
			borderRightColor,
			borderRightStyle,
			borderRightWidth,
			borderTopColor,
			borderTopStyle,
			borderTopWidth,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			borderColour,
			borderColourX,
			borderColourY,
			borderColourBottom,
			borderColourLeft,
			borderColourRight,
			borderColourTop,
			borderBottomColour,
			borderLeftColour,
			borderRightColour,
			borderTopColour,

			alignContent,
			alignItems,
			alignSelf,
			columnGap,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			gap,
			gridAutoColumns,
			gridAutoFlow,
			gridAutoRows,
			gridColumns,
			justifyContent,
			justifySelf,
			placeItems,
			rowGap,
			order,

			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			margin,
			marginX,
			marginY,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,

			p,
			pb,
			pl,
			pr,
			pt,
			px,
			padding,
			paddingX,
			paddingY,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,

			...allOtherProps
		},
		ref,
	) => {
		const cls = boxStyles({
			as,

			display,
			height,
			maxWidth,
			minWidth,
			overflow,
			overflowX,
			overflowY,
			pointerEvents,
			position,
			size,
			userSelect,
			useVar,
			width,

			bg,
			backgroundColor,
			backgroundColour,
			boxShadow,
			color,
			colour,
			fg,
			opacity,

			fontSize,
			fontWeight,
			lineHeight,
			text,
			textAlign,
			textWrap,

			borderRadius,
			borderColor,
			borderStyle,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderBottomColor,
			borderBottomStyle,
			borderBottomWidth,
			borderLeftColor,
			borderLeftStyle,
			borderLeftWidth,
			borderRightColor,
			borderRightStyle,
			borderRightWidth,
			borderTopColor,
			borderTopStyle,
			borderTopWidth,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			borderColour,
			borderColourX,
			borderColourY,
			borderColourBottom,
			borderColourLeft,
			borderColourRight,
			borderColourTop,
			borderBottomColour,
			borderLeftColour,
			borderRightColour,
			borderTopColour,

			alignContent,
			alignItems,
			alignSelf,
			columnGap,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			gap,
			gridAutoColumns,
			gridAutoFlow,
			gridAutoRows,
			gridColumns,
			justifyContent,
			justifySelf,
			placeItems,
			rowGap,
			order,

			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			margin,
			marginX,
			marginY,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,

			p,
			pb,
			pl,
			pr,
			pt,
			px,
			padding,
			paddingX,
			paddingY,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
		});

		const Component = as;

		return (
			<Component
				{...allOtherProps}
				{...dataAttrs({
					'od-component': odComponent?.toLocaleLowerCase(),
					testId,
				})}
				className={clsx(cls, className)}
				ref={ref}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
