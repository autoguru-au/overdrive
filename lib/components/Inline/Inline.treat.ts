import { style } from 'treat';

import { makeResponsiveStyle } from '../../utils';

const flexShared = style(
	{
		display: 'flex',
	},
	'flexShared',
);

export const root = [
	flexShared,
	style(
		{
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
		},
		'root',
	),
];

const alignRules = {
	top: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
};

export const align = makeResponsiveStyle(() => alignRules, 'alignItems');

export const child = [flexShared];
