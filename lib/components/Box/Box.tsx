import type { AllHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import {
	componentStyles,
	type ComponentStylesProps,
} from '../../styles/componentStyles';
import { OdComponent, TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';

/**
 * Use CommonBoxProps to help consistently define additional utility props of a component
 */
export interface CommonBoxProps
	extends OdComponent,
		PropsWithChildren,
		TestId {}

export interface BoxProps
	extends Omit<
			AllHTMLAttributes<HTMLElement>,
			'as' | 'className' | 'color' | 'height' | 'is' | 'size' | 'width'
		>,
		CommonBoxProps,
		ComponentStylesProps {
	/** Pass in the HTML element or JSX component that should be rendered for the box */
	as?: ElementType;
}

/**
 * Box is a general purpose container with no specific semantics.
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
	(
		{
			as = 'div',
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
			color, // modern semantic colour tokens
			colour, // legacy colours
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
		const Component = as;

		const allClasses = componentStyles({
			as,
			className,

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

		return (
			<Component
				{...allOtherProps}
				{...dataAttrs({
					'od-component': odComponent?.toLocaleLowerCase(),
					testId,
				})}
				className={allClasses}
				ref={ref}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
