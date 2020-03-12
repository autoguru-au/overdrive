import { style, styleMap } from 'treat';

import { makeResponsiveStyle } from '../../utils/responsiveProps';

const getSizeStyle = (scale: number) => `${scale * 100}%`;

export const content = style({
	display: 'flex',
	height: '100%',
	width: '100%',
});

export const width = makeResponsiveStyle(
	_ => ({
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
	}),
	'flexBasis',
);

export const shrinkOff = style({ flexShrink: 0 });

export const growOn = style({
	flexGrow: 1,
});

export const align = styleMap({
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
