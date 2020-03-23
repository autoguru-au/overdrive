import { style } from 'treat';

export const root = style((theme) => ({
	display: 'grid',
	alignItems: 'center',
	gridGap: `${theme.space['1']} ${theme.space['5']}`,
}));
