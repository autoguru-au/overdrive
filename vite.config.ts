import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [vanillaExtractPlugin()],
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			include: [
				'lib/**/*.{ts,tsx}',
				'!**/*stories*.{ts,tsx}',
				'!**/*.css.ts',
			],
			exclude: [...configDefaults.exclude],
		},
		setupFiles: ['./lib/test/vitest-setup.ts'],
	},
});
