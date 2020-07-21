import { style } from 'treat';

export const root = style((theme) => ({
	display: 'grid',
	gridGap: `${theme.space['1']} ${theme.space['5']}`,
}));
