import { style } from 'treat';

import { makeResponsiveStyle } from '../../utils';

export const root = style({
	display: 'flex',
	justifyContent: 'flex-start',
	flexWrap: 'wrap',
});

const alignRules = {
	top: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
};

export const align = makeResponsiveStyle(() => alignRules, 'alignItems');
