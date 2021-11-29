import clsx from 'clsx';
import type { JSXElementConstructor } from 'react';

import * as resetStyles from '../../reset/reset.css';
import { Tokens } from '../../themes/tokens';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

import * as styles from './useBoxStyles.css';

interface Padding {
	padding?: ResponsiveProp<keyof Tokens['space']>;
	paddingX?: ResponsiveProp<keyof Tokens['space']>;
	paddingY?: ResponsiveProp<keyof Tokens['space']>;
	paddingTop?: ResponsiveProp<keyof Tokens['space']>;
	paddingRight?: ResponsiveProp<keyof Tokens['space']>;
	paddingBottom?: ResponsiveProp<keyof Tokens['space']>;
	paddingLeft?: ResponsiveProp<keyof Tokens['space']>;
}

interface Margin {
	margin?: ResponsiveProp<keyof Tokens['space']>;
	marginX?: ResponsiveProp<keyof Tokens['space']>;
	marginY?: ResponsiveProp<keyof Tokens['space']>;
	marginTop?: ResponsiveProp<keyof Tokens['space']>;
	marginRight?: ResponsiveProp<keyof Tokens['space']>;
	marginBottom?: ResponsiveProp<keyof Tokens['space']>;
	marginLeft?: ResponsiveProp<keyof Tokens['space']>;
}

// TODO: Investigate this further, ie do we really need to be able to define all edges?
interface Border {
	borderWidth?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthX?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthY?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthTop?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthRight?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthBottom?: ResponsiveProp<keyof Tokens['border']['width']>;
	borderWidthLeft?: ResponsiveProp<keyof Tokens['border']['width']>;

	borderColour?: keyof Tokens['border']['colours'];
	borderColourX?: keyof Tokens['border']['colours'];
	borderColourY?: keyof Tokens['border']['colours'];
	borderColourTop?: keyof Tokens['border']['colours'];
	borderColourRight?: keyof Tokens['border']['colours'];
	borderColourBottom?: keyof Tokens['border']['colours'];
	borderColourLeft?: keyof Tokens['border']['colours'];

	// TODO: Should this also house X,Y,T,R,B,L?
	borderRadius?: ResponsiveProp<keyof typeof styles.borderRadius>;
}

interface Flex {
	alignItems?: ResponsiveProp<keyof typeof styles.alignItems>;
	flexDirection?: ResponsiveProp<keyof typeof styles.flexDirection>;
	flexGrow?: keyof typeof styles.flexGrow;
	flexShrink?: keyof typeof styles.flexShrink;
	flexWrap?: keyof typeof styles.flexWrap;
	justifyContent?: ResponsiveProp<keyof typeof styles.justifyContent>;
}

export interface BoxStyleProps extends Padding, Margin, Border, Flex {
	is?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
	boxShadow?: ResponsiveProp<keyof typeof styles.boxShadow>;
	display?: keyof typeof styles.display;

	position?: keyof typeof styles.position;

	width?: keyof typeof styles.width;
	height?: keyof typeof styles.height;

	backgroundColour?: keyof typeof styles.backgroundColours;
	opacity?: keyof typeof styles.opacity;

	overflow?: keyof typeof styles.overflow;
	userSelect?: keyof typeof styles.userSelect;
	textAlign?: keyof typeof styles.textAlign;
	pointerEvents?: keyof typeof styles.pointerEvents;

	className?: Parameters<typeof clsx>[0];
}

export const useBoxStyles = ({
	is,
	display,
	padding,
	paddingX,
	paddingY,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	margin,
	marginX,
	marginY,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	boxShadow,
	borderWidth,
	borderWidthX,
	borderWidthY,
	borderWidthTop,
	borderWidthRight,
	borderWidthBottom,
	borderWidthLeft,
	borderColour,
	borderColourX,
	borderColourY,
	borderColourTop,
	borderColourRight,
	borderColourBottom,
	borderColourLeft,
	borderRadius,
	backgroundColour,
	opacity,
	width,
	height,
	position,
	overflow,
	userSelect,
	textAlign,
	pointerEvents,
	alignItems,
	flexDirection,
	flexGrow,
	flexShrink,
	flexWrap,
	justifyContent,
	className,
}: BoxStyleProps) => {
	const resolvedPaddingTop = paddingTop || paddingY || padding;
	const resolvedPaddingRight = paddingRight || paddingX || padding;
	const resolvedPaddingBottom = paddingBottom || paddingY || padding;
	const resolvedPaddingLeft = paddingLeft || paddingX || padding;

	const resolvedMarginTop = marginTop || marginY || margin;
	const resolvedMarginRight = marginRight || marginX || margin;
	const resolvedMarginBottom = marginBottom || marginY || margin;
	const resolvedMarginLeft = marginLeft || marginX || margin;

	const resolvedBorderWidthTop =
		borderWidthTop || borderWidthY || borderWidth;
	const resolvedBorderWidthRight =
		borderWidthRight || borderWidthX || borderWidth;
	const resolvedBorderWidthBottom =
		borderWidthBottom || borderWidthY || borderWidth;
	const resolvedBorderWidthLeft =
		borderWidthLeft || borderWidth || borderWidth;

	const resolvedBorderColourTop =
		borderColourTop || borderColourY || borderColour;
	const resolvedBorderColourRight =
		borderColourRight || borderColourX || borderColour;
	const resolvedBorderColourBottom =
		borderColourBottom || borderColourY || borderColour;
	const resolvedBorderColourLeft =
		borderColourLeft || borderColour || borderColour;

	const hasBorder =
		resolvedBorderWidthTop ||
		resolvedBorderWidthRight ||
		resolvedBorderWidthBottom ||
		resolvedBorderWidthLeft;

	return clsx(
		typeof is === 'string'
			? [resetStyles.element[is as keyof typeof resetStyles.element]]
			: [resetStyles.element.div],

		resolveResponsiveStyle(resolvedPaddingTop, styles.padding.top),
		resolveResponsiveStyle(resolvedPaddingRight, styles.padding.right),
		resolveResponsiveStyle(resolvedPaddingBottom, styles.padding.bottom),
		resolveResponsiveStyle(resolvedPaddingLeft, styles.padding.left),

		resolveResponsiveStyle(resolvedMarginTop, styles.margin.top),
		resolveResponsiveStyle(resolvedMarginRight, styles.margin.right),
		resolveResponsiveStyle(resolvedMarginBottom, styles.margin.bottom),
		resolveResponsiveStyle(resolvedMarginLeft, styles.margin.left),

		styles.display[display!],
		styles.width[width!],
		styles.height[height!],
		styles.position[position!],
		styles.overflow[overflow!],
		styles.userSelect[userSelect!],
		styles.textAlign[textAlign!],
		styles.pointerEvents[pointerEvents!],

		hasBorder && styles.border.style,
		hasBorder &&
			resolvedBorderColourTop &&
			styles.border.colour.top[resolvedBorderColourTop],
		hasBorder &&
			resolvedBorderColourRight &&
			styles.border.colour.right[resolvedBorderColourRight],
		hasBorder &&
			resolvedBorderColourBottom &&
			styles.border.colour.bottom[resolvedBorderColourBottom],
		hasBorder &&
			resolvedBorderColourLeft &&
			styles.border.colour.left[resolvedBorderColourLeft],

		hasBorder &&
			resolvedBorderWidthTop &&
			resolveResponsiveStyle(
				resolvedBorderWidthTop,
				styles.border.width.top,
			),
		hasBorder &&
			resolvedBorderWidthRight &&
			resolveResponsiveStyle(
				resolvedBorderWidthRight,
				styles.border.width.right,
			),
		hasBorder &&
			resolvedBorderWidthBottom &&
			resolveResponsiveStyle(
				resolvedBorderWidthBottom,
				styles.border.width.bottom,
			),
		hasBorder &&
			resolvedBorderWidthLeft &&
			resolveResponsiveStyle(
				resolvedBorderWidthLeft,
				styles.border.width.left,
			),
		resolveResponsiveStyle(boxShadow, styles.boxShadow),
		borderRadius &&
			resolveResponsiveStyle(borderRadius, styles.borderRadius),

		styles.backgroundColours[backgroundColour!],
		styles.opacity[opacity!],

		alignItems && resolveResponsiveStyle(alignItems, styles.alignItems),
		flexDirection &&
			resolveResponsiveStyle(flexDirection, styles.flexDirection),
		styles.flexGrow[flexGrow!],
		styles.flexShrink[flexShrink!],
		styles.flexWrap[flexWrap!],
		justifyContent &&
			resolveResponsiveStyle(justifyContent, styles.justifyContent),

		className,
	);
};
