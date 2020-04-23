import clsx from 'clsx';
import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import * as resetStyleRefs from '../../reset/reset.treat';
import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import * as styleRefs from './useBoxStyles.treat';

interface Padding {
	padding?: ResponsiveProp<keyof Theme['space']>;
	paddingX?: ResponsiveProp<keyof Theme['space']>;
	paddingY?: ResponsiveProp<keyof Theme['space']>;
	paddingTop?: ResponsiveProp<keyof Theme['space']>;
	paddingRight?: ResponsiveProp<keyof Theme['space']>;
	paddingBottom?: ResponsiveProp<keyof Theme['space']>;
	paddingLeft?: ResponsiveProp<keyof Theme['space']>;
}

interface Margin {
	margin?: ResponsiveProp<keyof Theme['space']>;
	marginX?: ResponsiveProp<keyof Theme['space']>;
	marginY?: ResponsiveProp<keyof Theme['space']>;
	marginTop?: ResponsiveProp<keyof Theme['space']>;
	marginRight?: ResponsiveProp<keyof Theme['space']>;
	marginBottom?: ResponsiveProp<keyof Theme['space']>;
	marginLeft?: ResponsiveProp<keyof Theme['space']>;
}

// TODO: Investigate this further, ie do we really need to be able to define all edges?
interface Border {
	borderWidth?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthX?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthY?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthTop?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthRight?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthBottom?: ResponsiveProp<keyof Theme['border']['width']>;
	borderWidthLeft?: ResponsiveProp<keyof Theme['border']['width']>;

	borderColour?: keyof Theme['border']['colours'];
	borderColourX?: keyof Theme['border']['colours'];
	borderColourY?: keyof Theme['border']['colours'];
	borderColourTop?: keyof Theme['border']['colours'];
	borderColourRight?: keyof Theme['border']['colours'];
	borderColourBottom?: keyof Theme['border']['colours'];
	borderColourLeft?: keyof Theme['border']['colours'];

	// TODO: Should this also house X,Y,T,R,B,L?
	borderRadius?: ResponsiveProp<keyof typeof styleRefs.borderRadius>;
}

export interface BoxStyleProps extends Padding, Margin, Border {
	is?: keyof JSX.IntrinsicElements;
	boxShadow?: ResponsiveProp<keyof typeof styleRefs.boxShadow>;
	display?: 'block' | 'inline-block';

	position?: keyof typeof styleRefs.position;
	width?: keyof typeof styleRefs.width;

	backgroundColour?: keyof typeof styleRefs.backgroundColours;

	overflow?: keyof typeof styleRefs.overflow;

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
	width,
	position,
	overflow,
	className,
}: BoxStyleProps) => {
	const resetStyles = useStyles(resetStyleRefs);
	const styles = useStyles(styleRefs);

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
		resetStyles.base,

		is &&
			typeof is === 'string' &&
			resetStyles.element[is as keyof typeof resetStyles.element],

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
		styles.position[position!],
		styles.overflow[overflow!],

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

		backgroundColour && styles.backgroundColours[backgroundColour],

		className,
	);
};
