import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';
import { breakpoints } from '../../themes/makeTheme';

// === Container styles
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

// == Cell styles
export const styledCell = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				hover: 'gray200',
				selected: 'gray900',
				disabled: 'white',
			},
			borderRadius: '2',
			color: {
				initial: 'gray900',
				selected: 'white',
				disabled: 'gray400',
			},
			cursor: {
				initial: 'pointer',
				disabled: 'default',
			},
			display: 'inline-flex',
			fontSize: 'md',
			justifyContent: 'center',
			size: '7',
			...focusOutline,
		}),
	],
});
