import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../styles/sprinkles.css';

export const totalGridColumns = 12; // chosen to be divisible by 2, 3, 4
export const columnStyle = recipe({
	
	variants: {
		width: {
			'1/2': `span ${totalGridColumns / 2}`,
			'1/3': `span ${totalGridColumns / 3}`,
			'2/3': `span ${(totalGridColumns / 3) * 2}`,
			'1/4': `span ${totalGridColumns / 4}`,
			'3/4': `span ${(totalGridColumns / 4) * 3}`,
			'1/6': `span ${totalGridColumns / 6}`,
			'2/6': `span ${(totalGridColumns / 6) * 2}`,
			'3/6': `span ${(totalGridColumns / 6) * 3}`,
			'4/6': `span ${(totalGridColumns / 6) * 4}`,
			full: `span ${totalGridColumns}`,
			auto: 'auto',
		},
	},
});

export const columnGridStyle = recipe({
	base: {
		display: 'grid',
		gridTemplateColumns: `repeat(${totalGridColumns}, [col-start] 1fr)`,
		gridAutoFlow: 'row',
	},
	variants: {
		align: {
			stretch: sprinkles({
				alignItems: 'stretch',
				alignContent: 'stretch',
			}),
			top: sprinkles({
				alignItems: 'start',
				alignContent: 'start',
			}),
			center: sprinkles({
				alignItems: 'center',
				alignContent: 'center',
			}),
			bottom: sprinkles({
				alignItems: 'end',
				alignContent: 'end',
			}),
		},
		noWrap: {
			false: sprinkles({ flexWrap: 'wrap' }),
			true: sprinkles({ flexWrap: 'nowrap' }),
		},
		wrappingDirection: {
			default: '',
			reverse: sprinkles({ flexWrap: 'wrap-reverse' }),
		},
	},
	defaultVariants: {
		align: 'stretch',
		noWrap: false,
	},
});

export type ColumnGridStyle = NonNullable<
	RecipeVariants<typeof columnGridStyle>
>;
