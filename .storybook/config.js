import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { configureActions } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { tokens as baseThemeTokens } from '../lib/themes/base/tokens';
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
			colorPrimary: baseThemeTokens.colours.gamut.gray700,
			colorSecondary: baseThemeTokens.colours.gamut.green500,
			appBg: baseThemeTokens.colours.gamut.gray100,
			textColor: baseThemeTokens.colours.gamut.gray900,
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

configure(require.context('../lib', true, /.?stories.tsx$/), module);
