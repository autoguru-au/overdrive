import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import {
	sprinklesResponsive,
	totalGridColumns,
} from '../../styles/sprinkles.css';

export const columnWrapper = recipe({
	base: [
		sprinklesResponsive({ display: 'grid' }),
		{
			gridAutoFlow: 'row',
			gridTemplateColumns: `repeat(${totalGridColumns}, [col-start] 1fr)`,
		},
	],
	variants: {
		align: {
			stretch: sprinklesResponsive({
				alignItems: 'stretch',
				alignContent: 'stretch',
			}),
			top: sprinklesResponsive({
				alignItems: 'flex-start',
				alignContent: 'flex-start',
			}),
			center: sprinklesResponsive({
				alignItems: 'center',
				alignContent: 'center',
			}),
			bottom: sprinklesResponsive({
				alignItems: 'flex-end',
				alignContent: 'flex-end',
			}),
		},
		noWrap: {
			false: sprinklesResponsive({ flexWrap: 'wrap' }),
			true: sprinklesResponsive({ flexWrap: 'nowrap' }),
		},
		wrappingDirection: {
			default: '',
			reverse: sprinklesResponsive({ flexWrap: 'wrap-reverse' }),
		},
	},
	defaultVariants: {
		align: 'stretch',
		noWrap: false,
	},
});

export type ColumnWrapperVariants = NonNullable<
	RecipeVariants<typeof columnWrapper>
>;
