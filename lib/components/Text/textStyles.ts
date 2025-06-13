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
	color,
	colour = color ? undefined : 'neutral',
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
			color,
			textAlign,
			textTransform,
			textWrap,
			wordBreak,
		}),
		typographyStyles({
			as,
			breakWord,
			colour,
			noWrap,
			size,
			strong,
			weight,
		}),
	);
