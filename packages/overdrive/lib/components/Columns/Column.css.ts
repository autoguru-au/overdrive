import { styleVariants } from '@vanilla-extract/css';

import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

const getSizeStyle = (scale: number) => `${scale * 100}%`;

export const width = makeResponsiveStyle(
	{
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
	'flexBasis',
);

export const align = styleVariants({
	stretch: {
		alignSelf: 'stretch',
	},
	top: {
		alignSelf: 'flex-start',
	},
	centre: {
		alignSelf: 'center',
	},
	bottom: {
		alignSelf: 'flex-end',
	},
});
