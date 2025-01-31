import { recipe } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';

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
			display: 'flex',
			fontSize: 'md',
			justifyContent: 'center',
			size: '7',
			...focusOutline,
		}),
	],
});
