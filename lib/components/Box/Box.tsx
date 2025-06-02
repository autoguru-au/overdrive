import clsx from 'clsx';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';

import { borderReset } from '../../styles/reset.css';
import { elementResetStyles } from '../../styles/resetStyles';
import { sprinkles } from '../../styles/sprinkles.css';
import { dataAttrs } from '../../utils/dataAttrs';

import { type BoxStylesProps } from './newBox/boxStyles';
import type { CommonBoxProps } from './newBox/useBox';

export interface BoxProps
	extends CommonBoxProps,
		Omit<BoxStylesProps, 'as'>,
		Omit<
			AllHTMLAttributes<HTMLElement>,
			'as' | 'className' | 'color' | 'height' | 'is' | 'size' | 'width'
		> {
	as?: ElementType;
	/** @deprecated in transition to the `as` prop  */
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
			className: _className,
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
		const Component = as;
		const hasBorder = Boolean(
			borderColor ||
				borderStyle ||
				borderWidth ||
				borderWidthX ||
				borderWidthY ||
				borderBottomColor ||
				borderBottomStyle ||
				borderBottomWidth ||
				borderLeftColor ||
				borderLeftStyle ||
				borderLeftWidth ||
				borderRightColor ||
				borderRightStyle ||
				borderRightWidth ||
				borderTopColor ||
				borderTopStyle ||
				borderTopWidth ||
				borderWidthTop ||
				borderWidthRight ||
				borderWidthBottom ||
				borderWidthLeft ||
				borderColour ||
				borderColourX ||
				borderColourY ||
				borderBottomColour ||
				borderLeftColour ||
				borderRightColour ||
				borderTopColour,
		);

		const styles = sprinkles({
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

		const className = clsx(
			elementResetStyles(as),
			// When any border color or width is specified, automatically set borderWidth to 'none'
			// and borderStyle to 'solid'. This handles properties with old naming and css-aligned
			hasBorder && borderReset,
			styles,
			_className,
		);

		return (
			<Component
				{...allOtherProps}
				{...dataAttrs({
					'od-component': odComponent?.toLocaleLowerCase(),
					testId,
				})}
				className={className}
				ref={ref}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
