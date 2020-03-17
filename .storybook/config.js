import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { tokens as baseThemeTokens } from '../lib/themes/base/tokens';

import Wrapper from './Wrapper';

addDecorator(withKnobs);
addDecorator(withA11y);

addDecorator(Wrapper);

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
		storySort([, { id: idA }], [, { id: idB }]) {
			if (idA > idB) return 1;
			if (idB > idA) return -1;
			return 0;
		},
	},
	// TODO: Once we merge, uncomment this
	/*chromatic: {
		viewports: [320, 1001],
	},*/
});

configure(require.context('../lib', true, /.?stories.tsx$/), module);
