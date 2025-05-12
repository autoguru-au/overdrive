/* eslint-disable unicorn/prefer-module */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { defineWorkspace } from 'vitest/config';

const dirname =
	// eslint-disable-next-line unicorn/no-negated-condition
	typeof __dirname !== 'undefined'
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineWorkspace([
	'vite.config.ts',
	{
		extends: 'vite.config.ts',
		plugins: [
			// The plugin will run tests for the stories defined in your Storybook config
			// See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
			storybookTest({
				configDir: path.join(dirname, '.storybook'),
				tags: {
					include: ['test'],
					exclude: ['beta', 'skip'],
				},
			}),
		],
		test: {
			name: 'storybook',
			browser: {
				enabled: true,
				headless: true,
				provider: 'playwright',
				instances: [{ browser: 'chromium' }],
			},
			setupFiles: ['.storybook/vitest.setup.ts'],
		},
	},
	{
		extends: 'vite.config.ts',
		test: {
			environment: 'jsdom',
			globals: true,
			name: 'unit-tests',
			setupFiles: ['lib/test/vitest.setup.ts'],
		},
	},
]);
