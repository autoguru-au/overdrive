import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style({
	position: 'sticky',
	transition: `box-shadow 0.3s ${vars.animation.easing.standard} 0s`,
});
export const simpleRoot = style({
	height: 'fit-content',
	position: 'sticky',
});

export const content = style({
	height: 'fit-content',
	transition: `transform 0.3s ${vars.animation.easing.standard} 0s`,
});

export const popped = style({
	transform: 'scale(1.01)',
});

export const zIndex = styleVariants(
	mapTokenToProperty(
		[0, 1, 2, 3, 99].reduce((tokens, current) => {
			tokens[current] = current;
			return tokens;
		}, {}),
		'zIndex',
	),
);

export const top = styleVariants(
	mapTokenToProperty(
		['none', '1', '3', '5', '7', 'subHeader'].reduce((tokens, current) => {
			tokens[current] =
				current === 'subHeader' ? '72px' : vars.space[current];
			return tokens;
		}, {}),
		'top',
	),
);

export const bottom = styleVariants(
	mapTokenToProperty(
		['none', '1', '3', '5', '7', 'subHeader'].reduce((tokens, current) => {
			tokens[current] =
				current === 'subHeader' ? '72px' : vars.space[current];
			return tokens;
		}, {}),
		'bottom',
	),
);
