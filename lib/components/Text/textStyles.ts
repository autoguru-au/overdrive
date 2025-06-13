import clsx from 'clsx';

import { sprinkles } from '../../styles/sprinkles.css';
import {
	typographyStyles,
	type TypographyStyleProps,
	type TypographyVariants,
} from '../../styles/typography.css';

export type TextTags = NonNullable<TypographyVariants['as']>;
export interface TextStyleProps
	extends TypographyVariants,
		TypographyStyleProps {}

/**
 * primary utility for styling typography, combines reset, vanilla-extract sprinkles and additional variant props
 */
export const textStyles = ({
	as,

	align: textAlign,
	breakWord,
	color, // modern semantic colour tokens
	colour = color ? undefined : 'neutral', // legacy colours
	noWrap,
	size,
	strong,
	transform: textTransform,
	weight,
	wordBreak,
	wrap: textWrap,
}: TextStyleProps) =>
	clsx(
		sprinkles({
			textAlign,
			textTransform,
			textWrap,
			wordBreak,
		}),
		typographyStyles({
			as,
			breakWord,
			color,
			colour,
			noWrap,
			size,
			strong,
			weight,
		}),
	);
