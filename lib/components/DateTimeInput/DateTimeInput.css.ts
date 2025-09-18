import { style } from '@vanilla-extract/css';

import { focusOutline, focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { textStyles } from '../../styles/typography';
import { overdriveTokens } from '../../themes';

const baseFieldStyle = style([
	sprinkles({
		backgroundColor: 'page',
		borderColor: 'default',
		borderRadius: 'lg',
		borderStyle: 'solid',
		borderWidth: '1',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '3',
		position: 'relative',
		textAlign: 'left',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				transition: `border-color 0.2s ${overdriveTokens.animation.easing.decelerate} 0s`,
				selectors: {
					[selectors.hover]: {
						borderColor: overdriveTokens.border.colours.dark,
						cursor: 'pointer',
					},
					[selectors.focusVisible]: {
						zIndex: '1',
					},
				},
			},
		},
	},
]);

export const dateFieldStyle = style([
	baseFieldStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				borderBottomColor: 'transparent',
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
			},
		},
	},
	focusOutlineStyle,
]);

export const timeFieldStyle = style([
	baseFieldStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				selectors: {
					['&:focus-within:not(:hover)']: focusOutline,
				},
			},
		},
	},
]);

export const labelStyle = style([
	{
		pointerEvents: 'none',
	},
	textStyles({
		align: 'left',
		size: '2',
		weight: 'bold',
	}),
]);
export const valueStyle = textStyles({ size: '4' });

export const inputResetStyle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				appearance: 'none',
				backgroundColor: 'transparent',
				border: 'none',
				cursor: 'pointer',
				outline: 'none',
				width: '100%',
			},
		},
	},
]);

export const dateInputStyle = style([inputResetStyle, valueStyle]);
