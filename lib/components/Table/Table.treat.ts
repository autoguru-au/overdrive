import { style } from 'treat';

export const root = style({
	display: 'grid',
	gridGap: '0',
	alignItems: 'stretch',
	/*
	This is here as our header row _could_ be position: sticky. When this is the
		case our table rows's still need their fancy row hover states.
	 */
	clipPath: 'inset(0)',
	clip: 'rect(0px, auto, auto, 0px)',
});
