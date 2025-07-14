import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { cssLayerComponent } from '../../styles/layers.css';
import { responsiveConditions, sprinkles } from '../../styles/sprinkles.css';

const getSizeStyle = (scale: number) => `${scale * 100}%`;

const columnWidthResponsive = defineProperties({
	'@layer': cssLayerComponent,
	conditions: responsiveConditions,
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
	properties: {
		flexBasis: {
			'1/2': getSizeStyle(1 / 2),
			'1/3': getSizeStyle(1 / 3),
			'2/3': getSizeStyle(2 / 3),
			'1/4': getSizeStyle(1 / 4),
			'3/4': getSizeStyle(3 / 4),
			'1/5': getSizeStyle(1 / 5),
			'2/5': getSizeStyle(2 / 5),
			'3/5': getSizeStyle(3 / 5),
			'4/5': getSizeStyle(4 / 5),
			full: getSizeStyle(1),
			auto: 'auto',
		},
	},
});

export const sprinklesColumnWidthResponsive = createSprinkles(
	columnWidthResponsive,
);
export type SprinklesColumnWidth = Parameters<
	typeof sprinklesColumnWidthResponsive
>[0];

export const columnStyle = recipe({
	base: {},
	variants: {
		alignSelf: {
			bottom: sprinkles({ alignSelf: 'end' }),
			center: sprinkles({ alignSelf: 'center' }),
			centre: sprinkles({ alignSelf: 'center' }),
			stretch: sprinkles({ alignSelf: 'stretch' }),
			top: sprinkles({ alignSelf: 'start' }),
		},
		grow: {
			true: sprinkles({ flexGrow: '1' }),
			false: sprinkles({ flexGrow: '0' }),
		},
		noShrink: {
			true: sprinkles({ flexShrink: '0' }),
			false: {},
		},
	},
	defaultVariants: {
		grow: false,
		noShrink: false,
	},
});

export type ColumnRecipeVariants = NonNullable<
	RecipeVariants<typeof columnStyle>
>;
