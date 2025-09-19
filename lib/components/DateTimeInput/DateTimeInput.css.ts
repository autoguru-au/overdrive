import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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
						cursor: 'pointer',
					},
					[`&:hover:not(${selectors.disabled}, ${selectors.invalid})`]:
						{
							borderColor: overdriveTokens.border.colours.dark,
						},
					[selectors.invalid]: {
						borderColor: overdriveTokens.color.surface.danger,
					},
					[`${selectors.hoverNotDisabled}, ${selectors.invalid}, ${selectors.focusVisible}`]:
						{
							zIndex: '1',
						},
					[selectors.disabled]: {
						cursor: 'not-allowed',
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
				appearance: 'none',
				borderBottomColor: 'transparent',
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				width: '100%',
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
				marginTop: '-1px',
				selectors: {
					['&:focus-within:not(:hover)']: focusOutline,
				},
			},
		},
	},
]);

export const labelVariants = recipe({
	base: [
		textStyles({
			align: 'left',
			size: '2',
			transform: 'uppercase',
			weight: 'bold',
		}),
		{
			'@layer': {
				[cssLayerComponent]: {
					pointerEvents: 'none',
				},
			},
		},
	],
	variants: {
		invalid: {
			true: sprinkles({ color: 'danger' }),
		},
		disabled: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						color: overdriveTokens.colours.gamut.black400,
					},
				},
			},
		},
	},
});

export const inputResetStyle = style([
	{
		'@layer': {
			[cssLayerComponent]: {
				appearance: 'none',
				backgroundColor: 'transparent',
				border: 'none',
				cursor: 'pointer',
				minHeight: overdriveTokens.space[6],
				outline: 'none',
				width: '100%',
			},
		},
	},
]);
export const valueStyle = textStyles({ size: '4', transform: 'capitalize' });
export const inputStyle = style([
	inputResetStyle,
	valueStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				selectors: {
					[selectors.disabled]: {
						color: overdriveTokens.colours.gamut.black300,
						cursor: 'not-allowed',
						opacity: 1,
					},
				},
			},
		},
	},
]);
