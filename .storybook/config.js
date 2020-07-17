import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { configureActions } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { withOverdriveProvider } from './provider';

configureActions({
	depth: 1,
});

addDecorator(withKnobs);
addDecorator(withA11y);

addDecorator(withOverdriveProvider);

addParameters({
	options: {
		theme: create({
			base: 'light',
			colorPrimary: '#484c5f',
			colorSecondary: '#00dd95',
			appBg: '#fafbfc',
			textColor: '#212338',
		}),
		showNav: true,
		enableShortcuts: false,
		storySort: (a, b) => a[1].kind.localeCompare(b[1].kind),
	},
	chromatic: {
		// Mobile and large table and up
		viewports: [320, 1024],
	},
});

configure(
	require.context('../packages/overdrive/lib', true, /.?stories.tsx$/),
	module,
);
