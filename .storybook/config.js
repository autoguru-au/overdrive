import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import 'storybook-chromatic';

import './global.scss';

addDecorator(withNotes);
addDecorator(withKnobs);

addParameters({
	options: {
		theme: create({
			base: 'light',
			colorPrimary: '#212338',
			colorSecondary: '#00dd95',
			appBg: '#f7f9fc',
			textColor: '#2e324d',
		}),
	},
	backgrounds: [
		{ name: 'light', value: '#f7f9fc' },
		{ name: 'dark', value: '#2e324d' },
	],
});

configure(
	() => load(require.context('../lib', true, /.?stories.tsx?$/)),
	module
);

function load(...reqs) {
	reqs.forEach(req => req.keys().forEach(fileName => req(fileName)));
}
