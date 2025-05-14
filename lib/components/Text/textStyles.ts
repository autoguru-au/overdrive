import clsx from 'clsx';

import { resetStyles } from '../../styles/resetStyles';
import { sprinkles, sprinklesLegacyColours } from '../../styles/sprinkles.css';
import {
	textVariants,
	type TextStylesProps,
} from '../../styles/typography.css';

/**
 * primary utility for styling typography, combines reset, vanilla-extract sprinkles and additional variant props
 */
export const textStyles = ({
	as,
	breakWord,
	color,
	colour,
	fontWeight,
	noWrap,
	size,
	transform,
}: TextStylesProps) =>
	clsx([
		resetStyles({ as }),
		sprinkles({ color, fontWeight, text: size }),
		sprinklesLegacyColours({ colour }),
		textVariants({ breakWord, noWrap, transform }),
	]);
