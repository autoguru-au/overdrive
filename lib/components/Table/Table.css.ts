import { style } from '@vanilla-extract/css';

export const root = style({
	alignItems: 'stretch',
	/*
	This is here as our header row _could_ be position: sticky. When this is the
		case our table rows's still need their fancy row hover states.
	 */
	clip: 'rect(0px, auto, auto, 0px)',
	clipPath: 'inset(0)',
	display: 'grid',
	gridGap: '0',
});
