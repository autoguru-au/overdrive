import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import './global.scss';

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
	options: {
		theme: create({
			base: 'light',
			colorPrimary: '#212338',
			colorSecondary: '#00dd95',
			appBg: '#f7f9fc',
			textColor: '#2e324d',
		}),
		showNav: true,
	},
	backgrounds: [
		{ name: 'light', value: '#f7f9fc' },
		{ name: 'dark', value: '#2e324d' },
	],
});

configure(require.context('../lib', true, /.?stories.tsx$/), module);
