import { dirname, join } from "path";
const resolve = require('path').resolve;
module.exports = {
    // staticDirs: ['public'],

    features: {
		buildStoriesJson: true,
	},

    stories: ['../packages/overdrive/lib/**/stories.*'],

    addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'./.storybook/vanilla-extract',
		'@storybook/addon-a11y',
	],

    docs: {},

    framework: {
        name: '@storybook/react-webpack5',

        options: {
          legacyRootApi: false
        },
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },

    webpackFinal: async (config) => {
        // Customize Webpack configuration if needed
        return config;
},

// function getAbsolutePath(value) {
//     return dirname(require.resolve(join(value, "package.json")));
};
