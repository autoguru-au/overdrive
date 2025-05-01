import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import {
	sprinklesResponsive,
	totalGridColumns,
} from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const columnWrapper = recipe({
	base: [
		sprinklesResponsive({ display: 'grid' }),
		{
			gridTemplateColumns: `repeat(${totalGridColumns}, [col-start] 1fr)`,
		},
	],
	variants: {
		align: {
			stretch: sprinklesResponsive({
				alignItems: 'stretch',
				// alignContent: 'stretch',
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
});

export type ColumnWrapperVariants = NonNullable<
	RecipeVariants<typeof columnWrapper>
>;

export const space = {
	spaceX: makeResponsiveStyle(vars.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle(vars.space, 'paddingTop'),
};
