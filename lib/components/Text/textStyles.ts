import clsx from 'clsx';
import type { ElementType } from 'react';

import { resetStyles } from '../../styles/resetStyles';
import {
	sprinkles,
	sprinklesLegacyText,
	type Sprinkles,
	type SprinkesLegacyText,
} from '../../styles/sprinkles.css';
import {
	typographyStyles,
	type TypographyStyles,
} from '../../styles/typography.css';
import { onlyString } from '../../utils/propGuards';

export type TextColor = Sprinkles['color'];
export type TextColour = SprinkesLegacyText['colour'];
export type TextSize = Sprinkles['text'];
export type FontWeight = Sprinkles['fontWeight'];

export interface TextStylesProps extends TypographyStyles {
	as?: string | ElementType;
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
		resetStyles({ as: onlyString(as) }),
		sprinkles({ color, fontWeight, text: size }),
		sprinklesLegacyText({ colour }),
		typographyStyles({ breakWord, noWrap, transform }),
	]);
