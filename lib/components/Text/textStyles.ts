import clsx from 'clsx';

import { resetStyles } from '../../styles/resetStyles';
import {
	sprinkles,
	sprinklesLegacyColours,
	type Sprinkles,
	type SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import {
	typographyStyles,
	type TypographyStyles,
} from '../../styles/typography.css';

export type TextColor = Sprinkles['color'];
export type TextColour = SprinklesLegacyColours['colour'];
export type TextSize = Sprinkles['text'];
export type FontWeight = Sprinkles['fontWeight'];

export interface TextStylesProps extends TypographyStyles {
	as?: string;
	color?: TextColor;
	colour?: TextColour;
	fontWeight?: FontWeight;
	size?: TextSize;
}

/**
 * primary utility for styling typography, combines reset, vanilla-extract sprinkles and additional variant props
 */
export const textStyles = ({
	as,
	breakWord,
	color,
	colour = color ? undefined : 'neutral',
	fontWeight,
	noWrap,
	size,
	transform,
}: TextStylesProps) =>
	clsx([
		resetStyles({ as }),
		sprinkles({ color, fontWeight, text: size }),
		sprinklesLegacyColours({ colour }),
		typographyStyles({ breakWord, noWrap, transform }),
	]);
