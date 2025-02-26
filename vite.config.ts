import path from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { visualizer } from 'rollup-plugin-visualizer';
import {
	configDefaults,
	defineConfig,
	type ViteUserConfig,
} from 'vitest/config';

const analyseOutput = 'dist-analyse';
const isAnalyse = process.env.ANALYSE === 'true';

const analyseConfig: ViteUserConfig = {
	build: {
		lib: {
			entry: path.resolve(import.meta.dirname, 'lib/index.ts'),
			name: 'overdrive',
			formats: ['es'],
		},
		outDir: analyseOutput,
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'@autoguru/icons',
				'@autoguru/utilities',
				'@internationalized/date',
				'@popperjs/core',
				'@vanilla-extract/dynamic',
				'clsx',
				'colord',
				'csstype',
				'react-aria',
				'react-aria-components',
				'react-focus-lock',
				'react-intersection-observer',
				'react-keyed-flatten-children',
				'react-swipeable',
			],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
};

export default defineConfig({
	plugins: [
		vanillaExtractPlugin(),
		isAnalyse
			? visualizer({
					filename: `${analyseOutput}/stats.html`,
					open: true,
					gzipSize: true,
					title: 'Overdrive dependencies',
				})
			: undefined,
	],
	// build: isAnalyse ? analyseConfig.build : undefined,
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			provider: 'v8',
			include: [
				'lib/**/*.{ts,tsx}',
				'!**/*stories*.{ts,tsx}',
				'!**/*.css.ts',
			],
			exclude: [...configDefaults.exclude],
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage',
		},
		setupFiles: ['./lib/test/vitest-setup.ts'],
	},
});
