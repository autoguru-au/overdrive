import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import {
	sprinklesInteraction,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { breakpoints } from '../../themes/makeTheme';
import { themeContractVars as tokens } from '../../themes/theme.css';

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
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: tokens.space[2],
	padding: `0 ${tokens.space[1]}`,
});

// -- Cell styles

export const styledCell = recipe({
	base: [
		{
			alignItems: 'center',
			borderRadius: '2',
			display: 'inline-flex',
			fontSize: 'md',
			justifyContent: 'center',
		},
		sprinklesInteraction({
			background: {
				initial: 'white',
				hover: 'gray200',
				selected: 'gray900',
				disabled: 'white',
			},
			color: {
				initial: 'gray900',
				selected: 'white',
				disabled: 'gray400',
			},
			cursor: {
				initial: 'pointer',
				disabled: 'default',
			},
		}),
		sprinklesResponsive({
			size: '7',
		}),
		focusOutlineStyle,
	],
});

// -- Button styles

export const styledButton = recipe({
	base: [
		{
			alignItems: 'center',
			borderRadius: tokens.border.radius[2],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			color: tokens.colours.gamut.gray600,
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
		},
		sprinklesInteraction({
			background: {
				initial: 'white',
				hover: 'gray200',
				disabled: 'white',
			},
			borderColor: { initial: 'gray', disabled: 'light' },
			color: { disabled: 'gray300' },
			cursor: { hover: 'pointer', disabled: 'default' },
		}),
		sprinklesResponsive({
			size: '7',
		}),
		focusOutlineStyle,
	],
});

export const thStyle = style({
	color: tokens.colours.gamut.gray600,
});

export const tdStyle = style({
	padding: tokens.space[1],
	textAlign: 'center',
});

// -- Heading styles

// TODO: refactor to use common typography helper
export const headingStyle = style({
	fontSize: tokens.typography.size[8].fontSize,
	fontWeight: tokens.typography.fontWeight.bold,
	lineHeight: tokens.typography.size[8].lineHeight,
});

export const subheadingStyle = style({
	fontSize: tokens.typography.size[6].fontSize,
	fontWeight: tokens.typography.fontWeight.bold,
	lineHeight: tokens.typography.size[6].lineHeight,
});

export const titleStyle = style({
	fontWeight: tokens.typography.fontWeight.bold,
	margin: 0,
});
