import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

import './global.scss';

addDecorator(
	withOptions({
		name: `${require('../package.json').name} Storybook`,
		url: '/',
		hierarchySeparator: /\//,
		hierarchyRootSeparator: /\|/,
		theme: {
			...themes.normal,
			mainBackground: '#f7f9fc',
			mainTextColor: '#212338',
			dimmedTextColor: '#495277',
			successColor: '#36e5aa',
			failColor: '#e85f5b',
			warnColor: '#ffcf3d',
		},
	})
);

addDecorator(withKnobs);

configure(
	() => load(require.context('../src', true, /.?stories.tsx?$/)),
	module
);

function load(...reqs) {
	reqs.forEach(req => req.keys().forEach(fileName => req(fileName)));
}
