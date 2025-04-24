import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { styledIntentionalElement } from '../../styles/intentional.css';
import { fontSize, fontWeight } from '../../styles/typography.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

export const styledBadge = recipe({
	base: [
		{
			display: 'inline-block',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			textTransform: 'uppercase',
			letterSpacing: '0.5px',
			lineHeight: '1',
			whiteSpace: 'nowrap',
			padding: tokens.space[1],
		},
		fontWeight.semiBold,
	],
	variants: {
		colour: {
			neutral: {},
			red: {},
			green: {},
			blue: {},
			yellow: {},
		},
		inverted: {
			true: {},
			false: {},
		},
		size: {
			small: [fontSize.xxs, fontWeight.bold],
			standard: [fontSize.xs],
			large: [
				fontSize.md,
				{
					padding: tokens.space[4],
				},
			],
		},
	},
	compoundVariants: [
		{
			variants: { colour: 'neutral', inverted: false },
			style: styledIntentionalElement({
				intention: 'neutral',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'neutral', inverted: true },
			style: styledIntentionalElement({
				intention: 'neutral',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'red', inverted: false },
			style: styledIntentionalElement({
				intention: 'danger',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'red', inverted: true },
			style: styledIntentionalElement({
				intention: 'danger',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'green', inverted: false },
			style: styledIntentionalElement({
				intention: 'success',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'green', inverted: true },
			style: styledIntentionalElement({
				intention: 'success',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'blue', inverted: false },
			style: styledIntentionalElement({
				intention: 'information',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'blue', inverted: true },
			style: styledIntentionalElement({
				intention: 'information',
				inverted: true,
			}),
		},
		{
			variants: { colour: 'yellow', inverted: false },
			style: styledIntentionalElement({
				intention: 'warning',
				inverted: false,
			}),
		},
		{
			variants: { colour: 'yellow', inverted: true },
			style: styledIntentionalElement({
				intention: 'warning',
				inverted: true,
			}),
		},
	],
});

export type StyledBadgeProps = NonNullable<RecipeVariants<typeof styledBadge>>;
