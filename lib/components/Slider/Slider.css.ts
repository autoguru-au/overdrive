import { style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const container = sprinkles({
	display: 'flex',
	flexDirection: 'column',
	gap: '3',
	width: 'full',
});

export const label = sprinkles({
	fontSize: '6',
	fontWeight: 'semiBold',
	color: 'normal',
});

export const valueDisplay = sprinkles({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '3',
});

export const valueText = sprinkles({
	fontSize: '7',
	fontWeight: 'semiBold',
	color: 'normal',
});

export const sliderContainer = sprinkles({
	display: 'flex',
	alignItems: 'center',
	gap: '4',
	width: 'full',
});

export const trackContainer = sprinkles({
	position: 'relative',
	width: 'full',
	display: 'flex',
});

export const track = style([
	sprinkles({
		borderRadius: 'pill',
		height: '1',
		position: 'relative',
		width: 'full',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: vars.colours.gamut.gray300,
				selectors: {
					[selectors.disabled]: {
						backgroundColor: vars.colours.gamut.gray200,
						cursor: 'not-allowed',
					},
				},
			},
		},
	},
]);

export const thumb = style([
	sprinkles({
		borderRadius: 'full',
		borderWidth: 'none',
		size: '5',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: vars.colours.gamut.black900,
				cursor: 'pointer',
				position: 'absolute',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				transition: `box-shadow 0.2s ${vars.animation.easing.standard}`,
				selectors: {
					[selectors.hover]: {
						boxShadow: `0 0 0 4px rgba(0, 0, 0, 0.1)`,
					},
					[selectors.focusVisible]: {
						boxShadow: `0 0 0 4px rgba(0, 0, 0, 0.2)`,
					},
					'&[data-dragging]': {
						boxShadow: `0 0 0 4px rgba(0, 0, 0, 0.2)`,
					},
					[selectors.disabled]: {
						backgroundColor: vars.colours.gamut.gray500,
						cursor: 'not-allowed',
					},
				},
			},
		},
	},
	focusOutlineStyle,
]);
