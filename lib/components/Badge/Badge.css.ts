import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { styledIntentionalElement } from '../../styles/intentional.css';
import { odStyle } from '../../styles/sprinkles.css';

export const styledBadge = recipe({
	base: [
		odStyle({
			borderRadius: '1',
			lineHeight: 'match',
			overflow: 'hidden',
			padding: '1',
			textOverflow: 'ellipsis',
			textTransform: 'uppercase',
			whiteSpace: 'nowrap',
		}),
		{
			letterSpacing: '0.5px',
		},
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
			small: odStyle({
				fontSize: 'xxs',
				fontWeight: 'bold',
			}),
			standard: odStyle({
				fontSize: 'xs',
				fontWeight: 'semibold',
			}),
			large: odStyle({
				fontSize: 'md',
				fontWeight: 'semibold',
				padding: '4',
			}),
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
