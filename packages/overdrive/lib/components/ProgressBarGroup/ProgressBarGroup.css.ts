import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const root = style({
	display: 'grid',
	gridGap: `${vars.space['1']} ${vars.space['5']}`,
});
