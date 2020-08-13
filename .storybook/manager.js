import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
	theme: themes.dark,
});

export const parameters = {
	chromatic: {
		// Mobile and large table and up
		viewports: [320, 1024],
	},
};
