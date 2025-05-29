import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const space = {
	spaceX: makeResponsiveStyle(tokens.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle(tokens.space, 'paddingTop'),
};

export const columnsStyle = recipe({
	base: sprinkles({ display: 'flex', flexDirection: 'row' }),
	variants: {
		align: {
			stretch: sprinkles({
				alignContent: 'stretch',
				alignItems: 'stretch',
			}),
			top: sprinkles({
				alignContent: 'flex-start',
				alignItems: 'flex-start',
			}),
			center: sprinkles({
				alignContent: 'center',
				alignItems: 'center',
			}),
			centre: sprinkles({
				alignContent: 'center',
				alignItems: 'center',
			}),
			bottom: sprinkles({
				alignContent: 'flex-end',
				alignItems: 'flex-end',
			}),
		},
		noWrap: {
			false: sprinkles({ flexWrap: 'wrap' }),
			true: sprinkles({ flexWrap: 'nowrap' }),
		},
		wrappingDirection: {
			default: {},
			reverse: sprinkles({ flexWrap: 'wrap-reverse' }),
		},
	},
	defaultVariants: {
		align: 'stretch',
		noWrap: false,
		wrappingDirection: 'default',
	},
});

export type ColumnsStyle = NonNullable<RecipeVariants<typeof columnsStyle>>;
