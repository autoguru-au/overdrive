import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { configDefaults, defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [vanillaExtractPlugin()],
	optimizeDeps: {
		include: [
			'@vanilla-extract/sprinkles/createRuntimeSprinkles',
			'@vanilla-extract/recipes/createRuntimeFn',
			'@vitest/coverage-v8/browser',
		],
	},
	test: {
		coverage: {
			provider: 'v8',
			include: [
				'lib/**/*.{ts,tsx}',
				'!**/*stories*.{ts,tsx}',
				'!**/*.css.ts',
				'!lib/components/**/{index,default}.ts',
			],
			exclude: [...configDefaults.exclude],
			reporter: ['lcov', 'json', 'text'],
			reportsDirectory: 'coverage',
		},
		projects: [
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
		],
	},
});
