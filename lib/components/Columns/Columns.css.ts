import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens as tokens } from '../../themes';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const space = {
	spaceX: makeResponsiveStyle(tokens.space, 'paddingLeft'),
	spaceY: makeResponsiveStyle(tokens.space, 'paddingTop'),
};

export const columnsStyle = recipe({
	base: {
		display: 'flex',
		flexDirection: 'row',
	},
	variants: {
		align: {
			stretch: {
				alignContent: 'stretch',
				alignItems: 'stretch',
			},
			top: {
				alignContent: 'flex-start',
				alignItems: 'flex-start',
			},
			center: {
				alignContent: 'center',
				alignItems: 'center',
			},
			bottom: {
				alignContent: 'flex-end',
				alignItems: 'flex-end',
			},
		},
		noWrap: {
			false: {
				flexWrap: 'wrap',
			},
			true: {
				flexWrap: 'nowrap',
			},
		},
		wrappingDirection: {
			default: {},
			reverse: {
				flexWrap: 'wrap-reverse',
			},
		},
	},
	defaultVariants: {
		align: 'stretch',
		noWrap: false,
		wrappingDirection: 'default',
	},
});

export type ColumnsStyle = NonNullable<RecipeVariants<typeof columnsStyle>>;
