import { recipe } from '@vanilla-extract/recipes';

// Define the base recipe for the NewBox component
export const newBoxRecipe = recipe({
	base: {
		display: 'block',
		boxSizing: 'border-box',
	},
});
