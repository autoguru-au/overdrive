import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

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
		wrappingDirection: 'default',
		align: 'stretch',
	},
});

export type ColumnsStyle = NonNullable<RecipeVariants<typeof columnsStyle>>;
