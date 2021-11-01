import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../utils/responsiveStyle';

export const root = style({
	maxWidth: '250px',
	...responsiveStyle({
		tablet: {
			maxWidth: '450px',
		},
	}),
});
