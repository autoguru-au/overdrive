import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes';
import { breakpoints } from '../../themes/makeTheme';
import { interactionStyle } from '../../utils/css';

// --- Container styles

export const queryContainer = createContainer();
export const queryContainerStyle = style({
	containerName: queryContainer,
	containerType: 'inline-size',
});

export const layoutStyle = style({
	'@container': {
		[`${queryContainer} (min-width: ${breakpoints.tablet})`]: {
			display: 'flex',
			gap: tokens.space[7],
		},
	},
});

export const calendarGridStyle = style({
	width: '100%',
	'@container': {
		[`${queryContainer} (min-width: ${breakpoints.tablet})`]: {
			width: 'auto',
		},
	},
});

export const calendarStyle = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: tokens.space[2],
	padding: `0 ${tokens.space[1]}`,
});

// -- Cell styles


// -- Button styles


export const thStyle = style({
	color: tokens.colours.gamut.gray600,
});

export const tdStyle = style({
	padding: tokens.space[1],
	textAlign: 'center',
});

// -- Heading styles
export const titleStyle = style({
	margin: 0,
	fontWeight: tokens.typography.fontWeight.bold,
});
