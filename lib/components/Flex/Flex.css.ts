import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
	base: {
		display: 'grid',
	},

	variants: {
		direction: {
			row: {
				gridAutoFlow: 'column',
			},
			column: {
				gridAutoFlow: 'row',
			},
		},
	},
});
