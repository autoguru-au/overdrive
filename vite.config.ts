import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [vanillaExtractPlugin()],
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
