import { style } from '@vanilla-extract/css';

import { cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { textStyles } from '../../styles/typography';

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
				cursor: 'pointer',
				// minHeight: '48px',
				// minWidth: '140px',
				// transition: 'border-color 0.2s ease',
				// ':hover': {
				// 	borderColor: '#666666',
				// },
				// ':focus-within': {
				// 	borderColor: '#0066cc',
				// 	outline: '2px solid #0066cc',
				// 	outlineOffset: '2px',
				// },
				// ':active': {
				// 	borderColor: '#0066cc',
				// },
			},
		},
	},
]);

export const dateFieldStyle = style([
	baseFieldStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				// width: '100%',
				// selectors: {
				// 	'&:focus': {
				// 		outline: 'none',
				// 	},
				// },
			},
		},
	},
]);

export const timeFieldStyle = style([
	baseFieldStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				borderTopWidth: 0,
				// selectors: {
				// 	'&:focus': {
				// 		outline: 'none',
				// 	},
				// },
			},
		},
	},
]);

export const labelStyle = textStyles({
	align: 'left',
	size: '2',
	weight: 'bold',
});
export const valueStyle = textStyles({ size: '4' });

export const inputResetStyle = style([
	// sprinkles({
	// 	width: 'full',
	// 	backgroundColor: 'transparent',
	// }),
	{
		'@layer': {
			[cssLayerComponent]: {
				appearance: 'none',
				backgroundColor: 'transparent',
				border: 'none',
				cursor: 'pointer',
				outline: 'none',
				// ':focus': {
				// 	outline: 'none',
				// },
				width: '100%',
			},
		},
	},
]);

export const dateInputStyle = style([
	inputResetStyle,
	valueStyle,
	// {
	// 	'@layer': {
	// 		[cssLayerComponent]: {
	// 			backgroundColor: 'transparent',
	// 			border: 'none',
	// 			display: 'flex',
	// 			// cursor: 'pointer',
	// 			outline: 'none',
	// 			// ':focus': {
	// 			// 	outline: 'none',
	// 			// },
	// 		},
	// 	},
	// },
]);
