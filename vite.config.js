import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
	plugins: [vanillaExtractPlugin()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./lib/test/vitest-setup.ts'],
	},
};
