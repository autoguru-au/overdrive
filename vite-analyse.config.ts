import path from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

const analyseOutput = 'dist-analyse';

export default defineConfig({
	plugins: [
		vanillaExtractPlugin(),
		visualizer({
			filename: `${analyseOutput}/stats.html`,
			open: true,
			gzipSize: true,
			title: 'Overdrive dependencies',
			template: 'flamegraph',
		}),
	],
	build: {
		lib: {
			entry: path.resolve(import.meta.dirname, 'lib/index.ts'),
			name: 'overdrive',
			formats: ['cjs'],
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
});
